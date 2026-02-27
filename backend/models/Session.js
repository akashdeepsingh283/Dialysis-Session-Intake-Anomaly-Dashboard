const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true
  },
  unitId: {
    type: String,
    required: true
  },
  machineId: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date
  },
  preWeight: {
    type: Number,
    required: true
  },
  postWeight: {
    type: Number
  },
  vitals: {
    preSysBP: Number,
    postSysBP: Number
  },
  nurseNotes: {
    type: String
  },
  anomalies: {
    weightGain: Boolean,
    highBP: Boolean,
    abnormalDuration: Boolean
  }
}, { timestamps: true });

module.exports = mongoose.model("Session", sessionSchema);