const { createUser, loginUser, changePassword } = require("../controllers/user");
const { createProfile, getProfile } = require('../controllers/profile')
const isAuth = require('../middleware/isAuth')
const router = require("express").Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post('/change-password', isAuth, changePassword)
router.post('/createProfile',isAuth, createProfile)
router.get('/myprofile', isAuth, getProfile)


module.exports = router;