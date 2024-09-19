import mongoose, { Schema } from "mongoose";



const userSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId, // Unique identifier for the user
    required: true,
    unique: true,
    auto: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  profile_picture_url: {
    type: String,
    default: null // Optional field, can be null
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  bio: {
    type: String,
    default: '' // Optional user biography
  },
  subscribers: [{
    type: Schema.Types.ObjectId,
    ref: 'User' // List of users who follow this user
  }],
  subscribed: [{
    type: Schema.Types.ObjectId,
    ref: 'User' // List of users this user follows
  }],
  roles: {
    type: String,
    enum: ['admin', 'user'], // Define roles (e.g., admin, regular user)
    default: 'user'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

