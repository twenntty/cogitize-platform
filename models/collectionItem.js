const mongoose = require('mongoose');

const collectionItemSchema = mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    creator: {type: String, required: true},
    year_of_creation: {type: String, required: true},
    tags: {type: [String], required: true},
    digital_representations: {type: [String], required: true}
});

const collectionItem = mongoose.model('CollectionItem', collectionItemSchema);

module.exports = collectionItem;