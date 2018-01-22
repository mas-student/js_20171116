import View from '../view';
import template from './chat.pug';

import MessageCreate from '../../blocks/message-create/message-create';
import Message from '../../blocks/message/message';

import User from '../../models/user';

export default class Chat extends View {

    constructor(node) {
        super(node);
        this.node.innerHTML = template();

        let model = User.load();

        if (!model) {
            location.href = './#auth';
        }

        this.form = new MessageCreate(document.querySelector('.js-form'));
        this.form.render();

        this.messages = []

        // this.messages = new Message(this.node.querySelector('.js-list'),
        //     {user: 'me', message: 'dsafsfda'});
        // this.messages.render();

        this.form.textarea.onPress = (evt) => {
                if (evt.key == 'Enter' && evt.ctrlKey)
                    this.send();
            };
        this.form.button.onClick = () => { this.send() };
    }

    send() {
        let user = User.load();
        // alert('Отправлено ' +    this.form.textarea.node.children[0].value);
        let text = this.form.textarea.node.children[0].value;
        this.form.textarea.node.children[0].value = '';

        let message = new Message(this.node.querySelector('.js-list'),
            {user: user.name, message: text});
        message.render();

        this.messages.push(message);
    }

}
