+++
title = "第8期周刊"
date = 2026-04-18T20:29:39+08:00
draft = false
math = false
summary = "本期周刊收录：AI 资讯、AI Coding / Agent 平台、AI 使用监控、Codex 使用、Agent Skills、研究与论文。"
translationKey = "weekly-8"
+++
### AI 资讯

[The AI Timeline](https://mail.bycloud.ai/)又一个 AI 资讯 newsletter。

### AI Coding / Agent 平台

[GitHub - EKKOLearnAI/hermes-web-ui: Web dashboard for Hermes Agent — multi-platform AI chat, session management, scheduled jobs, usage analytics & channel configuration (Telegram, Discord, Slack, WhatsApp) · GitHub](https://github.com/EKKOLearnAI/hermes-web-ui)Hermes Agent 的 Web 仪表盘，支持多平台 AI chat、会话管理、定时任务和用量分析，已接入 Telegram、Discord、Slack 和 WhatsApp。

[GitHub - CodebuffAI/codebuff: Generate code from the terminal! · GitHub](https://github.com/CodebuffAI/codebuff)一个开源 code agent
免费版本：[Freebuff — the free coding agent](https://freebuff.com/)

https://github.com/zhukunpenglinyutong/desktop-cc-gui Claude Code 的 GUI 客户端，面向开发者的 Vibe Coding 平台。

[GitHub - getpaseo/paseo: Orchestrate coding agents remotely from your phone, desktop and CLI · GitHub](https://github.com/getpaseo/paseo)和之前的 lody.ai 类似。

多 Agent 聚合平台收集，真是仙人之兮列如麻。
[Depo | AI Harness tools](https://www.depo.zip/categories/ai-harness)
[Lex' Notes of Multi-Agent Coding tools](https://wistful-mascara-1ca.notion.site/Lex-Notes-of-Multi-Agent-Coding-tools-34071f05021a80f0afacdc50f938128a#main)
最近这类工具都特别多，我自己也尝试了一些，感觉都很鸡肋，不如直接使用官方 CLI 或者 Codex App，或者试试 Warp。[Warp Terminal](https://warp.dev)也支持垂直标签页了，还支持了通知以及远程控制，不赖。
![821](/images/46ab1925abc2-QQ_1776193735795.png)

### AI 使用监控

监控你的 AI Coding Plan 使用情况，目前我推荐第三个，即 OpenUsage。
![|404](/images/1ba572a2366c-QQ_1776197595556.png)
1. [GitHub - tddworks/ClaudeBar: A macOS menu bar application that monitors AI coding assistant usage quotas. Keep track of your Claude, Codex, Antigravity ,and Gemini usage at a glance. · GitHub](https://github.com/tddworks/ClaudeBar)
2. [GitHub - steipete/CodexBar: Show usage stats for OpenAI Codex and Claude Code, without having to login. · GitHub](https://github.com/steipete/CodexBar)
3. [GitHub - robinebers/openusage: Burning through your subscriptions too fast? Paying for stuff you never use? Stop guessing. OpenUsage is free and open source. · GitHub](https://github.com/robinebers/openusage)
4. [GitHub - Four-JJJJ/AI-Plan-Monitoring: macOS menu bar app to monitor AI plan limits, relay balances, and local Codex accounts · GitHub](https://github.com/Four-JJJJ/AI-Plan-Monitoring)
5. [GitHub - nguyenphutrong/quotio: Stop juggling AI accounts. Quotio is a beautiful native macOS menu bar app that unifies your Claude, Gemini, OpenAI, Qwen, and Antigravity subscriptions – with real-time quota tracking and smart auto-failover for AI coding tools like Claude Code, OpenCode, and Droid. · GitHub](https://github.com/nguyenphutrong/quotio)

### Codex 使用
[GitHub - Dailin521/codex-provider-sync: Synchronize Codex session provider metadata across rollout files and SQLite state. · GitHub](https://github.com/Dailin521/codex-provider-sync)如果你同时使用官方订阅以及第三方 API 的话。那么 Codex 的历史对话可能会不显示，原因就是因为标识符好像不一样。这个工具可以进行统一同步，然后就能完美看到历史对话了。

然后如果你使用官方订阅的话，需要开 tun 模式才不会出现 reconnecting。但是如果你又不想开 tun 模式呢，你可以在 `~/.codex` 目录下新建一个 `.env` 文件，加入以下的代理配置：
```shell
HTTP_PROXY="http://127.0.0.1:your-proxy-port" # clash好像默认 7897 
HTTPS_PROXY="http://127.0.0.1:your-proxy-port"
NO_PROXY="localhost,127.0.0.1"
```

### Agent Skills

[GitHub - labarba/sciwrite: Agent Skill for AI-assisted manuscript writing review, based on Dr. Kristin Sainani's "Writing in the Sciences" methodology. · GitHub](https://github.com/labarba/sciwrite)基于 Kristin Sainani《Writing in the Sciences》方法论的科学写作审阅 Skill。

[GitHub - lewislulu/html-ppt-skill: HTML PPT Studio — AgentSkill with 24 themes, 31 layouts, 20+ animations for building professional HTML presentations · GitHub](https://github.com/lewislulu/html-ppt-skill)HTML PPT Studio Skill，24 主题、31 布局、20+ 动画。

[GitHub - ZreadAI/zread-skill: Zread Skill · GitHub](https://github.com/ZreadAI/zread-skill)Zread 发布了 Skill，可以让 ai 调用本地 zread 生成的仓库 wiki，不过好像也没有太多必要，不过可以解耦，不用让你的 agent 专门去读仓库了。

### 研究与论文

[\[2604.12968\] Evolution of Optimization Methods: Algorithms, Scenarios, and Evaluations](https://arxiv.org/abs/2604.12968)优化方法综述，涵盖算法、场景与评估方法。
[\[2604.01472\] The Newton-Muon Optimizer](https://arxiv.org/abs/2604.01472)Muon 优化器实际上是一种隐式的 Newton 方法。

[GitHub - SensRad/vegvisir: A Combined SLAM and Localization System for both RADAR and LiDAR · GitHub](https://github.com/SensRad/vegvisir)同时支持 RADAR 和 LiDAR 的 SLAM 与定位系统。

### 学术与学习资源

[GitHub - JabRef/jabref: Graphical Java application for managing BibTeX and BibLaTeX (.bib) databases · GitHub](https://github.com/JabRef/jabref)一个开源的文献管理工具，支持 BibTeX 和 BibLaTeX 数据库。

[The world's largest collection of open access research papers](https://core.ac.uk)CORE，全球最大的开放获取论文集合。

[Stanford CS336](https://youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV&si=Wv6OfMweL1yvDHrY)CS336 2026 版本

[Raspberry Pi 树莓派 (官网26年04月更新)](https://pidoc.cn/)

[LibreCommons](https://commons.libretexts.org/)教材资源库，提供免费开放的教材、课程和学习资源，涵盖多个学科领域。

### 终端 & CLI

[GitHub - muxy-app/muxy: A macOS terminal multiplexer built with SwiftUI and libghostty · GitHub](https://github.com/muxy-app/muxy)又一个垂直标签页终端，和之前的 cmux 等类似。

[GitHub - thegdsks/awesome-modern-cli: A curated list of modern alternatives to classic command-line tools. Faster, prettier, smarter replacements for the Unix utilities you use every day. · GitHub](https://github.com/thegdsks/awesome-modern-cli)现代 CLI 工具合集，收录 Unix 经典工具的更快、更美、更智能的替代品。

[Numbat - scientific calculator](https://numbat.dev)一个带单位的计算器。
![Pasted image 20260416163313|860](/images/67b7499e1a5e-Pasted-image-20260416163313.png)

### 开发工具

[GitHub - indragiek/GHFS: Mount GitHub repositories as a virtual read-only macOS filesystem · GitHub](https://github.com/indragiek/GHFS)可以将 GitHub 仓库挂载为 macOS 的虚拟只读文件系统

将 SSH 服务器的文件系统挂载到本地，直接在本地编辑和管理远程服务器上的文件，效率会更高一些。
[GitHub - libfuse/sshfs: A network filesystem client to connect to SSH servers · GitHub](https://github.com/libfuse/sshfs)
https://github.com/winfsp/sshfs-win

[GitHub加速下载代理 - 快速访问 GitHub 文件](https://gh-proxy.com)Github 镜像加速，还提供 Docker 以及 SourceForge 镜像加速，以及还有一个开发者工具箱： https://tool.gh-proxy.com/  或 https://ittool.wort.uk/
![Pasted image 20260414203046|800](/images/64f92e824a87-Pasted-image-20260414203046.png)

[GitHub - lra/mackup: Backup and keep your application settings in sync. · GitHub](https://github.com/lra/mackup)同步与备份应用设置，换机必备。

[chezmoi - chezmoi](https://www.chezmoi.io)跨机器管理 dotfiles 的工具。

[GitHub - floccusaddon/floccus: :cloud: Sync your bookmarks privately across browsers and devices · GitHub](https://github.com/floccusaddon/floccus)浏览器书签同步插件，支持 Firefox和 Chrome，还有手机 app。

[dmcheck - 域名查询](https://dmcheck.app/zh/)

### 笔记 & 博客

[GitHub - Shpigford/clearly: Markdown editor and knowledge base for Mac · GitHub](https://github.com/Shpigford/clearly)MacOS 纯 Swift 编写的 markdown 编辑器。 https://clearly.md/

[Bear Blog](https://bearblog.dev/)极简博客平台，无 JS、无追踪、无广告。

### macOS 工具

[Mac Menubar Apps - Curated list of the best menubar apps for your life](https://macmenubar.app/)

[The Google app for desktop](https://search.google/google-app/desktop/)Google 的 Windows App。

### 设计与主题

[Premium Interactive Web Sections](https://www.motionin.design)高质量交互式网页组件库，适合现代网页设计。

[Something beautiful, Rose Pine theme](https://rosepinetheme.com/) Rose Pine 主题配色，还有很多软件工具等主题的社区适配，非常不错。然后下面这些是类似的其他主题。
- [Dracula Theme for 400+ apps](https://draculatheme.com)
- [Tokyo Night Website](https://wixdaq.github.io/Tokyo-Night-Website)
- [Everforest](https://everforest.vercel.app)
- [Nord](https://www.nordtheme.com)
- [Catppuccin](https://catppuccin.com)

[GitHub - pbakaus/impeccable: The design language that makes your AI harness better at design. · GitHub](https://github.com/pbakaus/impeccable) 一个 AI 设计工具，提供了一套设计语言，可以让你的 AI 工具更擅长设计。作者一看就是懂设计的，网站设计的很优雅： https://impeccable.style/

[GitHub - KurtGokhan/tegaki: Handwriting animation for the web. Supports any font or text. · GitHub](https://github.com/KurtGokhan/tegaki)手写动画库，支持任意字体和文本。

### 字体与排版

[What's Trending in Type · Typewolf](https://www.typewolf.com/)追踪网页字体使用趋势。
[Fonts In Use - Fonts In Use](https://fontsinuse.com/)字体实战案例库。
[Butterick's Practical Typography](https://practicaltypography.com/)Butterick 的实用排版指南。
[Font.icu - 字体预览与下载](https://font.icu/)

### 图片与录屏

[长图拼接工具在线使用_垂直水平无缝拼接_聊天记录截图长图](https://ps.keepmot.com/zh/design/)在线长图拼接工具，支持垂直与水平无缝拼接，适合处理聊天记录截图。

[GitHub - blueberrycongee/CursorLens: Create stunning screen recordings for free. Open-source, no subscriptions, no watermarks, and free for commercial use. An alternative to Screen Studio. · GitHub](https://github.com/blueberrycongee/CursorLens)又一个开源录屏工具，之前分享过一个 Recordly，好像还有个 Open Screen。

### 资源社区

[SeedHub | 影视&动漫分享](https://www.seedhub.cc/)影视与动漫资源分享站。

[Depo | A curated collection of resources](https://www.depo.zip/)一个偏向开发的资源收集网站。

[Cuflow – AI-Powered Study & Productivity Tool](https://cuflow.ai)AI 驱动的学习与效率工具。

