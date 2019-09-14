import { Component, ConnectedCallback, DisconnectedCallback } from '../core/core';
import { AppService } from './app.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    template: require('./app.component.html')
})
export class AppComponent extends HTMLElement implements ConnectedCallback, DisconnectedCallback {

    private subscription: Subscription;

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

    public disconnectedCallback(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
