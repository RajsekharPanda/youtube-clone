
import mongoose, { Schema } from "mongoose";



const likeSchema = new Schema({
  like_id: {
    type: Schema.Types.ObjectId, // Unique identifier for the like/dislike
    required: true,
    unique: true,
    auto: true
  },
  user_id: {
    type: Schema.Types.ObjectId, // Reference to the user who liked/disliked
    ref: 'User',
    required: true
  },
  video_id: {
    type: Schema.Types.ObjectId, // Reference to the video or comment (can be video_id or comment_id)
    refPath: 'onModel', // Dynamic reference (either Video or Comment)
    required: true
  },
  onModel: {
    type: String, // Indicates the model type, either 'Video' or 'Comment'
    required: true,
    enum: ['Video', 'Comment']
  },
  like_type: {
    type: String, // Enum for like or dislike
    enum: ['like', 'dislike'],
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now // Timestamp of when the like/dislike was created
  }
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
