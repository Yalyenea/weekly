+++
title = "Weekly 20"
date = 2026-08-17T06:30:47+08:00
draft = false
math = false
summary = "This issue covers: AI / Models / Agents; Mathematics / Research / Learning; Programming / Systems / AI Tools; macOS / Productivity / Other."
translationKey = "weekly-20"
+++

### AI / Models / Agents

[Learning more about Claude's mathematical capabilities](https://www.anthropic.com/research/riemann-zeta) — Anthropic describes how an unreleased Claude research model raised the verified lower bound on the proportion of Riemann zeta zeros satisfying the hypothesis from 41.6% to 67.2%, with a paper and Lean formalization.

[Dyna-2: A 1-Million-Hour Scaling Law for World-Action Models](https://www.dyna.co/dyna-2) — Dyna Robotics presents a world-action model pretrained on more than one million hours of human video and studies its scaling behavior on human and robot tasks.

[[2608.09867] Stealing Reasoning Traces from Proprietary LLM APIs](https://arxiv.org/abs/2608.09867) — demonstrates how reusing encrypted reasoning blocks across sessions may expose proprietary reasoning traces, and discusses prompt-injection risks and mitigations.

[Introducing Unsloth Desktop](https://github.com/unslothai/unsloth/releases/tag/v0.1.70-beta) — an open-source desktop application for Windows, macOS, and Linux that runs, trains, exports, and deploys several kinds of AI models locally.

[MiniMaxAI/MiniMax-Music3 · Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-Music3) — MiniMax's model and weights page for its music-generation model.

[Training AI Scientists to Replicate Research · Inherent](https://inherentlabs.ai/research/training-to-replicate) — introduces Faraday, a 27B AI research agent trained with long-horizon reinforcement learning to reproduce figures from research papers.

[Measuring Autonomous AI Research](https://www.primeintellect.ai/blog/measuring-autonomous-research) — reports an evaluation of 18 frontier models across 153 autonomous runs on a nanoGPT optimizer speedrun task.

[SlimeBoyOwO/LingChat](https://github.com/SlimeBoyOwO/LingChat) — an AI-powered galgame chat application with expressive characters, a desktop pet, scheduling, and interactive story modules.

### Mathematics / Research / Learning

[Problems · TheoremDB](https://staging.theoremdb.pages.dev/problems) — a database of mathematics and theoretical computer science problems filterable by field, solution status, and Lean verification status.

[[2606.03953] Introduction to stochastic gradient methods](https://arxiv.org/abs/2606.03953) — a systematic introduction to deterministic and stochastic first-order optimization, covering smoothness, convexity, the PL condition, convergence rates, and variance reduction.

[ComfyResearch: See How Learning Happens](https://meta-circle.com/blog/comfyresearch-see-how-learning-happens) — represents data, models, training, and observations as composable graph nodes so researchers can visualize and compare neural-network learning dynamics.

[Hadamard Matrix of Order 668 | Epoch AI](https://epoch.ai/frontiermath/open-problems/hadamard) — a FrontierMath problem on constructing a Hadamard matrix of order 668; the page records a candidate solution developed collaboratively by three researchers and Claude.

[Matrix Calculus](https://www.matrixcalculus.org/) — an online symbolic tool that differentiates vector, matrix, and tensor expressions and exports results to Python or LaTeX.
- [[2010.03313] A Simple and Efficient Tensor Calculus for Machine Learning](https://arxiv.org/abs/2010.03313) — proposes an Einstein-notation-based tensor differentiation algorithm designed for efficient higher-order derivatives and automatic-differentiation representations.
- [Computing Higher Order Derivatives of Matrix and Tensor Expressions](https://proceedings.neurips.cc/paper/2018/hash/0a1bf96b7165e962e90cb14648c9462d-Abstract.html) — presents a framework for directly computing higher-order matrix and tensor derivatives using symbolic, forward, and reverse automatic differentiation.

[GENO](https://www.geno-project.org/) — describes optimization problems in a modeling language and automatically generates Python solvers for CPUs or GPUs.
- [[1905.13587] GENO — GENeric Optimization for Classical Machine Learning](https://arxiv.org/abs/1905.13587) — introduces the GENO framework for generating specialized solvers from declarative problem descriptions and evaluates it on classical machine-learning problems.
- [[2203.16340] Optimization for Classical Machine Learning Problems on the GPU](https://arxiv.org/abs/2203.16340) — extends GENO to constrained GPU optimization and compares solver performance across classical machine-learning problems.

[How to keep thinking](https://www.seangoedecke.com/how-to-keep-thinking/) — considers how frequently reviewing LLM output can affect habits of slow thought, and recommends writing and reading dense books to preserve deeper thinking.

[Free eBooks | Project Gutenberg](https://gutenberg.org/) — a free ebook library focused primarily on older works whose U.S. copyrights have expired.

[Sakai Association of Science Summer Training 2026](https://summer26.net9.org/) — the 2026 summer training course site for publishing preparatory material, lecture notes, and assignments.

[ChapterPal — AI-assisted reading and note-taking](https://www.chapterpal.com/bookstore) — an AI-assisted reading and note-taking tool with contextual Q&A, active recall, and incremental reading.

[Math Translations](https://mathtranslations.org/) — a community for openly preserving, sharing, and collaboratively maintaining Chinese translations of mathematics texts, lecture notes, and terminology.

[Algorithm Wiki](https://algorithm-wiki.org/) — a knowledge base that organizes algorithm material by field, problem, algorithm family, and variant.

### Programming / Systems / AI Tools

[jcode](https://jcode.sh/) — an open-source terminal coding agent written in Rust, emphasizing low resource usage, parallel sessions, and an auditable, customizable runtime.

[QwenLM/Qwen-MM-Plugins](https://github.com/QwenLM/Qwen-MM-Plugins) — multimodal plugins for Qwen models and multiple agent frameworks, covering images, video, OCR, search, media editing, CAD, and more.

[Optimising fp32 GEMM on A100](https://rwtarpit.github.io/blog/posts/2026-07-25-fp32_matmul_A100.html) — progressively explains and benchmarks Tensor Core, PTX, shared-memory, asynchronous-loading, and pipeline optimizations for fp32 GEMM on NVIDIA A100 GPUs.

[lidge-jun/opencodex](https://github.com/lidge-jun/opencodex/) — a local proxy that translates Codex and Claude Code client protocols to multiple LLM providers, with streaming, tool calls, and account routing.

[duolahypercho/codex-router](https://github.com/duolahypercho/codex-router) — a local router that connects external Anthropic, Kimi, DeepSeek, and other models to Codex's native model-selection flow.

[PI from Scratch](https://pi-from-scratch.vercel.app/) — a Chinese tutorial for building a personal pi-agent from scratch; the page is currently unavailable, so this description relies only on its public title.

[lassejlv/gpui-starter](https://github.com/lassejlv/gpui-starter) — a minimal Rust desktop application template built with Zed's GPUI, including a basic theme and interaction example.

[Beautiful UI — Crafted primitives for AI-native interfaces](https://www.beautifului.dev/) — copyable interface primitives for AI-native applications, covering streaming states, approvals, tool calls, tasks, diffs, tables, and chat interactions.

[raullenchai/Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) — a local model-serving engine for Apple Silicon with OpenAI- and Anthropic-compatible APIs for coding agents and other clients.

[Waku — one native app for all your coding agents](https://waku.sh/) — a native Rust and GPUI application that manages sessions, tool activity, and Git checkpoints for multiple coding agents in one interface.

[pytorch-training-recipe](https://www.skills.sh/jurgendn/agent-skills/pytorch-training-recipe?utm_source=chatgpt.com) · [ml-training](https://www.skills.sh/josiahsiegel/claude-plugin-marketplace/ml-training?utm_source=chatgpt.com) · [pytorch-lightning](https://www.skills.sh/jackspace/claudeskillz/pytorch-lightning?utm_source=chatgpt.com) — three agent skills for training workflows, covering reproducible PyTorch training, general machine-learning checks, and PyTorch Lightning project organization.

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) — DeepSeek's open-source agent runtime with an everything-is-a-plugin architecture, currently in developer preview.

[Package Catalog · Pi](https://pi.dev/packages) — a catalog of npm-distributed extensions, skills, prompt templates, and themes for the Pi coding agent.

[zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) — a community collection of plugins and skins for the DeepSeek Harness Web UI, including a task board, Git graph, and mobile remote interface.

[kenn-io/agentsview](https://github.com/kenn-io/agentsview) — a local-first tool for searching and analyzing coding-agent sessions and token usage.

[Zeron](https://zeron.sh/) — monitors and controls local Claude Code, Codex, Grok, Hermes, and Pi agents from another device in real time.

[DannyMac180/grok-plugin](https://github.com/DannyMac180/grok-plugin) — uses MCP and xAI OAuth to let Claude Code or Codex delegate tasks and code reviews to Grok.

[xiaobright/dsh-anchored-standard](https://github.com/xiaobright/dsh-anchored-standard) — an experimental community DeepSeek Harness preset that stages the tool catalog to shape initial session behavior before enabling the full toolset.

[dshfind](https://dshfind.com/zh) — a Chinese community that aggregates DeepSeek Harness plugins and offers plugin metrics, courses, and paper explainers.

[blader/humanizer](https://github.com/blader/humanizer) — an agent skill for reducing common signs of AI-generated prose.

[Maximizing the value of your Claude Code sessions](https://claude.com/blog/maximizing-the-value-of-your-claude-code-sessions) — Anthropic's guidance on getting more value from Claude Code sessions, with an emphasis on using tokens effectively.

[Home | mise-en-place](https://mise.jdx.dev/) — a polyglot CLI for managing project tool versions, environment variables, and tasks.

[GPUI Component](https://longbridge.github.io/gpui-component/) — a component library for building cross-platform desktop applications with Rust and GPUI.

[Welcome to Omarchy! — The Omarchy Manual](https://omarchy.org/manual/) — the official manual for Omarchy, a Linux distribution built on Arch, Hyprland, and Quickshell.

[ast-grep](https://ast-grep.github.io/) — a fast structural code search, linting, and batch-rewrite tool for multiple programming languages.

### macOS / Productivity / Other

[Tinycast](https://github.com/abue-ammar/tinycast) — a lightweight native macOS launcher built with SwiftUI and AppKit, with app launching, hotkeys, clipboard history, and snippets.

[History of Market](https://historyofmarket.com/) — interactive charts covering the long-term performance, returns, valuations, and drawdowns of the S&P 500, Nasdaq, and other U.S. markets.
![image.png](/images/e80308359d75d16f.png)

[VibeCleaner](https://vibecleaner.app/) — a native macOS utility that scans and classifies Xcode, package-manager, Docker, Ollama, and other development caches by cleanup safety.

[Student Education Discount Directory](https://nav.edumails.cn/) — a directory of student discounts and education-email verification links for software, shopping, entertainment, and AI tools.

[metedata/Remarc](https://github.com/metedata/Remarc) — captures feedback on a Mac through text, screenshots, web elements, or voice and passes it to an agent over MCP.

[Savant](https://savant.computer/) — a note-taking application for Mac and iPhone, currently in early alpha.

[Moeka](https://moeka.app/zh-cn/) — a Markdown editor focused on a fluid, high-performance editing experience.
