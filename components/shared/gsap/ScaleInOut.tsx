import { Scale } from '@/types/animations';
import AnimateInOut from './AnimateInOut';

export default function ScaleInOut({
    children,
    fade = true,
    durationIn = 0.5,
    durationOut = 0.25,
    delay = 0,
    delayOut = 0,
    ease = 'power4.out',
    easeOut = 'power4.out',
    scale = '0, 0',
    scaleTo = '1, 1',
    x = '0px',
    y = '0px',
    xTo = 0,
    yTo = 0,
    transformOrigin,
    outro,
    skipOutro,
    watch,
    start = 'top bottom',
    end = 'bottom top',
    scrub = false,
    markers
}: Scale) {
    return (
        <AnimateInOut
            durationIn={durationIn}
            durationOut={durationOut}
            delay={delay}
            delayOut={delayOut}
            easeOut={easeOut}
            from={{
                opacity: fade ? 0 : 1,
                transform: `translate(${x}, ${y}) scale(${scale})`
            }}
            to={{
                ease,
                opacity: 1,
                scale: scaleTo,
                x: xTo,
                y: yTo,
                transformOrigin
            }}
            outro={outro}
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