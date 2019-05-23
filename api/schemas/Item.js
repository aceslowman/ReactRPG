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

/* previous entries
{
    name: "Potion",
    modifier: {
        type: 'HP',
        value: 10
    }
}

{
    name:"Axe",
    modifier:{
        type:'AP',
        value: 6
    }
}
{
    name:"Gold"
    modifier:{
        type:'Money',
        Value: 2
    }
}
{
    name::"Hides"
    type:[Item]
} */

