define( [
    "../main"
], function(
        WidgetLabel
    ) {
    return function( UI ) {
        new WidgetLabel(
            "#label-first",
            "label-1",
            {
                text: function() {
                    return "Label \"" + this.ID + "\""
                }
            }
        );

        new WidgetLabel(
            "#label-second",
            "label-2",
            {
                text: function() {
                    return "Label \"" + this.ID + "\" " + Date.now();
                },
                renderDependence: [ "label-3" ]
            }
        );

        new WidgetLabel(
            "#label-third",
            "label-3",
            {
                text: function() {
                    return "label \"" + this.ID + "\" " + Date.now();
                }
            }
        )
    };
} );
