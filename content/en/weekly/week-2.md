+++
title = "Weekly 2"
date = 2026-03-08T19:00:00+08:00
draft = false
math = false
summary = "This issue covers: WiFi DensePose → RuView; ACE Music; Obsidian CLI Support; TorchCode; Agent Skill Tool Ecosystem; AI-digest."
translationKey = "weekly-2"
+++
## AI Projects & Models

### WiFi DensePose → RuView
- [GitHub - ruvnet/wifi-densepose](https://github.com/ruvnet/wifi-densepose)

Transforms WiFi signals into real-time human pose estimation, vital signs monitoring, and presence detection — without any camera. By analyzing Channel State Information (CSI) perturbations, combining signal processing and machine learning to reconstruct human poses, breathing rate, and heartbeat.

> 💡 **Observation**: This project suddenly exploded to 15k stars. After reading [an analysis on Juejin](https://juejin.cn/post/7611424094525931561), I realized it was mainly vibe-coded. Now renamed to RuView, with a beautifully crafted README (likely all written by Claude Code). In the AI era, we need to improve our discernment and think more independently.

### ACE Music
- [acemusic.ai](https://acemusic.ai)

StepFun's music generation model.

## Development Tools & Platforms

### Obsidian CLI Support
Note-taking app [Obsidian](https://www.obsidian.md) new version supports CLI, making it more convenient for Agent-based note management. Also supports drag-and-drop image resizing from the bottom-right corner, no longer needing third-party plugins.

### TorchCode
- [GitHub - duoan/TorchCode](https://github.com/duoan/TorchCode)

PyTorch version of LeetCode — practice implementing softmax, attention, GPT-2, etc. from scratch with instant auto-grading. Based on Jupyter, self-hostable or use online.

### Agent Skill Tool Ecosystem

| Tool | Agent Count | Features |
|------|-------------|----------|
| Vercel Skills / add-skill | 20+ | Official ecosystem, most stable |
| empjs/skill (eskill) | 13+ | Unified storage, symlink distribution |
| Skillkit | 32+ | Built-in 15,000+ skills |
| agent-skills-cli | 42+ | Most compatible |
| skill-linker | - | Lightweight CLI with TUI |
| agent-skills-hub | 18+ | Python ecosystem, cross-platform |

**Universal install**: `npx <tool> add <skill-repo> --all --global`

### AI-digest
- [GitHub - jackwener/AI-digest](https://github.com/jackwener/AI-digest)

Automatically summarizes your Agent usage today.

### Readout
- [readout.org](https://www.readout.org/)

Agent development environment dashboard.

## Documentation & Academic Tools

### SJTU TeX
- [GitHub - sjtug/SJTUTeX](https://github.com/sjtug/SJTUTeX)

Shanghai Jiao Tong University's LaTeX template, including dissertation, article, and presentation templates with many clever effects. Useful as reference for LaTeX template creation, or remove SJTU elements to make your own template.

### AI Paper Briefing
- [ai-brief.liziran.com](https://ai-brief.liziran.com/zh/)

Daily curated paper selections with RSS subscription support.

### Somark
- [somark.tech](https://somark.tech/)

Document intelligence engine, another OCR platform like Doc2x and MinerU with good results.

## Creative Tools & Visualization

### Now I Get It!
- [nowigetit.us](https://nowigetit.us/)

### Paper2Galgame
- [paper2gal.top](https://www.paper2gal.top/)

AI paper reader that transforms papers into visual novels.

## Deep Reading & Learning Resources

### Neural Scaling Laws Trilogy
- [Yizhou Liu's Blog](https://liuyz0.github.io/blog/2026/NSLT/)

Trilogy on scaling laws for representations, transformations, and training.

### msgsxj's Blog Archive
- [msgsxj.cn/archives](https://msgsxj.cn/archives/)

Technical blog focusing on machine learning, statistical learning, and optimization algorithms, with 33 technical posts. Several good articles, though hasn't been updated for a few years.

### Matrix Computation Courses
- [Advanced Large-Scale Matrix Computation Tutorial](https://zsc.github.io/large_matrix/)
- [Matrix Computation (ECNU)](https://math.ecnu.edu.cn/~jypan/Teaching/MC/)
