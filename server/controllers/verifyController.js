import crypto from "crypto";
import getPrismaInstance from "../utils/PrismaClient.js";
export const verifyPayment = async (req, res) => {
  const { razorpay_payment_id, razorpay_subscription_id, razorpay_signature } =
    req.body;

  try {
    if (
      !razorpay_payment_id ||
      !razorpay_subscription_id ||
      !razorpay_signature
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Generate expected signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_payment_id}|${razorpay_subscription_id}`)
      .digest("hex");

    // Verify the signature
    if (expectedSignature !== razorpay_signature) {
      console.error("Invalid Signature");
      return res
        .status(400)
        .json({ success: false, message: "Invalid signature" });
    }

    console.log("✅ Payment Verified Successfully!");

    const prisma = getPrismaInstance();

    // Update subscription status in DB
    const updatedSubscription = await prisma.subscription.update({
      where: { subscriptionId: razorpay_subscription_id },
      data: { status: "ACTIVE" }, // Update status as per your enum
    });

    res.status(200).json({
      success: true,
      message: "Payment verified and subscription updated!",
      data: updatedSubscription,
    });
  } catch (error) {
    console.error("❌ Error verifying payment:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
