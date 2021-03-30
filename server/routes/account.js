const { deposit } = require("../controllers/accounts");
const isAuth = require("../middleware/isAuth");
const { withdraw } = require("../controllers/accounts");

const router = require("express").Router();

router.post("/deposit", deposit);

router.post("/withdraw", isAuth, withdraw);

module.exports = router;
