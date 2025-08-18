<template>
  <!-- 所有页面都使用默认布局 -->
  <DefaultTheme.Layout>
    <template #nav-bar-title-before>
      <img 
        src="/logo.png" 
        alt="Antilia" 
        class="nav-logo hover-lift"
      />
    </template>
    
    <!-- 首页使用自定义内容替换默认内容 -->
    <template #home-hero-before v-if="isHomePage">
      <HomePage />
    </template>
    
    <!-- 首页隐藏底部栏 -->
    <template #layout-bottom v-if="isHomePage">
      <div style="display: none;"></div>
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomePage from './components/HomePage.vue'

const { frontmatter } = useData()
const route = useRoute()

// 判断是否为首页
const isHomePage = computed(() => {
  // 通过 frontmatter 的 layout 属性判断
  return frontmatter.value.layout === 'home'
})
</script>

<style>
.nav-logo {
  height: 24px;
  width: 24px;
  margin-right: 8px;
  display: inline-block;
  vertical-align: middle;
  filter: drop-shadow(0 0 10px rgba(5, 150, 105, 0.3));
  transition: all 0.3s ease;
}

.nav-logo:hover {
  filter: drop-shadow(0 0 20px rgba(5, 150, 105, 0.5));
}

@media (min-width: 768px) {
  .nav-logo {
    height: 28px;
    width: 28px;
  }
}

/* 首页隐藏底部栏 */
.VPHome .VPFooter,
.VPHome footer,
.VPHome .VPDoc .VPDocFooter {
  display: none !important;
}
</style>