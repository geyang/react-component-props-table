"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Readme;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactMarkdownit = require("react-markdownit");

var _reactMarkdownit2 = _interopRequireDefault(_reactMarkdownit);

var _reactHighlight = require("react-highlight");

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _reactComponentPropsTable = require("../react-component-props-table.example");

var _reactComponentPropsTable2 = _interopRequireDefault(_reactComponentPropsTable);

var _reactComponentPropsTable3 = require("!!raw!../react-component-props-table.example");

var _reactComponentPropsTable4 = _interopRequireDefault(_reactComponentPropsTable3);

var _reactComponentPropsTable5 = require("!!react-docgen!../react-component-props-table");

var _reactComponentPropsTable6 = _interopRequireDefault(_reactComponentPropsTable5);

var _reactComponentPropsTable7 = require("!!raw!../react-component-props-table");

var _reactComponentPropsTable8 = _interopRequireDefault(_reactComponentPropsTable7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); } /**
                                                                                                                   * Created by ge on 6/24/16.
                                                                                                                   */


function Readme(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react2.default.createElement(
    _reactMarkdownit2.default,
    { stripIndent: true },
    "\n      # Props Table for React ES6 Components\n\n      [![github](https://img.shields.io/github/downloads/episodeyang/react-component-props-table/total.svg?style=flat-square&maxAge=2592000)]()\n\n      A Table Component to visualize react-es6-metadata, used in conjunction with\n      [react-docgen-loader](https://www.npmjs.com/package/react-docgen-loader).\n      ## Usage\n\n      ~~~shell\n        npm install --save react-component-props-table\n      ~~~\n\n      ### Live Demo: how does the prop table look like?\n\n      Here is a **live** example: the props table of the props table component itself.\n      ",
    _react2.default.createElement(_reactComponentPropsTable2.default, null),
    "\n      \"This is amazing!\" you say. \"now, how is this table generated?\"\n      > &ldquo;Now, how is this table generated?&rdquo;\n\n      Here is how.\n\n      ### Usage Example\n\n      The source code below is the actual example script.\n\n      **Notice** that we are only passing the `.props` field of the metaData into\n      the `PropsTable` component.\n\n      ",
    _react2.default.createElement(
      _reactHighlight2.default,
      null,
      _reactComponentPropsTable4.default
    ),
    "\n      #### More Details\n\n      The `webpack react-docgen-loader` runs the `react-docgen` cli tool, and gets\n      a metaData object in the form of the following example (loaded from source).\n      ",
    _react2.default.createElement(
      _reactHighlight2.default,
      null,
      JSON.stringify(_reactComponentPropsTable6.default, null, 4)
    ),
    "\n      > &ldquo;How to write these meta data in a component?&rdquo; You ask.\n\n      #### Component Comment String Example\n\n      Questions can be directed to the `react-docgen` repository on GitHub. Here is a\n      simple example for a pure function component written with ES6 syntax:\n\n      ",
    _react2.default.createElement(
      _reactHighlight2.default,
      { className: "javascript" },
      _reactComponentPropsTable8.default
    ),
    "\n      You can test whether your component is written according to `react-docgen`'s liking\n      by running the following:\n      ",
    _react2.default.createElement(
      "div",
      { className: "flex-column", style: { alignItems: "center", width: "100%" } },
      _react2.default.createElement("img", { width: "90%", style: { maxWidth: "600px", flex: "0 0 auto" },
        src: "using-react-docgen-in-command-line-Screenshot-2016-06-26-15.40.38.png" })
    ),
    "\n      #### Issues and questions:\n\n      Questions regarding react-docgen and how to write component doc strings,\n      please submit them to the react-docgen issue tracker. Maintainers there are\n      **very** responsive.\n\n      Questions or issues wth this table component can be submitted on [Github issues](https://github.com/episodeyang/react-component-props-table/issues).\n\n      ~~ Built with ❤️ ~~\n      "
  );
}