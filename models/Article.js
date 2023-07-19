const mongoose = require('mongoose');
const{Schema} = mongoose;

const articleSchema = new Schema({
    titre: {type: String, required: true},
    content: String,
    categorie: {type: String, required: true},
});

module.exports = mongoose.model('Article', articleSchema);