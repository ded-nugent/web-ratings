const path = require("path");
const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");

// const websiteRoutes = require("./websites");

// API Routes
router.use("/api", apiRoutes);
// router.use("/websites", websiteRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;