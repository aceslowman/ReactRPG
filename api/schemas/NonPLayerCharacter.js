const mongoose = require('mongoose');

const NonPlayerCharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'What is this fine characters name?']
    },
    AP: Number,
    HP: Number,
    level: Number,
    friendly: Boolean
});

module.exports = mongoose.model('NonPLayerCharacter', NonPlayerCharacterSchema)

/* Previous entries
{
    name: "Drake",
    AP: 9,
    HP:200,
    LVL:15;
    itmes:[Item],
    friendly = false;
}
{
    name: "Grizzly Bear",
    AP: 6,
    HP:120,
    LVL:5;
    itmes:[Item],
    friendly = false;  
}
{
    name: "Bandit",
    AP: 4,
    HP:100,
    LVL:2;
    itmes:[Item],
    friendly = false;
}
{
    name: "Merchanct",
    AP: 5,
    HP:200,
    LVL:10;
    itmes:[Item],
    friendly = true;
}
{
    name: "Villager",
    AP: 10,
    HP:200,
    LVL:10;
    itmes:[Item],
    friendly = true;
} */
