const Order = require('../model/order.model');
const Cart = require('../model/cart.model');

exports.newOrder = async (req,res) => {
    try {
        let cartItems = await Cart.find({user : req.user._id, isDelete :false }).populate('cartItem');
        // res.send(cartItems)
        let orderItems =  cartItems.map(item => ({
             product : item.cartItem._id,
             quantity : item.quantity,
             price : item.cartItem.price    
        }));
        // console.log(orderItems);
        let totalPrice = orderItems.reduce((total,item) => total + (item.price * item.quantity),100); 
        // console.log(totalPrice);
        let newOrder = await Order.create ({
            user : req.user._id,
            items : orderItems,
            totalAmount : totalPrice
        });
        newOrder.save();
        await Cart.updateMany({ user : req.user._id},{ $set : {isDelete : true} });
        res.status(201).json({Order : newOrder, message : 'Order Place Success'});

    }catch(error) {
        console.log(error);
        res.status(500).json({ Message : 'Internal Server Error'});
    }
}

  exports.getAllOrders = async (req,res) => {
    try { 
         let orders = await Order.find({ order : Order._id},{isDelete : false});
         res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : 'Interal Server Error'});
    } 
  };


  exports.getOrder = async (req,res) => {
    try { 
         let order = await Order.find({ orderId : Order._id },{isDelete : false});
         res.status(200).json(order);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : 'Interal Server Error'});
    }
};