/* Models */
export type Models = Model[];

export type Model = ({ visible }: ModelProps) => JSX.Element;

export type ModelProps = {
    visible: boolean;
}