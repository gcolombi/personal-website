import { FormData, Labels } from '@/types/form';
import styles from '../../styles/modules/Form.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next-translate-routes';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import useIsMounted from '@/hooks/useIsMounted';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { getFormSchema } from '@/schemas/form';
import { getTranslation } from '@/utils/translation';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormRecaptchaNote from './FormRecaptchaNote';
import Button from '../shared/Button';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import TranslateInOut from '../shared/gsap/TranslateInOut';
import FadeInOut from '../shared/gsap/FadeInOut';
import classNames from 'classnames';

const labels: Labels = {
    firstname: 'First name',
    lastname: 'Last name',
    email: 'Email',
    message: 'Message'
}

async function sendFormData(data: FormData, recaptchaToken: string, locale: string): Promise<Response> {
    return await fetch('/api/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale
        },
        body: JSON.stringify({
            data,
            labels,
            recaptchaToken
        })
    });
}

export default function Form() {
    const { locale } = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { isSubmitting, errors }
    } = useForm<FormData>({
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            message: ''
        },
        resolver: yupResolver(getFormSchema(locale ?? ''))
    });
    const isMounted = useIsMounted();
    const { executeRecaptcha } = useGoogleReCaptcha();
    const firstnameLabel = useRef(getTranslation('First name', locale ?? ''));
    const lastnameLabel = useRef(getTranslation('Last name', locale ?? ''));
    const emailLabel = useRef(getTranslation('Email', locale ?? ''));
    const toastLoadingMessage = useRef(getTranslation('Your message is on its way !', locale ?? ''));
    const formErrorsMessage  = useRef(getTranslation('Form has errors.', locale ?? ''));
    const buttonLabel  = useRef(getTranslation('Send', locale ?? ''));

    const submitForm = async (data: FormData, recaptchaToken: string) => {
        const toastConfig = {
            isLoading: false,
            autoClose: 3000,
            closeButton: true,
            draggable: true
        }

        const toastId = toast.loading(toastLoadingMessage.current);

        try {
            const response = await sendFormData(data, recaptchaToken, locale ?? '');

            const _data = await response.json();

            if (!response.ok) {
                /* API returns validation errors, this type of error will not persist with each submission */
                setError('root.serverError', {
                    type: response.status.toString(),
                });
                if (_data.errors) {
                    /* Validation error, expect response to be a JSON response {"field": "error message for that field"} */
                    for (const [fieldName, errorMessage] of Object.entries(_data.errors) as [keyof FormData, string][]) {
                        setError(fieldName, {type: 'custom', message: errorMessage});
                    }
                }
                throw new Error(_data.message || formErrorsMessage.current);
            }

            toast.update(toastId, {
                render: _data.message,
                type: 'success',
                ...toastConfig
            });

            /* Resets form after success */
            reset();

        } catch (error) {
            if (error instanceof Error) {
                toast.update(toastId, {
                    render: error.message,
                    type: 'error',
                    ...toastConfig
                });
            }
        }
    };

    const handleSubmitForm = async (data: FormData) => {
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
        }

        await executeRecaptcha('submit')
        .then((recaptchaToken) => {
            submitForm(data, recaptchaToken);
        })
        .catch(error => console.error(`Form - Recaptcha Error : ${error}`));
    }

    return(
        <>
            <section className={classNames
                (
                    'u-spacing--responsive--bottom',
                    styles['c-form']
                )}
            >
                <div className="o-container">
                    <div className="o-grid">
                        <form className={styles['c-form__element']} onSubmit={handleSubmit(handleSubmitForm)} noValidate>
                            <div className={styles['c-form__row']}>
                                <div className={styles['c-form__item']}>
                                    <TranslateInOut
                                        delay={0.1}
                                        durationIn={0.6}
                                        outro={{
                                            opacity: 0
                                        }}
                                        y="100%"
                                        start="-100% bottom"
                                        end="top top"
                                        watch
                                    >
                                        <FormInput
                                            htmlFor="firstname"
                                            label={firstnameLabel.current}
                                            id="firstname"
                                            required={true}
                                            className="c-formElement--bordered"
                                            register={register('firstname')}
                                            errors={errors['firstname']}
                                        />
                                    </TranslateInOut>
                                </div>
                                <div className={styles['c-form__item']}>
                                    <TranslateInOut
                                        delay={0.15}
                                        durationIn={0.6}
                                        outro={{
                                            opacity: 0
                                        }}
                                        y="100%"
                                        start="-100% bottom"
                                        end="top top"
                                        watch
                                    >
                                        <FormInput
                                            htmlFor="lastname"
                                            label={lastnameLabel.current}
                                            id="lastname"
                                            required={true}
                                            className="c-formElement--bordered"
                                            register={register('lastname')}
                                            errors={errors['lastname']}
                                        />
                                    </TranslateInOut>
                                </div>
                                <div className={styles['c-form__itemFull']}>
                                    <TranslateInOut
                                        delay={0.20}
                                        durationIn={0.6}
                                        outro={{
                                            opacity: 0
                                        }}
                                        y="100%"
                                        start="-100% bottom"
                                        end="top top"
                                        watch
                                    >
                                        <FormInput
                                            htmlFor="email"
                                            label={emailLabel.current}
                                            type="email"
                                            id="email"
                                            required={true}
                                            className="c-formElement--bordered"
                                            register={register('email')}
                                            errors={errors['email']}
                                        />
                                    </TranslateInOut>
                                </div>
                                <div className={styles['c-form__itemFull']}>
                                    <TranslateInOut
                                        delay={0.25}
                                        durationIn={0.6}
                                        outro={{
                                            opacity: 0
                                        }}
                                        y="100%"
                                        start="-100% bottom"
                                        end="top top"
                                        watch
                                    >
                                        <FormTextarea
                                            htmlFor="message"
                                            label="Message"
                                            id="message"
                                            required={true}
                                            className="c-formElement--bordered"
                                            register={register('message')}
                                            errors={errors['message']}
                                        />
                                    </TranslateInOut>
                                </div>
                            </div>
                            <div className="u-overflow--hidden">
                                <TranslateInOut
                                    fade={false}
                                    y="100%"
                                    start="-100% bottom"
                                    end="top top"
                                    watch
                                >
                                    <FormRecaptchaNote />
                                </TranslateInOut>
                            </div>
                            <FadeInOut
                                watch
                            >
                                <div className={styles['c-form__btn']}>
                                    <Button
                                        label={buttonLabel.current}
                                        className="c-btn"
                                        wrapperClassName={classNames({'c-formElement--submit': isSubmitting})}
                                        type="submit"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </FadeInOut>
                        </form>
                    </div>
                    {isMounted() &&
                        <ToastContainer
                            position={toast.POSITION.BOTTOM_CENTER}
                            transition={Zoom}
                            className="c-toastify"
                        />
                    }
                </div>
            </section>
        </>
    );
}