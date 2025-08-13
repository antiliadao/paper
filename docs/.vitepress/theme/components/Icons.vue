<template>
  <component 
    :is="iconComponent" 
    :size="size" 
    :stroke-width="strokeWidth"
    :class="['lucide-icon', className]"
  />
</template>

<script setup>
import { computed } from 'vue'
import { 
  Sparkles,        // 替代 ✨ 星光
  Target,          // 替代 🎯 目标
  Lightbulb,       // 替代 💡 想法
  Flame,           // 替代 🔥 火焰
  Waves,           // 替代 🌊 波浪
  Gem,             // 替代 💎 钻石
  Rocket,          // 替代 🚀 火箭
  Building2,       // 替代 🏗️ 建筑
  FileText,        // 替代 📝 文档
  Palette,         // 替代 🎨 调色板
  Rainbow,         // 替代 🌈 彩虹
  Crystal,         // 替代 🔮 水晶球
  Theater,         // 替代 🎭 面具
  Coins,           // 替代 💰 金钱
  Sprout,          // 替代 🌱 新芽
  Shield,          // 替代 🛡️ 盾牌
  Atom,            // 替代 ⚛️ 原子
  Globe,           // 替代 🌍 地球
  RefreshCw,       // 替代 🔄 循环
  BarChart3,       // 替代 📊 图表
  Lock,            // 替代 🔒 锁
  Heart,           // 替代 💚 心
  Star,            // 替代 🌟 星星
  Zap,             // 替代 ⚡ 闪电
  Info,            // 信息
  AlertTriangle,   // 警告
  AlertCircle,     // 危险
  CheckCircle,     // 成功
  XCircle,         // 错误
  HelpCircle,      // 帮助
  ArrowRight,      // 箭头
  ChevronRight,    // 右箭头
  Circle,          // 圆点
  Square,          // 方块
  Triangle         // 三角
} from 'lucide-vue-next'

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
  className: {
    type: String,
    default: ''
  }
})

// 图标映射表
const iconMap = {
  // 常用图标
  'sparkles': Sparkles,
  'target': Target,
  'lightbulb': Lightbulb,
  'flame': Flame,
  'waves': Waves,
  'gem': Gem,
  'rocket': Rocket,
  'building': Building2,
  'document': FileText,
  'palette': Palette,
  'rainbow': Rainbow,
  'crystal': Crystal,
  'theater': Theater,
  'coins': Coins,
  'sprout': Sprout,
  'shield': Shield,
  'atom': Atom,
  'globe': Globe,
  'refresh': RefreshCw,
  'chart': BarChart3,
  'lock': Lock,
  'heart': Heart,
  'star': Star,
  'zap': Zap,
  // 状态图标
  'info': Info,
  'warning': AlertTriangle,
  'danger': AlertCircle,
  'success': CheckCircle,
  'error': XCircle,
  'help': HelpCircle,
  // 方向图标
  'arrow-right': ArrowRight,
  'chevron-right': ChevronRight,
  // 形状图标
  'circle': Circle,
  'square': Square,
  'triangle': Triangle
}

const iconComponent = computed(() => {
  return iconMap[props.name] || HelpCircle
})
</script>

<style scoped>
.lucide-icon {
  display: inline-block;
  vertical-align: middle;
  color: var(--vp-c-brand-1);
}

.lucide-icon.inline {
  margin: 0 4px;
}

.lucide-icon.block {
  display: block;
  margin: 8px 0;
}
</style>