import { razorpayInstance } from "../configs/razorpay.js";

export const createSubcription = async (req, res) => {
  const { planId, email, phone } = req.body;
  try {
    const subscription = await razorpayInstance.subscriptions.create({
      plan_id: planId,
      total_count: 1, // Single 20-day period: total number of billing cycles
      customer_notify: 1,
    });
    // console.log(subscription);
    // Store Subscription WITHOUT a userId (since user isn't logged in)
    const newSubscription = new Subscription({
      subscriptionId: razorpayResponse.id,
      planId,
      status: "created",
      email, // Temporarily store email
      phone,
      startDate: new Date(),
      endDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000),
    });
    await newSubscription.save();
    res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      data: subscription,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
