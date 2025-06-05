const express = require("express");
const { protect } = require("../middlewares/authMiddleware.js");
const { getDashboardData } = require("../controllers/dashboard.controller");

const router = express.Router();

router.get("/", protect, getDashboardData);

module.exports = router;
