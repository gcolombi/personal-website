import { CSSProperties, ReactNode } from 'react';

/* Animations */
export type AnimationProperties = {
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

export type Rotate = {
    children: ReactNode;
    fade?: boolean;
    rotate?: number;
    rotateTo?: number;
    rotateY?: number;
    rotateYTo?: number;
    rotateX?: number;
    rotateXTo?: number;
    x?: string;
    y?: string;
    xTo?: number;
    yTo?: number;
} & AnimationProperties;

export type Scale = {
    children: ReactNode;
    fade?: boolean;
    scale?: number;
    scaleTo?: number;
    x?: string;
    y?: string;
    xTo?: number;
    yTo?: number;
} & AnimationProperties;

export type Translate = {
    children: ReactNode;
    fade?: boolean;
    x?: string;
    y?: string;
    xTo?: number;
    yTo?: number;
} & AnimationProperties;
