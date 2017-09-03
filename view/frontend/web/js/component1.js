define([
        'ko',
        'uiComponent',
        'underscore'
    ],
    function (ko,
              Component,
              _
    ) {
        'use strict';
        return Component.extend({
            defaults: {
                message: 'Hello from component 1',
                imports: {
                    message: '${ $.provider }:message'
                }
            }
        });
    }
);
