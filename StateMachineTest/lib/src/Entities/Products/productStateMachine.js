var StateMachine = require('javascript-state-machine');

const ProductStatesDefinition = StateMachine.factory({
    init: 'nonExisting',
    transitions: [
        { name: 'create', from: 'nonExisting',  to: 'onSell' },
        { name: 'sell',   from: 'onSell', to: 'sold'  },
        { name: 'expire', from: 'onSell', to: 'expired'    },
        { name: 'reactivate', from: 'expired',    to: 'onSell' }
      ],
    methods: {

        onCreate: function(id){ console.log(`New item with id ${id} has been created`)},
        onSell: function(id) { console.log(`Item with id ${id} has been sold`) },
        onExpire: function(id) { console.log(`Item with id ${id} has expired`) },
        onReactivate: function(id) { console.log(`Item with id ${id} has been reactivated`) }

    }

})

export default ProductStatesDefinition;