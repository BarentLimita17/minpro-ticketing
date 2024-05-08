import { Router } from "express";

// Define Router
const router = Router()

// Import Controller
import { userRegistration } from "../controllers/userController";

router.post('/register',userRegistration)

export default router