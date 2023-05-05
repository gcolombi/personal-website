import { Textarea } from '@/types/form/elements';
import styles from '../../styles/modules/FormTextarea.module.scss';
import classNames from 'classnames';

export default function FormTextarea({
    htmlFor,
    label,
    id,
    placeholder=" ",
    required,
    className,
    wrapperClassName,
    register,
    errors
}: Textarea) {
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
                <textarea
                    id={id}
                    placeholder={placeholder}
                    required={required}
                    {...register}
                />
                {label && htmlFor &&
                    <label htmlFor={htmlFor}>{label}{required && ' *'}</label>
                }
                <span className={styles['c-formElement--focusLine']} />
            </div>
            {errors?.message &&
                <label htmlFor={htmlFor}>{errors?.message}</label>
            }
        </div>
    );
}