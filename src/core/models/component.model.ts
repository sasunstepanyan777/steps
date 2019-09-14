export interface IComponent {
    readonly selector: string;
    readonly template?: string;
    readonly extends?: string;
}
