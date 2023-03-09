class LinkTo extends HTMLElement {
    constructor() {
        super();
        this.className = 'w3-button w3-round-xlarge w3-theme-l1 w3-border link'
        this.target = '_blank'
    }
}

class HoverShow extends HTMLElement {
    constructor() {
        super();
        this.className = 'w3-button w3-round-xlarge w3-theme-l1 w3-border link'
        const currentText = this.innerText;
        this.onmouseover = (ev) => {
            this.innerText = this.dataset.txt;
        }
        this.onmouseleave = (ev) => {
            this.innerText = currentText;
        }
    }
}

customElements.define("hover-show", HoverShow);
customElements.define("link-to", LinkTo);