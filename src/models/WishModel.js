const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    productId: {type: mongoose.Schema.Types.ObjectId, required: true},
    usersID: {type: mongoose.Schema.Types.ObjectId, required: true},

}, {timestamp: true, versionKey: false})

const WishModel = mongoose.model('wishes', DataSchema);
module.exports = WishModel;