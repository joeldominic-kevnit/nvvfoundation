import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, phone, course, message } = await req.json();

  if (!name || !email || !phone || !course) {
    return Response.json({ sent: false, error: 'Missing required fields' }, { status: 400 });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    // Email not configured — don't fail the form, just skip delivery.
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

    const to = process.env.ENQUIRY_TO_EMAIL || 'ganeshcm9@gmail.com';

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"NVVF Website" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `New Enquiry — ${name} (${course === 'ug' ? 'UG Course' : 'PG Course'})`,
      html: `
        <h2>New enquiry from nvvfoundation.com</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Programme:</strong> ${course === 'ug' ? 'UG Course (MBBS)' : 'PG Course (MD / MS / MDS)'}</p>
        <p><strong>Note:</strong> ${message ? message : '—'}</p>
      `,
    });

    return Response.json({ sent: true });
  } catch (err) {
    console.error('Enquiry email error:', err);
    return Response.json({ sent: false, error: 'Send failed' }, { status: 500 });
  }
}
