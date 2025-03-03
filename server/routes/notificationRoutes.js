import express from "express";
import {
  getUserNotifications,
  markNotificationAsRead,
} from "../controllers/notificationController.js";

const router = express.Router();

// Get unread notifications for a user
router.route("/:userId").get(getUserNotifications);

// Mark a notification as read
router.patch("/mark-read/:userId", markNotificationAsRead);

export default router;
