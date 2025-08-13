<template>
  <div class="icon-card">
    <component 
      :is="icon" 
      :size="size" 
      :stroke-width="strokeWidth"
      class="icon"
    />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import * as icons from 'lucide-vue-next'

const props = defineProps({
  icon: {
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
  }
})

const icon = computed(() => {
  const iconName = props.icon.charAt(0).toUpperCase() + props.icon.slice(1)
  return icons[iconName] || icons.HelpCircle
})
</script>

<style scoped>
.icon-card {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.icon {
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.content {
  flex: 1;
}
</style>