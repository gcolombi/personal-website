import { ClipPath } from '@/types/animations';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useNavigationContext from '@/context/navigationContext';
import useTransitionContext from '@/context/transitionContext';
import { useRouter } from 'next-translate-routes';

export default function ClipPathInOut({
    children,
    fade = true,
    durationIn = 1.25,
    durationOut = 0.35,
    delay = 0,
    delayOut = 0,
    ease,
    easeOut,
    clipPath,
    clipPathTo = 'inset(0% 0% 0% 0%)',
    clipPathOut,
    skipOutro,
    watch,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers
}: ClipPath) {
    const { locale } = useRouter();
    const { currentLocale } = useNavigationContext();
    const { timeline, primaryEase } = useTransitionContext();
    const element = useRef<HTMLDivElement | null>(null);
    const animation = useRef<GSAPTween | null>(null);

    const animate = () => {
        const scrollTrigger = watch ? {
            scrollTrigger: {
                trigger: element.current,
                start,
                end,
                scrub,
                markers: markers
            }
        } : {};

        const anim = gsap.fromTo(element.current,
            {
                opacity: fade ? 0 : 1,
                clipPath,
                ease: ease ?? primaryEase
            },
            {
                opacity: 1,
                clipPath: clipPathTo,
                ease: ease ?? primaryEase,
                delay,
                duration: durationIn,
                ...scrollTrigger
            }
        );

        animation.current = anim;
    };

    const animateOutro = () => {
        if (!skipOutro) {
            timeline?.add(
                gsap.to(
                    element.current,
                    {
                        clipPath: clipPathOut ?? clipPath,
                        ease: easeOut ?? primaryEase,
                        delay: delayOut,
                        duration: durationOut
                    }
                ),
                0
            );
        }
    };

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* Intro animation */
            animate();

            /* Outro animation */
            animateOutro();

            gsap.to(element.current, {
                opacity: 1
            });
        });
        return () => ctx.revert();
    }, []);

    useIsomorphicLayoutEffect(() => {
        if (currentLocale !== locale) {
            const ctx = gsap.context(() => {
                /* Kills animation */
                animation.current?.kill();

                const isInViewport = ScrollTrigger.isInViewport(element.current as Element);
                const isAboveViewport = ScrollTrigger.positionInViewport(element.current as Element, 'bottom') <= 0;

                /* Intro animation */
                if (!isInViewport && !isAboveViewport) {
                    animate();
                } else {
                    gsap.set(element.current, {
                        clipPath: clipPathTo
                    });
                    animation.current = null;
                }

                /* Outro animation */
                animateOutro();
            });
            return () => ctx.revert();
        }
    }, [locale]);

    return (
        <div ref={element} style={{ opacity: 0 }}>
            {children}
        </div>
    );
};