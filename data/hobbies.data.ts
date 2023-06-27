import { Lang } from '@/types/components/global';
import { Models } from '@/types/hobbies/models';
import { HobbiesTabsContent } from '@/types/hobbies/tabs';
import Controller from '@/components/models/Controller';
import Headphone from '@/components/models/Headphone';
import Helmet from '@/components/models/Helmet';

export const MODELS: Models = [Controller, Headphone, Helmet];

export const HOBBIES_TABS: Lang<HobbiesTabsContent> = {
    en: {
        title: 'Personal interests',
        tabs: [
            {
                id: 0,
                title: 'Gaming',
                description: 'I play a lot of video games, but I mostly enjoy first-person shooters, survival games, and action role-playing games. Recently, I have played games like Call of Duty, DayZ, Dark Souls series, and Elden Ring.'
            },
            {
                id: 1,
                title: 'Music',
                description: 'I listen to a broad range of genres, but my favorites would be lo-fi, alternative/indie, and pop music. I particularly enjoy listening to music while coding or during road trips.'
            },
            {
                id: 2,
                title: 'Cinema',
                description: 'I have a fondness for watching movies and TV shows. They have a positive emotional impact on me, provide a wonderful shared experience, and sometimes offer opportunities to learn something new. I consider myself a cinephile.'
            }
        ]
    },
    fr: {
        title: 'Intérêts personnels',
        tabs: [
            {
                id: 0,
                title: 'Jeux',
                description: 'Je joue à beaucoup de jeux vidéo, mais j\'aime surtout les jeux de tir à la première personne, les jeux de survie et les jeux de rôle. Récemment, j\'ai joué à des jeux comme Call of Duty, DayZ, la série des Dark Souls et Elden Ring.'
            },
            {
                id: 1,
                title: 'Musique',
                description: 'J\'écoute un large éventail de genres, mais mes préférés sont la musique lo-fi, alternative/indie et la musique pop. J\'aime particulièrement écouter de la musique en codant ou pendant les trajets en voiture.'
            },
            {
                id: 2,
                title: 'Cinema',
                description: 'J\'aime beaucoup regarder des films et des émissions de télévision. Ils ont un impact émotionnel positif sur moi, constituent une merveilleuse expérience partagée et offrent parfois l\'occasion d\'apprendre quelque chose de nouveau. Je me considère comme un cinéphile.'
            }
        ]
    }
};