---
title: Weekly 29
date: 2026-10-17
draft: false
slug: week-29
math: true
translationKey: weekly-29
obsidianSource: pages/07-Personal/Blog/Weekly/Week-29.md
sourceDigest: 18a42a63b532efaf03de1d14200a98aea4c86a0b0f5faa3cc6a7cf467bd7ad33
summary: Mathematics and AI, frontier models and scientific applications, plus formal
  proofs, development tools, and desktop design resources.
---

### AI / Research / Perspectives

[On mass-produced math](https://www.paradigm3.org/research/mass-math): Reviews the verification status and transparency gaps of OpenAI’s batch of mathematical preprints, and their implications for mathematical research.

[OpenAI Math Dump Hits My Home](https://minorfree.github.io/OpenAIDump/): Hung Le documents his ongoing reading of graph-metric embedding manuscripts, criticizing their compressed exposition while sharing what he is learning from the methods.

[TCS, AI, and the Adults in the Room](https://minorfree.github.io/Clement/): Clément Canonne urges senior theoretical computer scientists to articulate their field’s values and secure funding and stable positions for junior researchers.

[Interview with Michael I. Jordan](https://www.di.ens.fr/~fbach/MJordan_ITW_Liberation_English.html): Michael I. Jordan discusses AI’s social role and the effects of poorly grounded extinction-risk narratives on young people; his accompanying note also cautions against overreading the headline.

[Jelani Nelson on joining Anthropic](https://x.com/minilek/status/2109706940020596840): Jelani Nelson describes how trusted researchers’ views on model capabilities led him to reconsider his expectations and, after learning about several companies, join Anthropic. He also worries that society is unprepared for changes to intellectual work. This is his personal account and assessment.

[Simons mathematics and AI initiative](https://www.simonsfoundation.org/news/simons-foundation-launches-15m-effort-to-help-mathematicians-navigate-ai-era/): The Simons Foundation, Anthropic, and OpenAI commit a combined $15 million in funding and resources to help mathematicians evaluate AI-assisted results, learn tools, and shape shared standards.

[Thinking will become a hobby](https://www.spinellis.gr/blog/20261008/?via=dailydev): Diomidis Spinellis discusses AI’s effects on cognitive work and how people might build meaningful lives beyond work.

[Gowers on AI extinction risk](https://gowers.wordpress.com/2026/10/16/how-worried-should-we-be-about-extinction-risk-from-ai/): Timothy Gowers examines assumptions and uncertainties in arguments about AI extinction risk and explains why mathematicians should study them seriously.

[Neural Networks Are Already Clean](https://already-clean.goodfire.com/): Nick Cammarata proposes a working hypothesis: some apparently messy neurons may reflect limitations in tools, explanations, or training, and network mechanisms may be easier to understand than expected.

[The Beauty of Something Grown](https://www.hyperdimensional.co/p/the-beauty-of-something-grown): Dean W. Ball considers how AI safety and policy debates might change if Goodfire’s interpretability hypothesis proves correct.

[Expectations at the frontier](https://www.anthropic.com/research/expectations-for-the-future): Anthropic combines internal employment observations with a public survey to explore associations between experience with AI and expectations for work and the economy.

![Survey of expectations for AI](/images/19aabc49895032f0d0ee.jpg)

### Models / Agents / Scientific Applications

[Muse Wonder](https://research.meta.ai/blog/muse-wonder): Meta presents capabilities for personal and professional agents, including cross-conversation memory, sustained task execution, and coding.

[Muse Spark Open](https://research.meta.ai/blog/muse-spark-open): Meta releases model weights for multimodal coding and long-horizon tasks, with a local demonstration across two M5 Ultra Mac Studios. The weights use the Muse Model License.

[Span-02](https://www.respan.ai/blog/introducing-span-2): Respan introduces an open-weight model for decision tasks, with time-budgeted reasoning that can stop and return its best answer so far.

[Frontier pre-training at Microsoft AI](https://microsoft.ai/news/frontier-pre-training-at-microsoft-ai/): Details the pre-training of MAI-Base-2, covering scaling science, infrastructure, and data pipelines for its mixture-of-experts model.

[Gemini 4 Argon for Robotics](https://developers.googleblog.com/gemini-4-argon-for-robotics/): Google demonstrates robot control, real-to-simulation reconstruction, video annotation, and iterative improvement.

[Research@ 2026](https://research.google/blog/research-2026-10-ways-were-amplifying-human-ingenuity/): Google rounds up ten research developments spanning geospatial analysis, research assistance, technical-document review, numerical forecasting, and health AI.

[Heaviside and Microsoft Discovery](https://www.arenaphysica.com/articles/heaviside-microsoft-discovery-collaboration): Arena Physica brings its electromagnetic field model to Microsoft Discovery to assist antenna, photonics, and semiconductor design with fast predictions, while retaining traditional solvers for final verification.

[Quantum circuit optimization with Claude](https://www.anthropic.com/research/designing-efficient-quantum-circuits): Anthropic reports optimizing eight quantum circuits with automated evaluation, substantially reducing estimated resource requirements on some tasks.

[Autonomous wet labs](https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/): Google presents research connecting AI agents, lab robots, and experimental feedback through laboratory digital twins, aptamer screening, and protein-binder design.

[Origins of ECDSA curves](https://www.anthropic.com/research/ecdsa-curve-origins): Anthropic reports that Claude reconstructed how several NIST elliptic-curve seeds were generated, providing reproducible code to address questions about their provenance.

[Defenses against distillation attacks](https://www.anthropic.com/research/distillation-defenses): Anthropic outlines defenses against unauthorized model distillation, reporting early reductions of roughly 90–99% in harvested data while noting uncertainty about durability and effects on legitimate requests.

[Small-model self-replication evaluations](https://www.anthropic.com/research/self-replicating-ai): Uses IoT inference experiments and simplified replication evaluations to study the prospects and barriers for small models to replicate autonomously on ordinary connected hardware.

[Scion source control](https://www.anthropic.com/engineering/redesigning-source-control): Anthropic introduces its internal source-control system and explains how AI-generated code changes storage, checkout, and integration needs in a very large monorepo.

[TheoPhysEval](https://arxiv.org/abs/2610.16733): Evaluates autonomous AI agents on 50 verifiable research-level theoretical physics problems.

[Auto Research](https://app.getsupers.com/auto-research): Tracks how community pull requests improve key metrics in OpenAI’s 2026 mathematical preprints.

### Mathematics / Research / Learning

[Lean 4 teacher’s guide for mathematics](https://jaalonso.github.io/calculemus/posts/2026/10/10-lean_4_para_matematicos_guia_docente/): A teacher’s guide that introduces formal proofs to mathematics students without prior programming experience through eight topics.

[Acorn](https://acornprover.org/): A theorem prover for writing and checking formal proofs.

[Prove2Me](https://prove2.me/): A collaborative Lean 4 platform that turns results from papers or textbooks into open proof missions and publishes proved results to Formalpedia.

[RL Handbook](https://rl-handbook.com/): A handbook on reinforcement learning and sequential decision making, covering bandits, Markov decision processes, policy gradients, offline learning, and multi-agent methods.

[Stochastic Superoptimization](https://theory.stanford.edu/~aiken/publications/papers/asplos13.pdf): Formulates loop-free binary superoptimization as stochastic search, using correctness and performance costs to guide STOKE.

[Probability distribution map](https://torwager.github.io/probability_distributions/): An interactive map of common distributions, their properties and uses, and relationships through special cases, limits, and transformations.

![Relationships among probability distributions](/images/617bb5a0c82b8b7992e8.png)

[Deep Learning Alchemy](https://deep-learning-alchemy.github.io/): A Stanford deep learning course centered on experiments, predicting their outcomes, and understanding empirical phenomena in neural networks.

[Principles and Practice of Deep Representation Learning](https://ma-lab-berkeley.github.io/deep-representation-learning-book/zh/): A Chinese textbook on the principles and practice of deep representation learning.

[Why is Fusion Hard?](https://lanyon.ai/research/mhd-instabilities/): Traces the difficulty of fusion through plasma confinement and instabilities, explaining how successive physical obstacles arise.

[Introduction to Cosmology](https://arxiv.org/abs/astro-ph/9312022): Cosmology lecture notes focusing on large-scale structure, cosmic microwave background anisotropy, and inflation.

[Concise Research Roadmap (PDF)](https://i.smitop.com/concise-research-roadmap.pdf): Jared Kaplan’s research roadmap, updated in July 2021, covering general AI assistants, scaling, and interpretability.

[Training performance and activation checkpoint offloading](https://github.com/stas00/ml-engineering/tree/master/training/performance#offloading-the-activation-checkpoints-to-cpu-memory): An ML engineering performance guide, including a section on offloading activation checkpoints to CPU memory to reduce GPU memory use.

[Quant Wiki](https://github.com/LLMQuant/quant-wiki): An open-source project making quantitative finance knowledge accessible in Chinese.

[LLMQuant](https://llmquant.com/): A community focused on AI, large language models, and quantitative finance, with projects including a quant wiki and paper discovery.

### Programming / Agent Tools

[OpenIntelligentUI](https://github.com/CopilotKit/OpenIntelligentUI): An open-source generative UI framework that turns chat responses into explanations, comparisons, and interactive tools.

[OpenUI](https://www.openui.com/): Open-source infrastructure for AI apps and agents to generate interactive interfaces using existing components and design systems.

[REA](https://github.com/morluto/rea): An agent-based reverse-engineering tool for examining app behavior and native binaries.

[open-claude-ui](https://github.com/Caho1/open-claude-ui): A project recreating the Claude desktop interface through reverse engineering.

[Mirror](https://github.com/reflection-oss/mirror): Reflection’s coding agent harness.

[Earshot](https://github.com/Leonxlnx/earshot): An open-source, CPU-only tool for coding agents to analyze, review, and create sound.

[Yomado](https://yomado.app/): A virtual Mac screen that lets visual agents operate desktop apps through screenshots and input.

[Codex++ 2.0.0](https://github.com/b-nnett/codex-plusplus/releases/tag/v2.0.0): The new release of a tweak system for the Codex desktop app.

[Mayoi](https://github.com/sorrycc/Mayoi): A lightweight code editor written in Go with a native GPU-rendered interface.

[ELYTerminal](https://git.zacharyzhang.com/ZacharyZhang-NY/ELYTerminal): A terminal emulator built with GPUI and Ely.

[MathJax Go](https://github.com/d2lang/mathjax-go): A native Go port of the MathJax 3.2.2 TeX-to-SVG pipeline used by D2.

[ManimGX](https://github.com/academa-labs/manimgx): An animation engine for math and 3D videos, with Manim’s Python API and a Rust GPU core.

[Pele](https://pele.run/): A lightweight open-source library that renders Mermaid diagrams as SVG themed with CSS variables.

### Design / Writing / Desktop

[Anatomy](https://skills.wheresryan.sh/anatomy): A Claude Code skill that turns concepts into interactive isometric mechanical illustrations.

[Guizang PPT Skill](https://github.com/op7418/guizang-ppt-skill): An agent skill for generating HTML slide decks, with layout guidance, image prompts, and a presentation runtime.

[awesome-design-md](https://github.com/VoltAgent/awesome-design-md): A collection of DESIGN.md files describing popular brand design systems for coding agents.

[anti-defensive-writing](https://github.com/Kiterlin/anti-defensive-writing): A Codex writing skill for removing defensive phrasing and making prose more direct.

[UX Writing Skill](https://github.com/content-designer/ux-writing-skill): An agent skill for Claude and Codex that applies design system rules to interface copy.

[Longlist](https://longlist.design/): A directory of design studios and independent designers for finding collaborators or employers.

[Build your slide template](https://martinfowler.com/articles/never-send-slides/build-your-slide-template.html): Explains how to build a simple, reusable slide template from a color palette, typography, and blank layouts.

<img src="/images/45ce052e1b6794e585d5.png" alt="Slide template example" width="386" loading="lazy">

[MacSpace](https://github.com/1architect/macspace-releases): Inspects and cleans macOS System Data and Apple Intelligence model files.

[OpenClean](https://github.com/leoAnimesh/OpenClean): A Mac cleaner for removing junk, fully uninstalling apps, and inspecting disk usage.

[Inua](https://inua.lyric.im/): A desktop shell for Hyprland with a bar, launcher, control center, notifications, dock, and settings.

[POND](https://www.butterfly.so/pond): An Arch Linux-based distribution using Niri with a curated desktop and system configuration.

[Craft Launcher](https://github.com/storytold/craft-launcher): A launcher for installing, updating, and opening apps in the Craft App Suite.

[v2mac](https://github.com/LordVersA/v2mac): A native macOS client for Xray-core with proxy subscriptions, latency tests, routing, and menu bar controls.

[UU Remote Linux host](https://github.com/VallierDev/uu-remote-linux): An unofficial Linux host implementation for NetEase UU Remote.

[UU Remote integration guide](https://github.com/netease-uuyc/uuremote-integration-guide): Documents the URL Scheme for device pairing and remote control, with iOS and Android examples and error codes.

[Epic Games Launcher](https://launcher.epicgames.com/): Epic Games’ desktop launcher for accessing and launching games.
