"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _productStateMachine = _interopRequireDefault(require("./productStateMachine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Product = function Product() {
  _classCallCheck(this, Product);

  this.name = "Product_" + Math.random() * 10000;
  this.productStateContainer = new _productStateMachine["default"]();
};

var _default = Product;
exports["default"] = _default;