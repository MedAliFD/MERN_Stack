const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true, "setup needed for the joke"],
        minlength:[10, "it has to be more than 10 characters"]
    },
    punchline: {
        type: String,
        required:[true, "come on where is the punshline"],
        minlength:[3, "at least 3 in punshline"]
    }
},
    {timestamps: true}
);
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
