import Block from '../block';

import template from './message.pug';

export default class Message extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = template({
            direction: this.options.direction,
            header: this.options.header,
            body: this.options.body,
        });
    }

}
