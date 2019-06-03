const mongoose = require('mongoose');

const ActionSchema = new mongoose.Schema({
    text: String,
    action: String,
    success: String,
    failure: String
});

module.exports = mongoose.model('Action', ActionSchema);