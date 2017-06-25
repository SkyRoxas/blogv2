(function ($) {
  var defaults_options = {
    fontMax: 40,
    fontMin: 10
  }

  function FontResize ($options) {
    this.fontMax = $options.fontMax
    this.fontMin = $options.fontMin
  }

  FontResize.prototype.method = function ($method) {
    switch ($method) {
      case 'setUp':
        console.log(this.fontMax)
        break
      case 'setDown':
        console.log(this.fontMin)
        break
      default:
    }
  }

  FontResize.prototype.resize = function ($event, $callback) {
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
          $callback()
        } else {
          $callback()
        }
        previousDimensions = newDimensions
      }, 100)
    })
  }

  $.fn.fontResize = function ($options) {
    var fontResize = new FontResize($.extend(defaults_options, $options))

    console.log(fontResize)

    fontResize.resize('null', function () {
      fontResize.method('setDown')
    })
  }

  $(document).ready(function () {
    var option = {
      fontMax: 500
    }
    $('body').fontResize(option)
  })
})(jQuery)
