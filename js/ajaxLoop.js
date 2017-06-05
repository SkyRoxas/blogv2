// ajax
jQuery(function ($) {
  var $window = $(window)
  var $content = $('.ajax-button')

  $content.append('<div class ="buttonValue">' + $buttonValue + '</div>')

  console.log($catId)
  var load_posts = function () {
    $.ajax({
      type: 'GET',
      url: ajaxurl,
      data: {
        action: 'ajaxLoop',
        'pageNumber': $pageNumber,
        'catId': $catId
      },
      dataType: 'html',
      beforeSend: function () {
        $content.find('.buttonValue').html('<img src ="' + wp_template_url + '/images/loading.gif" width ="95">')
      },
      success: function (data) {
        setTimeout(function () {
          $content.find('.buttonValue').html($buttonValue)
          $content.before(data)
        }, 2000)
        // console.log(data)
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console(jqXHR + ' :: ' + textStatus + ' :: ' + errorThrown)
      }
    })
  }

  $(document).ready(function () {
    $window.scroll(function () {
      if ($(window).scrollTop() > $content.offset().top - $(window).height() && $content.parent().scrollLeft() > $content.position().left - $content.parent().width()) {
        setTimeout(function () {
          $pageNumber++
          load_posts()
        }, 1000)
      }
    })

    $content.parent().scroll(function () {
      if ($content.parent().scrollLeft() > $content.position().left - $content.parent().width()) {
        setTimeout(function () {
          $pageNumber++
          load_posts()
        }, 2000)
      }
    })
  })
})
