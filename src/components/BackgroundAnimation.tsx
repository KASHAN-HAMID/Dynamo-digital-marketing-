import * as React from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Stars } from "@react-three/drei"
import { motion } from "framer-motion"
import * as THREE from "three"

// Simple animated sphere component
function AnimatedSphere({ position, color, size = 1 }: { 
  position: [number, number, number], 
  color: string, 
  size?: number 
}) {
  const meshRef = React.useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.7} 
          roughness={0.1}
          metalness={0.3}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  )
}

// Simple animated torus component
function AnimatedTorus({ position, color }: { 
  position: [number, number, number], 
  color: string 
}) {
  const meshRef = React.useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.3) * 0.8
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[1.5, 0.3, 16, 32]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.5} 
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

// 3D Scene component
function Scene() {
  return (
    <>
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.6} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#87CEEB" />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#87CEEB" />
      <pointLight position={[0, 0, 10]} intensity={0.3} color="#87CEEB" />

      {/* Animated Stars Background */}
      <Stars radius={300} depth={80} count={1500} factor={8} saturation={0} fade speed={0.8} />

      {/* More 3D Objects with Sky Blue Theme */}
      <AnimatedSphere position={[-4, 2, -2]} color="#87CEEB" size={1.2} />
      <AnimatedSphere position={[4, -1, -3]} color="#4169E1" size={0.8} />
      <AnimatedSphere position={[0, 3, -4]} color="#00BFFF" size={1} />
      <AnimatedSphere position={[-6, -3, -5]} color="#6495ED" size={0.6} />
      <AnimatedSphere position={[5, 4, -6]} color="#1E90FF" size={0.9} />
      
      <AnimatedTorus position={[-2, -2, -1]} color="#87CEEB" />
      <AnimatedTorus position={[3, 1, -2]} color="#4169E1" />
      <AnimatedTorus position={[-4, 3, -3]} color="#00BFFF" />
    </>
  )
}

// Error boundary for 3D canvas
class Canvas3DErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.warn('3D Canvas failed to load:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

// Fallback 2D animation component
function Fallback2DAnimation() {
  return (
    <div className="fixed inset-0 -z-15 overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  )
}

export function BackgroundAnimation() {
  return (
    <>
      {/* 3D Background with Error Boundary */}
      <Canvas3DErrorBoundary fallback={<Fallback2DAnimation />}>
        <div className="fixed inset-0 -z-10 opacity-50">
          <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            gl={{ 
              antialias: true, 
              alpha: true,
              powerPreference: "high-performance"
            }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0)
            }}
          >
            <React.Suspense fallback={null}>
              <Scene />
            </React.Suspense>
          </Canvas>
        </div>
      </Canvas3DErrorBoundary>
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-background via-background/90 to-muted/50" />
      
      {/* Additional Floating Particles */}
      <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
            }}
            animate={{
              y: -100,
              x: [
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="fixed inset-0 -z-15 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
    </>
  )
}