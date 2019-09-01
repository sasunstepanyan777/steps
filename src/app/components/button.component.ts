import { Component } from '../../core/core';

@Component({
    selector: 'app-button',
    template: `<button id="button">Click</button>`
})
export class ButtonComponent extends HTMLElement {
}
