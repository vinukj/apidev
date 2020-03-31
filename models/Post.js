const mongoose = require('mongoose');

//Create a schema . create an object and describe teh properties of that. Just describe the data 
const PostSchema = mongoose.Schema({
    title: {
    type: String,
    required : true    
    },
    description: {
        type: String,
        required : true    
        },
    date:{
        type: Date,
        default : Date.now    
        }

}

);

module.exports = mongoose.model('Posts',PostSchema);