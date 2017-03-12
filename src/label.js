import { Widget, options } from 'sham-ui';

export default class Label extends Widget {
    @options
    text = '';

    html() {
        const text = this.options.text;
        return typeof text === 'function' ? text() : text;
    }
}
