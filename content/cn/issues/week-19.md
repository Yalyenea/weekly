+++
title = "第19期周刊"
date = 2026-08-10T00:53:36+08:00
draft = false
math = true
summary = "本期周刊收录：AI / 模型 / 智能体、数学 / 科研 / 学习、编程 / 系统 / AI 工具、macOS / 效率 / 其他。"
translationKey = "weekly-19"
+++

### AI / 模型 / 智能体

[前 OpenAI 推理负责人 JT 与 Gemini pretrain 负责人 Rohan：Continue learning 的未来](https://mp.weixin.qq.com/s/-5raMxvw0sAK-IPGXRaijA?poc_token=HH1Hb2qjigvWAFoOUhDd4eo9oOBqoH5oe9jf4o1z)：围绕持续学习、预训练后的知识更新与模型长期适应能力展开的访谈。

[(Some of) The Models, They Just Don't Want to Learn | Tilde](https://blog.tilderesearch.com/blog/one-layer-deeper)：讨论推理模型的潜在递归深度与训练难题，并通过 One Layer Deeper 竞赛探索架构、优化器和目标函数的协同设计。

[Maple-Preview Model Card — DeepGrove](https://deepgrove.ai/modelcard/index.html)：DeepGrove 的开源 20B-A1B 三值权重推理模型，面向高速端侧推理与适配。

[Xiaomi-Robotics-1](https://robotics.xiaomi.com/xiaomi-robotics-1.html)：小米机器人基础模型，以超过 10 万小时的无本体操作轨迹预训练，再用真实机器人数据完成本体与指令对齐。

[Lattice: an 8 MB static retriever that embeds Wikipedia in 7 minutes](https://huggingface.co/blog/erikkaum/lattice-blog)：介绍约 8 MB 的静态检索模型及纯 Rust 运行时，可在 8 核 M2 MacBook Air 上约 7 分钟嵌入 640 万篇英文 Wikipedia 文章。

[[2606.12683] From AGI to ASI](https://arxiv.org/abs/2606.12683)：梳理从 AGI 走向 ASI 的四条可能路径：规模扩展、范式转移、递归改进与大规模多智能体集体。

[What are AI robots? A complete introductory guide to 2026](https://www.hackster.io/yahboomtechnology/what-are-ai-robots-a-complete-introductory-guide-to-2026-6a4492)：面向入门者介绍 AI 机器人、核心组件、常见类型与应用场景。

[Evolution Strategies at the Hyperscale](https://eshyperscale.github.io/)：提出 EGGROLL，以低秩结构化扰动提升进化策略的 GPU 算术强度；作者报告其在十亿参数、大种群设置下较朴素 ES 获得约百倍吞吐提升，并用于纯整数 RNN 预训练与 RWKV 推理后训练。
![QQ_1786290871751.png](/images/2ab0f54c5263e0ca.png)

### 数学 / 科研 / 学习

[The Daily Diff](https://tdd.cat/)：按日汇集值得阅读的论文、技术文章与讨论，并提供推荐信号和简短导读。

[TensorTonic](https://www.tensortonic.com/)：通过从零实现机器学习算法、CUDA kernel 与经典论文来学习 ML 的交互式练习平台。

[Interactive Machine Learning — Prof Richard Xu](https://ai.richardxu.com/ml/)：以交互式内容讲解机器学习概念与算法的在线课程。

[Inference in Statistical Modelling and Machine Learning](https://inferencebook.org/)：统计建模与机器学习推断教材的配套站点，提供完整 PDF、习题解答、课件及 Python / R notebooks。

[Inference Engineering](https://inferenceengineering.tech/)：从 GPU、CUDA kernel 到量化、KV cache、并行与生产部署的 AI 推理交互式指南。

[Kurate.org — AI Paper Rankings](https://kurate.org/)：由三个 LLM 共同评判机器人、经济学、物理等领域预印本潜在影响力的论文排行站。

[AI Settles a 25 Year-old Problem We Left Behind](https://x.com/DimitrisPapail/status/2086158118354887060)：讨论 MIMO 最大似然检测对应的二值整数最小二乘问题，以及 AI 辅助推进相关理论问题的案例。一般形式的精确求解仍是 NP-hard；多项式时间通常指松弛或近似检测方法。目标问题为：
$$
\min_{\boldsymbol{x}\in\{\pm 1\}^{N}} \lVert \boldsymbol{y}-\boldsymbol{H}\boldsymbol{x} \rVert_{2}^{2}
$$
[JoseDeFreitas/awesome-youtubers](https://github.com/JoseDeFreitas/awesome-youtubers)：按 Web 开发、计算机科学、机器学习、游戏开发与安全等主题整理的技术 YouTube 频道清单。

### 编程 / 系统 / AI 工具

[jcode](https://jcode.sh/)：Rust 编写的开源终端 coding agent，强调低资源占用、并行会话、长任务持续执行与可审计性。

[VisualTeX](https://visualtex.pauljianliao.com/)：可视化编辑并实时预览 LaTeX 公式的在线工具。

[Peezy](https://peezy.p0.systems/)：面向真实项目的终端 coding agent，可在统一界面切换多种模型与 OpenAI-compatible provider。

[Diffs, from Pierre](https://diffs.com/)：基于 Shiki 的开源代码与 diff 渲染库，支持分栏 / 统一视图、批注、冲突处理和交互式接受或拒绝改动。

[yetidevworks/drydock](https://github.com/yetidevworks/drydock)：用一个 Rust TUI 查看多个仓库中未提交、未推送、落后远端与待发布状态。

[Canario](https://rapha.land/canario/)：基于 Rio 引擎的 macOS 终端，提供空间分组、分屏、命令面板、标签预览与全局快速终端。

[Local Studio](https://localstudio.ai/)：本地 AI 工作台，将模型、推理运行时、硬件监控、文件、终端与 agent 放在同一界面，并统一接入 vLLM、SGLang、MLX 和 llama.cpp。

[CNB](https://cnb.cool/)：腾讯的云原生开发平台，以 Everything as Code 管理构建环境、缓存、插件与弹性算力。

[SteveSuv/remix-words-funny](https://github.com/SteveSuv/remix-words-funny)：使用 React Router v7、tRPC、Drizzle、PostgreSQL、HeroUI 与 Docker 构建的全栈英语单词学习项目。

[codecast-sh/codecast](https://github.com/codecast-sh/codecast)：统一记录、检索并远程调度 Claude Code、Codex、Cursor 与 Gemini 会话，支持团队记忆和代码行级 agent 归因。

### macOS / 效率 / 其他

[Tahul/space-rabbit](https://github.com/Tahul/space-rabbit)：移除 macOS Spaces 切换动画，缩短桌面切换等待时间。

[Vorssaint](https://vorssaint.com/) · [vorssaint/vorssaint-utils](https://github.com/vorssaint/vorssaint-utils)：免费开源的模块化 macOS 菜单栏工具箱，覆盖防休眠、硬件监控、音量、网络、磁盘与常用系统开关。

[Side Screen](https://www.sidescreen.dev/)：通过 USB-C 或 Wi-Fi 将 Android 平板变成 Mac 的扩展显示器，支持硬件加速与触控输入。

[migsilva89/imark](https://github.com/migsilva89/imark)：原生 macOS Markdown 阅读器，可跟随文件保存实时刷新；批注直接写入 Markdown 的 HTML 注释中，文件无需上传云端。

