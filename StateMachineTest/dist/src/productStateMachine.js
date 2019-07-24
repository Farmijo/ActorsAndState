"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var StateMachine = require('javascript-state-machine');

var productStateMachine = new StateMachine({
  init: 'nonExisting',
  transitions: [{
    name: 'create',
    from: 'nonExisting',
    to: 'onSell'
  }, {
    name: 'sell',
    from: 'onSell',
    to: 'sold'
  }, {
    name: 'expire',
    from: 'onSell',
    to: 'expired'
  }, {
    name: 'reactivate',
    from: 'expired',
    to: 'onSell'
  }],
  methods: {
    onCreate: function onCreate(id) {
      console.log("New item with id ".concat(id, " has been created"));
    },
    onSell: function onSell(id) {
      console.log("Item with id ".concat(id, " has been sold"));
    },
    onExpire: function onExpire(id) {
      console.log("Item with id ".concat(id, " has expired"));
    },
    onReactivate: function onReactivate(id) {
      console.log("Item with id ".concat(id, " has been reactivated"));
    }
  }
});
var _default = productStateMachine;
exports["default"] = _default;