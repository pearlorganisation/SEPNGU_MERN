import { razorpayInstance } from "../configs/razorpay.js";
import getPrismaInstance from "../utils/PrismaClient.js";

export const createPlan = async (req, res) => {
  try {
    const {
      name,
      amount,
      currency,
      period = "monthly",
      interval = 3,
    } = req.body;

    // Validate required fields
    if (!name || !amount || !currency) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Create a new plan in Razorpay
    const razorpayResponse = await razorpayInstance.plans.create({
      period, // Default: "monthly"
      interval, // Default: 3 months
      item: {
        name: name,
        amount: amount * 100, // Convert to paise
        currency: currency.toUpperCase(), // Ensure proper currency format
        description: `${interval}-month subscription plan`,
      },
    });
    console.log("razorpay response: ", razorpayResponse);
    const prisma = getPrismaInstance();

    // Store the plan in the database using Prisma
    const newPlan = await prisma.plan.create({
      data: {
        planId: razorpayResponse.id, // Store Razorpay Plan ID
        name,
        description: razorpayResponse.item.description,
        price: amount,
        currency: currency.toUpperCase(),
        duration: interval * 30, // Convert months to days
      },
    });

    res.status(201).json({
      success: true,
      message: "Plan created successfully",
      data: newPlan, // Return DB entry
    });
  } catch (error) {
    console.error("Razorpay Plan Creation Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create plan",
      error: error.message,
    });
  }
};

export const getAllPlans = async (req, res) => {
  try {
    const prisma = getPrismaInstance();

    // Fetch all plans from the database
    const plans = await prisma.plan.findMany();

    res.status(200).json({
      success: true,
      message: "Plans retrieved successfully",
      data: plans,
    });
  } catch (error) {
    console.error("Error fetching plans:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch plans",
      error: error.message,
    });
  }
};
