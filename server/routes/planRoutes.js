import { Router } from "express";
import { createPlan } from "../controllers/planController.js";

const router = Router();

router.route("/").post(createPlan);

export default router;
