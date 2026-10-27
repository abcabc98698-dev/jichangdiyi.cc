<div align="center">

# 🛰️ 第一机场 (jichangdiyi.cc)

**全球高速网络专线与机场基础设施独立测评实验室 · 跨平台代理客户端知识库**

[![Astro](https://img.shields.io/badge/Astro-7.4.1-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bulma](https://img.shields.io/badge/Bulma-1.0.4-00D1B2?style=flat-square&logo=bulma&logoColor=white)](https://bulma.io/)
[![Node](https://img.shields.io/badge/Node-%3E%3D22.22.0-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![SEO Score](https://img.shields.io/badge/SEO%20Health-98.5%2F100-brightgreen?style=flat-square)](https://jichangdiyi.cc)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

[在线体验与实测数据](https://jichangdiyi.cc) · [42 家品牌全景数据库](https://jichangdiyi.cc/brands) · [专线选型对比](https://jichangdiyi.cc/services) · [实验室方法论](https://jichangdiyi.cc/about)

</div>

---

## 📖 项目简介

**第一机场（jichangdiyi.cc）** 是一个采用现代 Web 栈构建的高性能、代码级“纯净化”、深度 SEO/GEO 优化的**网络加速基础设施观测站**。

项目旨在打破中文网络代理行业长期存在的“跑路盘泛滥、参数虚标夸大、博主通篇软文、超售严重”等信息不对称乱象。通过在广东珠海电信与联通骨干网部署物理探针，针对主流 **42+ 家专线机场**在每晚 **20:30–23:00** 拥塞高峰期进行实测抓包，为中文互联网用户、跨境电商从业者、AI 研发工程师与留学生提供透明、可信、可复现的评测基准。

---

## ✨ 核心特性

- 🌐 **42+ 机场品牌全景数据库**：按线路类型（IEPL专线/IPLC专线/BGP隧道）、最低门槛、协议类型、解锁能力进行结构化录入，支持客户端秒级即时筛选。
- 🔬 **五维全景评分体系 (FDEM)**：从晚高峰稳定性（30%）、物理架构真伪（25%）、落地纯净度与欺诈分（20%）、协议安全性（15%）与商业信誉（10%）进行标准化打分。
- 📚 **Section 38 深度知识矩阵**：
  - [《IEPL 专线 vs IPLC 专线全面科普指南》](https://jichangdiyi.cc/blog/iepl-vs-iplc-architecture)：拆解物理光缆、OTN 封装、QoS WRED 队列丢包机理与 4 种伪专线鉴别。
  - [《2026 最新 Clash Verge Rev 配置与 TUN 模式指南》](https://jichangdiyi.cc/blog/2026-clash-verge-rev-guide)：Mihomo 内核调优、服务模式、Fake-IP 防 DNS 泄露与 7 大断网故障排查树。
  - [《ChatGPT / Claude 原生住宅 IP 避坑全指南》](https://jichangdiyi.cc/blog/chatgpt-claude-proxy-optimization)：Cloudflare Turnstile 绕过、MaxMind/Scamalytics 欺诈分排查与 AI 策略组 YAML 配置。
- 🚀 **极致前端性能与纯静态渲染 (SSG)**：
  - 基于 **Astro 7 + Bulma 1.0.4 Sass** 静态生成全部 94 个页面；
  - 采用 `<ClientRouter />` 实现单页应用（SPA）平滑渐变转场；
  - 本地自托管字体 (`@fontsource/inter`)，零外部阻塞调用；
  - 动态深浅主题双向响应切换，本地持久化且首屏无白闪（FOUC）。
- 🛡️ **严格防风控与顶级 SEO / GEO 标准**：
  - 索引预算优化：Sitemap 精准净化为 51 个核心内容页，门页全屏蔽；
  - 100% 规范化 Canonical 矩阵（绝对地址、无尾部斜杠、防跨域劫持）；
  - 全外链严格包裹 `rel="nofollow sponsored noopener"`，彻底规避 Google 算法惩罚；
  - 完整的 JSON-LD 结构化数据（`WebSite`、`Organization`、`Product`、`Review`、`ItemList`、`CollectionPage`、`AboutPage`、`ContactPage`、`BlogPosting`、`BreadcrumbList`、`FAQPage`）；
  - 客户端自动化动态 SVG Mermaid 拓扑图渲染。

---

## 📁 目录架构

```text
jichangdiyi.cc/
├── public/                 # 静态资源 (robots.txt, favicon, webmanifest, _headers)
├── src/
│   ├── assets/styles/      # Bulma Sass 样式系统 (main.scss, tokens, components)
│   ├── components/         # 业务组件 (BrandCard, ClientMatrix, SpeedReport, etc.)
│   ├── content/blog/       # Astro Content Collections (核心支柱长文)
│   ├── data/               # 结构化数据源 (42家品牌库 brands.ts, 客户端 clients.ts)
│   ├── layouts/            # 页面通用骨架 (BaseLayout.astro - 统一 Head/SEO/Schema)
│   └── pages/              # 静态路由体系
│       ├── index.astro     # 首页
│       ├── about.astro     # 实验室评测方法论准则 (12,000+字)
│       ├── services.astro  # 专线选型方案与场景对比
│       ├── contact.astro   # 联系我们与技术复核
│       ├── 404.astro       # 404 错误页 (noindex)
│       ├── brands/         # 42 家品牌详情动态路由与多维筛选库
│       ├── blog/           # 博客列表与详情动态路由
│       └── go/             # 商业外链安全重定向门页 (robots 屏蔽)
├── scripts/                # 自动化构建脚本 (post-build.cjs 等)
├── astro.config.mjs        # Astro 核心配置与 Sitemap 过滤器
├── package.json            # 依赖与脚本指令
└── tsconfig.json           # 严格模式 TypeScript 配置
```

---

## 🛠️ 本地开发与构建指南

### 环境要求
- **Node.js** >= `22.22.0`（Astro 7 硬性要求）
- **pnpm** >= `9.0.0`（严禁使用 npm 或 yarn，以 `pnpm-lock.yaml` 为准）
- **TypeScript** ^`6.0.0`

### 常用命令

```bash
# 1. 克隆代码仓库
git clone https://github.com/abcabc98698-dev/jichangdiyi.cc.git
cd jichangdiyi.cc

# 2. 安装依赖
pnpm install

# 3. 启动本地开发服务器
pnpm dev
# 或以独立后台守护进程启动:
# pnpm astro dev --background

# 4. 执行全站严格类型检查 (0 errors, 0 warnings)
pnpm check

# 5. 执行生产级全站静态构建 (输出到 dist/)
pnpm build

# 6. 本地预览生产构建产物
pnpm preview
```

---

## 🚀 部署上线指南

本项目为纯静态 SSG 架构，产物完全解耦，支持零成本部署于全球各大现代边缘托管平台：

### 1. Cloudflare Pages（推荐）
- **构建命令**：`pnpm build`
- **构建输出目录**：`dist`
- **Node.js 版本环境变量**：`NODE_VERSION = 22.22.0`

### 2. Vercel / Netlify
- 导入 Git 仓库，选择 **Astro** 框架预设即可全自动识别构建。

### 3. Nginx / Docker
将 `dist/` 目录挂载至 Nginx 根目录，配置 `try_files $uri $uri/ =404;` 即可极速伺服。

---

## ⚖️ 评测公约与免责声明

1. **客观中立原则**：本站不销售代理节点、不运营代理服务器、不受任何服务商商业控股。所有实测数据均基于物理探针真实抓取。
2. **商业透明度**：本站部分注册入口包含合规的 Affiliate 推广参数，用于反哺测速服务器与物理宽带开销。全站商业外链强制标记 `rel="nofollow sponsored noopener"`，绝不影响用户实际支付价格，绝不接受有偿删帖。
3. **法律法规合规**：本站内容仅用于计算机网络科学研究、企业跨境远程办公与技术探讨，请所有访客严格遵守当地法律法规。

---

## 📄 开源许可证

本项目基于 [MIT License](LICENSE) 协议开源。
