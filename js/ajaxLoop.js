// ajax
jQuery(function ($) {
  var $window = $(window)
  var $page = 2
  var $content = $('.ajax-button')

  var load_posts = function () {
    $.ajax({
      type: 'GET',
      data: {
        'action': 'ajaxLoop',
        'pageNumber': $page,
        'catId': $catId
      },
      dataType: 'html',
      url: ajaxurl,
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
