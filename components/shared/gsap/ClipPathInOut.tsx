import { ClipPath } from '@/types/animations';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef, useState } from 'react';
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
    const [animation, setAnimation] = useState<GSAPTween | null>(null);

    useIsomorphicLayoutEffect(() => {
        const scrollTrigger = watch ? {
            scrollTrigger: {
                trigger: element.current,
                start,
                end,
                scrub,
                markers: markers
            }
        } : {};

        const ctx = gsap.context(() => {
            /* Intro animation */
            gsap.fromTo(element.current,
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

            /* Outro animation */
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

            gsap.to(element.current, {
                opacity: 1
            });

        }, element);
        return () => ctx.revert();
    }, []);

    useIsomorphicLayoutEffect(() => {
        if (currentLocale !== locale) {
            /* Kill old animation */
            animation?.kill();

            const isInViewport = ScrollTrigger.isInViewport(element.current as Element);
            const isAboveViewport = ScrollTrigger.positionInViewport(element.current as Element, 'bottom') <= 0;
            let anim: GSAPTween | null = null;

            /* Intro animation */
            if (!isInViewport && !isAboveViewport) {
                const scrollTrigger = watch ? {
                    scrollTrigger: {
                        trigger: element.current,
                        start,
                        end,
                        scrub,
                        markers: markers
                    }
                } : {};
                
                anim = gsap.fromTo(element.current,
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

                setAnimation(anim);
            } else {
                setAnimation(anim);
            }

            /* Outro animation */
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
        }
    }, [locale]);

    return (
        <div ref={element} style={{ opacity: 0 }}>
            {children}
        </div>
    );
};