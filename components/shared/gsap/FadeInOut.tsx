import { Fade } from '@/types/animations';
import AnimateInOut from './AnimateInOut';

export default function FadeInOut({
    children,
    durationIn = 0.5,
    durationOut = 0.25,
    delay = 0,
    delayOut = 0,
    ease = 'power4.out',
    easeOut = 'power4.out',
    skipOutro,
    watch,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers
}: Fade) {
    return (
        <AnimateInOut
            durationIn={durationIn}
            durationOut={durationOut}
            delay={delay}
            delayOut={delayOut}
            easeOut={easeOut}
            from={{
                opacity: 0
            }}
            to={{
                ease,
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