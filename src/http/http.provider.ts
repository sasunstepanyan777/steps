import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Provider } from '@stepsas/core';

@Provider()
export class HttpProvider {

    public get<T>(url: string, config: any): Observable<T> {
        return ajax.get(url, config).pipe(
            map((response: AjaxResponse): T => {
                return response.response;
            })
        );
    }
}
