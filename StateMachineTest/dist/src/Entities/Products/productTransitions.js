"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductTransitioner = void 0;

var _Insights = require("../../Data/Insights");

var ProductTransitioner = function ProductTransitioner(product) {
  /*
      console.log(`${product.name} created`)
      console.log("The state of the product on this iteration is", product.productStateContainer.state)
  */
  var index = Math.random() * 100;

  if (index > changesIndex) {
    switch (product.productStateContainer.state) {
      case "nonExisting":
        product.productStateContainer.create();

        _Insights.insights.productCreated();

        break;

      case "onSell":
        var expireIndex = Math.round(Math.random() * (100 - global.changesIndex)) + global.changesIndex;

        if (index > expireIndex) {
          product.productStateContainer.expire();
        } else {
          product.productStateContainer.sell();
        }

        break;

      case "expired":
        product.productStateContainer.reactivate();
        break;

      case "sold":
        console.log("Product was sold, you're not be able to change it anymore");
        break;

      default:
        throw Error("Ya la has liado con los estados si has llegado aqui");
    }
  } else {
    console.log("The product will keep it state this iteration");
  }
};

exports.ProductTransitioner = ProductTransitioner;