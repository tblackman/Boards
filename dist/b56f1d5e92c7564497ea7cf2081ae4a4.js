// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({37:[function(require,module,exports) {
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _availableBoards = require("./availableBoards");

var _indexStyle = require("./indexStyle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductRow = function (_React$Component) {
  _inherits(ProductRow, _React$Component);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _possibleConstructorReturn(this, (ProductRow.__proto__ || Object.getPrototypeOf(ProductRow)).apply(this, arguments));
  }

  _createClass(ProductRow, [{
    key: "render",
    value: function render() {
      var product = this.props.product;
      var name = product.stocked ? product.name : _react2.default.createElement(
        "span",
        { style: { color: 'red' } },
        product.name
      );
      var bimages = product.stocked ? product.image : _react2.default.createElement(
        "span",
        null,
        product.image
      );

      return _react2.default.createElement(
        "h1",
        null,
        _react2.default.createElement(
          "p",
          { style: _indexStyle.titleStyle },
          name
        ),
        _react2.default.createElement("img", { src: bimages, style: _indexStyle.imgStyle })
      );
    }
  }]);

  return ProductRow;
}(_react2.default.Component);

var ProductTable = function (_React$Component2) {
  _inherits(ProductTable, _React$Component2);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _possibleConstructorReturn(this, (ProductTable.__proto__ || Object.getPrototypeOf(ProductTable)).apply(this, arguments));
  }

  _createClass(ProductTable, [{
    key: "render",
    value: function render() {
      var filterText = this.props.filterText;
      var inStockOnly = this.props.inStockOnly;

      var rows = [];
      var lastCategory = null;

      this.props.products.forEach(function (product) {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }

        rows.push(_react2.default.createElement(ProductRow, {
          product: product,
          key: product.name
        }));
        lastCategory = product.category;
      });

      return _react2.default.createElement(
        "tbody",
        { style: _indexStyle.divStyle },
        rows
      );
    }
  }]);

  return ProductTable;
}(_react2.default.Component);

var SearchBar = function (_React$Component3) {
  _inherits(SearchBar, _React$Component3);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this3 = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this3.handleFilterTextChange = _this3.handleFilterTextChange.bind(_this3);
    _this3.handleInStockChange = _this3.handleInStockChange.bind(_this3);
    return _this3;
  }

  _createClass(SearchBar, [{
    key: "handleFilterTextChange",
    value: function handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
  }, {
    key: "handleInStockChange",
    value: function handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "form",
        null,
        _react2.default.createElement("input", {
          type: "text",
          placeholder: "Search...",
          value: this.props.filterText,
          onChange: this.handleFilterTextChange
        }),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement("input", {
            type: "checkbox",
            checked: this.props.inStockOnly,
            onChange: this.handleInStockChange
          }),
          ' ',
          "Only show products in stock"
        )
      );
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

var FilterableProductTable = function (_React$Component4) {
  _inherits(FilterableProductTable, _React$Component4);

  function FilterableProductTable(props) {
    _classCallCheck(this, FilterableProductTable);

    var _this4 = _possibleConstructorReturn(this, (FilterableProductTable.__proto__ || Object.getPrototypeOf(FilterableProductTable)).call(this, props));

    _this4.state = {
      filterText: '',
      inStockOnly: false
    };

    _this4.handleFilterTextChange = _this4.handleFilterTextChange.bind(_this4);
    _this4.handleInStockChange = _this4.handleInStockChange.bind(_this4);
    return _this4;
  }

  _createClass(FilterableProductTable, [{
    key: "handleFilterTextChange",
    value: function handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
  }, {
    key: "handleInStockChange",
    value: function handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(SearchBar, {
          filterText: this.state.filterText,
          inStockOnly: this.state.inStockOnly,
          onFilterTextChange: this.handleFilterTextChange,
          onInStockChange: this.handleInStockChange
        }),
        _react2.default.createElement(ProductTable, {
          products: this.props.products,
          filterText: this.state.filterText,
          inStockOnly: this.state.inStockOnly
        })
      );
    }
  }]);

  return FilterableProductTable;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(FilterableProductTable, { products: _availableBoards.boards }), document.getElementById('root'));
},{"react":12,"react-dom":13,"./availableBoards":9,"./indexStyle":10}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://localhost:54464/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,37])