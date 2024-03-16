const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    user : {
          type : mongoose.Schema.Types.ObjectId,
          ref : 'users'
    },
    items : [
        {
            product : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'products'
            },
            quantity : {
                type : Number,
                defualt : 1
            },
        }
    ],
    totalAmount : {
        type : Number,
    },
    isDelete : {
        type : Boolean,
        defualt : false 
    }

});

module.exports = mongoose.model('orders',orderSchema);  