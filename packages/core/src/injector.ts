import 'reflect-metadata';
import { Type } from '../models/type';

/**
 * The Injector stores services and resolves requested instances.
 */
export const Injector = new class {

  /**
   * Resolves instances by injecting required services
   * @template T
   * @param {Type<any>} target
   * @returns {T}
   */
  public resolve<T>(target: Type<any>): T {
    // tokens are required dependencies, while injections are resolved tokens from the Injector
    const tokens = Reflect.getMetadata('design:paramtypes', target) || [];
    const injections = tokens.map((token: Type<any>): Type<any> => Injector.resolve<any>(token));

    return new target(...injections);
  }
};
