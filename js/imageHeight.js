(function ($) {
  // imageHeight js
  function imageHeight () {
    if ($('.imageHeight-500').height() < 500) {
      $('#banner').css('height', $('.imageHeight-500').height())
    } else {
      $('#banner').css('height', '500')
    }
  }

  $(document).ready(function () {
    imageHeight()
  })

  $(window).resize(function () {
    imageHeight()
  })
})(jQuery)
