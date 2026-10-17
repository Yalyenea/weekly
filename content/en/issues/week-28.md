+++
title = "Weekly 28"
date = 2026-10-10T10:46:06-07:00
draft = false
math = true
summary = "This issue covers AI / Models / Agents, Mathematics / Research / Learning, Programming / Systems / AI Tools, and Design / macOS / Other Finds."
translationKey = "weekly-28"
+++

### AI / Models / Agents

[Diachronic](https://www.diachronic.ai/): Explores human behavior modeling and evaluation with Kairos 1.

[I Quit OpenAI Because Its Culture Is Broken | The Atlantic](https://www.theatlantic.com/technology/2026/10/openai-safety-team-resignation/688881/): David Robinson explains why he left OpenAI, criticizes its safety culture, and argues for learning from other industries that manage serious risks.

[Introducing Beam | Reflection](https://reflection.ai/blog/introducing-beam): Reflection introduces Beam, a 501-billion-parameter mixture-of-experts model for coding, reasoning, and agent tasks, with weights planned for release later this month.

[Rho-1: Collapsing the multimodal stack | Reka](https://reka.ai/labs/research/rho-1-collapsing-the-multimodal-stack): Reka previews Rho-1, which combines text, images, video, and actions in a single model.

[Explainability as a form of system closure](https://jamiesimon.io/blog/explainability-as-system-closure/): Frames explanation as building approximately closed models over variables humans can grasp, using chaotic systems to explore the limits of interpretability.

[Introducing Reason Agent 1.0](https://reasonmachines.com/blog/reason-agent-deepswe) · [Reason Agent](https://reasonmachines.com/): Reason Machines introduces Reason Agent 1.0 for autonomous software engineering.

[Introducing TasteVal | P-Zero Research](https://pzeroresearch.com/work/tasteval/) · [TasteVal: Measuring the Experimental Research Taste of AI Systems Against Human Experts](https://arxiv.org/abs/2610.06824): Evaluates how models design experiments and interpret results on fixed research problems, comparing experimental compute efficiency with human experts.

### Mathematics / Research / Learning

[Practical Parametric Yield | Irrational Analysis](https://irrationalanalysis.substack.com/p/practical-parametric-yield): Explains chip parametric yield through process variation, clock speed, and power, then discusses the tradeoffs facing Cerebras's wafer-scale computing.

[A Riemann Hypothesis Explainer Made with Opus 5.5](https://www.bilibili.com/video/BV11SaB6NELd/): The uploader presents a Riemann hypothesis explainer with video made using Claude Opus 5.5 and narration provided by Gemini.

[Two Room-Temperature Antiferromagnetic Semiconductor Candidates | Vals AI](https://www.vals.ai/blogs/room-temperature-magnetic-semiconductors): Reports two candidate room-temperature antiferromagnetic semiconductors found with Claude agents, sharing calculations and limitations; their properties still need experimental validation.

[Presenting a proof of the Kannan-Lovasz-Simonovits conjecture](https://arxiv.org/abs/2610.05474v1): Bizeul, Klartag, and Lehec present a 32-page manuscript proposing a complete proof of the KLS conjecture, disclosing that ChatGPT supplied most of the proof and mathematical ideas.

[An $O(1)$ Bound for the KLS Constant](https://arxiv.org/abs/2610.01447v2): Song and Zhang propose an $O(1)$ upper bound for the KLS constant in the second version of their preprint, claiming to resolve the full conjecture.

[A Dimension-Free Bound on the Poincaré Constant of Isotropic Log-Concave Measures](https://github.com/kriznakumar/paper/blob/4837c33649ba2271f43c9684e9350ecbdd725f95/KLS.pdf): Balasubramanian and Kasiviswanathan release another 53-page manuscript claiming to prove the KLS conjecture, also disclosing AI involvement.

[Stark units for real quadratic fields and reciprocity laws](https://www.danrad.net/papers/stark-reciprocity.pdf): Proposes reciprocity laws for Stark units in real quadratic fields, claiming to answer this case of Hilbert's twelfth problem and derive Zauner's existence conjecture in every dimension.

[The Squares Project](https://jlevy.github.io/squares/) · [n = 11 Case](https://jlevy.github.io/squares/cases/11.html): Collects constructions, lower bounds, and machine verification records for packing eleven unit squares into a square; the project reports matching bounds, with its review record still pending.

![QQ_1791423496819.png](/images/14769e01143ebfc0.png)

[The Fibonacci Geometry of Eleven Squares (PDF)](https://pingyou.com/papers/eleven-squares.pdf): Describes Trump's eleven-square packing using flat tori and Fibonacci geometry, analyzing the unique minimum within its two-parameter contact family.

![379](/images/c4f88f52c4052c51.jpg)

[Sharing AI progress in mathematics | OpenAI](https://openai.com/index/sharing-ai-progress-in-mathematics/) · [openai/math](https://github.com/openai/math): OpenAI releases manuscripts, proofs, and verification materials from AI-assisted mathematical research, noting that the results still require review by the mathematical community.

[Beyond n log n · Integer multiplication](https://beyond-n-log-n.netlify.app/): Tracks conditional improvements to integer multiplication complexity bounds and related verification materials.

[CrocSwap/integer-mult-bounds](https://github.com/CrocSwap/integer-mult-bounds): Investigates conditional improvements to the exponent saving in OpenAI's integer multiplication result #109.

[The Mathocalypse | Scott Aaronson](https://scottaaronson.blog/?p=10169): Scott Aaronson discusses recent AI mathematics results and their implications for research, verification, and mathematicians.

[What does an improved upper bound on $\omega$ mean | Abbas Mehrabian](https://abbas-mehrabian.medium.com/what-does-an-improved-upper-bound-on-%CF%89-mean-107dee290970): Explains what improving the upper bound on the matrix multiplication exponent $\omega$ means.

[On Matrix Multiplication Algorithms](https://www.youtube.com/live/FDAHDLbT8gs) · [Fast Matrix Multiplication (PDF)](https://theoryofcomputing.org/articles/gs005/gs005.pdf): A lecture and survey on matrix multiplication algorithms, covering fast algorithms and complexity research.

[Erich Friedman](https://erich-friedman.github.io/) · [Erich's Packing Center](https://erich-friedman.github.io/packing/) · [Cubes in Cubes](https://erich-friedman.github.io/packing/cubincub/): Erich Friedman's mathematical puzzles and geometric packing resources, including records for packing cubes into a cube.

[Nopert Polyhedra Explorer](https://drbuild.uk/app/nonrup/index.html#stellated): Interactively explores polyhedra in Rupert's problem through rotation, cutting holes, and passage tests.

[Relativity Park: Walking Speed of Light](https://rivendell.dmitrybrant.com/relativity/): Sets the speed of light to walking speed so visitors can observe relativistic effects in a park scene.

[Soft-to-Rigid Packing](https://yoheinakajima.github.io/soft-to-rigid/): Compares packing searches that gradually harden soft shapes with other methods, sharing experiment logs, code, replays, and their respective strengths and limitations.

[News | Yasuyuki Kawahigashi](https://www.ms.u-tokyo.ac.jp/~yasuyuki/news.htm): Yasuyuki Kawahigashi records operator algebra researchers' reactions to OpenAI manuscripts and progress toward proofs humans can read.

[A Brief Digest of Some New OpenAI Results | Persiflage](https://galoisrepresentations.org/2026/10/08/a-brief-digest-of-some-new-openai-results/): Frank Calegari comments on some newly released OpenAI mathematics results.

[Big O Speedrun](https://bigospeedrun.com/): Tracks complexity bounds for integer multiplication, Fourier transforms, 3SUM, all-pairs shortest paths, and other problems, distinguishing claims from verification status.

[A reaction to the reactions | Balázs Pozsgay](https://x.com/pozsgaybalazs/status/2108819560014938350): Responds to discussions about AI mathematics from a theoretical physicist's perspective and reflects on becoming a student again.

### Programming / Systems / AI Tools

[egoist/godiff](https://github.com/egoist/godiff): A native Git diff viewer for reviewing working trees, commits, and GitHub pull requests.

[sahenjp/rustdsh](https://github.com/sahenjp/rustdsh): A Rust launcher for DeepSeek Harness with configuration migration and local tools.

[How fast is Python 3.15? | Miguel Grinberg](https://blog.miguelgrinberg.com/post/how-fast-is-python-3-15): Compares the Python 3.15 release candidate with older interpreters using recursive and sorting programs, including just-in-time compilation and free-threading modes.

[sshx](https://sshx.io/): Shares terminals live in the browser for collaboration.

[Public testing is beginning | Superlogical](https://www.superlogical.com/updates/public-testing-beginning): Rex begins inviting public testers, initially on macOS, with persistent sessions and remote connections.

[egoist/gorex](https://github.com/egoist/gorex): A Rex terminal clone built with Go and MyGo's native interface.

[ArtCraft Crafting Apps](https://getartcraft.com/apps) · [GitHub](https://github.com/storytold) · [VectorCraft](https://github.com/storytold/vectorcraft) · [WordCraft](https://github.com/storytold/wordcraft) · [DeckCraft](https://github.com/storytold/deckcraft) · [CADCraft](https://github.com/storytold/cadcraft): A collection of open-source creative applications built in Rust for vector graphics, documents, presentations, and computer-aided design.

[palemoky/chinese-poetry-api](https://github.com/palemoky/chinese-poetry-api): A project providing Chinese poetry search and an API service.

[Freaction/Aquilum](https://github.com/Freaction/Aquilum): A local Markdown knowledge base for Windows with live preview, search, a relationship graph, a reader, and Model Context Protocol support.

[solidsf-inc/sfFFT](https://github.com/solidsf-inc/sfFFT): An MIT-licensed fused Tensor Core fast Fourier transform convolution kernel for NVIDIA GB10.

[Ely Office](https://office.elygpui.com/) · [ZacharyZhang-NY/ElyOffice](https://github.com/ZacharyZhang-NY/ElyOffice): The Ely Office website and its Rust / GPUI desktop office suite project link; the repository currently returns 404.

[RelayKit | New API](https://github.com/QuantumNous/new-api/tree/main/relaykit): A Go module that converts requests, responses, and streaming events among four text protocols from OpenAI, Anthropic, and Gemini.

[Tern | Stencil](https://stencil.so/tern): A native Rust terminal and multiplexer compatible with Kitty, offering persistent sessions and cross-device connections; currently in closed testing.

[There are many themes, but this one is yours | Earendil](https://earendil.com/posts/system-theme/): Explains how Pi reads terminal colors to generate its system theme, discussing palettes and interface contrast.

[Rewriting Prime Agent in Rust](https://www.primeintellect.ai/blog/prime-agent-rust): Prime Intellect shares how multiple agents rewrote Prime Agent from TypeScript into Rust and how the team verified the rewrite.

[Tov](https://tov.sh/): An experimental language for coding agents with TypeScript-style syntax, native binary compilation, and structured compiler errors with suggested fixes.

### Design / macOS / Other Finds

[RevPDF](https://revpdf.com/): A PDF tool for offline editing, comparison, and format conversion.

[An Opus 5.5 Video Recreation | R](https://x.com/SpikeRiser/status/2107621593757208916): Shares an Opus 5.5 creation in response to a video recreation challenge.

[Paper Mono](https://paper.design/mono): A free, open-source monospace font with variable weights, coding ligatures, and a glyph showcase.

[celve/uvim](https://github.com/celve/uvim): A menu-bar application that brings Vim's modal editing to macOS text fields.

[AIME](https://aime.zool.app/): An open-source Chinese input method for macOS built on RIME, with dictionary updates, saved phrases, and translation and rewriting of selected text.

[Designeer](https://www.designeer.xyz/): A curated directory of interface design tools, components, and inspiration.

[alejandrobujan/tendedero](https://github.com/alejandrobujan/tendedero): A native macOS app that hangs screenshots on a line along the top of the screen for temporary reference.

[Pulse](https://pulse.egoist.dev/): Displays processes, processor usage, memory, network, energy use, and other system metrics in one native window.

[Nongfsq/ftop](https://github.com/Nongfsq/ftop): A floating system monitor for Apple Silicon Macs showing processor, memory, network, and process information.
