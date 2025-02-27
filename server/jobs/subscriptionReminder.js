import cron from "node-cron";
import getPrismaInstance from "../utils/PrismaClient";

// const { io, users } = require("./socketService"); // Import socket instance

const prisma = getPrismaInstance();
// Function to send notifications
export const sendNotification = async (userId, message) => {
  const notification = await prisma.notification.create({
    data: { userId, message },
  });

  const userSocketId = global.onlineUsers[userId];
  if (userSocketId) {
    io.to(userSocketId).emit("newNotification", notification);
  }
};

// Cron job runs every hour (At minute 0)
cron.schedule("0 * * * *", async () => {
  console.log("🔔 Running cron job: Checking expired subscriptions...");

  const expiredSubscriptions = await prisma.subscription.findMany({
    where: {
      endDate: { lt: new Date() }, // Expired subscriptions
      status: "ACTIVE",
    },
  });

  for (const sub of expiredSubscriptions) {
    await sendNotification(
      sub.userId,
      "⚠️ Your subscription has expired. Please renew your plan."
    );

    // Update subscription status
    await prisma.subscription.update({
      where: { id: sub.id },
      data: { status: "EXPIRED" },
    });
  }

  console.log(
    `✅ Processed ${expiredSubscriptions.length} expired subscriptions.`
  );
});
