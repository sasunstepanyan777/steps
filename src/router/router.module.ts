import { SsModule } from '../core/core';
import { Router } from './router';

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

    public static forRoot() {

    }
}
