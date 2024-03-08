const Product = require('../model/product2.model');

exports.addProduct = async (req,res) => {
    try {
        const { title,description,price,category} = req.body;
        console.log(req.body);
        let newproduct = await Product.create({
            title,
            description,
            price,
            category
        });
        newproduct.save();
        res.status(201).json({Product : newproduct, Message : 'New Product Added'});
    } catch (error){ 
        console.log(error);
        res.status(500).json({Mesaage : `Internal Server Error : ${error.message}`});
    }
    };

    exports.getAllProduct = async (req , res) => {
        try {
            let products = await Product.find({isDelete : false})
            res.status(200).json(products);
        }catch (error) {
            console.log(error);
            res.status(500).json({Message : 'Internal Server Error'});
        }
    };

    exports.getProduct = async (req , res) => {
        try {
            let productId = req.query.productId;
            let product = await Product.findOne({_id:productId, isDelete : false });
            if(!product) {
                return res.status(404).json({ Message : "Product Is Not Found "});
            }
            res.status(200).json(product);
        }catch(error) {
            console.log(error);
            res.status(500).json({ Message : 'Internal Server Error'});
        }
    }

    exports.updateProduct = async (req,res) => {
        try {
          let productId = req.query.productId ;
          let product = await Product.findById(productId);
          // let product await product.findById(productId);
      
          if(!product){
            return req.status(404).json({ Message :"Product Not Found"});
          }
          product = await Product.findOneAndUpdate({_id:product._id},{ $set:{...req.body}},{new : true});
        //   product = await Product.findByIdAndUpdate({id:productId}, {$set : {...req.body} },{new : true});
          res.status(200).json({product,message:`Product Updated SucessFully`});
      
        }catch(error){
            console.log(error);
            res.status(500).json ({ Message : "Internal Server Error"});
        }
      };

      exports.deleteProduct = async (req,res) => {
        try {
          let productId = req.query.ProductId ;
          let product = await product.findById(productId);
      
          if(!product){
            return req.status(404).json({ Message : "product Not Found"});
      
          }
          // product = await product.findByIdAndUpdate(product._id );
          product = await product.findByIdAndUpdate({id: product_Id},{isDelete : true },{new : true});
          res.status(200).json({product, message : 'product deleted'}); 
      
        }catch(error){
            console.log(error);
            res.status(500).josn ({ Message : "Internal Server Error"});
        }
      };  