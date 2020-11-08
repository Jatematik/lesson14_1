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
        div.style.height = this.height + 'px';
        div.style.width = this.width + 'px';
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize + 'px';
        div.textContent = 'Привет';
        document.body.append(div);
    }
}

let elem = new DomElement(prompt('selector'), prompt('height'), prompt('width'), prompt('bg'), prompt('fontSize'));
elem.newCreateElement();