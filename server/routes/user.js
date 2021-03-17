const { createUser, loginUser } = require("../controllers/user");

const router = require("express").Router();

router.post('/register', createUser)
router.post('/login', loginUser)

module.exports = router;
