# 个人学术网站部署指南

<div align="center">
  <h3 align="center">罗一鸣的个人网站</h3>
  <p align="center">
    专注于LLM Agent开发和量化交易的程序员
    <br />
    <a href="https://Gusen1453.github.io"><strong>访问网站 »</strong></a>
    <br />
    <br />
    <a href="https://Gusen1453.github.io/resume">简历</a>
    ·
    <a href="https://Gusen1453.github.io/publications">论文</a>
    ·
    <a href="https://Gusen1453.github.io/portfolio">项目</a>
  </p>

  <p align="center">
    <a href="https://github.com/Gusen1453/Gusen1453.github.io/actions/workflows/pages/pages-build-deployment">
      <img src="https://github.com/Gusen1453/Gusen1453.github.io/actions/workflows/pages/pages-build-deployment/badge.svg" alt="构建状态">
    </a>
  </p>
</div>

<p align="center">
  <a href="https://github.com/Gusen1453" title="GitHub Profile"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
  <a href="mailto:luoyiming2018@gmail.com" title="Email Me"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://linkedin.com/in/guosen" title="LinkedIn Profile"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
</p>

## 使用GitHub Actions自动部署

本项目使用GitHub Actions实现自动部署，每次推送到主分支后会自动构建并发布网站。

### 部署流程

1. 克隆此仓库到本地：
   ```bash
   git clone https://github.com/Gusen1453/Gusen1453.github.io.git
   cd Gusen1453.github.io
   ```

2. 修改网站配置和内容：
   - 编辑 `_config.yml` 文件更新个人信息
   - 在 `_pages` 目录中更新或添加页面
   - 在 `images` 目录中上传您的头像和其他图片
   - 在 `_posts`, `_publications`, `_talks` 等目录添加您的内容

3. 提交并推送您的更改：
   ```bash
   git add .
   git commit -m "更新网站内容"
   git push origin main
   ```

4. GitHub Actions将自动触发构建流程：
   - 检查代码
   - 安装依赖
   - 构建网站
   - 部署到GitHub Pages

5. 访问 `https://Gusen1453.github.io` 查看您的网站

### GitHub Actions工作流配置

网站使用以下GitHub Actions工作流进行自动部署：

```yaml
name: 构建并部署Jekyll网站

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: 设置Ruby
      uses: ruby/setup-ruby@v1
      with:
        ruby-version: '3.0'
        bundler-cache: true
    - name: 安装依赖
      run: bundle install
    - name: 构建网站
      run: bundle exec jekyll build
    - name: 部署到GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./_site
```

## 本地开发

在推送到GitHub之前，您可以在本地预览网站：

1. 安装必要的依赖：
   ```bash
   # Linux
   sudo apt install ruby-dev ruby-bundler nodejs
   
   # macOS
   brew install ruby node
   gem install bundler
   ```

2. 安装Ruby依赖：
   ```bash
   bundle config set --local path 'vendor/bundle'
   bundle install
   ```

3. 本地运行网站：
   ```bash
   bundle exec jekyll serve -l -H localhost
   ```

4. 在浏览器中访问 `http://localhost:4000` 预览网站

## 技术栈

- <img src="https://img.shields.io/badge/Jekyll-CC0000?style=flat&logo=Jekyll&logoColor=white" /> 静态网站生成器
- <img src="https://img.shields.io/badge/Ruby-CC342D?style=flat&logo=ruby&logoColor=white" /> 运行环境
- <img src="https://img.shields.io/badge/Markdown-000000?style=flat&logo=markdown&logoColor=white" /> 内容编写
- <img src="https://img.shields.io/badge/YAML-CB171E?style=flat&logo=yaml&logoColor=white" /> 配置文件格式
- <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white" /> CI/CD自动化
- <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=flat&logo=GitHub&logoColor=white" /> 网站托管

## 自定义主题

您可以通过编辑 `_sass` 目录中的文件来自定义网站的样式和主题。

---
