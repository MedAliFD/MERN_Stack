const mongoose = require("mongoose")


const Store = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the name!"],
        minLength: [3, "The name must contain 3 characters"]
    },
    storeNumber: {
        type: String,
        minLength: [1, "Store Number must be a number greater than 0"]
    },
    isOpen: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


const StoreSchema = mongoose.model("StoreSchema", Store)

module.exports = StoreSchema