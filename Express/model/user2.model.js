const mongoose  = require('mongoose');

const user2Schema = mongoose.Schema ({

    firstName : String,
    lastName : {
        type : String
    },
    gender : { 
        type : String,
        enum : ['Male','Female']
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    age : {
        type : String 
    },  
    isDelete : {
        type :Boolean,
        default : false 
    }
});

module.exports = mongoose.model('users',user2Schema);
