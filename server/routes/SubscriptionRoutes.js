import { Router } from "express";
import { createSubcription } from "../controllers/SubscriptionController.js";

const router = Router();

router.route("/").post(createSubcription);

export default router;
