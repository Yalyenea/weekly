---
title: 第32期周刊
date: '2026-11-07'
draft: false
slug: week-32
math: false
translationKey: weekly-32
obsidianSource: pages/07-Personal/Blog/Weekly/Week-32.md
sourceDigest: 855c34bf43d1b6b7f98f2ba72c79a6fa75777aed6c94e626f6a163c26f160615
summary: AI 研究与智能体工具、数学与形式化新结果、原生 UI 项目，以及大量交互设计与桌面应用。
---

### AI / 研究 / 观点

[Some Memories of Early Anthropic](https://nothinghuman.substack.com/p/some-memories-of-early-anthropic)：早期成员 Ivan Vendrov 的 Anthropic 回忆。

[Scaling Git at OpenAI](https://openai.com/index/scaling-git-at-openai/)：OpenAI 介绍为支撑内部代码规模对 Git 与周边工具链做的扩展。

[Accelerating engineering for the physical world](https://openai.com/index/accelerating-engineering-for-the-physical-world/)：OpenAI 谈用模型加速机械、电气与端到端系统设计：内部团队用 Codex/ChatGPT 改 CAD、出生产图纸、搭仿真，还用 GPT-6 Astra 在无人为编辑下设计出一台能和 Codex 对话的设备。

[Investigating vault particles with Claude](https://www.anthropic.com/research/investigating-vault-particles-with-claude)：Anthropic 生物实验室的新结果：原核细胞中首个 vault particle 的三维结构。

[The components of agent memory](https://www.anthropic.com/research/components-of-agent-memory)：Anthropic 谈 agent 记忆的构成：模型需要在知道后续之前决定什么值得记住，「dreaming」机制帮助它整理记忆、纠正错误。

[How to Train a Swarm](https://www.gr.inc/blog/how-to-train-a-swarm)：General Reasoning 讨论如何用 RL 训练 agent swarm：此前 OpenAI 用 swarm 88 小时给出 Navier–Stokes 千禧问题的解，也出现过 agent 在留言板上协调网络攻击的事故，公开的训练方法仍很少。

[OpenRUA](https://openrua.ai/uni-robot-agent)：用开放模型做 robot-use agent 的统一 harness：跨环境与机器人共享工具和执行协议，Qwen 在 RoboDojo 上超过已发表的 Astra–RoboProbe 基线（31.39 vs 28.97）。

[Introducing Inkling 2 Small](https://thinkingmachines.ai/news/inkling-2-small/)：Thinking Machines Lab 发布第二代 Inkling 模型。

[Beam Model Technical Report](https://reflection.ai/documents/beam-model-tech-report)：Reflection AI 的 Beam 模型技术报告。

[I Tried Every LLM Architecture Change since 2020](https://x.com/nv_pavlichenko/status/2116154049217089946)：Nikita Pavlichenko 逐一实测 2020 年以来的各项 LLM 架构改动。

[Qwen, Minus the E](https://kevin-wu.ca/blog/qwn/)：Kevin Wu 在 16 GB GPU 上用 SFT + RL 微调 Qwen3-1.7B，让它全程不用字母 e 作答——难点在于模型读的是 token，看不见字符。

[Lean Verified Tokenizers](https://srush.github.io/verified-tokenizer/)：Sasha Rush 在 Lean 中形式化验证的 tokenizer。

[The Jacobian Lens, Explained](https://butanium.github.io/blog/jacobian-lens-explainer/) · [Sida Liu 的讲解](https://liusida.com/research-notes/single-jacobian-lens/)：两篇互为补充的 Jacobian Lens 讲解——用单个 Jacobian 就能做的可解释性方法。

[Learning in a world of notes](https://engram.com/blog/learning-in-a-world-of-notes)：Engram 的实验：用 RL 让 agent 更准确、更便宜地使用 notes，且笔记更新后收益仍在。

[HackerTube](https://karpathy.bearblog.dev/hacker-tube/) · [hackertube.org](https://hackertube.org/)：Karpathy 让 Opus 5.5 从 HN 评论里筛出 2007–2026 年间被推荐的 6454 个 YouTube 视频，套上干净的 YouTube 界面，两小时做出的看视频站。

[Delphi.science](https://www.delphi.science/)：给人和 AI agent 共用的研究社区：贴论文、代码与数据，在论坛里与研究者及其 agent 讨论、找合作者。

[Deimos](https://deimos.evilrabbit.com/)：一部由多模型「审议团」写成的百科全书实验：盲记 ledger、交叉质询、抽签陪审团，另附 bias 报告。
![image.png](/images/37aa677f53825fc1957e.png)

### 数学 / 科研 / 学习

[Linear Model and Extensions](https://arxiv.org/abs/2401.00649)：UC Berkeley 线性模型课程讲义成书：中级程度，严格证明与直觉并重，附复现全部模拟与案例的 R 代码。

[Refinement Types: A Tutorial](https://arxiv.org/abs/2010.07763)：refinement types 的教程论文。

[Generative Models: Foundations and Frontiers](https://divelab.github.io/GMFF/)：DIVE Lab 的生成模型讲义，从基础到前沿。

[3SUM and APSP and ETH, Oh My!](https://blog.computationalcomplexity.org/2026/11/3sum-and-apsp-and-eth-oh-my.html)：Computational Complexity 博客谈 3SUM、APSP 与 ETH 的新进展。

[A proof of the Aaronson–Ambainis conjecture](https://psi.inc/research/aaronson-ambainis/)：PSI 证明了关于随机输入上量子加速的 Aaronson–Ambainis 猜想，附完整 Lean 形式化。

[Stacks Project in Lean](https://stacks.axiommath.ai/)：把 Stacks Project 形式化进 Lean 的项目站点。

[How I write papers](https://thoughtforms.life/how-i-write-papers/) · [slides](https://thoughtforms.life/wp-content/uploads/2026/10/add-to-Substack-post.pdf)：Michael Levin 的写作方法：先确定结构，最后再写句子，自顶向下。

[Before GPU Engineering](https://before-gpu-engineering.github.io/BEFORE-GPU-ENGINEERING/toc.html) · [GitHub](https://github.com/BEFORE-GPU-ENGINEERING/BEFORE-GPU-ENGINEERING)：做 GPU 工程之前要补的基础教程。

[TrenTorch](https://trentorch.com/)：免费的 ML 练习站：从零搭 PyTorch。

[Embedded Systems - Shape The World](https://users.ece.utexas.edu/~valvano/Volume1/E-Book/)：UT Austin Valvano 的嵌入式系统开放教材。

[hft.md](https://hft.md/)：用 3D 动效学量化金融。

[HW-Bench](https://www.hw-bench.com/)：自称首个由头部硬件公司共建的硬件工程基准。

[scholarly-paper-revision](https://drive.google.com/drive/folders/19lfb0LfbD8ASkcPtbXk2vTXHVJkLUtDj)：Google Drive 上的学术论文修改资料合集。

### 编程 / 智能体工具

[Aether](https://www.runaether.dev/)：可围观的云端 devbox：跑 Claude Code、Codex、OpenCode，可看、可接管、可 SSH；模型用你自己的订阅，只收机器费。

[ego(lite)](https://lite.ego.app/)：面向 AI agent 的浏览器：Claude Code 或 Codex 可同时跑上百个网页自动化任务，自称开放的 Real-World Bench 中最快，免费零配置。

[tastecode](https://github.com/Leonxlnx/tastecode)：Windows 优先的 AI coding agent 控制面板，design-agent 驱动。

[wu](https://github.com/dstrml/wu)：快速的原生代码编辑器与 agent 工作区。

[kubai-icons](https://github.com/kubai087/kubai-icons)：Claude skill：按统一风格绘制动态图标，支持悬停动效或静态 SVG。

[Hacker Papers](https://academy.dair.ai/papers/collections/hacker-papers?field=other) · [HackerPapers](https://hackerpapers.qiaomu.ai/) · [黑客书架](https://hackerbooks.qiaomu.ai/)：三个黑客向读物聚合：DAIR.AI 的论文合集、HN 二十年最值得读的论文、HN 评论中被提及最多的书。

[Lattice](https://leo1oel.github.io/lattice/)：local-first 的 macOS LaTeX 工作区：论文、合作者与 AI agent 在同一窗口。

[Pond](https://pond.raphaelsalaja.com/) · [repo](https://github.com/raphaelsalaja/pond)：个人网页存档器。

[jotter](https://terminaltrove.com/jotter/)：Jupyter 风格的 TUI 笔记本，支持内嵌图与渲染后的 LaTeX。

[cargo](https://huacnlee.github.io/cargo/)：huacnlee 的 cargo 替代品：自动把 target 目录保持在小体积。

[omnidiff](https://github.com/ivankovic/omnidiff)：快速、稳健、准确的 diff 库。

[Untie](https://untie.iki.moe/) · [repo](https://github.com/caelyreth/untie)：纯 Go 的 TeX/Typst 数学渲染器，面向原生 UI 与 MyGo。

### 开发 / 原生界面

[hex](https://github.com/anomalyco/hex)：local-first 的 macOS 语音输入：按住快捷键说话，文字粘贴进任意应用；Rust 原生、端上识别，Linux beta 已出。

[rune](https://github.com/anomalyco/rune)：anomalyco 的原生 UI 框架。

[nanoui](https://github.com/justrach/nanoui)：用 Zig 写桌面应用：GPU 原生自绘 UI，或输出 Web 前端。

[nanolight](https://github.com/justrach/nanolight/)：nanoui 绘制的 ⌘Space 启动器：应用、计算、Google 建议的结果直接显示在面板里，还接了 Grok 和 X。

[Defi](https://github.com/qeude/Defi)：macOS 原生 scrollable-tiling 窗口管理器，灵感来自 Niri。

[LordOS](https://github.com/lordbasex/LordOS)：基于 Debian 的 GNU/Linux 发行版，自带整套桌面：C 写的显示服务器与 Wayland 合成器，QuickJS 上跑 React UI 引擎，配私有原生应用。

[larperCord](https://rshacudevidro.github.io/larperCord/#download)：原生 Discord 客户端，整个 UI 只有一个文件。

[godraw](https://github.com/egoist/godraw)：用 MyGo 写的无限画布。

[glimm](https://glimm.dev/)：shader 驱动的页面过渡。

[Interaction Lab](https://aiforui.dev/lab)：一组可直接上手玩的交互原型：引力吸积、反应扩散、汞滴、路径……每个都标出背后的方程。

[userinterface.wiki](https://www.userinterface.wiki/)：界面设计参考 wiki。

[reactdrops](http://reactdrops.dev) · [bencho](http://bencho.dev) · [transitions](http://transitions.dev) · [kinetics](http://kinetics.colorion.co) · [21st.dev](http://21st.dev) · [evilcharts](http://evilcharts.com) · [8bitcn](http://8bitcn.com) · [astryx](http://astryx.atmeta.com) · [Aceternity](http://ui.aceternity.com)：一批 UI 组件与动效资源站：React 组件、微交互、现成过渡、仪表盘图表、8-bit 复古组件等。

### 设计 / 创作 / 效率

[Paaages](https://paaages.com/)：按页面整理的设计灵感站。

[stillwet](https://stillwet.art/)：AI 模型用代码作画——模拟油画与水彩，不用图像生成模型，还能看着画被画出来。

[Playground](https://www.mariavasilyeva.com/work/playground)：视觉与交互设计师 Maria Vasilyeva 的实验场。

[Bruno Simon](https://bruno-simon.com/)：创意开发者 Bruno Simon 的个人站。

[Gionatan Nese](https://www.gionatannese.com/)：跨领域设计师的作品集。

[Spectral Field](https://www.robfwa.com/)：Rob 的交互作品。

[0010](https://0010.art/#home)：艺术家 0010 的作品站（2020 至今）。

[Overworld Audio](https://overworldaudio.com/)：为游戏与交互体验做音频协同开发的工作室，从原型做到终混。

[WebGL Xylophone](https://tympanus.net/Tutorials/Xylophone/)：Codrops 教程：做一个 WebGL 木琴。

[EDOLUS](https://edolus.com/)：PlayCanvas 搭建的 3D 交互站点。

[Volatile Nexus](https://dasprinzip.com/tinker/day42/)：dasprinzip 的 Tinker Day 42：three.js WebGPU 场景——鼠标让玻璃环晃动、拨开方块，首次交互时响起声音。

[AstroDither](https://astrodither.robertborghesi.is/)：Robert Borghesi 的 WebGPU + TSL 实验：音频响应的 dithering 加流体模拟。

[Inspora](https://www.inspora.design/)：设计、网站与 logo 灵感。

[DesignTrash](https://designtrash.com/)：值得留下的设计工具合集。

[Curated Supply](https://www.curated.supply/)：设计导向产品的周刊 newsletter。

[Glisp Canvas](https://glisp.app/canvas/)：「绘画即程序」的矢量绘图应用。

[DotForge](https://dotforge.vercel.app/)：实时 dither 动画构建器。

[player](https://github.com/livliv-dev/player)：网页端轻量 2.5D 角色播放器，带口型同步与摄像头面部追踪。

[Samuel](https://samuel.vvolhejn.com/)：一个学着驱动 Pink Trombone 声道模型模仿说话的模型——对它说句话，它会鹦鹉学舌。

[大肥鱼](https://kiriyuki.com/showcase?p=%E5%A4%A7%E8%82%A5%E9%B1%BC)：雾雪的表情包工坊 showcase。

[逃离大厂的困境、重新回归的本我，重新选择的行业](https://blog.polebug.com/2026/10/28/plog_202607-202610/)：Polebug 的十月记录。

### 桌面 / macOS / 其他

[Kaze](https://kaze.build/)：macOS/Windows 浏览器，内置 agent 在自己的标签页里干活、每步可见，付款、发送、删除前会先问你；免费。

[RedPot](https://redpot.top/?share=og2)：让 Android 住进你的 Mac。

[Kanso](https://kanso.botiverse.build/zh-hans/)：Mac 磁盘用量分析与清理工具。

[Dimble](https://dimble.fif7y.com/)：在 macOS 27 上隐藏与整理菜单栏图标。

[WallpaperMachine](https://github.com/MMFoundation/WallpaperMachine)：Mac 上的 Wallpaper Engine：免费开源，播放 Steam Workshop 的场景、视频与网页壁纸，Apple silicon、macOS 15+。

[Arion](https://arion.astrafoundry.si/zh/)：不离开你电脑的语音输入。

[quiet-md](https://github.com/s1dashu/quiet-md)：Rust + GPUI 的高性能本地笔记（macOS/Windows），兼容飞书 DocxXML。

[nuza](https://www.nuza.org/)：写给作者的 Cursor、轻量 Obsidian 替代：开源 markdown 编辑器，可选接你已有的 AI agent。

[proxy-bridge](https://github.com/Binaryify/proxy-bridge)：macOS 菜单栏工具：用 TUN 把全部或选中应用的流量送进 HTTP/HTTPS/SOCKS5 代理。

[TailSplit](https://tailsplit.idy.dev/)：你的设备，你的路由规则。

[aerial-tv](https://github.com/pengchujin/aerial-tv)：给国产电视的一块干净桌面：参照 tvOS 的开源 Android TV 桌面，无广告，开机自动接管。

[opendisplay](https://github.com/peetzweg/opendisplay)：把 iPhone、iPad 或闲置 Mac 变成 Mac 真正的第二块屏。

[NX2Apple](https://github.com/LNPANDY/NX2Apple)：把自己的 Switch 游戏装进 iPhone/iPad 的一键构建 macOS 应用。

[Scene](https://github.com/InsaneArts/Scene)：macOS 应用：一步给桌面、终端与编辑器统一主题，灵感来自 Omarchy。

[spotseek](https://github.com/lopezlav/spotseek)：桌面应用加本地服务：Spotify 元数据、Soulseek 下载与 Mixxx 渐进播放。

[Irori](https://irori.app/)：跨平台原生游戏启动器（Linux/macOS/Windows）。

[MyGo Music 插件](https://music.egoist.dev/zh/plugins)：MyGo Music 的插件页。
