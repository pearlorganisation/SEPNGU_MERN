import express from "express";
import { verifyPayment } from "../controllers/verifyController.js";

const router = express.Router();

router.route("/").post(verifyPayment);

export default router;
