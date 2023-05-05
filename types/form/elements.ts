import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

/* Elements */
export interface Input extends InputHTMLAttributes<HTMLInputElement> {
    htmlFor: string;
    label: string;
    id: string;
    className: string;
    wrapperClassName?: string;
    register: UseFormRegisterReturn;
    errors: FieldError | undefined;
}

export interface Textarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    htmlFor: string;
    label: string;
    id: string;
    className: string;
    wrapperClassName?: string;
    register: UseFormRegisterReturn;
    errors: FieldError | undefined;
}