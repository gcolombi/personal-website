import { ModelProps } from '@/types/hobbies/models';
import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { GLTF } from 'three-stdlib';

export default function Controller({
    visible
}: ModelProps) {
    const groupRef = useRef<THREE.Mesh & Group>(null);
    const { scene } = useGLTF('static/models/controller/source/scene.glb') as unknown as GLTF;

    useFrame(() => {
        const group = groupRef.current;

        if (visible && group) {
            const scaleX = group.scale.x;

            if (scaleX < 0.25) {
                const currScale = scaleX + (0.25 - scaleX) * 0.09;
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
                scale={0.15}
                position={[0.015, 0, 0]}
                rotation={[0, Math.PI * 1.79, 0]}
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