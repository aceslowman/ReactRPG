const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please check submission, Item name is required' ]
    },
    value: Number,
    modifier: Number,
    stat: String   
});

module.exports = mongoose.model('Item', ItemSchema)
