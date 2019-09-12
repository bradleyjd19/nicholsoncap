const router = require("express").Router();
const emailRoute = require("./emailAPI");

router.use("/email", emailRoute);

module.exports = router;