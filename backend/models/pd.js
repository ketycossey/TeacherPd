const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pdSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const pd = mongoose.model("pd", pdSchema);

module.exports = pd;
