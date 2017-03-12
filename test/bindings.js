import Label from '../src/label';

export default function() {
    new Label( '#label-string-text', 'label-string-text', {
        text: 'Foo'
    } );

    new Label( '#label-number-text', 'label-number-text', {
        text: 42
    } );

    new Label( '#label-getter-text', 'label-getter-text', {
        text() {
            return 'Bar';
        }
    } );
};
