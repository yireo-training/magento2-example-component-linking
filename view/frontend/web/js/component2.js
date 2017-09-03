define(
    [
        'uiComponent'
    ],
    function (Component) {
        'use strict';
        return Component.extend({
            defaults: {
                message: 'Hello from component 2'
            }
        });
    }
);