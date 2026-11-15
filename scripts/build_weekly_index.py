# /// script
# requires-python = ">=3.11"
# dependencies = ["markdown-it-py==4.0.0", "PyYAML==6.0.3", "jieba==0.42.1"]
# ///
"""Index published weekly Markdown; run with `uv run scripts/build_weekly_index.py`.

The default source is this Weekly repository. For another checkout:
    uv run scripts/build_weekly_index.py --source .tmp/weekly
In CI, check out Yalyenea/weekly there before running this command. The same
source content and --as-of date produce identical JSON, without network calls.
"""

from __future__ import annotations

import argparse
from collections import Counter
from datetime import date
import hashlib
import json
import logging
from pathlib import Path
import re
import subprocess
import tomllib
from urllib.parse import parse_qsl, unquote, urlencode, urlsplit, urlunsplit

import jieba
from markdown_it import MarkdownIt
import yaml

ROOT = Path(__file__).resolve().parents[1]
REPOSITORY = "https://github.com/Yalyenea/weekly"
SITE = "https://weekly.yfff.me"
TOPICS = [
    {"id": "ai", "name": "人工智能", "nameEn": "AI & models", "color": "#ba7052"},
    {"id": "research", "name": "研究与学习", "nameEn": "Research & learning", "color": "#65816d"},
    {"id": "code", "name": "编程与工具", "nameEn": "Code & tools", "color": "#697eab"},
    {"id": "design", "name": "设计与创作", "nameEn": "Design & creativity", "color": "#ac7c94"},
    {"id": "apps", "name": "应用与生活", "nameEn": "Apps & everyday", "color": "#9b8b5b"},
    {"id": "web", "name": "网络与阅读", "nameEn": "Web & reading", "color": "#658e94"},
    {"id": "other", "name": "其他链接", "nameEn": "Other links", "color": "#85818a"},
]
STOPWORDS = set("""
a an and are as at be been being by can could did do does each for from has have how
i in into is it its may more most my new no not of on one or our out over own per
so than that the their them there these they this those through to too two up use
used using via was we were what when where which while who why will with without
would you your all also about after before between both but first free get give
like make many much only other read run see some such support supports tool tools
open source project based built simple fast lightweight modern powerful includes
github com www app org https http en cn html index blog io dev new home welcome
open-source collection covering introduces introduction introduces introducing
across problems official guide allows including within helps focus focused
feature features currently early still well made working building based-on
work site page resources online multiple related supporting website discusses
curated reports results projects tasks frontier large explains usage brings
problem similar written upload bar introduces
讨论 问题 工作 运行 发布 覆盖 整理 解释 报告 验证 能力 记录 开放 原来
一个 一种 一款 一些 一起 一次 一套 一组 一位 一篇 一门 一遍 一块 一个个
以及 通过 可以 使用 支持 提供 基于 用于 进行 实现 让其 其中 这个 这些 那些
我们 他们 自己 作者 目前 现在 已经 还有 需要 能够 如何 什么 为什么 不同
相关 更好 更加 可能 主要 同时 直接 介绍 包括 面向 围绕 关于 从而 之后
之前 之间 方式 方面 过程 内容 功能 工具 项目 开源 免费 全新 简单 一个
体验 文章 网站 页面 本地 官方 在线 查看 生成 创建 自动 适合 一个
它们 它的 一个 不用 无需 没有 不是 而是 作为 例如 比如 仍在 目前 目前为
做成 用来 起来 自行 一个 为了 得到 看到 发现 带来 提升 改进 改善
多个 大量 各种 更多 更少 少量 大小 最新 轻量 快速 高效 完整 轻量级
第 周刊 收录 推荐 资源 版本 更新 介绍 一个 对于 因为 所以 如果
""".split())
ALIASES = {
    "agents": "agent", "智能体": "agent", "models": "模型", "model": "模型",
    "llms": "LLM", "llm": "LLM", "ai": "AI", "人工智能": "AI",
    "rust": "Rust", "python": "Python", "macos": "macOS", "gpu": "GPU",
    "ui": "UI", "cli": "CLI", "api": "API", "mcp": "MCP", "rss": "RSS",
    "coding": "编程", "code": "代码", "research": "研究", "design": "设计",
    "browser": "浏览器", "editors": "编辑器", "editor": "编辑器",
    "terminal": "终端", "learning": "学习", "training": "训练",
    "inference": "推理", "memory": "内存", "search": "搜索",
    "论文": "论文", "papers": "论文", "paper": "论文", "claude": "Claude",
    "codex": "Codex", "claude code": "Claude Code", "github": "GitHub",
    "javascript": "JavaScript", "typescript": "TypeScript", "swiftui": "SwiftUI",
    "webgpu": "WebGPU", "webgl": "WebGL", "linux": "Linux", "windows": "Windows",
    "native": "原生", "interactive": "交互", "desktop": "桌面", "web": "网页",
    "openai": "OpenAI", "anthropic": "Anthropic", "mathematics": "数学",
    "mathematical": "数学", "math": "数学", "data": "数据", "image": "图像",
    "language": "语言", "interface": "界面", "system": "系统", "systems": "系统",
    "notes": "笔记", "skill": "Skills", "skills": "Skills", "engineering": "工程",
    "machine": "机器", "library": "库", "platform": "平台", "service": "服务",
    "local": "本地", "apps": "应用", "application": "应用", "applications": "应用",
    "plugin": "插件", "plugins": "插件", "course": "课程", "courses": "课程",
    "architecture": "架构", "optimization": "优化", "learning": "学习",
    "visual": "视觉", "visualization": "可视化", "video": "视频", "files": "文件",
    "file": "文件", "community": "社区", "writing": "写作", "chinese": "中文",
    "development": "开发", "components": "组件", "computer": "计算机",
    "markdown": "Markdown", "text": "文本", "workspace": "工作区",
    "repository": "仓库", "knowledge": "知识", "network": "网络",
    "gemini": "Gemini", "framework": "框架", "reading": "阅读",
    "hardware": "硬件", "reasoning": "推理", "git": "Git", "pdf": "PDF",
    "science": "科学", "proofs": "证明", "chat": "聊天", "gpui": "GPUI",
    "machine-learning": "机器学习", "deep-learning": "深度学习",
    "交互式": "交互", "scaling": "扩展", "motion": "动画", "control": "控制",
}
# Word clouds preserve the language of the source. Only spelling, plural forms,
# and established technical-name casing are shared across language editions.
WORD_ALIASES = {key: value for key, value in ALIASES.items()
                if re.fullmatch(r"[a-z][a-z0-9+#. -]*", key)
                and not re.search(r"[\u3400-\u9fff]", value)}
WORD_ALIASES.update({
    "models": "model", "papers": "paper", "editors": "editor",
    "systems": "system", "files": "file", "plugins": "plugin",
    "courses": "course", "notes": "note", "apps": "application",
    "applications": "application", "components": "component",
    "agents": "agent", "browsers": "browser", "frameworks": "framework",
    "libraries": "library", "networks": "network", "proofs": "proof",
    "llms": "LLM", "tokens": "token", "skills": "Skills",
})


def frontmatter(text: str) -> tuple[dict, str, int]:
    lines = text.splitlines()
    if not lines or lines[0] not in {"+++", "---"}:
        raise ValueError("Weekly issue must start with TOML or YAML front matter")
    end = lines.index(lines[0], 1)
    raw = "\n".join(lines[1:end])
    metadata = tomllib.loads(raw) if lines[0] == "+++" else yaml.safe_load(raw)
    return metadata, "\n".join(lines[end + 1:]), end + 1


def normalized_url(raw: str) -> str | None:
    parts = urlsplit(raw.strip())
    host = (parts.hostname or "").lower().removeprefix("www.").rstrip(".")
    if (parts.scheme not in {"http", "https"} or "." not in host
            or not all(host.split("."))):
        return None
    if host in {"weekly.yfff.me", "blog.yfff.me", "yfff.me"}:
        return None
    path = parts.path.rstrip("/")
    if re.search(r"\.(?:png|jpe?g|gif|webp|svg|avif|ico)$", path, re.I):
        return None
    # GitHub owner/repository names are case-insensitive; fragments and campaigns do not
    # identify different reading entries. Keep all other query parameters.
    if host == "github.com":
        segments = path.split("/")
        path = "/".join(segment.lower() if i <= 2 else segment for i, segment in enumerate(segments))
    query = sorted((k, v) for k, v in parse_qsl(parts.query, keep_blank_values=True)
                   if not k.lower().startswith("utm_") and k.lower() not in
                   {"fbclid", "gclid", "ref_src", "spm"})
    port = f":{parts.port}" if parts.port and parts.port not in {80, 443} else ""
    return urlunsplit(("https", host + port, path, urlencode(query), ""))


def plain(children: list) -> str:
    return re.sub(r"\s+", " ", "".join(
        token.content if token.type in {"text", "code_inline", "html_inline"}
        else " " if token.type in {"softbreak", "hardbreak"} else ""
        for token in children)).strip()


def topic_for(section: str) -> str:
    patterns = [
        ("design", r"设计|创作|交互|字体|排版|渲染|\b(?:design|media|creative|rendering)\b"),
        ("code", r"编程|开发|系统|终端|代码|\b(?:code|development|developer|programming|ides?|terminals?|cli|infra|apis?)\b"),
        ("research", r"数学|科研|研究|学术|学习|论文|课程|文献|\b(?:research|papers?|math(?:ematics|ematical)?|education|learning)\b"),
        ("apps", r"桌面|生活|效率|实用|应用|手机|图床|托管|录屏|翻译|\b(?:macos|utilities|applications?|apps?|life)\b"),
        ("web", r"网络|阅读|浏览器|资讯|信息源|博客|搜索|\b(?:rss|web|browsers?|news|reading)\b"),
        ("ai", r"模型|智能体|推理|\b(?:ai|models?|agents?|machine|claude|codex)\b"),
        ("other", r"其他|\bother\b"),
    ]
    # A project-name subheading inherits its parent chapter. Within a composite
    # heading, the first stated subject wins; no item-level semantic guesswork.
    for heading in reversed(section.lower().split(" › ")):
        matches = [(match.start(), topic) for topic, pattern in patterns
                   if (match := re.search(pattern, heading))]
        if matches:
            return min(matches, key=lambda item: item[0])[1]
    return "other"


def extract_links(body: str):
    tokens = MarkdownIt("commonmark").parse(body)
    section = ""
    heading = False
    heading_level = 0
    headings = {}
    for token in tokens:
        if token.type == "heading_open":
            heading = True
            heading_level = int(token.tag[1:])
        elif token.type == "heading_close":
            heading = False
        elif token.type == "inline":
            children = token.children or []
            if heading:
                headings = {level: value for level, value in headings.items() if level < heading_level}
                headings[heading_level] = plain(children)
                section = " › ".join(headings[level] for level in sorted(headings))
                continue
            description = plain(children)
            found = []
            in_link = False
            for i, child in enumerate(children):
                if child.type == "link_open":
                    in_link = True
                    label = []
                    for following in children[i + 1:]:
                        if following.type == "link_close":
                            break
                        label.append(following)
                    title = plain(label)
                    # Image-only clickable thumbnails are presentation assets.
                    if title:
                        found.append((str(child.attrGet("href")), title))
                elif child.type == "link_close":
                    in_link = False
                elif child.type == "text" and not in_link:
                    for match in re.finditer(r"https?://[^\s<>\[\]，。；、]+", child.content):
                        raw = match.group().rstrip(".,;:!?）)")
                        found.append((raw, unquote(urlsplit(raw).path.rsplit("/", 1)[-1]) or urlsplit(raw).hostname))
            for url, title in found:
                clean = description
                # Keep the adjacent author-written description and other labels,
                # while avoiding a repeated title at the start of every card.
                if clean.startswith(title):
                    clean = clean[len(title):].lstrip(" ：:·—-|")
                yield url, title, clean, section, (token.map or [0])[0] + 1


def terms(text: str, language: str = "canonical") -> set[str]:
    # Segment Chinese and English separately so Chinese text adjacent to an
    # English brand never becomes an artificial combined word.
    text = re.sub(r"https?://\S+", " ", text)
    candidates = []
    pattern = r"[A-Za-z][A-Za-z0-9+#.-]*" if language == "en" else r"[\u3400-\u9fff]+|[A-Za-z][A-Za-z0-9+#.-]*"
    for chunk in re.findall(pattern, text):
        candidates.extend(jieba.lcut(chunk, HMM=False) if re.search(r"[\u3400-\u9fff]", chunk) else [chunk])
    result = set()
    for value in candidates:
        value = value.strip(".-").lower()
        if value in STOPWORDS or len(value) < 2 or len(value) > 28:
            continue
        if not re.search(r"[\u3400-\u9fff]", value) and not re.fullmatch(r"[a-z][a-z0-9+#.-]*", value):
            continue
        aliases = ALIASES if language == "canonical" else WORD_ALIASES
        result.add(aliases.get(value, value))
    return result


def build(source: Path, as_of: date) -> dict:
    links, issues = {}, {}
    revision = subprocess.check_output(["git", "-C", str(source), "rev-parse", "HEAD"], text=True).strip()
    digest = hashlib.sha256()
    files = sorted(source.glob("content/*/weekly/week-*.md"),
                   key=lambda p: (int(re.search(r"week-(\d+)", p.name)[1]), p.parts[-3] != "cn"))
    for path in files:
        text = path.read_text()
        metadata, body, offset = frontmatter(text)
        published = str(metadata["date"])[:10]
        if metadata.get("draft", False) or date.fromisoformat(published) > as_of:
            continue
        number = int(re.search(r"week-(\d+)", path.name)[1])
        language = "zh" if path.parts[-3] == "cn" else "en"
        relative = path.relative_to(source).as_posix()
        digest.update(relative.encode() + b"\0" + text.encode())
        issue = issues.setdefault(number, {"number": number, "date": published,
                                            "title": metadata["title"], "url": f"{SITE}/week-{number}/"})
        if language == "en":
            issue["titleEn"] = metadata["title"]
        for raw_url, title, description, section, line in extract_links(body):
            canonical = normalized_url(raw_url)
            if not canonical:
                continue
            link = links.setdefault(canonical, {
                "id": hashlib.sha256(canonical.encode()).hexdigest()[:12],
                "url": raw_url, "title": title, "description": description,
                "domain": urlsplit(canonical).hostname, "topic": topic_for(section),
                "occurrences": [],
                "keywordsCn": set(), "keywordsEn": set(),
            })
            # Count actual copy from each edition, never a translation of the
            # canonical graph terms or a fallback to the other edition's text.
            field = "keywordsCn" if language == "zh" else "keywordsEn"
            link[field].update(terms(f"{title} {description}", "cn" if language == "zh" else "en"))
            # Read cn before en, keeping original author copy as the primary text.
            if language == "en" and "titleEn" not in link:
                link["titleEn"], link["descriptionEn"] = title, description
            occurrence = {"issue": number, "date": published, "language": language,
                          "section": section, "source": f"{REPOSITORY}/blob/main/{relative}#L{line + offset}",
                          "url": f"{SITE}/{'en/' if language == 'en' else ''}week-{number}/"}
            if not any(o["issue"] == number and o["language"] == language for o in link["occurrences"]):
                link["occurrences"].append(occurrence)
    if not links:
        raise SystemExit(f"No published external links found in {source}")
    entries = list(links.values())
    frequency = Counter()
    for link in entries:
        link["keywords"] = sorted(terms(" ".join(str(link.get(key, "")) for key in
                                           ["title", "description", "titleEn", "descriptionEn"])))
        frequency.update(link["keywords"])
    canonical_words = {word for word, count in frequency.most_common(160) if count >= 3}
    for link in entries:
        link["keywords"] = [word for word in link["keywords"] if word in canonical_words]
    words = {}
    for language, field in [("cn", "keywordsCn"), ("en", "keywordsEn")]:
        frequency = Counter()
        for link in entries:
            link[field] = sorted(link[field])
            frequency.update(link[field])
        words[language] = [{"text": word, "count": count}
                           for word, count in frequency.most_common(160) if count >= 3]
        visible_words = {word["text"] for word in words[language]}
        for link in entries:
            link[field] = [word for word in link[field] if word in visible_words]
    topic_counts = Counter(link["topic"] for link in entries)
    topics = [dict(topic, count=topic_counts[topic["id"]]) for topic in TOPICS]
    return {
        "meta": {"version": 2, "repository": REPOSITORY, "sourceRevision": revision,
                 "contentDigest": digest.hexdigest(), "asOf": as_of.isoformat(),
                 "updated": max(issue["date"] for issue in issues.values()),
                 "issueCount": len(issues), "linkCount": len(entries),
                 "occurrenceCount": sum(len(link["occurrences"]) for link in entries),
                 "wordCount": {language: len(items) for language, items in words.items()},
                 "wordMetric": "unique links containing the term in that language edition",
                 "topicMethod": "original weekly chapter headings"},
        "issues": sorted(issues.values(), key=lambda issue: issue["number"], reverse=True),
        "topics": topics, "words": words,
        "links": sorted(entries, key=lambda link: (-max(o["issue"] for o in link["occurrences"]), link["id"])),
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, default=ROOT)
    parser.add_argument("--output", type=Path, default=ROOT / "static/weekly-links.json")
    parser.add_argument("--as-of", type=date.fromisoformat, default=date.today())
    args = parser.parse_args()
    jieba.setLogLevel(logging.WARNING)
    # Jieba's dictionary cache belongs with task intermediates, not the home dir.
    cache = ROOT / ".tmp"
    cache.mkdir(exist_ok=True)
    jieba.dt.tmp_dir = str(cache)
    result = build(args.source.resolve(), args.as_of)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(result, ensure_ascii=False, separators=(",", ":")) + "\n")
    word_counts = "/".join(str(len(result["words"][language])) for language in ["cn", "en"])
    print(f"{result['meta']['issueCount']} issues · {result['meta']['linkCount']} links · {word_counts} cn/en terms → {args.output}")


if __name__ == "__main__":
    main()
