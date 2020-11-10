'use strict';

class DomElement {
    constructor(selector, height, width, bg, fontSize) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    }
    newCreateElement() {
        let div;
        if (this.selector[0] === '.') {
            div = document.createElement('div');
            div.className = this.selector.slice(1);
        } else if (this.selector[0] === '#') {
            div = document.createElement('p');
            div.id = this.selector.slice(1);
        }
        div.style.cssText = `height: ${this.height}px;
        width: ${this.width}px;
        background-color: ${this.bg};
        font-size: ${this.fontSize}px;
        `;
        div.textContent = 'Привет';
        document.body.append(div);
    }
}

let elem = new DomElement('.class', 300, 500, 'purple', 20);
elem.newCreateElement();