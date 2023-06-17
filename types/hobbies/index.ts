/* Scene */
export type HobbiesSceneProps = {
    activeIndex: number;
    className: string;
    renderDelay?: number;
}

/* Hobbies */
export type Hobbies = Hobby[];

export type Hobby = {
    id: number;
    title: string;
    description: string;
}