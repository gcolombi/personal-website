import { Chars } from '@/types/animations';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import { useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useTransitionContext from '@/context/transitionContext';
import useIsFirstRender from '@/hooks/useIsFirstRender';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}

export default function CharsInOut({
    children,
    durationIn = 1.25,
    durationOut = 0.35,
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
    const isFirst = useIsFirstRender();

    const animation = () => {
        const scrollTrigger = watch ? {
            scrollTrigger: {
                trigger: element.current,
                start,
                end,
                scrub,
                markers: markers
            }
        } : {};

        const splitTextParent = new SplitText(target, {type: 'lines', linesClass: 'split-parent'});
        const lines = splitTextParent.lines;

        lines.forEach(line => {
            /* Overwrite the default display block */
            if (isLink) {
                gsap.set(line, {display: 'flex'});
            } else {
                gsap.set(line, {display: 'inline-block'});
            }

            const splitLineChild = new SplitText(line, {type: 'lines, chars', linesClass: 'split-child'});
            const linesChildren = splitLineChild.lines;
            const chars = splitLineChild.chars;

            linesChildren.forEach(lineChild => {
                /* Overwrites the default display block */
                if (isLink) {
                    gsap.set(lineChild, {display: 'inline-block'});
                }

                new SplitText(lineChild, {type: 'lines', linesClass: 'u-overflow--hidden'});
            });

            let initialDelay = delay;
            let initialDelayOut = delayOut + increment * (chars.length - 1);

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
                    const linkOutroAnimation = gsap.timeline()
                    .to(element.current?.parentElement!, {
                        pointerEvents: 'none'
                    })
                    .to(line, {
                        '--line-width': 0,
                        ease: easeOut ?? primaryEase,
                        delay: initialDelayOut,
                        duration: durationOut
                    });

                    timeline?.add(
                        linkOutroAnimation,
                        0
                    );
                }
            }
        });

        gsap.to(element.current, {
            opacity: 1
        });
    };

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            animation();
        });
        return () => ctx.revert();
    }, []);

    useIsomorphicLayoutEffect(() => {
        if (!isFirst) {
            animation();
        }
    }, [target]);

    return (
        <div ref={element} style={{ opacity: 0 }}>
            {children}
        </div>
    );
}