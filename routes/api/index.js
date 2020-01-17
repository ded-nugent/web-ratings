const router = require("express").Router();
const websiteRoutes = require("./websites");

router.use("/websites", websiteRoutes);

module.exports = router;
