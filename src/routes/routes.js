import express from "express";
import { login, signup } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.js";
import { uploadImageController } from "../controllers/image.controller.js";
const router = express.Router();


// Public routes
router.post('/signup',signup);
router.post('/login',login);


// // Protected routes
router.use(authMiddleware);

router.post("/upload-image",uploadImageController);

export default router;