import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({
  video_id: {
    type: Schema.Types.ObjectId, // Unique identifier for the video
    required: true,
    unique: true,
    auto: true
  },
  uploader_id: {
    type: Schema.Types.ObjectId, // Reference to the user who uploaded the video
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: '' // Optional description, can be left empty
  },
  thumbnail_url: {
    type: String,
    default: null // Optional, can be null
  },
  video_url: {
    type: String,
    required: true // URL to the video file
  },
  duration: {
    type: Number, // Duration in seconds
    required: true
  },
  views: {
    type: Number,
    default: 0 // Default is 0 views
  },
  likes: {
    type: Number,
    default: 0 // Default is 0 likes
  },
  dislikes: {
    type: Number,
    default: 0 // Default is 0 dislikes
  },
  privacy_status: {
    type: String,
    enum: ['public', 'private', 'unlisted'], // Privacy options
    default: 'public' // Default privacy status
  },
  tags: [{
    type: String // Array of tags for search
  }],
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  category_id: {
    type: Schema.Types.ObjectId, // Reference to categories (e.g., gaming, education)
    ref: 'Category',
    required: true
  }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
