import { Router } from "express";
import { createTransaction, getPromotionByCode } from "@/controllers/TransactionController";

const router = Router();

router.post('/', createTransaction)
router.get('/code', getPromotionByCode)

export default router