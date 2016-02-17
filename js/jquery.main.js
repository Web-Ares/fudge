$(function(){

    'use strict';

    $(function(){

        $.each( $( '.site' ), function(){
            new Page ( $( this ) )
        } );

        $.each($('.header-menu'), function () {
            new Menu($(this));
        });

        $.each( $( '.form-validation' ), function(){
            new FormValidation ( $( this ) )
        } );

        $.each($('.main-slider'), function () {
            new SliderMain($(this));
        });

    });

    var Page = function ( obj ) {

        var _self = this,
            _obj = obj,
            _increase = _obj.find( '.site__increase' ),
            _footer = _obj.find( '.site__footer' ),
            _header = $( '.site__header' ),
            _window = $( window );

        var _addEvents = function() {

                _window.on({

                    load: function(){
                        _calculateFooterHeight();
                    },

                    resize: function(){
                        _calculateFooterHeight();
                    },

                    scroll: function() {

                        _fixedHeader();

                    }

                })

            },
            _calculateFooterHeight = function(){

                _increase.css({
                    height: _footer.innerHeight()
                });

            },
            _fixedHeader = function() {

                if( _window.scrollTop() > 0 ) {

                    _header.addClass( 'fixed' );

                } else {

                    _header.removeClass( 'fixed' );

                }

            },
            _init = function() {

                _calculateFooterHeight();
                _addEvents();
                _obj[ 0 ].obj = _self;

            };

        _init();

    };

    var Menu = function( obj ) {

        //private properties
        var _self = this,
            _menu = obj,
            _menuItems = _menu.find( '.header-menu__dropdown' ),
            _menuItemsLink = _menu.find( '.header-menu__item' ),
            _subMenu = _menu.find( '.header-menu__subitems' ),
            _window = $( window ),
            _showBtn = $( '.menu-btn' );

        //private methods
        var _addEvents = function() {

                _showBtn.on( {
                    'click': function() {

                        _openMenu( $( this ) );

                    }
                } );
                _menuItemsLink.on( {
                    'click': function(){

                        _slideSubMenu( $( this ) );

                    }
                } );
                _window.on( {
                    'resize': function() {

                        _resetStyle();

                    }
                } );

            },
            _openMenu = function( elem )  {

                var curItem = elem;

                if( curItem.hasClass( 'opened' ) ) {

                    curItem.removeClass( 'opened' );
                    _menu.slideUp( 300 );

                } else {

                    curItem.addClass( 'opened' );
                    _menu.slideDown( 300 );

                }

            },
            _slideSubMenu = function( elem ) {

                var curElem = elem,
                    subMenu = curElem.next( '.header-menu__subitems' );

                if( _window.width() < 992 && subMenu.length ) {

                    if( curElem.hasClass( 'opened' ) ){

                        curElem.removeClass( 'opened' );
                        subMenu.slideUp( 300 );

                    } else {

                        _subMenu.slideUp( 300 );
                        _menuItems.find( 'a' ).removeClass( 'opened' );

                        curElem.addClass( 'opened' );
                        subMenu.slideDown( 300 );

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

    var FormValidation = function ( obj ) {

        var _self = this,
            _obj = obj,
            _path = _obj.attr( 'action' ),
            _inputs = _obj.find( $( "[required]" ) ),
            _sentMessageMark = _obj.find( $( ".site__form-sent" ) ),
            _request = new XMLHttpRequest();

        var _addEvents = function() {

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

                        return false;

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
            _ajaxRequest = function() {

                _request.abort();
                _request = $.ajax({
                    url: _path,
                    data: _obj.serialize(), // It sends the entire form
                    dataType: 'html',
                    timeout: 20000,
                    type: "GET",
                    success: function () {
                        _obj.trigger( 'reset' );
                        _sentMessageMark.removeClass( 'site__form-sent_hidden' );
                    },
                    error: function ( XMLHttpRequest ) {
                        if( XMLHttpRequest.statusText != "abort" ) {
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

    var SliderMain = function( obj ) {

        //private properties
        var _self = this,
            _sliderSwiper,
            _slider = obj;

        //private methods
        var _initSlider = function() {

                _sliderSwiper = new Swiper( _slider, {

                    paginationClickable: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    spaceBetween: 30

                });

            },
            _init = function() {
                _initSlider();

            };

        _init();
    };

} );
