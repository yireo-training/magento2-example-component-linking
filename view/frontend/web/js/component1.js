define([
        'uiComponent',
        'component2'
    ],
    function (
              Component,
              component2Function
    ) {
        'use strict';
        var component2 = component2Function();

        return Component.extend({
            defaults: {
                message: 'Hello from component 1'
            },
            initialize: function() {
                this._super();
                this.message = component2.message;
                return this;
            }
        });
    }
);
