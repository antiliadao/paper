# 蚂蚁家园白皮书项目

基于VitePress构建的蚂蚁家园(Antilia)永恒契约白皮书。

## 项目结构

```
covenant/
├── docs/                          # VitePress文档目录
│   ├── .vitepress/               # VitePress配置
│   │   ├── config.js             # 主配置文件
│   │   └── theme/                # 自定义主题
│   │       ├── index.js          # 主题入口
│   │       └── style.css         # 自定义样式
│   ├── public/                   # 静态资源
│   ├── index.md                  # 首页
│   ├── preface.md               # 序章（待创建）
│   ├── chapter-1.md             # 第一章（待创建）
│   ├── chapter-2.md             # 第二章（待创建）
│   ├── chapter-3.md             # 第三章（待创建）
│   ├── chapter-4.md             # 第四章（待创建）
│   ├── chapter-5.md             # 第五章（待创建）
│   ├── chapter-6.md             # 第六章（待创建）
│   ├── chapter-7.md             # 第七章（待创建）
│   ├── chapter-8.md             # 第八章（待创建）
│   ├── epilogue.md              # 终章（待创建）
│   └── docs.md                  # 项目文档链接（待创建）
├── package.json                  # 项目配置
└── README.md                     # 项目说明
```

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 三层叙事架构

本白皮书采用独创的三层叙事架构：

- 🌟 **情感契约层**：永恒承诺的温度
- ⚛️ **理性契约层**：永恒设计的逻辑  
- 🔒 **技术契约层**：永恒执行的保障

## 特性

- ✅ VitePress静态站点生成
- ✅ 蚂蚁绿色系品牌主题
- ✅ 响应式设计
- ✅ 中文优化
- ✅ 三层契约容器样式
- ✅ 本地搜索支持

## 部署

项目配置了GitHub Pages自动部署，推送到main分支即可自动构建和发布。