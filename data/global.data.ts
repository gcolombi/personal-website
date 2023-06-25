import { CallToActionContent, FooterContent, Lang, MetaDataProps, NavigationRoutes, Translations } from '@/types/components/global';
import { BasicHeaderProps } from '@/types/components/headers';

export const NAVIGATION_ROUTES: Lang<NavigationRoutes> = {
    en: [
        {
            href: '/projects',
            title: 'Projects'
        },
        {
            href: '/about',
            title: 'About'
        },
        {
            href: '/contact',
            title: 'Contact'
        }
    ],
    fr: [
        {
            href: '/projects',
            title: 'Projets'
        },
        {
            href: '/about',
            title: 'A propos'
        },
        {
            href: '/contact',
            title: 'Contact'
        }
    ]
};

export const FOOTER: Lang<FooterContent> = {
    en: {
        title: 'Front-end Developer'
    },
    fr: {
        title: 'Développeur Front-end'
    }
};

export const CALL_TO_ACTION: Lang<CallToActionContent> = {
    en: {
        title: 'Get in touch',
        buttonLabel: 'Contact me',
        buttonHref: '/contact'

    },
    fr: {
        title: 'Prendre contact',
        buttonLabel: 'Contactez-moi',
        buttonHref: '/contact'
    }
};

export const META_404: Lang<MetaDataProps> = {
    en: {
        title: `Error 404 | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    fr: {
        title: `Erreur 404 | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const PAGE_NOT_FOUND_HEADER: Lang<BasicHeaderProps> = {
    en: {
        title: 'Page not found',
        content: 'Cannot read properties of undefined. The page you are looking for could not be found.',
        button: {
            label: 'Please get me out of here'
        }
    },
    fr: {
        title: 'Page non trouvee',
        content: 'La page que vous recherchez n\'a pas pu être trouvée.',
        button: {
            label: 'S\'il vous plaît, faites-moi sortir d\'ici'
        }
    }
};

export const TRANSLATIONS: Lang<Translations> = {
    en: [
        {
            key: 'Visit website',
            value: 'Visit website'
        },
        {
            key: 'All rights reserved',
            value: 'All rights reserved'
        },
        {
            key: 'First name',
            value: 'First name'
        },
        {
            key: 'Last name',
            value: 'Last name'
        },
        {
            key: 'Email',
            value: 'Email'
        },
        {
            key: 'Send',
            value: 'Send'
        },
        {
            key: 'Sending',
            value: 'Sending'
        },
        {
            key: 'This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" title="Privacy Policy">Privacy Policy</a> and <a href="https://policies.google.com/terms" title="Terms of Service">Terms of Service</a> apply.',
            value: 'This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" title="Privacy Policy">Privacy Policy</a> and <a href="https://policies.google.com/terms" title="Terms of Service">Terms of Service</a> apply.'
        },
        {
            key: 'Your message is on its way!',
            value: 'Your message is on its way!'
        },
        {
            key: 'Thank you, your message has been sent successfully.',
            value: 'Thank you, your message has been sent successfully.'
        },
        {
            key: 'Form has errors.',
            value: 'Form has errors.'
        },
        {
            key: 'This field is required.',
            value: 'This field is required.'
        },
        {
            key: 'The specified email address is invalid.',
            value: 'The specified email address is invalid.'
        },
        {
            key: 'An error occurred while sending the email.',
            value: 'An error occurred while sending the email.'
        },
        {
            key: 'Internal Server Error.',
            value: 'Internal Server Error.'
        },
        {
            key: 'ReCaptcha validation failed.',
            value: 'ReCaptcha validation failed.'
        },
        {
            key: 'Error validating captcha',
            value: 'Error validating captcha'
        }
    ],
    fr: [
        {
            key: 'Visit website',
            value: 'Visiter le site'
        },
        {
            key: 'All rights reserved',
            value: 'Tous droits réservés'
        },
        {
            key: 'First name',
            value: 'Prénom'
        },
        {
            key: 'Last name',
            value: 'Nom'
        },
        {
            key: 'Email',
            value: 'Courriel'
        },
        {
            key: 'Send',
            value: 'Envoyer'
        },
        {
            key: 'Sending',
            value: 'Envoi en cours'
        },
        {
            key: 'This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" title="Privacy Policy">Privacy Policy</a> and <a href="https://policies.google.com/terms" title="Terms of Service">Terms of Service</a> apply.',
            value: 'Ce site est protégé par reCAPTCHA et la <a href="https://policies.google.com/privacy">Politique de Confidentialité</a> ainsi que les <a href="https://policies.google.com/terms">Termes de Service de Google</a> s\'appliquent.'
        },
        {
            key: 'Your message is on its way!',
            value: 'Votre message est en route!'
        },
        {
            key: 'Thank you, your message has been sent successfully.',
            value: 'Merci, votre message a été envoyé avec succès.'
        },
        {
            key: 'Form has errors.',
            value: 'Le formulaire comporte des erreurs.'
        },
        {
            key: 'This field is required.',
            value: 'Ce champ est obligatoire.'
        },
        {
            key: 'The specified email address is invalid.',
            value: 'L\'adresse courriel spécifiée n\'est pas valide.'
        },
        {
            key: 'An error occurred while sending the email.',
            value: 'Une erreur s\'est produite lors de l\'envoi du courriel.'
        },
        {
            key: 'Internal Server Error.',
            value: 'Erreur de serveur interne.'
        },
        {
            key: 'ReCaptcha validation failed.',
            value: 'La validation ReCaptcha a échoué.'
        },
        {
            key: 'Error validating captcha',
            value: 'Erreur lors de la validation du captcha'
        }
    ]
};