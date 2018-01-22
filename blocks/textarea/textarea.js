import Block from '../block';

export default class Textarea extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = `
        <textarea class="textarea" rows="${this.options.rows}" placeholder="${this.options.placeholder}"></textarea>`;

        this.node.children[0].addEventListener('keypress', (evt) => { this.onPress(evt); })
    }

    onPress() {}

}
