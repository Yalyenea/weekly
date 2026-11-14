---
title: 第33期周刊
date: '2026-11-14'
draft: false
slug: week-33
math: false
translationKey: weekly-33
obsidianSource: pages/07-Personal/Blog/Weekly/Week-33.md
sourceDigest: 0363ff768c216787863d2ff05ce576ff6ffe9b47467e352bb34de6bce1c9f3fa
summary: 模型架构与可解释性、optimizer 与确定性推理、agent 工具、原生 UI、交互设计，以及桌面应用与浏览器。
---

### AI / 研究 / 观点

[Introducing Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)：Anthropic 更新 Fable 与 Mythos，改进 coding、reasoning 和 vision；两者使用相同底层模型，安全防护与开放范围不同。

[Architecture Decisions for Marin 535B-A23B](https://openathena.ai/blog/marin-535b-architecture/)：Marin 的 535B-A23B 模型完成 18T tokens 预训练，作者逐项解释 Latent MoE、局部与全局 attention、normalization 和 optimizer 的设计取舍与实验依据。
![](/images/8a1e327123a72ccade74.svg)

[PAN 2](https://ifm.ai/blog/pan2/)：MBZUAI 的 foundation world model：预测动作如何改变环境，让 agent 在模拟中比较候选动作，再学习与规划。

[Neurons as an Interpretable Basis](https://www.goodfire.com/research/neurons-as-an-interpretable-basis#neuron-sparsity-and-effective-range) · [Neuron Atlas](https://www.goodfire.com/research/public_neuron_atlas?l=middle)：Goodfire 研究 Qwen3.6-35B-A3B 的 MLP neurons：重要激活集中在少数位置，许多 neuron 的计算作用可以用简短文字描述，并据此预测或模拟激活；附交互 atlas。

[Neuron Lens](https://neuron-lens.com/)：探索 Qwen3-8B 与 Gemma 4 12B 中各个 neuron、attention head 对什么产生响应，以及它们如何影响输出。

[What affects chain-of-thought monitorability across the model lifecycle?](https://alignment.openai.com/cot-monitorability-model-lifecycle)：OpenAI 研究 pretraining、架构、RL 与模型生成数据如何影响 chain-of-thought 的可监控性；通过无需 CoT 的推理能力和 CoT 可控性两个间接指标，提示模型变强后监控可能更难。

[HuggingArch](https://shenhan.cc/blog/huggingarch.html)：让 agent 将开源模型转换成结构化 DSL 描述，再自动分析部署所需的计算、内存与通信成本，像给模型部署做一遍成本核算。

[Eliminating Nondeterminism in LLM Inference with Integer-Only Arithmetic](https://nathan.rs/posts/detllm/)：DetLLM 将 matmul、softmax、normalization 和 RoPE 全部改为整数运算，探索跨 batch、GPU 与 CPU 得到逐位一致的推理结果。

[e-means](https://e-means.github.io/)：改进 k-means 的更新方式；作者测试中，相比 Lloyd 算法用更少 epochs 达到相当或更低的 loss，并在 CPU、GPU 上获得加速。

[Toner: Improving Muon and AdamW with Input Geometry](https://mohamad-amin.github.io/blog/toner/)：用各层输入的二阶统计做 preconditioning，得到 MuonT 与 AdamT；作者在 130M–1.2B 模型上观察到 validation loss 改善，较大 batch 时收益更明显。

[Double Preconditioning (DoPr): Optimization for Test-Time Performance, not Validation Loss](https://arxiv.org/abs/2606.06418)：在 Adam、Muon 一类 gradient preconditioning 上加入 activation preconditioning，改善自回归生成与策略 rollout 中的误差累积；下游表现提升未必伴随 validation loss 下降。

[Anthropic’s Initial Public Offering](https://ipo.anthropic.com/us/)：Anthropic 的 IPO 专题页面，汇集创始人信、财务信息与客户案例。

### 科研 / 系统 / 学习

[Deep Implicit Layers](https://implicit-layers-tutorial.org/)：NeurIPS 2020 tutorial：从 implicit differentiation 到 Neural ODE、Deep Equilibrium Models 与 differentiable optimization，配有可运行的 Colab。

[Dive into Systems](https://diveintosystems.org/)：免费的 computer systems 教材，从 C、assembly 和计算机组成讲到操作系统、cache 与并行计算，适合学过一门入门编程课后阅读。

[Writing a SIGGRAPH paper from scratch.](https://alexandergoslin.me/writing-a-siggraph-paper-from-scratch/)：Terrain Diffusion 作者回顾独立完成 SIGGRAPH 论文的过程：从一块 RTX 3090 Ti、个人项目，一路做到论文与 Minecraft mod。

[My YouTube tier list, six years later](https://thume.ca/2026/11/01/youtube-tier-list-2026/) · [TristanTube](https://karpathy.ai/tristan-tube/)：Tristan Hume 更新科学、工程、手工与编程频道榜单；TristanTube 将相关视频整理成方便连看的页面。

### 编程 / 智能体工具

[Inside GitHub’s new Git storage architecture](https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/)：GitHub 介绍面向 agent 并发的新 Git 存储架构：内部测试支持单仓库 5,000 个并发 agents、每秒 7,200 次 pushes，同时保持低延迟读取。

[RexPocket](https://github.com/leizhiyuan/rexpocket)：Rex 的 Android 客户端：查看各主机的 session 与 tab，通过 Ghostty terminal 操作 pane；支持局域网与内置 Tailscale，适合从手机接着指挥 coding agents。

[Atlas](https://atlas.insanearts.io/)：给 agent 一块独立的 macOS 隐藏桌面，在里面打开应用、点击和截图；自己继续使用电脑，随时打开窗口看它工作。

[ArcBox](https://github.com/arcboxlabs/arcbox)：Rust 编写的 macOS container 与 VM runtime，覆盖 Docker、Kubernetes、agent microVM sandbox，以及完整 Linux/macOS VM。

[moejs](https://github.com/MoeForge/moejs)：纯 Go 的 JavaScript runtime，面向在 Go 程序中嵌入大量小型 plugin sandbox，支持 ES modules、async/await 等现代语法。

[DeepSeek Chat Demo](https://github.com/deepseek-ai/chat-demo)：直接在浏览器调用 DeepSeek API 的静态聊天应用，支持流式回复、多会话、附件、Markdown、公式和 Mermaid，可本地打开或部署。

[Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance)：由 Chrome、Edge、Firefox 与 MDN 团队及社区维护的 coding agent skills，把现代 Web API、兼容性数据与实践接进开发流程。

[Building a thread UI on hard mode](https://delta.dev/blog/building-a-thread-ui-on-hard-mode)：Delta 将 agent thread 做成可编辑的协作文档，连回复与 tool output 都能直接批注；文章讲清这类混合内容给 editor 架构带来的难题。

### 开发 / 原生界面

[Onevra](https://oneo-me.github.io/onevra/)：基于 MyGo 的 Go 原生桌面组件库：控件、窗口、图标、图表与聊天界面均自行绘制，官网 demo 也是 Go 编译成的 WebAssembly。

[Gojo](https://gojo.egoist.dev/)：面向人和 agent 的 memory-safe systems language：以 ownership 管理内存和 data races，无需标注 lifetimes，先编译到 C，再生成原生程序；目前为 beta。

[Exact](https://github.com/expo/exact)：Expo 的跨平台应用项目：一套代码覆盖 Web、macOS、iOS 与 Linux，并让 agent 在各平台构建、运行、观察和测试。

[Moonframe](https://moonframe.dev/)：Rust + Luau 的原生桌面应用框架，支持热更新与元素检查；点选界面即可把对应源码位置交给 agent，边改边看。

[UI SDK](https://github.com/vercel-labs/ui)：Vercel Labs 将 keyboard navigation、focus、selection、popup、drag and drop 等交互行为拆成可组合单元，为多种前端框架提供 adapters，供 agent 构建界面。

[A Critique of GPUI](https://blog.zortax.de/posts/a-critique-of-gpui)：从状态变化与依赖追踪出发，讨论 GPUI、egui 在复杂桌面应用中的扩展成本，并比较 Elm、immediate mode 与 signals 的取舍。

### 设计 / 创作 / 交互

[Refero Styles](https://styles.refero.design/)：将产品网站的配色、字体、间距与组件整理成可供 agent 阅读的 DESIGN.md，便于带着参考风格做界面。

[Footer](https://www.footer.design/)：专门收集网站 footer 的设计画廊。

[Gridray](https://gridray.dev/)：给网站做 X-ray 式检查的工具，页面提供可拖动体验。

[Moodz](https://ajaypawriya.com/side-projects/moodz/index.html)：Ajay Pawriya 的 3D voice-reactive visualizer，围绕声音与情绪做视觉互动。

[Retina Rave](https://www.retinarave.com/)：在浏览器用 WebGL2 做 music-reactive visuals，可接标签页音频、麦克风或本地文件，处理在设备上完成。

[tesseract](https://tesseract.postminimal.agency/)：Postminimal 的网页交互作品。

[Nocturne](https://buandesu.github.io/nocturne/)：Front-end Craft Studio 的作品站。

[VectraSynth](https://vectrasynth.com/app)：VectraSynth 的在线应用。

[BTQ](https://www.bricelab.dev/work/btq)：Brice Deguigne 的设计项目。

[Mall of the Emirates](https://brandonyasin.com/cases/mall-of-the-emirates)：Brandon Yasin 的 Mall of the Emirates 项目案例，展示 art direction 与视觉设计。

[Claude Fable 5.2 HTML Files](https://miaai-lab.github.io/Claude-Fable-5.2-HTML-Files/)：一组 Claude Fable 5.2 制作的 HTML 交互实验，包含水面、纸张与程序化绘画等视觉作品。

[Ἶρις](https://iris.wenyizhang.com/)：需要 WebGPU 的浏览器交互作品。

[Record Player](https://vinyl-gl.vercel.app/)：网页唱片机作品。

### 桌面 / macOS / 其他

[Ardia](https://ardia.dev/)：面向 Mac 的 Arc alternative，保留侧栏标签页体验，也提供 CLI 让自己的 coding agent 操作浏览器。

[Cra](https://crabrowser.app/)：免费开源的 macOS Arc replacement，可导入 spaces、固定标签页、favorites 与 archive。

[Zephium](https://github.com/zephium-browser/Zephium)：为人和 agent 重新组织的浏览器与工作环境，提供 macOS、Windows 版本。

[Ladybird](https://github.com/LadybirdBrowser/ladybird)：使用独立 browser engine 的开源浏览器，采用多进程与站点隔离架构；目前仍为面向开发者的 pre-alpha。

[BiliKit](https://github.com/shiinayane/BiliKit-Mac)：原生 macOS 第三方 B 站客户端，使用 AppKit、Core Animation 与 AVPlayer，提供弹幕、评论、画中画和收藏等功能。

[Mark](https://github.com/vinny380/mark)：小于 1 MB 的原生 macOS Markdown editor，从 Finder 右键菜单新建文件即可开始写，支持 Mermaid、公式和图片。

[Silica](https://github.com/dqhieu/Silica)：SwiftUI + AppKit 编写的轻量 macOS code editor，带文件树、项目搜索，以及 Markdown、HTML、CSV 和媒体预览。

[BigText](https://github.com/Erkinbek/bigtext)：Rust 编写的大文件编辑器，面向数 GB 到数十 GB 的日志、CSV、SQL 与 JSON，支持搜索、编辑、diff 与 hex view。

[Airhand](https://github.com/sqlpxc/airhand)：基于 QUIC 的 remote desktop，支持硬件编码与解码，最高 120 fps，覆盖 Windows、macOS、Linux、Android 与浏览器；项目仍在开发中。

[WowType](https://github.com/Gloridust/WowType)：Linux 上的 fcitx5 拼音输入法，支持整句输入、输入中预测与拼写纠错。

[Glint](https://github.com/jsogn/Glint)：在 macOS 拼音候选栏旁显示英文或其他目标语言的译文，把日常中文输入变成顺手学单词的机会。

[TailSplit](https://tailsplit.idy.dev/)：将 sing-box 分流规则与 Tailscale exit node 结合，按域名与 IP 决定直连或代理，支持应用代理与 TUN 模式。

[Stela](https://github.com/tylertms/Stela)：为 x86-64 PC 提供 Apple Silicon translation layer，包含 arm64-to-x86-64 translator 与 NVIDIA Metal driver；仍处于开发阶段，启动和性能有待完善。

[UniXNU](https://github.com/UniXNU/UniXNU)：通过通用 UEFI 环境与设备驱动，在非 Apple ARM64 硬件上启动 iOS/macOS 的独立项目。

[Omarchy Mobile](https://github.com/derekross/omarchy-mobile) · [官网](https://omamobile.org)：将 Arch Linux ARM、Hyprland 与 Omarchy 带到手机，以 Pixel 7 Pro 为参考设备，各机型完成度不同。
