// link to mongoose
var mongoose = require('mongoose');

// define the article schema
var gamesSchema = new mongoose.Schema({
   created: {
       type: Date,
       default: Date.now
   },
   
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    
    content: {
        type: String,
        default: ''
    }

});

// make it public
module.exports = mongoose.model('Games', gamesSchema);