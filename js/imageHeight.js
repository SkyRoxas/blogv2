(function ($) {
  // imageHeight js
  function imageHeight () {
    if ($('.imageblock').height() < 400) {
      $('#banner').css('height', $('.imageblock').height())
    } else {
      $('#banner').css('height', '400')
    }
  }

  $(document).ready(function () {
    imageHeight()
  })

  $(window).resize(function () {
    imageHeight()
  })
})(jQuery)
