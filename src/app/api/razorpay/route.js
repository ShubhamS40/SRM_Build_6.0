import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const { totalAmount } = await req.json();

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAYID_KEY,
      key_secret: process.env.RAZORPAYSECERET_KEY,
    });

    const options = {
      amount: totalAmount * 100, // Amount in paise (₹1 = 100 paise)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return Response.json({ success: true, order });
  } catch (error) {
    return Response.json({ success: false, message: error.message });
  }
}
