(function ($) {
  // imageHeight js
  function imageHeight () {
    if ($('.imageHeight-500').height() < 500) {
      $('.imageHeight-500').parent().css('height', $('.imageHeight-500').height())
    } else {
      $('.imageHeight-500').parent().css('height', '500')
    }
  }

  // function fontSizeAuto () {
  //   var regionHeight = $('.block--textblock__01').innerHeight()
  //   var fontHeight = $('.block--textblock__01').find('.fontSizeAuto').innerHeight()
  //   var fontSize = $('.block--textblock__01').find('.fontSizeAuto').css('font-size').replace('px', '')
  //
  //   console.log(fontSize)
  //
  //   while (fontHeight > regionHeight) {
  //     fontSize = fontSize * 0.5
  //     console.log(fontSize)
  //     $('.block--textblock__01').find('.fontSizeAuto').css('font-size', fontSize)
  //     fontHeight = $('.block--textblock__01').find('.fontSizeAuto').innerHeight()
  //   }
  // }

  $(document).ready(function () {
    imageHeight()
  })

  $(window).resize(function () {
    imageHeight()
  })
})(jQuery)
