"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insights = void 0;

var _initialData = _interopRequireDefault(require("../../initialData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Insights =
/*#__PURE__*/
function () {
  function Insights(initialProducts) {
    _classCallCheck(this, Insights);

    this.nonCreatedProducts = initialProducts;
    this.onSellProducts = 0;
    this.expiredProducts = 0;
    this.soldProducts = 0;
    this.reactivatedProducts = 0;
  }

  _createClass(Insights, [{
    key: "productCreated",
    value: function productCreated() {
      this.onSellProducts++;
      this.nonCreatedProducts--;
    }
  }, {
    key: "productSold",
    value: function productSold() {
      this.onSellProducts--;
      this.soldProducts++;
    }
  }]);

  return Insights;
}();

var insights = new Insights(_initialData["default"].InitialProducts);
exports.insights = insights;