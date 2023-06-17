import { HobbiesTabs } from '@/types/hobbies/tabs';
import Controller from '@/components/models/Controller';
import Headphone from '@/components/models/Headphone';
import Movies from '@/components/models/Movies';
import { Models } from '@/types/hobbies/models';

export const MODELS: Models = [Controller, Headphone, Movies];

export const HOBBIES_TABS: HobbiesTabs = [
    {
        id: 0,
        title: 'Gaming',
        // title: 'Jeux video',
        description: 'Ultricies tristique nulla aliquet enim tortor. Eget egestas purus viverra accumsan in nisl nisi. Sapien eget mi proin sed libero enim.'
    },
    {
        id: 1,
        title: 'Music',
        // title: 'Musique',
        description: 'Nullam non nisi est sit amet facilisis magna etiam tempor. Amet risus nullam eget felis eget nunc lobortis mattis. Libero justo laoreet sit amet cursus sit amet dictum. Ornare arcu odio ut sem nulla pharetra.'
    },
    {
        id: 2,
        title: 'Movies',
        // title: 'Films',
        description: 'Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Non odio euismod lacinia at quis risus sed vulputate odio. Vitae justo eget magna fermentum iaculis eu non.'
    }
];