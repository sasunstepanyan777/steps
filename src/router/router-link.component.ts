import { Component, ConnectedCallback } from '../core/core';
import { Router } from './router';

@Component({
  selector: 'router-link',
  extends: 'a'
})
export class RouterLinkComponent extends HTMLAnchorElement implements ConnectedCallback {

  constructor(private readonly router: Router) {
    super();
    this.addEventListener('click', ($event): void => {
      $event.preventDefault();
      this.router.navigate(this.href);
    });
  }

  public connectedCallback(): void {
    this.innerText = this.getAttribute('link');
  }
}
