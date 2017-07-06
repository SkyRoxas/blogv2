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

  var jsonData = [
    {
      'id': 1,
      'title': 'Html',
      'count': 40
    }, {
      'id': 2,
      'title': 'Css',
      'count': 140
    }, {
      'id': 3,
      'title': 'JavaScript',
      'count': 90
    }, {
      'id': 4,
      'title': 'JavaScript',
      'count': 90
    }, {
      'id': 5,
      'title': 'test',
      'count': 90
    }

  ]

  myChart.data = {
    json: jsonData,
    getTotal: function () {
      var total = 0
      for (var i = 0; i < myChart.data.json.length; i++) {
        total = total + myChart.data.json[i].count
      }
      return total
    },
    getData: function () {
      for (var i = 0; i < myChart.data.json.length; i++) {
        var angle = (myChart.data.json[i].count / myChart.data.getTotal()) * 360
        myChart.data.json[i]['angle'] = angle
      }
      return myChart.data.json
    }
  }

/**
 * Svg 參數
 * @namespace myChart
 * @class svg
 */
  myChart.svg = defaults

/**
 * svg 方法
 * @class svg_method
 */
  myChart.svgMethod = {
    /**
     * [description]
     * @param  {string} $class svg path attributes class
     * @param  {string} $d     svg path attributes d
     * @return {string}        svg path html
     */
    path: function ($class, $d) {
      return '<path class="' + $class + '" style="fill:#fe0; stroke:#fff; stroke-width:3;" d = "' + $d + '"/>'
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

  myChart.createChart = {
    pathItem: function (starangle = 0, svgPath = '') {
      for (var i = 0; i < myChart.data.getData().length; i++) {
        var part = new myChart.ChartPart(myChart.data.getData()[i].angle, starangle)
        var d = 'M100 100,L ' + part.starting_X + ' ' + part.starting_Y + 'A 100 100 0 ' + myChart.math_method.flags(myChart.data.getData()[i].angle) + ' 0' + part.target_X + ' ' + part.target_Y + ',Z'
        svgPath = svgPath + ' ' + myChart.svgMethod.path('part' + i, d)
        starangle += myChart.data.getData()[i].angle
      }
      return svgPath
    },
    beforeItem: function (svgElement) {
      return svgElement
    },
    afterItem: function (svgElement) {
      return svgElement
    },
    append: function ($element) {
      $($element).append(
        '<svg width="600" height="600" viewBox="0 0 600 600">' +
        myChart.createChart.beforeItem() +
        myChart.createChart.pathItem() +
        myChart.createChart.afterItem() +
        '</svg>')
    }
  }

  $(document).ready(function () {
    console.log(myChart)
    myChart.createChart.afterItem = function () {
      return '<circle cx ="100" cy ="100" r ="50" style ="fill:#fff";/>'
    }
    myChart.createChart.append('.test')
  })
})(jQuery)
