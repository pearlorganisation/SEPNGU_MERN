import getPrismaInstance from "../utils/PrismaClient.js";

//Get Unread Notifications for a User
export const getUserNotifications = async (req, res) => {
  try {
    const { userId } = req.params;

    const prisma = getPrismaInstance();
    const notifications = await prisma.notification.findMany({
      where: { userId: parseInt(userId), isRead: false },
      orderBy: { createdAt: "desc" },
    });

    res
      .status(200)
      .json({ success: true, message: "Notifications fetched", notifications });
  } catch (error) {
    console.error(" Error fetching notifications:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const markNotificationAsRead = async (req, res) => {
  try {
    const { userId } = req.params;
    const prisma = getPrismaInstance();
    const updatedNotifications = await prisma.notification.updateMany({
      where: { userId: parseInt(userId) },
      data: { isRead: true },
    });

    res.status(200).json({
      success: true,
      message: "Notification marked as read",
      updatedCount: updatedNotifications.count,
    });
  } catch (error) {
    console.error("❌ Error marking notification as read:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
