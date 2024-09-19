import mongoose, { Schema } from "mongoose";



const categorySchema = new Schema({
  category_id: {
    type: Schema.Types.ObjectId, // Unique identifier for the category
    required: true,
    unique: true,
    auto: true
  },
  name: {
    type: String, // Name of the category
    required: true,
    unique: true
  },
  description: {
    type: String, // Optional description of the category
    default: '' // Can be left empty
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
