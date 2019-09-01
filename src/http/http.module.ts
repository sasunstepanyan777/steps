import { SsModule } from '../core/core';
import { HttpProvider } from './http.provider';

@SsModule({
    providers: [
        HttpProvider
    ]
})
export class HttpModule { }