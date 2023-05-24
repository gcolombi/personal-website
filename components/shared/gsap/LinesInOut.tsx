import { Lines } from '@/types/animations';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import { useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useTransitionContext from '@/context/transitionContext';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}

export default function LinesInOut({
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
}: Lines) {
    const { timeline, primaryEase } = useTransitionContext();
    const element = useRef<HTMLDivElement | null>(null);

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
            const splitLineParent = new SplitText(target, {type: 'lines', linesClass: 'u-overflow--hidden'});
            const lines = splitLineParent.lines;

            let initialDelay = delay;
            let initialDelayOut = delayOut + increment * lines.length;

            /* Animates each line */
            lines.forEach(line => {
                const splitLineChild = new SplitText(line, {type: 'lines'});
                const linesChildren = splitLineChild.lines;

                linesChildren.forEach(line => {
                    /* Intro animation */
                    gsap.fromTo(
                        line,
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
                                line,
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
            });

            gsap.to(element.current, {
                opacity: 1
            });

        }, element);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={element} style={{ opacity: 0 }}>
            {children}
        </div>
    );
}