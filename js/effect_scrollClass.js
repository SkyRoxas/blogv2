(function ($) {
  var scrollFadeIn = function () {
    $('.effect_fadeIn').scrollClass({
      'className': 'effect_fadeIn_target',
      'delay': '100',
      'increment': true
    })
  }

  setTimeout(function () {
    $(document).ready(function () {
      scrollFadeIn()
    })

    $(document).ajaxComplete(function () {
      scrollFadeIn()
    })
  }, 2000)
})(jQuery)
