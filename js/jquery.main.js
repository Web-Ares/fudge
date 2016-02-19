$(function(){

    'use strict';

    $(function(){

        $.each( $( '.site' ), function() {
            new Page ( $( this ) )
        } );

        $.each( $( '.header-menu' ), function() {
            new Menu ( $( this ) );
        } );

        $.each( $( '.form-validation' ), function() {
            new FormValidation ( $( this ) )
        } );

        $.each( $('.main-slider' ), function() {
            new SliderMain ( $( this ) );
        } );

        $.each( $('.news' ), function() {
            new News ( $( this ) );
        } );

        /*$.each( $('.countdown-timer>div' ), function() {
            new CountDown ( $( this ) );
        } );*/

        $.each( $( '.gallery' ), function(){
            new Gallery ( $( this ) )
        } );

        $.each( $( '.schedule__items' ), function(){
            new ScheduleOpen ( $( this ) )
        } );

        $('.where__layout').niceScroll({
            cursorcolor:"#f3f3f3",
            cursoropacitymin: "1",
            cursorborderradius: "3px",
            cursorborder: "none",
            cursorwidth: "5",
            enablemousewheel: true
        });

    });

    var Page = function( obj ) {

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
                        _fixedHeader();

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
            _menuItems = _menu.find( '.header-menu__drop-down' ),
            _menuItemsLink = _menu.find( '.header-menu__item' ),
            _subMenu = _menu.find( '.header-menu__sub-items' ),
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
                    subMenu = curElem.next( '.header-menu__sub-items' );

                if( _window.width() < 992 && subMenu.length ) {

                    if( curElem.parent().hasClass( 'opened' ) ){

                        curElem.parent().removeClass( 'opened' );
                        subMenu.slideUp( 300 );

                    } else {

                        _subMenu.slideUp( 300 );
                        _menuItems.removeClass( 'opened' );

                        curElem.parent().addClass( 'opened' );
                        subMenu.slideDown( 300 );

                    }

                    return false;

                }

            },
            _resetStyle = function() {

                _showBtn.removeClass( 'opened' );
                _menuItemsLink.parent().removeClass( 'opened' );
                _menu.removeAttr( 'style' );
                _subMenu.removeAttr( 'style' );

            },
            _init = function() {

                _addEvents();
                _menu[ 0 ].obj = _self;

            };

        _init();
    };

    var FormValidation = function( obj ) {

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
                    data: _obj.serialize(),
                    dataType: 'html',
                    timeout: 20000,
                    type: "GET",
                    success: function () {

                        _obj.trigger( 'reset' );

                        if ( _sentMessageMark.length ){
                            _sentMessageMark.removeClass( 'site__form-sent_hidden' );
                        }

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
            _slider = obj,
            _items = _slider.find( '.swiper-slide'),
            _window = $( window );

        //private methods
        var _addEvents = function() {

                _window.on( {

                    'load': function() {

                        _setHeight();

                    },
                    'resize': function() {

                        _setHeight();

                    }

                } );

            },
            _initSlider = function() {

                _sliderSwiper = new Swiper( _slider, {

                    paginationClickable: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    spaceBetween: 30

            });

            },
            _setHeight = function() {

                $.each( _items, function() {

                    _items.height( _slider.height() )

                } );

            },
            _init = function() {
                _initSlider();
                _addEvents();

            };

        _init();
    };

    var Gallery = function ( obj ) {

        var _self = this,
            _obj = obj,
            _wrapper = _obj.find( '.gallery__wrap' ),
            _cover = _obj.find( '.gallery__cover' ),
            _galleryItem = '.gallery__item',
            _window = $( window ),
            _btnMore = _obj.find( '.gallery__more' ),
            _btnAction = _btnMore.data( 'action' ),
            _isGallery = false,
            _request = new XMLHttpRequest();

        var _addGalleryContent = function( msg ){

                var hasItems = null;

                $.each( msg.items, function( i ){

                    var path;
                    hasItems = msg.has_items;

                    if ( this.video == undefined ){
                        path = this.href;
                    } else {
                        path = this.video;
                    }

                    var newBlock = $( '<a href="' + path + '" title="' + this.title + '" class="gallery__item hidden" style="background-image: url(' + this.dummy + ');"><span class="gallery__item-title">' + this.title + '</span></a>' );

                    if ( i == 0 || i == 4 ){
                        newBlock.addClass( 'gallery__item_height2x' );
                    }

                    if ( i == 2 || i == 4 || i == 7 ){
                        newBlock.addClass( 'gallery__item_width2x' );
                    }

                    if ( this.video ){
                        newBlock.addClass( 'gallery__item_video' );
                    }

                    _wrapper.append( newBlock );

                } );

                var newItems = _wrapper.find( '.hidden' );

                setTimeout( function(){
                    _heightAnimation( hasItems, newItems );
                }, 50 );

            },
            _addEvents = function () {

                _window.on({

                    resize: function(){

                        if( _window.width() + _getScrollWidth() >= 1000 ) {

                            if ( !_isGallery ){
                                _initGallery();
                            }

                        } else {

                            if ( _isGallery ){
                                _destroyGallery();
                            }

                        }

                    }

                });

                _btnMore.on({

                    click: function(){
                        _ajaxRequest();
                        return false;
                    }

                });

            },
            _ajaxRequest = function(){

                var galleryItem = _wrapper.find( '.gallery__item' );
                _request.abort();
                _request = $.ajax({
                    url: _btnAction,
                    data: {
                        loadedCount: galleryItem.length
                    },
                    dataType: 'json',
                    timeout: 20000,
                    type: "GET",
                    success: function ( msg ) {

                        if( _window.width() + _getScrollWidth() < 1000 ) {
                            _addGalleryContent( msg );
                        } else {
                            _cover.height( _cover.height() );
                            _destroyGallery();
                            _addGalleryContent( msg );
                            setTimeout( function(){
                                _initGallery();
                            }, 10 );
                        }

                    },
                    error: function ( XMLHttpRequest ) {
                        if( XMLHttpRequest.statusText != "abort" ) {
                            alert( "Error!" );
                        }
                    }
                });

            },
            _destroyGallery = function(){

                _wrapper.isotope( 'destroy' );
                _isGallery = false;

            },
            _getScrollWidth = function(){
                var div = document.createElement('div');
                div.style.overflowY = 'scroll';
                div.style.width = '50px';
                div.style.height = '50px';
                div.style.visibility = 'hidden';
                document.body.appendChild(div);
                var scrollWidth = div.offsetWidth - div.clientWidth;
                document.body.removeChild(div);
                return scrollWidth ;
            },
            _heightAnimation = function( hasItems, newItems ){

                _cover.animate( {
                    height: _wrapper.height()
                }, {
                    duration: 500,
                    complete: function(){

                        _cover.css( 'height', '' );

                        newItems.each( function( i ){
                            _showNewItems( $( this ),i );
                        } );

                        if ( hasItems == 0 ){
                            _removeBtnMore();
                        }

                    }
                } )

            },
            _removeBtnMore = function(){

                _btnMore.css( 'opacity', 0 );

                setTimeout( function(){

                    _btnMore.css( 'padding', 0 );

                    _btnMore.animate({
                        height: 0
                    }, {
                        duration: 500,
                        complete: function(){
                            _btnMore.remove();
                        }
                    } );

                }, 300 );

            },
            _showNewItems = function( item, index ){

                setTimeout( function(){
                    item.removeClass( 'hidden' );
                }, index * 100 );

            },
            _initGallery = function() {

                _wrapper = _obj.find( '.gallery__wrap' );
                _galleryItem = '.gallery__item';

                _wrapper.isotope({
                    itemSelector: _galleryItem,
                    masonry: {
                        columnWidth: 0
                    }
                });

                _isGallery = true;

            },
            _init = function () {

                if( _window.width() + _getScrollWidth() >= 1000 ) {
                    _initGallery();
                }

                _addEvents();
                _obj[0].obj = _self;
            };

        _init();

    };

    var ScheduleOpen = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _items = _obj.find( '.schedule__item-drop-down' ),
            _btnOpen = _items.find( '.schedule__event' ),
            _window = $( window );

        //private methods
        var _addEvents = function() {

                _btnOpen.on( {
                    'click': function() {

                        _openScheduleDetails( $( this ) );

                    }
                } );

            },
            _openScheduleDetails = function( elem )  {

                var curItem = elem,
                    curItemParent = curItem.parent( _items),
                    details = curItem.next();

                if( curItemParent.hasClass( 'opened' ) ) {

                    curItemParent.removeClass( 'opened' );
                    details.slideUp( 300 );

                } else {

                    _items.removeClass( 'opened' );
                    _btnOpen.next().slideUp( 300 );

                    curItemParent.addClass( 'opened' );
                    details.slideDown( 300 );

                }

            },
            _init = function() {

                _addEvents();
                _obj[ 0 ].obj = _self;

            };

        _init();
    };

    var News = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _btnMore = _obj.find($('.news__more')),
            _btnAction = _btnMore.data( 'action'),
            _wrapper = _obj.find($('.news__layout')),
            _request = new XMLHttpRequest();

        //private methods
        var _addEvents = function() {

                _btnMore.on({

                    click: function(){
                        _ajaxRequest();
                        return false;
                    }

                });

            },
            _addNewsContent = function( msg ){

                var hasItems = null;

                $.each( msg.items, function( i ){

                    var path;
                    hasItems = msg.has_items;

                    var newBlock = $( '<article class="news__item">' +
                        '<div class="news__picture" style="background-image:url( ' + this.picture +  ' )"></div>' +
                        '<div class="news__content">' +
                        '<time datetime="' + this.date + '" class="news__date">' + this.date + '</time>' +
                        '<h2 class="news__title">' + this.title + '</h2>' +
                        '<a href="' + this.href + '" class="btn btn_4">READ MORE</a>' +
                        '</div></article>' );

                    _wrapper.append( newBlock );

                } );

                var newItems = _wrapper.find( '.hidden' );

                setTimeout( function(){
                    _heightAnimation( hasItems, newItems );
                }, 50 );

            },
            _heightAnimation = function( hasItems, newItems ){

                newItems.each( function( i ){
                    _showNewItems( $( this ),i );
                } );

                if ( hasItems == 0 ){
                    _removeBtnMore();
                }

            },
            _showNewItems = function( item, index ){

                setTimeout( function(){
                    item.removeClass( 'hidden' );
                }, index * 100 );

            },
            _ajaxRequest = function(){

                var newsItem = _obj.find( '.news__item' );
                _request.abort();
                _request = $.ajax({
                    url: _btnAction,
                    data: {
                        loadedCount: newsItem.length
                    },
                    dataType: 'json',
                    timeout: 20000,
                    type: "GET",
                    success: function ( msg ) {

                        _addNewsContent( msg );

                    },
                    error: function ( XMLHttpRequest ) {
                        if( XMLHttpRequest.statusText != "abort" ) {
                            alert( "Error!" );
                        }
                    }
                });

            },
            _removeBtnMore = function(){

                _btnMore.css( 'opacity', 0 );

                setTimeout( function(){

                    _btnMore.css( 'padding', 0 );

                    _btnMore.animate({
                        height: 0
                    }, {
                        duration: 500,
                        complete: function(){
                            _btnMore.remove();
                        }
                    } );

                }, 300 );

            },
            _init = function() {

                _addEvents();
                _obj[ 0 ].obj = _self;

            };

        _init();
    };

} );

var initMap = function(){
    var _map = $('#map'),
        lat = _map.attr('data-lat'),
        lng = _map.attr('data-lng'),
        myLatLng = {lat: parseFloat(lat), lng: parseFloat(lng)},

        map = new google.maps.Map(_map[0], {
            zoom: 10,
            center: myLatLng,
            scrollwheel: false,
            draggable: false
        }),

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map
        });
};


