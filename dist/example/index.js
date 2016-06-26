"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _Readme = require("./Readme");

var _Readme2 = _interopRequireDefault(_Readme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by ge on 6/23/16.
 */
require('./typesetting-basic.css');

document.addEventListener("DOMContentLoaded", function (event) {
  (0, _reactDom.render)(_react2.default.createElement(_Readme2.default, null), document.body.querySelector('#readme-container'));
});