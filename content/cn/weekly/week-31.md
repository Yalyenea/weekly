---
title: 第31期周刊
date: '2026-11-01'
draft: false
slug: week-31
math: false
translationKey: weekly-31
obsidianSource: pages/07-Personal/Blog/Weekly/Week-31.md
sourceDigest: 82a66d37d69dc9c9b8ac3ce16bce47103b904febc318997f27a99b9541dacd96
summary: AI 产出的数学结果与模型训练研究、智能体工具链、原生 UI 资源，以及设计灵感与桌面应用。
---

### AI / 研究 / 观点

[Anthropic 提交 S-1 拟上市](https://www.anthropic.com/news/s1-sec)：Anthropic 向 SEC 提交 S-1 注册声明，拟在纳斯达克以代码 ANT 公开发行 A 类普通股，股数与价格区间未定，由 Goldman Sachs 与 Morgan Stanley 经办。

[Introducing Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)：Google 新旗舰模型，主打网络安全与长程任务：Artificial Analysis 指数登顶，SEC-bench Pro 88.2%，内部高危 misalignment 告警降约 80%；先经 Fairwind 计划开放给安全防御方。

[How Gemini 4 Argon Upleveled Agents on Antigravity](https://antigravity.google/blog/gemini-4-argon-trillion-edge-graphs-and-tpu-kernels)：Google 的工程复盘：多 agent 框架 Teamwork 数天内建成 FarArray——RDMA 上的 PGAS，把无锁图算法扩到 1.14 万亿边，吞吐比 TCP KV 基线高 60–90 倍；另手写并验证了 O(N) 显存的 Pallas SpMM 内核。人定架构与验收标准，agent 负责实现与调优。

[Mirendil 发布首个模型 Fern](https://mirendil.com/news/introducing-fern/)：Mirendil 从零预训练的首个模型，上下文窗口最高 10M token，面向高强度 agentic 任务：跨大仓库编程、端到端读 agent trace、审计预训练数据。

[Training Foundation Models with a Single Algorithm](https://arxiv.org/abs/2610.40564)：将 RL 目标推导为对模型生成目标分布的最大似然拟合，把 pretraining、midtraining、SFT、RL 统一进同一基于似然的训练算法，分阶段训练只是特例。

[Nestor: Nested Sparsity for Scalable Pretraining and Continual Learning](https://ma-lab-berkeley.github.io/Nestor/)：Yi Ma 团队提出的嵌套稀疏 Transformer：类似 MoE，但路由的是 attention——token 先被分到少数「列」（各自的注意力算子），列内再由独立 router 选专家；等算力等稀疏度下预训练优于 MoE，持续预训练中适应更快、遗忘更少。

![](/images/c1a721b3ab14cd3c00b6.svg)

[Competing Learning in Hybrid Architectures](https://arxiv.org/abs/2610.26830)：在混合架构（线性 recurrence 加 softmax attention）中发现「竞争学习」：某层先学到函数就会压制其他层的训练信号，使 attention 常学不到 retrieval；训练中程停更 recurrence 即可恢复。

[Dynamic Chunking for End-to-End Hierarchical Sequence Modeling](https://arxiv.org/abs/2507.07955)：H-Net 原论文：用动态分块替代 tokenizer 的端到端层级序列建模，模型自行学习与内容相关的切分；字节级 H-Net 在等算力等数据下超过 BPE Transformer，在中文、代码与 DNA 等弱分词先验的数据上数据效率提升近 4 倍。

[From Tokens to Bytes I](https://www.cartesia.ai/blog/from-tokens-to-bytes-part-1) · [II](https://www.cartesia.ai/blog/from-tokens-to-bytes-part-2)：Cartesia 的上下篇实验报告：搭建与 BPE 严格对照的 H-Net scaling ladder，分析学到的 in-context tokenization 等行为；下篇拆解 pretokenization 这一 BPE 的隐藏先验，用 loss-to-loss scaling law 衡量端到端学习相对手工先验的收益。

[Neural Thickets](https://arxiv.org/abs/2603.12228) · [Rethinking Neural Thickets](https://kyutai.org/logit-psv/) · [Without Weight Perturbations](https://arxiv.org/abs/2610.40649)：Neural Thickets 称 pretrained 权重附近密集分布着任务专家：随机扰动、小验证集选 top-K、多数投票，无需训练即可匹配 PPO、GRPO 等 post-training。Kyutai 的复现（交互博文与论文）否定权重空间解释：收益来自输出多样性、选择与投票，只给输出 logits 加随机偏置已足够。

[NanoDreamer: Learning to Act Through Imagination](https://www.benjamin-bai.com/projects/nanodreamer)：没有 GPU 的作者从零自写 autograd、张量库与 transformer，训出 75 万参数的迷你 Dreamer：actor 全靠想象 rollout 学习，在 MacBook 上打通全部 5 个 MinAtar 游戏；长文完整记录了失败诊断与架构修正。

[bux](https://github.com/pilot7747/bux/)：面向预训练消融的 JAX 框架：在 .bux 文件里以残差流上的代数写法定义模型，用 `|` 把任意配置行展开成 sweep，运行前静态检查全部设置，从笔记本 CPU 到多节点 GPU 集群都能训。

[resin](https://github.com/ekzhang/resin)：ekzhang 的实验性 LLM 推理积木库：headless Rust engine 负责调度、KV cache 与 metrics，前向传播交给面向硬件的模型专属 kernel；作者用它 12 小时搭出在 Blackwell 上接近 vLLM/SGLang 的独立引擎，非生产级。

[Unlimited-OCR](https://github.com/baidu/Unlimited-OCR)：百度的 OCR 系列 Unlimited OCR Works，主打一次完成超长文档解析；第二代以 SR-SWA 推进到 unlimited-horizon，并同步发布超长文档基准 MarathonDocBench，权重开放在 Hugging Face 与 ModelScope。

[PSI：量子信息五个公开问题的新结果](https://psi.inc/research/oqp-batch-2026/)：PSI 研究员与内部 AI 研究系统合作，在量子信息理论五个公开问题上给出新结果，涉及 Werner 态蒸馏、真空 CHSH 违反等；每项附论文、Lean 形式化与验证代码，并逐条记录 AI 的使用方式。

[AI for Science expands to foundations and institutions](https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions)：Anthropic 扩展 AI for Science 计划，联合 Sloan、Simons、NSF 等资助方与 STScI、Sanger、EMBL 等机构分发 Claude 使用额度，支持从基因组学到 Lean 数学形式化的研究项目。

[Working with academic communities to build scientific understanding](https://openai.com/index/building-scientific-understanding-with-academic-communities/)：OpenAI 介绍与学术社群合作、推动 AI 参与科学理解的工作。

[How we detect frontier model misalignment](https://openai.com/index/how-we-detect-frontier-model-misalignment/) · [Scaling Misuse Detection with Self-Assessment](https://safeguards.anthropic.com/2026/self-assessment/)：两家实验室的安全监控实践：OpenAI 披露由 activation probes、模型审查器与调查 agent 组成的多层 misalignment 检测体系，曾在训练中发现模型借 DNS 逃逸沙箱联网；Anthropic 的 self-assessment 让 Claude 回复后顺带评估对话安全性，复用 KV cache 使额外开销低于 2%。

[The eternal complement](https://openai.com/index/the-eternal-complement/)：OpenAI「Intelligence Age」系列的首篇散文：天才只是进步的一种投入，还需要机构、资本与执行组成的 institutional intelligence 作为互补；由此设想 depth 与 width 两条文明路径。

[LLM Voice](https://martinfowler.com/bliki/LLM-Voice.html)：Martin Fowler 谈 LLM 文风：散文也有自己的 uncanny valley，他建议作者别让 LLM 起草正文——写作本身是整理思考的工具，不该外包出去。

[Time in the Chaos](https://pages.cs.wisc.edu/~sharonli/time-in-the-chaos.html)：Sharon Li 的职业随想：2018 年放弃加入 OpenAI 并不后悔——环境塑造人成为谁，评价一个决定应看当时掌握的信息与价值观，而非事后结果。

[A Visual Guide to Multimodal Generation](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-multimodal-generation)：Maarten Grootendorst 的视觉长文，50 余张自制图解讲清多模态生成：diffusion 内部、acoustic 与 semantic audio token、视频生成，以及 late fusion 与 early fusion 两条架构路线。

### 数学 / 科研 / 学习

[formal-math/eth：#3-SAT 的 2^o(n) 算法](https://github.com/anthropics/formal-math/tree/16a5ce41304fcdaea4e0be7c132e1c361dc26da5/eth)：Anthropic 公开的论文与 Lean 4 形式化：内部研究用 Claude 模型给出 #3-SAT 的 2^O(n log log n / √log n) 时间确定性计数算法，从而否定指数时间假设（ETH）；结果仅是渐近意义，不含实用求解器。

[An Outline of OpenAI’s Algorithm for k-SAT in 2^{o(n)} Time](https://msellke.com/Files/ETH-False-Slides.pdf)：Mark Sellke 的幻灯片，概述 OpenAI 提出的 k-SAT 算法：对所有 k 在 2^{o(n)} 时间内求解——若成立将否证 ETH。

[quasi-rh-hillclimb](https://github.com/rohanarun/quasi-rh-hillclimb)：围绕 OpenAI「拟黎曼假设」预印本的公开改进项目：该预印本给出 Re(s) > 7/8 的无零点半平面，社区与 AI agent 沿其不等式做参数爬山，已推进到 θ ≈ 0.8739；证书可脚本审计并经 Lean 4 独立复核。

[Formalizing the Enormous Theorem](https://axiommath.ai/research/the-enormous-theorem-formalized/)：Axiom 宣布在 Lean 中完成有限单群分类定理的首个完整机器检验证明：原证明约 1.5 万页、横跨 500 余篇论文；数十个 AI agent 在数学家指挥下 24 天产出约 4310 万行 Lean 代码，并发现已发表论证中的 34 处值得注意的偏差。

[CircuitBreaker](https://www.yukon.org/circuitbreaker)：Yukon 与 UCLA Math+AI 的公开挑战：为一个显式 NP 布尔函数族证明无条件 gate 下界，当前 frontier 已由 AI solver 推到 4n；终极目标是对固定 NP 问题的超多项式下界，即证明 P≠NP。

[Enumerating primes on a Turing machine in nearly linear time, unconditionally](https://nor-blog.pages.dev/posts/2026-10-27-enumerating-primes/)：把 Harvey 近期依赖猜想的素数枚举结果去条件化：在多带图灵机上以 N(log log N)^{1+o(1)} 次位操作确定性地列出 N 以内的素数；另附面向外行的直觉版与完整证明。

[Integer Multiplication Crossover Lab](https://alejandrozu.github.io/integer-multiplication-crossover-lab/#pr=4470&tab=frontier)：探索整数乘法新构造在多大输入规模上真正快过 Harvey–van der Hoeven 算法的交互页面：区分完整运行时比较与标注了缺失成本假设的条件模型，输入规模以 log₂ log₂ n 显示。

[The motion of point particles in curved spacetime](https://arxiv.org/abs/1102.0529)：Poisson、Pound、Vega 的 Living Reviews 经典综述：从零建立 bitensor 与弯曲时空 Green 函数工具，推导点标量荷、点电荷与点质量的运动方程——减除奇异场后剩下的自力使粒子偏离测地线。

[Every Joule](https://iamtechartist.com/every-joule/)：十课时的交互式 3D 物理书，覆盖 GCSE/IGCSE 能量主题：每幅插图以 3D 水墨立出页面、能量以流光在储能间移动，学生先预测再验证。

[Atlas of Physics](https://atlas-of-physics.vercel.app/) · [Atlas](https://atlasclass.app/)：把 174 页物理笔记做成的交互式 3D 教科书（three.js），覆盖力学与电磁学：滚动翻页、悬停高亮、点击把矢量与图像拆开看，练习题直接答在图上。

[SystemDesign.io](https://systemdesign.io/)：按出题公司与难度整理的系统设计面试题库，收录短链、网盘、限流器、分布式追踪等五十余道经典题，多数附参考方案。

[史记 Wiki](https://shiji.memify.wiki/wiki/index.html)：以 Wiki 形式组织呈现的《史记》站点。

### 编程 / 智能体工具

[Droid 1.0: Building a Frontier Harness](https://factory.com/news/frontier-harness)：Factory 发布 Droid 1.0：模型无关的 agent harness，默认改用 programmatic tool calling——模型一次写出沙箱 JavaScript 批量调用数百个工具，在 Terminal-Bench 上以更低成本跑赢各家原生 harness。

[Orb](https://orb.thomas.md/)：把 AI 订阅、API key 与本机硬件接到一处，在 macOS 和 iOS 上统一调度 Claude Code、Codex、Antigravity、OpenCode、Grok 等智能体；前身是 sandboxed.sh。

[Noodle](https://usenoodle.app/)：macOS 上的开源个人智能体平台：每个 agent 有名字、角色设定、自己的 workspace 与一台 Linux 桌面，可拉进同一个群聊协作；iPhone 可配对远程使用。

[agentbox](https://github.com/savannahfeder/agentbox)：给 agent 配收件箱的桌面 GUI：并行运行几十个 Claude Code 与 Codex agent，各自独占 git worktree，像回邮件一样只处理需要你的那几个；直接用现有订阅，无账号无服务器。

[Herdr](https://herdr.dev/)：多 agent 终端应用：常驻的 herdr-core 托管所有会话，agent 可以再启动并指挥其他 agent 干活，界面布局全是明文配置文件、可直接让 agent 改写。

[agent-desktop](https://github.com/vercel-labs/agent-desktop)：Vercel Labs 的桌面 computer use 方案：Rust 写的 CLI/C 库，经系统 accessibility tree 读取任意应用的真实 UI 结构并操作——元素 ref 稳定、动作可安全重试，替代对截图的像素猜测。覆盖 macOS、Windows、Linux。

[Tencil](https://tencil.dev/)：在浏览器里指向页面元素，coding agent 就能改对应代码：组件、源文件和 markup 随选中一并送达，不必口述位置；支持 Claude Code，适配 Next.js 与 Vite。

[Answer me with HTML](https://answer-me-with-html.com/#install)：一个 agent skill：模型只写约 600 token 的 markdown 草稿，内置 CLI 负责排版——时序图、流程图、对比表与写作规则检查，输出零网络请求的自包含 HTML 页，输出 token 约省 8 倍。

[Forge for ChatGPT](https://chatgpt.com/plugins/forge)：Forge 的 ChatGPT 插件：把 Forge Cloud 里托管的 React 组件 fragments 接入对话，按描述检索、实时预览不同变体并复用进项目。

[fitstream](https://github.com/alexshtf/fitstream)：把 PyTorch 训练循环当作事件流的小型库：每个 epoch 产出一个事件，用普通 Python 迭代器和 pipe(...) 组合验证指标、early stop 等变换，不用重写训练循环。

[blaze](https://github.com/indexable-inc/blaze)：cargo 的直接替代品：常驻 daemon 只重建改动部分，号称增量构建比 cargo/rustc 快至 92 倍；在 zed、servo、bun、Codex CLI 等真实项目上通过构建与测试。

[bbtree](https://blog.xiangpeng.systems/posts/bbtree/)：Xiangpeng Hao 实现的有序 map，自称最快的 B-tree：单线程比 std BTreeMap 快 5 倍、96 线程比 crossbeam-skiplist 快 12 倍、内存少 30%，no_std 可直接替换；用作 LSM-tree 的 memtable 提速 1.37–6.83 倍。

[Telling identical GPUs apart with one line of PyTorch](https://divagr.com/blog/telling-identical-gpus-apart)：同型号 GPU 也能互相区分：向 torch.index_add_ 喂入精心设计的输入，atomic add 的浮点求和顺序会泄露每块芯片稳定且难以伪造的指纹——19 块 A40 上 99.1% 识别率，容器重启后仍全部复认。

[Claude Code 可用 VPS 精选](https://vps.appsail.dev/?sort=testip&dir=asc)：面向国内跑 Claude Code 的 VPS 选购页：套餐按回国实测延迟排序，标注 CN2 GIA、9929 等线路与退款政策，并给出「主力机＋低价代理机」的省钱组合。

### 开发 / 原生界面

[Wraith Terminal](https://wraithterm.com/)：面向浏览器的 WebGPU 终端渲染器，用 Ghostty 的 libghostty-vt 解析转义序列，兼容 xterm.js API 与常用插件，CPU 占用约为 xterm WebGL 的四分之一；页面内置基准可直接跑分。

[CrychicUI](https://crychicui.zhangyanghaha0407.workers.dev/#/)：egoist 的 MyGo 原生 UI 框架的 Go 组件库：1500 个组件分 38 类，锌灰底色与跟随系统的强调色，组件带动效、可交互组件带合成音效，GPU 自绘不用 WebView；站点即 gallery 程序编译成的 WebAssembly。

[NSGo](https://oneo-me.github.io/nsgo/)：跨平台原生 UI 引擎：信号、布局与文本全在 Go 中运行，各平台用自己的视图绘制——AppKit、Android Views、Direct2D、GTK 4 与 DOM；一套代码覆盖 iOS、Android、macOS、Windows、Linux 和 Web。

[Amicro](https://amicro.dev/)：主打细腻动效的 React 微交互组件库。

[Nexvyn UI](https://ui.nexvyn.dev/components)：组件库站点：32 个 CTA/FAQ 区块、20 个特色组件与 14 个基础件，收 Fluid Orb、Blossom Picker、设备 mockup、滚动指示器等偏视觉与动效的单元。

### 设计 / 创作 / 效率

[Music Lenses](https://pliploop.github.io/sparse-steer-retrieval/lenses/)：Sparse Steerable Retrieval 项目的交互演示：把曲库摊成一张可拖动缩放的地图，点击波形即听，内置「镜头」以保留约 80% 成员方差的方式组织近邻。

[Opus 5.5 + Codex 制作二次元角色桌面互动视频](https://www.bilibili.com/video/BV1E3nU6QEps/)：B 站教程：用 Opus 5.5 与 Codex 制作二次元角色跟电脑桌面互动的视频，作者公开完整提示词与流程。

[Motion Prompt](https://showheyohtaki.github.io/motion-prompt/)：给 AI 用的动效名称词库：在画廊里挑好镜头运动与动效样例交给 AI，让它按这些名字编辑或生成视频；样例均为无依赖的 Canvas 2D 参考实现。

[ASCII Magic](https://www.ascii-magic.com/)：把图片和视频变成 ASCII 艺术的在线工具：上百种风格与实时后期特效，另有 AI 生成预设与一键配方，最高 4K 导出；还开放 MCP server 让 agent 直接调用整条渲染管线。

[INITIĀLIS](https://initialis.azlen.me/)：Azlen 的装饰首字母（drop cap）无限探索器：字母、边框、纹饰、纹理与油墨全在浏览器中程序化绘制，点开一个即可生成更多相似变体，可导出透明 PNG、生长动画 WebP/MP4。

[florilegium](https://github.com/kevinraymond/florilegium)：LuaLaTeX 宏包，用 Lua 程序化生成 Delft 蓝花卉页边：花瓣、枝叶都是排页时计算的参数曲线，再以贪婪空间填充算法让植株长进留白，每页一座不同的花园；附浏览器 playground。

[Geist Serif](https://vercel.com/font?type=serif)：Vercel 的 Geist 字体家族新增衬线成员，与 Sans、Mono、Pixel 并列，延续瑞士设计的极简取向；官网附交互式 glyph 检查器与 playground。

[Kibernetyk Mono](https://pavlokilko.github.io/KibernetykMono/)：等宽字体，7 个字重、600 字形，主打完整的 block element 与 box-drawing 支持，面向终端仪表盘与 ASCII 示意图这类密集界面。

[Reference](https://azivor.github.io/reference/)：视觉参考收集站：首个合集拆解 Anthropic、OpenAI、Grok、Perplexity 的视觉设计，每张图附来源与独立的设计观察，收藏保存在本地浏览器。

[Unseen Studio](https://unseen.co/) · [The Symphony of Vines](https://symphonyofvines.unseen.co/)：做沉浸式网页体验的品牌与动效工作室，首页本身即是一件 click & hold 互动作品；其交互叙事项目 Symphony of Vines 用光标凿冰川、导河流、掀潮汐来讲土地如何塑造葡萄酒。

[Lusion](https://lusion.co/)：获奖 3D 与交互网站工作室，融合创意指导、3D 工艺与交互开发，为品牌打造沉浸式数字体验。

[Resn](https://resn.co.nz/#!/work/)：新西兰创意数字机构，业务覆盖 ideation、设计与开发，官网汇集其交互网站作品。

[Abetka](https://obys.agency/work/abetka)：Obys 为 Projector 基金会设计的文化网站：乌克兰语 33 个字母各对应一个国家象征，用一款当代乌克兰设计师字体呈现，曾获 Webby 提名。

[Immersive Websites — Framer Gallery](https://www.framer.com/community/gallery/vibe/immersive/)：Framer 社区画廊中「沉浸式」主题的作品合集。

[Still Night](https://stillnight.joshua-garcia.com/)：以梵高《星月夜》为主题的交互网页作品，可以在画面上「弹奏」星空。

### 桌面 / macOS / 其他

[MyGo 云音乐](https://music.egoist.dev/)：egoist 制作的第三方网易云音乐桌面客户端：边下边播至 Hi-Res FLAC、逐字歌词与「律动」视图、刘海迷你播放器、私人 FM 与每日推荐，扫码登录。

[Strata Files](https://github.com/cristipufu/strata-files)：macOS 原生键盘优先文件管理器，定位 Finder 替代：即时搜索与自然语言过滤、实时文件夹大小、磁盘占用图、双栏视图、逐文件 Git 状态与可撤销操作。

[reshelf](https://github.com/aka-kika/reshelf)：本地优先的 macOS 应用，管理你真正在用的开源仓库：⌘V 抓取 GitHub 链接并自动分类，按「书架」整理、按类别克隆，还提示本地克隆有更新可拉；无账号无云。

[ClipBoardLine](https://orkunisitmak.github.io/clipboardline/)：macOS 与 Windows 双平台的剪贴板管理器：图片、文本、链接分三排搁架陈列，另有 Library 窗口用文件夹与标签长期归档，全程键盘操作。

[Drift](https://drift.dvkk.dev/)：Windows 上的开源录屏工具（Rust + Tauri）：录完自动加上平滑缩放、重绘的顺滑光标和壁纸底框，导出即是剪辑观感的 MP4，无水印、不上传。

[velocitty](https://github.com/valvesky/velocitty)：自称「快到只受内核限制」的跨平台终端：CPU 渲染、调用各平台原生库与字体，支持 sixel 图像与完整 Unicode，覆盖 Linux、Windows、macOS；明确不做 GPU 与多路复用。

[Aeon Essays](https://aeon.co/essays)：Aeon 的长文频道：哲学、科学、心理、社会与文化主题的严肃散文。
