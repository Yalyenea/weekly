+++
title = "Weekly 22"
date = 2026-08-30T20:02:28+08:00
draft = false
math = false
summary = "This issue covers AI / Models / Agents, Mathematics / Research / Learning, Programming / Systems / AI Tools, and macOS / Productivity / Other."
translationKey = "weekly-22"
+++

### AI / Models / Agents

[How Speculative Decoding Makes LLMs Go Brrr](https://leoniemonigatti.com/blog/speculative-decoding.html): Explains speculative decoding through its draft-and-parallel-verification loop and compares approaches including independent draft models, Medusa, MTP, EAGLE, DFlash, and DSpark.

[Training AI to Paint with Code](https://surya.website/rling-qwen-to-paint-with-code): Surya Narreddi’s team used reinforcement learning to train a language model to create editable p5.brush JavaScript paintings, focusing on aesthetic rewards built from hand-rated references and pairwise judgments.

[deepManifold](https://deepmanifold.ai/): Brings together two preprints and related essays that use fixed points, stacked piecewise manifolds, and boundary-conditioned iteration to formulate the geometry, algebra, and computation of neural networks.

[GPT-5.6 Sol Runs Doom in Turing Complete](https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-coder-gets-doom-running-on-a-custom-cpu-designed-by-gpt-5-6-sol-game-viewport-is-overlaid-on-a-pulsing-schematic-of-the-cpu-in-turing-completes-sandbox-environment): According to the creator’s demo and Tom’s Hardware, GPT-5.6 Sol built a virtual RV32IM CPU called Codex-R32 inside Turing Complete and ran a PureDOOM build on it, although the result was not yet playable.

[First Results from Jalapeño](https://openai.com/index/jalapeno-first-results/): OpenAI reports that its first custom inference chip improved both power efficiency and end-to-end latency against the tested comparison systems while serving several large models in InferenceX; the chip remains in production validation.

[GLM-5.3-Flash](https://z.ai/blog/glm-5.3-flash): Z.ai’s first natively multimodal GLM-5 model uses 320B total parameters, 18B active parameters, a hybrid linear-and-sparse attention architecture, and IndexPool to reduce indexing overhead at long context lengths.
![GLM-5.3-Flash architecture and capabilities](/images/4d3146e357b0bed5.png)

[Qwen3.8-Flash-Next](https://github.com/QwenLM/Qwen3.8-Flash-Next): An open-weight multimodal MoE model and an early preview of the Qwen4 architecture, introducing hybrid GDN–QSA attention, gated residuals, and N-gram embeddings.

[Hy4 Preview](https://github.com/Tencent-Hunyuan/Hy4-preview/blob/main/README_CN.md): Tencent Hunyuan’s open-weight flagship MoE preview has 770B total parameters, activates 49B per token, supports a 1M-token context window, and uses Gated DSA, IndexCache, and iHC.

### Mathematics / Research / Learning

[Proswit — Interactive Math Articles](https://www.proswit.com/): A collection of interactive articles on probability, analysis, and foundational mathematics, covering topics such as Bayes’ theorem, the central limit theorem, Brownian motion, and Fourier series.

[Could a Neuroscientist Understand a Microprocessor?](https://www.biorxiv.org/content/10.1101/055624v2.full.pdf): Jonas and Kording applied standard neuroscience analyses to a simulated MOS 6502 microprocessor and found that, although the methods produced patterns resembling neuroscience results, they still failed to recover the processor’s known hierarchical structure and functional mechanisms.

[Symbolica](https://symbolica.io/): A high-performance computer algebra library for Python and Rust that manipulates large symbolic expressions, performs pattern matching, and generates optimized numerical code; its source is viewable, but redistribution and professional use are license-restricted.

[s2 CLI and Skill](https://github.com/huggingface/s2-cli): A read-only Semantic Scholar CLI and agent skill from Hugging Face for searching papers and retrieving references and citations, also used by the Papers with Code chat interface.

[You Are NOT Dumb, You Just Lack the Prerequisites](https://lelouch.dev/blog/you-are-probably-not-dumb/): A personal reflection arguing that difficulty with math and other complex subjects often comes from missing prerequisites, and that rebuilding the foundations can make progress possible.

[Palomar](https://palomar-registry.org/): A public, searchable registry of Lean formalizations that pins source revisions, checks proofs with Lean, and publishes the exact statements, dependencies, and review comments.

### Programming / Systems / AI Tools

[GPUIX](https://github.com/remorses/gpuix): Provides React and TypeScript bindings for Zed’s GPUI, rendering native desktop interfaces directly through Metal, DirectX, or Vulkan without Electron or web views.

[Scrollbar but Cooler](https://github.com/LucasHJin/scrollbar-but-cooler): A front-end experiment that redesigns the web scrollbar while preserving its positional cue and drag interaction.

[Lody](https://github.com/LodyAI/Lody): A shared workspace for coding-agent teams that connects existing agents and machines through ACP and lets people share sessions and dispatch work from desktop, mobile, web, or CLI.

[Archify](https://github.com/tt-a1i/archify): A Node.js rendering and validation system for coding agents that deterministically compiles typed JSON IR into self-contained HTML/SVG maps for architecture, workflow, sequence, data flow, and lifecycle diagrams.

[Gribouille](https://m.canouil.dev/gribouille/): A declarative Grammar of Graphics library for Typst, inspired by R’s ggplot2 and Python’s plotnine.

[Markdown Graphs](https://mdx-graphs.kshv.me/): A set of monospace chart and table components installable through shadcn and embeddable in React/MDX, with some components also offering ASCII versions for README files.

[Fresh](https://github.com/sinelaw/fresh): A terminal text editor built around a zero-configuration, familiar interface, with mouse support, menus, a command palette, LSP, multiple cursors, an integrated terminal, and Git-worktree task orchestration.

[Backend from First Principles](https://github.com/DsThakurRawat/Backend-from-first-Principle): An open collection of backend-engineering notes and code examples spanning HTTP, routing, authentication, databases, caching, concurrency, observability, deployment, testing, and event streaming.

[How Hugging Face Inference Endpoints, Jobs, and Buckets Power Search on Papers with Code](https://huggingface.co/blog/pwc-search#tldr): Hugging Face explains Papers with Code’s hybrid-search architecture: Jobs build paper embeddings offline, Buckets hand off artifacts, Inference Endpoints handle live queries and incremental updates, and RRF combines PostgreSQL full-text search with pgvector retrieval.

### macOS / Productivity / Other

[omacosy](https://github.com/paulsp94/omacosy): An Omarchy-style desktop setup for macOS 26 on Apple Silicon, combining AeroSpace or OmniWM, Karabiner, and custom Swift helpers for dwindle tiling, a Super key, a status bar, focus-follows-mouse, and workspace gestures.

[OmniWM](https://github.com/BarutSRB/OmniWM): An open-source tiling window manager for macOS 26 and Apple Silicon, inspired by Niri and Hyprland and featuring Niri and Dwindle layouts, a workspace overview, a command palette, and optional IPC/CLI control.

[Try Omarchy](https://github.com/themartiano/try-omarchy): Packages an ARM64 Arch Linux image configured with Omarchy Quattro, a QEMU runtime backed by Apple’s Hypervisor Framework, and a Swift/AppKit launcher into a macOS app for Apple Silicon.

[AeroSpace Guide](https://nikitabobko.github.io/AeroSpace/guide): The official end-to-end guide to AeroSpace, covering installation, TOML configuration, layouts, workspaces, keybindings, CLI commands, and multi-monitor behavior on macOS.

[Workout Guide](https://bryllim.github.io/workout-guide/): An open workout illustration library with 302 exercises and 906 transparent SVG frames, searchable by equipment, muscle group, and exercise type, with MIT-licensed code and CC BY-SA 4.0 assets.

[Blue Fish Archive](https://fisharchive.pages.dev/): An unofficial fan-made archive of DeepSeek whale-girl stickers, with a browsable sticker wall, full-size previews, copying, and downloads.
