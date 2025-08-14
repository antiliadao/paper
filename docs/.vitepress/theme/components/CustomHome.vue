<template>
  <div class="custom-home" style="font-family: 'K2D', sans-serif !important;">
    <canvas ref="canvas" id="bg-canvas"></canvas>
    
    <div class="content-wrapper">
      <!-- Single Page Hero -->
      <section class="hero-section">
        <div class="hero-content">
          <div class="logo-container">
            <img src="/logo.png" alt="Antilia Logo" class="hero-logo" />
          </div>
          
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
          
          <h2 class="hero-title">
            <span class="title-zh">蚂蚁家园</span>
            <span class="title-divider">·</span>
            <span class="title-contract">永恒契约</span>
          </h2>
          
          <div class="core-message">
            <div class="message-line">
              <span class="highlight">一次部署</span>
              <span class="separator"></span>
              <span class="highlight">永不更改</span>
            </div>
            <p class="subtitle">这是一个真正可以传承的去中心化生态</p>
          </div>
          
          <blockquote class="philosophy-quote">
            "如蚂蚁般协作，如契约般永恒"
          </blockquote>
          
          <div class="hero-actions">
            <a href="/paper/preface" class="btn btn-primary">
              <span>进入白皮书</span>
            </a>
            <a href="/paper/economics" class="btn btn-secondary">
              <span>经济模型</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

let gsap, ScrollTrigger

const canvas = ref(null)
let scene, camera, renderer
let geometryGroups = []
let shapes = []
let animationId
let mouseX = 0
let mouseY = 0

onMounted(async () => {
  // Dynamically import GSAP to avoid SSR issues
  const gsapModule = await import('gsap')
  const scrollTriggerModule = await import('gsap/ScrollTrigger')
  gsap = gsapModule.default
  ScrollTrigger = scrollTriggerModule.ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)
  
  initThreeScene()
  initAnimations()
  initScrollEffects()
  initNumberCounters()
  
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  if (renderer) {
    renderer.dispose()
  }
})

function initThreeScene() {
  // Scene setup
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ 
    canvas: canvas.value, 
    alpha: true, 
    antialias: true 
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x0f1512, 0.95)
  
  camera.position.z = 15
  
  // Create parallax groups
  for (let i = 0; i < 3; i++) {
    const group = new THREE.Group()
    scene.add(group)
    geometryGroups.push(group)
  }
  
  // Materials with green theme
  const materials = [
    new THREE.MeshBasicMaterial({ 
      color: 0x059669, 
      wireframe: true,
      transparent: true,
      opacity: 0.9
    }),
    new THREE.MeshBasicMaterial({ 
      color: 0x10b981, 
      wireframe: true,
      transparent: true,
      opacity: 0.7
    }),
    new THREE.MeshBasicMaterial({ 
      color: 0x34d399, 
      wireframe: true,
      transparent: true,
      opacity: 0.5
    })
  ]
  
  // Create geometric shapes
  createShapes(materials)
  
  // Start animation
  animate()
}

function createShapes(materials) {
  const geometries = [
    () => new THREE.OctahedronGeometry(1),
    () => new THREE.TetrahedronGeometry(1),
    () => new THREE.IcosahedronGeometry(1),
    () => new THREE.CylinderGeometry(0.5, 0.5, 1, 6),
    () => new THREE.TorusGeometry(0.7, 0.3, 6, 12)
  ]
  
  // Create shapes for each layer
  for (let layer = 0; layer < 3; layer++) {
    const count = 15 + layer * 10
    for (let i = 0; i < count; i++) {
      const geoFn = geometries[Math.floor(Math.random() * geometries.length)]
      const geometry = geoFn()
      const material = materials[layer]
      const mesh = new THREE.Mesh(geometry, material)
      
      const spread = 25 + layer * 15
      mesh.position.set(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * 20 - layer * 5
      )
      
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      
      const scale = 0.5 + Math.random() * 1.5
      mesh.scale.set(scale, scale, scale)
      
      geometryGroups[layer].add(mesh)
      shapes.push({
        mesh,
        layer,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        floatSpeed: 0.001 + Math.random() * 0.002,
        floatOffset: Math.random() * Math.PI * 2
      })
    }
  }
}

function animate() {
  animationId = requestAnimationFrame(animate)
  
  // Parallax effect with mouse
  geometryGroups[0].rotation.x += (mouseY * 0.1 - geometryGroups[0].rotation.x) * 0.1
  geometryGroups[0].rotation.y += (mouseX * 0.1 - geometryGroups[0].rotation.y) * 0.1
  geometryGroups[1].rotation.x += (mouseY * 0.05 - geometryGroups[1].rotation.x) * 0.1
  geometryGroups[1].rotation.y += (mouseX * 0.05 - geometryGroups[1].rotation.y) * 0.1
  geometryGroups[2].rotation.x += (mouseY * 0.02 - geometryGroups[2].rotation.x) * 0.1
  geometryGroups[2].rotation.y += (mouseX * 0.02 - geometryGroups[2].rotation.y) * 0.1
  
  // Individual shape animations
  const time = Date.now()
  shapes.forEach(({ mesh, rotationSpeed, floatSpeed, floatOffset }) => {
    mesh.rotation.x += rotationSpeed
    mesh.rotation.y += rotationSpeed * 0.7
    mesh.position.y += Math.sin(time * floatSpeed + floatOffset) * 0.01
  })
  
  renderer.render(scene, camera)
}

function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function handleMouseMove(event) {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1
}

function initAnimations() {
  if (!gsap) return
  
  // Animate hero content
  gsap.fromTo('.logo-container', 
    { 
      scale: 0, 
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.2, 
      delay: 0.2,
      ease: 'back.out(1.7)'
    }
  )
  
  gsap.from('.brand-name-wrapper', { 
    y: 30, 
    opacity: 0, 
    duration: 1, 
    delay: 0.5 
  })
  
  gsap.from('.hero-title', { 
    y: 30, 
    opacity: 0, 
    duration: 1, 
    delay: 0.5 
  })
  
  gsap.from('.core-message', { 
    y: 30, 
    opacity: 0, 
    duration: 1, 
    delay: 0.7 
  })
  
  gsap.from('.philosophy-quote', { 
    scale: 0.9, 
    opacity: 0, 
    duration: 1.2, 
    delay: 0.9,
    ease: 'power2.out'
  })
  
  gsap.from('.hero-actions', { 
    y: 30, 
    opacity: 0, 
    duration: 1, 
    delay: 1.1 
  })
}

function initScrollEffects() {
  // Simplified - no scroll effects needed for single page
}

function initNumberCounters() {
  // Removed - not needed for simplified version
}
</script>

<style scoped>
.custom-home {
  min-height: 100vh;
  background: #0f1512;
  color: #ffffff;
  overflow-x: hidden;
  font-family: 'K2D', -apple-system, BlinkMacSystemFont, sans-serif !important;
  position: relative;
  width: 100%;
  max-width: 100vw;
}

.custom-home * {
  font-family: inherit !important;
}

#bg-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.content-wrapper {
  position: relative;
  z-index: 10;
}

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.hero-content {
  text-align: center;
  max-width: 900px;
}

.brand-name-wrapper {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container {
  margin: 0 auto 1rem;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
}

.hero-logo {
  width: 120px;
  height: 120px;
  display: block;
  filter: drop-shadow(0 0 40px rgba(5, 150, 105, 0.6));
  transition: filter 0.3s ease, transform 0.3s ease;
  animation: float 6s ease-in-out infinite;
}

.hero-logo:hover {
  filter: drop-shadow(0 0 60px rgba(5, 150, 105, 0.8));
  transform: scale(1.05);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.brand-name-svg {
  max-width: 100%;
  height: auto;
}

.brand-name-text {
  font-family: 'K2D', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  fill: url(#brandGradient);
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .brand-name-svg {
    width: 300px;
    height: 60px;
  }
  
  .brand-name-text {
    font-size: 3rem;
  }
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.title-zh {
  color: #ffffff;
}

.title-divider {
  color: #059669;
  font-weight: 300;
}

.title-contract {
  color: #10b981;
}

.core-message {
  margin-bottom: 3rem;
}

.message-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.highlight {
  font-size: clamp(1.5rem, 3.5vw, 2.5rem);
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border: 2px solid #059669;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(16, 185, 129, 0.05));
}

.separator {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #059669, transparent);
}

.subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: #9ca3af;
  line-height: 1.6;
}

.philosophy-quote {
  font-size: clamp(1.3rem, 3vw, 2rem);
  font-style: italic;
  color: #6b7280;
  margin: 3rem 0;
  position: relative;
  padding: 0 2rem;
}

.philosophy-quote::before,
.philosophy-quote::after {
  content: '"';
  font-size: 3rem;
  color: #059669;
  opacity: 0.3;
  position: absolute;
}

.philosophy-quote::before {
  top: -10px;
  left: -20px;
}

.philosophy-quote::after {
  bottom: -30px;
  right: -20px;
}

.hero-actions {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 3rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn-primary {
  background: linear-gradient(135deg, #059669, #10b981);
  color: white;
  box-shadow: 0 4px 20px rgba(5, 150, 105, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 30px rgba(5, 150, 105, 0.5);
}

.btn-secondary {
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  margin-left: 1rem;
  box-shadow: 0 4px 20px rgba(5, 150, 105, 0.2);
}

.btn-secondary:hover {
  background: rgba(5, 150, 105, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 6px 30px rgba(5, 150, 105, 0.4);
  border-color: #059669;
}

/* 平板和小屏幕适配 */
@media (max-width: 768px) {
  .core-message {
    padding: 0 1rem;
  }
  
  .message-line {
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
  
  .highlight {
    font-size: 1.2rem;
    padding: 0.4rem 1rem;
  }
  
  .separator {
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #059669, transparent);
  }
  
  .hero-actions {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 0 1rem;
    max-width: 400px;
    margin: 3rem auto 0;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
    padding: 1rem 2rem;
    font-size: 1rem;
  }
  
  .btn-secondary {
    margin-left: 0;
    width: 100%;
  }
}

/* 手机小屏幕特别优化 */
@media (max-width: 480px) {
  .message-line {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .highlight {
    font-size: 1.1rem;
    padding: 0.35rem 0.8rem;
    width: auto;
    min-width: 140px;
    text-align: center;
  }
  
  .separator {
    width: 2px;
    height: 20px;
    background: linear-gradient(180deg, transparent, #059669, transparent);
  }
  
  .subtitle {
    font-size: 0.9rem;
    padding: 0 1rem;
  }
  
  .hero-actions {
    padding: 0 1.5rem;
    gap: 0.75rem;
  }
  
  .btn {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .highlight {
    font-size: 1.8rem;
  }
  
  .philosophy-quote {
    padding: 0 1rem;
  }
}
</style>