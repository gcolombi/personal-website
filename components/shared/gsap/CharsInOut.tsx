import { Chars } from '@/types/animations';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import { useRef, useState } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useNavigationContext from '@/context/navigationContext';
import useTransitionContext from '@/context/transitionContext';
import { translateUrl, useRouter } from 'next-translate-routes';

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
    const { asPath, locale } = useRouter();
    const { currentRoute, currentLocale } = useNavigationContext();
    const { timeline, primaryEase } = useTransitionContext();
    const element = useRef<HTMLDivElement | null>(null);
    const splitText = useRef<SplitText | null>(null);
    const animations = useRef<GSAPTween[]>([]);

    const animate = (localChange: boolean) => {
        const isInViewport = ScrollTrigger.isInViewport(element.current as Element);
        const isAboveViewport = ScrollTrigger.positionInViewport(element.current as Element, 'bottom') <= 0;

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
        splitText.current = splitTextParent;

        const lines = splitTextParent.lines;
        const alignProperty = textAlign ? {textAlign: textAlign} : {};
        const tree: GSAPTween[] = [];

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
                if (!localChange) {
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
                } else if (localChange) {
                    if (!isInViewport && !isAboveViewport) {
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
                /* Intro animation */
                if (!localChange) {
                    const linkAnim = gsap.to(line,
                        {
                            '--line-width': '100%',
                            ease: ease ?? primaryEase,
                            delay: initialDelay,
                            duration: durationIn,
                            ...scrollTrigger,
                            onComplete: () => {
                                gsap.to(element.current?.parentElement as HTMLElement,
                                    {
                                        pointerEvents: 'all'
                                    }
                                )
                            }
                        }
                    );
                    tree.push(linkAnim);
                } else if (localChange) {
                    if (!isInViewport && !isAboveViewport) {
                        gsap.set(element.current?.parentElement as HTMLElement, {pointerEvents: 'none'});
                        const linkAnim = gsap.to(line,
                            {
                                '--line-width': '100%',
                                ease: ease ?? primaryEase,
                                delay: initialDelay,
                                duration: durationIn,
                                ...scrollTrigger,
                                onComplete: () => {
                                    gsap.to(element.current?.parentElement as HTMLElement,
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

        animations.current = tree;
    };

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            animate(false);
            gsap.to(element.current, {
                opacity: 1
            });
        });
        return () => ctx.revert();
    }, []);

    useIsomorphicLayoutEffect(() => {
        if (currentLocale !== locale) {
            /* Reverts SplitText */
            splitText.current?.revert();

            /* Kills all animations */
            animations.current.forEach(animation => {
                animation.kill();
            });

            setTimeout(() => {
                animate(true);
            }, 0);
        } else if (currentRoute !== translateUrl(asPath, locale ?? '') && currentLocale === locale) {
            /* Kills all animations */
            animations.current.forEach(animation => {
                animation.kill();
            });
        }
    }, [asPath, locale]);

    return (
        <div ref={element} style={{ opacity: 0 }}>
            {children}
        </div>
    );
}