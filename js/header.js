(function ($) {
  function headerScript () {
    $('#header').css('height', $('#header').children().innerHeight())
    $('#header').children().css({
      'position': 'fixed',
      'top': 'auto',
      'width': '100%',
      'z-index': '100'
    })
  }

  $(document).ready(function () {
    headerScript()
  })

  $(document).resize(function () {
    headerScript()
  })
})(jQuery)
