import { Router } from "express";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/SubscriptionController.js";

const router = Router();

router.route("/").post(createSubscription);
router.route("/user/:id").get(getUserSubscriptions);

export default router;
