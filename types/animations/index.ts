import { CSSProperties, ReactNode } from 'react';

/* Animations */
export interface AnimationProperties {
    durationIn?: number;
    durationOut?: number;
    delay?: number;
    delayOut?: number;
    ease?: string;
    skipOutro?: boolean;
    watch?: boolean;
    start?: string;
    end?: string;
    scrub?: boolean;
    markers?: boolean;
}

export type Animation = {
    children: ReactNode;
    durationIn: number;
    durationOut: number;
    delay: number;
    delayOut: number;
    from: CSSProperties;
    to: GSAPTweenVars;
    skipOutro: boolean | undefined;
    watch: boolean | undefined;
    start: string;
    end: string;
    scrub: boolean;
    markers: boolean | undefined;
}

export type Fade = {
    children: ReactNode;
} & AnimationProperties;

export type Translate = {
    children: ReactNode;
    fade?: boolean;
    x?: string;
    y?: string;
    xTo?: number;
    yTo?: number;
} & AnimationProperties;