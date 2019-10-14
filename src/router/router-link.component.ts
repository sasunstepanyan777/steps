import { Component, ConnectedCallback } from '@stepsas/core';
import { Router } from './router';

@Component({
  selector: 'router-link',
  extends: 'a'
})
export class RouterLinkComponent extends HTMLAnchorElement implements ConnectedCallback {

  constructor(private readonly router: Router) {
    super();
    this.addEventListener('click', ($event): void => {
      const queries = this.getAttribute('queries').replace(/'/g, '"');
      const parsed = JSON.parse(queries).join('&');
      console.log(parsed);
      $event.preventDefault();
      this.router.navigate(`${this.href}?${parsed}`);
    });
  }

  public connectedCallback(): void {
    this.innerText = this.getAttribute('link');
  }
}
