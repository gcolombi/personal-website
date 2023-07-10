import { Lines } from '@/types/animations';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import { useRef, useState } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useTransitionContext from '@/context/transitionContext';
import { useRouter } from 'next-translate-routes';
import useNavigationContext from '@/context/navigationContext';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}

export default function LinesInOut({
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
    markers
}: Lines) {
    const { locale } = useRouter();
    const { currentLocale } = useNavigationContext();
    const { timeline, primaryEase } = useTransitionContext();
    const element = useRef<HTMLDivElement | null>(null);
    const [animations, setAnimations] = useState<GSAPAnimation[]>([]);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const scrollTrigger = watch ? {
                scrollTrigger: {
                    trigger: element.current,
                    start,
                    end,
                    scrub,
                    markers: markers
                }
            } : {};

            const splitLineParent = new SplitText(target, {type: 'lines', linesClass: 'u-overflow--hidden'});
            const lines = splitLineParent.lines;

            let initialDelay = delay;
            let initialDelayOut = delayOut + increment * (lines.length - 1);

            const tree: GSAPAnimation[] = [];
            /* Intro animation */
            lines.forEach((line, index) => {
                const splitLineChildren = new SplitText(line, {type: 'lines'});
                const linesChildren = splitLineChildren.lines;

                linesChildren.forEach(lineChild => {
                    const anim = gsap.fromTo(
                        lineChild,
                        {
                            y: '100%'
                        },
                        {
                            y: 0,
                            willChange: 'transform',
                            ease: ease ?? primaryEase,
                            delay: initialDelay,
                            duration: durationIn,
                            ...scrollTrigger,
                            onComplete: () => {
                                if (index === lines.length - 1) {
                                    splitLineParent.revert();
                                }
                            }
                        }
                    );
                    tree.push(anim);
                    initialDelay += increment;
                });
            });

            setAnimations(tree);

            /* Outro animation */
            if (!skipOutro) {
                timeline?.add(
                    () => {
                        const splitLineOutro = new SplitText(target, {type: 'lines', linesClass: 'u-overflow--hidden'});
                        const lines = splitLineOutro.lines;

                        lines.forEach(line => {
                            const splitLineChildrenOutro = new SplitText(line, {type: 'lines'});
                            const linesChildrenOutro = splitLineChildrenOutro.lines;

                            linesChildrenOutro.forEach(lineChild => {
                                gsap.to(
                                    lineChild,
                                    {
                                        y: '100%',
                                        ease: easeOut ?? primaryEase,
                                        delay: initialDelayOut,
                                        duration: durationOut
                                    }
                                );

                                initialDelayOut -= increment;
                            });
                        });
                    },
                    0
                );
            }

            gsap.to(element.current, {
                opacity: 1
            });
        });
        return () => ctx.revert();
    }, []);

    useIsomorphicLayoutEffect(() => {
        if (currentLocale !== locale) {
            // console.log(document.getElementById(target.replace('#', '')));

            /* Kills all old animations */
            animations.forEach(animation => {
                animation.kill();
            });

            setTimeout(() => {
                const isInViewport = ScrollTrigger.isInViewport(element.current as Element);
                const isAboveViewport = ScrollTrigger.positionInViewport(element.current as Element, 'bottom') <= 0;
                const tree: GSAPAnimation[] = [];

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

                    const splitLineParent = new SplitText(target, {type: 'lines', linesClass: 'u-overflow--hidden'});
                    const lines = splitLineParent.lines;
                    let initialDelay = delay;

                    lines.forEach((line, index) => {
                        const splitLineChildren = new SplitText(line, {type: 'lines'});
                        const linesChildren = splitLineChildren.lines;

                        linesChildren.forEach(lineChild => {
                            const anim = gsap.fromTo(
                                lineChild,
                                {
                                    y: '100%',
                                    opacity: 0
                                },
                                {
                                    y: 0,
                                    opacity: 1,
                                    willChange: 'transform',
                                    ease: ease ?? primaryEase,
                                    delay: initialDelay,
                                    duration: durationIn,
                                    ...scrollTrigger,
                                    onComplete: () => {
                                        if (index === lines.length - 1) {
                                            splitLineParent.revert();
                                        }
                                    }
                                }
                            );

                            tree.push(anim);
                            initialDelay += increment;
                        });
                    });
                    setAnimations(tree);
                } else {
                    gsap.set(element.current, {
                        opacity: 1
                    });
                    setAnimations(tree);
                }


                /* Outro animation */
                if (!skipOutro) {
                    timeline?.add(
                        () => {
                            const splitLineOutro = new SplitText(target, {type: 'lines', linesClass: 'u-overflow--hidden'});
                            const lines = splitLineOutro.lines;

                            let initialDelayOut = delayOut + increment * (lines.length - 1);

                            lines.forEach(line => {
                                const splitLineChildrenOutro = new SplitText(line, {type: 'lines'});
                                const linesChildrenOutro = splitLineChildrenOutro.lines;

                                linesChildrenOutro.forEach(lineChild => {
                                    gsap.to(
                                        lineChild,
                                        {
                                            y: '100%',
                                            ease: easeOut ?? primaryEase,
                                            delay: initialDelayOut,
                                            duration: durationOut
                                        }
                                    );

                                    initialDelayOut -= increment;
                                });
                            });
                        },
                        0
                    );
                }
            }, 0);
        }
    }, [locale])

    return (
        <div ref={element} style={{ opacity: 0 }}>
            {children}
        </div>
    );
}