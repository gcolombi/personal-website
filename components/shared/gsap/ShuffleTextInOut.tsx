import { ShuffleText } from '@/types/animations';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import ScrambleTextPlugin from 'gsap/dist/ScrambleTextPlugin';
import { useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useTransitionContext from '@/context/transitionContext';
import { shuffle } from '@/utils/array';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}
gsap.registerPlugin(ScrambleTextPlugin);

export default function ShuffleTextInOut({
    children,
    fade = true,
    durationIn = 0.8,
    durationOut = 0.5,
    delay = 0,
    delayOut = 0,
    revealDelayIn = 0.5,
    revealDelayOut = 0.35,
    ease = 'none',
    easeOut = 'none',
    target,
    skipOutro,
    watch = false,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers
}: ShuffleText) {
    const { timeline } = useTransitionContext();
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
            /* Sets opacity on the parent */
            if (fade) {
                gsap.to(element.current, {
                    opacity: 1,
                    delay,
                    ...scrollTrigger
                });
            }

            /* Splits the target */
            const splitWord = new SplitText(target, {
                type: 'words'
            });
            const words = splitWord.words;

            /* Intro animation */
            words.forEach(word => {
                const splitText = new SplitText(word);
                const chars = shuffle(splitText.chars as HTMLElement[]);
                let string = '';

                chars.forEach(char => {
                    string += char.innerText;
                });

                gsap.to(word, {
                    ease,
                    delay,
                    duration: durationIn,
                    scrambleText:{
                        text: '{original}',
                        chars: string,
                        revealDelay: revealDelayIn
                    },
                    ...scrollTrigger
                });

                /* Outro animation */
                if (!skipOutro) {
                    timeline?.add(
                        gsap.to(word, {
                            opacity: fade ? 0 : 1,
                            ease: easeOut,
                            delay: delayOut,
                            duration: durationOut,
                            scrambleText:{
                                text: '{original}',
                                chars: string,
                                revealDelay: revealDelayOut
                            }
                        }),
                        0
                    );
                }
            });
        }, element);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={element} style={{ opacity: fade ? 0 : 1 }}>
            {children}
        </div>
    );
};