// ajax
jQuery(function ($) {
  var page = 2
  var $window = $(window)
  var $content = $('.ajax-bottom')

  var load_posts = function () {
    $.ajax({
      type: 'GET',
      data: {numPosts: 1, pageNumber: page},
      dataType: 'html',
      url: ajax_template_url + '/tpl-components/loopHandler.php',
      beforeSend: function () {
      },
      success: function (data) {
        // alert('success')
        // console.log(data)
        $content.before(data)
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console(jqXHR + ' :: ' + textStatus + ' :: ' + errorThrown)
      }
    })
  }

  $(document).ready(function () {
    $window.scroll(function () {
      if ($(window).scrollTop() > $content.offset().top - $(window).height() && $content.parent().scrollLeft() > $content.position().left - $content.parent().width()) {
        page++
        load_posts()
      }
    })

    $content.parent().scroll(function () {
      if ($content.parent().scrollLeft() > $content.position().left - $content.parent().width()) {
        page++
        load_posts()
      }
    })
  })
})
