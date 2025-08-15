import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh } from 'three';

export const Horse = () => {
  const groupRef = useRef<Group>(null);
  const bodyRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle breathing animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
    
    if (bodyRef.current) {
      // Slight rotation for life-like movement
      bodyRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} castShadow>
      {/* Horse Body */}
      <mesh ref={bodyRef} position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2, 1.2, 0.8]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      {/* Horse Head */}
      <mesh position={[1.2, 0.3, 0]} castShadow>
        <boxGeometry args={[0.8, 0.6, 0.6]} />
        <meshStandardMaterial color="#A0522D" roughness={0.7} />
      </mesh>

      {/* Horse Neck */}
      <mesh position={[0.6, 0.4, 0]} rotation={[0, 0, 0.3]} castShadow>
        <boxGeometry args={[0.8, 0.4, 0.5]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      {/* Horse Legs */}
      {/* Front legs */}
      <mesh position={[0.6, -0.8, 0.3]} castShadow>
        <boxGeometry args={[0.2, 1, 0.2]} />
        <meshStandardMaterial color="#654321" roughness={0.9} />
      </mesh>
      <mesh position={[0.6, -0.8, -0.3]} castShadow>
        <boxGeometry args={[0.2, 1, 0.2]} />
        <meshStandardMaterial color="#654321" roughness={0.9} />
      </mesh>

      {/* Back legs */}
      <mesh position={[-0.6, -0.8, 0.3]} castShadow>
        <boxGeometry args={[0.2, 1, 0.2]} />
        <meshStandardMaterial color="#654321" roughness={0.9} />
      </mesh>
      <mesh position={[-0.6, -0.8, -0.3]} castShadow>
        <boxGeometry args={[0.2, 1, 0.2]} />
        <meshStandardMaterial color="#654321" roughness={0.9} />
      </mesh>

      {/* Horse Tail */}
      <mesh position={[-1.2, 0, 0]} rotation={[0, 0, -0.3]} castShadow>
        <boxGeometry args={[0.6, 0.1, 0.1]} />
        <meshStandardMaterial color="#4A4A4A" roughness={0.9} />
      </mesh>

      {/* Horse Mane */}
      <mesh position={[0.8, 0.7, 0]} rotation={[0, 0, 0.2]} castShadow>
        <boxGeometry args={[0.6, 0.2, 0.3]} />
        <meshStandardMaterial color="#4A4A4A" roughness={0.9} />
      </mesh>

      {/* Horse Ears */}
      <mesh position={[1.4, 0.6, 0.2]} rotation={[0, 0, 0.3]} castShadow>
        <boxGeometry args={[0.2, 0.3, 0.1]} />
        <meshStandardMaterial color="#A0522D" roughness={0.7} />
      </mesh>
      <mesh position={[1.4, 0.6, -0.2]} rotation={[0, 0, 0.3]} castShadow>
        <boxGeometry args={[0.2, 0.3, 0.1]} />
        <meshStandardMaterial color="#A0522D" roughness={0.7} />
      </mesh>

      {/* Eyes */}
      <mesh position={[1.5, 0.4, 0.15]} castShadow>
        <sphereGeometry args={[0.05]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[1.5, 0.4, -0.15]} castShadow>
        <sphereGeometry args={[0.05]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </group>
  );
};