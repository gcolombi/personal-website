import { GET_TRANSLATION } from '@/data/global.data';
import { useRouter } from 'next-translate-routes';
import { useRef } from 'react';

export default function FormRecaptchaNote() {
    const { locale } = useRouter();
    const recaptchaNote = useRef(GET_TRANSLATION('This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" title="Privacy Policy">Privacy Policy</a> and <a href="https://policies.google.com/terms" title="Terms of Service">Terms of Service</a> apply.', locale ?? ''));

    return (
        <>
            {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY &&
                <div className="o-wysiwyg">
                    <p><small dangerouslySetInnerHTML={{__html: recaptchaNote.current}} /></p>
                </div>
            }
        </>
    );
}