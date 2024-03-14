const Cart = require('../model/cart.model');

exports.addToCart = async (req, res ) => {
    try {
        let cart = await Cart.findOne ({
            user: req.user._id,
            cartItem : req.body.cartItem,    
            isDelete : false
        });
        if( cart ) {
            return res.json({Message : 'Cart alredy Exits...'});
        }
        cart = await Cart.create ({
            user : req.user._id,
            ...req.body
        });
        cart.save();
        res.json({ cart ,message : 'cart Added'});

    }catch (error)
    {
        console.log(error);
        res.status(500).json({message  : 'Internal Server Error'});
    }
};
exports.getAllCart = async (req, res) => {
    try {
    let carts = await Cart.find ({user : req.user._id,isDelete : false});
    res.status(200).json(carts);

} catch (error) {
   console.log(error);
   res.status(500).json ({ message : 'Internal Server Error'});
}
};
exports.getCart = async (req, res) => {
    try {
    let cart = await Cart.findOne({_id : req.query.cartId,isDelete : false});
    if(!cart) {
        return res.status(404).json({ Message : 'Cart Not Found'});
    }   
    res.status(200).json(cart);
} catch (error) {
   console.log(error);
   res.status(500).json ({ message : 'Internal Server Error'});
}
};