<template>
  <canvas ref="canvas" id="bg-canvas" class="home-canvas"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

const canvas = ref(null)
let scene, camera, renderer
let geometryGroups = []
let shapes = []
let animationId
let mouseX = 0
let mouseY = 0

const initThreeScene = () => {
  if (!canvas.value) return
  
  // Scene setup
  scene = new THREE.Scene()
  scene.fog = new THREE.Fog(0x000000, 1, 1000)
  
  // Camera setup
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 30
  
  // Renderer setup
  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  
  // Lighting
  const ambientLight = new THREE.AmbientLight(0x059669, 0.3)
  scene.add(ambientLight)
  
  const pointLight = new THREE.PointLight(0x10b981, 1, 100)
  pointLight.position.set(10, 10, 10)
  scene.add(pointLight)
  
  // Create geometric shapes
  createGeometricShapes()
  
  // Start animation
  animate()
}

const createGeometricShapes = () => {
  const geometries = [
    new THREE.TetrahedronGeometry(2, 0),
    new THREE.OctahedronGeometry(1.5, 0),
    new THREE.IcosahedronGeometry(1.5, 0),
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.ConeGeometry(1.5, 3, 4),
    new THREE.TorusGeometry(1.5, 0.5, 4, 8)
  ]
  
  const material = new THREE.MeshPhongMaterial({
    color: 0x059669,
    emissive: 0x059669,
    emissiveIntensity: 0.1,
    shininess: 100,
    wireframe: true,
    transparent: true,
    opacity: 0.3
  })
  
  geometries.forEach((geometry, index) => {
    const mesh = new THREE.Mesh(geometry, material)
    
    // Random positioning in 3D space
    const angle = (index / geometries.length) * Math.PI * 2
    const radius = 15 + Math.random() * 10
    mesh.position.x = Math.cos(angle) * radius
    mesh.position.y = (Math.random() - 0.5) * 20
    mesh.position.z = Math.sin(angle) * radius + (Math.random() - 0.5) * 10
    
    // Random rotation speeds
    mesh.userData = {
      rotationSpeedX: (Math.random() - 0.5) * 0.01,
      rotationSpeedY: (Math.random() - 0.5) * 0.01,
      rotationSpeedZ: (Math.random() - 0.5) * 0.01,
      floatSpeed: Math.random() * 0.002 + 0.001,
      floatOffset: Math.random() * Math.PI * 2
    }
    
    shapes.push(mesh)
    scene.add(mesh)
  })
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  
  // Rotate camera based on mouse position
  if (camera) {
    camera.position.x += (mouseX * 0.05 - camera.position.x) * 0.05
    camera.position.y += (-mouseY * 0.05 - camera.position.y) * 0.05
    camera.lookAt(scene.position)
  }
  
  // Animate shapes
  shapes.forEach((shape, index) => {
    shape.rotation.x += shape.userData.rotationSpeedX
    shape.rotation.y += shape.userData.rotationSpeedY
    shape.rotation.z += shape.userData.rotationSpeedZ
    
    // Floating animation
    const time = Date.now() * shape.userData.floatSpeed
    shape.position.y += Math.sin(time + shape.userData.floatOffset) * 0.01
  })
  
  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }
}

const handleResize = () => {
  if (!camera || !renderer) return
  
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

const handleMouseMove = (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1
  mouseY = (event.clientY / window.innerHeight) * 2 - 1
}

onMounted(() => {
  initThreeScene()
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
  
  if (scene) {
    scene.traverse((child) => {
      if (child.geometry) child.geometry.dispose()
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(material => material.dispose())
        } else {
          child.material.dispose()
        }
      }
    })
  }
})
</script>

<style scoped>
.home-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(135deg, #0a0a0a 0%, #0d1117 100%);
}
</style>