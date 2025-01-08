const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date:{type:Date, required:true},
  createdBy:{ type: String, required: true },
  isApproved:{type:Boolean,default:false},
  isAvailable:{type:Boolean,default:false},
});

const Events = mongoose.model("events", eventSchema);

module.exports = Events;
