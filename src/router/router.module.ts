import { SsModule } from '../core/core';
import { Router } from './router';
import { Routes } from './models/routes';

import { RouterLinkComponent } from './router-link.component';

@SsModule({
    components: [
        RouterLinkComponent
    ],
    providers: [
        Router
    ]
})
export class RouterModule {

    public static forRoot(routes: Routes) {
        // Router.routes = routes;
        return {
            providers: [
                Router
            ]
        };
    }
}
