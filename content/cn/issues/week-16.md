+++
title = "第16期周刊"
date = 2026-07-12T17:40:29+08:00
draft = false
math = false
summary = "本期周刊收录：AI / 模型 / 多智能体、优化 / 机器学习 / 数据、数学 / 理论 / 开放问题、编程 / 系统 / 工具、哲学 / 出版 / 其他。"
translationKey = "weekly-16"
+++

### AI / 模型 / 多智能体

[GPT-5.6: Frontier intelligence that scales with your ambition | OpenAI](https://openai.com/index/gpt-5-6/)：OpenAI 新一代 frontier 模型发布页。

[Ethan Knight on X：GPT-5.6 Sol Ultra 与 Cycle Double Cover Conjecture](https://x.com/__eknight__/status/2075643450196971805?s=20)：称用 64 个子 agent 在约一小时内给出 CDC 猜想证明；[proof](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf) · [prompt](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_prompt.pdf)。

多 Agent 搜索式证明的可用流程：

1. 定义清楚问题，完全形式化，明确：输入对象、允许的结构、输出形式、不变量、边界情况与验收条件等。
2. 阐明目标，分为正面和反面，什么结果算正确？什么结果不算正确？
3. 对于未解决的问题，Assume a complete affirmative proof exists，但这意味着可能会将已有内容解释为正确，因此需要对抗性审查。
4. 多 Agent 搜索不同方向的思路，除非有确定性把握，否则不要告诉 AI 你的偏好思路。
5. 分别维护进度，规范输出内容格式。
6. 交付内容必须可检验。
7. 主管 Agent 进行汇总，维护全局状态，反复 loop，禁止失败就停止。
8. 禁止搜索直接相关内容，只能搜索基础性内容。

对应原则：

1. **Specification before reasoning**：先精确定义目标、对象和失败条件；
2. **Diversity before consensus**：先保持独立多样，再分享和融合；
3. **Mechanisms, not narratives**：只接受可验证的引理、构造、方程与反例；
4. **Optimistic exploration, adversarial verification**：搜索时大胆，验收时残酷；
5. **Manage the search, not just the answers**：记录路线、识别重复、冻结死路、动态分配算力。

[Prompting | ChatGPT Learn](https://learn.chatgpt.com/docs/prompting)：ChatGPT 官方 prompting 文档。

[30 papers · The reading list Ilya Sutskever gave John Carmack](https://30papers.com/)：Ilya 给 Carmack 的 30 篇论文阅读清单站。

[AI 2040: Plan A](https://ai-2040.com/)：面向 2040 的 AI 路线规划材料。

[[2607.01233] Measuring the Gap Between Human and LLM Research Ideas](https://arxiv.org/abs/2607.01233)：量化人类与 LLM 研究 idea 之间差距的论文。

### 优化 / 机器学习 / 数据

[[2607.04033] OmniOpt: Taxonomy, Geometry, and Benchmarking of Modern Optimizers](https://arxiv.org/abs/2607.04033)：现代优化器的 taxonomy、几何视角与 benchmark 框架。

[J-lens CKA explorer](https://eliebak.com/viz/jspace-open)：CKA / representation similarity 相关可视化探索器。

[LAION Dataset Explorer](https://laion.inference.net/embeddings)：LAION 嵌入空间数据浏览器。

[PolymathicAI/the_well](https://github.com/PolymathicAI/the_well/) / [The Well](https://polymathic-ai.org/the_well/)：约 15TB 物理仿真数据集集合。

### 数学 / 理论 / 开放问题

[AI Math Open Problems](https://rybindmitry.github.io/problems/index.html)：面向 AI / 数学交叉的开放问题列表（矩阵积分不等式、压缩凸泛函、MVI 张量方法下界、信息几何与图论等多类问题）。

[Frank Nielsen | Information Geometry, divergences, and diversities](https://franknielsen.github.io/IG/)：信息几何、散度与多样性的资源地图。

[Algorithms by Jeff Erickson](https://jeffe.cs.illinois.edu/teaching/algorithms/)：Jeff Erickson 算法教材（免费在线）。

[thatmagicalcat/txm](https://github.com/thatmagicalcat/txm)：终端数学渲染引擎。

### 编程 / 系统 / 工具

[The CUDA Handbook — Chapters](https://www.cudahandbook.com/book/)：CUDA 编程手册章节。

[Cloudflare Drop](https://www.cloudflare.com/drop/)：无需登录，直接在 Cloudflare 上传文件部署临时站点，约一小时有效。

[Mounting Cloudflare R2 into macOS Finder](https://blog.sh1ma.dev/en/articles/20260710_1_cloudflare_r2_macos_finder/)：把 Cloudflare R2 挂进 macOS Finder 的实践笔记。

[Harbofly · understand your storage, recover space safely](https://harbofly.app/en/)：磁盘占用分析与安全释放空间工具。

[johnfactotum/foliate](https://github.com/johnfactotum/foliate)：Linux 上风格干净的电子书阅读器。

### 哲学 / 出版 / 其他

[History of Philosophy - Summarized & Visualized](https://www.denizcemonduygu.com/philo/browse/)：哲学史交互可视化与摘要。

[Explore · PubPub](https://www.pubpub.org/explore)：开放出版与知识社区浏览入口。

