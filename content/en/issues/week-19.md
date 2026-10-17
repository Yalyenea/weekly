+++
title = "Weekly 19"
date = 2026-08-10T00:53:36+08:00
draft = false
math = true
summary = "This issue covers: AI / Models / Agents; Mathematics / Research / Learning; Programming / Systems / AI Tools; macOS / Productivity / Other."
translationKey = "weekly-19"
+++

### AI / Models / Agents

[Former OpenAI reasoning lead JT and Gemini pretraining lead Rohan on the future of continual learning](https://mp.weixin.qq.com/s/-5raMxvw0sAK-IPGXRaijA?poc_token=HH1Hb2qjigvWAFoOUhDd4eo9oOBqoH5oe9jf4o1z) — a conversation about continual learning, post-pretraining knowledge updates, and long-term model adaptability.

[(Some of) The Models, They Just Don't Want to Learn | Tilde](https://blog.tilderesearch.com/blog/one-layer-deeper) — examines potential recursive depth and training difficulties in reasoning models, with the One Layer Deeper competition exploring the joint design of architectures, optimizers, and objectives.

[Maple-Preview Model Card — DeepGrove](https://deepgrove.ai/modelcard/index.html) — DeepGrove's open-source 20B-A1B reasoning model with ternary weights, designed for fast on-device inference and adaptation.

[Xiaomi-Robotics-1](https://robotics.xiaomi.com/xiaomi-robotics-1.html) — Xiaomi's robot foundation model, pretrained on more than 100,000 hours of embodiment-agnostic manipulation trajectories, then aligned with target embodiments and instructions using real-robot data.

[Lattice: an 8 MB static retriever that embeds Wikipedia in 7 minutes](https://huggingface.co/blog/erikkaum/lattice-blog) — an approximately 8 MB static retrieval model and pure-Rust runtime that can embed 6.4 million English Wikipedia articles in about seven minutes on an 8-core M2 MacBook Air.

[[2606.12683] From AGI to ASI](https://arxiv.org/abs/2606.12683) — outlines four possible paths from AGI to ASI: scaling, paradigm shifts, recursive improvement, and large-scale multi-agent collectives.

[What are AI robots? A complete introductory guide to 2026](https://www.hackster.io/yahboomtechnology/what-are-ai-robots-a-complete-introductory-guide-to-2026-6a4492) — an introductory guide to AI robots, their core components, common types, and applications.

[Evolution Strategies at the Hyperscale](https://eshyperscale.github.io/) — introduces EGGROLL, which uses structured low-rank perturbations to increase the GPU arithmetic intensity of evolution strategies; the authors report roughly 100× higher throughput than naive ES at billion-parameter scale and large population sizes, with experiments on pure-integer RNN pretraining and RWKV reasoning post-training.
![QQ_1786290871751.png](/images/2ab0f54c5263e0ca.png)

### Mathematics / Research / Learning

[The Daily Diff](https://tdd.cat/) — a daily collection of worthwhile papers, technical articles, and discussions with recommendation signals and concise summaries.

[TensorTonic](https://www.tensortonic.com/) — an interactive platform for learning machine learning by implementing algorithms, CUDA kernels, and landmark papers from scratch.

[Interactive Machine Learning — Prof Richard Xu](https://ai.richardxu.com/ml/) — an online course that explains machine-learning concepts and algorithms through interactive material.

[Inference in Statistical Modelling and Machine Learning](https://inferencebook.org/) — the companion site for a textbook on inference in statistical modeling and machine learning, with a complete PDF, solutions, slides, and Python / R notebooks.

[Inference Engineering](https://inferenceengineering.tech/) — an interactive guide to AI inference spanning GPUs, CUDA kernels, quantization, KV caches, parallelism, and production deployment.

[Kurate.org — AI Paper Rankings](https://kurate.org/) — a paper-ranking site where three LLMs jointly assess the potential impact of preprints in robotics, economics, physics, and other fields.

[AI Settles a 25 Year-old Problem We Left Behind](https://x.com/DimitrisPapail/status/2086158118354887060) — discusses the binary integer least-squares problem underlying maximum-likelihood MIMO detection and an example of AI-assisted progress on related theory. Exact solution in general remains NP-hard; polynomial-time results usually refer to relaxations or approximate detectors. The target problem is:
$$
\min_{\boldsymbol{x}\in\{\pm 1\}^{N}} \lVert \boldsymbol{y}-\boldsymbol{H}\boldsymbol{x} \rVert_{2}^{2}
$$
[JoseDeFreitas/awesome-youtubers](https://github.com/JoseDeFreitas/awesome-youtubers) — a curated list of technical YouTube channels covering web development, computer science, machine learning, game development, cybersecurity, and more.

### Programming / Systems / AI Tools

[jcode](https://jcode.sh/) — an open-source terminal coding agent written in Rust, emphasizing low resource usage, parallel sessions, persistent long-running work, and auditability.

[VisualTeX](https://visualtex.pauljianliao.com/) — an online tool for visually editing and previewing LaTeX formulas in real time.

[Peezy](https://peezy.p0.systems/) — a terminal coding agent for real projects with a unified interface for switching among multiple models and OpenAI-compatible providers.

[Diffs, from Pierre](https://diffs.com/) — an open-source code and diff rendering library built on Shiki, with split and unified views, annotations, conflict handling, and interactive accept-or-reject controls.

[yetidevworks/drydock](https://github.com/yetidevworks/drydock) — a Rust TUI for checking uncommitted changes, unpushed commits, repositories behind their remotes, and unreleased versions across multiple repositories.

[Canario](https://rapha.land/canario/) — a macOS terminal built on the Rio engine, with spatial grouping, splits, a command palette, tab previews, and a global quick terminal.

[Local Studio](https://localstudio.ai/) — a local AI workspace that brings models, inference runtimes, hardware monitoring, files, terminals, and agents into one interface, with unified access to vLLM, SGLang, MLX, and llama.cpp.

[CNB](https://cnb.cool/) — Tencent's cloud-native development platform, managing build environments, caches, plugins, and elastic compute through an Everything as Code model.

[SteveSuv/remix-words-funny](https://github.com/SteveSuv/remix-words-funny) — a full-stack English vocabulary-learning project built with React Router v7, tRPC, Drizzle, PostgreSQL, HeroUI, and Docker.

[codecast-sh/codecast](https://github.com/codecast-sh/codecast) — records, searches, and remotely steers Claude Code, Codex, Cursor, and Gemini sessions, with team memory and line-level agent attribution.

### macOS / Productivity / Other

[Tahul/space-rabbit](https://github.com/Tahul/space-rabbit) — removes macOS Spaces switching animations to reduce desktop-transition delays.

[Vorssaint](https://vorssaint.com/) · [vorssaint/vorssaint-utils](https://github.com/vorssaint/vorssaint-utils) — a free, open-source modular macOS menu-bar toolkit for sleep prevention, hardware monitoring, volume, networking, disks, and common system controls.

[Side Screen](https://www.sidescreen.dev/) — turns an Android tablet into an extended display for a Mac over USB-C or Wi-Fi, with hardware acceleration and touch input.

[migsilva89/imark](https://github.com/migsilva89/imark) — a native macOS Markdown reader that refreshes as files are saved; annotations are stored directly as HTML comments in the Markdown file without uploading it to the cloud.
