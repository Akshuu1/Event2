import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Environment, MeshReflectorMaterial, Sparkles, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Ribbon({ position, color, speed = 1 }) {
  const mesh = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mesh.current.rotation.y = t * speed * 0.2;
    mesh.current.position.y = position[1] + Math.sin(t * speed) * 0.5;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={position}>
        <torusKnotGeometry args={[2, 0.03, 150, 20]} />
        <MeshDistortMaterial
          color={color}
          speed={speed * 2}
          distort={0.4}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function Scene({ colorA, colorB, showReflector = true }) {
  const { mouse } = useThree();
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.x * 0.2, 0.1);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -mouse.y * 0.1, 0.1);
  });

  return (
    <group ref={group}>
      {/* Reflective Floor */}
      {showReflector && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#FFFDF1"
            metalness={0.5}
          />
        </mesh>
      )}

      {/* Decorative Ribbons */}
      <Ribbon position={[-6, 2, -5]} color="#FF5656" speed={0.5} />
      <Ribbon position={[6, -1, -8]} color="#FEB05D" speed={0.7} />
      <Ribbon position={[0, 5, -12]} color="#C7EABB" speed={0.3} />
      <Ribbon position={[-10, -5, -15]} color="#F8FAB4" speed={0.4} />

      <Sparkles count={80} scale={20} size={1} speed={0.4} color="#FF5656" />
    </group>
  );
}

export default function Decorative3DScene({ colorA = "#E62727", colorB = "#8CE4FF", showReflector = true, className = "" }) {
  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <Canvas dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} color={colorB} />

        <Scene colorA={colorA} colorB={colorB} showReflector={showReflector} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
