// export type Color = {
//     label: String,
//     value: String
// }

export class Color {
    public label: String = '';
    public value: String = '';

    public constructor(label: String, value: String) {
        this.label = label;
        this.value = value;
    }
}