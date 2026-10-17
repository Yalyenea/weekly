---
title: 第29期周刊
date: 2026-10-17
draft: false
slug: week-29
math: false
translationKey: weekly-29
obsidianSource: pages/07-Personal/Blog/Weekly/Week-29.md
sourceDigest: 18a42a63b532efaf03de1d14200a98aea4c86a0b0f5faa3cc6a7cf467bd7ad33
summary: 数学与 AI 的讨论、前沿模型与科学应用，以及形式化证明、开发工具和桌面设计资源。
---

### AI / 研究 / 观点

[On mass-produced math](https://www.paradigm3.org/research/mass-math)：梳理 OpenAI 批量发布数学预印本后的验证进展与透明度问题，讨论这些成果对数学研究的影响。

[OpenAI Math Dump Hits My Home](https://minorfree.github.io/OpenAIDump/)：Hung Le 记录审读图度量嵌入稿件的过程，既批评证明表述过于压缩，也分享理解新方法的收获。

[TCS, AI, and the Adults in the Room](https://minorfree.github.io/Clement/)：Clément Canonne 呼吁资深理论计算机科学研究者明确学科价值，并为年轻研究者争取经费与稳定职位。

[Michael I. Jordan 访谈](https://www.di.ens.fr/~fbach/MJordan_ITW_Liberation_English.html)：讨论 AI 的社会作用，以及缺乏现实分析的灭绝风险叙事对年轻人的影响；补充说明也提醒读者谨慎理解媒体标题。

[Jelani Nelson 谈加入 Anthropic](https://x.com/minilek/status/2109706940020596840)：长期相识的研究者对模型能力的判断，促使他重新审视自己的预期；在了解多家公司后，他选择加入 Anthropic。他也担心社会尚未准备好应对认知劳动的变化。这是一段个人经历与判断。

[Simons 数学与 AI 计划](https://www.simonsfoundation.org/news/simons-foundation-launches-15m-effort-to-help-mathematicians-navigate-ai-era/)：Simons 基金会联合 Anthropic 与 OpenAI 投入合计 1,500 万美元的资金与资源，支持数学界评估 AI 成果、学习工具并制定使用规范。

[Thinking will become a hobby](https://www.spinellis.gr/blog/20261008/?via=dailydev)：Diomidis Spinellis 讨论 AI 对认知劳动的影响，以及人们如何在工作之外建立有意义的生活。

[Gowers 谈 AI 灭绝风险](https://gowers.wordpress.com/2026/10/16/how-worried-should-we-be-about-extinction-risk-from-ai/)：梳理相关论证中的假设与不确定性，解释为何数学家值得认真研究这些问题。

[Neural Networks Are Already Clean](https://already-clean.goodfire.com/)：Nick Cammarata 提出一个工作假说：部分神经元看似混乱，可能源于观察工具、解释方法或训练问题，网络机制或比预想更易理解。

[The Beauty of Something Grown](https://www.hyperdimensional.co/p/the-beauty-of-something-grown)：Dean W. Ball 从 Goodfire 的假说出发，讨论神经网络若更易理解，AI 安全与政策争论可能如何变化。

[前沿工作者的未来预期](https://www.anthropic.com/research/expectations-for-the-future)：Anthropic 结合内部用工观察与公众调查，讨论接触 AI 的经验与人们对工作、经济的预期之间的关联。

![AI 未来预期调查](/images/19aabc49895032f0d0ee.jpg)

### 模型 / 智能体 / 科学应用

[Muse Wonder](https://research.meta.ai/blog/muse-wonder)：Meta 展示跨对话记忆、持续执行任务与编程等个人和工作助手能力。

[Muse Spark Open](https://research.meta.ai/blog/muse-spark-open)：Meta 发布面向多模态编程与长程任务的模型权重，并展示在两台 M5 Ultra Mac Studio 上本地运行；权重遵循 Muse Model License。

[Span-02](https://www.respan.ai/blog/introducing-span-2)：Respan 发布面向决策任务的开放权重模型，可设置推理时间预算，随时停止并返回当前最佳结果。

[Microsoft AI 前沿预训练](https://microsoft.ai/news/frontier-pre-training-at-microsoft-ai/)：介绍 MAI-Base-2 的预训练，分享混合专家模型在扩展规律、基础设施与数据管线上的设计。

[Gemini 4 Argon for Robotics](https://developers.googleblog.com/gemini-4-argon-for-robotics/)：Google 展示机器人控制、现实场景转仿真、视频标注与迭代改进等应用。

[Research@ 2026](https://research.google/blog/research-2026-10-ways-were-amplifying-human-ingenuity/)：Google 汇总十项研究进展，涵盖地理空间分析、科研助手、技术文档审查、数值预测与医疗 AI。

[Heaviside 与 Microsoft Discovery](https://www.arenaphysica.com/articles/heaviside-microsoft-discovery-collaboration)：Arena Physica 将电磁场模型引入 Microsoft Discovery，以快速预测辅助天线、光子器件与半导体设计，最终验证仍使用传统求解器。

[Claude 优化量子电路](https://www.anthropic.com/research/designing-efficient-quantum-circuits)：Anthropic 报告在自动评估器支持下优化八类量子电路，部分任务的资源估算显著下降。

[自主湿实验室](https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/)：Google 介绍连接 AI、实验机器人与真实实验反馈的研究，包括实验室数字孪生、适配体筛选与蛋白结合物设计。

[ECDSA 曲线来源](https://www.anthropic.com/research/ecdsa-curve-origins)：Anthropic 报告 Claude 追溯出多条 NIST 椭圆曲线种子的生成方式，并提供复现代码，回应参数来源疑问。

[蒸馏攻击防御](https://www.anthropic.com/research/distillation-defenses)：Anthropic 介绍限制未经授权模型蒸馏的措施，报告早期可提取数据量下降约 90% 至 99%，同时指出持续效果和误伤仍需观察。

[小模型自主复制评测](https://www.anthropic.com/research/self-replicating-ai)：通过物联网设备推理实验与简化复制评测，研究小模型在普通联网硬件上自主复制的可能性与障碍。

[Scion 版本控制](https://www.anthropic.com/engineering/redesigning-source-control)：Anthropic 介绍内部版本控制系统，解释大量 AI 生成代码如何改变超大型仓库的存储、检出与合并需求。

[TheoPhysEval](https://arxiv.org/abs/2610.16733)：用 50 道可核验的研究级理论物理题，评测自主 AI 智能体的解题能力。

[Auto Research](https://app.getsupers.com/auto-research)：追踪社区提交如何改善 OpenAI 2026 年数学预印本中的关键指标。

### 数学 / 科研 / 学习

[Lean 4 数学教师指南](https://jaalonso.github.io/calculemus/posts/2026/10/10-lean_4_para_matematicos_guia_docente/)：面向没有编程经验的数学学生，按八个主题介绍形式化证明。

[Acorn](https://acornprover.org/)：用于编写和检查形式化证明的定理证明器。

[Prove2Me](https://prove2.me/)：协作式 Lean 4 形式化平台，将论文或教材结果拆成可认领的证明任务，并把已证结果发布至 Formalpedia。

[RL Handbook](https://rl-handbook.com/)：强化学习与序贯决策手册，涵盖多臂老虎机、马尔可夫决策过程、策略梯度、离线及多智能体强化学习。

[Stochastic Superoptimization](https://theory.stanford.edu/~aiken/publications/papers/asplos13.pdf)：将无循环二进制程序优化写成随机搜索，以正确性和性能代价驱动 STOKE 搜索。

[概率分布图谱](https://torwager.github.io/probability_distributions/)：交互展示常见分布的性质、用途，以及特例、极限与变换关系。

![概率分布关系图](/images/617bb5a0c82b8b7992e8.png)

[Deep Learning Alchemy](https://deep-learning-alchemy.github.io/)：斯坦福深度学习课程，通过实验、预测实验结果与分析网络经验现象来培养研究能力。

[深度表征学习的原理与实践](https://ma-lab-berkeley.github.io/deep-representation-learning-book/zh/)：中文深度表征学习教材。

[Why is Fusion Hard?](https://lanyon.ai/research/mhd-instabilities/)：以等离子体约束与不稳定性为线索，解释核聚变为何不断遇到新的物理难题。

[Introduction to Cosmology](https://arxiv.org/abs/astro-ph/9312022)：宇宙学讲义，重点介绍大尺度结构、宇宙微波背景各向异性与暴胀。

[Concise Research Roadmap（PDF）](https://i.smitop.com/concise-research-roadmap.pdf)：Jared Kaplan 于 2021 年 7 月更新的研究路线图，涉及通用 AI 助手、规模扩展与可解释性等方向。

[训练性能与激活检查点卸载](https://github.com/stas00/ml-engineering/tree/master/training/performance#offloading-the-activation-checkpoints-to-cpu-memory)：机器学习工程性能指南，包含将激活检查点转移到 CPU 内存以减少显存占用的章节。

[Quant Wiki](https://github.com/LLMQuant/quant-wiki)：量化金融知识开源与中文化项目。

[LLMQuant](https://llmquant.com/)：聚焦 AI、大语言模型与量化金融的社区，汇集量化 Wiki、论文发现等项目。

### 编程 / 智能体工具

[OpenIntelligentUI](https://github.com/CopilotKit/OpenIntelligentUI)：开源生成式界面框架，将对话响应呈现为解释、比较和可交互工具。

[OpenUI](https://www.openui.com/)：供 AI 应用和智能体生成交互界面的开源基础设施，可接入已有组件与设计系统。

[REA](https://github.com/morluto/rea)：利用智能体分析应用行为与原生二进制文件的逆向工程工具。

[open-claude-ui](https://github.com/Caho1/open-claude-ui)：基于逆向分析复现 Claude 桌面端界面的项目。

[Mirror](https://github.com/reflection-oss/mirror)：Reflection 团队的编码智能体运行框架。

[Earshot](https://github.com/Leonxlnx/earshot)：供编码智能体分析、评价与生成声音的开源工具，支持仅用 CPU 运行。

[Yomado](https://yomado.app/)：为视觉智能体提供 Mac 虚拟屏幕，通过截图与输入操作桌面应用。

[Codex++ 2.0.0](https://github.com/b-nnett/codex-plusplus/releases/tag/v2.0.0)：Codex 桌面应用调整工具的新版发行页。

[Mayoi](https://github.com/sorrycc/Mayoi)：用 Go 编写、由 GPU 原生绘制界面的轻量代码编辑器。

[ELYTerminal](https://git.zacharyzhang.com/ZacharyZhang-NY/ELYTerminal)：基于 GPUI 与 Ely 构建的终端模拟器。

[MathJax Go](https://github.com/d2lang/mathjax-go)：D2 所用 MathJax 3.2.2 TeX 转 SVG 流程的 Go 原生移植。

[ManimGX](https://github.com/academa-labs/manimgx)：数学与 3D 视频动画引擎，提供 Manim 的 Python API 和 Rust GPU 核心。

[Pele](https://pele.run/)：将 Mermaid 图表渲染为 SVG 的轻量开源库，可通过 CSS 变量定制主题。

### 设计 / 写作 / 桌面

[Anatomy](https://skills.wheresryan.sh/anatomy)：将概念转成可交互等距机械示意图的 Claude Code 技能。

[归藏 PPT Skill](https://github.com/op7418/guizang-ppt-skill)：生成 HTML 幻灯片的智能体技能，包含版式、配图提示与演示运行时。

[awesome-design-md](https://github.com/VoltAgent/awesome-design-md)：汇集知名品牌设计系统的 DESIGN.md 文件，供编码智能体参考。

[anti-defensive-writing](https://github.com/Kiterlin/anti-defensive-writing)：删减防御性措辞、让表达更直接的 Codex 写作技能。

[UX Writing Skill](https://github.com/content-designer/ux-writing-skill)：面向 Claude 和 Codex，按设计规范撰写界面文案的技能。

[Longlist](https://longlist.design/)：设计工作室与独立设计师目录，便于寻找合作方或雇主。

[Build your slide template](https://martinfowler.com/articles/never-send-slides/build-your-slide-template.html)：从配色、字体与空白版式建立简洁、可复用的演示模板。

<img src="/images/45ce052e1b6794e585d5.png" alt="演示模板示例" width="386" loading="lazy">

[MacSpace](https://github.com/1architect/macspace-releases)：查看和清理 macOS 系统数据与 Apple Intelligence 模型文件。

[OpenClean](https://github.com/leoAnimesh/OpenClean)：Mac 清理工具，支持清理垃圾文件、完整卸载应用与查看磁盘占用。

[Inua](https://inua.lyric.im/)：Hyprland 桌面壳，提供状态栏、启动器、控制中心、通知、Dock 与设置界面。

[POND](https://www.butterfly.so/pond)：基于 Arch Linux、使用 Niri 的 Linux 发行版，提供配套桌面与系统配置。

[Craft Launcher](https://github.com/storytold/craft-launcher)：用于安装、更新与启动 Craft 应用套件。

[v2mac](https://github.com/LordVersA/v2mac)：基于 Xray-core 的原生 macOS 客户端，支持代理订阅、延迟测试、路由与菜单栏控制。

[UU 远程 Linux 被控端](https://github.com/VallierDev/uu-remote-linux)：网易 UU 远程的非官方 Linux 被控端实现。

[UU 远程接入指南](https://github.com/netease-uuyc/uuremote-integration-guide)：通过 URL Scheme 接入设备绑定与远控能力，附 iOS、Android 示例和错误码。

[Epic Games Launcher](https://launcher.epicgames.com/)：Epic Games 的桌面游戏启动器。
