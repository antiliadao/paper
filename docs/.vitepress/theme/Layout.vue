<template>
  <CustomHome v-if="isHomePage" />
  <DefaultTheme.Layout v-else>
    <template #nav-bar-title-before>
      <img 
        src="/logo.png" 
        alt="Antilia" 
        class="nav-logo hover-lift"
      />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CustomHome from './components/CustomHome.vue'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>

<style scoped>
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
</style>