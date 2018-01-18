import Block from '../block';

import template from './auth.pug';

export default class Auth extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = template({
        });
    }

}
