import { HobbiesTabs } from '@/types/hobbies/tabs';
import Controller from '@/components/models/Controller';
import Headphone from '@/components/models/Headphone';
import Movies from '@/components/models/Movies';
import { Models } from '@/types/hobbies/models';

export const MODELS: Models = [Controller, Headphone, Movies];

export const HOBBIES_TITLE: string = 'Personal interests';

export const HOBBIES_TABS: HobbiesTabs = [
    {
        id: 0,
        title: 'Gaming',
        description: 'I play a lot of video games but I mostly enjoy first person shooter, survival and action role-playing game. Call of duty, DayZ, Souls games and Elden ring are the most recent games I played.'
    },
    {
        id: 1,
        title: 'Music',
        description: 'I listen to a broad range of genres, my favorites would be lofi, alternative/indie and pop music. I enjoy music when I\'m coding or in road trip.'
    },
    {
        id: 2,
        title: 'Cinema',
        description: 'I like watching movies and TV shows because it can have a positive emotional impact, it\'s a wonderful shared experience, and sometimes learn something. I consider myself as cinephile.'
    }
];