# yfff’s weekly

每周收集值得阅读的文章、研究与工具。

- 中文：https://weekly.yfff.me/
- English：https://weekly.yfff.me/en/
- RSS：`/index.xml`、`/en/index.xml`

## 内容与主题

周刊分别放在 `content/cn/weekly/` 和 `content/en/weekly/`，文件名为 `week-N.md`。图片放在 `static/images/`，附件放在 `static/files/`；正文引用站内路径。

`hugo.toml` 管理站点、双语、导航与评论配置。`themes/yinyang-my-fork/` 是与 Blog 共用的 Git 主题子模块，统一维护模板、样式、脚本和界面翻译。

## 构建与预览

需要 Hugo 0.167.0 extended、Node.js 24、just 和 uv。首次检出后初始化主题：

```sh
git submodule update --init --recursive
just build
just dev
```

构建由主题的 `scripts/build.sh` 完成，依次生成 Hugo 网页和 Pagefind 搜索索引。`just dev` 先构建，再在 http://127.0.0.1:1313 预览；可用 `just dev 1314` 指定端口。修改内容后重新构建即可。

构建产物写入 `public/`，不纳入 Git。

## 发布

推送 `main` 后，GitHub Actions 递归检出主题，构建并直接部署到本仓库的 GitHub Pages。域名在仓库 Pages 设置中绑定，Cloudflare DNS 的 `weekly` CNAME 指向 `yalyenea.github.io`。

评论存放于本仓库 Discussions，使用 giscus。主题改动先在主题仓库发布，再更新本站固定的子模块版本。
