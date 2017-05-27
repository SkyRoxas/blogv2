// ajax
jQuery(function ($) {
  var page = 2
  var loading = true
  var $window = $(window)
  var $content = $('.ajax-bottom')
  var load_posts = function () {
    $.ajax({
      type: 'GET',
      data: {numPosts: 1, pageNumber: page},
      dataType: 'html',
      url: '../wp-content/themes/blogv2/tpl-components/loopHandler.php',
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
      var content_offset = $content.offset()
      var content_position = $content.position()
      if ($(window).scrollTop() > $content.offset().top - $(window).height() && $content.parent().scrollLeft() > content_position.left - $content.parent().width()) {
        loading = true
        page++
        load_posts()
      }
    })

    $content.parent().scroll(function () {
      if ($content.parent().scrollLeft() > $content.position().left - $content.parent().width()) {
        loading = true
        page++
        load_posts()
      }
    })
  })
})
