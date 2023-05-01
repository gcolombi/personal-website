import { Translate } from '@/types/animations';
import AnimateInOut from './AnimateInOut';

export default function TranslateInOut({
    children,
    fade = true,
    durationIn = 0.5,
    durationOut = 0.25,
    delay = 0,
    delayOut = 0,
    ease = 'power4.out',
    easeOut = 'power4.out',
    x = '0px',
    y = '0px',
    xTo = 0,
    yTo = 0,
    transformOrigin,
    skipOutro,
    watch,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers
}: Translate) {
    return (
        <AnimateInOut
            durationIn={durationIn}
            durationOut={durationOut}
            delay={delay}
            delayOut={delayOut}
            easeOut={easeOut}
            from={{
                opacity: fade ? 0 : 1,
                transform: `translate(${x}, ${y})`
            }}
            to={{
                ease,
                opacity: 1,
                x: xTo,
                y: yTo,
                transformOrigin
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