import { HobbiesSceneProps } from '@/types/interests/scene';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PresentationControls } from '@react-three/drei';

export default function HobbiesScene({
    activeIndex,
    className,
    renderDelay = 0
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
        <div className="temporary-class">
            <Canvas camera={{ fov: 2.5 }} dpr={[1, 2]}>
                <ambientLight intensity={2} />
                <pointLight intensity={2} position={[-4, 10, 10]} />
                <Suspense fallback={<mesh />}>
                    {renderScene &&
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
                            {/* <Model /> */}
                        </PresentationControls>
                    }
                </Suspense>
            </Canvas>
        </div>
    );
};