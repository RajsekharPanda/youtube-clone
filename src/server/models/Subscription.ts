import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
  subscription_id: {
    type: Schema.Types.ObjectId, // Unique identifier for the subscription
    required: true,
    unique: true,
    auto: true
  },
  subscriber_id: {
    type: Schema.Types.ObjectId, // Reference to the user who subscribed
    ref: 'User',
    required: true
  },
  channel_id: {
    type: Schema.Types.ObjectId, // Reference to the user who owns the channel
    ref: 'User',
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now // Timestamp of when the subscription was made
  }
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
