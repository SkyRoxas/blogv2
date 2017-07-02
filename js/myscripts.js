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
    x: 50,
    y: 50
  }
}

/**
 * Svg 參數
 * @namespace myChart
 * @class svg
 */
myChart.svg = defaults

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
 * @param {number} $deg
 * @return {number} [description]
 */
  coordinate_X: function ($deg) {
    return myChart.svg.move.x + myChart.svg.radius.x * Math.cos($deg * Math.PI / 180)
  },

/**
 * 計算 y 軸終點座標
 *
 * @method target_Y
 * @param  {number} $deg [description]
 * @return {number}      [description]
 */
  coordinate_Y: function ($deg) {
    return myChart.svg.move.y + myChart.svg.radius.y * Math.sin($deg * Math.PI / 180)
  }

}

/**
 * 角度
 * @class coordinate
 * @constructor
 * @namespace myChart
 * @param  {number} $deg [description]
 */
myChart.part = function ($deg) {
  this.deg = $deg
  this.target_X = myChart.math_method.coordinate_X($deg)
  this.target_Y = myChart.math_method.coordinate_Y($deg)
}

var k = new myChart.part(20)

console.log(k)
