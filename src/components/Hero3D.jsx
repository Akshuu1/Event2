import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial, OrbitControls, Environment, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ shape = 'sphere', color = '#8CE4FF', size = 1, ...props }) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(time / 4);
    mesh.current.rotation.y = Math.cos(time / 2);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        {...props}
        ref={mesh}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        {shape === 'sphere' ? (
          <sphereGeometry args={[size, 64, 64]} />
        ) : shape === 'torus' ? (
          <torusGeometry args={[size, 0.4, 32, 100]} />
        ) : (
          <boxGeometry args={[size, size, size]} />
        )}
        
        <MeshDistortMaterial
          color={hovered ? '#E62727' : color}
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto h-screen w-full">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8CE4FF" />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FFF799" />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
        >
          {/* Main central shape */}
          <FloatingShape 
            shape="sphere" 
            size={1.5} 
            color="#E62727" 
            position={[0, 0, 0]} 
          />
          
          {/* Secondary floating elements */}
          <FloatingShape 
            shape="torus" 
            size={0.8} 
            color="#8CE4FF" 
            position={[-3, 2, -1]} 
          />
          <FloatingShape 
            shape="torus" 
            size={1} 
            color="#FFF799" 
            position={[3, -1.5, -2]} 
          />
          <FloatingShape 
            shape="sphere" 
            size={0.5} 
            color="#EEFABD" 
            position={[-2.5, -2.5, 1]} 
          />
          <FloatingShape 
            shape="sphere" 
            size={0.4} 
            color="#FDEDED" 
            position={[2, 2.5, 0]} 
          />
        </PresentationControls>

        <Rig />
        <Environment preset="city" />
        
        {/* Particles */}
        <Particles count={40} />
      </Canvas>
    </div>
  );
}

function Particles({ count }) {
  const mesh = useRef();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.05, 12, 12]} />
      <meshStandardMaterial color="#8CE4FF" emissive="#8CE4FF" emissiveIntensity={2} transparent opacity={0.4} />
    </instancedMesh>
  );
}
