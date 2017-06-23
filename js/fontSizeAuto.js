(function ($) {
  function fontSizeAuto () {
    var fontSizeMax = 48
    var fontSizeMin = 1

    var regionHeight = $('.block--textblock__01').innerHeight()
    var fontHeight = $('.block--textblock__01').find('.fontSizeAuto').innerHeight()
    var realHeight = regionHeight - $('.avatar').innerHeight()

    function sizeUp () {
      var fontSize = $('.block--textblock__01').find('.fontSizeAuto').css('font-size').replace('px', '')
      while (fontHeight < realHeight) {
        fontSize = fontSize * 1.2
        $('.block--textblock__01').find('.fontSizeAuto').css('font-size', fontSize)
        fontHeight = $('.block--textblock__01').find('.fontSizeAuto').innerHeight()
      }
    }

    function sizeDown () {
      var fontSize = $('.block--textblock__01').find('.fontSizeAuto').css('font-size').replace('px', '')
      while (fontHeight > realHeight) {
        fontSize = fontSize * 0.6
        $('.block--textblock__01').find('.fontSizeAuto').css('font-size', fontSize)
        fontHeight = $('.block--textblock__01').find('.fontSizeAuto').innerHeight()
      }
    }

    var $window = $(window)

    var previousDimensions = {
      width: $window.width(),
      height: $window.height()
    }

    var timer

    $window.resize(function (e) {
      var newDimensions = {
        width: $window.width(),
        height: $window.height()
      }

      if (timer) {
        window.clearTimeout(timer)
      }

      timer = window.setTimeout(function () {
        if (newDimensions.width > previousDimensions.width) {
          sizeUp()
          if ($('.block--textblock__01').find('.fontSizeAuto').css('font-size').replace('px', '') > fontSizeMax) {
            $('.block--textblock__01').find('.fontSizeAuto').css('font-size', fontSizeMax)
          }
        } else {
          sizeDown()
          if ($('.block--textblock__01').find('.fontSizeAuto').css('font-size').replace('px', '') < fontSizeMin) {
            $('.block--textblock__01').find('.fontSizeAuto').css('font-size', fontSizeMin)
          }
        }

        // Store the new dimensions
        previousDimensions = newDimensions
      }, 100)
    })

    sizeDown()
  }

  $(document).ready(function () {
    fontSizeAuto()
  })
})(jQuery)
