const Product = require('../model/product.model');

const ProductService = require('../Service/product.service');
const productService = new ProductService();

exports.addProduct = async (req ,res ) => {
    let product = await productService.getProduct({title : req.body.title,isDelete : false})
    if(product) {
        return res.json({ message : 'Product Is Already Exits'})
    }
    product = await productService.addNewProduct({...req.body});
    res.status(201).json({ product , message : 'product is added...'})
}

exports.getAllProduct = async (req ,res ) => {
    let products = await productService.getAllProduct({isDelete : false});
    res.status(200).json(products)
}

exports.getProduct = async (req ,res ) => {
    const id = req.query.id;
    let product = await productService.getProduct({_id : id, isDelete : false});
    res.status(200).json(product)
}


// exports.addProducts = async(req, res) => {
//     try {
//         const{title, description, price, category} = req.body;
//         let newProduct = await Product.create({
//             title,
//             description,
//             price,
//             category
//         });
//         newProduct.save();
//         res.status(201).json({product: newProduct, meassage : `Product Added SuccesFully`});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message : `Internal Server Error`});
//     }
// };

// exports.getAllProducts = async(req, res) => {
//     try {
//         let product = await Product.find({isDelete: false});
//         res.status(200).json(product);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message : `Internal Server Error`});
//     }
// };

// exports.getProduct = async(req, res) => {
//     try {
//         let productId = req.query.productId;
//         let product = await Product.findOne({_id:productId, isDelete: false});
//         if(!product){
//             return res.status(404).json({message: `No Product Found with the given ID.`});
//         }
//         res.status(200).json({product});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message : `Internal Server Error`});
//     }
// };

exports.updateProduct = async(req,res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message : `No Product Found With the Given Id.`});
        }
        product = await Product.findOneAndUpdate({_id:product._id}, {$set : { ...req.body}}, { new : true});
        res.status(200).json({product,message : `Product Updated SuccesFully`});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal Server Error`});
    }
};

exports.deleteProduct = async(req, res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message : `No Product Found With The Given Id.`});
        }
        product = await Product.findOneAndUpdate({_id:product._id}, {isDelete: true},{new : true});
        res.status(200).json({product,message : `This Product Is Deleted.`});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal Server Error`});
    }
}
