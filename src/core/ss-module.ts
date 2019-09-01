import 'reflect-metadata';
import { IModuleDecorator } from './models/module.model';
import { Type } from './models/type';

export function SsModule(config: IModuleDecorator) {

    return (mod: any): void => {

        function resolve<T>(target: Type<any>): T {
            if (target.name in mod.container) {
                return mod.container[target.name];
            }

            // tokens are required dependencies, while injections are resolved tokens from the Injector
            const tokens = Reflect.getMetadata('design:paramtypes', target) || [];
            const injections = tokens.map((token: Type<any>): Type<any> => resolve<any>(token));

            const instance = new target(...injections);
            mod.container[target.name] = instance;
            return instance;
        }

        mod.container = {};

        // Resolve imports
        if (config.imports) {
            for (const imp of config.imports) {
                mod.container = {
                    ...mod.container,
                    ...imp.container
                };
            }
        }

        // Resolve providers
        for (const Provider of config.providers) {
            resolve(Provider as Type<any>);
        }

        // Resolve components
        if (config.components) {
            for (const Component of config.components) {
                const tokens = Reflect.getMetadata('design:paramtypes', Component) || [];
                const injections = tokens.map((token: Type<any>): Type<any> => mod.container[token.name]);
                customElements.define(Component.selector, class extends Component {
                    constructor() {
                        super(...injections);
                    }
                });
            }
        }
    };
}
