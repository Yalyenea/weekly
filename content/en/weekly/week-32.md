---
title: Weekly 32
date: '2026-11-07'
draft: false
slug: week-32
math: false
translationKey: weekly-32
obsidianSource: pages/07-Personal/Blog/Weekly/Week-32.md
sourceDigest: 855c34bf43d1b6b7f98f2ba72c79a6fa75777aed6c94e626f6a163c26f160615
summary: AI research and agent tools, new results in math and formalization, native
  UI projects, plus a batch of interaction design and desktop apps.
---

### AI / Research / Perspectives

[Some Memories of Early Anthropic](https://nothinghuman.substack.com/p/some-memories-of-early-anthropic): early member Ivan Vendrov's recollections of Anthropic's beginnings.

[Scaling Git at OpenAI](https://openai.com/index/scaling-git-at-openai/): OpenAI on how it scaled Git and the surrounding toolchain for its internal code size.

[Accelerating engineering for the physical world](https://openai.com/index/accelerating-engineering-for-the-physical-world/): OpenAI on using models to speed up mechanical, electrical, and end-to-end system design: internal teams use Codex/ChatGPT to edit CAD, produce manufacturing drawings, and set up simulations, and GPT-6 Astra designed a device that talks to Codex with no direct human edits.

[Investigating vault particles with Claude](https://www.anthropic.com/research/investigating-vault-particles-with-claude): a new result from Anthropic's biology lab: the first 3D structure of a vault particle found in prokaryotic cells.

[The components of agent memory](https://www.anthropic.com/research/components-of-agent-memory): Anthropic on what agent memory is made of: the model must decide what is worth remembering before it knows what comes next, and a "dreaming" mechanism helps it organize memory and correct mistakes.

[How to Train a Swarm](https://www.gr.inc/blog/how-to-train-a-swarm): General Reasoning on training agent swarms with RL: after OpenAI used a swarm to produce a solution to the Navier–Stokes Millennium Problem in 88 hours — and agents coordinated a cyberattack on an unauthorized message board — public work on swarm training remains scarce.

[OpenRUA](https://openrua.ai/uni-robot-agent): a unified harness for robot-use agents with open models: shared tools and execution protocols across environments and robots, with Qwen surpassing the published Astra–RoboProbe baseline on RoboDojo (31.39 vs 28.97).

[Introducing Inkling 2 Small](https://thinkingmachines.ai/news/inkling-2-small/): Thinking Machines Lab releases the second-generation Inkling model.

[Beam Model Technical Report](https://reflection.ai/documents/beam-model-tech-report): Reflection AI's technical report on the Beam model.

[I Tried Every LLM Architecture Change since 2020](https://x.com/nv_pavlichenko/status/2116154049217089946): Nikita Pavlichenko hands-on tests every LLM architecture change since 2020.

[Qwen, Minus the E](https://kevin-wu.ca/blog/qwn/): Kevin Wu fine-tunes Qwen3-1.7B on a 16 GB GPU with SFT + RL to answer prompts without using the letter e — hard because the model reads tokens, not characters.

[Lean Verified Tokenizers](https://srush.github.io/verified-tokenizer/): Sasha Rush's formally verified tokenizer in Lean.

[The Jacobian Lens, Explained](https://butanium.github.io/blog/jacobian-lens-explainer/) · [Sida Liu's notes](https://liusida.com/research-notes/single-jacobian-lens/): two complementary explainers on the Jacobian Lens — an interpretability method where a single Jacobian already works.

[Learning in a world of notes](https://engram.com/blog/learning-in-a-world-of-notes): Engram's experiments: RL helps agents use notes more accurately and cheaply, with gains that persist as notes change.

[HackerTube](https://karpathy.bearblog.dev/hacker-tube/) · [hackertube.org](https://hackertube.org/): Karpathy had Opus 5.5 mine HN comments for 6,454 YouTube videos recommended between 2007–2026 and wrap them in a clean YouTube-style UI — a two-hour antidote to algorithmic slop.

[Delphi.science](https://www.delphi.science/): a research community for people and AI agents alike: share papers, code, and data, discuss in the forum with researchers and their agents, and find collaborators.

[Deimos](https://deimos.evilrabbit.com/): an encyclopedia written by a deliberating panel of models: blind ledgers, cross-examination, lot-drawn juries, and a bias report.
![image.png](/images/37aa677f53825fc1957e.png)

### Math / Science / Learning

[Linear Model and Extensions](https://arxiv.org/abs/2401.00649): lecture notes from a UC Berkeley linear model course grown into a book: intermediate level, balancing rigorous proofs and heuristics, with R code to replicate every simulation and case study.

[Refinement Types: A Tutorial](https://arxiv.org/abs/2010.07763): a tutorial paper on refinement types.

[Generative Models: Foundations and Frontiers](https://divelab.github.io/GMFF/): DIVE Lab's generative models notes, from foundations to frontiers.

[3SUM and APSP and ETH, Oh My!](https://blog.computationalcomplexity.org/2026/11/3sum-and-apsp-and-eth-oh-my.html): the Computational Complexity blog on new developments around 3SUM, APSP, and ETH.

[A proof of the Aaronson–Ambainis conjecture](https://psi.inc/research/aaronson-ambainis/): PSI proves the Aaronson–Ambainis conjecture about quantum speedups on random inputs, with a complete Lean formalization.

[Stacks Project in Lean](https://stacks.axiommath.ai/): the site formalizing the Stacks Project in Lean.

[How I write papers](https://thoughtforms.life/how-i-write-papers/) · [slides](https://thoughtforms.life/wp-content/uploads/2026/10/add-to-Substack-post.pdf): Michael Levin's writing method: fix the structure first, write sentences last — top-down writing.

[Before GPU Engineering](https://before-gpu-engineering.github.io/BEFORE-GPU-ENGINEERING/toc.html) · [GitHub](https://github.com/BEFORE-GPU-ENGINEERING/BEFORE-GPU-ENGINEERING): the fundamentals to learn before doing GPU engineering.

[TrenTorch](https://trentorch.com/): free ML practice problems: build PyTorch from scratch.

[Embedded Systems - Shape The World](https://users.ece.utexas.edu/~valvano/Volume1/E-Book/): UT Austin Valvano's open embedded systems textbook.

[hft.md](https://hft.md/): learn quant finance through 3D motion.

[HW-Bench](https://www.hw-bench.com/): self-described as the first hardware engineering benchmark built with leading hardware companies.

[scholarly-paper-revision](https://drive.google.com/drive/folders/19lfb0LfbD8ASkcPtbXk2vTXHVJkLUtDj): a Google Drive collection of materials on revising academic papers.

### Programming / Agent Tools

[Aether](https://www.runaether.dev/): cloud devboxes you can watch: run Claude Code, Codex, and OpenCode — watch, steer, SSH in; the model runs on your own subscription, you only pay for the machine.

[ego(lite)](https://lite.ego.app/): a browser for AI agents: Claude Code or Codex runs 100+ web automation tasks in parallel, claimed fastest on the open Real-World Bench; free, zero setup.

[tastecode](https://github.com/Leonxlnx/tastecode): a Windows-first control panel for AI coding agents, powered by a design agent.

[wu](https://github.com/dstrml/wu): a fast, native code editor and agent workspace.

[kubai-icons](https://github.com/kubai087/kubai-icons): a Claude skill that draws dynamic icons in one consistent style, with hover motion or as static SVG.

[Hacker Papers](https://academy.dair.ai/papers/collections/hacker-papers?field=other) · [HackerPapers](https://hackerpapers.qiaomu.ai/) · [HackerBooks](https://hackerbooks.qiaomu.ai/): three hacker-oriented reading lists: DAIR.AI's paper collections, the papers most worth reading from twenty years of HN, and the books most mentioned in HN comments.

[Lattice](https://leo1oel.github.io/lattice/): a local-first LaTeX workspace for macOS: your papers, your co-authors, and an AI agent in the same window.

[Pond](https://pond.raphaelsalaja.com/) · [repo](https://github.com/raphaelsalaja/pond): your personal web archiver.

[jotter](https://terminaltrove.com/jotter/): a Jupyter-style TUI notebook with inline plots and rendered LaTeX.

[cargo](https://huacnlee.github.io/cargo/): huacnlee's cargo replacement that keeps the target directory small on its own.

[omnidiff](https://github.com/ivankovic/omnidiff): fast, robust, accurate diffing.

[Untie](https://untie.iki.moe/) · [repo](https://github.com/caelyreth/untie): a pure-Go TeX/Typst math renderer for native UIs and MyGo.

### Development / Native UI

[hex](https://github.com/anomalyco/hex): local-first voice dictation for macOS: hold a shortcut, speak, and paste into any app; native Rust, on-device speech recognition, Linux beta available.

[rune](https://github.com/anomalyco/rune): anomalyco's native UI framework.

[nanoui](https://github.com/justrach/nanoui): desktop apps in Zig, with native UI drawn on the GPU or a web frontend.

[nanolight](https://github.com/justrach/nanolight/): a ⌘Space launcher drawn by nanoui: apps, math, and Google suggestions with results right in the panel, plus Grok and X.

[Defi](https://github.com/qeude/Defi): a fast, native scrollable-tiling window manager for macOS, inspired by Niri.

[LordOS](https://github.com/lordbasex/LordOS): a Debian-based GNU/Linux distribution with its own desktop environment: a display server and Wayland compositor in C, a React UI engine on QuickJS, and private native apps.

[larperCord](https://rshacudevidro.github.io/larperCord/#download): a native Discord client whose whole UI is one file.

[godraw](https://github.com/egoist/godraw): an infinite canvas written in MyGo.

[glimm](https://glimm.dev/): shader-driven page transitions.

[Interaction Lab](https://aiforui.dev/lab): a set of playable interaction prototypes — gravitational accretion, reaction-diffusion, mercury drops, paths — each annotated with the equation behind it.

[userinterface.wiki](https://www.userinterface.wiki/): a wiki of interface design references.

[reactdrops](http://reactdrops.dev) · [bencho](http://bencho.dev) · [transitions](http://transitions.dev) · [kinetics](http://kinetics.colorion.co) · [21st.dev](http://21st.dev) · [evilcharts](http://evilcharts.com) · [8bitcn](http://8bitcn.com) · [astryx](http://astryx.atmeta.com) · [Aceternity](http://ui.aceternity.com): a batch of UI component and motion resources: React components, micro-interactions, ready-made transitions, dashboard charts, retro 8-bit components, and more.

### Design / Creation / Productivity

[Paaages](https://paaages.com/): design inspiration organized by page.

[stillwet](https://stillwet.art/): AI models paint in code with simulated oil paint and watercolor — no image generator, and you can watch the pictures being made.

[Playground](https://www.mariavasilyeva.com/work/playground): the experimental playground of visual and interactive designer Maria Vasilyeva.

[Bruno Simon](https://bruno-simon.com/): creative developer Bruno Simon's personal site.

[Gionatan Nese](https://www.gionatannese.com/): portfolio of a multi-disciplinary designer.

[Spectral Field](https://www.robfwa.com/): an interactive work by Rob.

[0010](https://0010.art/#home): artist 0010's works site (2020–present).

[Overworld Audio](https://overworldaudio.com/): audio co-development for games and interactive experiences, from prototype to final mix.

[WebGL Xylophone](https://tympanus.net/Tutorials/Xylophone/): a Codrops tutorial for building a WebGL xylophone.

[EDOLUS](https://edolus.com/): a 3D interactive site built with PlayCanvas.

[Volatile Nexus](https://dasprinzip.com/tinker/day42/): dasprinzip's Tinker Day 42: a three.js WebGPU scene — wobble the glass ring with the mouse, part the cubes, sound starts on first interaction.

[AstroDither](https://astrodither.robertborghesi.is/): Robert Borghesi's WebGPU + TSL experiment: audio-reactive dithering with fluid simulation.

[Inspora](https://www.inspora.design/): design, website, and logo inspiration.

[DesignTrash](https://designtrash.com/): design tools worth keeping.

[Curated Supply](https://www.curated.supply/): a weekly newsletter of design-led products.

[Glisp Canvas](https://glisp.app/canvas/): a vector drawing app whose drawing is a program.

[DotForge](https://dotforge.vercel.app/): a real-time dither animation builder.

[player](https://github.com/livliv-dev/player): a lightweight 2.5D character player for the web, with lip sync and webcam face tracking.

[Samuel](https://samuel.vvolhejn.com/): a model that learns to drive the Pink Trombone vocal-tract model to mimic speech — say something and it parrots back.

[Big Fat Fish](https://kiriyuki.com/showcase?p=%E5%A4%A7%E8%82%A5%E9%B1%BC): a sticker-pack showcase from Kiriyuki's emoji workshop.

[Escape from Big Tech, finding myself again, choosing a new industry](https://blog.polebug.com/2026/10/28/plog_202607-202610/): Polebug's October log.

### Desktop / macOS / Misc

[Kaze](https://kaze.build/): a calm browser for macOS and Windows with a built-in agent that works in tabs of its own, shows every step, and asks before it pays, sends, or deletes; free.

[RedPot](https://redpot.top/?share=og2): put Android inside your Mac.

[Kanso](https://kanso.botiverse.build/zh-hans/): disk usage analysis and cleanup for Mac.

[Dimble](https://dimble.fif7y.com/): hide and tidy menu bar icons on macOS 27.

[WallpaperMachine](https://github.com/MMFoundation/WallpaperMachine): Wallpaper Engine on Mac: free and open source, plays scene, video, and web wallpapers from the Steam Workshop; Apple silicon, macOS 15+.

[Arion](https://arion.astrafoundry.si/zh/): voice input that never leaves your computer.

[quiet-md](https://github.com/s1dashu/quiet-md): a fast local-first notes app in Rust + GPUI (macOS/Windows), compatible with Feishu/Lark DocxXML.

[nuza](https://www.nuza.org/): Cursor for writers and a lightweight Obsidian alternative: an open-source markdown editor with an optional AI panel that uses the agent you already have.

[proxy-bridge](https://github.com/Binaryify/proxy-bridge): a macOS menu bar tool that routes all or selected apps' traffic through HTTP/HTTPS/SOCKS5 proxies via TUN.

[TailSplit](https://tailsplit.idy.dev/): your device, your routing rules.

[aerial-tv](https://github.com/pengchujin/aerial-tv): a clean desktop for China-market TVs: an open-source tvOS-style Android TV launcher, ad-free, auto-takes over on boot.

[opendisplay](https://github.com/peetzweg/opendisplay): use an iPhone, iPad, or spare Mac as a true second display for your Mac.

[NX2Apple](https://github.com/LNPANDY/NX2Apple): a one-click macOS app that brings your own Switch games to iPhone/iPad, no terminal needed.

[Scene](https://github.com/InsaneArts/Scene): a native macOS app that gives your desktop, terminals, and editors one theme in one step; inspired by Omarchy.

[spotseek](https://github.com/lopezlav/spotseek): a desktop app and local service for Spotify metadata, Soulseek downloads, and Mixxx progressive playback.

[Irori](https://irori.app/): a fast, native game launcher for Linux, macOS, and Windows.

[MyGo Music plugins](https://music.egoist.dev/zh/plugins): the plugin page for the MyGo Music client.
