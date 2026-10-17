+++
title = "第26期周刊"
date = 2026-09-27T02:55:22+08:00
draft = false
math = true
summary = "本期周刊收录：AI / 模型 / 智能体、数学 / 科研 / 学习、编程 / 系统 / AI 工具、设计 / macOS / 其他。"
translationKey = "weekly-26"
+++

### AI / 模型 / 智能体

[The bitter lesson for computer vision](https://www.vincentsitzmann.com/blog/bitter_lesson_of_cv/)：Vincent Sitzmann 讨论计算机视觉如何融入端到端的感知与行动循环。

[Hadamard MLP](https://cactuscompute.com/blog/hadamard-mlp)：介绍以 Hadamard 变换为起点的通道混合设计，探索减少前馈层参数的方法。

[Qwen-Image-2.1](https://qwen.ai/blog?id=qwen-image-2.1)：Qwen-Image-2.1 的官方介绍页面。

[Tokenizers v1 benchmarks](https://huggingface-tokenizers-v1.static.hf.space/index.html)：展示 Tokenizers v1 候选版本的编码、解码与并行性能测试，并提供复现方式。

[Grok 4.7](https://x.ai/news/grok-4-7)：官方介绍 Grok 4.7 在编程与知识工作方面的更新。

[KDA Doesn’t Care About the Future](https://drisspg.github.io/nuggets/KDA-Future-Token-Leakage)：讨论 KDA 内核中的未来依赖舍入效应，并测试模型是否利用这种数值效应。

[Halo](https://whitecircle.com/halo)：面向 Hugging Face 模型的分布式训练框架，支持检查点与多轮强化学习。

[Limite 1B — Violetto](https://paradigma.inc/blog/limite-1b-violetto/)：Paradigma 发布面向数学推理的十亿参数模型，并介绍训练与推理实现。

[MiMo-V2.6](https://mimo.xiaomi.com/mimo-v2-6) · [MiMo-V2.6 技术报告](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf)：小米 MiMo-V2.6 系列模型的官方介绍。

[HySparse2](https://arxiv.org/abs/2609.26368)：提出结合两级键值缓存共享的混合稀疏注意力架构，面向长上下文与多轮智能体任务。

[Jesse](https://jesse.my/)：solidSF 推理引擎的开放测试服务，提供兼容 OpenAI 格式的接口。

[Batch Size Scaling — 腾讯混元 RL Team](https://hy.tencent.com/research/100116?langVersion=zh)：腾讯混元团队讨论大语言模型强化学习规模化时，批量大小与训练效果的关系。

[Introducing Claude Opus 5.5 | Anthropic](https://www.anthropic.com/claude-opus-5-5#introduction)：Anthropic 介绍 Opus 5.5 在编程、知识工作、沟通风格与运行成本上的更新。

[Introducing GPT-6 Sol and Luna | OpenAI](https://openai.com/index/introducing-gpt-6-sol-and-luna/)：OpenAI 发布 GPT-6 Sol 与 Luna，介绍模型能力、推理效率与缓存机制的改进。

[Qwen Intelligence](https://www.qwenintelligence.com/)：Qwen Intelligence 项目主页。

[The Generalization Problem | Q](https://qlabs.sh/research/)：讨论如何结合模型搜索与泛化先验，让学习能力随计算量增长。

[Introducing HLE-Diamond](https://lastexam.ai/blog/hle-diamond)：从 Humanity’s Last Exam 中清理、筛选出 1,000 道题，分别考察推理与专业知识。

[Computational depth is all you need | Q](https://qlabs.sh/depth/)：研究计算深度与模型表达能力、训练效率的关系，并报告加深语言模型的实验。

[模加法 Transformer 的训练可视化 | Sauers](https://x.com/Sauers_/status/2102936651521802363?s=20) · [The models just want to learn | Sauers](https://x.com/Sauers_/status/2102990911655346190?s=20)：比较训练 2,000 步与 20,000 步后的输出分布，用环形图展示模加法模型的学习过程。另附作者关于模型学习的分享。

![](/images/ad12690d0df040a8.jpg)

[Intelligence Density | Trajectory](https://www.trajectory.ai/field-notes/intelligence-density)：以单位推理计算量带来的任务表现讨论“智能密度”。

[What my deep model doesn’t know | Yarin Gal](https://www.cs.ox.ac.uk/people/yarin.gal/website/blog_3d801aa532c1ce.html) · [Dropout as a Bayesian Approximation](https://arxiv.org/abs/1506.02142)：Yarin Gal 介绍如何利用 dropout 获取模型不确定性信息，附将 dropout 解释为近似贝叶斯推断的论文。

### 数学 / 科研 / 学习

[Khachiyan 常数与 GPT-6 Astra](https://zhuanlan.zhihu.com/p/2084435954740224890)：作者报告使用 GPT-6 Astra 探索 Khachiyan 常数猜想的经历。

[Hilbert space: treating functions as vectors](https://eli.thegreenplace.net/2025/hilbert-space-treating-functions-as-vectors)：从把函数看作无限维向量的直觉出发，介绍希尔伯特空间。

[Memristive singular value decomposition](https://www.nature.com/articles/s41467-026-76272-2)：作者报告在忆阻器存内计算芯片上实现奇异值分解，并讨论图像重建与模型权重分解等应用。

[Hamiltonian Neural Network with PyTorch](https://ritoghosh.com/posts/hamiltonian_nn/)：通过振子系统示例，介绍如何用 PyTorch 训练哈密顿神经网络。

[汉字地图第二版](https://matrix67.com/blog/archives/4769) · [汉字地图](https://matrix67.com/cn_char_map/)：Matrix67 对汉字地图第二版的介绍。

[Optimization Constants in Mathematics](https://teorth.github.io/optimizationproblems/)：收集数学优化常数及已知上下界，并链接相关研究来源。

[CIS 6270: Discrete Generative Models](https://cis6270.github.io/)：宾夕法尼亚大学课程，讲解离散生成模型、扩散、流匹配与最优传输。

[MS&E 319: Efficient Generative Language Models](https://web.stanford.edu/class/msande319/)：斯坦福课程，围绕有限计算预算下的模型训练、架构与推理算法展开。

[Physics in the age of LLMs](https://ozamram.substack.com/p/physics-in-the-age-of-llms)：Oz Amram 分享大语言模型改变其物理研究工作流程的经历与判断。

[Advisory Group on Mathematics and AI](https://openai.com/index/advisory-group-on-mathematics-and-ai/) · [AGMAI](https://agmai.org/)：OpenAI 介绍独立数学顾问小组，以及数学成果评审、传播和研究工具方面的合作。

[A Proof of the Most Informative Boolean Function Conjecture](https://arxiv.org/abs/2609.24931)：作者提出 Courtade–Kumar 猜想的计算机辅助证明，并提供计算验证记录与形式化验证说明。

[Dictators are most informative](https://arxiv.org/abs/2609.24184)：作者提出 Courtade–Kumar 猜想的证明，研究独裁函数在二元噪声下保留的信息量。

[Unsolved problems in mathematics](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_mathematics)：按数学分支整理公开问题的维基百科索引，可用来继续追踪相关文献。

[devol.dev](https://devol.dev/)：用交互式工具学习机器人运动学、控制、运动规划与设计。

[A Faster Shortest Path Algorithm | Vals AI](https://www.vals.ai/blogs/faster-shortest-path-algorithm)：作者报告借助 Claude 智能体得到最短路算法 C-HD 及 Lean 证明，在特定图密度范围内改进渐近上界，尚未证明实际运行速度更快。

[Quanta Magazine](https://www.quantamagazine.org/)：报道数学、物理、生物与计算机科学研究的科学杂志。

[Claude discovers a novel enzyme system | Anthropic](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system) · [研究预印本（PDF）](https://www-cdn.anthropic.com/22573675ada52a8ca8a97a1a4b4326b2f208a071.pdf)：Anthropic 报告 Claude 在序列数据库中识别出带有类似 CRISPR 重复结构的酶系统，并进行了实验研究，其功能仍未确定。

[Slava Krushkal’s good-group discovery | Logical Intelligence](https://logicalintelligence.com/blog/good-group-discovery)：Logical Intelligence 报告 Slava Krushkal 与团队借助 AI 推理研究四维流形中的新 good group。

[mo271/Zeta5](https://github.com/mo271/zeta5)：围绕 $\zeta(5)$ 无理性命题的 Lean 4 形式化项目，仓库报告已完成证明并说明与原预印本的差异。

[Interactive Linear Algebra — UBC edition](https://personal.math.ubc.ca/~tbjw/ila/index.html)：配有交互演示的线性代数教材，涵盖向量、矩阵、线性变换与特征值等主题。

[Headlines and inside stories | Tapio Schneider](https://terrytao.wordpress.com/2026/09/23/headlines-and-inside-stories-understanding-and-trust-in-ai-for-mathematics-science-and-engineering/)：Tapio Schneider 在陶哲轩博客撰文，讨论 AI 生成的结果如何转化为可理解、可审查、值得信任的数学与科学知识。

[We’re gonna need a lot more mathematicians | Amit Sahai](https://terrytao.wordpress.com/2026/09/24/were-gonna-need-a-lot-more-mathematicians/)：Amit Sahai 在陶哲轩博客撰文，主张扩大数学研究者群体，以理解 AI 产生的新思想并保留人的参与能力。

[Claude computes a nine-loop amplitude | Anthropic](https://www.anthropic.com/research/yes-claude-can-do-nine-loops)：Anthropic 介绍 Claude 计算平面 $N = 4$ 超杨–米尔斯理论九圈六粒子散射振幅的过程与验证。

一个问题：序列 $n + \tan(n),\ n \in \mathbb{N}$ 是否有下界？

### 编程 / 系统 / AI 工具

[GPUI Markdown Studio](https://md.rbeta.com/)：基于 WebAssembly 的 Markdown 编辑与预览页面，支持 Mermaid 图表。

[LayerFS](https://github.com/Ephemeral-AI-Lab/layerfs)：为智能体提供隔离的临时文件系统分支，并支持检查点、回退和状态复用。

[Cloudflare Quick Tunnels](https://try.cloudflare.com/)：运行 `cloudflared tunnel --url http://localhost:8000`，为本地服务生成临时公网地址，方便分享预览和测试。

[Eli Bendersky’s website](https://eli.thegreenplace.net/)：Eli Bendersky 的技术博客，涵盖编程语言、系统与数学主题。

[Reader](https://github.com/Marvy101/reader-source)：开源 macOS 阅读工作区，支持 PDF、EPUB、TXT、标注笔记与 AI 问答。

[Tylina](https://tylina.github.io/)：支持直接编辑排版页面的 Typst 编辑器，提供网页与桌面版本及 AI 智能体集成。

[The senior engineer death spiral](https://sunilpai.dev/posts/the-senior-engineer-death-spiral/)：讨论资深工程师因急于证明自己而陷入过度工作，以及如何保持沟通与交付。

[CUDA Matmul 优化记录](https://siboehm.com/articles/22/CUDA-MMM)：从朴素矩阵乘法逐步介绍 CUDA 优化，包括合并访存、共享内存和分块。

[幻觉翻译](https://app.hjfy.top/)：Mac 文档翻译工具，支持原译文对照阅读，并保留公式、引用与版式。

[OpenCode Reloaded](https://anoma.ly/notes/opencode-reloaded/)：介绍 OpenCode 如何在会话继续运行时热更新配置、工具与插件。

[Step Code](https://github.com/stepfun-ai/Step-Code)：运行于终端的编码智能体，支持代码修改、测试、插件、多智能体协作与静态网站发布。

[Nowdex](https://nowdex.app/)：在 Mac、iPhone 和 iPad 上查看多款 AI 工具的剩余额度，支持菜单栏、桌面小组件与 iCloud 同步。

[mujocolab/mjlab](https://github.com/mujocolab/mjlab)：使用 MuJoCo-Warp 提供类似 Isaac Lab 的接口，面向强化学习与机器人研究。

[iAmCorey/Wake](https://github.com/iAmCorey/Wake)：用 Rust 与 GPUI 构建的智能体会话管理工具，支持浏览、搜索和继续会话。

[heypcb](https://heypcb.ai/dashboard) · [Circuit World](https://heypcb.ai/world)：根据自然语言描述生成电路原理图、布局与制造文件，输出可保留的 KiCad 工程。Circuit World 展示用户发布的电路板与开源硬件。

[ReShiki](https://reshiki.com/)：用于绘制分子结构、组织反应式与制作化学图表的工具。

[magpie](https://usemagpie.ai/)：通过菜单栏与本地网关，为 Codex、Claude Code 等智能体选择不同模型。

[Synara](https://www.trysynara.com/l)：面向 Claude Code、Codex 与 Cursor 的 AI 编程工作空间介绍页。

[Empryo](https://empryo.com/)：维护代码仓库的动态结构图，在编辑前读取上下文，提供桌面与终端入口。

[o8vm/octox](https://github.com/o8vm/octox)：受 xv6-riscv 启发、使用 Rust 编写的类 Unix 操作系统。

[AGIdock](https://agidock.cloud/)：面向智能体的云平台，提供运行应用所需的基础设施。

[yu1745/wetype-ime-linux](https://github.com/yu1745/wetype-ime-linux)：将 WeType 的 Android 输入引擎移植到 Linux，并集成到 Fcitx 5。

[Lorca](https://lorca.app/zh#top)：在自己的电脑上运行 AI 队友，通过单聊或群聊处理文件与任务。

[Using Claude Code: Spending your effort | Thariq](https://x.com/trq212/status/2103576349499855160?s=20)：结合评测与实际任务，讨论推理 effort 对速度、独立判断和边界情况验证的影响。

[kaolti/phantomat](https://github.com/kaolti/phantomat)：面向 Hyprland 的无限画布窗口管理器，支持缩放浏览窗口布局。

### 设计 / macOS / 其他

[Working Title](https://iamnoman.com/working-title)：面向 Mac 的 Working Title 应用。

[Crisp](https://github.com/didriksg/Crisp)：开源 macOS 显示器管理工具，集中调整缩放、亮度、音量与显示配置。

[21st](https://21st.dev/)：汇集 React 组件、页面模板与主题，可预览并获取实现代码。

[HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter?utm_source=chatgpt.com)：整理健康、生活与公共服务相关资料，并列出成本、收益和出处。

[Powermove](https://trypowermove.com/)：可连接编码智能体的视频编辑器，支持图层、关键帧与自定义扩展。

[Inspora](https://www.inspora.design/)：汇集近期视觉设计与创意作品的灵感档案。

[shawn.](https://www.shwn.design/)：设计工程师 Shawn 的作品集，展示简洁界面与交互细节。

[Opensource UI](https://opensourceui.in/)：可复制使用的 React 与 Next.js 组件库，包含界面控件和设备模型。

[quicker.chat](https://quicker.chat/)：面向 Mac 的聊天收件箱，集中管理私信，并提供对话整理与回复草稿。

[MiMo Gallery](https://mimo.xiaomi.com/mimo-gallery/)：以三维展馆形式呈现的 MiMo 作品展示页面。

[Top-Conf Figure Gallery](https://qwdwqfwq.github.io/topconf-paper-figure-gallery/)：可按会议、年份与视觉模式浏览的论文主图灵感画廊。

[鹈鹕骑单车 · Pelican on a Bike](https://claude-opus-5-5.riba2534.cn/)：一只鹈鹕沿海岸骑车的实时 3D 演示，包含海浪、昼夜变化与音乐。

[Variora](https://variora.fog.moe/en/)：比较不同 AI 模型在同一任务说明下生成的可体验作品。

[Designeer](https://designeer.xyz/)：精选界面设计工具、组件库、设计系统与灵感资源。

[TinyWeb](https://tinyweb.so/)：面向 Mac 的小型原生浏览器，采用无边框界面，提供垂直标签页与历史搜索。

[Search | Office Commun](https://officecommun.com/search) · [driceroland/Search](https://github.com/driceroland/Search)：基于 macOS WebKit 的轻量浏览器，强调简洁界面与快速启动。

[Lean Browser](https://lean-browser.dipxsy.app/)：使用 Swift 与 WebKit 构建的 macOS 极简浏览器，提供 Zen 模式，项目声明不收集遥测。

[Macfolio](https://macfolio.com/)：精选 Mac 生态中的软件、硬件、工作空间与阅读资源。

[Sidekick](https://trysidekick.site/)：为 Mac 增加一条侧边 Dock，集中放置应用、链接、剪贴板历史与实时小组件。

[saragordic/rooms](https://github.com/saragordic/rooms)：把每个项目的窗口布局保存为一个 room，通过快捷键切换工作环境。

[PriceRadar](https://priceradar.store/zh)：比较不同地区 App Store 与 Google Play 的下载、内购和订阅价格，并提供价格提醒。
