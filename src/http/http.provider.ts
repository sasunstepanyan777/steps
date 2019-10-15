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

    public post<T>(url: string, body: any, config: any): Observable<T> {
        return ajax.post(url, body, config).pipe(
            map((response: AjaxResponse): T => {
                return response.response;
            })
        );
    }

    public put<T>(url: string, body: any, config: any): Observable<T> {
        return ajax.put(url, body, config).pipe(
            map((response: AjaxResponse): T => {
                return response.response;
            })
        );
    }

    public delete<T>(url: string, config: any): Observable<T> {
        return ajax.delete(url, config).pipe(
            map((response: AjaxResponse): T => {
                return response.response;
            })
        );
    }
}
