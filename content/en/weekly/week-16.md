+++
title = "Weekly 16"
date = 2026-07-12T17:40:29+08:00
draft = false
math = false
summary = "This issue covers: AI / Models / Multi-Agent Systems; Optimization / Machine Learning / Data; Mathematics / Theory / Open Problems; Programming / Systems / Tools; Philosophy / Publishing / Other."
translationKey = "weekly-16"
+++

### AI / Models / Multi-Agent Systems

[GPT-5.6: Frontier intelligence that scales with your ambition | OpenAI](https://openai.com/index/gpt-5-6/) — OpenAI's announcement of its next generation of frontier models.

[Ethan Knight on X: GPT-5.6 Sol Ultra and the Cycle Double Cover Conjecture](https://x.com/__eknight__/status/2075643450196971805?s=20) — reports that 64 subagents produced a proof of the Cycle Double Cover conjecture in about an hour; [proof](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf) · [prompt](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_prompt.pdf).

A practical workflow for proof search with multiple agents:

1. Define and formalize the problem precisely: input objects, permitted structures, output format, invariants, boundary cases, and acceptance criteria.
2. Specify both success and failure: which results count as correct, and which do not?
3. For an open problem, assume that a complete affirmative proof exists. This can bias the search toward accepting existing material as correct, so pair it with adversarial review.
4. Have agents explore independent directions. Avoid suggesting a preferred approach unless there is a definite reason to trust it.
5. Track each agent's progress separately and standardize the output format.
6. Require verifiable deliverables.
7. Have a lead agent synthesize the results, maintain the overall state, and keep iterating through failed attempts.
8. Restrict searches to foundational material, excluding work directly related to the target problem.

The corresponding principles:

1. **Specification before reasoning**: define the objective, objects, and failure conditions precisely.
2. **Diversity before consensus**: preserve independent approaches before sharing and combining results.
3. **Mechanisms, not narratives**: accept only verifiable lemmas, constructions, equations, and counterexamples.
4. **Optimistic exploration, adversarial verification**: explore boldly and scrutinize the results rigorously.
5. **Manage the search, not just the answers**: record approaches, identify duplication, close dead ends, and allocate computing resources dynamically.

[Prompting | ChatGPT Learn](https://learn.chatgpt.com/docs/prompting) — official ChatGPT documentation on prompting.

[30 papers · The reading list Ilya Sutskever gave John Carmack](https://30papers.com/) — a website collecting the 30 papers Ilya Sutskever recommended to John Carmack.

[AI 2040: Plan A](https://ai-2040.com/) — material outlining a roadmap for AI through 2040.

[[2607.01233] Measuring the Gap Between Human and LLM Research Ideas](https://arxiv.org/abs/2607.01233) — a paper quantifying the gap between research ideas proposed by humans and large language models.

### Optimization / Machine Learning / Data

[[2607.04033] OmniOpt: Taxonomy, Geometry, and Benchmarking of Modern Optimizers](https://arxiv.org/abs/2607.04033) — a taxonomy, geometric perspective, and benchmarking framework for modern optimizers.

[J-lens CKA explorer](https://eliebak.com/viz/jspace-open) — an interactive visualization of centered kernel alignment and representation similarity.

[LAION Dataset Explorer](https://laion.inference.net/embeddings) — a browser for exploring LAION data in embedding space.

[PolymathicAI/the_well](https://github.com/PolymathicAI/the_well/) / [The Well](https://polymathic-ai.org/the_well/) — a collection of physics simulation datasets totaling about 15 TB.

### Mathematics / Theory / Open Problems

[AI Math Open Problems](https://rybindmitry.github.io/problems/index.html) — open problems at the intersection of AI and mathematics, covering matrix integral inequalities, compressed convex functional calculus, lower bounds for tensor methods in monotone variational inequalities, information geometry, graph theory, and other topics.

[Frank Nielsen | Information Geometry, divergences, and diversities](https://franknielsen.github.io/IG/) — a resource map for information geometry, divergences, and diversity measures.

[Algorithms by Jeff Erickson](https://jeffe.cs.illinois.edu/teaching/algorithms/) — Jeff Erickson's algorithms textbook, freely available online.

[thatmagicalcat/txm](https://github.com/thatmagicalcat/txm) — a mathematics rendering engine for the terminal.

### Programming / Systems / Tools

[The CUDA Handbook — Chapters](https://www.cudahandbook.com/book/) — chapters from The CUDA Handbook.

[Cloudflare Drop](https://www.cloudflare.com/drop/) — upload files to Cloudflare without signing in to deploy a temporary website that lasts about an hour.

[Mounting Cloudflare R2 into macOS Finder](https://blog.sh1ma.dev/en/articles/20260710_1_cloudflare_r2_macos_finder/) — practical notes on mounting Cloudflare R2 in macOS Finder.

[Harbofly · understand your storage, recover space safely](https://harbofly.app/en/) — a tool for analyzing disk usage and safely reclaiming storage.

[johnfactotum/foliate](https://github.com/johnfactotum/foliate) — an ebook reader for Linux with a clean interface.

### Philosophy / Publishing / Other

[History of Philosophy - Summarized & Visualized](https://www.denizcemonduygu.com/philo/browse/) — an interactive visualization and summary of the history of philosophy.

[Explore · PubPub](https://www.pubpub.org/explore) — a directory of open publishing projects and knowledge communities.
