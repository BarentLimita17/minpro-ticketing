import { Router } from "express";

import { createReview, getReviewByEventId } from "@/controllers/ReviewController";

const router = Router();

router.post('/', createReview)
router.get('/:eventId', getReviewByEventId)

export default router