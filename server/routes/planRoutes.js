import { Router } from "express";
import { createPlan, getAllPlans } from "../controllers/planController.js";

const router = Router();

router.route("/").post(createPlan).get(getAllPlans);

export default router;
