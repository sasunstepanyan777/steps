import { IComponentMetadataConfig } from '../models/component.metadata.model';

export function Component(metadata: IComponentMetadataConfig)  {
    return <T extends {new(...args: any[]): {}}>(constructor: T): any => {
        validateSelector(metadata.selector);
        return class extends constructor {
            public static selector = metadata.selector;
            public static extends = metadata.extends;
            public innerHTML: string;

            public connectedCallback(): void {
                this.innerHTML = metadata.template || '';
                if (constructor.prototype.connectedCallback) {
                    constructor.prototype.connectedCallback.call(this);
                }
            }
        };
    };
}

const validateSelector = (selector: string): void => {
    if (selector.indexOf('-') <= 0) {
        throw new Error('You need at least 1 dash in the custom element name!');
    }
};
