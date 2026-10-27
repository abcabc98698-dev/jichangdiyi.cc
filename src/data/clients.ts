/**
 * 跨平台第三方代理客户端知识库
 * 来源：第三方代理客户端.txt
 */

export interface ClientApp {
  name: string;
  core: string;
  highlight: string;
  category: '通用开源客户端' | '商业高级代理' | '软路由网关';
  freeOrPaid: '免费开源' | '海外付费/内购';
  downloadType: 'GitHub' | 'App Store' | '官方文档' | '官网';
  recommended: boolean;
}

export interface PlatformClients {
  platform: string;
  slug: string;
  summary: string;
  searchKeywords: string[];
  notice?: string;
  clients: ClientApp[];
}

export const platformClients: PlatformClients[] = [
  {
    platform: 'Windows 电脑',
    slug: 'windows',
    summary: '适合 Windows 10/11 系统的桌面代理工具，支持 TUN 模式、分流规则与多协议导入。',
    searchKeywords: ['Clash for Windows', 'Clash Verge Rev 下载', 'v2rayN 下载', 'Windows 机场客户端', 'Mihomo 客户端', 'VLESS Windows 客户端'],
    notice: 'Mihomo Party 应单独关注其开源维护状态；目前推荐以 Clash Verge Rev、v2rayN 与 FlClash 作为 Windows 首选。',
    clients: [
      {
        name: 'Clash Verge Rev',
        core: 'Mihomo (Clash Meta) 内核',
        highlight: '现代 UI、订阅管理、智能分流、内置系统级 TUN 虚拟网卡模式，新手及进阶主力首选。',
        category: '通用开源客户端',
        freeOrPaid: '免费开源',
        downloadType: 'GitHub',
        recommended: true,
      },
      {
        name: 'v2rayN',
        core: 'Xray / sing-box 双核心',
        highlight: '老牌经典多协议客户端，支持 VLESS-Reality、Trojan、Shadowsocks 等复杂配置与批量测速。',
        category: '通用开源客户端',
        freeOrPaid: '免费开源',
        downloadType: 'GitHub',
        recommended: true,
      },
      {
        name: 'FlClash',
        core: 'Mihomo 内核',
        highlight: '极简轻量、基于 Flutter 开发、界面干净低内存占用，适合日常网页与日常分流。',
        category: '通用开源客户端',
        freeOrPaid: '免费开源',
        downloadType: 'GitHub',
        recommended: false,
      },
      {
        name: 'Hiddify',
        core: '多协议通用内核',
        highlight: '自动选点、多协议支持、面向新手一键导入设计，跨平台体验一致。',
        category: '通用开源客户端',
        freeOrPaid: '免费开源',
        downloadType: 'GitHub',
        recommended: false,
      },
      {
        name: 'Karing',
        core: 'sing-box 系内核',
        highlight: '图形化规则分流、操作简洁直观、适合小白用户的配置方式。',
        category: '通用开源客户端',
        freeOrPaid: '免费开源',
        downloadType: 'GitHub',
        recommended: false,
      },
    ],
  },
  {
    platform: 'Android 安卓',
    slug: 'android',
    summary: '主流安卓手机与平板代理工具，支持分应用代理、原生订阅解析与后台稳定运行。',
    searchKeywords: ['v2rayNG 下载', 'Clash Meta 安卓', 'FlClash 安卓', 'Android 机场代理软件'],
    notice: '特别警告：不要在第三方网站或未经认证的渠道下载修改版 APK；NekoBox 请警惕 Google Play 上的非官方仿冒版本。',
    clients: [
      {
        name: 'v2rayNG',
        core: 'Xray 内核',
        highlight: '安卓生态装机量最高、协议支持全、配置直观，支持单节点链接与批量订阅导入。',
        category: '通用开源客户端',
        freeOrPaid: '免费开源',
        downloadType: 'GitHub',
        recommended: true,
      },
      {
        name: 'FlClash',
        core: 'Mihomo 内核',
        highlight: '界面高颜值、Material Design 风格、规则分流顺畅，兼顾审美与实用。',
        category: '通用开源客户端',
        freeOrPaid: '免费开源',
        downloadType: 'GitHub',
        recommended: true,
      },
      {
        name: 'Clash Meta for Android',
        core: 'Mihomo 内核',
        highlight: '老牌开源 Meta 移植版，支持强大策略组切换与自定义规则集。',
        category: '通用开源客户端',
        freeOrPaid: '免费开源',
        downloadType: 'GitHub',
        recommended: false,
      },
      {
        name: 'sing-box for Android (SFA)',
        core: 'sing-box 官方核心',
        highlight: '低内存开销、原生 sing-box 格式，适合进阶用户定制配置文件。',
        category: '通用开源客户端',
        freeOrPaid: '免费开源',
        downloadType: '官方文档',
        recommended: false,
      },
    ],
  },
  {
    platform: 'iPhone / iPad (iOS)',
    slug: 'ios',
    summary: '苹果 iOS 生态代理工具通常需要使用非国区（如美区、港区）Apple ID 并在 App Store 获取。',
    searchKeywords: ['Shadowrocket 小火箭下载', 'Stash iOS 下载', 'Quantumult X 圈X', '苹果手机代理客户端'],
    notice: 'Shadowrocket、Stash、Quantumult X 为付费工具，售价以对应国家/地区 App Store 标价为准。',
    clients: [
      {
        name: 'Shadowrocket（小火箭）',
        core: '自研高性能代理内核',
        highlight: '性价比高、普及度广、一键扫码导入订阅、规则分流与请求查看一应俱全。',
        category: '商业高级代理',
        freeOrPaid: '海外付费/内购',
        downloadType: 'App Store',
        recommended: true,
      },
      {
        name: 'Stash',
        core: 'Clash 兼容核心',
        highlight: '完全兼容 Clash YAML 规则配置、策略组选择、覆写功能与图形化仪表盘。',
        category: '商业高级代理',
        freeOrPaid: '海外付费/内购',
        downloadType: 'App Store',
        recommended: true,
      },
      {
        name: 'Quantumult X（圈 X）',
        core: '自研规则核心',
        highlight: '强大的请求重写、JavaScript 脚本扩展与高自定义 DNS 分流，极客玩家首选。',
        category: '商业高级代理',
        freeOrPaid: '海外付费/内购',
        downloadType: 'App Store',
        recommended: false,
      },
      {
        name: 'sing-box (SFI)',
        core: 'sing-box 官方核心',
        highlight: '免费开源方向、通用规则配置、适合 sing-box 现代协议订阅。',
        category: '通用开源客户端',
        freeOrPaid: '免费开源',
        downloadType: 'App Store',
        recommended: false,
      },
    ],
  },
  {
    platform: 'macOS 苹果电脑',
    slug: 'macos',
    summary: '支持 Apple Silicon (M1/M2/M3/M4) 及 Intel 架构的高性能 macOS 桌面客户端。',
    searchKeywords: ['Clash Verge Mac', 'Surge Mac', 'macOS 机场代理', 'Mihomo Mac 下载'],
    notice: '下载时请严格根据 Mac 芯片架构选择 arm64 (Apple Silicon) 或 x64 (Intel) 安装包。',
    clients: [
      {
        name: 'Clash Verge Rev',
        core: 'Mihomo 内核',
        highlight: '全平台体验统一、完美兼容 macOS 系统深浅主题、内置增强模式与原生快捷键。',
        category: '通用开源客户端',
        freeOrPaid: '免费开源',
        downloadType: 'GitHub',
        recommended: true,
      },
      {
        name: 'FlClash',
        core: 'Mihomo 内核',
        highlight: '优雅轻便、内存占用极低，适合轻度日常网页加速。',
        category: '通用开源客户端',
        freeOrPaid: '免费开源',
        downloadType: 'GitHub',
        recommended: false,
      },
      {
        name: 'Surge Mac',
        core: 'Surge 引擎',
        highlight: 'macOS 顶级网络调试与高级分流网关，支持抓包分析、MitM 与企业级配置。',
        category: '商业高级代理',
        freeOrPaid: '海外付费/内购',
        downloadType: '官网',
        recommended: false,
      },
    ],
  },
  {
    platform: 'OpenWrt / 软路由',
    slug: 'openwrt',
    summary: '部署于家庭透明代理网关、工控机软路由及外贸团队主路由器的全局网络加速解决方案。',
    searchKeywords: ['OpenClash 安装配置', 'PassWall2 软路由', 'Nikki OpenWrt', '软路由科学上网'],
    notice: '软路由安装前务必确认 CPU 架构（如 x86-64, aarch64_cortex-a53）及系统依赖内核模块。',
    clients: [
      {
        name: 'OpenClash',
        core: 'Mihomo / Clash 内核',
        highlight: '国内知名度最高的 OpenWrt 插件，支持 Fake-IP、TUN 混合模式与精细策略组分流。',
        category: '软路由网关',
        freeOrPaid: '免费开源',
        downloadType: 'GitHub',
        recommended: true,
      },
      {
        name: 'PassWall2',
        core: 'Xray / sing-box 内核',
        highlight: '多协议支持极为完善、内置分流规则丰富、支持按客户端设备分流与故障自动切换。',
        category: '软路由网关',
        freeOrPaid: '免费开源',
        downloadType: 'GitHub',
        recommended: true,
      },
      {
        name: 'Nikki',
        core: 'Mihomo 内核',
        highlight: '新一代极简高性能透明代理插件，专门针对 OpenWrt 24.10+ 原生环境优化。',
        category: '软路由网关',
        freeOrPaid: '免费开源',
        downloadType: 'GitHub',
        recommended: false,
      },
    ],
  },
];
