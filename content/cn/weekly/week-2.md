+++
title = "第2期周刊"
date = 2026-03-08T19:00:00+08:00
draft = false
math = false
summary = "本期周刊收录：WiFi DensePose → RuView、ACE Music、Obsidian CLI 支持、TorchCode、Agent Skill 工具生态、AI-digest。"
translationKey = "weekly-2"
+++
## AI 项目与模型

### WiFi DensePose → RuView
- [GitHub - ruvnet/wifi-densepose](https://github.com/ruvnet/wifi-densepose)

将 WiFi 信号转化为实时人体姿态估计、生命体征监测和存在检测——无需任何视频画面。通过分析信道状态信息（CSI）扰动，结合信号处理和机器学习重建人体姿态、呼吸频率和心跳。

> 💡 **观察**：这个项目突然爆火到 15k star，看了[掘金上的分析](https://juejin.cn/post/7611424094525931561)才发现主要是 vibe coding 出来的。现已改名 RuView，README 很精美（估计全用 Claude Code 写的）。AI 时代需要提升分辨能力，多自己思考。

### ACE Music
- [acemusic.ai](https://acemusic.ai)

阶跃星辰的音乐生成模型。

## 开发工具与平台

### Obsidian CLI 支持
笔记软件 [Obsidian](https://www.obsidian.md) 新版本支持 CLI，更方便 Agent 进行笔记管理。同时支持拖拽图片右下角调整大小，不再需要第三方插件。

### TorchCode
- [GitHub - duoan/TorchCode](https://github.com/duoan/TorchCode)

PyTorch 版 LeetCode——练习从零实现 softmax、attention、GPT-2 等，支持即时自动评分。基于 Jupyter，可自托管或在线使用。

### Agent Skill 工具生态

| 工具 | Agent数 | 特点 |
|------|---------|------|
| Vercel Skills / add-skill | 20+ | 官方生态，最稳 |
| empjs/skill (eskill) | 13+ | 统一存储，symlink分发 |
| Skillkit | 32+ | 内置15000+技能 |
| agent-skills-cli | 42+ | 最多兼容 |
| skill-linker | - | 轻量CLI，TUI交互 |
| agent-skills-hub | 18+ | Python生态，跨平台 |

**通用安装**：`npx <工具> add <技能仓库> --all --global`

### AI-digest
- [GitHub - jackwener/AI-digest](https://github.com/jackwener/AI-digest)

自动总结今天使用 Agent 的情况。

### Readout
- [readout.org](https://www.readout.org/)

Agent 开发环境仪表盘。

![Twitter 图片](/images/a19edfc4ebbe591b.jpg)

## 文档与学术工具

### SJTU TeX
- [GitHub - sjtug/SJTUTeX](https://github.com/sjtug/SJTUTeX)

上海交通大学的 LaTeX 模板，包含学位论文、文章和报告模板，有不少不错的特效。可以作为 LaTeX 模板制作参考，或去掉 SJTU 元素变成自己的模板。

### AI 论文简报
- [ai-brief.liziran.com](https://ai-brief.liziran.com/zh/)

每天精选几篇论文，支持 RSS 订阅。

### Somark
- [somark.tech](https://somark.tech/)

文档智能引擎，又一个类似 Doc2x、MinerU 的 OCR 平台，效果不错。

## 创意工具与可视化

### Now I Get It!
- [nowigetit.us](https://nowigetit.us/)

### Paper2Galgame
- [paper2gal.top](https://www.paper2gal.top/)

将论文转化为视觉小说的 AI 论文阅读器。

## 深度阅读与学习资源

### Neural Scaling Laws Trilogy
- [Yizhou Liu 的博客](https://liuyz0.github.io/blog/2026/NSLT/)

关于表示、变换和训练的缩放定律三部曲。

### msgsxj'blog 归档
- [msgsxj.cn/archives](https://msgsxj.cn/archives/)

聚焦机器学习、统计学习与优化算法的技术博客，累计 33 篇技术日志，围绕机器学习、信号处理、统计分析中的核心算法与理论。有几篇不错的文章，不过已几年没更新。

### 矩阵计算课程
- [高级大规模矩阵计算教程](https://zsc.github.io/large_matrix/)
- [矩阵计算 (ECNU)](https://math.ecnu.edu.cn/~jypan/Teaching/MC/)
