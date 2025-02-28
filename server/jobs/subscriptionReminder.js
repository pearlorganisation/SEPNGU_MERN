import cron from "node-cron";
import getPrismaInstance from "../utils/PrismaClient.js";
import { io } from "../index.js";

const prisma = getPrismaInstance();

// Function to send notifications
export const sendNotification = async (userId, message) => {
  const notification = await prisma.notification.create({
    data: { userId, message },
  });
  console.log("Global onlineUsers:", global.onlineUsers);
  console.log("User ID:", userId);
  const userSocketId = global.onlineUsers.get(userId);
  console.log("User Socket ID to send notification: ", userSocketId);
  if (userSocketId) {
    io.to(userSocketId).emit("newNotification", notification);
  }
};

// Cron job runs every hour (At minute 0)
// cron.schedule("*/5 * * * * *", async () => {
//   console.log("🔔 Running cron job: Checking expired subscriptions...");

//   const expiredSubscriptions = await prisma.subscription.findMany({
//     where: {
//       endDate: { lt: new Date() }, // Expired subscriptions
//       status: "ACTIVE",
//     },
//   });
//   console.log("Expired Subscriptions: ", expiredSubscriptions);
//   for (const sub of expiredSubscriptions) {
//     console.log(`❌ Subscription ${sub.id} has expired.`);
//     await sendNotification(
//       sub.userId,
//       "⚠️ Your subscription has expired. Please renew your plan."
//     );

//     // Update subscription status
//     await prisma.subscription.update({
//       where: { id: sub.id },
//       data: { status: "EXPIRED" },
//     });
//   }

//   console.log(
//     `✅ Processed ${expiredSubscriptions.length} expired subscriptions.`
//   );
// });
