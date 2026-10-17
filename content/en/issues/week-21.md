+++
title = "Weekly 21"
date = 2026-08-23T03:00:15+08:00
draft = false
math = true
summary = "This issue covers AI / Models / Agents, Mathematics / Research / Learning, Programming / Systems / AI Tools, and macOS / Productivity / Other."
translationKey = "weekly-21"
+++

### AI / Models / Agents

[math-ai-org/mathcode](https://github.com/math-ai-org/mathcode): A terminal-based mathematical programming agent with Lean integration that can inspect proof goals, search declarations, verify candidate proofs, and complete formal proofs interactively.

[Cua](https://cua.ai/): GUI sandboxes and scalable computer clusters for computer-use agents, with both local and hosted deployment options.

[Introducing Delta](https://zed.dev/blog/introducing-delta): Zed's multi-agent coding and review environment, synchronizing code, conversations, and worktrees in real time so people and agents share the same development context.

[PyTorch: a reference language](https://docs.pytorch.org/devlogs/compiler/2026-07-25-pytorch-a-reference-language/): A proposal to retain PyTorch as an executable reference specification, with LLMs generating explicit forward and backward implementations and verifying their equivalence. It also raises the question of whether LLM-written backpropagation could replace automatic differentiation in some settings.

[wibus-wee/cradle-app](https://github.com/wibus-wee/cradle-app): A desktop-first AI agent management platform for running agents, tracking tasks and sessions, coordinating workflows, and connecting multiple model providers in one place.

[Building a distributed training framework from first principles](https://www.youtube.com/watch?v=XoGvCBRnwLs): Umar Jamil explains how to build a distributed model-training framework from first principles; this description is based only on the public video title and author information.

[Ornith-1.5: From Self-Scaffolding to Self-Improvement](https://ornith.ai/ornith_1_5.html): A model that generates its own training tasks, task scaffolds, and solution trajectories, then uses reinforcement learning to form a continuous self-improvement loop.

[Famous Deep Learning Papers](https://papers.baulab.info/): A chronological guide to classic deep-learning papers, summarizing the central problem and historical impact of each work.

[CS 8803 - LLM](https://cocoxu.github.io/CS8803-LLM-spring2026/): The course page for Georgia Tech's Spring 2026 large language models class, collecting lectures, papers, and student presentations on pretraining, reasoning, alignment, and more.

[Papers with Code](https://paperswithcode.co/tasks): An index for browsing machine-learning papers, code implementations, and benchmark results by task.

[CopilotKit/openbot](https://github.com/CopilotKit/openbot): An open-source AI coworker platform that gives every agent an isolated browser, files, and tools while recording its decisions and actions.

[Machine Studying](https://jacobxli.com/blog/2026/machine-studying/): Introduces “Machine Studying,” in which agents autonomously develop domain expertise from a document corpus, and explores how to measure that ability with StudyBench.

[Hot Take: LLM can 'jump'](https://yongzx.github.io/blog/2026/08/08/llm-can-jump): Argues that interconnected knowledge may let models make scientific leaps along paths that differ from human intuition, with implications for safety and continual learning.

[[2608.08003] The Spectral Neuron](https://arxiv.org/abs/2608.08003): Introduces explicit nonlinearity through the eigenvalues of an affine matrix, seeking a balance among model expressiveness, coefficient transparency, and shape constraints.
![QQ_1787233300714.png](/images/d6e44c2b61efde78.png)

[Learn Inference](https://learn-inference.com/): An interactive introduction to production inference engineering for generative AI, from attention kernels to multi-cloud capacity planning.

[The Year in AI Papers: Essential Research from 2025–2026](https://www.1kpapers.com/): A collection of important AI papers from 2025–2026, organized by topic, lab, citations, code, and date, with concise summaries.

Marin's training launch: the [Harrier K40 data overview](https://storage.googleapis.com/marin-public/held/harrier-k40-cluster-overview/2026.08.18/index.html?revision=uniform-sampling#cluster-12) shows the distribution of 23.11T tokens across 40 semantic domains and five quality buckets; the [535B-A23B 18T Token Hero Run report](https://wandb.ai/marin-community/marin_moe/reports/535B-A23B-18T-Token-Hero-Run-Scaling-Ladder--VmlldzoxNzc2MDM5Ng) and [public tracking issue](https://github.com/marin-community/marin/issues/8435) document the model specification, scaling ladder, training dynamics, and risk-monitoring plan.

### Mathematics / Research / Learning

[Fanout](https://fanout.sh/): A technical learning platform collecting courses, roadmaps, paper explainers, and interactive experiments on AI research, system design, and the mathematics of machine learning.

[Awesome Physics of AI](https://huanranchen.github.io/awesome-physics-of-ai/): A learning-dynamics-oriented map of papers and research that use principles from physics to understand, predict, and explain deep learning.

[[2608.16884v1] Improving the matrix multiplication exponent with modern optimization and AlphaEvolve](https://arxiv.org/abs/2608.16884v1): Combines reformulated optimization problems, machine-learning algorithms, and AlphaEvolve to improve the known upper bound for the matrix-multiplication exponent from 2.371339 to $\omega < 2.371177$.

[Classic Patents](https://classic-patents.com/): An open museum of historic technology patents with verified patent text, original PDFs, engineering explanations, and interactive 3D physical simulations.

[How to Read a Technical Paper](https://www.cs.jhu.edu/~jason/advice/how-to-read-a-paper.html): Recommends a timed skim before close reading, while taking notes in your own words, questioning details, and considering extensions. LLMs can help summarize and retrieve later commentary, while careful reasoning should remain with the reader.

[Lean formalization of bounded gaps between primes](https://primegaps.axiommath.ai/): A Lean 4 formalization of the bounded-gap theorem that infinitely many pairs of consecutive primes satisfy $p_{n+1} - p_n \leq 246$.

[CS229 Course Notes](https://cs229.stanford.edu/main_notes.pdf): Stanford CS229's machine-learning notes, systematically covering supervised learning, learning theory, unsupervised learning, reinforcement learning, and other foundations.

[[2608.16753] Mathematics in the age of AI](https://arxiv.org/abs/2608.16753): Terence Tao discusses how the mathematical community should reconsider the goals and value of mathematical research as research-level AI arrives.

[VibeMathed](https://vibemathed.com/): A community collection of previously unsolved mathematical problems later proved or disproved with AI involvement, accompanied by verifiable sources and validation labels.

Platforms for formal mathematics: [lemma.ing](https://lemma.ing/) records mathematical problems, derivations, and research progress; [Halmos](https://halmos.science/) checks user-submitted proofs with the Lean kernel; [TheoremDB](https://www.theoremdb.org/) preserves open problems, proofs, failed attempts, and contributor attribution; [ProofAtlas](https://www.proofatlas.ai/) provides theorem explanations, Lean statements, and source code; and [Proof.Fail](https://proof.fail/) maps the limits of LLM mathematical ability through failure cases.

### Programming / Systems / AI Tools

[cneuralnetwork/oplogs](https://github.com/cneuralnetwork/oplogs): A local-first experiment tracker for machine learning and agents that records metrics, artifacts, system telemetry, and LLM call traces without an account or cloud service.

[Latias94/merman](https://github.com/Latias94/merman): A headless Mermaid parsing, layout, and rendering engine written in Rust, with output support for SVG, PNG, JPEG, PDF, and other formats.

[AIcss](https://www.aicss.dev/#components): Copy-ready UI components for AI agent interfaces, covering thinking states, tool calls, streamed text, code diffs, and structured output.

[lassejlv/gpui-starter](https://github.com/lassejlv/gpui-starter): A minimal GPUI desktop application starter demonstrating Zed's GPUI, theme configuration, native application entry points, and basic interaction.

[huacnlee/omarchy-mihoro](https://github.com/huacnlee/omarchy-mihoro): Adds a Mihoro status-bar panel to Omarchy for monitoring proxies, switching operating modes, and managing multiple subscriptions.

[Omarchy Plugins](https://omarchyplugins.com/index.html): An independent community plugin directory for Omarchy Quattro, with source links and copyable installation commands; the page contained no listed plugins when checked.

[kenneth's gitea](https://code.nym.sh/): Kenneth's self-hosted Gitea instance for publicly hosting and browsing Git repositories.

[[2608.13759] GPU Offload in Rust: Portable, Safe, and Fast](https://arxiv.org/abs/2608.13759): Proposes a multi-vendor GPU compilation framework built into rustc and its LLVM backend, retaining Rust's memory safety while approaching CUDA and HIP C++ kernel performance.

[Getting Started with CPUs and GPUs in Rust](https://rust-cpu-gpu-book.void.app/): An open Japanese textbook for web developers that explains how CPUs and GPUs work through Rust code.

[Linux Fundamentals](https://linux-training.be/linuxfun.pdf): A free introduction to Linux and Unix covering the command line, file systems, processes, networking, Shell, and other fundamentals.

[VibeHub](https://vibe-hub.org/): A plain-language, visual glossary of common Vibe Coding terms across frontend, backend, technology stacks, AI, and more.

[Mojo is now fully open source](https://www.modular.com/blog/mojo-open-source) · [Mojo Manual](https://mojolang.org/docs/manual/): Mojo is now fully open source under Apache 2.0; the official manual covers its syntax, type system, memory model, and heterogeneous hardware programming, and is a useful starting point for comparing Mojo with Triton, CUDA, and TileLang.

[OJO](https://ojo.art/): A product workspace where multiple AI design agents collaborate to turn natural-language requirements into research, UI, interactive prototypes, code, and engineering handoff.

[Git at any scale](https://cursor.com/blog/git-at-any-scale): Cursor reviews the storage and consistency challenges of large-scale Git hosting and introduces Continuity, an architecture centered on a write-ahead log in S3.

[Computer History Preview](https://github.com/trycua/cua/blob/main/libs/cua-driver/docs/computer-history-preview.md): An experimental Cua Driver feature that stores encrypted action metadata and lets authorized agents query recent history through a read-only interface.

[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design): An editorial diagram skill for coding agents such as Claude Code and Codex, generating multiple kinds of self-contained HTML and SVG diagrams that can adopt a project's brand style.

[fx](https://fx.sh/): A lightweight open-source coding-agent CLI written in Zig, emphasizing its roughly 6 MB size, fast startup, low context overhead, and embeddability.

[Ladybird](https://ladybird.org/): An open-source browser project backed by a nonprofit and independently developing its browser engine and complete web platform stack.

[Zellij.online](https://zellij.online/): Shares Zellij terminal sessions directly on the web without SSH, port forwarding, or extra network configuration.

[Briq](https://briq.build/): A native agent-assisted development workspace for Windows 11, designed to manage several coding agents in parallel.

[OpenLogi](https://openlogi.org/en#install): A local-first Logitech Options+ alternative written in Rust, using HID++ to remap buttons and control DPI and SmartShift without accounts or telemetry.

[terminal-code](https://terminal-code.com/) · [zenbu-labs/terminal-code](https://github.com/zenbu-labs/terminal-code): An open-source development tool that brings VS Code workspaces into the terminal.

[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio): A fully local, open-source ElevenLabs alternative supporting voice cloning, dubbing, dictation, transcription, audiobook production, and more.

[Subdomain Enumeration via Certificate Transparency](https://crt.name/): Passively enumerates known subdomains from public Certificate Transparency data and reports when each one first appeared.

[fross100/omaplug](https://github.com/fross100/omaplug): An independent Omarchy plugin manager for enabling, disabling, updating, installing, and removing plugins.

[lijiawei0305-pixel/omarchy-mihomo-plugin](https://github.com/lijiawei0305-pixel/omarchy-mihomo-plugin): An Omarchy status-bar plugin for a standalone mihomo core.

[Omarchy Manual in Chinese](https://omarchy.iamcheyan.com/): A community Chinese translation of the official Omarchy manual, covering installation, configuration, keyboard shortcuts, and system usage.

### macOS / Productivity / Other

[McanKul/offpdf](https://github.com/McanKul/offpdf): A suite of 23 fully local, open-source PDF tools for editing, merging, converting, compressing, OCR, and more, with no uploads and complete offline support.

[ddlmanus/MacOptimizer](https://github.com/ddlmanus/MacOptimizer): A SwiftUI macOS optimization and application-management utility with resource monitoring, app removal, junk cleanup, and large-file discovery.

[AeroSpace Guide](https://nikitabobko.github.io/AeroSpace/guide): The complete guide to AeroSpace, an i3-like tiling window manager for macOS.

[Hammerspoon](https://www.hammerspoon.org/): A macOS automation tool that bridges system APIs and Lua to orchestrate windows, applications, keyboard and mouse input, the clipboard, networks, and hardware events.

[Cap](https://cap.so/): An open-source tool combining screen recording, screenshots, editing, and video hosting, with support for storing recordings in your own Google Drive or S3 bucket.

[Inkdrop](https://www.inkdrop.app/#pricing): A cross-platform Markdown note app for developers with end-to-end encrypted sync and note-context access for MCP clients such as Claude Code.

[How things win](https://stephango.com/moats): Steph Ango distills 80 strategies for building advantages, creating moats, and surviving over time from examples in biology and business.

[Departure Mono](https://departuremono.com/): A retro pixel-style monospaced font by Helena Zhang, released for free under the SIL Open Font License.

[Design bookmarks](https://anthonyhobday.com/sideprojects/designbookmarks/): Anthony Hobday's topical collection of bookmarks for web and visual design references.

[Arcotype](https://www.arcoty.pe/app): A curated directory for discovering less overused typefaces, all available under the SIL Open Font License.

[Tuval](https://tuval.app/): An open-source tool that turns an Android tablet into a graphics tablet, supporting pressure, tilt, hover, low-latency transport, and screen mirroring.

[starcat-app/Starcat](https://github.com/starcat-app/Starcat): A native macOS GitHub Stars manager that turns saved repositories into a personal knowledge base with tags, notes, full-text and semantic search, AI summaries, and more.

[Metalterm](https://metalterm.dev/): A native macOS terminal for Apple Silicon that renders through Metal 3 and provides command blocks, fast search, and a command palette.

[missuo/herdrm](https://github.com/missuo/herdrm): A native macOS console for herdr that brings together coding-agent status across local and remote devices and connects directly to each live terminal.

[Writer](https://writer.computer/): A free, open-source, lightweight, local-first Markdown editor for macOS with Mermaid, tables, HTML, YAML Frontmatter, and multi-window workspaces.

[Pulse](https://www.pulseticker.app/zh): A native macOS menu-bar stock ticker for quickly checking watchlist prices and market movements.

[Normal Tools](https://www.normaltools.com/): A collection of 193 calculators, converters, checkers, generators, and hardware tests that run directly in the browser with no account or download.

[Product Now](https://product.now/): A daily curated discovery site for new digital products in AI, design, productivity, and related fields.

[Look](https://noah-code.com/docs/look): A keyboard-first macOS launcher focused on quickly performing local actions.

[@@ for Mac](https://atatapp.com/): A native tool for invoking an AI agent from any text field on macOS.

[byrencheema/airstats](https://github.com/byrencheema/airstats): A low-overhead macOS menu-bar system monitor showing CPU, memory, GPU, network, disk, battery, and temperature data.
