import { SsModule } from '@stepsas/core';
import { HttpProvider } from './http.provider';

@SsModule({
    providers: [
        HttpProvider
    ]
})
export class HttpModule { }