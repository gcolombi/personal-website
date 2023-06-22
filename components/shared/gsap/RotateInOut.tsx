import { Rotate } from '@/types/animations';
import AnimateInOut from './AnimateInOut';

export default function RotateInOut({
    children,
    fade = true,
    durationIn = 0.5,
    durationOut = 0.25,
    delay = 0,
    delayOut = 0,
    ease = 'power1.out',
    easeOut = 'power1.out',
    rotate = 0,
    rotateTo = 0,
    rotateX = 0,
    rotateXTo = 0,
    rotateY = 0,
    rotateYTo = 0,
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
}: Rotate) {
    return (
        <AnimateInOut
            durationIn={durationIn}
            durationOut={durationOut}
            delay={delay}
            delayOut={delayOut}
            easeOut={easeOut}
            from={{
                opacity: fade ? 0 : 1,
                transform: `translate(${x}, ${y}) rotate(${rotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            }}
            to={{
                ease,
                opacity: 1,
                rotate: rotateTo,
                rotateX: rotateXTo,
                rotateY: rotateYTo,
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