import { razorpayInstance } from "../configs/razorpay.js";

export const createPlan = async (req, res) => {
  try {
    const {
      planName,
      amount,
      currency,
      period = "monthly",
      interval = 3,
    } = req.body;

    // Validate required fields
    if (!planName || !amount || !currency) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Create a new plan
    const plan = await razorpayInstance.plans.create({
      period, // Default: "monthly"
      interval, // Default: 3 months
      item: {
        name: planName,
        amount: amount * 100, // Convert to paise
        currency: currency.toUpperCase(), // Ensure proper currency format
        description: `${interval}-month subscription plan`,
      },
      // total_count: 1, // one-time payment
    });

    res.status(201).json({
      success: true,
      message: "Plan created successfully",
      data: plan,
    });
  } catch (error) {
    console.error("Razorpay Plan Creation Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create plan",
      error,
    });
  }
};
