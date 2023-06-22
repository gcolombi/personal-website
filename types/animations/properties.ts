/* Properties */
export type AnimationProperties = {
    durationIn?: number;
    durationOut?: number;
    delay?: number;
    delayOut?: number;
    ease?: string;
    easeOut?: string;
    outro?: GSAPTweenVars;
    skipOutro?: boolean;
    watch?: boolean;
    start?: string;
    end?: string;
    scrub?: boolean;
    markers?: boolean;
}