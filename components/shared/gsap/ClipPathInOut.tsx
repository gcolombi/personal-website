import { ClipPath } from '@/types/animations';
import useTransitionContext from '@/context/transitionContext';
import AnimateInOut from './AnimateInOut';

export default function ClipPathInOut({
    children,
    fade = true,
    durationIn = 1.25,
    durationOut = 0.5,
    delay = 0,
    delayOut = 0,
    ease,
    easeOut,
    clipPath,
    clipPathTo = 'inset(0% 0% 0% 0%)',
    skipOutro,
    watch,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers
}: ClipPath) {
    const { primaryEase } = useTransitionContext();

    return (
        <AnimateInOut
            durationIn={durationIn}
            durationOut={durationOut}
            delay={delay}
            delayOut={delayOut}
            easeOut={easeOut ?? primaryEase}
            from={{
                opacity: fade ? 0 : 1,
                clipPath: clipPath
            }}
            to={{
                ease: ease ?? primaryEase,
                opacity: 1,
                clipPath: clipPathTo
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
};