import { Fields, Labels } from '.';

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