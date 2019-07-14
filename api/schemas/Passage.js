const mongoose = require('mongoose');

const NextPassageSchema = new mongoose.Schema({
    class: String,
    path: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Passage',
        autopopulate: {maxDepth: 3},
    }
});

const NextLocationsSchema = new mongoose.Schema({
    class: String,
    path: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Location',
        autopopulate: true
    }
});

const PassageSchema = new mongoose.Schema({
    text: String,
    actions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Action',
        autopopulate: true
    }],
    availableItems: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref : 'Item',
        autopopulate: true
    }],
    nextPassages: [NextPassageSchema],
    location: String,
    nonPlayerCharacters:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NonPlayerCharacter',
        autopopulate: true
    }]
});

module.exports = mongoose.model('Passage', PassageSchema);
