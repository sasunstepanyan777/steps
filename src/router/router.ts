import { Provider } from '@stepsas/core';
import { Routes } from './models/routes';

@Provider()
export class Router {

    // public static routes: Routes;

    public navigate(url: string) {
        // console.log(Router.routes);
        history.pushState(null, '', url);
    }
}
