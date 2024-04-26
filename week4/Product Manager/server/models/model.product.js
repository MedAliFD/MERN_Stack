const mongoose = require('mongoose');
 
const Product = new mongoose.Schema({
    title: {
        type: String,
        required:[true, "What was the name again ? "],
        minlength:[2, "name s/b more than 2"]
    },
    price: {
        type: Number,
        required:[true, "Give Your Price!"],
    },

    description: {
        type: String,
        required:[true, "come on we need description"],
        minlength:[2, "you need to add description"]
    }
},
    {timestamps: true}
);
 
const ProductSchema = mongoose.model('Product', Product);
 
module.exports = ProductSchema;
