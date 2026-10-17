+++
title = "Weekly 26"
date = 2026-09-27T02:55:22+08:00
draft = false
math = true
summary = "This issue covers AI / Models / Agents, Mathematics / Research / Learning, Programming / Systems / AI Tools, and Design / macOS / Other Finds."
translationKey = "weekly-26"
+++

### AI / Models / Agents

[The bitter lesson for computer vision](https://www.vincentsitzmann.com/blog/bitter_lesson_of_cv/): Vincent Sitzmann discusses how computer vision could become part of end-to-end perception and action loops.

[Hadamard MLP](https://cactuscompute.com/blog/hadamard-mlp): A channel-mixing design based on the Hadamard transform explores ways to reduce feed-forward layer parameters.

[Qwen-Image-2.1](https://qwen.ai/blog?id=qwen-image-2.1): The official introduction page for Qwen-Image-2.1.

[Tokenizers v1 benchmarks](https://huggingface-tokenizers-v1.static.hf.space/index.html): Benchmarks for the Tokenizers v1 release candidate cover encoding, decoding, and parallel performance, with instructions for reproduction.

[Grok 4.7](https://x.ai/news/grok-4-7): The official announcement describes Grok 4.7 updates for coding and knowledge work.

[KDA Doesn’t Care About the Future](https://drisspg.github.io/nuggets/KDA-Future-Token-Leakage): An investigation of future-dependent rounding in KDA kernels and whether models exploit that numerical effect.

[Halo](https://whitecircle.com/halo): A distributed training framework for Hugging Face models with checkpointing and multi-turn reinforcement learning.

[Limite 1B — Violetto](https://paradigma.inc/blog/limite-1b-violetto/): Paradigma introduces a one-billion-parameter model for mathematical reasoning and describes its training and inference implementation.

[MiMo-V2.6](https://mimo.xiaomi.com/mimo-v2-6) · [MiMo-V2.6 Technical Report](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf): The official introduction to Xiaomi’s MiMo-V2.6 model series.

[HySparse2](https://arxiv.org/abs/2609.26368): A hybrid sparse attention architecture with two-level key-value cache sharing for long-context and multi-turn agent tasks.

[Jesse](https://jesse.my/): An open-beta service for solidSF’s inference engine with an OpenAI-compatible API.

[Batch Size Scaling — Tencent Hunyuan RL Team](https://hy.tencent.com/research/100116?langVersion=zh): The Tencent Hunyuan team discusses how batch size relates to training outcomes when scaling reinforcement learning for language models.

[Introducing Claude Opus 5.5 | Anthropic](https://www.anthropic.com/claude-opus-5-5#introduction): Anthropic introduces updates to Opus 5.5 in coding, knowledge work, communication, and operating cost.

[Introducing GPT-6 Sol and Luna | OpenAI](https://openai.com/index/introducing-gpt-6-sol-and-luna/): OpenAI introduces GPT-6 Sol and Luna, covering improvements to capabilities, inference efficiency, and caching.

[Qwen Intelligence](https://www.qwenintelligence.com/): The Qwen Intelligence project website.

[The Generalization Problem | Q](https://qlabs.sh/research/): Explores combining model search with generalization priors so that learning can scale with compute.

[Introducing HLE-Diamond](https://lastexam.ai/blog/hle-diamond): A cleaned and refined set of 1,000 questions from Humanity’s Last Exam, covering reasoning and expert knowledge.

[Computational depth is all you need | Q](https://qlabs.sh/depth/): Studies the relationship between computational depth, model expressiveness, and training efficiency, with experiments on deeper language models.

[Visualizing modular-addition training | Sauers](https://x.com/Sauers_/status/2102936651521802363?s=20) · [The models just want to learn | Sauers](https://x.com/Sauers_/status/2102990911655346190?s=20): Compares output distributions after 2,000 and 20,000 training steps, using circular plots to visualize learning in a modular-addition transformer. A second post shares the author’s thoughts on model learning.

![](/images/ad12690d0df040a8.jpg)

[Intelligence Density | Trajectory](https://www.trajectory.ai/field-notes/intelligence-density): Discusses intelligence density as task performance per unit of inference compute.

[What my deep model doesn’t know | Yarin Gal](https://www.cs.ox.ac.uk/people/yarin.gal/website/blog_3d801aa532c1ce.html) · [Dropout as a Bayesian Approximation](https://arxiv.org/abs/1506.02142): Yarin Gal introduces uncertainty estimation with dropout, alongside the paper interpreting dropout as approximate Bayesian inference.

### Mathematics / Research / Learning

[The Khachiyan constant and GPT-6 Astra](https://zhuanlan.zhihu.com/p/2084435954740224890): The author reports on using GPT-6 Astra to explore a conjecture about the Khachiyan constant.

[Hilbert space: treating functions as vectors](https://eli.thegreenplace.net/2025/hilbert-space-treating-functions-as-vectors): An introduction to Hilbert spaces starting from the idea of functions as infinite-dimensional vectors.

[Memristive singular value decomposition](https://www.nature.com/articles/s41467-026-76272-2): The authors report singular value decomposition on memristive compute-in-memory chips and discuss applications including image reconstruction and model-weight decomposition.

[Hamiltonian Neural Network with PyTorch](https://ritoghosh.com/posts/hamiltonian_nn/): A tutorial on training Hamiltonian neural networks in PyTorch through an oscillator example.

[Chinese Character Map, second edition](https://matrix67.com/blog/archives/4769) · [Chinese Character Map](https://matrix67.com/cn_char_map/): Matrix67’s introduction to the second edition of the Chinese Character Map.

[Optimization Constants in Mathematics](https://teorth.github.io/optimizationproblems/): A collection of mathematical optimization constants and known upper and lower bounds, with links to research sources.

[CIS 6270: Discrete Generative Models](https://cis6270.github.io/): A University of Pennsylvania course covering discrete generative models, diffusion, flow matching, and optimal transport.

[MS&E 319: Efficient Generative Language Models](https://web.stanford.edu/class/msande319/): A Stanford course on training objectives, architectures, and inference algorithms under limited computational budgets.

[Physics in the age of LLMs](https://ozamram.substack.com/p/physics-in-the-age-of-llms): Oz Amram shares his experience and views on how large language models are changing his physics research workflow.

[Advisory Group on Mathematics and AI](https://openai.com/index/advisory-group-on-mathematics-and-ai/) · [AGMAI](https://agmai.org/): OpenAI introduces an independent mathematics advisory group and collaboration on reviewing results, communicating research, and developing research tools.

[A Proof of the Most Informative Boolean Function Conjecture](https://arxiv.org/abs/2609.24931): The authors propose a computer-assisted proof of the Courtade–Kumar conjecture, with computational verification records and a description of formal verification.

[Dictators are most informative](https://arxiv.org/abs/2609.24184): The authors propose a proof of the Courtade–Kumar conjecture concerning the information retained by dictator functions under binary noise.

[Unsolved problems in mathematics](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_mathematics): A Wikipedia index of open problems by mathematical field, with references for further reading.

[devol.dev](https://devol.dev/): Interactive tools for learning robot kinematics, control, motion planning, and design.

[A Faster Shortest Path Algorithm | Vals AI](https://www.vals.ai/blogs/faster-shortest-path-algorithm): The author reports using Claude agents to develop the C-HD shortest-path algorithm and a Lean proof, improving an asymptotic bound for a specific graph-density range without establishing a practical speedup.

[Quanta Magazine](https://www.quantamagazine.org/): A science magazine covering research in mathematics, physics, biology, and computer science.

[Claude discovers a novel enzyme system | Anthropic](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system) · [Research preprint (PDF)](https://www-cdn.anthropic.com/22573675ada52a8ca8a97a1a4b4326b2f208a071.pdf): Anthropic reports that Claude identified an enzyme system with CRISPR-like repeats in sequence databases and describes experimental work; its function remains unknown.

[Slava Krushkal’s good-group discovery | Logical Intelligence](https://logicalintelligence.com/blog/good-group-discovery): Logical Intelligence reports on Slava Krushkal and the team’s AI-assisted study of a new good group in four-dimensional manifold topology.

[mo271/Zeta5](https://github.com/mo271/zeta5): A Lean 4 formalization project for the irrationality of $\zeta(5)$; the repository reports a completed proof and explains its differences from the preprint.

[Interactive Linear Algebra — UBC edition](https://personal.math.ubc.ca/~tbjw/ila/index.html): An interactive linear algebra textbook covering vectors, matrices, linear transformations, eigenvalues, and related topics.

[Headlines and inside stories | Tapio Schneider](https://terrytao.wordpress.com/2026/09/23/headlines-and-inside-stories-understanding-and-trust-in-ai-for-mathematics-science-and-engineering/): In a guest post on Terence Tao’s blog, Tapio Schneider discusses turning AI-generated results into understandable, auditable, and trustworthy mathematical and scientific knowledge.

[We’re gonna need a lot more mathematicians | Amit Sahai](https://terrytao.wordpress.com/2026/09/24/were-gonna-need-a-lot-more-mathematicians/): In a guest post on Terence Tao’s blog, Amit Sahai argues for expanding the mathematical research community to understand AI-generated ideas and preserve human agency.

[Claude computes a nine-loop amplitude | Anthropic](https://www.anthropic.com/research/yes-claude-can-do-nine-loops): Anthropic describes Claude’s calculation of a nine-loop six-particle amplitude in planar $N = 4$ super-Yang–Mills theory and how the result was checked.

A question: does the sequence $n + \tan(n),\ n \in \mathbb{N}$ have a lower bound?

### Programming / Systems / AI Tools

[GPUI Markdown Studio](https://md.rbeta.com/): A WebAssembly-based Markdown editor and preview with Mermaid diagram support.

[LayerFS](https://github.com/Ephemeral-AI-Lab/layerfs): LayerFS gives agents isolated disposable filesystem branches with checkpoints, rewinding, and state reuse.

[Cloudflare Quick Tunnels](https://try.cloudflare.com/): Run `cloudflared tunnel --url http://localhost:8000` to create a temporary public URL for a local service and share previews or run tests.

[Eli Bendersky’s website](https://eli.thegreenplace.net/): Eli Bendersky’s technical blog covers programming languages, systems, and mathematics.

[Reader](https://github.com/Marvy101/reader-source): An open-source macOS reading workspace for PDF, EPUB, and TXT, with annotations, notes, and AI chat.

[Tylina](https://tylina.github.io/): A Typst editor for editing the typeset page directly, available on the web and desktop with AI agent integration.

[The senior engineer death spiral](https://sunilpai.dev/posts/the-senior-engineer-death-spiral/): An essay on overwork driven by the urge to prove oneself, and on maintaining communication and delivery as a senior engineer.

[CUDA Matmul Optimization Worklog](https://siboehm.com/articles/22/CUDA-MMM): A step-by-step CUDA matrix multiplication worklog covering coalesced memory access, shared memory, and tiling.

[Hallucination Translation](https://app.hjfy.top/): A Mac document translation app with side-by-side reading that preserves formulas, citations, and layout.

[OpenCode Reloaded](https://anoma.ly/notes/opencode-reloaded/): An explanation of how OpenCode hot-reloads configuration, tools, and plugins while sessions keep running.

[Step Code](https://github.com/stepfun-ai/Step-Code): A terminal coding agent with code editing, tests, plugins, multi-agent coordination, and static-site publishing.

[Nowdex](https://nowdex.app/): Tracks remaining usage for several AI tools across Mac, iPhone, and iPad, with a menu bar app, widgets, and iCloud sync.

[mujocolab/mjlab](https://github.com/mujocolab/mjlab): Provides an Isaac Lab-style interface powered by MuJoCo-Warp for reinforcement learning and robotics research.

[iAmCorey/Wake](https://github.com/iAmCorey/Wake): An agent session manager built with Rust and GPUI for browsing, searching, and resuming sessions.

[heypcb](https://heypcb.ai/dashboard) · [Circuit World](https://heypcb.ai/world): Generates schematics, board layouts, and fabrication files from natural-language descriptions, with KiCad projects you can keep. Circuit World showcases user-published boards and open-source hardware.

[ReShiki](https://reshiki.com/): A tool for drawing molecules, building reaction schemes, and preparing chemical figures.

[magpie](https://usemagpie.ai/): Selects models for agents such as Codex and Claude Code through a menu bar app and a local gateway.

[Synara](https://www.trysynara.com/l): An introduction page for an AI coding workspace for Claude Code, Codex, and Cursor.

[Empryo](https://empryo.com/): Maintains a live map of a code repository and reads it before edits, with desktop and terminal interfaces.

[o8vm/octox](https://github.com/o8vm/octox): A Unix-like operating system written in Rust and inspired by xv6-riscv.

[AGIdock](https://agidock.cloud/): A cloud platform for agents that provides infrastructure for running applications.

[yu1745/wetype-ime-linux](https://github.com/yu1745/wetype-ime-linux): Ports WeType’s Android input engine to Linux and integrates it with Fcitx 5.

[Lorca](https://lorca.app/zh#top): Runs AI teammates on your computer to work on files and tasks through individual or group chats.

[Using Claude Code: Spending your effort | Thariq](https://x.com/trq212/status/2103576349499855160?s=20): Uses evaluations and practical tasks to examine how reasoning effort affects speed, independent judgment, and verification of edge cases.

[kaolti/phantomat](https://github.com/kaolti/phantomat): An infinite-canvas window manager for Hyprland with zoomable window layouts.

### Design / macOS / Other Finds

[Working Title](https://iamnoman.com/working-title): Working Title is an app for Mac.

[Crisp](https://github.com/didriksg/Crisp): An open-source macOS display utility for scaling, brightness, volume, and display presets.

[21st](https://21st.dev/): A collection of React components, page templates, and themes with previews and implementation code.

[HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter?utm_source=chatgpt.com): A collection of health, everyday-life, and public-service resources with costs, benefits, and references.

[Powermove](https://trypowermove.com/): A video editor that connects to coding agents and supports layers, keyframes, and custom extensions.

[Inspora](https://www.inspora.design/): A curated archive of recent visual design and creative work.

[shawn.](https://www.shwn.design/): Design engineer Shawn’s portfolio features clean interfaces and interaction details.

[Opensource UI](https://opensourceui.in/): A copy-and-paste React and Next.js component library with interface controls and device mockups.

[quicker.chat](https://quicker.chat/): A Mac inbox that brings direct messages together and offers conversation organization and reply drafts.

[MiMo Gallery](https://mimo.xiaomi.com/mimo-gallery/): A MiMo showcase presented as a three-dimensional portfolio museum.

[Top-Conf Figure Gallery](https://qwdwqfwq.github.io/topconf-paper-figure-gallery/): A gallery of paper teaser figures that can be browsed by conference, year, and visual pattern.

[Pelican on a Bike](https://claude-opus-5-5.riba2534.cn/): A real-time 3D demo of a pelican cycling along the coast, with waves, a day–night cycle, and music.

[Variora](https://variora.fog.moe/en/): Compares interactive creations from different AI models given the same brief.

[Designeer](https://designeer.xyz/): A curated collection of interface design tools, component libraries, design systems, and inspiration.

[TinyWeb](https://tinyweb.so/): A small native Mac browser with a borderless interface, vertical tabs, and searchable history.

[Search | Office Commun](https://officecommun.com/search) · [driceroland/Search](https://github.com/driceroland/Search): A lightweight macOS browser built on WebKit, with a minimal interface and a focus on quick startup.

[Lean Browser](https://lean-browser.dipxsy.app/): A minimal macOS browser built with Swift and WebKit, offering Zen mode and stating that it collects no telemetry.

[Macfolio](https://macfolio.com/): Curated software, hardware, workspace setups, and reading for the Mac ecosystem.

[Sidekick](https://trysidekick.site/): Adds a second dock to the Mac for apps, links, clipboard history, and live widgets.

[saragordic/rooms](https://github.com/saragordic/rooms): Saves each project’s window layout as a room and switches between workspaces with a shortcut.

[PriceRadar](https://priceradar.store/zh): Compares download, in-app purchase, and subscription prices across App Store and Google Play regions, with price alerts.
