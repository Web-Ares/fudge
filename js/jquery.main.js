$(function(){

    'use strict';

    $(function(){

        $.each( $( '.site' ), function(){
            new Page ( $( this ) )
        } );

        $.each($('.header-menu'), function () {
            new Menu($(this));
        });

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

    var Menu = function(obj) {

        //private properties
        var _self = this,
            _menu = obj,
            _menuItems = _menu.find('.header-menu__wrap>ul>li'),
            _menuItemsLink = _menu.find('.header-menu__item'),
            _subMenu = _menu.find('.header-menu__subitems'),
            _window = $(window),
            _showBtn = $('.menu-btn');

        //private methods
        var _addEvents = function() {

                _showBtn.on( {
                    click: function () {

                        _openMenu( $(this) );

                    }
                } );
                _menuItemsLink.on( {
                    'click': function(){

                        _slideSubMenu( $(this) );

                    }
                } );
                //_menuItems.on( {
                //    'mouseenter': function() {
                //
                //        var curElem = $(this).find('a'),
                //            subMenu = curElem.next( '.header-menu__subitems' );
                //
                //        if( _window.width() >= 992 && subMenu.length ) {
                //
                //            curElem.addClass( 'opened' );
                //
                //        }
                //
                //    },
                //    'mouseleave': function() {
                //        var curElem = $( this ).find( 'a' ),
                //            subMenu = curElem.next( '.header-menu__subitems' );
                //
                //        if( _window.width() >= 992 && subMenu.length ){
                //
                //            curElem.removeClass( 'opened' );
                //
                //        }
                //    }
                //});

                _window.on({
                    resize: function () {

                        _resetStyle();

                    }
                });

            },
            _openMenu = function(elem) {

                var curItem = elem;

                if(curItem.hasClass( 'opened' ) ) {

                    curItem.removeClass( 'opened' );
                    _menu.slideUp(300);

                } else {

                    curItem.addClass( 'opened' );
                    _menu.slideDown(300);

                }

            },
            _slideSubMenu = function(elem) {

                var curElem = elem,
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

            },
            _resetStyle = function() {

                _showBtn.removeClass( 'opened' );
                _menuItemsLink.removeClass( 'opened' );
                _menu.removeAttr( 'style' );
                _subMenu.removeAttr( 'style' );

            },
            _init = function() {
                _addEvents();
            };

        _init();
    };

} );
