<template>
  <component 
    :is="iconComponent" 
    :size="size" 
    :stroke-width="strokeWidth"
    :class="['icon', className]"
    :style="{ color: color || 'var(--vp-c-brand-1)' }"
  />
</template>

<script setup>
import { computed } from 'vue'
import * as LucideIcons from 'lucide-vue-next'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 20
  },
  strokeWidth: {
    type: Number,
    default: 2
  },
  color: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
})

const iconComponent = computed(() => {
  // 转换图标名称为组件名
  const iconName = props.name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
  
  return LucideIcons[iconName] || LucideIcons.HelpCircle
})
</script>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
  transition: all 0.3s ease;
}

.icon.inline {
  margin: 0 4px;
}
</style>