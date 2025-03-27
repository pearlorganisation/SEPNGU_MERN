import { razorpayInstance } from "../configs/razorpay.js";
import getPrismaInstance from "../utils/PrismaClient.js";

export const createPlan = async (req, res) => {
  try {
    const {
      name,
      basePrice,
      currency = "INR",
      period = "monthly",
      interval = 3,
    } = req.body;

    // Validate required fields
    if (!name || !basePrice) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Calculate GST (18%)
    const gstAmount = parseFloat((basePrice * 0.18).toFixed(2)); // GST amount
    const finalAmount = parseFloat((basePrice + gstAmount).toFixed(2)); // Final price including GST

    // Create a new plan in Razorpay
    const razorpayResponse = await razorpayInstance.plans.create({
      period,
      interval,
      item: {
        name,
        amount: Math.round(finalAmount * 100), // Convert to paise
        currency: currency.toUpperCase(),
        description: `${interval}-month subscription plan (Base: ₹${basePrice}, GST: ₹${gstAmount})`,
      },
    });

    console.log("Razorpay response:", razorpayResponse);
    const prisma = getPrismaInstance();

    // Store the plan in the database using Prisma
    const newPlan = await prisma.plan.create({
      data: {
        planId: razorpayResponse.id,
        name,
        description: razorpayResponse.item.description,
        basePrice, // Store base price
        gst: gstAmount, // Store GST separately
        finalPrice: finalAmount, // Store final price
        currency: currency.toUpperCase(),
        duration: interval * 30,
      },
    });

    res.status(201).json({
      success: true,
      message: "Plan created successfully",
      data: newPlan,
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
