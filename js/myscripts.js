(function ($) {
/**
 * my SVG Chart width d3.js
 * @module myChart
 */
  var myChart = {}

  var defaults = {
    viewport: {
      height: 200,
      width: 200
    },
    move: {
      x: 100,
      y: 100
    },
    radius: {
      x: 100,
      y: 100
    }
  }

  var json = [
    {
      'id': 1,
      'title': 'Html',
      'count': 20
    }, {
      'id': 2,
      'title': 'Css',
      'count': 10
    }, {
      'id': 3,
      'title': 'JavaScript',
      'count': 50
    }
  ]

/**
 * Svg 參數
 * @namespace myChart
 * @class svg
 */
  myChart.svg = defaults

  myChart.svgMethod = {
    path: function () {
      return '<path class = ' + $class + ' style ="fill: ' + $fill + ' stroke: ' + $stroke + 'stroke-width:"' + $strokeWidth + '>'
    }
  }

/**
 * 運算
 * @namespace myChart
 * @class math_method
 */
  myChart.math_method = {

/**
 * 計算 x 軸終點座標
 *
 * @method target_X
 * @param {number} $angle
 * @return {number} [description]
 */
    coordinate_X: function ($angle) {
      return myChart.svg.move.x + myChart.svg.radius.x * Math.cos($angle * Math.PI / 180)
    },

/**
 * 計算 y 軸終點座標
 *
 * @method target_Y
 * @param  {number} $angle [description]
 * @return {number}      [description]
 */
    coordinate_Y: function ($angle) {
      return myChart.svg.move.y - myChart.svg.radius.y * Math.sin($angle * Math.PI / 180)
    },

/**
 * 1 為大角度弧線，0 為小角度弧線
 * @method flags
 * @param  {number} $angle [description]
 * @return {number}        [description]
 */
    flags: function ($angle) {
      if ($angle > 180) {
        return 1
      } else {
        return 0
      }
    }

  }

/**
 * 角度
 * @class ChartPart
 * @constructor
 * @namespace myChart
 * @param  {number} $angle 角度
 * @param  {number} $startangle 起始角度
 */
  myChart.ChartPart = function ($angle, $startangle = 0) {
    // 角度
    this.angle = $angle
    // 起始角度
    this.startangle = $startangle
    // 大角度弧線||小角度弧線
    this.flags = myChart.math_method.flags($angle)
    // 起始座標
    this.starting_X = myChart.math_method.coordinate_X($startangle)
    this.starting_Y = myChart.math_method.coordinate_Y($startangle)
    // 目標座標
    this.target_X = myChart.math_method.coordinate_X($angle + $startangle)
    this.target_Y = myChart.math_method.coordinate_Y($angle + $startangle)
  }

  var k = new myChart.ChartPart(90)
  var l = new myChart.ChartPart(190, k.angle)
  var m = new myChart.ChartPart(60, (k.angle + l.angle))
  var n = new myChart.ChartPart(20, (k.angle + l.angle + m.angle))

  console.log('k', k)
  console.log('l', l)
  console.log('m', m)

  // $(document).ready(function () {
  //   $('.test').append('<svg width="600" height="600" viewBox="0 0 600 600">' +
  //   '<path id="test1" style="fill:#fe0; stroke:#fff; stroke-width:3;" />' +
  //   '<path id="test2" style="fill:#fe0; stroke:#fff; stroke-width:3;" />' +
  //   '<path id="test3" style="fill:#fe0; stroke:#fff; stroke-width:3;" />' +
  //   '<path id="test4" style="fill:#fe0; stroke:#fff; stroke-width:3;" />' +
  //   '<circle cx="100" cy ="100" r ="50" style="fill:#fff;"/>' +
  //   '</svg>')
  //   $('#test1').attr('d', 'M100 100,L' + k.starting_X + ' ' + k.starting_Y + 'A 100 100 0 0 0 ' + k.target_X + ' ' + k.target_Y + ',Z')
  //   $('#test2').attr('d', 'M100 100,L' + l.starting_X + ' ' + l.starting_Y + 'A 100 100 0 1 0 ' + l.target_X + ' ' + l.target_Y + ',Z')
  //   $('#test3').attr('d', 'M100 100,L' + m.starting_X + ' ' + m.starting_Y + 'A 100 100 0 0 0 ' + m.target_X + ' ' + m.target_Y + ',Z')
  //   $('#test4').attr('d', 'M100 100,L' + n.starting_X + ' ' + n.starting_Y + 'A 100 100 0 0 0 ' + n.target_X + ' ' + n.target_Y + ',Z')
  // })
})(jQuery)
