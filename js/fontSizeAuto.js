(function ($) {
  function fontSizeAuto () {
    var fontSizeMax = 48

    var regionHeight = $('.block--textblock__01').innerHeight()
    var fontHeight = $('.block--textblock__01').find('.fontSizeAuto').innerHeight()
    var fontSize = $('.block--textblock__01').find('.fontSizeAuto').css('font-size').replace('px', '')
    var realHeight = regionHeight - $('.avatar').innerHeight()

    while (fontHeight < realHeight) {
      fontSize = fontSize * 15
      $('.block--textblock__01').find('.fontSizeAuto').css('font-size', fontSize)
      fontHeight = $('.block--textblock__01').find('.fontSizeAuto').innerHeight()
    }

    while (fontHeight > realHeight) {
      fontSize = fontSize * 0.5
      $('.block--textblock__01').find('.fontSizeAuto').css('font-size', fontSize)
      fontHeight = $('.block--textblock__01').find('.fontSizeAuto').innerHeight()
    }
  }

  $(document).ready(function () {
    fontSizeAuto()
    setTimeout(fontSizeAuto(), 5000)
  })

  $(window).resize(function () {
    fontSizeAuto()
  })
})(jQuery)
