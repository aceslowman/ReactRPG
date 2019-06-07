const mongoose = require('mongoose');


const PassageSchema = new mongoose.Schema({
    text: String,
    actions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Action',
        autopopulate: true
    }],
    nextPassages: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Passage',
        autopopulate: true,
    }]
});

module.exports = mongoose.model('Passage', PassageSchema);
