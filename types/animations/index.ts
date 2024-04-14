import { AnimationProperties } from './properties';
import { CSSProperties, ReactNode } from 'react';

/* Animation */
export type Animation = {
    children: ReactNode;
    durationIn: number;
    durationOut: number;
    delay: number;
    delayOut: number;
    easeOut?: string;
    from: CSSProperties;
    to: GSAPTweenVars;
    outro?: GSAPTweenVars;
    skipOutro: boolean | undefined;
    watch: boolean | undefined;
    start: string;
    end: string;
    scrub: boolean;
    markers: boolean | undefined;
}

/* Animations */
export type Chars = {
    children: ReactNode;
    increment?: number;
    target: string;
    isLink?: boolean;
    textAlign?: string;
} & AnimationProperties;

export type ClipPath = {
    children: ReactNode;
    fade?: boolean;
    clipPath: string;
    clipPathTo?: string;
    clipPathOut?: string;
} & AnimationProperties;

export type Fade = {
    children: ReactNode;
} & AnimationProperties;

export type ImplodeExplode = {
    children: ReactNode;
    target: string;
} & AnimationProperties;

export type Lines = {
    children: ReactNode;
    increment?: number;
    target: string;
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
    transformOrigin?: string;
} & AnimationProperties;

export type Rotate3D = {
    children: ReactNode;
    x?: string;
    y?: string;
} & AnimationProperties;

export type Scale = {
    children: ReactNode;
    fade?: boolean;
    scale?: string;
    scaleTo?: string;
    x?: string;
    y?: string;
    xTo?: number;
    yTo?: number;
    transformOrigin?: string;
} & AnimationProperties;

export type ShuffleText = {
    children: ReactNode;
    fade?: boolean;
    revealDelayIn?: number;
    revealDelayOut?: number;
    target: string;
} & AnimationProperties;

export type Translate = {
    children: ReactNode;
    fade?: boolean;
    x?: string;
    y?: string;
    xTo?: number;
    yTo?: number;
    transformOrigin?: string;
} & AnimationProperties;