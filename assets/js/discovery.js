(() => {
  'use strict';
  const root = document.getElementById('discovery');
  if (!root) return;
  const en = root.dataset.language === 'en';
  const label = (cn, english) => en ? english : cn;
  const $ = (id) => document.getElementById(id);
  const canvas = $('link-map');
  const ctx = canvas.getContext('2d');
  const surface = root.querySelector('.discovery-surface');
  const cloud = $('word-cloud');
  const search = $('link-search');
  const preview = $('link-preview');
  const message = $('discovery-message');
  const groupToggle = $('group-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointers = new Map();
  const state = { view: 'map', grouped: false, query: '', term: '', selected: null, hover: null, scale: 1, x: 0, y: 0 };
  let data, nodes = [], visible = [], topics = [], palette = [];
  let width = 0, height = 0, frame = 0, drag, searchTimer;
  let groupProgress = 0, transition;
  const topicColor = (topic) => palette[topics.findIndex((item) => item.id === topic) % palette.length] || palette[0];
  const topicName = (topic) => en ? topic.nameEn : topic.name;
  const title = (node) => en && node.titleEn ? node.titleEn : node.title;
  const description = (node) => en && node.descriptionEn ? node.descriptionEn : node.description;
  const normalize = (text) => text.toLocaleLowerCase().normalize('NFKC');
  function hash(text) {
    let value = 2166136261;
    for (let i = 0; i < text.length; i++) value = Math.imul(value ^ text.charCodeAt(i), 16777619);
    // Mix the final bits so adjacent candidate seeds do not trace similar arcs.
    value = Math.imul(value ^ (value >>> 16), 0x7feb352d);
    value = Math.imul(value ^ (value >>> 15), 0x846ca68b);
    value ^= value >>> 16;
    return (value >>> 0) / 4294967296;
  }
  function colors() {
    const style = getComputedStyle(document.documentElement);
    const dark = document.documentElement.dataset.theme === 'dark';
    palette = topics.map((topic) => {
      const hex = parseInt(topic.color.slice(1), 16);
      const channels = [hex >> 16, (hex >> 8) & 255, hex & 255];
      return `rgb(${channels.map((value) => dark ? Math.round(value * .7 + 255 * .3) : value).join(',')})`;
    });
    return style;
  }
  let theme;
  function scheduleDraw() {
    if (state.view !== 'map' || frame) return;
    frame = requestAnimationFrame((time) => {
      frame = 0;
      advanceLayout(time);
      draw();
      if (transition) scheduleDraw();
    });
  }
  function screen(node) { return { x: node.x * state.scale + state.x, y: node.y * state.scale + state.y }; }
  function applyLayout() {
    nodes.forEach((node) => {
      node.x = node.mergedX + (node.groupedX - node.mergedX) * groupProgress;
      node.y = node.mergedY + (node.groupedY - node.mergedY) * groupProgress;
    });
  }
  function advanceLayout(time) {
    if (!transition) return;
    const progress = Math.min(1, (time - transition.started) / transition.duration);
    const eased = progress * progress * (3 - 2 * progress);
    groupProgress = transition.from + (transition.to - transition.from) * eased;
    applyLayout();
    if (transition.cameraFrom) ['scale', 'x', 'y'].forEach((key) => {
      state[key] = transition.cameraFrom[key] + (transition.cameraTo[key] - transition.cameraFrom[key]) * eased;
    });
    if (progress === 1) transition = null;
  }
  function finishTransition() {
    if (transition?.cameraFrom) Object.assign(state, transition.cameraTo);
    transition = null;
    groupProgress = state.grouped ? 1 : 0;
    applyLayout();
    if (frame) { cancelAnimationFrame(frame); frame = 0; }
  }
  function cameraFor(grouped) {
    const points = visible.length ? visible : nodes;
    if (points.length === nodes.length) return { scale: 1, x: width / 2, y: (height + 36) / 2 };
    const x = grouped ? 'groupedX' : 'mergedX', y = grouped ? 'groupedY' : 'mergedY';
    const left = Math.min(...points.map((point) => point[x]));
    const right = Math.max(...points.map((point) => point[x]));
    const top = Math.min(...points.map((point) => point[y]));
    const bottom = Math.max(...points.map((point) => point[y]));
    const scale = Math.min((width - 48) / Math.max(1, right - left), (height - 84) / Math.max(1, bottom - top), 2.6);
    return { scale, x: width / 2 - (left + right) / 2 * scale, y: (height + 36) / 2 - (top + bottom) / 2 * scale };
  }
  function fit() {
    if (!nodes.length || !width || !height) return;
    finishTransition();
    Object.assign(state, cameraFor(state.grouped));
    scheduleDraw();
  }
  function updateGroupToggle() {
    groupToggle.hidden = state.view !== 'map';
    groupToggle.setAttribute('aria-pressed', String(state.grouped));
    groupToggle.textContent = state.grouped ? label('合拢', 'Merge') : label('分组', 'Group');
    groupToggle.setAttribute('aria-label', state.grouped ? label('合拢为一个圆', 'Merge into one circle') : label('按分类分组', 'Group by topic'));
  }
  function toggleGrouping() {
    if (!data || !nodes.length) return;
    state.grouped = !state.grouped;
    updateGroupToggle();
    clearPreview();
    if (reducedMotion.matches) { fit(); return; }
    // Keep the current position and camera when reversing an unfinished transition.
    const to = state.grouped ? 1 : 0;
    transition = { from: groupProgress, to, started: performance.now(), duration: 720 * Math.max(.25, Math.abs(to - groupProgress)),
      cameraFrom: { scale: state.scale, x: state.x, y: state.y }, cameraTo: cameraFor(state.grouped) };
    scheduleDraw();
  }
  function resize() {
    const box = canvas.getBoundingClientRect();
    if (!box.width) return;
    if (width === box.width && height === box.height) { scheduleDraw(); return; }
    finishTransition();
    width = box.width; height = box.height;
    projectSphere(width, height);
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    fit();
  }
  function projectSphere(availableWidth, availableHeight) {
    if (!availableWidth || !availableHeight) return;
    const w = availableWidth - 50, h = availableHeight - 86;
    const weights = topics.map((topic) => Math.sqrt(topic.count));
    let low = 0, high = Math.min(w, h) / (2 * Math.max(...weights)), packed;
    // Solve the seven-circle layout once per resize. Increasing the shared radius
    // preserves count-proportional areas while finding a compact, staggered packing.
    for (let step = 0; step < 12; step++) {
      const scale = (low + high) / 2;
      let solution;
      for (let attempt = 0; attempt < 10 && !solution; attempt++) {
        const circles = weights.map((weight, i) => {
          const r = weight * scale;
          return { r,
            x: attempt === 0 && packed ? packed[i].x : r + hash(`circle:${attempt}:${i}:x`) * (w - 2 * r),
            y: attempt === 0 && packed ? packed[i].y : r + hash(`circle:${attempt}:${i}:y`) * (h - 2 * r) };
        });
        for (let iteration = 0; iteration < 500; iteration++) {
          let overlap = 0;
          circles.forEach((circle) => {
            circle.x = Math.max(circle.r, Math.min(w - circle.r, circle.x));
            circle.y = Math.max(circle.r, Math.min(h - circle.r, circle.y));
          });
          for (let i = 0; i < circles.length; i++) for (let j = i + 1; j < circles.length; j++) {
            const a = circles[i], b = circles[j], dx = b.x - a.x, dy = b.y - a.y;
            const distance = Math.hypot(dx, dy), missing = a.r + b.r + 16.2 - distance;
            if (missing <= 0) continue;
            overlap = Math.max(overlap, missing);
            const move = missing * .51 / distance;
            a.x -= dx * move; a.y -= dy * move;
            b.x += dx * move; b.y += dy * move;
          }
          if (overlap < .005 && circles.every((circle) => circle.x >= circle.r - .005 && circle.x <= w - circle.r + .005 && circle.y >= circle.r - .005 && circle.y <= h - circle.r + .005)) {
            solution = circles; break;
          }
        }
      }
      if (solution) { low = scale; packed = solution; }
      else high = scale;
    }
    const left = Math.min(...packed.map((circle) => circle.x - circle.r));
    const right = Math.max(...packed.map((circle) => circle.x + circle.r));
    const top = Math.min(...packed.map((circle) => circle.y - circle.r));
    const bottom = Math.max(...packed.map((circle) => circle.y + circle.r));
    topics.forEach((topic, i) => {
      topic.x = packed[i].x - (left + right) / 2;
      topic.y = packed[i].y - (top + bottom) / 2;
      topic.radius = packed[i].r;
    });
    const byTopic = new Map(topics.map((topic) => [topic.id, topic]));
    const mergedRadius = Math.max(availableWidth * .51, availableHeight * .64);
    nodes.forEach((node) => {
      const topic = byTopic.get(node.topic);
      node.mergedX = node.msx * mergedRadius;
      node.mergedY = node.msy * mergedRadius;
      node.groupedX = topic.x + node.sx * topic.radius;
      node.groupedY = topic.y + node.sy * topic.radius;
    });
    applyLayout();
  }
  function sampleDisc(links) {
    const placed = [];
    links.forEach((link) => {
      // Best-candidate sampling fills the centre without rows or concentric rings.
      let point, clearance = -1;
      for (let candidate = 0; candidate < 8; candidate++) {
        const angle = hash(`angle:${link.id}:${candidate}`) * Math.PI * 2;
        const radius = Math.sqrt(hash(`radius:${link.id}:${candidate}`)) * .99;
        const sx = Math.cos(angle) * radius, sy = Math.sin(angle) * radius;
        let nearest = Infinity;
        for (const other of placed) nearest = Math.min(nearest, (sx - other.sx) ** 2 + (sy - other.sy) ** 2);
        if (nearest > clearance) { point = { sx, sy }; clearance = nearest; }
      }
      placed.push(point);
    });
    return placed;
  }
  function buildMap() {
    const samples = sampleDisc(data.links);
    const merged = new Map(data.links.map((link, i) => [link.id, samples[i]]));
    nodes = topics.flatMap((topic) => {
      const links = data.links.filter((link) => link.topic === topic.id);
      const grouped = sampleDisc(links);
      topic.count = links.length;
      return links.map((link, i) => {
        const point = grouped[i], origin = merged.get(link.id);
        const chord = Math.sqrt(1 - origin.sx ** 2 - origin.sy ** 2);
        const sz = (hash(`depth:${link.id}`) * 2 - 1) * chord;
        return { ...link, x: 0, y: 0, ...point, msx: origin.sx, msy: origin.sy, sz,
          depth: (sz + 1) / 2, related: [],
          matches: normalize([link.title, link.titleEn, link.description, link.descriptionEn, link.domain, ...(link.keywords || [])].filter(Boolean).join(' ')) };
      });
    }).sort((a, b) => a.sz - b.sz);
    const box = canvas.getBoundingClientRect();
    projectSphere(box.width, box.height);
    // Associations use only recorded domains and keywords, weighted toward more specific matches.
    const groups = new Map();
    nodes.forEach((node) => {
      node.relationKeys = [...new Set([
        ...(node.domain ? [`domain:${normalize(node.domain)}`] : []),
        ...(node.keywords || []).filter(Boolean).map((word) => `word:${normalize(word)}`),
      ])];
      node.relationKeys.forEach((key) => {
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(node);
      });
    });
    nodes.forEach((node) => {
      const scores = new Map();
      node.relationKeys.forEach((key) => {
        const members = groups.get(key);
        const weight = (key.startsWith('domain:') ? 2 : 1) / Math.sqrt(members.length);
        members.forEach((other) => {
          if (other !== node) scores.set(other, (scores.get(other) || 0) + weight);
        });
      });
      node.related = [...scores].sort((a, b) => b[1] - a[1]).slice(0, 12).map(([other]) => other);
      delete node.relationKeys;
    });
  }
  function draw() {
    if (state.view !== 'map' || !width) return;
    ctx.clearRect(0, 0, width, height);
    const active = new Set(visible.map((node) => node.id));
    const focused = state.hover || state.selected;
    const related = new Set(focused?.related.filter((node) => active.has(node.id)).map((node) => node.id) || []);
    if (focused && active.has(focused.id)) {
      const p = screen(focused);
      ctx.lineWidth = .7; ctx.globalAlpha = .28;
      ctx.strokeStyle = topicColor(focused.topic);
      focused.related.forEach((node) => {
        if (!active.has(node.id)) return;
        const q = screen(node);
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      });
    }
    visible.forEach((node) => {
      const p = screen(node);
      if (p.x < -15 || p.x > width + 15 || p.y < -15 || p.y > height + 15) return;
      const selected = state.selected?.id === node.id;
      const hovered = state.hover?.id === node.id;
      const connected = related.has(node.id);
      const pointSize = Math.max(1.2, Math.min(4, (1.7 + node.depth * 1.2) * Math.sqrt(state.scale)));
      const radius = selected ? 4.3 : hovered ? 3.8 : connected ? Math.max(2.8, pointSize) : pointSize;
      const depthAlpha = .42 + .42 * node.depth;
      ctx.globalAlpha = selected || hovered || connected ? .95 : depthAlpha * (focused ? .45 : 1);
      ctx.fillStyle = topicColor(node.topic);
      ctx.beginPath(); ctx.arc(p.x, p.y, radius, 0, Math.PI * 2); ctx.fill();
      if (selected || hovered) {
        ctx.globalAlpha = .5; ctx.lineWidth = 1;
        ctx.strokeStyle = ctx.fillStyle; ctx.beginPath(); ctx.arc(p.x, p.y, radius + 5, 0, Math.PI * 2); ctx.stroke();
      }
    });
    ctx.globalAlpha = 1;
    if (groupProgress > 0 && visible.length === nodes.length) {
      // Small names identify the regions without adding panels or drawing boundaries.
      ctx.font = `${width < 600 ? 11 : 12}px ${theme.getPropertyValue('--font-body').trim()}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.lineWidth = 4;
      ctx.lineJoin = 'round';
      ctx.strokeStyle = theme.getPropertyValue('--bg-color').trim();
      ctx.fillStyle = theme.getPropertyValue('--text-color').trim();
      topics.forEach((topic) => {
        const p = screen(topic);
        if (p.x < 20 || p.x > width - 20 || p.y < 68 || p.y > height - 28) return;
        ctx.globalAlpha = groupProgress * (focused && focused.topic !== topic.id ? .3 : .8);
        ctx.strokeText(topicName(topic), p.x, p.y);
        ctx.fillText(topicName(topic), p.x, p.y);
      });
      ctx.globalAlpha = 1;
    }
  }
  function showMessage(text) { message.textContent = text; message.hidden = !text; }
  function filter() {
    const query = normalize(state.query.trim());
    visible = nodes.filter((node) => (!state.term || node.cloudKeywords.includes(state.term)) && (!query || node.matches.includes(query)));
    $('visible-count').textContent = label(`${visible.length} / ${nodes.length} 条链接`, `${visible.length} / ${nodes.length} links`);
    showMessage(visible.length ? '' : label('没有匹配的链接', 'No links found'));
    clearPreview();
    if (state.view === 'cloud') renderCloud();
    fit();
  }
  function setView(view) {
    finishTransition();
    state.view = view;
    updateGroupToggle();
    root.querySelectorAll('[data-view]').forEach((button) => button.setAttribute('aria-pressed', button.dataset.view === view));
    ['map', 'cloud'].forEach((name) => { $(`${name}-view`).hidden = name !== view; });
    clearPreview();
    if (view === 'map') resize();
    if (view === 'cloud') renderCloud();
  }
  function renderCloud() {
    cloud.replaceChildren();
    const allowed = new Set(visible.map((node) => node.id));
    const words = data.words.map((word) => {
      const matching = word.linkIds.filter((id) => allowed.has(id));
      return { ...word, count: matching.length };
    }).filter((word) => word.count > 0).sort((a, b) => b.count - a.count);
    const w = cloud.clientWidth, h = cloud.clientHeight;
    if (!w || !words.length) return;
    const rectangles = [], max = words[0].count, min = words.at(-1).count;
    const baseSize = (word) => {
      const weight = (Math.sqrt(word.count) - Math.sqrt(min)) / (Math.sqrt(max) - Math.sqrt(min) || 1);
      return (w < 500 ? 14 : 18) + weight * (w < 500 ? 27 : 46);
    };
    // Measure the actual edition's words: English labels need more room than Chinese labels.
    const family = getComputedStyle(cloud).fontFamily;
    ctx.save();
    const textArea = words.reduce((area, word) => {
      const size = baseSize(word);
      ctx.font = `${size}px ${family}`;
      return area + (ctx.measureText(word.text).width + 20) * (size * 1.1 + 12);
    }, 0);
    ctx.restore();
    const fontScale = Math.min(1.1, Math.sqrt(w * h * .44 / textArea));
    words.forEach((word, i) => {
      const button = document.createElement('button');
      button.type = 'button'; button.textContent = word.text;
      button.style.fontSize = `${Math.max(14, Math.round(baseSize(word) * fontScale))}px`;
      button.style.color = palette[i % palette.length];
      button.setAttribute('aria-label', label(`${word.text}，${word.count} 条链接`, `${word.text}, ${word.count} links`));
      cloud.append(button);
      const bw = button.offsetWidth + 8, bh = button.offsetHeight + 6;
      let placement;
      for (let step = 0; step < 1800; step++) {
        const angle = step * .27 + i * .35, r = step * .24;
        const x = w / 2 + Math.cos(angle) * r * 1.55 - bw / 2;
        const y = (h - 35) / 2 + Math.sin(angle) * r * .9 - bh / 2;
        if (x < 18 || x + bw > w - 18 || y < 24 || y + bh > h - 55) continue;
        if (rectangles.some((box) => x < box.x + box.w && x + bw > box.x && y < box.y + box.h && y + bh > box.y)) continue;
        placement = { x, y, w: bw, h: bh }; break;
      }
      if (!placement) { button.remove(); return; }
      rectangles.push({ ...placement, button }); button.style.left = `${placement.x}px`; button.style.top = `${placement.y}px`;
      button.addEventListener('click', () => {
        state.term = word.text; state.query = ''; search.value = word.text; setView('map'); filter(); canvas.focus({ preventScroll: true });
      });
    });
    // Fit the packed words to the whole surface while preserving their relative sizes and gaps.
    if (rectangles.length) {
      const left = Math.min(...rectangles.map((box) => box.x));
      const top = Math.min(...rectangles.map((box) => box.y));
      const packedWidth = Math.max(...rectangles.map((box) => box.x + box.w)) - left;
      const packedHeight = Math.max(...rectangles.map((box) => box.y + box.h)) - top;
      const scale = Math.min(1.4, (w - 32) / packedWidth, (h - 70) / packedHeight);
      rectangles.forEach((box) => {
        box.button.style.left = `${(w - packedWidth * scale) / 2 + (box.x - left) * scale}px`;
        box.button.style.top = `${(h - 40 - packedHeight * scale) / 2 + (box.y - top) * scale}px`;
        box.button.style.transformOrigin = 'top left';
        box.button.style.transform = `scale(${scale})`;
      });
    }
  }
  function clearPreview() {
    state.selected = null; state.hover = null; preview.hidden = true; scheduleDraw();
  }
  function renderPreview(node) {
    preview.hidden = !node;
    if (!node) return;
    $('preview-title').textContent = title(node);
    $('preview-description').textContent = description(node);
    $('preview-domain').textContent = `${node.domain} · ${topicName(topics.find((topic) => topic.id === node.topic))}`;
  }
  function select(node, open = false) {
    state.selected = node; renderPreview(node); scheduleDraw();
    if (open) window.open(node.url, '_blank', 'noopener,noreferrer');
  }
  function reset() {
    clearTimeout(searchTimer); state.query = ''; state.term = ''; search.value = ''; filter();
  }
  function hit(x, y) {
    let closest = null, distance = 13 * 13;
    visible.forEach((node) => {
      const p = screen(node), d = (p.x - x) ** 2 + (p.y - y) ** 2;
      if (d < distance) { closest = node; distance = d; }
    });
    return closest;
  }
  function zoom(multiplier, x = width / 2, y = height / 2) {
    if (transition) transition.cameraFrom = null;
    const next = Math.max(.25, Math.min(8, state.scale * multiplier));
    const ratio = next / state.scale;
    state.x = x - (x - state.x) * ratio; state.y = y - (y - state.y) * ratio; state.scale = next;
    state.hover = null; renderPreview(state.selected); scheduleDraw();
  }
  function local(event) { const box = canvas.getBoundingClientRect(); return { x: event.clientX - box.left, y: event.clientY - box.top }; }
  canvas.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    if (transition) transition.cameraFrom = null;
    clearPreview();
    const p = local(event); pointers.set(event.pointerId, p); canvas.setPointerCapture(event.pointerId);
    drag = { x: p.x, y: p.y, moved: false }; canvas.classList.add('is-dragging');
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      drag.pinch = Math.hypot(a.x - b.x, a.y - b.y);
    }
  });
  canvas.addEventListener('pointermove', (event) => {
    const p = local(event);
    if (pointers.has(event.pointerId)) {
      const old = pointers.get(event.pointerId); pointers.set(event.pointerId, p);
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()], distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (drag.pinch) zoom(distance / drag.pinch, (a.x + b.x) / 2, (a.y + b.y) / 2);
        drag.pinch = distance; drag.moved = true;
      } else {
        state.x += p.x - old.x; state.y += p.y - old.y;
        if (Math.hypot(p.x - drag.x, p.y - drag.y) > 4) drag.moved = true;
      }
      preview.hidden = true; scheduleDraw(); return;
    }
    state.hover = hit(p.x, p.y); canvas.style.cursor = state.hover ? 'pointer' : 'grab';
    renderPreview(state.hover || state.selected);
    scheduleDraw();
  });
  function endPointer(event) {
    const p = local(event), moved = drag?.moved;
    pointers.delete(event.pointerId);
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    if (event.type === 'pointerup' && !moved) {
      const node = hit(p.x, p.y); if (node) select(node, true); else clearPreview();
    }
    if (!pointers.size) { drag = null; canvas.classList.remove('is-dragging'); }
    else { const remaining = [...pointers.values()][0]; drag = { ...remaining, moved: true }; }
  }
  canvas.addEventListener('pointerup', endPointer); canvas.addEventListener('pointercancel', endPointer);
  canvas.addEventListener('pointerleave', () => { state.hover = null; renderPreview(state.selected); scheduleDraw(); });
  canvas.addEventListener('wheel', (event) => { event.preventDefault(); const p = local(event); zoom(Math.exp(-event.deltaY * .0015), p.x, p.y); }, { passive: false });
  canvas.addEventListener('keydown', (event) => {
    if (transition) transition.cameraFrom = null;
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', 'Escape', '+', '-', '=', '0'].includes(event.key)) event.preventDefault();
    if (event.key === 'Escape') reset();
    else if (event.key === '+' || event.key === '=') zoom(1.3);
    else if (event.key === '-') zoom(1 / 1.3);
    else if (event.key === '0') fit();
    else if (event.key === 'Enter' && state.selected) select(state.selected, true);
    else if (event.key.startsWith('Arrow') && visible.length) {
      const current = visible.findIndex((node) => node.id === state.selected?.id);
      const step = ['ArrowLeft', 'ArrowUp'].includes(event.key) ? -1 : 1;
      const node = visible[(current + step + visible.length) % visible.length];
      const p = screen(node);
      if (p.x < 30 || p.x > width - 30 || p.y < 30 || p.y > height - 50) { state.x = width / 2 - node.x * state.scale; state.y = height / 2 - node.y * state.scale; }
      select(node);
    }
  });
  root.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => { if (data) setView(button.dataset.view); }));
  groupToggle.addEventListener('click', toggleGrouping);
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches && transition) fit(); });
  search.addEventListener('input', () => { clearTimeout(searchTimer); searchTimer = setTimeout(() => { if (data) { state.term = ''; state.query = search.value; filter(); } }, 140); });
  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(event.target.tagName) && !event.target.isContentEditable) {
      event.preventDefault(); search.focus();
    } else if (event.key === 'Escape' && event.target === search) {
      event.preventDefault(); if (data) reset(); search.blur();
    }
  });
  new ResizeObserver(() => { if (!data) return; if (state.view === 'map') resize(); if (state.view === 'cloud') renderCloud(); }).observe(surface);
  new MutationObserver(() => { theme = colors(); scheduleDraw(); if (data && state.view === 'cloud') renderCloud(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  async function init() {
    try {
      const response = await fetch(root.dataset.index);
      if (!response.ok) throw new Error(`Weekly index: HTTP ${response.status}`);
      data = await response.json(); topics = data.topics.map((topic) => ({ ...topic })); theme = colors();
      data.words = data.words[en ? 'en' : 'cn'];
      data.links.forEach((link) => { link.cloudKeywords = en ? link.keywordsEn : link.keywordsCn; });
      // The index keeps keywords on links; derive the reverse index once for cloud filtering.
      data.words.forEach((word) => { word.linkIds = data.links.filter((link) => link.cloudKeywords.includes(word.text)).map((link) => link.id); });
      buildMap();
      groupToggle.disabled = false;
      updateGroupToggle();
      state.query = search.value; surface.setAttribute('aria-busy', 'false'); resize(); filter();
    } catch (error) {
      surface.setAttribute('aria-busy', 'false');
      showMessage(label('加载失败，请刷新重试。', 'Could not load links. Refresh to retry.'));
      console.error(error);
    }
  }
  init();
})();
