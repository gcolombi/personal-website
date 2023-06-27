import { ModelProps } from '@/types/hobbies/models';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { GLTF } from 'three-stdlib';

export default function Helmet({
    visible = true
}: ModelProps) {
    const groupRef = useRef<THREE.Mesh & Group>(null);
    const { scene } = useGLTF('/static/models/helmet/stormtrooper.glb') as unknown as GLTF;

    useFrame(() => {
        const group = groupRef.current;

        if (visible && group) {
            const scaleX = group.scale.x;

            if (scaleX < 0.3) {
                const currScale = scaleX + (0.3 - scaleX) * 0.09;
                group.scale.set(currScale, currScale, currScale);
            }
        }
    });

    return (
        <>
            {/* Use scale to control the size of the 3D model */}
            <group
                ref={groupRef}
                dispose={null}
                scale={0.2}
                position={[0, -0.072, 0]}
                rotation={[0, Math.PI * 1.85, 0]}
                visible={visible}
                renderOrder={visible ? 1 : 0}
            >
                {/* Transparent box to avoid empty spaces in the group. PresentationControls don't grab empty spaces */}
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial opacity={0} transparent />
                </mesh>
                <primitive object={scene} />
            </group>
        </>
    );
};