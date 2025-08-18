<template>
  <div class="hero-wrapper" style="font-family: 'K2D', sans-serif !important;">
    <section class="hero-section">
      <div class="hero-content">
        <!-- Logo -->
        <div class="logo-container">
          <img src="/logo.png" alt="Antilia Logo" class="hero-logo" />
        </div>
        
        <!-- Brand Name SVG -->
        <div class="brand-name-wrapper">
          <svg class="brand-name-svg" viewBox="0 0 400 80" width="400" height="80">
            <defs>
              <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#059669" />
                <stop offset="100%" style="stop-color:#10b981" />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" 
                  dominant-baseline="middle" 
                  text-anchor="middle" 
                  class="brand-name-text">
              ANTILIA
            </text>
          </svg>
        </div>
        
        <!-- Title -->
        <h2 class="hero-title">
          <span class="title-main">{{ t.title.main }}</span>
          <span class="title-divider">·</span>
          <span class="title-sub">{{ t.title.sub }}</span>
        </h2>
        
        <!-- Core Message -->
        <div class="core-message">
          <div class="message-line">
            <span class="highlight">{{ t.message.deploy }}</span>
            <span class="separator"></span>
            <span class="highlight">{{ t.message.eternal }}</span>
          </div>
          <p class="subtitle">{{ t.subtitle }}</p>
        </div>
        
        <!-- Philosophy Quote -->
        <blockquote class="philosophy-quote">
          "{{ t.quote }}"
        </blockquote>
        
        <!-- Actions -->
        <div class="hero-actions">
          <a :href="localePath('/preface')" class="btn btn-primary">
            <span>{{ t.action.whitepaper }}</span>
          </a>
          <a :href="localePath('/economics')" class="btn btn-secondary">
            <span>{{ t.action.economics }}</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { translations } from '../locales/index.js'

const { lang, site } = useData()
const route = useRoute()

// Get current language code
const currentLang = computed(() => {
  // Get language from VitePress locale system
  const path = route.path
  
  // Check path for language codes
  if (path.includes('/en/')) return 'en-US'
  if (path.includes('/zh-TW/')) return 'zh-TW'
  if (path.includes('/ja/')) return 'ja'
  if (path.includes('/ko/')) return 'ko'
  if (path.includes('/vi/')) return 'vi'
  
  // Default to Chinese
  return 'zh-CN'
})

// Get translations for current language
const t = computed(() => {
  return translations[currentLang.value] || translations['zh-CN']
})

// Generate localized path
const localePath = (path) => {
  const base = site.value.base || ''
  const routePath = route.path
  
  // Extract language prefix from current route
  let langPrefix = ''
  if (routePath.includes('/en/')) langPrefix = '/en'
  else if (routePath.includes('/zh-TW/')) langPrefix = '/zh-TW'
  else if (routePath.includes('/ja/')) langPrefix = '/ja'
  else if (routePath.includes('/ko/')) langPrefix = '/ko'
  else if (routePath.includes('/vi/')) langPrefix = '/vi'
  
  // Combine base + language prefix + path
  const fullPath = `${base}${langPrefix}${path}`
  return fullPath.replace(/\/+/g, '/')
}
</script>

<style scoped>
.hero-wrapper {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.hero-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  text-align: center;
  animation: fadeInUp 1s ease-out;
}

.logo-container {
  margin-bottom: 2rem;
  animation: bounceIn 1s ease-out;
}

.hero-logo {
  width: 120px;
  height: 120px;
  filter: drop-shadow(0 0 30px rgba(5, 150, 105, 0.5));
  animation: float 6s ease-in-out infinite;
}

.brand-name-wrapper {
  margin-bottom: 2rem;
}

.brand-name-svg {
  max-width: 100%;
  height: auto;
}

.brand-name-text {
  font-size: 60px;
  font-weight: 800;
  fill: url(#brandGradient);
  letter-spacing: 8px;
  font-family: 'K2D', sans-serif;
  animation: glow 2s ease-in-out infinite alternate;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #fff;
  font-weight: 300;
  letter-spacing: 2px;
}

.title-main {
  color: #10b981;
}

.title-divider {
  margin: 0 1rem;
  color: #059669;
}

.title-sub {
  color: #34d399;
}

.core-message {
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(16, 185, 129, 0.1));
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(5, 150, 105, 0.2);
}

.message-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.highlight {
  color: #10b981;
  font-weight: 600;
  position: relative;
  padding: 0.5rem 1rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 8px;
}

.separator {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #059669, transparent);
}

.subtitle {
  color: #9ca3af;
  font-size: 1.1rem;
  margin-top: 1rem;
}

.philosophy-quote {
  font-size: 1.25rem;
  color: #6ee7b7;
  font-style: italic;
  margin: 2rem auto;
  padding: 1.5rem;
  max-width: 600px;
  position: relative;
  border-left: 3px solid #059669;
  background: rgba(5, 150, 105, 0.05);
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, #059669, #10b981);
  color: white;
  box-shadow: 0 4px 20px rgba(5, 150, 105, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(5, 150, 105, 0.5);
}

.btn-secondary {
  background: transparent;
  color: #10b981;
  border: 2px solid #059669;
}

.btn-secondary:hover {
  background: rgba(5, 150, 105, 0.1);
  transform: translateY(-2px);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes glow {
  from {
    filter: drop-shadow(0 0 20px rgba(5, 150, 105, 0.5));
  }
  to {
    filter: drop-shadow(0 0 30px rgba(16, 185, 129, 0.8));
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .message-line {
    flex-direction: column;
    gap: 1rem;
  }
  
  .separator {
    width: 2px;
    height: 30px;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
  .brand-name-text {
    font-size: 40px;
  }
}
</style>