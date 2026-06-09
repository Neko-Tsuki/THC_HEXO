<div align="center">

# 東方行狀錄 / Touhou Chronicle

A Touhou Project themed digital magazine website powered by Hexo & Volantis.

[官方网站](https://www.touhouchronicle.com)

</div>

---

## 项目简介

《東方行狀錄》（Touhou Chronicle）是一个以东方 Project（東方Project）为主题的非营利同人电子期刊项目。

本仓库包含网站的全部源代码、主题配置、页面模板、自定义样式以及自动化部署配置，用于生成和维护官方网站。

网站内容主要包括：

- 电子期刊发布
- 往期杂志归档
- 同人文化记录
- 社群活动报道
- 人物访谈与专题文章
- 东方 Project 相关研究与创作内容

---

## 技术栈

- Hexo
- Volantis Theme
- EJS
- SCSS / CSS
- GitHub Actions
- GitHub Pages / 自托管部署

---

## 项目结构

```text
THC_HEXO
├── source/             # 网站内容
├── themes/             # 主题文件
├── scaffolds/          # Hexo 模板
├── scripts/            # 自定义脚本
├── public/             # 生成后的静态文件
├── _config.yml         # Hexo 配置
├── _config.volantis.yml
└── package.json
```

---

## SEO

已启用：

- Sitemap
- RSS Feed
- Open Graph
- Structured Data
- Robots Meta
- Schema.org

---

## 部署

### GitHub Pages

```bash
hexo clean
hexo generate
hexo deploy
```

或使用 GitHub Actions 自动部署。

---

## 许可协议

除特别声明外：

- 网站程序代码遵循 MIT License
- 文章内容版权归原作者所有
- 东方 Project 原作版权归
  上海爱丽丝幻乐团（Team Shanghai Alice）所有

---

## 关于东方 Project

东方 Project（東方Project）是由

ZUN
（上海爱丽丝幻乐团）

创作的弹幕射击游戏系列及相关文化作品。

本项目为非官方同人项目，与官方组织无直接关联。

---

<div align="center">

Made with ❤️ by Touhou Chronicle Editorial Department

</div>
