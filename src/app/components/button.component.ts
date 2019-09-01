import { Component } from '../../core/core';

@Component({
    selector: 'app-button',
    extends: 'a',
    template: 'Click'
})
export class ButtonComponent extends HTMLAnchorElement {

    constructor() {
        super();
        this.addEventListener('click', ($e: any): void => {
            $e.preventDefault();
            console.log('asdasd');
        });
    }
}
