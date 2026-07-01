import nodemailer from 'nodemailer';

function buildReceiptHtml(formData: Record<string, string>, paymentDetails: { paymentId: string; orderId: string; paidAt: string }) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Payment Receipt — NVVF</title></head>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:Georgia,'Times New Roman',serif;">
  <div style="max-width:620px;margin:40px auto;background:#ffffff;border-radius:6px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">

    <!-- Header -->
    <div style="background:#102a4c;padding:36px 44px;">
      <p style="color:#5bc0c1;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;margin:0 0 8px;">Official Receipt</p>
      <h1 style="color:#f6f1e7;font-size:24px;font-weight:300;margin:0;line-height:1.2;">National Videsh<br><em style="font-style:italic;color:#7dd4d5;">Vidya Foundation</em></h1>
    </div>

    <!-- Success banner -->
    <div style="background:#2ca4a5;padding:14px 44px;display:flex;align-items:center;">
      <span style="color:#ffffff;font-size:20px;margin-right:10px;">✓</span>
      <span style="color:#ffffff;font-size:15px;font-family:Arial,sans-serif;">Payment of <strong>₹30,000 INR</strong> received successfully</span>
    </div>

    <!-- Body -->
    <div style="padding:36px 44px;">
      <p style="color:#102a4c;font-size:17px;margin:0 0 8px;">Dear <strong>${formData.fullName}</strong>,</p>
      <p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 28px;">
        Thank you for registering with NVVF. Your registration fee has been received and your application is now under review.
        Please keep this receipt for your records.
      </p>

      <!-- Payment details -->
      <div style="border:1px solid #e2e8f0;border-radius:4px;overflow:hidden;margin-bottom:24px;">
        <div style="background:#f7fafc;padding:14px 20px;border-bottom:1px solid #e2e8f0;">
          <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#2ca4a5;font-weight:700;">Payment Details</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;font-family:Arial,sans-serif;">
          <tr style="border-bottom:1px solid #f0f0f0;">
            <td style="padding:13px 20px;color:#777;">Payment ID</td>
            <td style="padding:13px 20px;color:#102a4c;font-weight:600;text-align:right;">${paymentDetails.paymentId}</td>
          </tr>
          <tr style="border-bottom:1px solid #f0f0f0;">
            <td style="padding:13px 20px;color:#777;">Order ID</td>
            <td style="padding:13px 20px;color:#102a4c;font-weight:600;text-align:right;">${paymentDetails.orderId}</td>
          </tr>
          <tr style="border-bottom:1px solid #f0f0f0;">
            <td style="padding:13px 20px;color:#777;">Amount Paid</td>
            <td style="padding:13px 20px;color:#2ca4a5;font-weight:700;font-size:17px;text-align:right;">₹30,000 INR</td>
          </tr>
          <tr>
            <td style="padding:13px 20px;color:#777;">Date &amp; Time</td>
            <td style="padding:13px 20px;color:#102a4c;font-weight:600;text-align:right;">${paymentDetails.paidAt}</td>
          </tr>
        </table>
      </div>

      <!-- Application summary -->
      <div style="border:1px solid #e2e8f0;border-radius:4px;overflow:hidden;margin-bottom:28px;">
        <div style="background:#f7fafc;padding:14px 20px;border-bottom:1px solid #e2e8f0;">
          <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#2ca4a5;font-weight:700;">Application Summary</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;font-family:Arial,sans-serif;">
          <tr style="border-bottom:1px solid #f0f0f0;">
            <td style="padding:13px 20px;color:#777;">Full Name</td>
            <td style="padding:13px 20px;color:#102a4c;font-weight:600;text-align:right;">${formData.fullName}</td>
          </tr>
          <tr style="border-bottom:1px solid #f0f0f0;">
            <td style="padding:13px 20px;color:#777;">Email</td>
            <td style="padding:13px 20px;color:#102a4c;font-weight:600;text-align:right;">${formData.email}</td>
          </tr>
          <tr style="border-bottom:1px solid #f0f0f0;">
            <td style="padding:13px 20px;color:#777;">Course</td>
            <td style="padding:13px 20px;color:#102a4c;font-weight:600;text-align:right;">${formData.course}</td>
          </tr>
          <tr style="border-bottom:1px solid #f0f0f0;">
            <td style="padding:13px 20px;color:#777;">Preferred University</td>
            <td style="padding:13px 20px;color:#102a4c;font-weight:600;text-align:right;">${formData.university}</td>
          </tr>
          <tr style="border-bottom:1px solid #f0f0f0;">
            <td style="padding:13px 20px;color:#777;">Country</td>
            <td style="padding:13px 20px;color:#102a4c;font-weight:600;text-align:right;">${formData.country}</td>
          </tr>
          <tr>
            <td style="padding:13px 20px;color:#777;">NEET Score</td>
            <td style="padding:13px 20px;color:#102a4c;font-weight:600;text-align:right;">${formData.neetScore} / 720 (${formData.neetYear})</td>
          </tr>
        </table>
      </div>

      <!-- Next steps -->
      <div style="background:#f0fafa;border:1px solid #b2e0e0;border-radius:4px;padding:18px 20px;margin-bottom:8px;">
        <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#102a4c;line-height:1.6;">
          📞 A senior admissions counsellor will contact you on <strong>${formData.phone}</strong> within <strong>4 working hours</strong>.
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#102a4c;padding:24px 44px;text-align:center;">
      <p style="color:rgba(246,241,231,0.65);font-size:12px;font-family:Arial,sans-serif;margin:0 0 4px;">
        National Videsh Vidya Foundation · Jayanagar 9th Block, Bangalore — 560069
      </p>
      <p style="color:rgba(246,241,231,0.4);font-size:11px;font-family:Arial,sans-serif;margin:0;">
        +91 98447 57075 · ganeshcm9@gmail.com · This is an auto-generated receipt.
      </p>
    </div>

  </div>
</body>
</html>`;
}

export async function POST(req: Request) {
  const { formData, paymentDetails } = await req.json();

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    // Email not configured — skip silently so demo mode still works
    return Response.json({ sent: false, reason: 'SMTP not configured' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"NVVF Admissions" <${process.env.SMTP_USER}>`,
      to: formData.email,
      subject: `Registration Confirmed — NVVF Receipt (${paymentDetails.paymentId})`,
      html: buildReceiptHtml(formData, paymentDetails),
    });

    return Response.json({ sent: true });
  } catch (err) {
    console.error('Receipt email error:', err);
    return Response.json({ sent: false, reason: 'Send failed' }, { status: 500 });
  }
}
