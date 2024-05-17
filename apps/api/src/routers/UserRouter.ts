import { Router } from "express";

import { getTransactionNonPastEventByUid, getUserByUid, getUserActiveTicketByUid, getUserUsedTicketByUid, getTransactionPastEventReviewedByUid, getTransactionPastEventUnReviewedByUid } from "@/controllers/UserController";

const router = Router();

router.get('/', getUserByUid)
router.get('/active-ticket', getUserActiveTicketByUid)
router.get('/used-ticket', getUserUsedTicketByUid)
router.get('/transaction-non-past-event', getTransactionNonPastEventByUid)
router.get('/transaction-past-event-unreviewed', getTransactionPastEventUnReviewedByUid)
router.get('/transaction-past-event-reviewed', getTransactionPastEventReviewedByUid)

export default router