import { IComponentDecorator } from './models/component.model';

export function Component(config: IComponentDecorator)  {
    return <T extends {new(...args: any[]): {}}>(constructor: T): any => {
        return class extends constructor {
            public static selector = config.selector;
            public innerHTML = attachView(config);
        };
    };
}

function attachView(config: IComponentDecorator): string {
    return config.template ? config.template : '';
}
