'use strict';

import Block from '../block';
import template from './message.pug';
import './message.scss';

export default class Message extends Block {

    constructor(node, options = {}) {
        let div = document.createElement('div');
        node.appendChild(div);
        super(div, options);
    }

    render() {
        this.node.innerHTML = template({
            user: this.options.user,
            message: this.options.message,
            isOwner: false
        });
    }

}
