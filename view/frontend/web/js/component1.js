define([
        'ko',
        'uiComponent',
        'underscore',
        'component2'
    ],
    function (ko,
              Component,
              _,
              component2
    ) {
        'use strict';
        return Component.extend({
            defaults: {
                message: '',
                provider: '',
                'imports': {
                    'message2': '$.component2.message',
                    'message': '${ $.provider }:message'
                }
            },
            initialize: function () {
                this._super();
                console.log('Current message: ' + this.message);
                return this;
            }
        });
    }
);