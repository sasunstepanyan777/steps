import { SsModule } from '../core/core';
import { Router } from './router';

@SsModule({
    providers: [
        Router
    ]
})
export class RouterModule {

    public static forRoot() {

    }
}
