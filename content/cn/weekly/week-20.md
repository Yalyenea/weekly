+++
title = "第20期周刊"
date = 2026-08-17T06:30:47+08:00
draft = false
math = false
summary = "本期周刊收录：AI / 模型 / 智能体、数学 / 科研 / 学习、编程 / 系统 / AI 工具、macOS / 效率 / 其他。"
translationKey = "weekly-20"
+++

### AI / 模型 / 智能体

[Learning more about Claude's mathematical capabilities](https://www.anthropic.com/research/riemann-zeta)：Anthropic 介绍未发布的 Claude 研究模型如何把已验证满足黎曼猜想的零点比例下界从 41.6% 提高到 67.2%，并给出论文与 Lean 形式化结果。

[Dyna-2: A 1-Million-Hour Scaling Law for World-Action Models](https://www.dyna.co/dyna-2)：Dyna Robotics 介绍以超过 100 万小时人类视频预训练的世界—动作模型，并研究其在人类与机器人任务上的尺度规律。

[[2608.09867] Stealing Reasoning Traces from Proprietary LLM APIs](https://arxiv.org/abs/2608.09867)：论文展示跨会话复用加密推理块可能泄露专有模型的推理内容，并讨论提示注入风险与缓解方案。

[Introducing Unsloth Desktop](https://github.com/unslothai/unsloth/releases/tag/v0.1.70-beta)：跨 Windows、macOS 与 Linux 的开源桌面应用，用于本地运行、训练、导出和部署多类 AI 模型。

[MiniMaxAI/MiniMax-Music3 · Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-Music3)：MiniMax 发布的音乐生成模型及权重页面。

[Training AI Scientists to Replicate Research · Inherent](https://inherentlabs.ai/research/training-to-replicate)：介绍 Faraday：以复现论文图表为任务、经长时程强化学习训练的 27B AI 科研 agent。

[Measuring Autonomous AI Research](https://www.primeintellect.ai/blog/measuring-autonomous-research)：报告在 nanoGPT 优化器速跑任务上对 18 个前沿模型进行 153 次自主运行的评测。

[SlimeBoyOwO/LingChat](https://github.com/SlimeBoyOwO/LingChat)：带情感表现、桌宠、日程与互动剧情模块的 AI Galgame 聊天应用。

### 数学 / 科研 / 学习

[Problems · TheoremDB](https://staging.theoremdb.pages.dev/problems)：收录数学与理论计算机科学问题的数据库，可按领域、解决状态与 Lean 验证状态筛选。

[[2606.03953] Introduction to stochastic gradient methods](https://arxiv.org/abs/2606.03953)：系统介绍确定性与随机一阶优化方法，涵盖光滑性、凸性、PL 条件、收敛率与方差缩减。

[ComfyResearch: See How Learning Happens](https://meta-circle.com/blog/comfyresearch-see-how-learning-happens)：用可组合图节点表示数据、模型、训练和观测，帮助研究者可视化并比较神经网络的学习动态。

[Hadamard Matrix of Order 668 | Epoch AI](https://epoch.ai/frontiermath/open-problems/hadamard)：FrontierMath 的 668 阶 Hadamard 矩阵构造问题；页面记录了一个由三名研究者与 Claude 协作得到的候选解。

[Matrix Calculus](https://www.matrixcalculus.org/)：可计算向量、矩阵与张量表达式导数并导出 Python 或 LaTeX 的在线符号工具。
- [[2010.03313] A Simple and Efficient Tensor Calculus for Machine Learning](https://arxiv.org/abs/2010.03313)：提出基于 Einstein 记号的张量求导算法，兼顾自动微分表示与高阶导数计算效率。
- [Computing Higher Order Derivatives of Matrix and Tensor Expressions](https://proceedings.neurips.cc/paper/2018/hash/0a1bf96b7165e962e90cb14648c9462d-Abstract.html)：提出直接计算矩阵与张量高阶导数的框架，支持符号、前向和反向自动微分。

[GENO](https://www.geno-project.org/)：通过建模语言描述优化问题，并自动生成可在 CPU 或 GPU 上运行的 Python 求解器。
- [[1905.13587] GENO — GENeric Optimization for Classical Machine Learning](https://arxiv.org/abs/1905.13587)：介绍由声明式问题描述自动生成求解器的 GENO 框架及其在经典机器学习优化问题上的表现。
- [[2203.16340] Optimization for Classical Machine Learning Problems on the GPU](https://arxiv.org/abs/2203.16340)：将 GENO 扩展到 GPU 约束优化，并比较多类经典机器学习问题的求解效率。

[How to keep thinking](https://www.seangoedecke.com/how-to-keep-thinking/)：讨论频繁审阅 LLM 输出对慢思考习惯的影响，并建议通过亲自写作和阅读高密度书籍保持深度思考。

[Free eBooks | Project Gutenberg](https://gutenberg.org/)：以美国版权已到期的旧作品为主、可在线阅读或下载的免费电子书库。

[酒井科协暑培 2026](https://summer26.net9.org/)：2026 年暑期培训课程主页，用于集中发布准备材料、讲义与作业。

[ChapterPal — AI-assisted reading and note-taking](https://www.chapterpal.com/bookstore)：提供上下文问答、主动回忆与渐进阅读功能的 AI 辅助阅读和笔记工具。

[数译 · Math Translations](https://mathtranslations.org/)：公开保存、分享和共同维护中文数学译本、讲义与术语表的社区。

[Algorithm Wiki](https://algorithm-wiki.org/)：按领域、问题、算法家族与变体组织算法资料的知识库。

### 编程 / 系统 / AI 工具

[jcode](https://jcode.sh/)：Rust 编写的开源终端 coding agent，强调低资源占用、多会话并行以及可审计、可定制的运行环境。

[QwenLM/Qwen-MM-Plugins](https://github.com/QwenLM/Qwen-MM-Plugins)：为 Qwen 模型与多种 agent 框架提供图像、视频、OCR、搜索、媒体编辑和 CAD 等多模态插件。

[Optimising fp32 GEMM on A100](https://rwtarpit.github.io/blog/posts/2026-07-25-fp32_matmul_A100.html)：逐步讲解并基准测试 NVIDIA A100 上 fp32 GEMM 的 Tensor Core、PTX、共享内存、异步加载与流水线优化。

[lidge-jun/opencodex](https://github.com/lidge-jun/opencodex/)：在本地把 Codex、Claude Code 等客户端协议转换到多种 LLM provider，并支持流式输出、工具调用与账户路由。

[duolahypercho/codex-router](https://github.com/duolahypercho/codex-router)：把 Anthropic、Kimi、DeepSeek 等外部模型接入 Codex 原生模型选择流程的本地路由器。

[PI from Scratch · 创造属于你的 pi-agent](https://pi-from-scratch.vercel.app/)：从零构建个人 pi-agent 的中文教程；页面当前无法访问，此处仅依据其公开题名描述。

[lassejlv/gpui-starter](https://github.com/lassejlv/gpui-starter)：基于 Zed GPUI、带基础主题与交互示例的最小 Rust 桌面应用模板。

[Beautiful UI — Crafted primitives for AI-native interfaces](https://www.beautifului.dev/)：提供面向 AI 原生界面的可复制组件范例，覆盖流式状态、审批、工具调用、任务、diff、表格与聊天交互。

[raullenchai/Rapid-MLX](https://github.com/raullenchai/Rapid-MLX)：面向 Apple Silicon 的本地模型服务引擎，提供 OpenAI 与 Anthropic 兼容接口，可供 coding agent 和其他客户端调用。

[Waku — one native app for all your coding agents](https://waku.sh/)：以 Rust 与 GPUI 构建的本地原生应用，在一个界面管理多个 coding agent 的会话、工具活动和 Git 检查点。

[pytorch-training-recipe](https://www.skills.sh/jurgendn/agent-skills/pytorch-training-recipe?utm_source=chatgpt.com) · [ml-training](https://www.skills.sh/josiahsiegel/claude-plugin-marketplace/ml-training?utm_source=chatgpt.com) · [pytorch-lightning](https://www.skills.sh/jackspace/claudeskillz/pytorch-lightning?utm_source=chatgpt.com)：三项面向训练工作流的 agent skill，覆盖 PyTorch 复现、通用机器学习训练检查与 PyTorch Lightning 工程组织。

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)：DeepSeek 开源的 agent 运行框架，采用“一切皆插件”的架构，目前处于开发者预览阶段。

[Package Catalog · Pi](https://pi.dev/packages)：Pi coding agent 的扩展、skill、提示模板与主题目录，内容来自 npm 包。

[zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui)：DeepSeek Harness Web UI 的社区插件与皮肤集合，包含任务看板、Git 图、移动端远程界面等功能。

[kenn-io/agentsview](https://github.com/kenn-io/agentsview)：本地优先的 coding agent 会话搜索、分析与 token 使用统计工具。

[Zeron](https://zeron.sh/)：从其他设备实时查看和控制本机 Claude Code、Codex、Grok、Hermes 与 Pi。

[DannyMac180/grok-plugin](https://github.com/DannyMac180/grok-plugin)：通过 MCP 与 xAI OAuth，让 Claude Code 或 Codex 把任务及代码审查委派给 Grok 的插件。

[xiaobright/dsh-anchored-standard](https://github.com/xiaobright/dsh-anchored-standard)：社区实验性 DeepSeek Harness 预设，通过分阶段工具目录控制会话初始轨迹与后续工具开放。

[dshfind](https://dshfind.com/zh)：聚合 DeepSeek Harness 插件，并提供插件指标、课程与论文解读的中文社区。

[blader/humanizer](https://github.com/blader/humanizer)：用于减少文本中常见 AI 生成写作痕迹的 agent skill。

[Maximizing the value of your Claude Code sessions](https://claude.com/blog/maximizing-the-value-of-your-claude-code-sessions)：Anthropic 提供的 Claude Code 会话实践建议，重点讨论如何更有效地利用 token。

[Home | mise-en-place](https://mise.jdx.dev/)：统一管理项目开发工具版本、环境变量与任务的多语言 CLI。

[GPUI Component](https://longbridge.github.io/gpui-component/)：基于 Rust GPUI 构建跨平台桌面应用的 UI 组件库。

[Welcome to Omarchy! — The Omarchy Manual](https://omarchy.org/manual/)：基于 Arch、Hyprland 与 Quickshell 的 Omarchy Linux 发行版官方手册。

[ast-grep](https://ast-grep.github.io/)：面向多种编程语言的快速结构化代码搜索、lint 与批量重写工具。

### macOS / 效率 / 其他

[Tinycast](https://github.com/abue-ammar/tinycast)：以 SwiftUI 与 AppKit 原生实现的轻量 macOS 启动器，集成应用启动、快捷键、剪贴板历史和片段。

[美股编年史｜美股百年走势、估值与回撤](https://historyofmarket.com/)：以交互式图表汇总标普 500、纳斯达克等美国股市的长期走势、收益、估值与回撤。
![image.png](/images/e80308359d75d16f.png)

[VibeCleaner](https://vibecleaner.app/)：本地扫描并按安全等级展示 Xcode、包管理器、Docker、Ollama 等开发缓存的 macOS 原生工具。

[学生教育优惠项目导航](https://nav.edumails.cn/)：汇总软件、购物、娱乐与 AI 工具的学生优惠及教育邮箱认证入口。

[metedata/Remarc](https://github.com/metedata/Remarc)：在 Mac 上通过文字、截图、网页元素或语音留下反馈，并经 MCP 交给 agent 处理。

[Savant](https://savant.computer/)：面向 Mac 与 iPhone 的笔记应用，目前处于早期 alpha 阶段。

[小语文稿 - Moeka](https://moeka.app/zh-cn/)：强调流畅、高性能编辑体验的 Markdown 编辑器。

