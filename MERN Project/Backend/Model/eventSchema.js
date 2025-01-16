const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  createdBy: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
  isAvailable: { type: Boolean, default: false },
});

// Middleware to update isAvailable based on the event date
eventSchema.pre('save', function (next) {
  const currentDate = new Date();
  if (this.date < currentDate) {
    this.isAvailable = false;
  }
  next();
});

eventSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate();
  const currentDate = new Date();
  if (update.date && new Date(update.date) < currentDate) {
    update.isAvailable = false;
  }
  next();
});

// Static method to update isAvailable for all events
eventSchema.statics.updateAllEventsAvailability = async function () {
  const currentDate = new Date();
  await this.updateMany(
    { date: { $lt: currentDate } },
    { $set: { isAvailable: false } }
  );
};

const Events = mongoose.model("events", eventSchema);

module.exports = Events;

// Example usage (call this when the app starts or periodically):
// Events.updateAllEventsAvailability();
