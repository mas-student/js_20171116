import Block from '../block';

import template from './chat.pug';

export default class Chat extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = template({
        });
    }

}
