import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Icon from './components/Icon.vue'

// 导入样式 - 最小化方案
import './style.css' // 原有样式
import './styles/minimal-override.css' // 最小化覆盖
import './styles/content-simple.css' // 内容页简约增强

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // 注册全局图标组件
    app.component('Icon', Icon)
  }
}