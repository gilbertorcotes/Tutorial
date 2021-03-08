const mongoose = require ('mongoose');

const schema = mongoose.Schema({
    title: { type: String, unique: true, index: true },
    content: String
})

module.exports = mongoose.model("Post", schema);
