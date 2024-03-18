const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}, 
    favorite_items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CollectionItem' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;