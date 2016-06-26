"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactComponentPropsTable = require("./react-component-props-table");

var _reactComponentPropsTable2 = _interopRequireDefault(_reactComponentPropsTable);

var _reactComponentPropsTable3 = require("!!react-docgen!./react-component-props-table");

var _reactComponentPropsTable4 = _interopRequireDefault(_reactComponentPropsTable3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** Created by ge on 6/23/16. */


/* this is how you load the metaData using react-docgen */


var number = _react.PropTypes.number;
var string = _react.PropTypes.string;

var HappySandwichMakerExample = function (_Component) {
  _inherits(HappySandwichMakerExample, _Component);

  function HappySandwichMakerExample() {
    _classCallCheck(this, HappySandwichMakerExample);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HappySandwichMakerExample).apply(this, arguments));
  }

  _createClass(HappySandwichMakerExample, [{
    key: "render",
    value: function render() {
      /* the `.table-container` here is to allow overflow-x */
      return _react2.default.createElement(
        "div",
        { className: "table-container horizontal-scroll" },
        _react2.default.createElement(_reactComponentPropsTable2.default, { propMetaData: _reactComponentPropsTable4.default.props })
      );
    }
  }]);

  return HappySandwichMakerExample;
}(_react.Component);

exports.default = HappySandwichMakerExample;