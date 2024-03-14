const Order = require('../model/order.model');
const Cart = require('../model/cart.model');

exports.newOrder = async (req,res) => {
    try {
        let cartItems = await Cart.find({ user : req.user._id, isDlete :false }).populate('cartItems');
        // res.send(cartItems);
        let orderItems =  cartItems.map(item => ({
             product : item.cartItems._id,
             quantity : item.cartItems._id,
             price : item.cartItems.price
        }));
        // console.log(orderItems);
        let totalPrice = orderItems.reduce((total,item) => total+(item.price * item.quantity), 100); 
        // console.log(totalPrice);
        let newOrder = await Order.create ({
            user : req.user._id,
            items : orderItems,
            totalAmount : totalPrice
        });
        newOrder.save();
        await Cart.updateMany({ user : req.user._id},{ $set : {IsDelete : true} });
        res.status(204).json({order : newOrder , message : 'Order Place Sucess'})    
    }catch(error) {
        console.log(error);
        res.status(500).json({ Message : 'Interanl Server Error' });
    }
}