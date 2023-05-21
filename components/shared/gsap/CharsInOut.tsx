import { Chars } from '@/types/animations';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import { useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useTransitionContext from '@/context/transitionContext';

export default function CharsInOut({
    overflowHidden = true,
    children,
    durationIn = 1.25,
    durationOut = 0.5,
    delay = 0,
    delayOut = 0,
    increment = 0.07,
    ease,
    easeOut,
    target,
    skipOutro,
    watch = false,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers
}: Chars) {
    const { timeline, primaryEase } = useTransitionContext();
    const element = useRef<HTMLDivElement>(null);

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
            const splitText = new SplitText(target);
            const chars = splitText.chars;

            let initialDelay = delay;
            let initialDelayOut = delayOut + increment * chars.length;

            chars.forEach(char => {
                /* Intro animation */
                gsap.fromTo(
                    char,
                    {
                        y: '100%'
                    },
                    {
                        y: 0,
                        willChange: 'transform',
                        ease: ease ?? primaryEase,
                        delay: initialDelay,
                        duration: durationIn,
                        ...scrollTrigger
                    }
                );

                initialDelay += increment;

                /* Outro animation */
                if (!skipOutro) {
                    timeline?.add(
                        gsap.to(
                            char,
                            {
                                y: '100%',
                                ease: easeOut ?? primaryEase,
                                delay: initialDelayOut,
                                duration: durationOut
                            }
                        ),
                        0
                    );
                }

                initialDelayOut -= increment;
            });


            gsap.to(element.current, {
                opacity: 1
            });

        }, element);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={element} style={{ opacity: 0, overflow: overflowHidden ? 'hidden' : 'visible' }}>
            {children}
        </div>
    );
}