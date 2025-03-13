const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", authController.register);
// router.post("/register", upload.single("profileImage"), authController.register);
router.post("/login", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password/:token", authController.resetPassword);
router.get("/users",authMiddleware, authController.getuser);
router.get("/users/:id",authMiddleware, authController.getByUser);
router.put("/users/:id",authMiddleware, authController.getUserupdate);
router.delete("/users/:id",authMiddleware, authController.getuserdelete);
 
module.exports = router;