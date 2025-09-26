import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

interface ProductMeshProps {
  rotationSpeed?: number
}

function ProductMesh({ rotationSpeed = 1 }: ProductMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005 * rotationSpeed
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1

      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1)
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshPhysicalMaterial
          color="#0ea5e9"
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.1}
          thickness={0.5}
        />
      </mesh>
    </Float>
  )
}

function ProductScene() {
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    // Check for low-performance devices
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') as WebGLRenderingContext || canvas.getContext('experimental-webgl') as WebGLRenderingContext

    if (!gl) {
      setIsLowPerformance(true)
      return
    }

    try {
      const renderer = gl.getParameter(gl.RENDERER) as string
      const lowPerformanceGPUs = ['intel', 'software', 'mesa']

      if (renderer && lowPerformanceGPUs.some(gpu => renderer.toLowerCase().includes(gpu))) {
        setIsLowPerformance(true)
      }
    } catch (error) {
      setIsLowPerformance(true)
    }

    // Cleanup
    canvas.remove()
  }, [])

  if (isLowPerformance) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-64 h-64 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full animate-pulse" />
      </div>
    )
  }

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      }}
    >
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />

        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <spotLight
          position={[-5, 5, 0]}
          intensity={0.5}
          angle={0.3}
          penumbra={1}
          color="#0ea5e9"
        />

        <ProductMesh />

        <Environment preset="city" />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate={false}
          dampingFactor={0.05}
        />
      </Suspense>
    </Canvas>
  )
}

export default ProductScene