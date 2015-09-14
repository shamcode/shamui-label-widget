/**
 * Виджет для обычной строки текста
 * @module shamUI/widgets/label
 * @see WidgetLabel
 */
define( [
    "shamUI"
], function( shamUI ) {
    var WidgetLabel = shamUI.Class( shamUI.Widget,
        /** @lends WidgetLabel.prototype */
        {
            /**
             * @constructs
             * @extends Widget
             * @classdesc Виджет для обычной строки текста
             */
            constructor: function() {
                return WidgetLabel.$super.apply( this, arguments );
            },
            defaultOptions: {
                text: function() { return "" },
                actionSequence: [ "render", "bindEvents" ],
                bindOnce: false
            },
            html: function() {
                return this.options.text.call( this );
            }
        }
    );
    return WidgetLabel;
} );
