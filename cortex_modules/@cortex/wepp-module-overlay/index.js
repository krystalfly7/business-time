
var $ = require('@cortex/zepto');
var Event = require('@cortex/wepp-module-event');
var _lastShowTime=0;
var TouchEventInterval=500;
var createOverlay = function (zindex, opacity) {
    var CSS = {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        'background': 'rgba(0,0,0,' + (opacity ? opacity : '.6') + ')',
        'z-index': zindex || 200,
        position: 'fixed',
        display: 'none'
    };
    return $('<div class="overlay"></div>').css(CSS);
};

/**
 * @constructor
 * @param {Number} zindex default is 200
 *
 * */
function Overlay(zindex, hide, opacity) {
    var self = this;
    /**
     * @property {ZeptoElement} $el
     * */
    var ol = this.$el = createOverlay(zindex, opacity).appendTo('body');

    ol.on('touchstart touchmove touchend', function (e) {
        e.preventDefault();
    });

    ol.on('touchstart click', function (e) {
        var now=+new Date();
        (now-_lastShowTime>TouchEventInterval)&&!hide && self.hide();//增加浮层延时，防止双击导致浮层出现又消失
    });
}

/**
 * 显示overlay
 * @method
 * @public
 * */
Overlay.prototype.show = function () {
    this.$el.show();
    this.trigger('show');
    _lastShowTime=+new Date();
};

/**
 * 隐藏overlay
 * @method
 * @public
 * */
Overlay.prototype.hide = function () {
    this.$el.hide();
    this.trigger('hide');
};

//扩展Event
Event.extendTo(Overlay.prototype);

module.exports = Overlay;

