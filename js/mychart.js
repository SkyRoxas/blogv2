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
      x: 200,
      y: 200
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
      'count': 40
    }, {
      'id': 3,
      'title': 'JavaScript',
      'count': 40
    }, {
      'id': 4,
      'title': 'jQuery',
      'count': 40
    }, {
      'id': 5,
      'title': 'test',
      'count': 10
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
    makeSvg: function (tag, attrs, textContent = '') {
      var el = document.createElementNS('http://www.w3.org/2000/svg', tag)
      for (var k in attrs) {
        el.setAttribute(k, attrs[k])
      }
      el.textContent = textContent
      return el
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

  /**
   * [createChart description]
   * @class createChart
   * @namespace myChart
   */
  myChart.createChart = {

    chartPart: function () {
      var starangle = 0

      for (var i = 0; i < myChart.data.getData().length; i++) {
        var part = new myChart.ChartPart(myChart.data.getData()[i].angle, starangle)

        var path = myChart.svgMethod.makeSvg(
            'path',
          {
            d: 'M' + myChart.svg.move.x + ',' + myChart.svg.move.y + ' ' +
                 'L' + part.starting_X + ' ' + part.starting_Y + ' ' +
                 'A' + '100 100' + ' ' + '0' + ' ' + myChart.math_method.flags(myChart.data.getData()[i].angle) + ' ' + '0' + ' ' + part.target_X + ' ' + part.target_Y +
                 'Z',
            style: 'fill:#26446F; stroke:#ffffff; stroke-width:2px;'
          }
        )

        var textPathHref = myChart.svgMethod.makeSvg(
          'path',
          {
            id: 'textPath' + i,
            d: 'M' + part.target_X + ' ' + part.target_Y + ' ' +
               'L' + part.starting_X + ',' + part.starting_Y,
            style: 'stroke:#ffffff; stroke-width:0px;'
          })

        var text = myChart.svgMethod.makeSvg(
          'text',
          {
            style: 'fill:#000000; font-size:25px;'
          }
      )

        var textPath = myChart.svgMethod.makeSvg(
          'textPath',
          {},
          'test')

        textPath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#textPath' + i)

        text.appendChild(textPath)

        $('svg').append(path)

        $('svg').append(textPathHref)
        $('svg').append(text)

        starangle += myChart.data.getData()[i].angle
      }
    },
    appendSvg: function (el) {
      $(el).append('<svg width="400" height="400" viewBox="0 0 400 400">')
      console.log(this)
    }
  }

  $(document).ready(function () {
    myChart.createChart.appendSvg('.test')
    myChart.createChart.chartPart()
  })
})(jQuery)
