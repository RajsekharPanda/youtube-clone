import mongoose, { Schema } from "mongoose";



const notificationSchema = new Schema({
  notification_id: {
    type: Schema.Types.ObjectId, // Unique identifier for the notification
    required: true,
    unique: true,
    auto: true
  },
  user_id: {
    type: Schema.Types.ObjectId, // Reference to the user who receives the notification
    ref: 'User',
    required: true
  },
  type: {
    type: String, // Type of notification (e.g., like, comment, new upload)
    required: true,
    enum: ['like', 'comment', 'new_upload', 'subscription']
  },
  source_id: {
    type: Schema.Types.ObjectId, // Reference to the video_id, user_id, or comment_id
    refPath: 'onModel',
    required: true
  },
  onModel: {
    type: String, // Indicates the model type, e.g., 'Video', 'User', 'Comment'
    required: true,
    enum: ['Video', 'User', 'Comment']
  },
  message: {
    type: String, // Custom message for the notification
    required: true
  },
  is_read: {
    type: Boolean, // Boolean to track if the notification was read
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now // Timestamp when the notification was created
  }
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
