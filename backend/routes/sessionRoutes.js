const express = require("express");
const router = express.Router();
const { createSession } = require("../controllers/sessionController");

router.post("/", createSession);

module.exports = router;