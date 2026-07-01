import Razorpay from 'razorpay';

export async function POST() {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    return Response.json({ error: 'Razorpay keys not configured' }, { status: 500 });
  }

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  try {
    const order = await razorpay.orders.create({
      amount: 3000000, // ₹30,000 in paise
      currency: 'INR',
      receipt: `nvvf_${Date.now()}`,
    });
    return Response.json(order);
  } catch {
    return Response.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
