/* Hobbies tabs */
export type HobbiesTabsProps = {
    index: string;
    tabs: HobbiesTabs;
}

export type HobbiesTabs = HobbyTab[];

export type HobbyTab = {
    id: number;
    title: string;
    description: string;
}