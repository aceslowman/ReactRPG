const mongoose = require('mongoose');

const NextPassageSchema = new mongoose.Schema({
    class: String,
    path: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Passage',
        autopopulate: true,
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

const AvailableItemsSchema = new mongoose.Schema({
    path: {
        type: mongoose.SchemaTypes.ObjectId,
        ref : ' Item',
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
    nextPassages: [NextPassageSchema],
    nextLocations: [NextLocationsSchema],
    availableItems: [AvailableItemsSchema] 

});

module.exports = mongoose.model('Passage', PassageSchema);
