const mongoose = require('mongoose');

const collectionItemSchema = mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    creator: {type: String, required: true},
    year_of_creation: {type: String, required: true},
    tags: [{type: String}],
    digital_representations: [{type: String}]
});

const collectionItem = mongoose.model('CollectionItem', collectionItemSchema);

module.exports = collectionItem;