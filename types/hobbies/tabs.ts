import { Models } from './models';

/* Hobbies tabs */
export type HobbiesTabsProps = {
    index: string;
    title: string;
    tabs: HobbiesTabs;
    models: Models;
}

export type HobbiesTabs = HobbyTab[];

export type HobbyTab = {
    id: number;
    title: string;
    description: string;
}