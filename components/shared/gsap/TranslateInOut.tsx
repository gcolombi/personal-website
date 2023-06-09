import { Translate } from '@/types/animations';
import useTransitionContext from '@/context/transitionContext';
import AnimateInOut from './AnimateInOut';

export default function TranslateInOut({
    children,
    fade = true,
    durationIn = 1.25,
    durationOut = 0.35,
    delay = 0,
    delayOut = 0,
    ease,
    easeOut,
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
}: Translate) {
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
                transform: `translate(${x}, ${y})`
            }}
            to={{
                ease: ease ?? primaryEase,
                opacity: 1,
                x: xTo,
                y: yTo,
                transformOrigin,
                willChange: 'transform'
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
}