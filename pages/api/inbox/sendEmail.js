import nodemailer from 'nodemailer';

const pass = process.env.NODEMAILER;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Use your email service provider's SMTP settings
      service: 'gmail',
      auth: {
        user: 'ariwidaniadelia@gmail.com',
        pass,
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: 'liaariwidani@gmail.com',
      subject: subject,
      html: `
        <h2 style="text-align: center;">Contact Form KAJA Website</h2>
        <img src="https://images.pexels.com/photos/18695366/pexels-photo-18695366/free-photo-of-bearded-man-sitting-on-jeep.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image Description" style="max-width: 100%;" />
        <h3 style="text-align: center;"><strong>${name}</strong></h3>
        <p style="text-align: center;">${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
