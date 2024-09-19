import mongoose, { Schema } from "mongoose";

const historySchema = new Schema({
  history_id: {
    type: Schema.Types.ObjectId, // Unique identifier for the watch history record
    required: true,
    unique: true,
    auto: true
  },
  user_id: {
    type: Schema.Types.ObjectId, // Reference to the user who watched the video
    ref: 'User',
    required: true
  },
  video_id: {
    type: Schema.Types.ObjectId, // Reference to the watched video
    ref: 'Video',
    required: true
  },
  watched_at: {
    type: Date,
    default: Date.now // Timestamp when the video was watched
  }
});

const History = mongoose.model('History', historySchema);

module.exports = History;
