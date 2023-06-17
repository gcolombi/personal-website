import MetaData from '@/components/MetaData';
import BasicHeader from '@/components/BasicHeader';
import Form from '@/components/form/Form';

import { Ref, Suspense, useRef } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls, PresentationControls, useGLTF } from "@react-three/drei"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { GLTF } from "three-stdlib";
import { BufferGeometry, Group, Mesh } from 'three';

export default function Contact() {
    return (
        <>
            <MetaData
                title="Contact | Gerard Colombi"
            />
            <BasicHeader
                title="Contact"
                wysiwyg="Is there something on your mind you'd like to talk about? Whether it's related to work, just a casual conversation or need help with some code. Feel free to contact me at anytime."
            />

            <section
                className="u-spacing--responsive"
                // style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <div className="xbox">
                    {/* <Canvas
                        dpr={[1, 2]}
                        camera={{ fov: 2.5 }}
                    >
                        <PresentationControls
                            cursor={false}
                            global={false}
                            speed={2.5}
                        >
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model />
                                <Environment preset="city" />
                            </Suspense>
                        </PresentationControls>

                    </Canvas> */}
                    <Canvas camera={{ fov: 2.5 }} dpr={[1, 2]}>
                        <ambientLight intensity={2} />
                        <pointLight intensity={2} position={[-4, 10, 10]} />
                        <Suspense fallback={<mesh />}>
                            <PresentationControls
                                // remount PresentationControls (and Model) to reset rotation and preserve initial animation
                                // key={
                                //     activeIndex === index ? `active-${index}` : `passive-${index}`
                                // }
                                cursor={true}
                                global={false}
                                // speed={activeIndex === index ? 2.5 : 0}
                                speed={2.5}
                            >
                                <Model />
                            </PresentationControls>
                        </Suspense>
                    </Canvas>
                </div>
            </section>



            <Form />
        </>
    );
};

const Model = ({ visible = true }) => {
    const groupRef = useRef<THREE.Mesh & Group>(null);

    const { scene } = useGLTF('static/models/xbox_controller/source/scene.glb') as unknown as GLTF;
    // const { scene } = useGLTF('static/models/headphone/headphones.glb') as unknown as GLTF;

    useFrame(() => {
        const group = groupRef.current;

        if (visible && group) {
            const scaleX = group.scale.x;

            if (scaleX < 0.7) {
                const currScale = scaleX + (0.7 - scaleX) * 0.09;
                group.scale.set(currScale, currScale, currScale);
            }
        }
    });

    return (
        <>
            {/* Use scale to control the size of the 3D model */}
            <group
                // ref={groupRef}
                dispose={null}
                // scale={0.65}
                // position={[0.02, 0.03, 0]}

                // blade runner
                // scale={0.05}
                // position={[0.02, 0.03, 0]}

                // controller
                scale={0.25}
                position={[0.015, 0, 0]}

                // headphone
                // scale={0.40}
                // position={[0, -0.07, 0]}

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