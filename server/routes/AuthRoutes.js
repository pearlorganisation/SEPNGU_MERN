import { Router } from "express";
import {
  checkUser,
  generateToken,
  getAllUsers,
  onBoardUser,
} from "../controllers/Authcontroller.js";

const router = Router();

router.post("/check-user", checkUser);
router.post("/onboard-user", onBoardUser);
router.get("/get-contacts", getAllUsers);
router.get("/generate-token/:userId/:roomId", generateToken);

export default router;
