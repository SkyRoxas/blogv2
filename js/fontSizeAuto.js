(function ($) {
  'use strict'

  var defaults = {
    maxSize: 40,
    minSize: 10
  }

    /**
     * FontAbsolute function - description
     * @constructor
     * @param  {string} $element description
     * @param  {number} $limitHeightItem description
     * @param  {object} $options description
     * @param  {string|array}  $options description
     * @return {type}          description
     */

  var FontAbsolute = function ($element, $limitHeightItem, $options, $moveHeightItem) {
    this.element = $element
    this.limitHeightItem = $limitHeightItem
    this.option = $options
    this.moveHeightItem = $moveHeightItem
  }

    /**
     * set fontSizeSet
     *
     * @fires FontAbsolute#fontSizeSet
     */

  FontAbsolute.prototype.fontSizeSet = function ($method) {
    var $element = this.element
    var fontSize
    var fontHeight
    var resultHeight = 0

    if (typeof this.moveHeightItem === 'string') {
      resultHeight = $(this.moveHeightItem).innerHeight()
    } else if (this.moveHeightItem instanceof Array) {
      for (var i = 0; i < this.moveHeightItem.length; i++) {
        $(this.moveHeightItem[i]).each(function () {
          resultHeight = resultHeight + $(this).innerHeight()
        })
      }
    } else {
      resultHeight = 0
    }
    resultHeight = $(this.limitHeightItem).innerHeight() - resultHeight

    switch ($method) {
      case ('up'):
        fontSize = $element.css('font-size').replace('px', '')
        fontHeight = $element.innerHeight()
        while (fontHeight < resultHeight) {
          fontSize = fontSize * 1.2
          $element.css('font-size', fontSize)
          fontHeight = $element.innerHeight()
        }
        break
      case ('down'):
        fontSize = $element.css('font-size').replace('px', '')
        fontHeight = $element.innerHeight()
        while (fontHeight > resultHeight) {
          fontSize = fontSize * 0.6
          $element.css('font-size', fontSize)
          fontHeight = $element.innerHeight()
        }
        break
      default:
    }
    if (fontSize > this.option.maxSize) {
      $element.css('font-size', this.option.maxSize)
    } else if (fontSize < this.option.minSize) {
      $element.css('font-size', this.option.minSize)
    }
  }

    /**
     * resizeDecide function - description
     *
     * @param  {string} $method   description
     * @param  {type} $callback description
     * @return {type}           description
     */

  FontAbsolute.prototype.resizeDecide = function ($callbackUp, $callbackDown) {
    var timer

    var previousDimensions = {
      width: $(window).width(),
      height: $(window).height()
    }

    $(window).resize(function () {
      var newDimensions = {
        width: $(window).width(),
        height: $(window).height()
      }
      if (timer) {
        window.clearTimeout(timer)
      }
      timer = setTimeout(function () {
        if (newDimensions.width > previousDimensions.width) {
          $callbackUp()
        } else {
          $callbackDown()
        }
        previousDimensions = newDimensions
      }, 100)
    })
  }

  $.fn.FontAbsolute = function ($limitHeightItem, $options, $moveHeightItem) {
    var k = new FontAbsolute(this, $limitHeightItem, $.extend(defaults, $options), $moveHeightItem)

    k.fontSizeSet('down')
    k.fontSizeSet('up')

    k.resizeDecide(function () {
      k.fontSizeSet('up')
    }, function () {
      k.fontSizeSet('down')
    })
  }

  $(document).ready(function () {
    var options = {}
    $('.block--textblock__01 .fontSizeAuto').FontAbsolute('.block--textblock__01', options, ['.block--textblock__01 .avatar'])
  })
})(jQuery)
