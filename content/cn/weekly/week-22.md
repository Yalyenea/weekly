+++
title = "第22期周刊"
date = 2026-08-30T20:02:28+08:00
draft = false
math = false
summary = "本期周刊收录：AI / 模型 / 智能体、数学 / 科研 / 学习、编程 / 系统 / AI 工具、macOS / 效率 / 其他。"
translationKey = "weekly-22"
+++

### AI / 模型 / 智能体

[How Speculative Decoding Makes LLMs Go Brrr](https://leoniemonigatti.com/blog/speculative-decoding.html)：从“草稿—并行验证”流程解释推测解码，并比较独立草稿模型、Medusa、MTP、EAGLE、DFlash 与 DSpark 等技术路线。

[Training AI to Paint with Code](https://surya.website/rling-qwen-to-paint-with-code)：Surya Narreddi 团队通过强化学习训练语言模型生成可编辑的 p5.brush JavaScript 绘画，并复盘如何用人工筛选的参考图与成对评判设计审美奖励。

[deepManifold](https://deepmanifold.ai/)：汇集两篇预印本与配套文章，尝试用不动点、堆叠分片流形和边界条件迭代来形式化神经网络的几何、代数与计算。

[GPT-5.6 Sol 在 Turing Complete 中运行 Doom](https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-coder-gets-doom-running-on-a-custom-cpu-designed-by-gpt-5-6-sol-game-viewport-is-overlaid-on-a-pulsing-schematic-of-the-cpu-in-turing-completes-sandbox-environment)：据演示作者与 Tom’s Hardware 报道，GPT-5.6 Sol 在 Turing Complete 中搭建了名为 Codex-R32 的 RV32IM 虚拟 CPU，并让编译自 PureDOOM 的 Doom 在其上运行，但性能尚未达到可玩水平。

[Jalapeño 首批测试结果](https://openai.com/index/jalapeno-first-results/)：OpenAI 公布首款定制推理芯片 Jalapeño 的自测结果，称其在 InferenceX 上服务多种大模型时，相较测试对照系统同时改善能效与端到端时延；芯片仍处于生产验证阶段。

[GLM-5.3-Flash](https://z.ai/blog/glm-5.3-flash)：Z.ai 发布的 GLM-5 系列首个原生多模态模型，采用 320B 总参数、18B 激活参数以及线性与稀疏注意力混合架构，并通过 IndexPool 降低长上下文索引开销。
![GLM-5.3-Flash 架构与能力示意图](/images/4d3146e357b0bed5.png)

[Qwen3.8-Flash-Next](https://github.com/QwenLM/Qwen3.8-Flash-Next)：开放权重的多模态 MoE 模型，也是 Qwen4 架构的早期预览，引入 GDN 与 QSA 混合注意力、门控残差和 N-gram Embedding。

[Hy4 Preview](https://github.com/Tencent-Hunyuan/Hy4-preview/blob/main/README_CN.md)：腾讯混元开放权重的 MoE 旗舰预览模型，总参数量 770B、每 token 激活 49B，支持 1M 上下文，并采用 Gated DSA、IndexCache 与 iHC。

### 数学 / 科研 / 学习

[Proswit — Interactive Math Articles](https://www.proswit.com/)：汇集概率论、分析与基础数学主题的交互式文章，涵盖贝叶斯定理、中心极限定理、布朗运动和傅里叶级数等内容。

[Could a Neuroscientist Understand a Microprocessor?](https://www.biorxiv.org/content/10.1101/055624v2.full.pdf)：Jonas 与 Kording 将神经科学常用分析方法应用于模拟的 MOS 6502 微处理器，发现这些方法虽能产生类似神经科学研究的模式，仍不足以揭示处理器已知的层级结构与功能机制。

[Symbolica](https://symbolica.io/)：面向 Python 与 Rust 的高性能计算机代数库，可操作大型符号表达式、执行模式匹配并生成优化的数值代码；其源码可查看，但再分发和专业使用受许可证约束。

[s2 CLI and Skill](https://github.com/huggingface/s2-cli)：Hugging Face 开发的只读 Semantic Scholar CLI 与智能体 Skill，可查询论文的参考文献、被引记录和学术图谱搜索，并用于 Papers with Code 的聊天界面。

[You Are NOT Dumb, You Just Lack the Prerequisites](https://lelouch.dev/blog/you-are-probably-not-dumb/)：作者结合个人经历反思学习困难，认为理解数学等复杂主题时的障碍常来自前置知识缺口，并建议回到基础逐步补齐。

[Palomar](https://palomar-registry.org/)：公开、可搜索的 Lean 形式化数学注册表，会固定源代码版本、用 Lean 检查证明，并公开精确陈述、依赖与审查意见。

### 编程 / 系统 / AI 工具

[GPUIX](https://github.com/remorses/gpuix)：提供基于 Zed GPUI 的 React 与 TypeScript 绑定，让组件通过 Metal、DirectX 或 Vulkan 直接渲染原生 GPU 桌面界面，无需 Electron 或 WebView。

[Scrollbar but Cooler](https://github.com/LucasHJin/scrollbar-but-cooler)：重新设计网页滚动条的前端实验，尝试在保留位置提示与拖动功能的同时摆脱浏览器默认外观。

[Lody](https://github.com/LodyAI/Lody)：面向团队的编码智能体共享工作区，可通过 ACP 接入现有智能体与机器，并从桌面、手机、网页或 CLI 共享会话和分派任务。

[Archify](https://github.com/tt-a1i/archify)：供编码智能体使用的 Node.js 图表生成与校验系统，可将类型化 JSON 中间表示确定性编译为架构、工作流、时序、数据流和生命周期图的自包含 HTML/SVG。

[Gribouille](https://m.canouil.dev/gribouille/)：面向 Typst 的声明式 Grammar of Graphics 绘图库，设计受 R 的 ggplot2 与 Python 的 plotnine 启发。

[Markdown Graphs](https://mdx-graphs.kshv.me/)：一套可通过 shadcn 安装并嵌入 React/MDX 的等宽字体图表与表格组件，其中部分组件同时提供可粘贴到 README 的 ASCII 版本。

[Fresh](https://github.com/sinelaw/fresh)：强调零配置和熟悉交互的终端文本编辑器，提供鼠标、菜单、命令面板、LSP、多光标、集成终端及基于 Git worktree 的任务编排功能。

[Backend from First Principles](https://github.com/DsThakurRawat/Backend-from-first-Principle)：一套从 HTTP、路由、认证和数据库延伸到缓存、并发、可观测性、部署、测试与事件流的后端工程公开笔记和代码示例。

[How Hugging Face Inference Endpoints, Jobs, and Buckets Power Search on Papers with Code](https://huggingface.co/blog/pwc-search#tldr)：Hugging Face 详解 Papers with Code 的混合搜索架构：用 Jobs 离线生成论文向量、Buckets 交接产物、Inference Endpoints 处理在线查询与增量更新，再以 RRF 融合 PostgreSQL 全文检索和 pgvector 语义检索。

### macOS / 效率 / 其他

[omacosy](https://github.com/paulsp94/omacosy)：面向 macOS 26 与 Apple Silicon 的 Omarchy 风格桌面配置，组合 AeroSpace 或 OmniWM、Karabiner 与自编 Swift 工具，提供 dwindle 平铺、Super 键、状态栏、焦点跟随和工作区手势等功能。

[OmniWM](https://github.com/BarutSRB/OmniWM)：受 Niri 与 Hyprland 启发、面向 macOS 26 及 Apple Silicon 的开源平铺窗口管理器，提供 Niri 与 Dwindle 布局、工作区总览、命令面板及可选 IPC/CLI。

[Try Omarchy](https://github.com/themartiano/try-omarchy)：将预配置 Omarchy Quattro 的 ARM64 Arch Linux 镜像、基于 Apple Hypervisor Framework 的 QEMU 与 Swift/AppKit 启动器封装成 macOS 应用，让 Apple Silicon 用户直接以虚拟机方式体验 Omarchy。

[AeroSpace Guide](https://nikitabobko.github.io/AeroSpace/guide)：AeroSpace 的官方完整指南，系统说明这款 macOS 平铺窗口管理器的安装、TOML 配置、布局、工作区、快捷键、CLI 与多显示器行为。

[Workout Guide](https://bryllim.github.io/workout-guide/)：开放健身插图库，收录 302 个动作和 906 张透明 SVG 帧，可按器械、肌群与动作类型检索，代码采用 MIT、素材采用 CC BY-SA 4.0。

[蓝色大肥鱼档案馆](https://fisharchive.pages.dev/)：非官方的鲸鱼娘 DeepSeek 同人表情收藏页，提供表情墙、原图预览、复制和下载功能。

