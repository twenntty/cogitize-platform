const mongoose = require('mongoose');

const favoriteItemSchema = mongoose.Schema({
    id: {type: String, required: true},
    user_id: {type: String, required: true},
    eitem_id: {type: String, required: true}
});

const favoriteItem = mongoose.model('FavoriteItem', favoriteItemSchema);

module.exports = favoriteItem;