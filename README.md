# yfff’s weekly

每周收集值得阅读的文章、研究与工具。

- 中文：https://weekly.yfff.me/
- English：https://weekly.yfff.me/en/
- RSS：`/index.xml`、`/en/index.xml`

## 内容与资源

周刊分别放在 `content/cn/issues/` 和 `content/en/issues/`，文件名为 `week-N.md`。图片放在 `static/images/`，附件放在 `static/files/`；正文引用站内路径。

`hugo.toml` 管理站点、双语与评论配置，`layouts/` 和 `assets/` 包含本站模板与样式。

## 本地预览

需要 Hugo 0.167.0 extended、Node.js 24、just 和 uv。

```sh
just dev
```

构建站点及 Pagefind 搜索索引后，在 http://127.0.0.1:1313 预览。修改内容后重新运行即可。

```sh
just build
```

构建产物写入 `public/`。

## 发布

推送 `main` 后，GitHub Actions 构建并直接部署到本仓库的 GitHub Pages。域名在仓库 Pages 设置中绑定，Cloudflare DNS 的 `weekly` CNAME 指向 `yalyenea.github.io`。

评论存放于本仓库 Discussions，使用 giscus。
