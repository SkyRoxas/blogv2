// ajax
jQuery(function ($) {
  var $window = $(window)
  var $content = $('.ajax-button')

  $(document).ready(function () {
    $content.append('<div class ="buttonValue">' + $buttonValue + '</div>')
  })

  var load_posts = function () {
    $.ajax({
      type: 'GET',
      url: ajaxurl,
      data: {
        action: 'ajaxLoop',
        'pageNumber': $pageNumber,
        'queryKey': $ajaxLoading_key,
        'queryValue': $ajaxLoading_value
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

  function scrollTimer ($scrollItem, $fun) {
    var timer

    $scrollItem.scroll(function () {
      if (timer) {
        window.clearTimeout(timer)
      }

      timer = window.setTimeout(function () {
        $fun()
      }, 100)
    })
  }

  $(document).ready(function () {
    scrollTimer($window, function () {
      if ($window.scrollTop() > $content.offset().top - $window.height() && $content.parent().scrollLeft() > $content.position().left - $content.parent().width()) {
        $pageNumber++
        load_posts()
      }
    })

    scrollTimer($content.parent(), function () {
      if ($content.parent().scrollLeft() > $content.position().left - $content.parent().width()) {
        $pageNumber++
        load_posts()
      }
    })
  })
})
