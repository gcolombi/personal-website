import { Models } from './models';

/* Hobbies tabs */
export type HobbiesTabsProps = {
    index: string;
    models: Models;
} & HobbiesTabsContent;

export type HobbiesTabsContent = {
    title: string;
    tabs: HobbiesTabs;
}

export type HobbiesTabs = HobbyTab[];

export type HobbyTab = {
    id: number;
    title: string;
    description: string;
}