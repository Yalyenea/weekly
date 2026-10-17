+++
title = "第1期周刊"
date = 2026-03-01T19:00:00+08:00
draft = false
math = false
summary = "本期周刊收录：Models & Frameworks、Papers & Research、AI Hardware、AI Agents & Tools、IDEs & Editors、Terminals。"
translationKey = "weekly-1"
+++
第一期周刊，大概两周发布一次，使用 AI 进行了分类，但是不够准确，个人也不想手动整理了。
## AI & Machine Learning
### Models & Frameworks
- xAI 发布了[Grok](https://grok.com/)4.2，四个 Agent 同时工作，具有很强的搜索能力。
- [Gemini 3.1 Pro: Announcing our latest Gemini AI model](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)Gemini 3.1 pro 发布！
![1000](/images/627606cdf9a41518.gif)
- [GitHub - fishaudio/fish-speech: SOTA Open Source TTS](https://github.com/fishaudio/fish-speech)文本转语音和声音克隆。
- [GitHub - stepfun-ai/NextStep-1: \[🚀 ICLR 2026 Oral\] NextStep-1: SOTA Autogressive Image Generation with Continuous Tokens. A research project developed by the StepFun's Multimodal Intelligence team.](https://github.com/stepfun-ai/NextStep-1)阶跃星辰的自回归图像生成模型 NextStep-1。

### Papers & Research
- [GitHub - MaximeVandegar/Papers-in-100-Lines-of-Code: Implementation of papers in 100 lines of code.](https://github.com/MaximeVandegar/Papers-in-100-Lines-of-Code)使用精简的代码来复现 AI 领域经典的 Paper。
- [如何评价anthropic在可解释性方面工作？ - 旷野的回答 - 知乎](https://www.zhihu.com/question/1911022705769152635/answer/2004915744811529185)一文梳理 Anthropic 的可解释性研究，挺有意思的。
- [\[2602.15322\] On Surprising Effectiveness of Masking Updates in Adaptive Optimizers](https://arxiv.org/abs/2602.15322)一个新的优化器Momentum-aligned gradient masking (Magma)
- [GitHub - ResearAI/AutoFigure-Edit](https://github.com/ResearAI/AutoFigure-Edit)AutoFigure: Generating and Refining Publication-Ready Scientific Illustrations, ICLR2026.

### AI Hardware
- [Taalas \| The model is The Computer](https://taalas.com/)又一家 AI 推理芯片公司
	- [The path to ubiquitous AI \| Taalas](https://taalas.com/the-path-to-ubiquitous-ai/)超快的 AI 推理芯片 HC1，在 LLAMA 3.1 8B 上推理速度约为 17k token/s。
		![](/images/44c234ee84c5ab97.png)
	- 对话体验入口：[chat jimmy](https://chatjimmy.ai/)

### AI Agents & Tools
- [LobsterAI - 有道 AI Agent 产品](https://lobsterai.youdao.com/)网易有道出品的开源 AI Agent 客户端，类似于 Cowork、Openclaw等产品
- [GitHub - RightNow-AI/openfang: Open-source Agent Operating System](https://github.com/RightNow-AI/openfang)又一个类似于 OpenClaw 的 Agent 产品。
- [GitHub - 1rgs/nanocode: Minimal Claude Code alternative. Single Python file, zero dependencies, \~250 lines.](https://github.com/1rgs/nanocode)一个 Python文件制作一个最小化的 Code Agent。
- [GitHub - minorcell/memo-code: A lightweight coding agent that runs in your terminal.] 网站：[Memo CLI - AI Coding Agent for Terminal](https://memo.mcell.top)作者在[为什么 Memo Code 先做 CLI：以及终端输入框到底有多难搞 ](https://juejin.cn/post/7605800124883288070)中介绍了终端输入的难点。
- [Happy - Claude Code Mobile Client](https://happy.engineering/)支持在手机上远程操作电脑上的 Claude Code 和 Codex，不过个人感觉不是那么好用。
- [GitHub - qwibitai/nanoclaw: A lightweight alternative to Clawdbot / OpenClaw that runs in containers for security. Connects to WhatsApp, has memory, scheduled jobs, and runs directly on Anthropic's Agents SDK](https://github.com/qwibitai/nanoclaw)
- [GitHub - shareAI-lab/claw0: 0 - 1 learn OpenClaw: sections to build an claw-AI agent from scratch](https://github.com/shareAI-lab/claw0)
- [GitHub - Panniantong/Agent-Reach: Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.](https://github.com/Panniantong/Agent-Reach)让 Agent 访问社交媒体、流媒体等平台。

## Development Tools
### IDEs & Editors
- [GitHub - GCWing/BitFun: BitFun is an Agentic Development Environment (ADE，AI IDE) featuring a cutting-edge Code Agent system with four modes — Agentic, Plan, Debug, and Review. Extensible via MCP, Skills, custom Agents and Rules. Built with Rust + TypeScript for an ultra-lightweight, fluid cross-platform experience.](https://github.com/GCWing/BitFun)
- [Markdown Now — Fast, Lightweight Native macOS Markdown Editor](https://md.nowornever.work/)使用 Rust 和 GPUI 制作的 markdown 编辑器，目前还很简陋。
- [{clarity}](https://www.claritynotes.xyz)一个支持 LaTeX 和 Typst 的在线编辑器。

### Terminals
- 三个支持垂直标签页的终端
	- [ghostree — Worktree-Aware Terminal for Ghostty](https://ghostree.app/)
	- [cmux — The terminal built for multitasking](https://www.cmux.dev/)
	- [Supacode](https://supacode.sh/)

### Utilities
- [GitHub - debugtheworldbot/keyStats: Keyboard & Mouse Stats for macOS/Windows](https://github.com/debugtheworldbot/keyStats)一款记录分析键盘和鼠标使用记录的 app，支持 MacOs 和 Windows。
- [GitHub - caomengxuan666/WinuxCmd: Lightweight, native Windows implementation of Linux commands \| 900KB only \| AI-friendly](https://github.com/caomengxuan666/WinuxCmd)在 Window 终端使用 Linux 命令。
- [GitHub - xxnuo/MTranServer: Offline translation model server with low resource consumption, fast speed, and private deployment capability. 低资源占用速度快可私有部署的离线翻译模型服务器](https://github.com/xxnuo/MTranServer)本地离线翻译，如果在无网或受限环境需要用到翻译，可以试试。
- [GitHub - tonyantony300/alt-sendme: Send files and folders anywhere in the world without storing in cloud - any size, any format, no accounts, no restrictions.](https://github.com/tonyantony300/alt-sendme)多端文件传输工具，不依赖中转。

## Web & Browser
### Web Services
- [Mockdown — ASCII Wireframe Editor](https://www.mockdown.design/)是一款无需注册安装、完全在线运行的免费ASCII线框编辑器，可帮助用户快速绘制低保真UI原型、文本风格示意图，支持导出Markdown格式成果。
- [Scour](https://scour.ing)是一款基于语义匹配的个性化内容聚合器，能从 Hacker News、Reddit、arXiv 及数千个博客中挖掘符合你描述的兴趣（无论多小众）的"隐藏宝石"文章。初步使用下来体验不错，还支持 RSS 订阅。
- [LazySo 懒人去水印](https://clean.lazyso.com/)去除 AI 生成图片的水印，支持 gemini、NotebookLM、豆包、即梦、可灵等
- [markdown.new - Markdown for Agents \| Cloudflare-Powered URL to Markdown](https://markdown.new/)将网页内容转换为 markdown，免费哦，可以集成到自己的网站。
- [Wispbyte - Free 24/7 Hosting](https://wispbyte.com)提供一个免费的 24/7 服务器。
- [Reactive Resume — A free and open-source resume builder](https://rxresu.me/)在线生成简历。
- [Trendshift](https://trendshift.io/)发现受欢迎的开源项目和开发者。
- [Presearch - Private search engine. No Tracking.](https://presearch.com)一个去中心化搜索引擎，有 NSFW 模式。

### Browser Extensions
- [FoxyTab – Get this Extension for 🦊 Firefox (en-US)](https://addons.mozilla.org/en-US/firefox/addon/foxytab/)跟浏览器打开的 Tab 有关的插件，例如批量复制 Tabs 的 URL。

### RSS & News
- [GitHub - WCY-dt/MrRSS: A modern, cross-platform, and free AI RSS reader. 一个现代化、跨平台且免费的 AI RSS 阅读器.](https://github.com/WCY-dt/MrRSS)又一个不错的 RSS 客户端，支持跨平台，目前功能支持不错，有打算放弃使用 NetNewswire 使用 MrRSS 的念头了，感觉 UI 和交互还差了一点意思，不过快捷键比较像 Vim，这一点很舒服。
- [GitHub - IronsideXXVI/Hacker-News: A native macOS client for Hacker News, built with SwiftUI](https://github.com/IronsideXXVI/Hacker-News)Mac 原生 Hacker News 客户端
 ![](/images/d941a907eb0bb8c9.png)

## Research & Learning
### Educational Resources
- [这大概是我读过关于AI大模型最全面、好读又易懂的文章了 - 腾讯技术工程的文章 - 知乎](https://zhuanlan.zhihu.com/p/2000571234996479582)这篇文章以"怕被AI甩在身后"的个人焦虑为切入，用通俗易懂的语言从神经网络基础讲起，系统拆解了大模型的推理、训练、GPU基础设施新要求，以及通过Agent使用大模型的方式，为普通读者绘制了一幅清晰完整的AI大模型全景图。
- [CS146S: The Modern Software Developer - Stanford University](https://themodernsoftware.dev/)斯坦福开设的现代软件开发课程，结合现在的 LLM Coding。
- [Master the Math – Your Friendly Guide to the Rigorous Mathematics of Artificial Intelligence, Machine Learning, and Data Science](https://markelic.de/)

### Research Tools
- [ArxivLens - Discover Breakthrough Research Instantly - Arxivlens](https://arxivlens.com/)支持以下内容：
	- ArXiv: Preprints in physics, mathematics, computer science
	- PubMed: Peer-reviewed biomedical and life science literature
	- BioRxiv: Biology preprints and life sciences research
	- MedRxiv: Medical, clinical, and health sciences preprints
- [GitHub - bienz2/BibChecker: Analyzes IEEE and ACM format bibliographies for correctness. Only to be used as a first pass. Anything that cannot be found automatically should be checked by hand.](https://github.com/bienz2/BibChecker)分析论文引用格式的正确性，不依赖 AI 工具。
- [GitHub - karakeep-app/karakeep: A self-hostable bookmark-everything app (links, notes and images) with AI-based automatic tagging and full text search](https://github.com/karakeep-app/karakeep)自托管的浏览器书签收集整理工具，也支持笔记和图片，如果你也像我一样有囤积癖，收藏了大量书签而不想整理，可以试试。

### Mathematics & Algorithms
- [GitHub - neyof03/linear-algebra-3blue1brown-notes: 📥 Access comprehensive lecture notes for 3Blue1Brown's Essence of Linear Algebra in English and Persian, covering key concepts in a clear format.](https://github.com/neyof03/linear-algebra-3blue1brown-notes)3Blue1Brown 的线性代数笔记。
- [电梯怎么决定先去几楼？——从日常等电梯到磁盘调度算法 - 我没有三颗心脏的博客](https://www.wmyskxz.cn/elevator-scheduling-algorithm/)讲解了几种电梯调度算法，简单易懂，并拓展至磁盘调度等操作系统里的应用。
- [Gaussian Mixture Models](https://en.wikipedia.org/wiki/Mixture_model) 假设数据是由多个高斯分布混合而成，是一种概率模型，我们需要估计每一个数据点属于其中一个高斯分布的概率，模型由三类参数定义：1. 每个高斯分布的占比多少；2. 每个高斯分布的均值；3. 每个高斯分布的协方差矩阵。可以用于聚类、密度估计、异常检测(如果一个数据点属于任意一个高斯分布的概率都很小，则很有可能是噪声点)等应用。

## Design & Media
### Design Tools
- [Framer中文网 2026 \| 免费Framer模板、组件库 \| Framer教程 \| 让设计稿直接发布为网站](https://framer.net.cn/)
- [GitHub - lukilabs/beautiful-mermaid](https://github.com/lukilabs/beautiful-mermaid)将 Mermaid 渲染为 SVG 和 ASCLL 字符画，由 [Craft](https://www.craft.do) 团队打造，他们还做了一个 AI Agent 客户端[Craft Agent](https://agents.craft.do)。
- [GitHub - BIT-DataLab/Edit-Banana: Edit Banana: A framework for converting statistical formats into editable.](https://github.com/BIT-DataLab/Edit-Banana)将 AI 生成的图片转换为可编辑内容，以支持 PPT 和 draw.io，方便快速制作流程图，论文示意图等。
