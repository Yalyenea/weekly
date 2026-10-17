+++
title = "第28期周刊"
date = 2026-10-10T10:46:06-07:00
draft = false
math = true
summary = "本期周刊收录：AI / 模型 / 智能体、数学 / 科研 / 学习、编程 / 系统 / AI 工具、设计 / macOS / 其他。"
translationKey = "weekly-28"
+++

### AI / 模型 / 智能体

[Diachronic](https://www.diachronic.ai/)：以 Kairos 1 探索人类行为建模与评测。

[I Quit OpenAI Because Its Culture Is Broken | The Atlantic](https://www.theatlantic.com/technology/2026/10/openai-safety-team-resignation/688881/)：David Robinson 解释离开 OpenAI 的原因，批评其安全文化，并主张借鉴其他高风险行业的安全经验。

[Introducing Beam | Reflection](https://reflection.ai/blog/introducing-beam)：Reflection 介绍面向编程、推理与智能体任务的 5010 亿参数混合专家模型 Beam，计划于本月稍后开放权重。

[Rho-1: Collapsing the multimodal stack | Reka](https://reka.ai/labs/research/rho-1-collapsing-the-multimodal-stack)：Reka 展示 Rho-1 研究预览，在单一模型中整合文本、图像、视频与动作。

[Explainability as a form of system closure](https://jamiesimon.io/blog/explainability-as-system-closure/)：作者把解释理解为在人类可掌握变量上建立近似闭合模型，并借混沌系统讨论可解释性的边界。

[Introducing Reason Agent 1.0](https://reasonmachines.com/blog/reason-agent-deepswe) · [Reason Agent](https://reasonmachines.com/)：Reason Machines 介绍面向自主软件工程任务的 Reason Agent 1.0。

[Introducing TasteVal | P-Zero Research](https://pzeroresearch.com/work/tasteval/) · [TasteVal: Measuring the Experimental Research Taste of AI Systems Against Human Experts](https://arxiv.org/abs/2610.06824)：用固定研究问题考察模型设计实验与解读结果的能力，以实验计算效率与人类专家比较。

### 数学 / 科研 / 学习

[Practical Parametric Yield | Irrational Analysis](https://irrationalanalysis.substack.com/p/practical-parametric-yield)：从工艺波动、频率与功耗的关系解释芯片参数良率，并讨论 Cerebras 晶圆级计算面临的取舍。

[由 Opus 5.5 制作的黎曼猜想科普视频](https://www.bilibili.com/video/BV11SaB6NELd/)：上传者介绍由 Claude Opus 5.5 制作视频、Gemini 提供配音的黎曼猜想科普作品。

[Two Room-Temperature Antiferromagnetic Semiconductor Candidates | Vals AI](https://www.vals.ai/blogs/room-temperature-magnetic-semiconductors)：作者报告借助 Claude 智能体找到两种室温反铁磁半导体候选材料，并公开计算与局限，材料性质仍需实验验证。

[Presenting a proof of the Kannan-Lovasz-Simonovits conjecture](https://arxiv.org/abs/2610.05474v1)：Bizeul、Klartag 与 Lehec 提出 KLS 猜想的完整证明稿，共 32 页，并披露大部分证明与数学想法来自 ChatGPT。

[An $O(1)$ Bound for the KLS Constant](https://arxiv.org/abs/2610.01447v2)：Song 与 Zhang 在第二版预印本中提出 KLS 常数的 $O(1)$ 上界，声称解决完整猜想。

[A Dimension-Free Bound on the Poincaré Constant of Isotropic Log-Concave Measures](https://github.com/kriznakumar/paper/blob/4837c33649ba2271f43c9684e9350ecbdd725f95/KLS.pdf)：Balasubramanian 与 Kasiviswanathan 公开另一份声称证明 KLS 猜想的稿件，共 53 页，同样披露了 AI 参与。

[Stark units for real quadratic fields and reciprocity laws](https://www.danrad.net/papers/stark-reciprocity.pdf)：作者提出实二次数域中 Stark 单位的互反律，声称回答 Hilbert 第十二问题的这一情形，并推出 Zauner 猜想的所有维数存在性结果。

[The Squares Project](https://jlevy.github.io/squares/) · [n = 11 案例](https://jlevy.github.io/squares/cases/11.html)：汇集 11 个单位正方形装入正方形的构造、下界与机器核验记录，项目报告上下界已相合，审阅记录仍待完成。

![QQ_1791423496819.png](/images/14769e01143ebfc0.png)

[The Fibonacci Geometry of Eleven Squares（PDF）](https://pingyou.com/papers/eleven-squares.pdf)：用平坦环面与 Fibonacci 几何描述 Trump 的 11 正方形装填，分析其两参数接触族中的唯一最小构型。

![379](/images/c4f88f52c4052c51.jpg)

[Sharing AI progress in mathematics | OpenAI](https://openai.com/index/sharing-ai-progress-in-mathematics/) · [openai/math](https://github.com/openai/math)：OpenAI 发布 AI 辅助数学研究的论文、证明与验证材料，并说明这些结果仍需数学界审查。

[Beyond n log n · Integer multiplication](https://beyond-n-log-n.netlify.app/)：追踪整数乘法复杂度上界的条件性改进与相关验证材料。

[CrocSwap/integer-mult-bounds](https://github.com/CrocSwap/integer-mult-bounds)：围绕 OpenAI 整数乘法结果 #109，研究对指数节省量的条件性改进。

[The Mathocalypse | Scott Aaronson](https://scottaaronson.blog/?p=10169)：Scott Aaronson 讨论近期 AI 数学成果及其对数学研究、验证与研究者的影响。

[What does an improved upper bound on $\omega$ mean | Abbas Mehrabian](https://abbas-mehrabian.medium.com/what-does-an-improved-upper-bound-on-%CF%89-mean-107dee290970)：解释矩阵乘法指数 $\omega$ 的上界改进意味着什么。

[On Matrix Multiplication Algorithms](https://www.youtube.com/live/FDAHDLbT8gs) · [Fast Matrix Multiplication（PDF）](https://theoryofcomputing.org/articles/gs005/gs005.pdf)：矩阵乘法算法讲座与综述，介绍快速算法及复杂度研究。

[Erich Friedman](https://erich-friedman.github.io/) · [Erich's Packing Center](https://erich-friedman.github.io/packing/) · [Cubes in Cubes](https://erich-friedman.github.io/packing/cubincub/)：Erich Friedman 的数学趣题与几何装箱资料，附立方体装入立方体的记录。

[Nopert Polyhedra Explorer](https://drbuild.uk/app/nonrup/index.html#stellated)：通过旋转、切孔与穿过操作，交互探索 Rupert 问题中的多面体。

[Relativity Park: Walking Speed of Light](https://rivendell.dmitrybrant.com/relativity/)：把光速设为步行速度，在公园场景中观察相对论效应。

[Soft-to-Rigid Packing](https://yoheinakajima.github.io/soft-to-rigid/)：比较从软形状逐渐变硬的装箱搜索与其他方法，公开实验日志、代码和重放，并说明各自适用范围。

[News | Yasuyuki Kawahigashi](https://www.ms.u-tokyo.ac.jp/~yasuyuki/news.htm)：河東泰之记录作用素代数研究者对 OpenAI 稿件的反应，以及整理人类可读证明的进展。

[A Brief Digest of Some New OpenAI Results | Persiflage](https://galoisrepresentations.org/2026/10/08/a-brief-digest-of-some-new-openai-results/)：Frank Calegari 评述部分新发布的 OpenAI 数学结果。

[Big O Speedrun](https://bigospeedrun.com/)：追踪整数乘法、傅里叶变换、3SUM 与全对最短路等问题的复杂度上界，区分结果声称与验证状态。

[A reaction to the reactions | Balázs Pozsgay](https://x.com/pozsgaybalazs/status/2108819560014938350)：从理论物理研究者的角度回应 AI 数学成果引发的讨论，并思考重新成为学习者的意义。

### 编程 / 系统 / AI 工具

[egoist/godiff](https://github.com/egoist/godiff)：原生 Git 差异审阅器，支持工作区、提交与 GitHub 拉取请求审阅。

[sahenjp/rustdsh](https://github.com/sahenjp/rustdsh)：用 Rust 编写的 DeepSeek Harness 启动器，提供配置迁移与本地工具。

[How fast is Python 3.15? | Miguel Grinberg](https://blog.miguelgrinberg.com/post/how-fast-is-python-3-15)：用递归与排序程序比较 Python 3.15 候选版和旧版解释器，并测试即时编译与自由线程模式。

[sshx](https://sshx.io/)：在浏览器中实时共享终端，支持多人协作。

[Public testing is beginning | Superlogical](https://www.superlogical.com/updates/public-testing-beginning)：Rex 终端开始邀请公开测试，首批面向 macOS，支持持久会话与远程连接。

[egoist/gorex](https://github.com/egoist/gorex)：用 Go 与 MyGo 原生界面实现的 Rex 终端克隆。

[ArtCraft Crafting Apps](https://getartcraft.com/apps) · [GitHub](https://github.com/storytold) · [VectorCraft](https://github.com/storytold/vectorcraft) · [WordCraft](https://github.com/storytold/wordcraft) · [DeckCraft](https://github.com/storytold/deckcraft) · [CADCraft](https://github.com/storytold/cadcraft)：用 Rust 构建的开源创作应用系列，覆盖矢量绘图、文档、演示与计算机辅助设计。

[palemoky/chinese-poetry-api](https://github.com/palemoky/chinese-poetry-api)：中国古诗词检索与 API 服务项目。

[Freaction/Aquilum](https://github.com/Freaction/Aquilum)：面向 Windows 的本地 Markdown 知识库，支持实时预览、搜索、关系图、阅读器与模型上下文协议。

[solidsf-inc/sfFFT](https://github.com/solidsf-inc/sfFFT)：面向 NVIDIA GB10 的融合 Tensor Core 快速傅里叶变换卷积内核，采用 MIT 许可。

[Ely Office](https://office.elygpui.com/) · [ZacharyZhang-NY/ElyOffice](https://github.com/ZacharyZhang-NY/ElyOffice)：Ely Office 官网与 Rust / GPUI 桌面办公套件项目链接，仓库链接目前返回 404。

[RelayKit | New API](https://github.com/QuantumNous/new-api/tree/main/relaykit)：在 OpenAI、Anthropic 与 Gemini 的四种文本协议间转换请求、响应和流式事件的 Go 模块。

[Tern | Stencil](https://stencil.so/tern)：用 Rust 构建、兼容 Kitty 的原生终端与多路复用器，支持持久会话和跨设备连接，目前处于封闭测试。

[There are many themes, but this one is yours | Earendil](https://earendil.com/posts/system-theme/)：介绍 Pi 如何读取终端颜色并生成系统主题，讨论调色板与界面对比度。

[Rewriting Prime Agent in Rust](https://www.primeintellect.ai/blog/prime-agent-rust)：Prime Intellect 分享借助多智能体将 Prime Agent 从 TypeScript 重写为 Rust 的过程与验证方法。

[Tov](https://tov.sh/)：面向编码智能体的实验性语言，采用 TypeScript 风格语法，编译为原生二进制，并提供结构化编译错误与修复建议。

### 设计 / macOS / 其他

[RevPDF](https://revpdf.com/)：支持离线编辑、比较与格式转换的 PDF 工具。

[Opus 5.5 视频复现分享 | R](https://x.com/SpikeRiser/status/2107621593757208916)：作者分享用 Opus 5.5 回应视频复现挑战的作品。

[Paper Mono](https://paper.design/mono)：免费开源的等宽字体，提供可变字重、编程连字与字符展示。

[celve/uvim](https://github.com/celve/uvim)：在 macOS 的文本输入框中提供 Vim 模态编辑的菜单栏应用。

[AIME · 艾么输入法](https://aime.zool.app/)：基于 RIME 的开源 macOS 中文输入法，支持词库更新、常用语以及选中文字的翻译与润色。

[Designeer](https://www.designeer.xyz/)：精选界面设计工具、组件与灵感资源的目录。

[alejandrobujan/tendedero](https://github.com/alejandrobujan/tendedero)：把截图悬挂在屏幕顶部一条线上，方便临时查看的 macOS 原生应用。

[Pulse](https://pulse.egoist.dev/)：在一个原生窗口中查看进程、处理器、内存、网络与能耗等系统指标。

[Nongfsq/ftop](https://github.com/Nongfsq/ftop)：面向 Apple Silicon Mac 的浮动系统监视面板，显示处理器、内存、网络与进程信息。
