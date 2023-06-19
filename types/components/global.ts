/* Call to action */
export type CallToActionProps = {
    index: string;
    buttonHref: string | Object;
} & CallToActionContent;

export type CallToActionContent = {
    title: string;
    buttonLabel: string;
}