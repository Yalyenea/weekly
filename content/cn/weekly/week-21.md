+++
title = "第21期周刊"
date = 2026-08-23T03:00:15+08:00
draft = false
math = true
summary = "本期周刊收录：AI / 模型 / 智能体、数学 / 科研 / 学习、编程 / 系统 / AI 工具、macOS / 效率 / 其他。"
translationKey = "weekly-21"
+++

### AI / 模型 / 智能体

[math-ai-org/mathcode](https://github.com/math-ai-org/mathcode)：集成 Lean 的终端数学编程 agent，可检查证明目标、搜索声明、验证候选证明并交互式完成形式化证明。

[Cua](https://cua.ai/)：为 computer-use agent 提供 GUI 沙箱与可扩展计算机集群，支持本地及托管部署。

[Introducing Delta](https://zed.dev/blog/introducing-delta)：Zed 推出的多人 agent 编程与审查环境，将代码、对话和工作树实时同步，让人类与 agent 共享开发上下文。

[PyTorch: a reference language](https://docs.pytorch.org/devlogs/compiler/2026-07-25-pytorch-a-reference-language/)：提议将 PyTorch 保留为可执行参考规范，由 LLM 生成显式前向与反向实现并验证二者等价，也引出了 LLM 编写反向传播能否在部分场景取代自动微分的问题。

[wibus-wee/cradle-app](https://github.com/wibus-wee/cradle-app)：桌面优先的 AI agent 管理平台，可统一运行 agent、跟踪任务与会话、协调工作流并接入多个模型提供商。

[Building a distributed training framework from first principles](https://www.youtube.com/watch?v=XoGvCBRnwLs)：Umar Jamil 从基本原理出发讲解如何构建分布式模型训练框架；此处仅依据公开视频标题与作者信息概括。

[Ornith-1.5: From Self-Scaffolding to Self-Improvement](https://ornith.ai/ornith_1_5.html)：让模型自行生成训练任务、任务脚手架和解题轨迹，再通过强化学习形成持续自我改进闭环。

[Famous Deep Learning Papers](https://papers.baulab.info/)：按时间梳理深度学习经典论文，并概括每篇论文的核心问题与历史影响。

[CS 8803 - LLM](https://cocoxu.github.io/CS8803-LLM-spring2026/)：Georgia Tech 2026 春季大语言模型课程主页，汇集预训练、推理、对齐等主题的讲义、论文与学生报告。

[Papers with Code](https://paperswithcode.co/tasks)：按任务浏览机器学习论文、代码实现与基准结果的索引页。

[CopilotKit/openbot](https://github.com/CopilotKit/openbot)：开源 AI 同事平台，为每个 agent 提供独立浏览器、文件与工具环境，并记录其决策和操作。

[Machine Studying](https://jacobxli.com/blog/2026/machine-studying/)：提出让 agent 仅从文档语料自主形成领域专长的“Machine Studying”，并以 StudyBench 探索和衡量这一能力。

[Hot Take: LLM can 'jump'](https://yongzx.github.io/blog/2026/08/08/llm-can-jump)：主张互联知识可让模型沿不同于人类直觉的推演路径实现科学跃迁，并讨论安全与持续学习影响。

[[2608.08003] The Spectral Neuron](https://arxiv.org/abs/2608.08003)：通过仿射矩阵的特征值引入显式非线性，在模型表达力、系数透明度与形状约束之间寻求折中。
![QQ_1787233300714.png](/images/d6e44c2b61efde78.png)

[Learn Inference](https://learn-inference.com/)：以交互方式讲解生成式 AI 的生产推理工程，从注意力 kernel 延伸到多云容量规划。

[The Year in AI Papers: Essential Research from 2025–2026](https://www.1kpapers.com/)：按主题、实验室、引用、代码和日期整理 2025–2026 年重要 AI 论文及简明摘要。

Marin 训练启动：[Harrier K40 数据概览](https://storage.googleapis.com/marin-public/held/harrier-k40-cluster-overview/2026.08.18/index.html?revision=uniform-sampling#cluster-12)展示 23.11T token 在 40 个语义领域与 5 个质量桶中的分布；[535B-A23B 18T Token Hero Run 报告](https://wandb.ai/marin-community/marin_moe/reports/535B-A23B-18T-Token-Hero-Run-Scaling-Ladder--VmlldzoxNzc2MDM5Ng)与[公开跟踪议题](https://github.com/marin-community/marin/issues/8435)记录模型规格、缩放阶梯、训练动力学和风险监测方案。

### 数学 / 科研 / 学习

[Fanout](https://fanout.sh/)：汇集 AI 研究、系统设计与机器学习数学课程、路线图、论文解读及交互实验的技术学习平台。

[Awesome Physics of AI](https://huanranchen.github.io/awesome-physics-of-ai/)：按学习动力学主题整理利用物理学原理理解、预测和解释深度学习的论文与研究脉络。

[[2608.16884v1] Improving the matrix multiplication exponent with modern optimization and AlphaEvolve](https://arxiv.org/abs/2608.16884v1)：结合优化问题重构、机器学习算法与 AlphaEvolve，将矩阵乘法指数的已知上界从 2.371339 改进至 $\omega < 2.371177$。

[Classic Patents](https://classic-patents.com/)：开源历史技术专利博物馆，提供校验后的专利文本、原始 PDF、工程解析和交互式 3D 物理模拟。

[How to Read a Technical Paper](https://www.cs.jhu.edu/~jason/advice/how-to-read-a-paper.html)：建议先限时略读再精读，并边读边用自己的话记录、质疑和构想拓展；LLM 可辅助总结及检索后续评价，具体推敲仍应由读者完成。

[Lean formalization of bounded gaps between primes](https://primegaps.axiommath.ai/)：用 Lean 4 形式化验证有无穷多对相邻素数满足 $p_{n+1} - p_n \leq 246$ 的有界素数间隔定理。

[CS229 Course Notes](https://cs229.stanford.edu/main_notes.pdf)：Stanford CS229 的机器学习课程讲义，系统覆盖监督学习、学习理论、无监督学习与强化学习等基础。

[[2608.16753] Mathematics in the age of AI](https://arxiv.org/abs/2608.16753)：陶哲轩讨论研究级 AI 到来后，数学共同体应如何重新审视数学研究的目标与价值。

[VibeMathed](https://vibemathed.com/)：社区整理此前无人解决、后来由 AI 参与证明或证伪的数学问题，并附可核验来源与验证标签。

形式化数学平台：[lemma.ing](https://lemma.ing/)记录数学问题、推导与研究进展，[Halmos](https://halmos.science/)由 Lean 内核核验用户提交的证明，[TheoremDB](https://www.theoremdb.org/)保存开放问题、证明、失败尝试与贡献归属，[ProofAtlas](https://www.proofatlas.ai/)提供定理解释、Lean 陈述和源码，[Proof.Fail](https://proof.fail/)则用失败案例刻画 LLM 数学能力的边界。

### 编程 / 系统 / AI 工具

[cneuralnetwork/oplogs](https://github.com/cneuralnetwork/oplogs)：面向机器学习与 agent 的本地优先实验追踪工具，可记录指标、制品、系统遥测和 LLM 调用链，无需账号或云服务。

[Latias94/merman](https://github.com/Latias94/merman)：用 Rust 实现的无头 Mermaid 解析、布局与渲染引擎，可输出 SVG、PNG、JPEG 和 PDF 等格式。

[AIcss](https://www.aicss.dev/#components)：提供可复制使用的 AI agent 界面组件，覆盖思考状态、工具调用、流式文本、代码差异及结构化输出。

[lassejlv/gpui-starter](https://github.com/lassejlv/gpui-starter)：精简的 GPUI 桌面应用起始模板，示范 Zed GPUI、主题配置、原生程序入口和基础交互。

[huacnlee/omarchy-mihoro](https://github.com/huacnlee/omarchy-mihoro)：为 Omarchy 增加 Mihoro 状态栏面板，可监控代理、切换运行模式并管理多个订阅。

[Omarchy Plugins](https://omarchyplugins.com/index.html)：Omarchy Quattro 的独立社区插件目录，可浏览源码并复制安装命令；核对时页面尚未收录插件。

[kenneth's gitea](https://code.nym.sh/)：Kenneth 自托管的 Gitea 实例，用于公开托管和浏览 Git 仓库。

[[2608.13759] GPU Offload in Rust: Portable, Safe, and Fast](https://arxiv.org/abs/2608.13759)：提出内置于 rustc 与 LLVM 后端的多厂商 GPU 编译框架，在保留 Rust 内存安全的同时取得接近 CUDA、HIP C++ 的 kernel 性能。

[如何在 Rust 中开始使用 CPU 和 GPU](https://rust-cpu-gpu-book.void.app/)：面向 Web 开发者、通过 Rust 代码讲解 CPU 与 GPU 工作原理的日文开源教材。

[Linux Fundamentals](https://linux-training.be/linuxfun.pdf)：免费 Linux/Unix 基础教材，覆盖命令行、文件系统、进程、网络和 Shell 等核心知识。

[VibeHub](https://vibe-hub.org/)：用通俗语言和可视化方式解释 Vibe Coding 中前端、后端、技术栈及 AI 等常见术语。

[Mojo 全面开源](https://www.modular.com/blog/mojo-open-source) · [Mojo Manual](https://mojolang.org/docs/manual/)：Mojo 以 Apache 2.0 许可证全面开源；官方手册系统介绍语法、类型、内存与异构硬件编程，也适合作为比较 Mojo、Triton、CUDA 与 TileLang 定位的起点。

[OJO](https://ojo.art/)：由多个 AI 设计 agent 协作的产品工作台，可从自然语言需求推进到研究、UI、交互原型、代码及开发交付。

[任意规模的 Git](https://cursor.com/blog/git-at-any-scale)：Cursor 回顾大规模 Git 托管的存储与一致性难题，并介绍以 S3 写前日志为核心的 Continuity 架构。

[Computer History Preview](https://github.com/trycua/cua/blob/main/libs/cua-driver/docs/computer-history-preview.md)：Cua Driver 的实验性功能，会加密记录操作元数据，并允许获授权的 agent 只读查询最近历史。

[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)：面向 Claude Code、Codex 等编程 agent 的编辑风格制图技能，可生成多类自包含 HTML 与 SVG 图表并套用项目品牌样式。

[fx](https://fx.sh/)：用 Zig 编写的轻量开源 coding agent CLI，强调约 6 MB 体积、快速启动、低上下文开销和可嵌入性。

[Ladybird](https://ladybird.org/)：由非营利组织支持、独立开发浏览器引擎与完整 Web 技术栈的开源浏览器项目。

[Zellij.online](https://zellij.online/)：直接把 Zellij 终端会话分享至网页，无需 SSH、端口转发或额外网络配置。

[Briq](https://briq.build/)：面向 Windows 11 的原生 agent 辅助开发工作区，用于并行管理多个 coding agent。

[OpenLogi](https://openlogi.org/en#install)：Rust 编写、本地优先的 Logitech Options+ 替代品，可通过 HID++ 重映射按键并控制 DPI 与 SmartShift，无账号和遥测。

[terminal-code](https://terminal-code.com/) · [zenbu-labs/terminal-code](https://github.com/zenbu-labs/terminal-code)：把 VS Code 工作区带入终端的开源开发工具。

[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)：完全本地、开源的 ElevenLabs 替代品，支持声音克隆、配音、听写、转录和有声书制作等功能。

[Subdomain Enumeration via Certificate Transparency](https://crt.name/)：利用公开 Certificate Transparency 数据被动枚举域名的已知子域，并给出首次出现日期。

[fross100/omaplug](https://github.com/fross100/omaplug)：独立 Omarchy 插件管理器，可启停、更新、安装和移除插件。

[lijiawei0305-pixel/omarchy-mihomo-plugin](https://github.com/lijiawei0305-pixel/omarchy-mihomo-plugin)：为独立 mihomo 内核提供状态栏显示的 Omarchy 插件。

[Omarchy Manual 中文版](https://omarchy.iamcheyan.com/)：Omarchy 官方手册的社区中文翻译，覆盖安装、配置、快捷键与系统使用说明。

### macOS / 效率 / 其他

[McanKul/offpdf](https://github.com/McanKul/offpdf)：提供编辑、合并、转换、压缩和 OCR 等 23 项完全本地运行的开源 PDF 工具，不上传文件且可离线使用。

[ddlmanus/MacOptimizer](https://github.com/ddlmanus/MacOptimizer)：基于 SwiftUI 的 macOS 系统优化与应用管理工具，包含资源监控、软件卸载、垃圾清理和大文件查找等功能。

[AeroSpace Guide](https://nikitabobko.github.io/AeroSpace/guide)：AeroSpace 的完整使用指南；它是一款面向 macOS、操作方式类似 i3 的平铺窗口管理器。

[Hammerspoon](https://www.hammerspoon.org/)：连接 macOS 系统 API 与 Lua 的自动化工具，可编排窗口、应用、键鼠、剪贴板、网络和硬件事件。

[Cap](https://cap.so/)：集录屏、截图、编辑和视频托管于一体的开源工具，支持接入自己的 Google Drive 或 S3 保存录制内容。

[Inkdrop](https://www.inkdrop.app/#pricing)：面向开发者的跨平台 Markdown 笔记应用，支持端到端加密同步，并允许 Claude Code 等 MCP 客户端检索笔记上下文。

[How things win](https://stephango.com/moats)：Steph Ango 从生物与商业案例中归纳 80 种建立优势、形成护城河并长期存续的策略。

[Departure Mono](https://departuremono.com/)：Helena Zhang 设计的复古像素风等宽字体，以 SIL Open Font License 免费发布。

[Design bookmarks](https://anthonyhobday.com/sideprojects/designbookmarks/)：Anthony Hobday 按主题整理的网页与视觉设计参考书签库。

[Arcotype](https://www.arcoty.pe/app)：用于发现非泛用字体的精选目录，收录字体均可按 SIL Open Font License 免费使用。

[Tuval](https://tuval.app/)：将安卓平板变成电脑数位板的开源工具，支持压感、倾斜、悬停、低延迟传输及画面镜像。

[starcat-app/Starcat](https://github.com/starcat-app/Starcat)：原生 macOS GitHub Stars 管理器，通过标签、笔记、全文与语义搜索、AI 摘要等功能把收藏仓库整理成个人知识库。

[Metalterm](https://metalterm.dev/)：面向 Apple Silicon 的原生 macOS 终端，使用 Metal 3 完成 GPU 渲染，并提供命令块、快速搜索和命令面板。

[missuo/herdrm](https://github.com/missuo/herdrm)：herdr 的原生 macOS 控制台，可汇总本机与远程设备上的 coding agent 状态，并接入各自的实时终端。

[Writer](https://writer.computer/)：免费开源、轻量且本地优先的 macOS Markdown 编辑器，支持 Mermaid、表格、HTML、YAML Frontmatter 和多窗口工作区。

[Pulse](https://www.pulseticker.app/zh)：原生 macOS 菜单栏股票行情工具，可快速查看自选标的价格与市场动态。

[Normal Tools](https://www.normaltools.com/)：无需账号和下载、直接在浏览器运行的 193 个计算器、转换器、检查器、生成器与硬件测试工具。

[Product Now](https://product.now/)：每日策展 AI、设计、生产力等领域新数字产品的发现站。

[Look](https://noah-code.com/docs/look)：键盘优先的 macOS 启动器，专注快速执行本地操作。

[@@ for Mac](https://atatapp.com/)：在 macOS 任意文本框中调用 AI agent 的原生工具。

[byrencheema/airstats](https://github.com/byrencheema/airstats)：低占用的 macOS 菜单栏系统监视器，展示 CPU、内存、GPU、网络、磁盘、电池与温度。

