const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Where exactly? What is the name?']
    },
    environment: {
       type: String,
       required: [true, 'What sort of setting is this?']
    }
});

module.exports = mongoose.model('Location', LocationSchema)


/* Previous entries
{
    name:'Grizzly Forest',
    environment:'forest'
}
{
    name:'Squalling Cove',
    environment:'Dungeon'
}
{
    name:'Misszoo'
    environment:'Town'
}
{
    name:'home',
    environment:'playerStart'
}
{
    name:"WoodPile",
    environment:'home' 
} */
