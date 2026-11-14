---
title: Weekly 33
date: '2026-11-14'
draft: false
slug: week-33
math: false
translationKey: weekly-33
obsidianSource: pages/07-Personal/Blog/Weekly/Week-33.md
sourceDigest: 0363ff768c216787863d2ff05ce576ff6ffe9b47467e352bb34de6bce1c9f3fa
summary: Model architecture and interpretability, optimizers and deterministic inference,
  agent tools, native UI, interactive design, desktop apps and browsers.
---

### AI / Research / Perspectives

[Introducing Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2): Anthropic updates Fable and Mythos with improvements in coding, reasoning and vision. They share an underlying model, with different safeguards and access policies.

[Architecture Decisions for Marin 535B-A23B](https://openathena.ai/blog/marin-535b-architecture/): Marin’s 535B-A23B model has finished pretraining on 18T tokens. The author walks through the experiments and tradeoffs behind its Latent MoE, local and global attention, normalization and optimizer.
![](/images/8a1e327123a72ccade74.svg)

[PAN 2](https://ifm.ai/blog/pan2/): A foundation world model from MBZUAI that predicts how actions change an environment, letting agents compare possible actions in simulation for learning and planning.

[Neurons as an Interpretable Basis](https://www.goodfire.com/research/neurons-as-an-interpretable-basis#neuron-sparsity-and-effective-range) · [Neuron Atlas](https://www.goodfire.com/research/public_neuron_atlas?l=middle): Goodfire studies MLP neurons in Qwen3.6-35B-A3B: important activations are sparse, and many neurons’ computational roles can be described briefly enough to predict or simulate their activations. Includes an interactive atlas.

[Neuron Lens](https://neuron-lens.com/): Explore what individual neurons and attention heads in Qwen3-8B and Gemma 4 12B respond to, and how they affect model output.

[What affects chain-of-thought monitorability across the model lifecycle?](https://alignment.openai.com/cot-monitorability-model-lifecycle): OpenAI studies how pretraining, architecture, RL and model-generated data affect chain-of-thought monitorability. Two indirect measures—reasoning without CoT and control over CoT—suggest that stronger models may become harder to monitor.

[HuggingArch](https://shenhan.cc/blog/huggingarch.html): Agents turn open models into structural DSL specifications, which are then analyzed for deployment compute, memory and communication costs.

[Eliminating Nondeterminism in LLM Inference with Integer-Only Arithmetic](https://nathan.rs/posts/detllm/): DetLLM replaces matmul, softmax, normalization and RoPE with integer arithmetic, exploring bit-identical inference across batch sizes, GPUs and CPUs.

[e-means](https://e-means.github.io/): A different update scheme for k-means. In the authors’ tests it reaches comparable or lower loss in fewer epochs than Lloyd’s algorithm, with speedups on both CPU and GPU.

[Toner: Improving Muon and AdamW with Input Geometry](https://mohamad-amin.github.io/blog/toner/): Uses each layer’s input second-moment statistics for preconditioning, yielding MuonT and AdamT. The authors observe lower validation loss on 130M–1.2B models, with larger gains at larger batch sizes.

[Double Preconditioning (DoPr): Optimization for Test-Time Performance, not Validation Loss](https://arxiv.org/abs/2606.06418): Adds activation preconditioning to gradient preconditioning such as Adam or Muon to reduce error accumulation in autoregressive generation and policy rollouts. Better downstream performance does not always come with lower validation loss.

[Anthropic’s Initial Public Offering](https://ipo.anthropic.com/us/): Anthropic’s IPO page, collecting its founders’ letter, financial information and customer stories.

### Research / Systems / Learning

[Deep Implicit Layers](https://implicit-layers-tutorial.org/): A NeurIPS 2020 tutorial covering implicit differentiation, Neural ODEs, Deep Equilibrium Models and differentiable optimization, with runnable Colab notebooks.

[Dive into Systems](https://diveintosystems.org/): A free computer systems textbook covering C, assembly, computer organization, operating systems, caches and parallel computing, aimed at readers with an introductory programming course behind them.

[Writing a SIGGRAPH paper from scratch.](https://alexandergoslin.me/writing-a-siggraph-paper-from-scratch/): The Terrain Diffusion author recounts taking a personal project on a single RTX 3090 Ti through to a SIGGRAPH paper and a Minecraft mod.

[My YouTube tier list, six years later](https://thume.ca/2026/11/01/youtube-tier-list-2026/) · [TristanTube](https://karpathy.ai/tristan-tube/): Tristan Hume updates his science, engineering, craft and programming channel rankings. TristanTube brings related videos together for continuous viewing.

### Programming / Agent Tools

[Inside GitHub’s new Git storage architecture](https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/): GitHub explains its new Git storage architecture for agent concurrency. Internal tests supported 5,000 concurrent agents and 7,200 pushes per second to one repository while maintaining low-latency reads.

[RexPocket](https://github.com/leizhiyuan/rexpocket): An Android client for Rex: browse hosts, sessions and tabs, then operate a pane through a Ghostty terminal. Supports LAN access and built-in Tailscale for driving coding agents from a phone.

[Atlas](https://atlas.insanearts.io/): Gives agents a separate hidden macOS desktop for opening apps, clicking and taking screenshots. Keep using your computer and open a window to watch their work.

[ArcBox](https://github.com/arcboxlabs/arcbox): A macOS container and VM runtime written in Rust, covering Docker, Kubernetes, agent microVM sandboxes and full Linux/macOS VMs.

[moejs](https://github.com/MoeForge/moejs): A pure-Go JavaScript runtime for embedding many small plugin sandboxes in Go programs, with modern features such as ES modules and async/await.

[DeepSeek Chat Demo](https://github.com/deepseek-ai/chat-demo): A static chat app that calls the DeepSeek API directly from the browser. Supports streaming, multiple conversations, attachments, Markdown, math and Mermaid, and can run locally or be deployed.

[Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance): Coding agent skills maintained by the Chrome, Edge, Firefox and MDN teams with the community, bringing modern Web APIs, compatibility data and practices into development.

[Building a thread UI on hard mode](https://delta.dev/blog/building-a-thread-ui-on-hard-mode): Delta turns agent threads into editable collaborative documents, with annotations directly on responses and tool output. The article explains the editor architecture challenges created by this mixed content.

### Development / Native Interfaces

[Onevra](https://oneo-me.github.io/onevra/): A Go native desktop component library built on MyGo, with drawn controls, windows, icons, charts and chat interfaces. Its website demo is Go compiled to WebAssembly.

[Gojo](https://gojo.egoist.dev/): A memory-safe systems language for people and agents. Ownership manages memory and data races without lifetime annotations; code compiles through C to native binaries. Currently in beta.

[Exact](https://github.com/expo/exact): Expo’s cross-platform app project: one codebase for web, macOS, iOS and Linux, with tools for agents to build, run, inspect and test across platforms.

[Moonframe](https://moonframe.dev/): A native desktop app framework using Rust and Luau, with live updates and element inspection. Select an element to give an agent its source location and watch changes appear.

[UI SDK](https://github.com/vercel-labs/ui): Vercel Labs packages keyboard navigation, focus, selection, popups, drag and drop into composable behaviors, with adapters for several frontend frameworks, for agents building interfaces.

[A Critique of GPUI](https://blog.zortax.de/posts/a-critique-of-gpui): Examines the scaling costs of GPUI and egui for complex desktop apps through state changes and dependency tracking, comparing tradeoffs with Elm, immediate mode and signals.

### Design / Creative Work / Interaction

[Refero Styles](https://styles.refero.design/): Turns product websites’ colors, typography, spacing and components into agent-readable DESIGN.md files for building interfaces from style references.

[Footer](https://www.footer.design/): A design gallery dedicated to website footers.

[Gridray](https://gridray.dev/): A tool for X-ray-style website inspection, with a draggable demo on the page.

[Moodz](https://ajaypawriya.com/side-projects/moodz/index.html): Ajay Pawriya’s 3D voice-reactive visualizer, exploring interaction through voice and mood.

[Retina Rave](https://www.retinarave.com/): A WebGL2 music visualizer that runs in the browser, taking audio from a tab, microphone or local file and processing it on the device.

[tesseract](https://tesseract.postminimal.agency/): An interactive web piece from Postminimal.

[Nocturne](https://buandesu.github.io/nocturne/): A portfolio site for Front-end Craft Studio.

[VectraSynth](https://vectrasynth.com/app): VectraSynth’s online app.

[BTQ](https://www.bricelab.dev/work/btq): A design project by Brice Deguigne.

[Mall of the Emirates](https://brandonyasin.com/cases/mall-of-the-emirates): Brandon Yasin’s Mall of the Emirates case study, presenting its art direction and visual design.

[Claude Fable 5.2 HTML Files](https://miaai-lab.github.io/Claude-Fable-5.2-HTML-Files/): A collection of HTML interaction studies made with Claude Fable 5.2, including water, paper and procedural painting experiments.

[Ἶρις](https://iris.wenyizhang.com/): A browser interaction piece requiring WebGPU.

[Record Player](https://vinyl-gl.vercel.app/): A record player on the web.

### Desktop / macOS / Other

[Ardia](https://ardia.dev/): An Arc alternative for Mac with sidebar tabs and a CLI for controlling the browser through your own coding agent.

[Cra](https://crabrowser.app/): A free, open-source Arc replacement for macOS that imports spaces, pinned tabs, favorites and archives.

[Zephium](https://github.com/zephium-browser/Zephium): A browser and work environment reimagined for people and agents, available for macOS and Windows.

[Ladybird](https://github.com/LadybirdBrowser/ladybird): An open-source browser with an independent engine, a multi-process architecture and site isolation. Still in pre-alpha for developers.

[BiliKit](https://github.com/shiinayane/BiliKit-Mac): A native third-party Bilibili client for macOS using AppKit, Core Animation and AVPlayer, with danmaku, comments, picture-in-picture and favorites.

[Mark](https://github.com/vinny380/mark): A native macOS Markdown editor under 1 MB. Create a file from Finder’s context menu and start writing, with support for Mermaid, math and images.

[Silica](https://github.com/dqhieu/Silica): A lightweight macOS code editor built with SwiftUI and AppKit, with a file tree, project search, and previews for Markdown, HTML, CSV and media.

[BigText](https://github.com/Erkinbek/bigtext): A Rust editor for files from several to tens of gigabytes, including logs, CSV, SQL and JSON, with search, editing, diff and hex views.

[Airhand](https://github.com/sqlpxc/airhand): A QUIC-based remote desktop with hardware encoding and decoding at up to 120 fps, spanning Windows, macOS, Linux, Android and browsers. Still under development.

[WowType](https://github.com/Gloridust/WowType): An fcitx5 Pinyin input method for Linux, with whole-sentence input, predictions while typing and typo correction.

[Glint](https://github.com/jsogn/Glint): Shows English or another target language beside macOS Pinyin candidates, turning everyday Chinese typing into a chance to learn vocabulary.

[TailSplit](https://tailsplit.idy.dev/): Combines sing-box routing rules with a Tailscale exit node, choosing direct or proxied connections by domain and IP, with app proxy and TUN modes.

[Stela](https://github.com/tylertms/Stela): An Apple Silicon translation layer for x86-64 PCs, with an arm64-to-x86-64 translator and an NVIDIA Metal driver. Still in development, with boot support and performance being worked on.

[UniXNU](https://github.com/UniXNU/UniXNU): An independent project for booting iOS/macOS on non-Apple ARM64 hardware through a common UEFI environment and device drivers.

[Omarchy Mobile](https://github.com/derekross/omarchy-mobile) · [Website](https://omamobile.org): Brings Arch Linux ARM, Hyprland and Omarchy to phones, using the Pixel 7 Pro as its reference device. Support varies by model.
