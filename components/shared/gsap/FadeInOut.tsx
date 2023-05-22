import { Fade } from '@/types/animations';
import useTransitionContext from '@/context/transitionContext';
import AnimateInOut from './AnimateInOut';

export default function FadeInOut({
    children,
    durationIn = 1,
    durationOut = 0.45,
    delay = 0,
    delayOut = 0,
    ease,
    easeOut,
    skipOutro,
    watch,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers
}: Fade) {
    const { primaryEase } = useTransitionContext();

    return (
        <AnimateInOut
            durationIn={durationIn}
            durationOut={durationOut}
            delay={delay}
            delayOut={delayOut}
            easeOut={easeOut ?? primaryEase}
            from={{
                opacity: 0
            }}
            to={{
                ease: ease ?? primaryEase,
                opacity: 1
            }}
            skipOutro={skipOutro}
            watch={watch}
            start={start}
            end={end}
            scrub={scrub}
            markers={markers}
        >
            {children}
        </AnimateInOut>
    );
}