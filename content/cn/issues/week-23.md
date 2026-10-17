+++
title = "第23期周刊"
date = 2026-09-06T02:04:04+08:00
draft = false
math = false
summary = "本期周刊收录：AI / 模型 / 智能体、数学 / 科研 / 学习、编程 / 系统 / AI 工具、macOS / 效率 / 其他。"
translationKey = "weekly-23"
+++

### AI / 模型 / 智能体

[Quantization-Aware Healing: a compressed, 4-bit model that outperforms its full-precision original](https://huggingface.co/blog/MultiverseComputingCAI/quantization-aware-healing)：Multiverse Computing 介绍 4-bit 量化感知修复方法，在其报告的 9 项基准中有 7 项超过同架构的 60B BF16 恢复检查点；额外蒸馏训练量并未配平，结果不能简单归因于量化本身。

[Introducing the XGBoost Vector-Leaf Model | XGBoost](https://xgboost.ai/2026/08/25/introducing-the-xgboost-vector-leaf-model)：介绍叶节点输出向量的树模型，用共享树结构处理多目标预测。

[[2608.27370] Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within \$5090](https://arxiv.org/abs/2608.27370)：探索在 RTX 5090 上低成本训练小型语言模型；v2 最佳模型的训练成本低于 6,900 美元，约 4,400 美元达到 Qwen2-1.5B 水平则来自缩放规律拟合估计。

[Training frontier knowledge work agents: A 397B RL training guide with SkyRL | Mercor Blog](https://www.mercor.com/blog/training-frontier-knowledge-work-agents-a-397b-rl-training-guide-with-skyrl/)：Mercor 分享使用 SkyRL 训练 397B 知识工作智能体的工程经验。

[chenglou/sotaku, Sotaku v2 solves 99.12% of a 25,000-puzzle Sudoku benchmark with an 800K-parameter looped transformer trained from scratch](https://github.com/chenglou/sotaku)：用从零训练的约 80 万参数循环 Transformer 解数独，仓库报告 Sotaku v2 在 25,000 道题、FP32 与 1,024 次推理迭代下达到 99.12% 的解题率。

[Z1T | Transformer-like models for Z1](https://extropic.ai/writing/z1t/)：为 Z1 概率硬件设计稀疏类 Transformer 模型，探索模型与硬件的共同设计，并公开部分训练配方与权重。

[GPT-6 Astra on robot arms | Robocurve](https://openai.robocurve.org/gpt-6-astra/)：展示 GPT-6 Astra 操作机械臂的实验；看完有点相信 LLM 就能解决一切了，不过演示能做到什么，还是要回到具体任务来看。

[Model guidance | OpenAI API](https://developers.openai.com/api/docs/guides/latest-model) 关于 Astra 的使用。
```md
**模型怎么用**
- 走 Responses API，设 `model: "gpt-6-astra"`
- 新能力：异步 tool calling（在工具定义上设置 `async: true`）、中途改指令（WebSocket mid-turn steering）、标准单 agent 请求中可用 `configuration_update` 改 reasoning effort（保留请求级 effort 可维持原提示前缀）
- 不支持 `reasoning.effort: "none"`；欧盟数据驻留下没有 Fast mode

**迁移时注意**
- 原先用 `none` / `minimal` → 先试 `low`
- 工具调用优先 Responses；Chat Completions 虽能用，但 tool calling 要 Responses
- 去掉 `temperature` / `top_p` / `top_logprobs`（及对应 logprobs）
- 从 GPT-5.5 或更早迁移时，缓存：`prompt_cache_retention` → `prompt_cache_options.ttl: "30m"`

**提示词调参（最实用）**
1. **主动性**：默认更爱追问；要它自己干完，就明确写「推断意图、偏向行动、别只承认能力/给半成品」。先做出可审阅结果再问批准。
2. **指令优先级**：对 skill / `AGENTS.md` 更敏感；写明「用户指令优先于 skill」。卡壳时让它引用具体 skill 条款。
3. **文风**：默认爱列表/表格/套话；需要散文就规定段落优先、少嵌套列表，并禁 slop（delve、Bottom Line、X not Y 等）。
4. **子代理**：默认可能委托不够；多代理场景要写清何时并行委托。
5. **测试**：编码时偏过度测试；小改动写明「别为可逆低影响改动写镜像测试」。

我的使用侧重点：把主动执行、文风、并行委托和测试边界写清楚，减少无谓的追问。
```

[X 上的 eric provencher：“Rethinking skills and prompts for GPT-6 Astra” / X](https://x.com/pvncher/status/2095991462416490862)：Eric Provencher 关于 Astra 技能与提示词写法的讨论。

### 数学 / 科研 / 学习

[The Math of RL - From Policy Gradients to PPO and GRPO](https://x.com/harshbhatt7585/article/2094021031551766970)：从策略梯度讲到 PPO 与 GRPO 的强化学习数学文章。

[Introduction to Robotics | IRoM-Lab](https://irom-lab.princeton.edu/intro-to-robotics/)：普林斯顿的机器人学入门课程，覆盖规划、控制、状态估计与机器人学习，并提供无人机项目作业。

[[Blog] Estimate Diagonal Hessian](https://hammerhead-piano-5a0.notion.site/Blog-Estimate-Diagonal-Hessian-36014499130180b5b077e6d1511b729e)：关于 Hessian 对角元素估计的文章。

[Axiom](https://axiommath.ai/)：面向数学推理与形式化证明的 AI 项目。

[Announcing FrontierMath Erdős | Epoch AI](https://epoch.ai/latest/announcing-frontiermath-erdos)：Epoch AI 发布由 68 道开放 Erdős 问题构成的数学评测，以 Lean 验证证明或反证。

[francesco215.github.io/autoregressive_diffusion/uncertainty.html](https://francesco215.github.io/autoregressive_diffusion/uncertainty.html)：关于自回归扩散与不确定性的阅读材料。

[\[2609.02867v2\] Magnetized accretion onto rapidly spinning binary black holes: mini-disk thermodynamics, magnetic transport, and dual jets](https://arxiv.org/abs/2609.02867v2)：通过数值模拟研究快速自转双黑洞的磁化吸积、迷你盘热力学、磁输运与双喷流。

![85a6d0e125b60f74e46ffbe496f8b22e.png](/images/d8671f44ff42dcd4.png)

[How Our Data Shaped Neural Architecture Discovery, and How Automation Can Reshape the Future | Core Automation](https://www.coreauto.com/blog/how-our-data-shaped-neural-architecture-discovery-and-how-automation-can-reshape-the-future#footnote-writing-style)：文章讨论数据与神经网络架构的归纳偏置：随机初始化并冻结的网络也可能提供可用特征，但图中的线性分类器仍经过训练。

这让我想到：能否通过多次随机初始化后的特征质量，提前筛选适合某类数据的架构？这里要区分随机特征本身的质量与后续分类器训练的作用。

> 一个具有合适归纳偏置的神经网络架构，即使主体权重随机且保持冻结，也可能把输入映射到更容易被简单分类器利用的特征空间；训练会进一步把这种初始结构对齐到具体任务。

![随机 ResNet-18 特征上的分类器输出](/images/8521e7934a3b508d.png)

*Figure. Output probabilities of a (linear) logistic classifier trained on a 10,240-dimensional NRF(Neural Random Feature) representation, extracted from identical, randomly initialized ResNet-18 architectures.*

一些相关论文：

- [[2410.04368] Algorithmic Capabilities of Random Transformers](https://arxiv.org/abs/2410.04368)：冻结随机 Transformer 主体，仍优化嵌入层来激活算法能力。
- [[1711.10925] Deep Image Prior](https://arxiv.org/abs/1711.10925)：用网络结构作为图像先验，不依赖大型训练集，但仍针对单幅图像优化。
- [[1906.04358] Weight Agnostic Neural Networks](https://arxiv.org/abs/1906.04358)：搜索在多个共享权重取值下表现良好的网络架构。
- [[2206.08464] PRANC: Pseudo RAndom Networks for Compacting deep models](https://arxiv.org/abs/2206.08464)：冻结多个随机基网络，学习线性组合系数以压缩模型。

[Theory of Mind as a Central Skill for Researchers](https://rtmccoy.com/posts/theory_of_mind.html)：把 theory of mind 视为贯穿写作、报告、评审与合作的元技能：先估计受众知道什么、关注什么、可能怎样误读，再决定解释的密度和顺序。

- 做报告时，抽象概念要配上示例；重要的观点反复说；避免大段文字。要考虑场合和受众。
- 写论文时，明确阐明观点；给图表加上较详细的说明；使全文结构易于浏览；尽量少用缩写词，总之是不要加重读者的记忆负担

[Arena Physica Thesis](https://www.arenaphysica.com/thesis)：电磁工程的瓶颈不只在求解器，还在 CAE、EDA、测试与现场数据彼此割裂，验证反馈又慢又贵。它提出用 agent 工具链、物理基础模型和真实实验室数据打通设计—仿真—测试闭环。

[[2608.29530] The Emergent Symbolic Structure of Artificial Neural Networks](https://arxiv.org/abs/2608.29530)：神经网络训练后内部可能隐式蕴含了符号结构，所以符号主义与连接主义可能并非完全对立。相关论文：[[2506.21797] Why Neural Network Can Discover Symbolic Structures with Gradient-based Training: An Algebraic and Geometric Foundation for Neurosymbolic Reasoning](https://arxiv.org/abs/2506.21797)

[Atlas Fields Studio](https://fields-studio.arenaphysica.com/)：Arena Physica 的电磁场预测交互演示，可修改几何并观察电场与磁场的预测变化，目前标注为 Beta。

[What is a Smith Chart? | Arena Physica](https://www.arenaphysica.com/publications/smith-charts)：介绍射频工程中的 Smith 圆图。

### 编程 / 系统 / AI 工具

[Your First GPUI App - Building a Desktop UI in Rust | Mrsheerluck Blog](https://blog.sheerluck.dev/posts/your-first-gpui-app-building-a-desktop-ui-in-rust/)：用 Rust 和 GPUI 构建第一个桌面应用的入门教程。

[emilkowalski/skills: Skills for Designers and Engineers.](https://github.com/emilkowalski/skills)：Emil Kowalski 把界面设计与动画经验整理成智能体技能，覆盖动画实现、审阅、交互细节和 UI 原型。

[DEEIX-AI/DEEIX-Chat: An enterprise AI workspace for model routing, multimodal chat, files, tools, billing, identity, and operations.](https://github.com/DEEIX-AI/DEEIX-Chat)：整合模型路由、多模态对话、文件、工具、计费与身份管理的企业 AI 工作区。

[Zodex | AI integrated development environment](https://zodex.dev/#pricing)：基于 Rust 和 Tauri 的 AI 开发工作台，将智能体对话、终端、Git 差异与回滚放在一起，可导入本地 Codex、Claude Code 和 Pi 会话。

[Skillry - Agent Skills with Taste](https://skillry.dev/)：精选智能体技能目录，涵盖网页、幻灯片、图像与视频，并提供示例和安装说明。

[Polars — Pre-release of Polars 2.0](https://pola.rs/posts/announcing-polars-2/)：介绍 Polars 2.0 的首个候选版本，LazyFrame 查询默认采用流式引擎，并收紧类型转换等隐式行为。

[get-bb/bb: The agent IDE that builds itself](https://github.com/get-bb/bb)：可通过桌面端、网页、CLI 与 HTTP API 驱动的智能体 IDE，支持实时跟踪和调整任务。

[xuanji86/ainiee-translate-skill: 独立、Agent 原生的小说翻译系统：工作方式类似 AiNiee 但不依赖其应用运行，由 Claude Code 充当翻译引擎。](https://github.com/xuanji86/ainiee-translate-skill)：以 Claude Code 为翻译引擎的小说翻译技能，不依赖 AiNiee 应用运行。

[mishka-zz/freecad-microwave: FreeCAD workbench for RF and microwave engineering](https://github.com/mishka-zz/freecad-microwave)：面向射频与微波工程的 FreeCAD 工作台，仍处于开发者预览阶段，当前可用的仿真后端是 openEMS。

![e97a246a-ffde-4654-a2c5-b8d055e492de.png](/images/f3c71064e0f0e74d.png)

[Blueprint - AI Hardware Design Tool](https://www.blueprint.io/)：AI 辅助硬件设计工具。

[KiCad - Schematic Capture & PCB Design Software](https://www.kicad.org/)：用于原理图绘制与 PCB 设计的开源软件。

[American-Embedded/kistack: KiStack is a HUMAN WRITTEN bunch of skills for KiCad](https://github.com/American-Embedded/KiStack)：为 KiCad 工作流整理的智能体技能。

[TrenTorch](https://github.com/TrenTorch/TrenTorch)：受 Harvard TinyTorch 启发，通过从头构建机器学习框架来学习 PyTorch 的教学项目。

[Design Engineer Tools](https://designengineer.tools/)：面向设计工程师的工具目录。

[DesEngs: Resources for Design Engineers](https://desengs.com/) · [Minimal Website Design Directory — DesEngs](https://desengs.com/minimum/)：设计工程资源与极简网站参考目录。

[on.design](https://on.design/launch)：面向设计师的资源项目，目前处于候补上线阶段。

[whatships.com — Discover startup launch videos](https://whatships.com/) · [Tools for making launch videos or mockups— whatships.com](https://whatships.com/tools/)：收集创业产品发布视频，并整理视频与样机制作工具。

图标与设计素材书签：

- [Remix Icon - Open source icon library](https://remixicon.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Tabler Icons](https://tabler.io/icons)
- [Blode Icons (GitHub)](https://github.com/mblode/blode-icons) · [Blode Icons](https://blode.co/icons)
- [Iconify](https://iconify.design) · [Iconify icon sets](https://icon-sets.iconify.design)
- [Untitled UI](https://untitledui.com)
- [Heroicons](https://heroicons.com)
- [Keyline Icons](https://keylineicons.com)
- [IconMonstr](https://iconmonstr.com)
- [Bootstrap Icons](https://icons.getbootstrap.com)
- [Reicon](https://reicon.dev)
- [Lucide](https://lucide.dev)
- [Icônes](https://icones.js.org)
- [icons0](https://icons0.dev)
- [Mage Icons](https://mageicons.com)
- [MingCute](https://mingcute.com)
- [Hugeicons](https://hugeicons.com)
- [Gravity UI](https://gravity-ui.com)
- [Central Icons](https://iconists.co/central)
- [Solar Bold Icons](https://svgrepo.com/collection/solar-bold-icons/)
- [SVG Repo CC Attribution](https://svgrepo.com/page/licensing/#CC%20Attribution)
- [Streamline Pixel Icons](https://streamlinehq.com/icons/pixel-icons)
- [toools.design](https://toools.design)
- [Silk icons (Wikimedia)](https://t.co/B2JkDXq32V)
- [@huge_icons](https://x.com/huge_icons)
- [@nucleoicons](https://x.com/nucleoicons)
- [@antfu7](https://x.com/antfu7)

### macOS / 效率 / 其他

[jurplel/InstantSpaceSwitcher: Native space switching on macOS with no animation](https://github.com/jurplel/InstantSpaceSwitcher)：关闭 macOS 原生空间切换动画的工具。

[Omakade | Your games, beautifully together](https://github.com/tsouth89/omakade)：面向 Omarchy 的本地游戏库，汇总 Steam、Lutris、Heroic 等来源的已安装游戏，并交给原平台启动。

[Download Codenotch — Vinz](https://hivinz.com/download/codenotch)：在 Mac 刘海侧边显示 LLM 使用量的小工具。

[thisisgm/flea: A fast, keyboard-first file manager for Omarchy: Quickshell front end, Rust backend.](https://github.com/thisisgm/flea)：面向 Omarchy、键盘优先的文件管理器，采用 Quickshell 前端与 Rust 后端。

[omafiles — the file explorer Omarchy was missing](https://aloisdeniel.github.io/omafiles/)：用 Rust 与 GPUI 实现的 Omarchy 文件管理器，整合搜索、预览与 Git 差异。

[Droppy. Your Mac, just way better.](https://getdroppy.app/#pricing)：把文件暂存、剪贴板、媒体控制与小组件等集成到 Mac 刘海或悬浮灵动岛。

[Tenacity](https://tenacityaudio.org/)：开源多轨音频编辑与录音工具，支持效果插件、脚本与信号分析。

[ChatGPT Training](https://learn.chatgpt.com/training)：OpenAI 的分步练习与工作流程教程，帮助使用 ChatGPT Work 和 Codex 完成实际任务。

[Which AI Made This?](https://www.whichai.dev/)：对比不同模型完成同一 UI 设计任务的作品，并展示启用设计技能前后的差异。

[Shortap — Quick tap gestures for your MacBook](https://shortap.app/#pricing)：通过轻敲 MacBook 机身触发操作的手势工具。

相关开源项目：

- [Tapify](https://github.com/versacecrispies/Tapify)：对标 Knock 的菜单栏应用，支持单敲至三敲及媒体控制、截屏和启动应用
- [Bonk](https://github.com/Alex-duh/Bonk)：GPL，最多四连敲，可绑 Shortcuts / shell，还能按 App 区分
- [nocnoc](https://github.com/shaircast/nocnoc)：有波形和校准向导
- [knocker](https://github.com/Gojaehyeon/knocker)：可区分左、中、右侧轻敲，提供菜单栏界面
- [TapCraft](https://github.com/mohitagw15856/Tapcraft)：Python 实现的机身拍击与触控板分区工具，其中加速度计检测需要 sudo，麦克风检测不需要
