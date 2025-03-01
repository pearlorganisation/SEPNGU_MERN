import { Router } from "express";
import { createSubscription } from "../controllers/SubscriptionController.js";

const router = Router();

router.route("/").post(createSubscription);

export default router;
