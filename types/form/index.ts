import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

/* Form */
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

export type FormData = {
    firstname: string;
    lastname: string;
    email: string;
    message: string;
}

export type Labels = {
    [key: string]: string;
}

export type Fields = {
    [key: string]: string;
}

export type FieldsValidationErrors = {
    [key: string ]: string;
}

/* Email */
export interface Mail {
    siteName: string;
    host: string;
    template: string;
    labels: Labels;
    fields: Fields;
    to: string;
    from: MailFrom;
    subject: string;
    attachments?: Attachment[];
    send: () => Promise<void>;
    generateTemplate: () => MailTemplate;
}

export type MailFrom = {
    name?: string;
    email: string;
};

export type MailTemplate = {
    html: string;
}

export type Attachment = {
    content: string;
    filename: string;
    type?: string;
    disposition?: string;
    contentId?: string;
}