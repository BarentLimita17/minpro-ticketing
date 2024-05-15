import { Router } from "express";

import { getTransactionByUid, getUserByUid, getUserTicketByUid } from "@/controllers/UserController";

const router = Router();

router.get('/', getUserByUid)
router.get('/ticket', getUserTicketByUid)
router.get('/transaction', getTransactionByUid)

export default router