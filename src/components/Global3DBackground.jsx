import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Environment, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';

// Silk Ribbon Component
function SilkRibbon({ position, color, speed = 1, factor = 0.5 }) {
  const mesh = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mesh.current.rotation.x = Math.sin(t * speed * 0.2) * 0.1;
    mesh.current.rotation.y = t * speed * 0.1;
    mesh.current.position.y = position[1] + Math.sin(t * speed * 0.5) * 0.5;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={position}>
        <torusKnotGeometry args={[1.5, 0.02, 128, 32, 2, 3]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          transmission={0.8}
          thickness={2}
          transparent
          opacity={0.7}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Crystal Prism Component
function CrystalPrism({ position, size = 1, speed = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * speed * 0.3;
    ref.current.rotation.y = t * speed * 0.5;
    ref.current.position.y = position[1] + Math.sin(t * speed) * 0.2;
  });

  return (
    <Float speed={speed * 3} rotationIntensity={2} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[size, 0]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          metalness={0.1}
          roughness={0}
          transmission={0.9}
          thickness={1}
          ior={1.5}
          reflectivity={1}
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
}

// Champagne Bokeh Particles
function ChampagneBokeh() {
  const count = 300;
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 40,
        y: (Math.random() - 0.5) * 40,
        z: (Math.random() - 0.5) * 20 - 10,
        speed: 0.01 + Math.random() * 0.02,
        scale: 0.1 + Math.random() * 0.3,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    particles.forEach((p, i) => {
      p.y += p.speed;
      if (p.y > 20) p.y = -20;
      dummy.position.set(p.x + Math.sin(t + i) * 0.2, p.y, p.z);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color="#FFF799"
        emissive="#FFF799"
        emissiveIntensity={1}
        transparent
        opacity={0.1}
      />
    </instancedMesh>
  );
}

function Scene() {
  const group = useRef();
  const { mouse } = useThree();

  useFrame((state) => {
    const scrollY = window.scrollY;
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, scrollY * 0.005, 0.1);

    // Smooth mouse parallax
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouse.y * 0.05, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.x * 0.05, 0.05);
  });

  return (
    <group ref={group}>
      <SilkRibbon position={[-12, 6, -15]} color="#E62727" speed={0.5} factor={0.6} />
      <SilkRibbon position={[10, -4, -18]} color="#8CE4FF" speed={0.8} factor={0.4} />
      <SilkRibbon position={[0, -15, -20]} color="#FFF799" speed={0.4} factor={0.5} />
      <SilkRibbon position={[8, 12, -25]} color="#EEFABD" speed={0.3} factor={0.7} />

      <CrystalPrism position={[-4, -2, -6]} size={0.6} speed={1.2} />
      <CrystalPrism position={[4, 5, -8]} size={0.8} speed={0.9} />
      <CrystalPrism position={[0, 8, -12]} size={1.2} speed={0.5} />
      <CrystalPrism position={[-7, -8, -10]} size={0.5} speed={1.5} />

      <ChampagneBokeh />
    </group>
  );
}

export default function Global3DBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden" style={{ background: '#FFFDF1' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFFDF1" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#8CE4FF" />
        <spotLight position={[0, 20, 0]} intensity={2} color="#FDEDED" />

        <Scene />
        <Environment preset="studio" />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={1} intensity={1.5} levels={9} mipmapBlur />
          <ChromaticAberration offset={[0.002, 0.002]} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
