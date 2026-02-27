const Session = require("../models/Session");
const Patient = require("../models/Patient");
const detectAnomalies = require("../services/anomalyService");

exports.createSession = async (req, res) => {
  try {
    const patient = await Patient.findById(req.body.patientId);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const anomalies = detectAnomalies(req.body, patient);

    const session = await Session.create({
      ...req.body,
      anomalies
    });

    res.status(201).json(session);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};