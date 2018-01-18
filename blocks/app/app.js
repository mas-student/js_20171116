import Button from '../button/button';
import Block from '../block';
import Textarea from '../textarea/textarea';
import Input from '../input/input';

import template from './app.pug';

class App extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        let body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        this.node.innerHTML = template({
            space: ' ',
            he: 'Василий Пупкин',
            you: 'Вы',
            body: body,
            nums: [1,2,3,4]
        });

        let button = new Button(this.node.querySelector('.js-submit-name'), {
            text: 'Войти'
        });

        let input = new Input(this.node.querySelector('.js-name'), {
            value: '',
            placeholder: 'Введите имя'
        });

        let buttonMessage = new Button(this.node.querySelector('.js-submit'), {
            text: 'Отправить'
        });

        let textareaMessage = new Textarea(this.node.querySelector('.js-textarea'), {
            placeholder: 'Введите сообщение',
            rows: 5
        });

        button.render();
        input.render();
        textareaMessage.render();
        buttonMessage.render();
    }

}

window.addEventListener('DOMContentLoaded', () => {
    let app = new App(document.querySelector('.js-app'));
    app.render();
});
