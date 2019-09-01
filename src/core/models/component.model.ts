export interface IComponentDecorator {
    readonly selector: string;
    readonly template?: string;
    readonly extends?: string;
}
