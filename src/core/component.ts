import { IComponentDecorator } from './models/component.model';

export function Component(config: IComponentDecorator)  {
    return <T extends {new(...args: any[]): {}}>(constructor: T): any => {
        validateSelector(config.selector);
        return class extends constructor {
            public static selector = config.selector;
            public static extends = config.extends;
            public innerHTML = config.template || '';
        };
    };
}

const validateSelector = (selector: string): void => {
    if (selector.indexOf('-') <= 0) {
        throw new Error('You need at least 1 dash in the custom element name!');
    }
};
