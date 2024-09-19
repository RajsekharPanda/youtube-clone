import mongoose, { Schema } from "mongoose";



const commentSchema = new Schema({
  comment_id: {
    type: Schema.Types.ObjectId, // Unique identifier for the comment
    required: true,
    unique: true,
    auto: true
  },
  video_id: {
    type: Schema.Types.ObjectId, // Reference to the video where the comment was posted
    ref: 'Video',
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId, // Reference to the user who made the comment
    ref: 'User',
    required: true
  },
  text: {
    type: String, // Comment text
    required: true
  },
  likes: {
    type: Number, // Number of likes on the comment
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now // Timestamp of when the comment was posted
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
