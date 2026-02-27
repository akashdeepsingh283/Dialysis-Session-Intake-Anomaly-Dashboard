const config = require("../config/clinical");

function detectAnomalies(sessionData, patient) {

  const weightGain = sessionData.preWeight - patient.dryWeight;
  const excessiveWeightGain =
    weightGain > config.MAX_WEIGHT_GAIN_KG;


  const highBP =
    sessionData.vitals?.postSysBP >
    config.MAX_POST_SYS_BP;

  let abnormalDuration = false;

  if (sessionData.startTime && sessionData.endTime) {
    const duration =
      (new Date(sessionData.endTime) -
       new Date(sessionData.startTime)) / 60000;

    abnormalDuration =
      duration < config.MIN_DURATION_MIN ||
      duration > config.MAX_DURATION_MIN;
  }

  return {
    weightGain: excessiveWeightGain,
    highBP,
    abnormalDuration
  };
}

module.exports = detectAnomalies;