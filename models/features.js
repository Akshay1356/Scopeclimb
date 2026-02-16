const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  title: String,
  type: String,
  status: { type: String, default: "Not Started" },

  // 👇 Version tracking
  version: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model("Feature", featureSchema);
