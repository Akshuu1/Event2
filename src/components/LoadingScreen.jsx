import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, MeshDistortMaterial, MeshWobbleMaterial, Center, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';

function CinematicLogo() {
  const mesh = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    mesh.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.02);
  });

  return (
    <Center top>
      <Float speed={5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text
          font="https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/outfit/static/Outfit-Black.ttf"
          fontSize={1.2}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          letterSpacing={-0.05}
        >
          ÉLANCE
        </Text>
        <mesh ref={mesh} position={[0, -0.1, -0.5]}>
          <planeGeometry args={[10, 4]} />
          <MeshDistortMaterial
            color="#000000"
            speed={2}
            distort={0.2}
            opacity={0.02}
            transparent
          />
        </mesh>
      </Float>
    </Center>
  );
}

function FloatingCrystals() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <Float
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5
          ]}
          speed={Math.random() * 2 + 1}
          rotationIntensity={2}
          floatIntensity={1}
        >
          <mesh rotation={[Math.random(), Math.random(), 0]}>
            <icosahedronGeometry args={[0.2, 0]} />
            <meshPhysicalMaterial
              color="#FFFFFF"
              transmission={0.8}
              roughness={0}
              thickness={1}
              transparent
              opacity={0.4}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-cream overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
          <ambientLight intensity={2} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          
          <CinematicLogo />
          <FloatingCrystals />
          <Sparkles count={40} scale={10} size={1} speed={0.2} color="#000000" opacity={0.2} />
        </Canvas>
      </div>

      {/* Overlay Text */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <h1 className="font-heading text-8xl md:text-[12rem] font-black tracking-tighter text-black opacity-[0.03] leading-none">
            ÉLANCE
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="text-black/30 font-body text-[10px] tracking-[0.6em] uppercase mb-16 font-black"
        >
          Exceptional Celebrations
        </motion.p>

        {/* Minimal progress bar */}
        <div className="w-64 h-[2px] bg-black/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-black rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
}
