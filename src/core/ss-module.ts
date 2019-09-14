import 'reflect-metadata';
import { IModule } from './models/module.model';
import { Type } from './models/type';

export function SsModule(metadata: IModule) {

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
        if (metadata.imports) {
            for (const imp of metadata.imports) {
                mod.container = {
                    ...mod.container,
                    ...imp.container
                };
            }
        }

        if (metadata.providers) {
            // Resolve providers
            for (const Provider of metadata.providers) {
                resolve(Provider as Type<any>);
            }
        }

        // Resolve components
        if (metadata.components) {
            for (const Component of metadata.components) {
                const tokens = Reflect.getMetadata('design:paramtypes', Component) || [];
                const injections = tokens.map((token: Type<any>): Type<any> => mod.container[token.name]);
                customElements.define(Component.selector, class extends Component {
                    constructor() {
                        super(...injections);
                    }
                }, Component.extends && { extends: Component.extends });
            }
        }
    };
}
