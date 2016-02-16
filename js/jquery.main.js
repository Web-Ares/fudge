$(function(){

    'use strict';

    $(function(){

        $.each( $( '.site' ) , function(){
            new Page ( $( this ) )
        } );

        $.each($('.header-menu'), function () {
            new Menu($(this));
        });

        $.each( $( '.form-validation' ), function(){
            new FormValidation ( $( this ) )
        } );

    });

    var Page = function ( obj ) {

        var _self = this,
            _obj = obj,
            _increase = _obj.find( '.site__increase' ),
            _footer = _obj.find( '.site__footer' ),
            _window = $( window );

        var _addEvents = function() {

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
                    height: _footer.innerHeight()
                });

            },
            _init = function() {

                _calculateFooterHeight();
                _addEvents();
                _obj[ 0 ].obj = _self;

            };

        _init();

    };

    var Menu = function (obj) {

        //private properties
        var _self = this,
            _menu = obj,
            _menuItems = _menu.find( '.header-menu__wrap>ul>li' ),
            _subMenu = _menu.find( '.header-menu__subitems' ),
            _window = $( window ),
            _showBtn = $( '.menu-btn' );

        //private methods
        var _addEvents = function () {

                _showBtn.on( {
                    click: function () {
                        var curItem = $( this );

                        if(curItem.hasClass( 'opened' ) ) {

                            curItem.removeClass( 'opened' );
                            _menu.slideUp(300);

                        } else {

                            curItem.addClass( 'opened' );
                            _menu.slideDown(300);

                        }

                    }
                } );
                _menuItems.find('a').on( {
                    'click': function(){
                        var curElem = $(this),
                            subMenu = curElem.next( '.header-menu__subitems' );

                        if(_window.width() < 992 && subMenu.length ) {

                            if(curElem.hasClass( 'opened' ) ){

                                curElem.removeClass('opened');
                                subMenu.slideUp(300);

                            } else {

                                _subMenu.slideUp(300);
                                _menuItems.find('a').removeClass('opened');

                                curElem.addClass('opened');
                                subMenu.slideDown(300);

                            }

                            return false;

                        }

                    }
                } );
                _menuItems.on( {
                    'mouseenter': function() {

                        var curElem = $(this).find('a'),
                            subMenu = curElem.next( '.header-menu__subitems' );

                        if( _window.width() >= 992 && subMenu.length ) {

                            curElem.addClass( 'opened' )

                        }

                    },
                    'mouseleave': function() {
                        var curElem = $( this ).find( 'a' ),
                            subMenu = curElem.next( '.header-menu__subitems' );

                        if( _window.width() >= 992 && subMenu.length ){

                            curElem.removeClass( 'opened' )

                        }
                    }
                });
                $(document).on(
                    "click",
                    ".header__menu>ul>li>ul",
                    function( event ){
                        event = event || window.event;

                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                );
                $(document).on(
                    "click",
                    "body",
                    function(){
                        //_subMenu.slideUp(300);
                        //_menuItems.find('a').removeClass('opened');
                    }
                );

                _window.on({
                    load: function () {
                    },
                    resize: function () {

                        _showBtn.removeClass( 'opened' );
                        _menuItems.find( 'a' ).removeClass( 'opened' );
                        _menu.attr( 'style', '' );
                        _subMenu.attr( 'style', '' );

                    }
                });

            },
            _init = function () {
                _addEvents();
            };

        _init();
    };

    var FormValidation = function ( obj ) {

        var _self = this,
            _obj = obj,
            _path = _obj.attr( 'action' ),
            _inputs = _obj.find( $( "[required]" )),
            _request = new XMLHttpRequest();

        var _addEvents = function () {

                _obj.on({

                    'submit': function(){

                        $.each( _inputs, function(){

                            var curItem = $(this),
                                curAttr = curItem.attr( 'type' );

                            if ( curItem.val() == '' ) {
                                curItem.addClass( 'form-validation__error' );
                            }

                            if ( curAttr == 'email' ){
                                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                                if ( pattern.test( curItem.val() ) == false ){
                                    curItem.addClass( 'form-validation__error' );
                                }
                            }

                        } );

                        if ( _obj.find( '.form-validation__error').length ){
                            return false;
                        } else {
                            _ajaxRequest();
                        }

                    }

                });

                _inputs.on({

                    'focus': function(){

                        var curItem = $( this );

                        if( curItem.hasClass( 'form-validation__error' )){
                            curItem.removeClass( 'form-validation__error' );
                        }

                    }

                });

            },
            _ajaxRequest = function(){

                _request.abort();
                _request = $.ajax({
                    url: _path,
                    data: _obj.serialize(), // It sends the entire form
                    dataType: 'html',
                    timeout: 20000,
                    type: "POST",
                    success: function ( msg ) {
                        _obj.trigger( 'reset' );
                        console.log(msg);
                        return false;
                    },
                    error: function ( XMLHttpRequest ) {
                        if ( XMLHttpRequest.statusText != "abort" ) {
                            alert( "Error!" );
                        }
                    }
                });

            },
            _init = function () {
                _addEvents();
                _obj[ 0 ].obj = _self;
            };

        _init();

    };

} );
