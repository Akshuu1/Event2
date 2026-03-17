import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const SilkRibbon = ({ color, speed, offset, position }) => {
  const meshRef = useRef();

  const curve = useMemo(() => {
    const points = [];
    for (let i = 0; i < 8; i++) {
      points.push(new THREE.Vector3(
        Math.sin(i * 0.8) * 4,
        i * 2 - 8,
        Math.cos(i * 0.8) * 4
      ));
    }
    return new THREE.CatmullRomCurve3(points);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    meshRef.current.rotation.y = t * 0.08;
    meshRef.current.position.y = Math.sin(t * 0.4) * 0.8;
  });

  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <tubeGeometry args={[curve, 32, 0.06, 8, false]} />
        <MeshDistortMaterial
          color={color}
          speed={1.5}
          distort={0.3}
          radius={1}
          transparent
          opacity={0.7}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

const BackgroundScene = () => {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.08) * 0.08;
  });

  return (
    <group ref={group}>
      {/* Optimized: 2 ribbons instead of 4 */}
      <SilkRibbon color="#C2185B" speed={0.3} offset={0} position={[-4, 0, -5]} />
      <SilkRibbon color="#C9A96E" speed={0.25} offset={Math.PI / 2} position={[4, 0, -8]} />

      {/* Optimized: 6 bubbles instead of 15, reduced geometry */}
      {Array.from({ length: 6 }).map((_, i) => (
        <Float key={i} speed={0.4} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[(Math.random() - 0.5) * 18, (Math.random() - 0.5) * 18, (Math.random() - 0.5) * 12 - 5]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshPhysicalMaterial
              roughness={0}
              transmission={1}
              thickness={1}
              color={['#C2185B', '#C9A96E', '#8A9A7B'][i % 3]}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none w-full h-full overflow-hidden bg-[#FAF8F5]">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />

        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} color="#FFFFFF" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#C2185B" />

        <BackgroundScene />

        {/* Removed EffectComposer (Bloom + Noise) — biggest performance win */}
      </Canvas>
    </div>
  );
}
