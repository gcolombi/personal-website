/* Form */
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