---
title: 第30期周刊
date: '2026-10-25'
draft: false
slug: week-30
math: false
translationKey: weekly-30
obsidianSource: pages/07-Personal/Blog/Weekly/Week-30.md
sourceDigest: 67e832a78cb966cefc3bae4c09a667aca659a330b6cc56fcc99315a24b119cf2
summary: AI 科研与模型训练、原生界面与智能体工具，以及数学学习、设计资源和桌面应用。
---

### AI / 研究 / 观点

[Kimi K3.1 Pro](https://www.kimi.ai/blog/kimi-k3-1-pro)：Kimi 介绍新一代模型的长上下文、编程与 3D 创作能力，以及大规模联合强化学习的工程改进；完整权重计划于 11 月 4 日发布。

[Score Centering 的五种解释](https://qingkeai.online/blog/five-Score-Centering)：从 drift、BPO、理想 baseline、straight-through estimator 和局部分布族五个角度推导 Score Centering，并附相关论文与实现。

[How Biological Synapses Self-Assemble Gradient Learning](https://arxiv.org/abs/2412.20018v2)：提出 Self-Assembling Learning 框架与 Self-Assembling Motif，研究局部突触可塑性规则如何形成近似 stochastic gradient descent 的网络学习动力学。

[You could have invented transformers from memory](https://alexwang.ai/posts/associative-memory/#interactive)：把 linear map、MLP 和 self-attention 理解为不同的记忆存储方式，通过交互示例讨论存储与检索能力。

[Reactive Optimizers](https://xingjianbai.com/reactive-optimizers/)：让智能体观察训练动态，并在训练过程中改写 optimizer 代码，动态调整更新规则与调度策略。

[Pretraining at scale without a pretraining team](https://mirendil.com/news/pretraining-at-scale-without-a-pretraining-team/)：Mirendil 分享由一名研究者配合 AI 智能体完成模型预训练的实验，介绍从零搭建训练系统、数据管线与 kernel 优化的过程。

[The Bitter Lesson for Biology](https://bindwell.com/posts/the-bitter-lesson-for-biology)：Bindwell 分享生物分子相互作用建模中的 scaling laws，讨论数据整理、模型规模与分布外泛化之间的关系。

[Claude 设计蝎毒蛋白结合物](https://www.anthropic.com/research/claude-scorpion-toxin-binder-design)：Anthropic 报告用内部研究模型设计蝎毒神经毒素的蛋白结合物，211 个实验测试设计中有 17 个达到结合标准；毒素中和能力仍待验证。

[LLM 与大规模 formal verification](https://www.anthropic.com/research/formal-verification)：Anthropic 与 Theorem 利用 Claude 为 123 个开源库的 RISC-V 程序证明特定安全性质，并公开部分证明与语义模型。

[Building AGI Using Language Models](https://bmk.sh/2020/08/17/Building-AGI-Using-Language-Models/)：Leo Gao 在 2020 年讨论如何利用语言模型中的 world model，结合记忆、目标与规划构建更通用的智能体。

[Anthropic Public Benefit Fund](https://www.anthropic.com/news/public-benefit-fund)：Anthropic 计划将部分公司股权用于公共利益基金，初始 5% 的安排须经股东批准，并设计了随公司价值增长增加份额的机制。

[Why I’m becoming a professor in AI safety in Beijing](https://sorenmindermann.substack.com/p/why-im-becoming-a-professor-in-ai)：Sören Mindermann 解释赴清华从事 AI safety 研究的考虑，介绍研究计划、北京的合作环境与国际交流机会。

[When It Ships](https://whenitships.com/)：汇集前沿 AI 模型的发布动态、相关新闻与预测市场信息。

### 数学 / 科研 / 学习

[CP-Algorithms](https://cp-algorithms.com/)：面向 competitive programming 的算法与数据结构资料库，提供原理说明和实现。

[Putting the “You” in CPU](https://cpu.land/)：从程序执行出发，串起 CPU、system call、进程与操作系统的工作方式。

[大学物理问题集](https://nanana-2.github.io/physics-site/)：日文大学物理与数学题库，覆盖力学、电磁学、量子力学、统计物理及相关数学方法，附分级题目与讲解。

[How to Learn Mathematics](https://abakcus.com/articles/how-to-learn-mathematics)：按课程、教材与先修关系组织本科数学自学路线，并设置阶段检查点。

[Zlatko’s Quantum Notebook](https://zlatko-minev.github.io/zlatko-minev-quantum-repository/?shelf=lectures)：Zlatko Minev 的量子计算讲座、课件与笔记，涉及 superconducting qubit、量子测量、噪声与 error mitigation。

[Looped Model Atlas](https://huskydoge.github.io/looped-model-atlas/)：用动画梳理 looped Transformer 的不同设计，展示层间读取关系与额外计算深度的来源。

[Mathua](https://mathua.com/)：开源自适应数学学习平台，通过先修知识检查、生成练习与 spaced repetition 安排学习进度。

[Python Histogram Plotting](https://realpython.com/python-histograms/)：介绍用纯 Python、NumPy、Matplotlib、pandas 与 Seaborn 计算和绘制 histogram。

[Learn Arduino](https://learn-arduino-red.vercel.app/#board)：通过浏览器中的交互 3D 课程认识 Arduino Uno、基础电路、传感器与电机。

[Marathon Fusion](https://www.marathonfusion.com/)：介绍聚变反应堆、tritium 燃料系统及联合生产同位素的商业化设想。

### 编程 / 智能体工具

[DeepInfer](https://github.com/deepseek-ai/DeepInfer) · [DeepSeek V4.1 Flash 部署实践](https://zhuanlan.zhihu.com/p/2095560295930508953)：DeepSeek 开源大规模推理服务所用框架，提供 DeepSeek V4.1 Flash 的离线推理、优化 kernel、异步调度与确定性采样；附相关部署实践文章。

[deepseek-recipe](https://github.com/deepseek-ai/deepseek-recipe)：用 Rust 库与 Python bindings 处理多种 API 格式、DeepSeek prompt 渲染、token 编码及模型输出转换。

[LCU](https://github.com/amontlabs/lcu)：将 Codex 的 computer-use runtime 接入其他 harness，支持桌面操作与浏览器控制，仍需本地安装官方 ChatGPT 桌面应用。

[LayerFS](https://github.com/Ephemeral-AI-Lab/layerfs)：为智能体提供共享基础上的隔离文件系统工作区，支持分支、checkpoint、历史回放与去重存储。

[Tamio](https://tamio.sh/)：面向 macOS 的 SSH 客户端，结合终端、双栏 SFTP、监控与本地 MCP server，让智能体使用已保存的主机连接。

[Kero](https://kero.sh/)：为 coding agent 设计的终端，提供持久会话、任务状态、远程主机和供智能体操作的命令行工具。

[Harp](https://github.com/dominikmartn/harp)：Warp 的非官方分支，用侧栏组织多个 Claude Code 与 Codex 会话，显示运行、等待与完成状态。

[Respan](https://www.respan.ai/) · [respan-gateway](https://github.com/respanai/respan-gateway)：将模型路由、运行追踪与评测整合到同一平台；开源 gateway 用单个 Rust binary 转换多种模型协议并连接工具。

[How To Use Decision Models for Evals](https://hamel.dev/blog/posts/decision-model-evals/)：用实际智能体日志比较 decision model 的成本与效果，说明分类阈值调优和分数校准如何影响评测。

[Train and deploy custom models on Modal with Devin](https://gist.github.com/dabit3/866caaab49a4a5371ae01655fecad34b)：用 Devin 在 Modal 上训练和部署自定义模型的操作指南。

### 开发 / 原生界面 / 写作

[nanoui](https://github.com/justrach/nanoui) · [nanomon](https://github.com/justrach/nanomon)：用 Zig 构建桌面应用，可选 GPU 原生界面或 Web frontend；nanomon 是基于它实现的轻量系统监视器。

[Native Shell](https://nsh.dev/)：让 AI 生成的界面使用各平台原生组件，覆盖桌面、移动端、Web 与 GPUI backend。

[Cap 迁移至 GPUI](https://cap.so/blog/rebuilding-cap-in-gpui)：Cap 团队介绍从 Tauri WebView 迁移到 Rust / GPUI 的过程，以及跨平台布局、渲染和窗口交互问题。

[The Everything Project](https://github.com/HeyPuter/everything)：Puter 发起的开源软件集合，尝试重建办公、设计、开发与通信等常用应用。

[Beautiful Rust](https://github.com/morganlinton/BeautifulRust)：汇集 Rust API Guidelines、Google 与 Microsoft 等资料的 Agent Skill，帮助编码智能体编写符合惯例、易维护的 Rust。

[Google Style Guides](https://google.github.io/styleguide/) · [Rust Style Guide](https://google.github.io/styleguide/rustguide.html)：Google 开源项目的代码风格指南集合，Rust 部分涉及代码组织、API 设计与具体惯例。

[Cursor Technical Writing Skill](https://github.com/cursor/plugins/blob/main/pstack/skills/technical-writing/SKILL.md)：把文档结构、开发者写作规范、指令表达与面向国际读者的语法规则整合为技术写作技能。

### 设计 / 创作 / 效率

[Kimi Brand Book](https://www.kimi.ai/resources/kimi-brand)：展示 Kimi 的品牌标志、配色、字体、网格与视觉语言规范。

[Runebender](https://github.com/fontgarden/runebender) · [官网](https://runebender.org/)：基于 Linebender Rust 生态的实验性字体编辑器。

[GlideDeck](https://github.com/nirlotan/GlideDeck)：用 Rust 构建的本地演示工具，在无限画布中缩放和移动，支持导入 PowerPoint 及导出 PowerPoint、PDF。

[Desigma](https://github.com/deepfounder-ai/desigma)：用 Rust 编写的开源界面设计工具，支持 auto layout、组件、原型、协作与 Figma 文件导入。

[Sheet](https://sheet.dipxsy.app/)：本地优先的 UI 设计无限画布，可通过 MCP 让 Claude、Codex 或 Cursor 编辑同一份文档。

[Glass](https://glassapp.dev/)：把项目、笔记与 AI 智能体整合在同一应用中，覆盖桌面、Web 与移动端。

[Murmur](https://murmur.dipxsy.app/)：以 “a murmur for every surface” 为介绍的项目，官网目前显示 coming soon。

[设计垂点](https://wxad.design/abc)：围绕交互设计、动效、界面品质与 AI 创作的实践文章和示例。

[一天学完的知识套餐](https://useful.qiaomu.ai/paths/)：将写作、沟通、学习与时间管理等内容整理为短小的主题学习路线。

[AI Girls](https://github.com/shuaizenge/ai-girls)：收集 AI 拟人角色立绘、Q 版与三视图，供角色设计参考，素材使用遵循各自作者的许可。

[OpenTierBoy](https://www.opentierboy.com/)：开源 Tier List 制作工具，支持排序与分享，提供游戏和 Web 开发技术等主题模板。

### 桌面 / macOS / 其他

[Helumi](https://www.helumi.app/#pricing)：在 Finder 中挂载云端存储，按需读取大文件，并提供端到端加密、分享与离线文件夹。

[Peel](https://github.com/TuguiDragos/Peel)：开源 macOS 卸载与清理工具，显示关联文件的归属依据，并提供系统调整与终端配置功能。

[disktree](https://github.com/tobi/disktree)：基于 Rust / GPUI 的 Omarchy 磁盘分析工具，用 treemap 展示目录占用，支持本地与 SSH 来源。

[Mactoy](https://github.com/cashcon57/mactoy)：原生 macOS Ventoy 安装与镜像写入工具，用于制作多系统启动 USB。

[leaf](https://leaf.dipxsy.app/)：在终端中阅读 PDF，保留表格、图片与引用等版面元素，支持搜索、标注与阅读进度恢复。

[NextKDE](https://github.com/NextKde/NextKde)：为 KDE Plasma 提供基于 Quickshell 的桌面环境，整合顶栏、Dock、启动器、通知与设置。

[iglass](https://github.com/vukkt/iglass)：为 iTerm2、Ghostty、kitty 等终端提供 Liquid Glass 风格配色、透明与模糊效果，支持明暗主题。

[Ardia](https://ardia.dev/#top)：基于 Chromium 的 Mac 侧栏浏览器，支持分屏、Chrome 扩展与内置内容拦截。

[MacNativeGames](https://github.com/ly05010419/MacNativeGames)：将自有 Switch 游戏文件构建为 Mac 与部分 iOS 设备可运行应用的项目，仓库不附带游戏内容。

[v2ray-agent](https://github.com/mack-a/v2ray-agent)：用于安装和管理 Xray-core、sing-box 及多种代理协议的脚本，支持证书、订阅与路由管理。

[Seven years from China](https://world.hey.com/dhh/seven-years-from-china-a63b03cc)：DHH 记录时隔七年重访中国、走访深圳、杭州与北京的观察，谈城市、基础设施与工作节奏的变化。
