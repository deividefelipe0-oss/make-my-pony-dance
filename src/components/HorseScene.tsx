import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Text } from '@react-three/drei';
import { Horse } from './Horse';

export const HorseScene = () => {
  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-horse)' }}>
      <Canvas
        camera={{
          position: [4, 2, 4],
          fov: 50,
        }}
        style={{ background: 'linear-gradient(to bottom, #87CEEB, #F5DEB3)' }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />

          {/* Environment */}
          <Environment preset="sunset" />
          
          {/* Horse Model */}
          <Horse />
          
          {/* Ground */}
          <ContactShadows
            position={[0, -1.5, 0]}
            scale={20}
            blur={2}
            far={4}
            resolution={256}
            color="#8B4513"
            opacity={0.6}
          />
          
          {/* Ground plane */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color="#D2B48C" />
          </mesh>
          
          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={10}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};