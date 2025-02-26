import { razorpayInstance } from "../configs/razorpay.js";

export const createSubcription = async (req, res) => {
  const { planId } = req.body;
  try {
    const subscription = await razorpayInstance.subscriptions.create({
      plan_id: planId,
      total_count: 1, // Single 20-day period: total number of billing cycles
      customer_notify: 1,
    });
    console.log(subscription);
    res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      data: subscription,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
