import { Lang } from '@/types/components/global';
import { Models } from '@/types/hobbies/models';
import { HobbiesTabsContent } from '@/types/hobbies/tabs';
import Controller from '@/components/models/Controller';
import Headphone from '@/components/models/Headphone';
import Movies from '@/components/models/Movies';

export const MODELS: Models = [Controller, Headphone, Movies];

export const HOBBIES_TABS: Lang<HobbiesTabsContent> = {
    en: {
        title: 'Personal interests',
        tabs: [
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
        ]
    },
    fr: {
        title: 'Intérêts personnels',
        tabs: [
            {
                id: 0,
                title: 'Jeux',
                description: 'Je joue à beaucoup de jeux vidéo, mais j\'aime surtout les jeux de tir à la première personne, les jeux de survie et les jeux de rôle. Call of duty, DayZ, les jeux Souls et Elden ring sont les jeux les plus récents auxquels j\'ai joué.'
            },
            {
                id: 1,
                title: 'Musique',
                description: 'J\'écoute un large éventail de genres, mes préférés étant la musique lofi, alternative/indie et pop. J\'apprécie la musique lorsque je suis en train de coder ou pendant un voyage en voiture.'
            },
            {
                id: 2,
                title: 'Cinema',
                description: 'J\'aime regarder des films et des séries télévisées parce que cela peut avoir un impact émotionnel positif, c\'est une merveilleuse expérience partagée, et parfois j\'apprends quelque chose. Je me considère comme un cinéphile.'
            }
        ]
    }
}