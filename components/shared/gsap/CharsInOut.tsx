import { Chars } from '@/types/animations';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import { useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useTransitionContext from '@/context/transitionContext';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}

export default function CharsInOut({
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
    markers,
    isLink = false
}: Chars) {
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
            const splitTextParent = new SplitText(target, {type: 'lines', linesClass: 'split-parent'});
            const lines = splitTextParent.lines;

            lines.forEach(line => {
                /* Overwrite the default display block */
                gsap.set(line, {display: 'flex'});

                const splitLineChild = new SplitText(line, {type: 'lines, chars', linesClass: 'split-child'});
                const linesChildren = splitLineChild.lines;
                const chars = splitLineChild.chars;

                linesChildren.forEach(lineChild => {
                    /* Overwrites the default display block */
                    gsap.set(lineChild, {display: 'inline-block'});

                    new SplitText(lineChild, {type: 'lines', linesClass: 'u-overflow--hidden'});
                });

                let initialDelay = delay;
                let initialDelayOut = delayOut + increment * chars.length;

                /* Animates each char */
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

                        initialDelayOut -= increment;
                    }
                });

                /* Animates underline */
                if (isLink) {
                    /* Intro animation */
                    gsap.to(line,
                        {
                            '--line-width': '100%',
                            ease: ease ?? primaryEase,
                            delay: initialDelay,
                            duration: durationIn,
                            ...scrollTrigger,
                            onComplete: () => {
                                gsap.to(element.current?.parentElement!,
                                    {
                                        pointerEvents: 'all'
                                    }
                                )
                            }
                        }
                    );

                    /* Outro animation */
                    if (!skipOutro) {
                        timeline?.add(
                            gsap.to(
                                line,
                                {
                                    '--line-width': 0,
                                    ease: easeOut ?? primaryEase,
                                    delay: initialDelayOut,
                                    duration: durationOut
                                }
                            ),
                            0
                        );
                    }
                }
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