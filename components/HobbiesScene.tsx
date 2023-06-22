import { HobbiesSceneProps } from '@/types/hobbies/scene';
import styles from '@/styles/modules/HobbiesScene.module.scss';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, PresentationControls } from '@react-three/drei';

export default function HobbiesScene({
    activeIndex,
    renderDelay = 0,
    models
}: HobbiesSceneProps) {
    const [renderScene, setRenderScene] = useState(!renderDelay);

    useEffect(() => {
        if (renderDelay) {
            setTimeout(() => {
                setRenderScene(true);
            }, renderDelay * 1000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles['c-hobbiesScene']}>
            <Canvas camera={{ fov: 2.5 }} dpr={[1, 2]}>
                <ambientLight intensity={2} />
                <pointLight intensity={2} position={[-4, 10, 10]} />
                <Suspense fallback={<mesh />}>
                    {renderScene &&
                        models.map((Model, index) => (
                            <PresentationControls
                                /* Remount PresentationControls (and Model) to reset rotation */
                                key={activeIndex === index ? `active-${index}` : `passive-${index}`}
                                cursor={true}
                                global={false}
                                speed={activeIndex === index ? 2.5 : 0}
                            >
                                <Model visible={activeIndex === index} />
                            </PresentationControls>
                        ))
                    }
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};