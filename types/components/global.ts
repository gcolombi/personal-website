/* Meta data */
export type MetaDataProps = {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
}

/* Call to action */
export type CallToActionProps = {
    index: string;
    buttonHref: string | Object;
} & CallToActionContent;

export type CallToActionContent = {
    title: string;
    buttonLabel: string;
}