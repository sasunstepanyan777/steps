import { Provider } from '@stepsas/core';
import { HttpProvider } from '@stepsas/http';
import { Observable } from 'rxjs';

@Provider()
export class AppService {

    constructor(private readonly httpProvider: HttpProvider) { }

    public getData(): Observable<any> {
        return this.httpProvider.get('http://localhost:3000', {});
    }
}
