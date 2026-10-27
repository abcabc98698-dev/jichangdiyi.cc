/**
 * 全局站点元数据与导航体系 - 第一机场 (jichangdiyi.cc)
 */
export const site = {
  name: '第一机场',
  tagline: '全球高速网络专线与机场基础设施独立测评实验室',
  description:
    '第一机场（jichangdiyi.cc）专注于全球 IEPL/IPLC 内网专线、跨平台代理客户端及流媒体/AI 解锁能力客观测评。收录 42+ 品牌真实测速数据、套餐明细与选型避坑指南。',
  email: 'contact@jichangdiyi.cc',
  url: 'https://jichangdiyi.cc',
  establishedYear: 2026,
  /**
   * 搜索引擎站长平台所有权验证代码（预留字段）
   * 用户在对应站长平台获取验证码后直接填入即可，空值时不会在 HTML 中输出。
   */
  verification: {
    google: '', // Google Search Console: e.g. "google-site-verification=xxxx" 或纯字符串
    bing: '',   // Bing Webmaster Tools: e.g. "msvalidate.01" 纯字符串
    baidu: '',  // 百度搜索资源平台: e.g. "codeva-xxxx" 或 "baidu-site-verification"
    shenma: '', // 神马站长平台: e.g. "shenma-site-verification"
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: '首页', href: '/' },
  { label: '机场品牌库', href: '/brands' },
  { label: '专线选型对比', href: '/services' },
  { label: '评测与教程', href: '/blog' },
  { label: '关于实验室', href: '/about' },
];
