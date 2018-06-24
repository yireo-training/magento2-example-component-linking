define(
    [
        'uiComponent',
        'ko'
    ],
    function (Component, ko) {
        'use strict';
        return Component.extend({
            defaults: {
                message: 'Hello from component 2',
                tracks: {
                    message: true
                }
            }
        });
    }
);