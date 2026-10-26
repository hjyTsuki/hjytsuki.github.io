# 黄金阳 · Jinyang Huang

个人学术主页：<https://hjytsuki.github.io/>。

主页根据 `resume-zh.pdf` 整理，包含研究方向、9 项论文、实习经历、教育经历、个人链接与中文简历下载。论文标题、作者角色、发表或在投状态、关键数字和论文链接均以该简历为依据。

## 本地预览

在本目录运行：

```bash
python3 -m http.server 8000
```

然后访问 <http://localhost:8000>。也可以直接在浏览器中打开 `index.html`。本站使用静态 HTML 和 CSS，无需安装依赖或构建。

## 文件说明

- `index.html`：个人介绍、论文、实习与教育经历。
- `stylesheet.css`：桌面、手机及打印样式。
- `pdf/resume-zh.pdf`：可下载的原始中文简历。
- `assets/favicon.svg`：个人主页图标。
- `sitemap.xml`、`robots.txt`：搜索引擎索引配置。
- `.nojekyll`：使 GitHub Pages 直接提供静态文件。

更新简历后，请同步替换 `pdf/resume-zh.pdf` 并核对页面正文。当前使用 GitHub Pages 默认域名；配置自有域名时，同步更新页面的 canonical、Open Graph 地址、站点地图和 `robots.txt`。
