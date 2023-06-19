import { LoaderProps } from '@/types/components/global';
import styles from '@/styles/modules/Loader.module.scss';
import gsap from 'gsap';
import CustomEase from 'gsap/dist/CustomEase';
import { useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(CustomEase);
}

export default function Loader({
    setIsLoading,
    setIsReady
}: LoaderProps) {
    const loaderRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(loaderRef.current, {
                ease: CustomEase.create('primaryEase', 'M0,0 C0.62,0.05 0.01,0.99 1,1'),
                scaleY: 0,
                transformOrigin: '50% 0',
                willChange: 'transform',
                delay: 0.8,
                duration: 1.25,
                onStart: () => {
                    setIsReady(true);
                },
                onComplete: () => {
                    setIsLoading(false);
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className={styles['c-loader']} ref={loaderRef}></div>
    );
};