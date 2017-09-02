define(
    [
        'ko',
        'uiComponent',
        'underscore'
    ],
    function (ko,
              Component,
              _) {
        'use strict';
        return Component.extend({
            defaults: {
                message: 'Hello from component 2',
                exports: {
                    message: 'component1:message'
                }
            },
            initialize: function () {
                this._super();
                return this;
            }
        });
    }
);