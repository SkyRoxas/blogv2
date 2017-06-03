// jQuery(document).ready(function ($) {
  // var data = {
  //   'action': 'add_foobar',
  //   'data': 'foobarid'
  // }
//
// 		// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
//   jQuery.post(ajaxurl, data, function (response) {
//     alert('Got this from the server: ' + response)
//   })
// })

(function ($) {
  $(document).ready(function () {
    $.ajax({
      type: 'GET',
      data: {
        'action': 'add_foobar',
        'pageNumber': 1
      },
      dataType: 'html',
      url: ajaxurl,
      beforeSend: function () {
      },
      success: function (data) {
        alert('success')
        console.log(data)
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console(jqXHR + ' :: ' + textStatus + ' :: ' + errorThrown)
      }
    })
  })
})(jQuery)
