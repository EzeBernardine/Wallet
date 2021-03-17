const { deposit } = require("../controllers/accounts");

const router = require("express").Router();

router.post("/deposit", deposit);
module.exports = router;
