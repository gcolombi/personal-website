import { Input } from '@/types/form';
import styles from '../../styles/modules/FormInput.module.scss';
import { ReactNode } from 'react';
import classNames from 'classnames';

export default function FormInput({
    htmlFor,
    label,
    type = 'text',
    id,
    name,
    placeholder=" ",
    value,
    required,
    className,
    wrapperClassName,
    register,
    errors,
}: Input) {
    return(
        <div className={wrapperClassName}>
            <div
                className={classNames(
                    styles['c-formElement'],
                    styles[className],
                    {
                        [styles['c-floatingLabel']]: label,
                        [styles['has-error']]: errors?.message
                    }
                )}
            >
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    required={required}
                    {...register}
                />
                {label && htmlFor &&
                    <label htmlFor={htmlFor}>{label}{required && ' *'}</label>
                }
                <span className={styles['c-formElement--focusLine']} />
            </div>
            {errors?.message &&
                <label htmlFor={htmlFor}>{errors?.message as ReactNode}</label>
            }
        </div>
    );
}