(function ($) {
  // imageHeight js
  function imageHeight () {
    if ($('.imageHeight-500').height() < 500) {
      $('.imageHeight-500').parent().css('height', $('.imageHeight-500').height())
    } else {
      $('.imageHeight-500').parent().css('height', '500')
    }
  }

  $(document).ready(function () {
    imageHeight()
  })

  $(window).resize(function () {
    imageHeight()
  })
})(jQuery)
