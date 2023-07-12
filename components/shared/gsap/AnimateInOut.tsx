import { Animation } from '@/types/animations';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useRef, useState } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useNavigationContext from '@/context/navigationContext';
import useTransitionContext from '@/context/transitionContext';
import { useRouter } from 'next-translate-routes';

function AnimateInOut({
    children,
    durationIn,
    durationOut,
    delay,
    delayOut,
    easeOut,
    from,
    to,
    outro,
    skipOutro,
    watch,
    start,
    end,
    scrub,
    markers
}: Animation) {
    const { locale } = useRouter();
    const { currentLocale } = useNavigationContext();
    const { timeline } = useTransitionContext();
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
            const anim = gsap.to(element.current, {
                ...to,
                delay,
                duration: durationIn,
                ...scrollTrigger
            });

            setAnimation(anim);

            /* Outro animation */
            if (!skipOutro) {
                const outroProperties = outro ?? from;
                timeline?.add(
                    gsap.to(element.current, {
                        ease: easeOut,
                        ...outroProperties,
                        delay: delayOut,
                        duration: durationOut
                    }),
                    0
                );
            }
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
                gsap.set(element.current, {
                    ...from
                });
                
                const scrollTrigger = watch ? {
                    scrollTrigger: {
                        trigger: element.current,
                        start,
                        end,
                        scrub,
                        markers: markers
                    }
                } : {};

                anim = gsap.to(element.current, {
                    ...to,
                    delay,
                    duration: durationIn,
                    ...scrollTrigger
                });

                setAnimation(anim);
            } else {
                setAnimation(anim);
            }

            /* Outro animation */
            if (!skipOutro) {
                const outroProperties = outro ?? from;
                timeline?.add(
                    gsap.to(element.current, {
                        ease: easeOut,
                        ...outroProperties,
                        delay: delayOut,
                        duration: durationOut
                    }),
                    0
                );
            }
        }
    }, [locale]);

    return (
        <div ref={element} style={from}>
            {children}
        </div>
    )
}

export default React.memo(AnimateInOut);