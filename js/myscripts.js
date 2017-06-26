(function ($) {
  $(document).ready(function () {
    var death_rate = [['越南', 24.26], ['阿魯巴', 17.48], ['關島', 10.01], ['澳門', 5.84]]
    var div_data_bind = d3.select('.test').selectAll('div').data(death_rate)
    div_set = div_data_bind.enter().append('div')
    div_data_bind.exit().remove()
    div_set.text(function (d, i) {
      return i + ' / ' + d[0]
    })
    div_set.style('height', '20px')
    div_set.style('background', 'red')
    div_set.style('margin', '5px')
    div_set.style('width', function (d, i) {
      return (d[1] * 10) + 'px'
    })
  })
})(jQuery)
