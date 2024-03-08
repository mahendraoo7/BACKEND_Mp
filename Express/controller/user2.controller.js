const User = require('../model/user2.model');
const bcrypt = require('bcrypt');

exports.addUser = async (req , res) =>  {
    try {
        const {firstName ,lastName, gender ,email, password,age } = req.body;
        // console.log(req.body) 
        let hashPassword = await bcrypt.hash(password,10);
        console.log(hashPassword);
        let newUser =   await User.create ({
            firstName,
            lastName,
            email, 
            password : hashPassword,
            age,
            gender
        });
        newUser.save();
        console.log(password);
        res.status(201).json({user : newUser, Message : 'new User Added'});
    } catch (error)
      {
        console.log(error);
        res.status(500).json({Message : 'Internal Server Error'});
      }
}

exports.getAllUser = async (req,res) => {
  try {
    let users = await User.find({isDelete : false});
    res.status(200).json(users);

  }catch(error){
      console.log(error);
      res.status(500).json ({ Message : "Internal Server Error"});
  }
};

exports.getUser = async (req,res) => {
  try {
    let userId = req.query.userId ;
    // let user = await User.findById(userId);
    let user = await User.findOne({_id : userId,isDelete : false});

    if(!user){
      return res.status(404).json({ Message : "User Not Found"});

    }
    res.status(200).json(user);

  }catch(error){
      console.log(error);
      res.status(500).json({ Message : "Internal Server Error"});
  }
};


exports.updateUser = async (req,res) => {
  try {
    let userId = req.query.userId ;
    let user = await User.findById(userId);
    // let user await User.findById(userId);

    if(!user){
      return res.status(404).json({ Message : "User Not Found"});

    }
    // user = await user. findOneAndUpdate({id:user._id },{$set : {...req.body} },{new : true}); 
    user = await User.findOneAndUpdate({_id:user._id}, { $set: { ...req.body}}, { new : true });
    // user = await user.findByIdAndUpdate({_id: user.id}, {$set : {...req.body} },{new : true});
    res.status(200).json(user);

  }catch(error){
      console.log(error);
      res.status(500).json ({ Message : "Internal Server Error"});
  }
};


exports.deleteUser = async (req,res) => {
  try {
    let userId = req.query.userId ;
    let user = await User.findById(userId);

    if(!user){
      return res.status(404).json({ Message : "User Not Found"});

    }
    // user = await User. findByIdAndUpdate(user._id );
    // user = await User.findOneAndUpdate({_id:user._id},{isDelete : true },{new : true});
    user = await User.findOneAndUpdate({ _id: user._id}, { isDelete: true}, { new : true });
    res.status(200).json({user, message : 'user deleted'}); 

  }catch(error){
      console.log(error);
      res.status(500).json ({ Message : "Internal Server Error"});
  }
};  