+++
title = "Weekly 3"
date = 2026-03-15T16:47:04+08:00
draft = false
math = false
summary = "This issue covers: AI Models & Inference; Academic & Research Tools; Claude Code Skills & Tools; Code Repository Intelligent Analysis; Development Tools; Web Content Extraction."
translationKey = "weekly-3"
+++
### AI Models & Inference

* [arxiv-daily-researcher](https://github.com/yzr278892/arxiv-daily-researcher) — Daily ArXiv paper digest推送, supporting multiple journals.
* [aha](https://github.com/jhqxxx/aha) — High-performance AI model inference library in Rust, supporting mainstream vision and language models.
* [llm-from-scratch](https://github.com/Siyuan-Harry/llm-from-scratch) — CS336 course assignment implementation to understand LLM training principles.
* [AutoClaw](https://autoglm.zhipuai.cn/autoclaw/) — Zhipu's OpenClaw wrapper application, integrated into IM for AI workspace.

### Academic & Research Tools

* [alphaxiv-paper-lookup](https://www.alphaxiv.org/skills/alphaxive-paper-lookup/SKILL.md) — Official alphaxiv Skill for快速获取 structured paper data.
* [aminer-open-skill](https://github.com/CanXiangCC/aminer-open-skill) — Zhipu Aminer's official Skill for paper and scholar lookup (includes 38.8 free credits).
* [BERTopic](https://maartengr.github.io/BERTopic/index.html) — Transformer-based topic modeling tool with semantic understanding and automatic topic discovery.
* [markdown-tex](https://github.com/JaredYe04/markdown-tex) — Bidirectional Markdown ↔ LaTeX conversion library using AST as intermediate.

### Claude Code Skills & Tools

* [skills.sh](https://www.skills.sh) — Vercel's official Skill directory, supports `npx skills add` one-click install, recommended as first choice.
* [Find awesome Agent Skills](https://agent-skills.md/) — Curated Agent Skills discovery platform.
* [awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) — Community-curated Claude Skills list.
* [SkillHub](https://www.skillhub.club/) — Claude Skills marketplace.
* [Tencent SkillHub](https://skillhub.tencent.com/) — Tencent's Skills community, optimized for Chinese users.
* [claude-health](https://github.com/tw92/claude-health) — Claude Code project health check Skill by Tw92.
* [CCometixLine](https://github.com/Haleclipse/CCometixLine) — Rust-based Claude Code status bar tool.
* [MATLAB Skills](https://github.com/matlab/skills) / [MATLAB MCP](https://github.com/matlab/matlab-mcp-core-server) — MATLAB's official MCP Server and Skills collection.
* [Learn Claude Code](https://learn-claude-agents.vercel.app/zh/) — Tutorial on building a Claude Code-like Agent from scratch, adding one mechanism at a time.
* [PaddleOCR Skills](https://github.com/PaddlePaddle/PaddleOCR/tree/main/skills) — Official PaddleOCR Skill for OCR text recognition (10k pages/day quota).

### Code Repository Intelligent Analysis

* [Code Wiki](https://codewiki.google/) — AI-driven code repository Wiki generator.
* [DeepWiki](https://deepwiki.com/) — Conversational AI documentation for any code repository.
* [Zread](https://zread.ai/) — AI code reading assistant that generates repository knowledge graphs.
* [GitNexus](https://github.com/abhigyanpatwari/GitNexus) — Browser-based code knowledge graph generator with Graph RAG exploration.
* Alibaba's Qoder also has repository Wiki features.

### Development Tools

* [Bruno](https://github.com/usebruno/bruno) — Open-source API testing IDE, lightweight alternative to Postman/Insomnia.
* [Yaak](https://github.com/mountain-loop/yaak) — Intuitive desktop API client supporting REST/GraphQL/WebSocket/gRPC.
* [BrowserOS](https://github.com/browseros-ai/BrowserOS) — Open-source Agentic browser, alternative to ChatGPT Atlas/Perplexity Comet.
* [Hello Claw](https://datawhalechina.github.io/hello-claw/cn/build/) — Datawhale's OpenClaw guide covering principles and implementation.

### Web Content Extraction

* [defuddle](https://github.com/kepano/defuddle) / [Online version](https://defuddle.md/) — Obsidian CEO's web-to-Markdown tool, already built into official web clipper plugin. Drag to bookmark bar for quick抓取 and copy.
* [markdown.new](https://markdown.new/) — Cloudflare-powered URL to Markdown service.
* [pure.md](https://pure.md) — Global cache service between LLMs and web pages (paid).
* [Jina Reader](https://jina.ai/reader) — Add `r.jina.ai/` before URL to extract content.
* [create360.ai](https://create360.ai/) — Similar to Jina Reader for web content extraction.
* [agent-fetch](https://github.com/teng-lin/agent-fetch) — Web scraping tool optimized for Agents.

### Utilities

* [Container Image Monitoring](https://status.1panel.top/) — Docker image accelerator node status monitoring.
* [轩辕镜像](https://xuanyuan.cloud/) — Efficient and stable Docker image pulling service.
* [Thaw](https://github.com/stonerl/Thaw) — macOS menu bar management tool, successor to Ice.
* [delphitools](https://tools.rmv.fyi/) — Collection of实用小 tools: unit conversion, symbolic computation, PDF/text processing, etc.
* [terraink](https://github.com/yousifamanuel/terraink) — Map poster generator for creating unique customizable cartographic posters.
* [Slidev](https://sli.dev/guide/work-with-ai) — Web-based developer presentation tool with CLI and AI Skill support.
* [snowshot](https://snowshot.top/) / [better-shot](https://github.com/KartikLabhshetwar/better-shot) — Screenshot beautification tools.
* [ekphos](https://github.com/hanebox/ekphos) — Terminal-based Markdown research tool, inspired by Obsidian.

### Learning Resources & Visualization

* [Sorting algorithms](https://tools.simonwillison.net/sort-algorithms) — Simon Willison's interactive sorting algorithm visualization.
* [Principles of Sensing for Autonomy](https://ee259.stanford.edu/) — Stanford course on autonomy system sensing principles.

### Fun Projects

* [WorldEnd.ai](https://worldend.ai/zh-CN) — AI-generated end-of-the-world scenarios.

### macOS Tip: Skim Highlight Shortcut

Add instant highlight functionality to Skim PDF reader, simulating Sumatra PDF's `a` key experience:

```AppleScript
tell application "Skim"
    activate
    tell document 1
        set theSel to (get selection)
        set theNote to make note with data theSel with properties {type:highlight note, color:deep pink}
    end tell
end tell
```

Save to `/Users/username/Library/Application Support/Skim/Scripts/highlight.scpt`, then in **System Settings > Keyboard > Keyboard Shortcuts > App Shortcuts**, add `Ctrl+A` shortcut for Skim.

> Note: When using OrbStack instead of Docker Desktop on Mac, it's recommended to add image accelerator configuration directly in OrbStack settings rather than `~/.docker/daemon.json`. Can also be configured in `~/.orbstack/config/docker.json`.
