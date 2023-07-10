import { Chars } from '@/types/animations';
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
    isLink = false,
    textAlign
}: Chars) {
    const { locale } = useRouter();
    const { currentLocale } = useNavigationContext();
    const { timeline, primaryEase } = useTransitionContext();
    const element = useRef<HTMLDivElement | null>(null);
    const [splitText, setSplitText] = useState<SplitText | null>(null);
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

            const splitTextParent = new SplitText(target, {type: 'lines', linesClass: 'split-parent'});
            setSplitText(splitTextParent);
            const lines = splitTextParent.lines;
            const alignProperty = textAlign ? {textAlign: textAlign} : {};

            const tree: GSAPAnimation[] = [];
            lines.forEach(line => {
                /* Overwrite the default display block */
                if (isLink) {
                    gsap.set(line, {display: 'flex'});
                } else {
                    gsap.set(line, {display: 'inline-block', ...alignProperty});
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
                    const anim = gsap.fromTo(
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

                    tree.push(anim);
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
                    const linkAnim = gsap.to(line,
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

                    tree.push(linkAnim);

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

            // /* Outro animation */
            // if (!skipOutro) {
            //     timeline?.add(
            //         () => {
            //             const splitTextParent = new SplitText(target, {type: 'lines', linesClass: 'split-parent'});
            //             const lines = splitTextParent.lines;
            //             const alignProperty = textAlign ? {textAlign: textAlign} : {};

            //             lines.forEach(line => {
            //                 /* Overwrite the default display block */
            //                 if (isLink) {
            //                     gsap.set(line, {display: 'flex'});
            //                 } else {
            //                     gsap.set(line, {display: 'inline-block', ...alignProperty});
            //                 }

            //                 const splitLineChild = new SplitText(line, {type: 'lines, chars', linesClass: 'split-child'});
            //                 const linesChildren = splitLineChild.lines;
            //                 const chars = splitLineChild.chars;

            //                 linesChildren.forEach(lineChild => {
            //                     /* Overwrites the default display block */
            //                     if (isLink) {
            //                         gsap.set(lineChild, {display: 'inline-block'});
            //                     }

            //                     new SplitText(lineChild, {type: 'lines', linesClass: 'u-overflow--hidden'});
            //                 });

            //                 let initialDelay = delay;
            //                 let initialDelayOut = delayOut + increment * (chars.length - 1);

            //                 chars.forEach(char => {
            //                     gsap.to(
            //                         char,
            //                         {
            //                             y: '100%',
            //                             ease: easeOut ?? primaryEase,
            //                             delay: initialDelayOut,
            //                             duration: durationOut
            //                         }
            //                     );

            //                     initialDelayOut -= increment;
            //                 });

            //                 /* Animates underline */
            //                 if (isLink) {
            //                     const linkOutroAnimation = gsap.timeline()
            //                     .to(element.current?.parentElement!, {
            //                         pointerEvents: 'none'
            //                     })
            //                     .to(line, {
            //                         '--line-width': 0,
            //                         ease: easeOut ?? primaryEase,
            //                         delay: initialDelayOut,
            //                         duration: durationOut
            //                     });

            //                     linkOutroAnimation.play();
            //                 }
            //             });
            //         },
            //         0
            //     );
            // }

            setAnimations(tree);

            gsap.to(element.current, {
                opacity: 1
            });
        });
        return () => ctx.revert();
    }, []);

    useIsomorphicLayoutEffect(() => {
        if (currentLocale !== locale) {

            // console.log(document.getElementById(target.replace('#', '')));

            /* Reverts original SplitText */
            splitText?.revert();

            /* Kills all old animations */
            // console.log(animations);
            animations.forEach(animation => {
                animation.kill();
            });

            setTimeout(() => {
                const isInViewport = ScrollTrigger.isInViewport(element.current as Element);
                const isAboveViewport = ScrollTrigger.positionInViewport(element.current as Element, 'bottom') <= 0;
                const tree: GSAPAnimation[] = [];

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
                const alignProperty = textAlign ? {textAlign: textAlign} : {};

                lines.forEach(line => {
                    /* Overwrite the default display block */
                    if (isLink) {
                        gsap.set(line, {display: 'flex'});
                    } else {
                        gsap.set(line, {display: 'inline-block', ...alignProperty});
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
                        if (!isInViewport && !isAboveViewport) {
                            /* Intro animation */
                            const anim = gsap.fromTo(
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

                            tree.push(anim);
                            initialDelay += increment;
                        } else {
                            gsap.set(element.current, {
                                opacity: 1
                            });
                        }

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
                        if (!isInViewport && !isAboveViewport) {
                            /* Intro animation */
                            const linkAnim = gsap.to(line,
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

                            tree.push(linkAnim);
                        } else {
                            gsap.set(line, {'--line-width': '100%'});
                        }

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

                setAnimations(tree);

            }, 0);
        }
    }, [locale]);

    return (
        <div ref={element} style={{ opacity: 0 }}>
            {children}
        </div>
    );
}