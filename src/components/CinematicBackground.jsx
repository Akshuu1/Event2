import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import * as THREE from 'three';

const SilkRibbon = ({ color, speed, offset, position }) => {
  const meshRef = useRef();
  
  const curve = useMemo(() => {
    const points = [];
    for (let i = 0; i < 10; i++) {
      points.push(new THREE.Vector3(
        Math.sin(i * 0.8) * 4,
        i * 2 - 10,
        Math.cos(i * 0.8) * 4
      ));
    }
    return new THREE.CatmullRomCurve3(points);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    meshRef.current.rotation.y = t * 0.1;
    meshRef.current.position.y = Math.sin(t * 0.5) * 1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <tubeGeometry args={[curve, 64, 0.08, 12, false]} />
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.4}
          radius={1}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

const BackgroundScene = () => {
    const group = useRef();
    
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        group.current.rotation.y = Math.sin(t * 0.1) * 0.1;
    });

    return (
        <group ref={group}>
            {/* Main Silk Ribbons */}
            <SilkRibbon color="#FF5656" speed={0.4} offset={0} position={[-4, 0, -5]} />
            <SilkRibbon color="#FEB05D" speed={0.3} offset={Math.PI / 2} position={[4, 0, -8]} />
            <SilkRibbon color="#C7EABB" speed={0.5} offset={Math.PI} position={[0, -5, -6]} />
            <SilkRibbon color="#FD7979" speed={0.25} offset={Math.PI * 1.5} position={[-6, -4, -10]} />
            
            {/* Refractive Bubbles for depth */}
            {Array.from({ length: 15 }).map((_, i) => (
                <Float key={i} speed={0.5} rotationIntensity={1} floatIntensity={1}>
                    <mesh position={[(Math.random()-0.5)*20, (Math.random()-0.5)*20, (Math.random()-0.5)*15]}>
                        <sphereGeometry args={[0.15, 32, 32]} />
                        <meshPhysicalMaterial 
                            roughness={0}
                            transmission={1}
                            thickness={1}
                            color={['#FF5656', '#FEB05D', '#C7EABB'][i % 3]}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
};

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none w-full h-full overflow-hidden bg-[#FCF8F8]">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
        
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#FFFFFF" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#FF5656" />

        <BackgroundScene />
        
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.4} intensity={0.5} radius={0.5} />
          <Noise opacity={0.02} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
