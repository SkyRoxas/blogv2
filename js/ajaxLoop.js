// ajax
jQuery(function ($) {
  var page = 1
  var loading = true
  var $window = $(window)
  var $content = $('body.blog #content')
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
        console.log(data)
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR + ' :: ' + textStatus + ' :: ' + errorThrown)
      }
    })
  }
  load_posts()
})
