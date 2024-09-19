import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema({
  playlist_id: {
    type: Schema.Types.ObjectId, // Unique identifier for the playlist
    required: true,
    unique: true,
    auto: true
  },
  user_id: {
    type: Schema.Types.ObjectId, // Reference to the user who owns the playlist
    ref: 'User',
    required: true
  },
  name: {
    type: String, // Name of the playlist
    required: true
  },
  description: {
    type: String, // Optional description of the playlist
    default: '' // Can be left blank
  },
  privacy_status: {
    type: String, // Privacy status: public, private, or unlisted
    enum: ['public', 'private', 'unlisted'],
    default: 'public'
  },
  video_ids: [{
    type: Schema.Types.ObjectId, // Array of references to videos in the playlist
    ref: 'Video'
  }],
  created_at: {
    type: Date,
    default: Date.now // Timestamp when the playlist was created
  },
  updated_at: {
    type: Date,
    default: Date.now // Timestamp when the playlist was last updated
  }
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
