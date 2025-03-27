import { razorpayInstance } from "../configs/razorpay.js";
import getPrismaInstance from "../utils/PrismaClient.js";

export const createSubscription = async (req, res) => {
  const { planId, email, userId } = req.body;
  console.log(req.body);
  try {
    // Create Subscription in Razorpay
    const razorpayResponse = await razorpayInstance.subscriptions.create({
      plan_id: planId,
      total_count: 1, // One-time 3-month subscription
      customer_notify: 1,
    });
    const prisma = getPrismaInstance();
    // Store Subscription in Database using Prisma
    const newSubscription = await prisma.subscription.create({
      data: {
        subscriptionId: razorpayResponse.id,
        planId,
        userId,
        status: "CREATED", // Enum value in Prisma
        email: email,
        startDate: new Date(),
        endDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000), // 3 months
      },
    });

    res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      data: newSubscription,
    });
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUserSubscriptions = async (req, res) => {
  const { id } = req.params;
  try {
    const prisma = getPrismaInstance();
    const subscriptions = await prisma.subscription.findMany({
      where: {
        userId: parseInt(id),
      },
      include: {
        plan: true,
      },
    });
    res.status(200).json({
      success: true,
      message: "Subscriptions fetched successfully",
      data: subscriptions,
    });
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
