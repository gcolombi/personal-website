import { Lines } from '@/types/animations';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import { useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useNavigationContext from '@/context/navigationContext';
import useTransitionContext from '@/context/transitionContext';
import { translateUrl, useRouter } from 'next-translate-routes';

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

        const splitLineParent = new SplitText(target, {type: 'lines', linesClass: 'u-overflow--hidden'});
        splitText.current = splitLineParent;

        const lines = splitLineParent.lines;
        let initialDelay = delay;
        const tree: GSAPTween[] = [];

        lines.forEach((line, index) => {
            const splitLineChildren = new SplitText(line, {type: 'lines'});
            const linesChildren = splitLineChildren.lines;

            linesChildren.forEach(lineChild => {
                if (!localChange) {
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

                } else if (localChange) {
                    if (!isInViewport && !isAboveViewport) {
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
                                    console.log('line out locale change');
                                    if (index === lines.length - 1) {
                                        splitLineParent.revert();
                                    }
                                }
                            }
                        );

                        tree.push(anim);
                        initialDelay += increment;

                    } else {
                        /* Reverts SplitText */
                        splitText.current?.revert();
                    }
                }
            });
        });

        animations.current = tree;
    };

    const animateOutro = () => {
        if (!skipOutro) {
            timeline?.add(
                () => {
                    /* Reverts SplitText */
                    splitText.current?.revert();

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
    }

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* Intro animation */
            animate(false);

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
            /* Reverts SplitText */
            splitText.current?.revert();
            
            /* Kills all animations */
            animations.current.forEach(animation => {
                animation.kill();
            });

            const ctx = gsap.context(() => {
                /* Intro animation */
                setTimeout(() => {
                    animate(true);
                }, 0);

                /* Outro animation */
                animateOutro();
            });
            return () => ctx.revert();
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