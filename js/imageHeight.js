(function ($) {
  // imageHeight js
  function imageHeight () {
    if ($('.imageblock').height() < 500) {
      $('#banner').css('height', $('.imageblock').height())
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
