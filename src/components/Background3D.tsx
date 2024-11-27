import { useEffect, useRef } from 'react';
import { Canvas, useFrame,} from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import { gsap } from 'gsap';

function StarField() {
  const points = useRef<any>();

  useFrame((state, delta) => {
    points.current.rotation.x -= delta / 15;
    points.current.rotation.y -= delta / 20;
    points.current.rotation.z += delta / 25;
    points.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
  });

  const positions = new Float32Array(random.inSphere(new Float32Array(5000 * 3), { radius: 3 }));

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={points}
        positions={positions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function FloatingCubes() {
  const cubes = useRef<any[]>([]);

  useEffect(() => {
    cubes.current.forEach((cube, i) => {
      gsap.to(cube.rotation, {
        x: Math.PI * 2,
        y: Math.PI * 2,
        duration: 20 + i * 2,
        repeat: -1,
        ease: "none"
      });

      gsap.to(cube.position, {
        y: cube.position.y + 0.2,
        duration: 2 + i,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    });
  }, []);

  return (
    <group>
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (cubes.current[i] = el)}
          position={[
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3
          ]}
          scale={0.05}
        >
          <boxGeometry />
          <meshPhongMaterial 
            color="#60a5fa"
            wireframe={true}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Background3D() {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={mainRef} className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900/30" />
      
      {/* Main Canvas container */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 2], fov: 75 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100%',
            pointerEvents: 'none'
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          
          {/* Single background group */}
          <group>
            <StarField />
            <FloatingCubes />
          </group>
        </Canvas>
      </div>
    </div>
  );
} 