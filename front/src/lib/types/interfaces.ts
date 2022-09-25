export enum ButtonTypes {
    "button",
    "submit",
    "reset",
    "color",
    null,
    undefined
}

export class Color {
    public label: string = '';
    public value: string = '';

    public constructor(label: string, value: string) {
        this.label = label;
        this.value = value;
    }
}