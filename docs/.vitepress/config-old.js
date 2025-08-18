export default {
  title: 'ANTILIA',
  base: '/paper/',
  
  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'ANTILIA - 蚂蚁家园',
      description: '永恒契约 - 去中心化价值共建的智慧',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '开始阅读', link: '/preface' },
          { text: '经济模型', link: '/economics' }
        ],
        outline: {
          level: [2, 3],
          label: '本章导航'
        },
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '深色模式',
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
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'ANTILIA - Digital Ant Colony',
      description: 'Eternal Covenant - Decentralized Value Co-creation',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Start Reading', link: '/en/preface' },
          { text: 'Economics', link: '/en/economics' }
        ],
        outline: {
          level: [2, 3],
          label: 'On This Page'
        },
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        darkModeSwitchLabel: 'Dark mode',
        sidebar: [
          {
            text: 'ANTILIA - Eternal Covenant',
            items: [
              { text: 'Preface: Digital Age Ant Fable', link: '/en/preface' },
              { text: 'Chapter 1: Decentralized Life Wisdom', link: '/en/chapter-1' },
              { text: 'Chapter 2: Value Co-creation Ecosystem', link: '/en/chapter-2' },
              { text: 'Chapter 3: Tribal Network Collaboration', link: '/en/chapter-3' },
              { text: 'Chapter 4: Legion Competition Excellence', link: '/en/chapter-4' },
              { text: 'Chapter 5: Colony Migration Philosophy', link: '/en/chapter-5' },
              { text: 'Chapter 6: Technical Architecture Beauty', link: '/en/chapter-6' },
              { text: 'Chapter 7: Eternal Law Design Wisdom', link: '/en/chapter-7' },
              { text: 'Epilogue: Eternal Covenant', link: '/en/epilogue' }
            ]
          }
        ]
      }
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      title: 'ANTILIA - 螞蟻家園',
      description: '永恆契約 - 去中心化價值共建的智慧',
      link: '/zh-TW/',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/zh-TW/' },
          { text: '開始閱讀', link: '/zh-TW/preface' },
          { text: '經濟模型', link: '/zh-TW/economics' }
        ],
        outline: {
          level: [2, 3],
          label: '本章導航'
        },
        sidebarMenuLabel: '選單',
        returnToTopLabel: '返回頂部',
        darkModeSwitchLabel: '深色模式',
        sidebar: [
          {
            text: '螞蟻家園-永恆契約',
            items: [
              { text: '序章：數位時代的螞蟻寓言', link: '/zh-TW/preface' },
              { text: '第一章：去中心化的生命智慧', link: '/zh-TW/chapter-1' },
              { text: '第二章：價值共建的生態法則', link: '/zh-TW/chapter-2' },
              { text: '第三章：部落網絡的協作智慧', link: '/zh-TW/chapter-3' },
              { text: '第四章：軍團競爭的卓越驅動', link: '/zh-TW/chapter-4' },
              { text: '第五章：蟻群遷徙的永續哲學', link: '/zh-TW/chapter-5' },
              { text: '第六章：技術架構的工程美學', link: '/zh-TW/chapter-6' },
              { text: '第七章：永恆法則的智慧設計', link: '/zh-TW/chapter-7' },
              { text: '終章：永恆契約', link: '/zh-TW/epilogue' }
            ]
          }
        ]
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      title: 'ANTILIA - アントリア',
      description: '永遠の契約 - 分散型価値共創の知恵',
      link: '/ja/',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: '読み始める', link: '/ja/preface' },
          { text: '経済モデル', link: '/ja/economics' }
        ],
        outline: {
          level: [2, 3],
          label: '目次'
        },
        sidebarMenuLabel: 'メニュー',
        returnToTopLabel: 'トップに戻る',
        darkModeSwitchLabel: 'ダークモード',
        sidebar: [
          {
            text: 'アントリア - 永遠の契約',
            items: [
              { text: '序章：デジタル時代のアリの寓話', link: '/ja/preface' },
              { text: '第1章：分散型の生命の知恵', link: '/ja/chapter-1' },
              { text: '第2章：価値共創のエコシステム', link: '/ja/chapter-2' },
              { text: '第3章：部族ネットワークの協力', link: '/ja/chapter-3' },
              { text: '第4章：軍団競争の卓越性', link: '/ja/chapter-4' },
              { text: '第5章：コロニー移住の哲学', link: '/ja/chapter-5' },
              { text: '第6章：技術アーキテクチャの美学', link: '/ja/chapter-6' },
              { text: '第7章：永遠の法則の設計', link: '/ja/chapter-7' },
              { text: '終章：永遠の契約', link: '/ja/epilogue' }
            ]
          }
        ]
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      title: 'ANTILIA - 개미 왕국',
      description: '영원한 계약 - 탈중앙화 가치 공동 창조의 지혜',
      link: '/ko/',
      themeConfig: {
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '읽기 시작', link: '/ko/preface' },
          { text: '경제 모델', link: '/ko/economics' }
        ],
        outline: {
          level: [2, 3],
          label: '페이지 내비게이션'
        },
        sidebarMenuLabel: '메뉴',
        returnToTopLabel: '맨 위로',
        darkModeSwitchLabel: '다크 모드',
        sidebar: [
          {
            text: '개미 왕국 - 영원한 계약',
            items: [
              { text: '서장: 디지털 시대의 개미 우화', link: '/ko/preface' },
              { text: '제1장: 탈중앙화 생명의 지혜', link: '/ko/chapter-1' },
              { text: '제2장: 가치 공동 창조 생태계', link: '/ko/chapter-2' },
              { text: '제3장: 부족 네트워크 협력', link: '/ko/chapter-3' },
              { text: '제4장: 군단 경쟁의 우수성', link: '/ko/chapter-4' },
              { text: '제5장: 군체 이주 철학', link: '/ko/chapter-5' },
              { text: '제6장: 기술 아키텍처의 미학', link: '/ko/chapter-6' },
              { text: '제7장: 영원한 법칙의 설계', link: '/ko/chapter-7' },
              { text: '종장: 영원한 계약', link: '/ko/epilogue' }
            ]
          }
        ]
      }
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi',
      title: 'ANTILIA - Vương Quốc Kiến',
      description: 'Giao Ước Vĩnh Cửu - Trí Tuệ Đồng Sáng Tạo Giá Trị Phi Tập Trung',
      link: '/vi/',
      themeConfig: {
        nav: [
          { text: 'Trang Chủ', link: '/vi/' },
          { text: 'Bắt Đầu Đọc', link: '/vi/preface' },
          { text: 'Mô Hình Kinh Tế', link: '/vi/economics' }
        ],
        outline: {
          level: [2, 3],
          label: 'Điều Hướng Chương'
        },
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Về đầu trang',
        darkModeSwitchLabel: 'Chế độ tối',
        sidebar: [
          {
            text: 'Vương Quốc Kiến - Giao Ước Vĩnh Cửu',
            items: [
              { text: 'Mở Đầu: Câu Chuyện Kiến Thời Số', link: '/vi/preface' },
              { text: 'Chương 1: Trí Tuệ Sống Phi Tập Trung', link: '/vi/chapter-1' },
              { text: 'Chương 2: Luật Sinh Thái Đồng Sáng Tạo', link: '/vi/chapter-2' },
              { text: 'Chương 3: Mạng Lưới Bộ Lạc Hợp Tác', link: '/vi/chapter-3' },
              { text: 'Chương 4: Cạnh Tranh Quân Đoàn Xuất Sắc', link: '/vi/chapter-4' },
              { text: 'Chương 5: Triết Lý Di Cư Bầy Đàn', link: '/vi/chapter-5' },
              { text: 'Chương 6: Mỹ Học Kiến Trúc Kỹ Thuật', link: '/vi/chapter-6' },
              { text: 'Chương 7: Thiết Kế Luật Vĩnh Cửu', link: '/vi/chapter-7' },
              { text: 'Kết: Giao Ước Vĩnh Cửu', link: '/vi/epilogue' }
            ]
          }
        ]
      }
    }
  },
  
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/paper/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/paper/logo.png' }],
    ['meta', { name: 'theme-color', content: '#059669' }],
    ['script', {}, `
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
    // 全局主题配置
    siteTitle: 'ANTILIA',
    
    outline: {
      level: [2, 3]
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
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate'
                }
              }
            }
          },
          'zh-TW': {
            translations: {
              button: {
                buttonText: '搜尋文檔',
                buttonAriaLabel: '搜尋文檔'
              },
              modal: {
                noResultsText: '無法找到相關結果',
                resetButtonTitle: '清除查詢條件',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換'
                }
              }
            }
          },
          ja: {
            translations: {
              button: {
                buttonText: '検索',
                buttonAriaLabel: '検索'
              },
              modal: {
                noResultsText: '結果が見つかりません',
                resetButtonTitle: '検索をクリア',
                footer: {
                  selectText: '選択',
                  navigateText: 'ナビゲート'
                }
              }
            }
          },
          ko: {
            translations: {
              button: {
                buttonText: '검색',
                buttonAriaLabel: '검색'
              },
              modal: {
                noResultsText: '결과를 찾을 수 없습니다',
                resetButtonTitle: '검색 지우기',
                footer: {
                  selectText: '선택',
                  navigateText: '탐색'
                }
              }
            }
          },
          vi: {
            translations: {
              button: {
                buttonText: 'Tìm kiếm',
                buttonAriaLabel: 'Tìm kiếm'
              },
              modal: {
                noResultsText: 'Không tìm thấy kết quả',
                resetButtonTitle: 'Xóa tìm kiếm',
                footer: {
                  selectText: 'Chọn',
                  navigateText: 'Điều hướng'
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