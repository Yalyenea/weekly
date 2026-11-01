---
title: Weekly 31
date: '2026-11-01'
draft: false
slug: week-31
math: false
translationKey: weekly-31
obsidianSource: pages/07-Personal/Blog/Weekly/Week-31.md
sourceDigest: 82a66d37d69dc9c9b8ac3ce16bce47103b904febc318997f27a99b9541dacd96
summary: AI-produced mathematical results and training research, agent tooling, native
  UI resources, design inspiration and desktop apps.
---

### AI / Research / Perspectives

[Anthropic files S-1 for proposed IPO](https://www.anthropic.com/news/s1-sec): Anthropic filed an S-1 with the SEC for a proposed Nasdaq IPO of Class A common stock under the symbol ANT; share count and price range are still undetermined.

[Introducing Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/): Google’s new frontier model for cybersecurity and long-horizon work: #1 on the Artificial Analysis index, 88.2% on SEC-bench Pro, and ~80% fewer high-severity misalignment alerts internally; rolling out first to cyber defenders via the Fairwind Program.

[How Gemini 4 Argon Upleveled Agents on Antigravity](https://antigravity.google/blog/gemini-4-argon-trillion-edge-graphs-and-tpu-kernels): Google’s account of Gemini 4 Argon agents compressing months of systems work into days: Teamwork built FarArray, an RDMA-based PGAS scaling lock-free graph algorithms to 1.14 trillion edges at 60–90× TCP key-value baselines, and authored verified O(N)-memory Pallas SpMM kernels. Humans kept the architecture and acceptance criteria; agents did the implementation.

[Introducing Fern — Mirendil](https://mirendil.com/news/introducing-fern/): Fern, Mirendil’s first model, pretrained from scratch with up to a 10M-token context window for high-volume agentic work like reading whole agent traces and auditing training data.

[Training Foundation Models with a Single Algorithm](https://arxiv.org/abs/2610.40564): Derives RL objectives as maximum-likelihood fitting to model-generated target distributions, placing pretraining, midtraining, SFT and RL under one likelihood-based algorithm.

[Nestor: Nested Sparsity for Scalable Pretraining and Continual Learning](https://ma-lab-berkeley.github.io/Nestor/): A nested-sparsity transformer from Yi Ma’s group: like MoE, but routing attention — tokens go to a few attention “columns”, each with its own experts and router, so the two forms of sparsity compose. It beats MoE at equal compute and sparsity, and adapts faster in continual pretraining.

![](/images/c1a721b3ab14cd3c00b6.svg)

[Competing Learning in Hybrid Architectures](https://arxiv.org/abs/2610.26830): Identifies a “competing learning” phenomenon in hybrids of linear recurrence and softmax attention: whichever layer learns a function first suppresses the signal for the others; stopping recurrence updates mid-training restores it.

[Dynamic Chunking for End-to-End Hierarchical Sequence Modeling](https://arxiv.org/abs/2507.07955): The H-Net paper: dynamic chunking replaces tokenization with learned, content-dependent segmentation inside an end-to-end hierarchical model. A byte-level H-Net beats a compute- and data-matched BPE Transformer, with ~4× data-efficiency gains where tokenization priors are weakest — Chinese, code and DNA.

[From Tokens to Bytes I](https://www.cartesia.ai/blog/from-tokens-to-bytes-part-1) · [II](https://www.cartesia.ai/blog/from-tokens-to-bytes-part-2): Cartesia’s two-part report: a data-controlled H-Net scaling ladder against a robust BPE baseline with analysis of learned behaviors such as in-context tokenization; part two isolates pretokenization as BPE’s hidden prior and uses loss-to-loss scaling laws to quantify what end-to-end learning buys over hand-engineered priors.

[Neural Thickets](https://arxiv.org/abs/2603.12228) · [Rethinking Neural Thickets](https://kyutai.org/logit-psv/) · [Without Weight Perturbations](https://arxiv.org/abs/2610.40649): Neural Thickets claims pretrained weights sit amid dense “thickets” of task experts reachable by perturb-select-vote without training. Kyutai’s follow-up — an interactive post and a paper — shows the gain comes from output diversity, selection and voting: a random bias on the logits alone suffices.

[NanoDreamer: Learning to Act Through Imagination](https://www.benjamin-bai.com/projects/nanodreamer): A GPU-less author built a 750k-parameter miniature Dreamer from scratch — own autograd, tensor library and transformer — whose actor learns entirely through imagination and clears all 5 MinAtar games on a MacBook. The write-up walks through every failure and fix.

[bux](https://github.com/pilot7747/bux/): A JAX framework for pre-training ablations: models are written as an algebra over the residual stream in .bux files, any line expands into a sweep with `|`, and everything is checked before it runs — from a laptop CPU to multi-node GPU clusters.

[resin](https://github.com/ekzhang/resin): ekzhang’s experimental building blocks for LLM inference: a headless Rust engine handles scheduling, KV cache and metrics while model-specific kernels run the forward pass; used to vibe-code standalone engines rivaling vLLM and SGLang, explicitly not production-grade.

[Unlimited-OCR](https://github.com/baidu/Unlimited-OCR): Baidu’s Unlimited OCR Works series for one-shot long-horizon document parsing; version 2 reaches unlimited-horizon parsing with SR-SWA and ships the MarathonDocBench ultra-long-document benchmark, with open weights.

[PSI: five results on open quantum problems](https://psi.inc/research/oqp-batch-2026/): PSI researchers, working with their AI research system, report new results on five open problems in quantum information theory, each with a paper, a Lean formalization and verification code, plus a log of how AI was used in each.

[AI for Science expands to foundations and institutions](https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions): Anthropic expands its AI for Science program, routing free Claude credits through funders like Sloan, Simons and NSF and institutions such as STScI, Sanger and EMBL.

[Working with academic communities to build scientific understanding](https://openai.com/index/building-scientific-understanding-with-academic-communities/): OpenAI on working with academic communities to build scientific understanding.

[How we detect frontier model misalignment](https://openai.com/index/how-we-detect-frontier-model-misalignment/) · [Scaling Misuse Detection with Self-Assessment](https://safeguards.anthropic.com/2026/self-assessment/): Safety monitoring at two labs: OpenAI details a multilayer misalignment-detection stack — activation probes, model reviewers and investigative agents — that once flagged a model reaching the internet via DNS mid-training; Anthropic’s self-assessment has Claude grade each conversation’s safety right after replying, under 2% extra inference cost thanks to the warm KV cache.

[The eternal complement](https://openai.com/index/the-eternal-complement/): First essay in OpenAI’s “Intelligence Age” series: genius is only one input to progress, complemented by the institutional intelligence of execution — weighing a civilization of depth against one of width.

[LLM Voice](https://martinfowler.com/bliki/LLM-Voice.html): Martin Fowler on the “LLM voice”: prose has its own uncanny valley, and even human-edited LLM drafts are hard to de-flavor — writing is a tool for thinking he refuses to delegate.

[Time in the Chaos](https://pages.cs.wisc.edu/~sharonli/time-in-the-chaos.html): Sharon Li reflects on declining OpenAI in 2018 without regret: environments shape who we become, and decisions should be judged by the information and values held at the time.

[A Visual Guide to Multimodal Generation](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-multimodal-generation): Fifty-plus custom diagrams on how multimodal LLMs generate images, audio and video: diffusion internals, acoustic and semantic audio tokens, and late- versus early-fusion architectures.

### Mathematics / Research / Learning

[formal-math/eth: a 2^o(n) algorithm for #3-SAT](https://github.com/anthropics/formal-math/tree/16a5ce41304fcdaea4e0be7c132e1c361dc26da5/eth): A paper and Lean 4 formalization in Anthropic’s formal-math repo: an internal Claude model derived a deterministic 2^O(n log log n / √log n) algorithm for #3-SAT, refuting the Exponential Time Hypothesis; purely asymptotic, nothing practical.

[An Outline of OpenAI’s Algorithm for k-SAT in 2^{o(n)} Time](https://msellke.com/Files/ETH-False-Slides.pdf): Slides by Mark Sellke outlining OpenAI’s algorithm solving k-SAT in 2^{o(n)} time for all k — a claim that, if correct, would refute the ETH.

[quasi-rh-hillclimb](https://github.com/rohanarun/quasi-rh-hillclimb): An open follow-up to OpenAI’s Quasi-RH preprint claiming a zero-free half-plane Re(s) > 7/8: contributors and AI agents hill-climb the inequality’s parameters to θ ≈ 0.8739, with script-auditable certificates and an independent Lean 4 re-verification.

[Formalizing the Enormous Theorem](https://axiommath.ai/research/the-enormous-theorem-formalized/): Axiom’s first complete computer-checked proof of the classification of finite simple groups — the ~15,000-page “enormous theorem” across 500+ papers. Directed swarms of AI agents produced ~43.1M lines of Lean in 24 days, surfacing 34 noteworthy deviations from the published record.

[CircuitBreaker](https://www.yukon.org/circuitbreaker): Yukon’s open challenge with UCLA Math+AI: prove an unconditional gate lower bound for one explicit Boolean family in NP. AI solvers have pushed the frontier to a coefficient of 4n; the end goal is a superpolynomial bound — P ≠ NP.

[Enumerating primes on a Turing machine in nearly linear time, unconditionally](https://nor-blog.pages.dev/posts/2026-10-27-enumerating-primes/): De-conditionalizes Harvey’s recent prime-enumeration result: the primes below N are listed deterministically in N(log log N)^{1+o(1)} bit operations on a multitape Turing machine, with a lay-friendly intuition note alongside the full paper.

[Integer Multiplication Crossover Lab](https://alejandrozu.github.io/integer-multiplication-crossover-lab/#pr=4470&tab=frontier): An interactive explorer for the input size at which a new integer multiplication construction actually beats Harvey–van der Hoeven, separating full runtime comparisons from conditional cost models; sizes shown as log₂ log₂ n.

[The motion of point particles in curved spacetime](https://arxiv.org/abs/1102.0529): Poisson, Pound and Vega’s Living Reviews classic on the self-force: bitensors and curved-spacetime Green’s functions built from scratch, deriving the equations of motion for a point scalar charge, electric charge and mass.

[Every Joule](https://iamtechartist.com/every-joule/): An interactive physics book in ten lessons on the GCSE/IGCSE energy topic: every diagram lifts off the page as a 3D ink drawing with glowing energy flows, and students predict, test and prove each idea.

[Atlas of Physics](https://atlas-of-physics.vercel.app/) · [Atlas](https://atlasclass.app/): An interactive 3D physics textbook built from the author’s 174 pages of notes: scroll through mechanics and E&M chapters, click to pull vectors and graphs apart, and answer questions right on the diagram.

[SystemDesign.io](https://systemdesign.io/): A curated table of system design interview questions tagged by company and difficulty, from URL shorteners to distributed tracing, most with reference solutions.

[Shiji Wiki](https://shiji.memify.wiki/wiki/index.html): A wiki-style site presenting the Records of the Grand Historian (Shiji).

### Programming / Agent Tools

[Droid 1.0: Building a Frontier Harness](https://factory.com/news/frontier-harness): Factory’s model-agnostic agent harness now defaults to programmatic tool calling — the model writes sandboxed JavaScript that batches hundreds of tool calls — beating native harnesses on Terminal-Bench at lower cost.

[Orb](https://orb.thomas.md/): One place to connect AI subscriptions, API keys and machines, orchestrating Claude Code, Codex, Antigravity, OpenCode and Grok from macOS and iOS; formerly sandboxed.sh.

[Noodle](https://usenoodle.app/): Open-source personal AI agents for Mac: each agent gets a name, a backstory, its own workspace and a private Linux desktop, and several can collaborate in one chat; iPhone pairing for remote use.

[agentbox](https://github.com/savannahfeder/agentbox): An inbox for your agents: run dozens of Claude Code and Codex agents in parallel, each in its own git worktree, and answer them like email — on the plan you already pay for, no server or account.

[Herdr](https://herdr.dev/): An open-source terminal app for running many agents at once: a persistent local core keeps every session alive, agents can spawn and steer helper agents, and the whole UI lives in plain config files your agent can rewrite.

[agent-desktop](https://github.com/vercel-labs/agent-desktop): Vercel Labs’ Rust CLI/C library for desktop computer use: reads any app’s real UI through OS accessibility trees and acts on stable refs, keeping actions safe to retry instead of guessing from pixels.

[Tencil](https://tencil.dev/): Point at an element on your dev page and your coding agent edits the code — component, source file and markup travel with the selection; works with Claude Code on Next.js and Vite.

[Answer me with HTML](https://answer-me-with-html.com/#install): An agent skill where the model writes a ~600-token markdown draft and a bundled CLI renders the rest — diagrams, tables and style checks — into a self-contained HTML page, at about 8× fewer output tokens.

[Forge for ChatGPT](https://chatgpt.com/plugins/forge): A ChatGPT plugin that connects to your Forge workspaces: find hosted React “fragments” by description, preview their variants live in the conversation and reuse the UI.

[fitstream](https://github.com/alexshtf/fitstream): A small library that treats a PyTorch training loop as an event stream: each epoch yields an event, and validation, early stopping and metrics compose as ordinary iterator transforms via pipe(...).

[blaze](https://github.com/indexable-inc/blaze): A drop-in cargo replacement whose daemon rebuilds only what an edit changed, claiming incremental builds up to 92× faster than cargo/rustc, validated on real projects like zed, servo and Codex CLI.

[bbtree](https://blog.xiangpeng.systems/posts/bbtree/): Xiangpeng Hao’s ordered map claiming the fastest B-tree: 5× std’s BTreeMap on one thread, 12× crossbeam-skiplist at 96 threads, 30% less memory; as an LSM-tree memtable it speeds four systems 1.37–6.83×.

[Telling identical GPUs apart with one line of PyTorch](https://divagr.com/blog/telling-identical-gpus-apart): Physically identical GPUs carry stable fingerprints in the ordering of atomic floating-point adds: a plain torch.index_add_ call with the right input re-identifies 19 A40s at 99.1%, surviving container restarts.

[VPS picks for Claude Code](https://vps.appsail.dev/?sort=testip&dir=asc): A VPS picker for running Claude Code from China: plans sorted by measured return-route latency with CN2 GIA / 9929 labels and refund policies, plus combos pairing a main box with a cheap relay.

### Development / Native UI

[Wraith Terminal](https://wraithterm.com/): A WebGPU terminal renderer for the browser driven by Ghostty’s libghostty-vt engine, drop-in compatible with the xterm.js API while using about 4× less CPU; the page races it against xterm on your own hardware.

[CrychicUI](https://crychicui.zhangyanghaha0407.workers.dev/#/): A Go component library for egoist’s MyGo native UI framework: 1,500 components in 38 categories, GPU-drawn without WebView, every component animated and interactive ones sounding; the site is the gallery app compiled to WebAssembly.

[NSGo](https://oneo-me.github.io/nsgo/): A cross-platform native UI engine: signals, layout and text run in Go while each platform draws with its own views — AppKit, Android Views, Direct2D, GTK 4 or the DOM — targeting six platforms from one codebase.

[Amicro](https://amicro.dev/): A library of React micro-interaction components focused on small, polished motion.

[Nexvyn UI](https://ui.nexvyn.dev/components): A component library site: 32 CTA/FAQ blocks plus 20 unique and 14 basic components, from Fluid Orb and Blossom Picker to device mockups — mostly visual and motion pieces.

### Design / Creation / Productivity

[Music Lenses](https://pliploop.github.io/sparse-steer-retrieval/lenses/): An explorable map of a music collection from the Sparse Steerable Retrieval project: drag to pan, click a waveform to play; built-in lenses organize neighbours while retaining about 80% of member variance.

[Opus 5.5 + Codex: anime characters on your desktop (Bilibili tutorial)](https://www.bilibili.com/video/BV1E3nU6QEps/): A Bilibili tutorial on making videos where anime characters interact with the computer desktop using Opus 5.5 and Codex, with the full prompts and workflow shared.

[Motion Prompt](https://showheyohtaki.github.io/motion-prompt/): A named vocabulary of motion samples you browse, pick and hand to an AI for video editing or generation; every sample ships as a dependency-free Canvas 2D function.

[ASCII Magic](https://www.ascii-magic.com/): Turns images and video into ASCII art in the browser: 100+ styles, real-time post effects, AI generative presets and up-to-4K export — plus an MCP server so agents can drive the whole pipeline.

[INITIĀLIS](https://initialis.azlen.me/): Azlen’s endless explorer for ornamental drop caps: letter, frame, ornament, texture and inks all drawn procedurally in the browser; pick one to spawn variations, then export PNGs or animated WebP and MP4.

[florilegium](https://github.com/kevinraymond/florilegium): A LuaLaTeX package that procedurally grows Delft-blue floral page margins in Lua — parametric petals and stems plus a greedy space-filling loop, a different garden on every page; includes a browser playground.

[Geist Serif](https://vercel.com/font?type=serif): Vercel’s Geist family adds a serif alongside Sans, Mono and Pixel, keeping the Swiss-inspired minimalism; the site ships an interactive glyph inspector and playground.

[Kibernetyk Mono](https://pavlokilko.github.io/KibernetykMono/): A monospace font in 7 weights with 600 glyphs, featuring complete block-element and box-drawing support aimed at dense terminal dashboards and ASCII diagrams.

[Reference](https://azivor.github.io/reference/): A visual-study collection dissecting the design of Anthropic, OpenAI, Grok and Perplexity; each image carries a credited source and an independent design observation, with saves kept locally in the browser.

[Unseen Studio](https://unseen.co/) · [The Symphony of Vines](https://symphonyofvines.unseen.co/): A brand and motion studio making immersive sites — its homepage is itself a click-and-hold piece. Its Symphony of Vines project lets your cursor carve glaciers and conduct rivers to tell how the land made the wine.

[Lusion](https://lusion.co/): An award-winning studio blending creative direction, 3D craft and interactive development to build immersive brand experiences on the web.

[Resn](https://resn.co.nz/#!/work/): A New Zealand creative digital agency spanning ideation, design and development, with a portfolio of interactive sites.

[Abetka](https://obys.agency/work/abetka): Obys’s Webby-nominated cultural site for the Projector Foundation: each of the 33 Ukrainian letters stands for a national symbol, typeset in a contemporary Ukrainian typeface.

[Immersive Websites — Framer Gallery](https://www.framer.com/community/gallery/vibe/immersive/): Framer’s community gallery of immersive websites — a feed of community-built sites for inspiration.

[Still Night](https://stillnight.joshua-garcia.com/): An interactive web piece built around Van Gogh’s Starry Night that invites you to play the painting.

### Desktop / macOS / Other

[MyGo Cloud Music](https://music.egoist.dev/): A native third-party NetEase Cloud Music desktop client by egoist: stream up to Hi-Res FLAC with local caching, word-by-word lyrics, a notch mini-player, private FM and QR-code login.

[Strata Files](https://github.com/cristipufu/strata-files): A native, keyboard-first Finder alternative for macOS: instant search with natural-language filters, live folder sizes, a disk-usage map, dual panes, per-file Git status and undoable file operations.

[reshelf](https://github.com/aka-kika/reshelf): A local-first macOS app for the open-source repos you actually use: paste a GitHub link and it auto-categorizes onto shelves, clones by category, and flags clones with updates to pull — no account, no cloud.

[ClipBoardLine](https://orkunisitmak.github.io/clipboardline/): A clipboard manager for macOS and Windows that lays images, texts and links out on three shelves, plus a Library window with folders and tags for long-term keeping.

[Drift](https://drift.dvkk.dev/): An open-source Windows screen recorder built with Rust and Tauri: it adds calm auto-zooms, a redrawn gliding cursor and a wallpaper backdrop, exporting straight to a watermark-free MP4.

[velocitty](https://github.com/valvesky/velocitty): A cross-platform terminal claiming to be bottlenecked only by the kernel: CPU-rendered with native libraries and fonts, sixel images and full Unicode — no GPU and no multiplexing, by design.

[Aeon Essays](https://aeon.co/essays): Aeon’s longform essay channel: serious writing on philosophy, science, psychology, society and culture.
