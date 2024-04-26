const mongoose = require('mongoose');
 


const Author  = new mongoose.Schema({

    //! ------------update
    name: {
        type: String,
        required:[true, "Name is required ? "],
        minlength:[3, "name s/b more than 3"]
    },

    // For number inputs: {
    //     type: Number,
    //     required:[true, " Give a error msg!"],
    // },
    // for boolean input
    // isImportant: {
    //     type: Boolean,
    //     default: false   // by default false
    // }


},
    {timestamps: true}
);
 
const AuthorSchema = mongoose.model('Author', Author);
 
module.exports = AuthorSchema;
