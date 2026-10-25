---
title: Weekly 30
date: '2026-10-25'
draft: false
slug: week-30
math: false
translationKey: weekly-30
obsidianSource: pages/07-Personal/Blog/Weekly/Week-30.md
sourceDigest: 67e832a78cb966cefc3bae4c09a667aca659a330b6cc56fcc99315a24b119cf2
summary: AI research and model training, native interfaces and agent tools, plus mathematics,
  design resources, and desktop apps.
---

### AI / Research / Perspectives

[Kimi K3.1 Pro](https://www.kimi.ai/blog/kimi-k3-1-pro): Kimi presents improvements in long-context work, coding, 3D creation, and the engineering behind large-scale joint reinforcement learning. Full model weights are scheduled for November 4.

[Five explanations of Score Centering](https://qingkeai.online/blog/five-Score-Centering): Derives Score Centering through five perspectives: drift, BPO, an ideal baseline, the straight-through estimator, and local distribution families, with links to papers and implementations.

[How Biological Synapses Self-Assemble Gradient Learning](https://arxiv.org/abs/2412.20018v2): Introduces Self-Assembling Learning and the Self-Assembling Motif, studying how local synaptic plasticity rules can produce network dynamics that approximate stochastic gradient descent.

[You could have invented transformers from memory](https://alexwang.ai/posts/associative-memory/#interactive): Explains linear maps, MLPs, and self-attention as different memory stores, using interactive examples to explore storage and retrieval.

[Reactive Optimizers](https://xingjianbai.com/reactive-optimizers/): Places an agent inside the optimizer to observe training dynamics and rewrite optimizer code during training, adapting update rules and schedules.

[Pretraining at scale without a pretraining team](https://mirendil.com/news/pretraining-at-scale-without-a-pretraining-team/): Mirendil describes an experiment in which one researcher and AI agents pretrained a model, building training infrastructure, data pipelines, and kernel optimizations from scratch.

[The Bitter Lesson for Biology](https://bindwell.com/posts/the-bitter-lesson-for-biology): Bindwell reports scaling laws for biomolecular interaction modeling and discusses the roles of data curation, model size, and out-of-distribution generalization.

[Claude designs binders against scorpion neurotoxins](https://www.anthropic.com/research/claude-scorpion-toxin-binder-design): Anthropic reports designing protein binders against scorpion neurotoxins with an internal research model. Of 211 designs tested, 17 met the binding criteria; toxin neutralization remains unverified.

[LLMs and large-scale formal verification](https://www.anthropic.com/research/formal-verification): Anthropic and Theorem use Claude to prove specified security properties of RISC-V programs from 123 open-source libraries, releasing a subset of proofs and semantic models.

[Building AGI Using Language Models](https://bmk.sh/2020/08/17/Building-AGI-Using-Language-Models/): In this 2020 essay, Leo Gao considers how the world model in a language model could be combined with memory, goals, and planning to build more general agents.

[Anthropic Public Benefit Fund](https://www.anthropic.com/news/public-benefit-fund): Anthropic proposes dedicating company equity to a public benefit fund, starting with 5% subject to stockholder approval, with a mechanism to increase its stake as the company grows.

[Why I’m becoming a professor in AI safety in Beijing](https://sorenmindermann.substack.com/p/why-im-becoming-a-professor-in-ai): Sören Mindermann explains his move to Tsinghua for AI safety research, outlining his research plans, Beijing’s research environment, and opportunities for international collaboration.

[When It Ships](https://whenitships.com/): Collects frontier AI model release news, related developments, and prediction-market information.

### Mathematics / Research / Learning

[CP-Algorithms](https://cp-algorithms.com/): A collection of algorithms and data structures for competitive programming, with explanations and implementations.

[Putting the “You” in CPU](https://cpu.land/): Connects program execution with how CPUs, system calls, processes, and operating systems work.

[University Physics Problem Collection](https://nanana-2.github.io/physics-site/): A Japanese collection of university physics and mathematics problems, with graded exercises and explanations across mechanics, electromagnetism, quantum mechanics, statistical physics, and mathematical methods.

[How to Learn Mathematics](https://abakcus.com/articles/how-to-learn-mathematics): Organizes a self-study roadmap for undergraduate mathematics around courses, books, prerequisites, and checkpoints.

[Zlatko’s Quantum Notebook](https://zlatko-minev.github.io/zlatko-minev-quantum-repository/?shelf=lectures): Zlatko Minev’s quantum computing talks, slides, and notes, covering superconducting qubits, quantum measurement, noise, and error mitigation.

[Looped Model Atlas](https://huskydoge.github.io/looped-model-atlas/): An animated guide to looped Transformer designs, showing what their layers read and where additional computational depth comes from.

[Mathua](https://mathua.com/): An open-source adaptive mathematics platform that uses prerequisite checks, generated exercises, and spaced repetition to guide progress.

[Python Histogram Plotting](https://realpython.com/python-histograms/): Introduces computing and plotting histograms with pure Python, NumPy, Matplotlib, pandas, and Seaborn.

[Learn Arduino](https://learn-arduino-red.vercel.app/#board): Interactive 3D lessons in the browser introduce the Arduino Uno, basic circuits, sensors, and motors.

[Marathon Fusion](https://www.marathonfusion.com/): Presents work on fusion reactors, tritium fuel systems, and commercialization through isotope co-production.

### Programming / Agent Tools

[DeepInfer](https://github.com/deepseek-ai/DeepInfer) · [DeepSeek V4.1 Flash deployment practices](https://zhuanlan.zhihu.com/p/2095560295930508953): DeepSeek open-sources its large-scale inference framework, offering offline inference for DeepSeek V4.1 Flash, optimized kernels, asynchronous scheduling, and deterministic sampling, alongside a related deployment article.

[deepseek-recipe](https://github.com/deepseek-ai/deepseek-recipe): Rust libraries and Python bindings for API-format conversion, DeepSeek prompt rendering, token encoding, and model-output conversion.

[LCU](https://github.com/amontlabs/lcu): Connects Codex’s computer-use runtime to other harnesses for desktop and browser control; the official ChatGPT desktop app must still be installed locally.

[LayerFS](https://github.com/Ephemeral-AI-Lab/layerfs): Provides isolated filesystem workspaces over a shared base for agents, with branches, checkpoints, history replay, and deduplicated storage.

[Tamio](https://tamio.sh/): A macOS SSH client combining a terminal, dual-pane SFTP, monitoring, and a local Model Context Protocol (MCP) server that lets agents use saved host connections.

[Kero](https://kero.sh/): A terminal for coding agents with persistent sessions, task status, remote hosts, and a command-line interface agents can operate.

[Harp](https://github.com/dominikmartn/harp): An unofficial Warp fork with a sidebar for multiple Claude Code and Codex sessions, showing which are working, waiting, or done.

[Respan](https://www.respan.ai/) · [respan-gateway](https://github.com/respanai/respan-gateway): Combines model routing, tracing, and evaluations. Its open-source gateway uses one Rust binary to translate model protocols and connect tools.

[How To Use Decision Models for Evals](https://hamel.dev/blog/posts/decision-model-evals/): Compares decision models on real agent traces and explains how threshold tuning and score calibration affect evaluation cost and performance.

[Train and deploy custom models on Modal with Devin](https://gist.github.com/dabit3/866caaab49a4a5371ae01655fecad34b): A guide to training and deploying custom models on Modal with Devin.

### Development / Native UI / Writing

[nanoui](https://github.com/justrach/nanoui) · [nanomon](https://github.com/justrach/nanomon): Builds desktop apps in Zig with either GPU-rendered native UI or a web frontend. Nanomon is a lightweight system monitor built on it.

[Native Shell](https://nsh.dev/): Renders AI-generated interfaces through platform-native components, with desktop, mobile, web, and GPUI backends.

[Cap’s migration to GPUI](https://cap.so/blog/rebuilding-cap-in-gpui): The Cap team details its move from Tauri webviews to Rust and GPUI, including cross-platform layout, rendering, and window interaction challenges.

[The Everything Project](https://github.com/HeyPuter/everything): Puter’s collection of open-source projects seeking to recreate common office, design, development, and communication apps.

[Beautiful Rust](https://github.com/morganlinton/BeautifulRust): An Agent Skill drawing on the Rust API Guidelines and sources from Google, Microsoft, and others to help coding agents write idiomatic, maintainable Rust.

[Google Style Guides](https://google.github.io/styleguide/) · [Rust Style Guide](https://google.github.io/styleguide/rustguide.html): Google’s style guides for open-source projects, with Rust guidance on code organization, API design, and coding conventions.

[Cursor Technical Writing Skill](https://github.com/cursor/plugins/blob/main/pstack/skills/technical-writing/SKILL.md): A technical-writing skill combining document structure, developer style, clear instructions, and syntax for an international audience.

### Design / Creation / Productivity

[Kimi Brand Book](https://www.kimi.ai/resources/kimi-brand): Presents Kimi’s logo, colors, typography, grids, and visual identity guidelines.

[Runebender](https://github.com/fontgarden/runebender) · [Website](https://runebender.org/): An experimental font editor built on the Linebender ecosystem of Rust libraries.

[GlideDeck](https://github.com/nirlotan/GlideDeck): A local presentation tool built in Rust, with zooming and movement across an infinite canvas, PowerPoint import, and PowerPoint and PDF export.

[Desigma](https://github.com/deepfounder-ai/desigma): An open-source interface design tool written in Rust, with auto layout, components, prototyping, collaboration, and Figma file import.

[Sheet](https://sheet.dipxsy.app/): A local-first infinite canvas for UI design, where Claude, Codex, or Cursor can edit the same document through MCP.

[Glass](https://glassapp.dev/): Brings projects, notes, and AI agents into one app across desktop, web, and mobile.

[Murmur](https://murmur.dipxsy.app/): A project introduced as “a murmur for every surface”; its website currently displays a coming-soon page.

[Design Perpendicular](https://wxad.design/abc): Practical articles and examples on interaction design, motion, interface quality, and AI-assisted creation.

[One-day learning paths](https://useful.qiaomu.ai/paths/): Short thematic learning paths for writing, communication, learning, and time management.

[AI Girls](https://github.com/shuaizenge/ai-girls): Collects illustrations, chibi designs, and turnaround views of personified AI characters for design reference, subject to each creator’s permissions.

[OpenTierBoy](https://www.opentierboy.com/): An open-source tool for creating, ranking, and sharing tier lists, with templates for games and web technologies.

### Desktop / macOS / Other

[Helumi](https://www.helumi.app/#pricing): Mounts cloud storage in Finder, with on-demand access to large files, end-to-end encryption, sharing, and offline folders.

[Peel](https://github.com/TuguiDragos/Peel): An open-source macOS uninstaller and cleaner that explains why files belong to an app, with system tuning and terminal setup features.

[disktree](https://github.com/tobi/disktree): A Rust and GPUI disk analyzer for Omarchy that visualizes directory usage as a treemap, supporting local and SSH sources.

[Mactoy](https://github.com/cashcon57/mactoy): A native macOS tool for installing Ventoy and flashing disk images to create multiboot USB drives.

[leaf](https://leaf.dipxsy.app/): A terminal PDF reader that preserves tables, figures, and citations, with search, highlights, and saved reading position.

[NextKDE](https://github.com/NextKde/NextKde): A Quickshell desktop for KDE Plasma that integrates a top bar, dock, launcher, notifications, and settings.

[iglass](https://github.com/vukkt/iglass): Brings Liquid Glass-inspired colors, transparency, and blur to terminals including iTerm2, Ghostty, and kitty, with light and dark themes.

[Ardia](https://ardia.dev/#top): A Chromium-based sidebar browser for Mac with split views, Chrome extensions, and built-in content blocking.

[MacNativeGames](https://github.com/ly05010419/MacNativeGames): A project for building apps from your own Switch game files for Mac and selected iOS devices; the repository contains no game content.

[v2ray-agent](https://github.com/mack-a/v2ray-agent): Scripts for installing and managing Xray-core, sing-box, and multiple proxy protocols, including certificates, subscriptions, and routing.

[Seven years from China](https://world.hey.com/dhh/seven-years-from-china-a63b03cc): DHH reflects on returning to China after seven years, describing changes in cities, infrastructure, and the pace of work during visits to Shenzhen, Hangzhou, and Beijing.
