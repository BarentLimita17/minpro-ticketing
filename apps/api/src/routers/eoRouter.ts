import { Router } from "express";

// Define Router
const router = Router()

// Import Controller


import { tokenVerify } from "@/helpers/Token";
import { eoRegistration } from "@/controllers/EoController";
import { roleVerifyEO } from "@/middleware/Verification/RoleVerify";
router.post('/register', eoRegistration)

export default router