import { Component } from '../core/core';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    template: require('./app.component.html')
})
export class AppComponent extends HTMLElement {

    constructor(private readonly appService: AppService) {
        super();
    }

    public connectedCallback(): void {
        this.appService.getData().subscribe(
            (result: any): void => {
                console.log(result.data);
            }
        );
    }
}
