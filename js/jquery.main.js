$(function(){

    'use strict';

    $(function(){

        $.each( $( '.site' ), function(){
            new Page ( $( this ) )
        } );

    });

    var Page = function ( obj ) {

        var _self = this,
            _obj = obj,
            _increase = _obj.find( '.site__increase'),
            _footer = _obj.find( '.site__footer'),
            _window = $( window );

        var _addEvents = function () {

                _window.on({

                    load: function(){
                        _calculateFooterHeight();
                    },

                    resize: function(){
                        _calculateFooterHeight();
                    }

                })

            },
            _calculateFooterHeight = function(){
                _increase.css({
                    'height': _footer.innerHeight()
                });
            },
            _init = function () {
                _addEvents();
            };

        _init();

    };

} );
