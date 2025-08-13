export default {
  title: 'ANTILIA',
  titleTemplate: ':title',
  description: '永恒契约 - 去中心化价值共建的智慧',
  lang: 'zh-CN',
  base: '/paper/',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#059669' }],
    ['script', {}, `
      // 设置默认暗色主题
      (function() {
        const stored = localStorage.getItem('vitepress-theme-appearance');
        if (!stored) {
          localStorage.setItem('vitepress-theme-appearance', 'dark');
          document.documentElement.classList.add('dark');
        }
      })();
    `],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { 
      href: 'https://fonts.googleapis.com/css2?family=K2D:wght@100;200;300;400;500;600;700;800&display=swap', 
      rel: 'stylesheet' 
    }]
  ],
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/preface' },
      { text: '经济模型', link: '/economics' }
    ],
    
    sidebar: [
      {
        text: '蚂蚁家园-永恒契约',
        items: [
          { text: '序章：数字时代的蚂蚁寓言', link: '/preface' },
          { text: '第一章：去中心化的生命智慧', link: '/chapter-1' },
          { text: '第二章：价值共建的生态法则', link: '/chapter-2' },
          { text: '第三章：部落网络的协作智慧', link: '/chapter-3' },
          { text: '第四章：军团竞争的卓越驱动', link: '/chapter-4' },
          { text: '第五章：蚁群迁徙的永续哲学', link: '/chapter-5' },
          { text: '第六章：技术架构的工程美学', link: '/chapter-6' },
          { text: '第七章：永恒法则的智慧设计', link: '/chapter-7' },
          { text: '终章：永恒契约', link: '/epilogue' }
        ]
      }
    ],
    
    outline: {
      level: [2, 3],
      label: '本章导航'
    },
    
    footer: {
      message: '基于永恒契约构建',
      copyright: 'Copyright © 2024 蚂蚁家园'
    },
    
    
    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  },
  
  markdown: {
    lineNumbers: false,
    container: {
      tipLabel: '🌟 情感契约',
      warningLabel: '🔒 技术契约',
      dangerLabel: '🚫 警告',
      infoLabel: '⚛️ 理性契约'
    }
  }
}