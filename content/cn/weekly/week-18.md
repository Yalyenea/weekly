+++
title = "第18期周刊"
date = 2026-08-02T04:02:26+08:00
draft = false
math = true
summary = "本期周刊收录：AI / 模型 / 智能体、数学 / 科研 / 学习、编程 / 系统 / AI 工具、设计 / 写作 / 其他。"
translationKey = "weekly-18"
+++

### AI / 模型 / 智能体

[moonshotai/Kimi-K3 · Hugging Face](https://huggingface.co/moonshotai/Kimi-K3)：Moonshot 发布的 Kimi K3 模型权重与模型卡。

[X 上的 ali：“22580: From GPT2 to Kimi3, Explained”](https://x.com/waterloo_intern/status/2081762065392541951)：从 GPT-2 到 Kimi K3 的架构演进串讲。

[cneuralnetwork/smol-kimi-k3](https://github.com/cneuralnetwork/smol-kimi-k3)：约 49M 参数的 Kimi K3 风格小模型，可在单卡 8GB GPU 上训练。

[cneuralnetwork/smol-glm-5.2](https://github.com/cneuralnetwork/smol-glm-5.2)：约 50M 参数的 GLM-5.2 架构研究，含 MLA、DSA、IndexShare、sparse MoE、shared MTP 与 Muon Split。

[Exclusive | Nvidia Invests in Sutskever’s Safe Superintelligence AI Lab - WSJ](https://www.wsj.com/tech/ai/nvidia-bets-on-ilya-sutskevers-new-ai-lab-to-expand-compute-reach-f95596e8?mod=ai_lead_pos1)：Nvidia 投资 Ilya Sutskever 的 SSI，以扩展算力与合作触达。

[Compression and Intelligence — Ryan Greene](https://www.greene.sh/compression-and-intelligence/)：讨论压缩、智能与 LLM 之间的关系。

[Physics of Language Models](https://physics.allen-zhu.com/)：Allen Zhu 等的语言模型“物理”研究系列：从架构与训练机制解释 LLM 行为。

[解构 Scaling Law：优化、架构、数据的三重奏 - 科学空间](https://kexue.fm/archives/11833)：从优化、架构与数据三方面拆解 scaling law 的形成与约束。

[MinghuiChen43/awesome-deep-phenomena](https://github.com/MinghuiChen43/awesome-deep-phenomena)：持续更新的深度学习有趣经验现象与论文列表。

[AI Explorables | PAIR](https://pair.withgoogle.com/explorables/)：Google PAIR 的交互式 AI 概念探索页，用可视化帮助理解模型机制。

[Looped Transformer | alphaXiv](https://www.alphaxiv.org/shared/folder/019fa228-032c-761a-a252-a0f13944f90e)：Looped Transformer 相关论文合集。

[Towards Looped Models Done Right](https://ifm-research.notion.site/Towards-Looped-Models-Done-Right-3ade511912ec8128987dfeb7a5580043)：讨论如何正确设计与训练 looped / 循环式模型。

[Explorative Modeling — Unlocking a Third Pretraining Axis and End-to-End Generation | Alexi Gladstone](https://alexiglad.github.io/blog/2026/explorative_modeling/)：提出探索式建模作为预训练的第三条轴。核心思路示例：

```python
losses = []
for i in range(K):
    generation = model.generate()  # e.g., from a different random noise
    losses.append(loss_fn(generation, data))
min(losses).backward()  # only the best generation gets gradients
```

若把 $\min_{i} \mathcal{L}_{i}$ 推广为更一般的 $f(\mathcal{L}_{1},\dots,\mathcal{L}_{K})$，会得到怎样的优化动力学？

[[2604.22951] The Power of Power Law: Asymmetry Enables Compositional Reasoning](https://arxiv.org/abs/2604.22951)：论证自然语言的幂律不对称分布有助于组合推理，而非应被均匀化。
![QQ_1785589438460.png](/images/8872ea254a63401c.png)

[Enigma: Robots that feel right](https://www.enigma.inc/posts/obsessed-encoder)：Enigma 介绍其机器人系统：理解环境并做出“体感正确”的动作。

[maka-agent/maka-agent](https://github.com/maka-agent/maka-agent)：本地优先的 AI 桌面助手。

[ArXivIQ | Grigory Sapunov | Substack](https://arxiviq.substack.com/)：人工精选 ML 论文 + AI 生成深度解读；每日 TLDR 与架构笔记。

[Blog - Ulam](https://www.ulam.ai/blog) · [Research - Ulam](https://www.ulam.ai/research)：AI 研究与 DeepAlgebra 等相关项目。

[Home | CSE 234](https://haoailab.com/cse234-w25/)：CSE 234 Machine Learning Systems 课程主页。

### 数学 / 科研 / 学习

[Mathematics in the age of AI](https://teorth.github.io/tao-web/slides/age-of-ai-icm-2026.pdf)：Terence Tao 在 ICM 2026 相关场合的幻灯片。

[What Is the Inverse Covariance Matrix?](https://gregorygundersen.com/blog/2026/07/26/inverse-covariance-matrix/)：从统计与几何视角解释精度矩阵（逆协方差）的含义与用途。

[[2607.21716] A Defense of the Quadratic Model](https://arxiv.org/abs/2607.21716)：为优化理论中的二次模型辩护：在可处理性与真实 loss landscape 之间权衡。

[AI Agents for the Working Mathematician](https://chaoxu.prof/posts/2026-07-18-ai-agents-for-the-working-mathematician.html)：面向工作中数学家的 AI agent 使用经验与工作流。

[Prompting Toward a Conjecture - Guanyang Wang](https://guanyangwang.github.io/blog/feige-conjecture.html)：多一句“检索文献”如何改变 GPT-5.6 Sol Ultra 在 Feige $1/e$ 猜想上的成功率。

[用 LLM 生成证明并完成形式化验证 - Guanyang Wang](https://guanyangwang.github.io/blog/llm-ktv-lean-zh.html)：LLM 生成证明 + Lean 形式化验证的工作范式；以 1997 KTV 猜想二元矩阵情形为例。

[Ten advances in mathematics and theoretical computer science | OpenAI](https://openai.com/index/ten-advances-in-mathematics/)：OpenAI 汇总的十项数学与理论计算机科学进展。

[UnsolvedMath](https://www.unsolvedmath.com/)：开放数学问题仓库。

[Home | Open Problem Garden](https://www.openproblemgarden.org/)：数学开放问题目录与社区园地。

[Optimization Online](https://optimization-online.org/)：优化及相关主题的 Eprint 仓库。

[Trouble in High-Dimensional Land - Dibya's Blog](https://dibyaghosh.com/blog/probability/highdimensionalgeometry/)：高维几何与概率中的反直觉现象。

[faridrashidi/cnsplots](https://github.com/faridrashidi/cnsplots)：面向 Cell / Nature / Science 风格的出版级绘图工具包。

### 编程 / 系统 / AI 工具

[Herdr: one terminal for the whole herd](https://herdr.dev/)：Agent multiplexer，一个终端管理整群 agent。

[Shuffle - A fast, native file manager for macOS](https://www.shuffleapp.co/)：免费开源的 macOS 原生文件管理器（Rust + GPU 渲染），双栏、标签、命令面板与终端模式。

[Tinycast — a tiny, native macOS launcher](https://abue-ammar.github.io/tinycast/#gallery)：轻量原生 macOS 启动器，模糊搜索、计算器、剪贴板历史与全局快捷键。

[Rust Vs C++ - LLM coded model conversion from PyTorch](https://richiejp.com/rust-vs-cpp-llm-coded-model-conversion-from-pytorch)：用 LLM 将 PyTorch 模型转换逻辑在 Rust 与 C++ 间对照实现。

[icebird1998/drawio-scientific-illustrator](https://github.com/icebird1998/drawio-scientific-illustrator)：通过 MCP 逐步控制 draw.io 画布，做科学插图。

[zeronsh/chat](https://github.com/zeronsh/chat)：统一接入 Claude、OpenAI、Gemini 等多模型的 AI 聊天应用。

[terminal-browser](https://terminal-browser.com/)：直接运行在终端里的真实浏览器。

[Codex Reset — Last Reset Tracker & Live Forecast](https://codex-reset.com/)：Codex 用量重置时间追踪与 24h/48h 预测。

[GPU Glossary](https://modal.com/gpu-glossary)：Modal 维护的 GPU 术语表。

[ascend-ai-coding/awesome-ascend-skills](https://github.com/ascend-ai-coding/awesome-ascend-skills)：华为昇腾 NPU 开发知识库，按分布式 Agent Skills 组织。

[豆包搜索 Custom 版](https://docs.volcengine.com/docs/87772/2272953?lang=zh&_vtm_=a441938.b105878.c67268_0.d65110_2.0.12_11_000J3i1VOqWPtPrMwlQ3ilQxfn2UtC)：火山引擎豆包搜索文档；每月免费 500 次。

[iv-org/invidious](https://github.com/iv-org/invidious)：YouTube 替代前端。

### 设计 / 写作 / 其他

[://argon.red](https://argon.red/)：设计师 blog；相关讨论见 [X 上的 Alpha Argon](https://x.com/alpha_argon/status/2081710366711808031)。

