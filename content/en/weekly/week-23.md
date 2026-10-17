+++
title = "Weekly 23"
date = 2026-09-06T02:04:04+08:00
draft = false
math = false
summary = "This week's collection: AI / Models / Agents, Mathematics / Research / Learning, Programming / Systems / AI Tools, and macOS / Productivity / Other."
translationKey = "weekly-23"
+++

### AI / Models / Agents

[Quantization-Aware Healing: a compressed, 4-bit model that outperforms its full-precision original](https://huggingface.co/blog/MultiverseComputingCAI/quantization-aware-healing): Multiverse Computing introduces a 4-bit quantization-aware healing method that outperforms a recovered 60B BF16 checkpoint of the same architecture on seven of its nine reported benchmarks. The additional distillation training was not matched, so the result cannot simply be attributed to quantization itself.

[Introducing the XGBoost Vector-Leaf Model | XGBoost](https://xgboost.ai/2026/08/25/introducing-the-xgboost-vector-leaf-model): An introduction to trees whose leaves output vectors, using shared tree structures for multi-target prediction.

[[2608.27370] Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within \$5090](https://arxiv.org/abs/2608.27370): An exploration of low-cost small language model training on RTX 5090 GPUs. The best model in v2 cost less than \$6,900 to train; the estimate of reaching Qwen2-1.5B performance for about \$4,400 comes from fitting scaling laws.

[Training frontier knowledge work agents: A 397B RL training guide with SkyRL | Mercor Blog](https://www.mercor.com/blog/training-frontier-knowledge-work-agents-a-397b-rl-training-guide-with-skyrl/): Mercor shares engineering experience from training a 397B knowledge work agent with SkyRL.

[chenglou/sotaku, Sotaku v2 solves 99.12% of a 25,000-puzzle Sudoku benchmark with an 800K-parameter looped transformer trained from scratch](https://github.com/chenglou/sotaku): A roughly 800K-parameter looped Transformer trained from scratch to solve Sudoku. The repository reports that Sotaku v2 solves 99.12% of a 25,000-puzzle benchmark using FP32 and 1,024 inference iterations.

[Z1T | Transformer-like models for Z1](https://extropic.ai/writing/z1t/): Sparse Transformer-like models designed for Z1 probabilistic hardware, exploring model and hardware co-design while sharing some training recipes and weights.

[GPT-6 Astra on robot arms | Robocurve](https://openai.robocurve.org/gpt-6-astra/): Experiments with GPT-6 Astra operating robot arms. Watching this makes me a little more inclined to believe LLMs can solve everything, though what a demo can actually do still comes down to the specific task.

[Model guidance | OpenAI API](https://developers.openai.com/api/docs/guides/latest-model) on using Astra.
```md
**Using the model**
- Use the Responses API and set `model: "gpt-6-astra"`
- New capabilities: asynchronous tool calling (set `async: true` on the tool definition), changing instructions mid-turn (WebSocket mid-turn steering), and changing reasoning effort with `configuration_update` in standard single-agent requests (keeping the request-level effort preserves the original prompt prefix)
- `reasoning.effort: "none"` is unsupported; Fast mode is unavailable with EU data residency

**Migration notes**
- If you previously used `none` / `minimal`, try `low` first
- Prefer Responses for tool use; Chat Completions is available, but tool calling requires Responses
- Remove `temperature` / `top_p` / `top_logprobs` (and the corresponding logprobs)
- When migrating from GPT-5.5 or earlier, update caching: `prompt_cache_retention` → `prompt_cache_options.ttl: "30m"`

**Prompt tuning (the most practical part)**
1. **Initiative**: It tends to ask more follow-up questions by default. To have it finish the work autonomously, explicitly say “infer intent, bias toward action, and don't stop at acknowledging capability or delivering partial work.” Produce a reviewable result before asking for approval.
2. **Instruction priority**: It is more sensitive to skills / `AGENTS.md`; state that “user instructions take precedence over skills.” If it gets stuck, have it quote the specific skill rule.
3. **Writing style**: It tends toward lists, tables, and stock phrases by default. If you want prose, specify paragraphs first, fewer nested lists, and no slop (delve, Bottom Line, X not Y, etc.).
4. **Subagents**: It may delegate too little by default; specify when to delegate in parallel for multi-agent work.
5. **Testing**: It tends to overtest code. For small changes, state “don't write tests that mirror the implementation for reversible, low-impact changes.”

What I focus on in practice: make autonomous execution, writing style, parallel delegation, and testing boundaries explicit to reduce unnecessary questions.
```

[eric provencher on X: “Rethinking skills and prompts for GPT-6 Astra” / X](https://x.com/pvncher/status/2095991462416490862): Eric Provencher discusses writing skills and prompts for Astra.

### Mathematics / Research / Learning

[The Math of RL - From Policy Gradients to PPO and GRPO](https://x.com/harshbhatt7585/article/2094021031551766970): An article on the mathematics of reinforcement learning, from policy gradients to PPO and GRPO.

[Introduction to Robotics | IRoM-Lab](https://irom-lab.princeton.edu/intro-to-robotics/): Princeton's introductory robotics course, covering planning, control, state estimation, and robot learning, with drone project assignments.

[[Blog] Estimate Diagonal Hessian](https://hammerhead-piano-5a0.notion.site/Blog-Estimate-Diagonal-Hessian-36014499130180b5b077e6d1511b729e): An article on estimating diagonal Hessian entries.

[Axiom](https://axiommath.ai/): An AI project for mathematical reasoning and formal proofs.

[Announcing FrontierMath Erdős | Epoch AI](https://epoch.ai/latest/announcing-frontiermath-erdos): Epoch AI introduces a mathematics benchmark of 68 open Erdős problems, using Lean to verify proofs or disproofs.

[francesco215.github.io/autoregressive_diffusion/uncertainty.html](https://francesco215.github.io/autoregressive_diffusion/uncertainty.html): Reading on autoregressive diffusion and uncertainty.

[\[2609.02867v2\] Magnetized accretion onto rapidly spinning binary black holes: mini-disk thermodynamics, magnetic transport, and dual jets](https://arxiv.org/abs/2609.02867v2): Numerical simulations of magnetized accretion onto rapidly spinning binary black holes, including mini-disk thermodynamics, magnetic transport, and dual jets.

![85a6d0e125b60f74e46ffbe496f8b22e.png](/images/d8671f44ff42dcd4.png)

[How Our Data Shaped Neural Architecture Discovery, and How Automation Can Reshape the Future | Core Automation](https://www.coreauto.com/blog/how-our-data-shaped-neural-architecture-discovery-and-how-automation-can-reshape-the-future#footnote-writing-style): The article discusses data and the inductive biases of neural network architectures. A randomly initialized, frozen network may still provide useful features, though the linear classifier in the figure was trained.

This makes me wonder: could feature quality across multiple random initializations help screen architectures for a particular type of data in advance? We need to distinguish the quality of the random features themselves from the contribution of subsequent classifier training.

> A neural network architecture with a suitable inductive bias may map inputs into a feature space that a simple classifier can use more easily, even when its main weights are random and frozen. Training can further align this initial structure with a specific task.

![Classifier outputs on random ResNet-18 features](/images/8521e7934a3b508d.png)

*Figure. Output probabilities of a (linear) logistic classifier trained on a 10,240-dimensional NRF(Neural Random Feature) representation, extracted from identical, randomly initialized ResNet-18 architectures.*

Some related papers:

- [[2410.04368] Algorithmic Capabilities of Random Transformers](https://arxiv.org/abs/2410.04368): Freezes the random Transformer body while still optimizing embeddings to activate algorithmic capabilities.
- [[1711.10925] Deep Image Prior](https://arxiv.org/abs/1711.10925): Uses network structure as an image prior without a large training dataset, but still optimizes for an individual image.
- [[1906.04358] Weight Agnostic Neural Networks](https://arxiv.org/abs/1906.04358): Searches for network architectures that perform well across multiple shared weight values.
- [[2206.08464] PRANC: Pseudo RAndom Networks for Compacting deep models](https://arxiv.org/abs/2206.08464): Freezes multiple random basis networks and learns their linear combination coefficients to compress a model.

[Theory of Mind as a Central Skill for Researchers](https://rtmccoy.com/posts/theory_of_mind.html): Treats theory of mind as a meta-skill that spans writing, presenting, reviewing, and collaboration. First consider what the audience knows, cares about, and might misinterpret, then decide how much to explain and in what order.

- When presenting, pair abstract concepts with examples, repeat important points, and avoid large blocks of text. Consider the occasion and the audience.
- When writing a paper, state your points clearly, give figures and tables detailed explanations, make the whole paper easy to browse, and minimize abbreviations. Avoid adding to the reader's memory burden.

[Arena Physica Thesis](https://www.arenaphysica.com/thesis): Electromagnetic engineering faces bottlenecks in solvers, fragmented CAE, EDA, testing, and field data, as well as slow and expensive validation feedback. Arena Physica proposes connecting design, simulation, and testing through agent tools, physics foundation models, and real laboratory data.

[[2608.29530] The Emergent Symbolic Structure of Artificial Neural Networks](https://arxiv.org/abs/2608.29530): Trained neural networks may implicitly contain symbolic structures, suggesting that symbolism and connectionism may not be entirely opposed. Related paper: [[2506.21797] Why Neural Network Can Discover Symbolic Structures with Gradient-based Training: An Algebraic and Geometric Foundation for Neurosymbolic Reasoning](https://arxiv.org/abs/2506.21797)

[Atlas Fields Studio](https://fields-studio.arenaphysica.com/): Arena Physica's interactive electromagnetic field prediction demo lets you modify geometry and observe predicted changes in electric and magnetic fields. It is currently labeled Beta.

[What is a Smith Chart? | Arena Physica](https://www.arenaphysica.com/publications/smith-charts): An introduction to Smith charts in RF engineering.

### Programming / Systems / AI Tools

[Your First GPUI App - Building a Desktop UI in Rust | Mrsheerluck Blog](https://blog.sheerluck.dev/posts/your-first-gpui-app-building-a-desktop-ui-in-rust/): An introductory tutorial on building your first desktop application with Rust and GPUI.

[emilkowalski/skills: Skills for Designers and Engineers.](https://github.com/emilkowalski/skills): Emil Kowalski turns his interface design and animation experience into agent skills covering animation implementation, review, interaction details, and UI prototypes.

[DEEIX-AI/DEEIX-Chat: An enterprise AI workspace for model routing, multimodal chat, files, tools, billing, identity, and operations.](https://github.com/DEEIX-AI/DEEIX-Chat): An enterprise AI workspace integrating model routing, multimodal conversations, files, tools, billing, and identity management.

[Zodex | AI integrated development environment](https://zodex.dev/#pricing): An AI development workspace built with Rust and Tauri that brings agent conversations, terminals, Git diffs, and rollbacks together. It can import local Codex, Claude Code, and Pi sessions.

[Skillry - Agent Skills with Taste](https://skillry.dev/): A curated agent skills catalog covering websites, slides, images, and video, with examples and installation instructions.

[Polars — Pre-release of Polars 2.0](https://pola.rs/posts/announcing-polars-2/): An introduction to the first release candidate of Polars 2.0, which makes the streaming engine the default for LazyFrame queries and tightens implicit behavior such as type coercion.

[get-bb/bb: The agent IDE that builds itself](https://github.com/get-bb/bb): An agent IDE that can be driven through a desktop app, web interface, CLI, or HTTP API, with live task tracking and steering.

[xuanji86/ainiee-translate-skill: An independent, agent-native novel translation system that works similarly to AiNiee without depending on its application, using Claude Code as the translation engine.](https://github.com/xuanji86/ainiee-translate-skill): A novel translation skill powered by Claude Code that runs independently of the AiNiee application.

[mishka-zz/freecad-microwave: FreeCAD workbench for RF and microwave engineering](https://github.com/mishka-zz/freecad-microwave): A FreeCAD workbench for RF and microwave engineering, still in developer preview. Its currently available simulation backend is openEMS.

![e97a246a-ffde-4654-a2c5-b8d055e492de.png](/images/f3c71064e0f0e74d.png)

[Blueprint - AI Hardware Design Tool](https://www.blueprint.io/): An AI-assisted hardware design tool.

[KiCad - Schematic Capture & PCB Design Software](https://www.kicad.org/): Open-source software for schematic capture and PCB design.

[American-Embedded/kistack: KiStack is a HUMAN WRITTEN bunch of skills for KiCad](https://github.com/American-Embedded/KiStack): Agent skills for KiCad workflows.

[TrenTorch](https://github.com/TrenTorch/TrenTorch): An educational project inspired by Harvard TinyTorch that teaches PyTorch by building a machine learning framework from scratch.

[Design Engineer Tools](https://designengineer.tools/): A tool directory for design engineers.

[DesEngs: Resources for Design Engineers](https://desengs.com/) · [Minimal Website Design Directory — DesEngs](https://desengs.com/minimum/): Directories of design engineering resources and minimal website references.

[on.design](https://on.design/launch): A resource project for designers, currently accepting sign-ups ahead of launch.

[whatships.com — Discover startup launch videos](https://whatships.com/) · [Tools for making launch videos or mockups— whatships.com](https://whatships.com/tools/): A collection of startup launch videos and tools for making videos and mockups.

Icon and design resource bookmarks:

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

### macOS / Productivity / Other

[jurplel/InstantSpaceSwitcher: Native space switching on macOS with no animation](https://github.com/jurplel/InstantSpaceSwitcher): A tool for disabling macOS's native Space switching animation.

[Omakade | Your games, beautifully together](https://github.com/tsouth89/omakade): A local game library for Omarchy that brings together installed games from Steam, Lutris, Heroic, and other sources, then hands launching off to their original platforms.

[Download Codenotch — Vinz](https://hivinz.com/download/codenotch): A small tool that displays LLM usage beside your Mac's notch.

[thisisgm/flea: A fast, keyboard-first file manager for Omarchy: Quickshell front end, Rust backend.](https://github.com/thisisgm/flea): A keyboard-first file manager for Omarchy with a Quickshell frontend and Rust backend.

[omafiles — the file explorer Omarchy was missing](https://aloisdeniel.github.io/omafiles/): An Omarchy file manager built with Rust and GPUI, integrating search, previews, and Git diffs.

[Droppy. Your Mac, just way better.](https://getdroppy.app/#pricing): Brings a file shelf, clipboard, media controls, widgets, and more to your Mac's notch or a floating Dynamic Island.

[Tenacity](https://tenacityaudio.org/): An open-source multitrack audio editor and recorder with support for effects plugins, scripting, and signal analysis.

[ChatGPT Training](https://learn.chatgpt.com/training): OpenAI's step-by-step exercises and workflow tutorials for completing practical tasks with ChatGPT Work and Codex.

[Which AI Made This?](https://www.whichai.dev/): Compares different models' responses to the same UI design task and shows the difference made by enabling design skills.

[Shortap — Quick tap gestures for your MacBook](https://shortap.app/#pricing): A gesture tool that triggers actions when you tap your MacBook's chassis.

Related open-source projects:

- [Tapify](https://github.com/versacecrispies/Tapify): A menu bar alternative to Knock, supporting single through triple taps for media controls, screenshots, and launching apps
- [Bonk](https://github.com/Alex-duh/Bonk): GPL-licensed, supports up to four consecutive knocks, can trigger Shortcuts / shell commands, and allows different mappings for each app
- [nocnoc](https://github.com/shaircast/nocnoc): Includes a waveform display and calibration wizard
- [knocker](https://github.com/Gojaehyeon/knocker): Distinguishes left, center, and right taps and provides a menu bar interface
- [TapCraft](https://github.com/mohitagw15856/Tapcraft): A Python tool for chassis taps and trackpad zones; accelerometer detection requires sudo, while microphone detection does not
