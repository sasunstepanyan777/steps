export interface ConnectedCallback {
  connectedCallback(): void;
}

export interface DisconnectedCallback {
  disconnectedCallback(): void;
}

export interface AttributeChangedCallback {
  attributeChangedCallback(attrName: string, oldVal: any, newVal: any): void;
}
