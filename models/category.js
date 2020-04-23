const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, min: 3, max: 100 },
  description: { type: String, required: true, max: 255 },
});

CategorySchema.virtual('url').get(function () {
  return `/category/${this._id}`;
});

module.exports = mongoose.model('Category', CategorySchema);
