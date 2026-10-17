+++
title = "Weekly 18"
date = 2026-08-02T03:57:29+08:00
draft = false
math = true
summary = "This issue covers: AI / Models / Agents; Mathematics / Research / Learning; Programming / Systems / AI Tools; Design / Writing / Other."
translationKey = "weekly-18"
+++

### AI / Models / Agents

[moonshotai/Kimi-K3 · Hugging Face](https://huggingface.co/moonshotai/Kimi-K3) — Moonshot's Kimi K3 model weights and model card.

[ali on X: “22580: From GPT2 to Kimi3, Explained”](https://x.com/waterloo_intern/status/2081762065392541951) — a walkthrough of architecture evolution from GPT-2 to Kimi K3.

[cneuralnetwork/smol-kimi-k3](https://github.com/cneuralnetwork/smol-kimi-k3) — a ~49M-parameter Kimi-K3-style small model trainable on a single 8GB GPU.

[cneuralnetwork/smol-glm-5.2](https://github.com/cneuralnetwork/smol-glm-5.2) — a ~50M-parameter GLM-5.2 architecture study with MLA, DSA, IndexShare, sparse MoE, shared MTP, and Muon Split.

[Exclusive | Nvidia Invests in Sutskever’s Safe Superintelligence AI Lab - WSJ](https://www.wsj.com/tech/ai/nvidia-bets-on-ilya-sutskevers-new-ai-lab-to-expand-compute-reach-f95596e8?mod=ai_lead_pos1) — Nvidia invests in Ilya Sutskever's SSI to expand compute reach and collaboration.

[Compression and Intelligence — Ryan Greene](https://www.greene.sh/compression-and-intelligence/) — on the relationship among compression, intelligence, and LLMs.

[Physics of Language Models](https://physics.allen-zhu.com/) — Allen Zhu et al.'s "physics of language models" series, explaining LLM behavior via architecture and training mechanisms.

[Deconstructing Scaling Laws: Optimization, Architecture, and Data - Scientific Spaces](https://kexue.fm/archives/11833) — unpacks scaling laws through optimization, architecture, and data.

[MinghuiChen43/awesome-deep-phenomena](https://github.com/MinghuiChen43/awesome-deep-phenomena) — a curated, continually updated list of interesting empirical deep-learning phenomena and papers.

[AI Explorables | PAIR](https://pair.withgoogle.com/explorables/) — interactive AI concept explorables from Google PAIR that visualize model mechanisms.

[Looped Transformer | alphaXiv](https://www.alphaxiv.org/shared/folder/019fa228-032c-761a-a252-a0f13944f90e) — a paper collection on looped Transformers.

[Towards Looped Models Done Right](https://ifm-research.notion.site/Towards-Looped-Models-Done-Right-3ade511912ec8128987dfeb7a5580043) — on designing and training looped / recurrent-style models properly.

[Explorative Modeling — Unlocking a Third Pretraining Axis and End-to-End Generation | Alexi Gladstone](https://alexiglad.github.io/blog/2026/explorative_modeling/) — proposes explorative modeling as a third pretraining axis. Core idea sketch:

```python
losses = []
for i in range(K):
    generation = model.generate()  # e.g., from a different random noise
    losses.append(loss_fn(generation, data))
min(losses).backward()  # only the best generation gets gradients
```

What optimization dynamics appear if $\min_{i} \mathcal{L}_{i}$ is generalized to an arbitrary $f(\mathcal{L}_{1},\dots,\mathcal{L}_{K})$?

[[2604.22951] The Power of Power Law: Asymmetry Enables Compositional Reasoning](https://arxiv.org/abs/2604.22951) — argues that the power-law asymmetry of natural language helps compositional reasoning and should not simply be flattened.
![QQ_1785589438460.png](/images/8872ea254a63401c.png)

[Enigma: Robots that feel right](https://www.enigma.inc/posts/obsessed-encoder) — Enigma on robots that understand their surroundings and act in ways that "feel right."

[maka-agent/maka-agent](https://github.com/maka-agent/maka-agent) — a local-first AI desktop assistant.

[ArXivIQ | Grigory Sapunov | Substack](https://arxiviq.substack.com/) — hand-picked ML papers with AI-generated deep dives; daily TLDR and architecture notes.

[Blog - Ulam](https://www.ulam.ai/blog) · [Research - Ulam](https://www.ulam.ai/research) — AI research notes and projects such as DeepAlgebra.

[Home | CSE 234](https://haoailab.com/cse234-w25/) — course page for CSE 234 Machine Learning Systems.

### Mathematics / Research / Learning

[Mathematics in the age of AI](https://teorth.github.io/tao-web/slides/age-of-ai-icm-2026.pdf) — Terence Tao's slides on mathematics in the age of AI (ICM 2026 context).

[What Is the Inverse Covariance Matrix?](https://gregorygundersen.com/blog/2026/07/26/inverse-covariance-matrix/) — explains the precision (inverse covariance) matrix from statistical and geometric viewpoints.

[[2607.21716] A Defense of the Quadratic Model](https://arxiv.org/abs/2607.21716) — defends the quadratic model in optimization theory as a tradeoff between tractability and real loss landscapes.

[AI Agents for the Working Mathematician](https://chaoxu.prof/posts/2026-07-18-ai-agents-for-the-working-mathematician.html) — practical AI-agent workflows for working mathematicians.

[Prompting Toward a Conjecture - Guanyang Wang](https://guanyangwang.github.io/blog/feige-conjecture.html) — how one extra sentence about searching the literature changed GPT-5.6 Sol Ultra's success rate on Feige's $1/e$ conjecture.

[Generating Proofs with LLMs and Completing Formal Verification - Guanyang Wang](https://guanyangwang.github.io/blog/llm-ktv-lean-zh.html) — LLM-generated proofs plus Lean formal verification, illustrated on the binary-matrix case of the 1997 KTV conjecture.

[Ten advances in mathematics and theoretical computer science | OpenAI](https://openai.com/index/ten-advances-in-mathematics/) — OpenAI's summary of ten advances in mathematics and theoretical computer science.

[UnsolvedMath](https://www.unsolvedmath.com/) — a repository of open mathematics problems.

[Home | Open Problem Garden](https://www.openproblemgarden.org/) — a directory and community garden of open problems in mathematics.

[Optimization Online](https://optimization-online.org/) — an eprint repository for optimization and related topics.

[Trouble in High-Dimensional Land - Dibya's Blog](https://dibyaghosh.com/blog/probability/highdimensionalgeometry/) — counterintuitive phenomena in high-dimensional geometry and probability.

[faridrashidi/cnsplots](https://github.com/faridrashidi/cnsplots) — a toolkit for Cell / Nature / Science-style publication-quality plots.

### Programming / Systems / AI Tools

[Herdr: one terminal for the whole herd](https://herdr.dev/) — an agent multiplexer: one terminal for a whole herd of agents.

[Shuffle - A fast, native file manager for macOS](https://www.shuffleapp.co/) — a free open-source native macOS file manager (Rust + GPU rendering) with dual panes, tabs, command palette, and terminal mode.

[Tinycast — a tiny, native macOS launcher](https://abue-ammar.github.io/tinycast/#gallery) — a lightweight native macOS launcher with fuzzy search, calculator, clipboard history, and global hotkeys.

[Rust Vs C++ - LLM coded model conversion from PyTorch](https://richiejp.com/rust-vs-cpp-llm-coded-model-conversion-from-pytorch) — LLM-written PyTorch model-conversion logic compared side by side in Rust and C++.

[icebird1998/drawio-scientific-illustrator](https://github.com/icebird1998/drawio-scientific-illustrator) — step-by-step scientific illustration via MCP control of a live draw.io canvas.

[zeronsh/chat](https://github.com/zeronsh/chat) — a unified AI chat app spanning Claude, OpenAI, Gemini, and more.

[terminal-browser](https://terminal-browser.com/) — a real browser that runs inside the terminal.

[Codex Reset — Last Reset Tracker & Live Forecast](https://codex-reset.com/) — tracks Codex usage-reset times with 24h / 48h forecasts.

[GPU Glossary](https://modal.com/gpu-glossary) — Modal's glossary of GPU terms.

[ascend-ai-coding/awesome-ascend-skills](https://github.com/ascend-ai-coding/awesome-ascend-skills) — a Huawei Ascend NPU knowledge base organized as distributed Agent Skills.

[Doubao Search Custom](https://docs.volcengine.com/docs/87772/2272953?lang=zh&_vtm_=a441938.b105878.c67268_0.d65110_2.0.12_11_000J3i1VOqWPtPrMwlQ3ilQxfn2UtC) — Volcengine Doubao Search docs; 500 free calls per month.

[iv-org/invidious](https://github.com/iv-org/invidious) — an alternative YouTube front end.

### Design / Writing / Other

[://argon.red](https://argon.red/) — a designer's blog; related discussion on [X from Alpha Argon](https://x.com/alpha_argon/status/2081710366711808031).
