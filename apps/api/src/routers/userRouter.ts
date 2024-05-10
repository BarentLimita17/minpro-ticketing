import { Router } from "express";

// Define Router
const router = Router()

// Import Controller
import { userRegistration } from "../controllers/UserController";
import { userRole } from "../controllers/UserController";
router.post('/register',userRegistration)
router.get('/role', userRole)

export default router