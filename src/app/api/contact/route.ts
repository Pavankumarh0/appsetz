import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, service, description } = body;

        // Basic validation
        if (!firstName || !email || !phone) {
            return NextResponse.json(
                { error: 'Name, Email, and Phone are required' },
                { status: 400 }
            );
        }

        const fullName = `${firstName} ${lastName || ''}`.trim();

        console.log('Sending email from:', process.env.GMAIL_USER);

        // Create a transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: [process.env.GMAIL_USER as string, 'info@appsetz.work'],
            subject: `New Inquiry: ${service} from ${fullName}`,
            text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${description || 'No description provided.'}
            `,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">New Inquiry from Portfolio</h2>
                    
                    <div style="margin: 20px 0;">
                        <p><strong>Name:</strong> ${fullName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Service Interested:</strong> ${service}</p>
                    </div>

                    <div style="margin: 20px 0;">
                        <p><strong>Project Description:</strong></p>
                        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #000;">
                            ${description || 'No description provided.'}
                        </div>
                    </div>

                    <p style="color: #888; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
                        This email was sent from the contact form on appsetz.work
                    </p>
                </div>
            `,
            replyTo: email,
        };

        console.log('Attempting to send mail...');
        const info = await transporter.sendMail(mailOptions);
        console.log('Mail sent successfully:', info.messageId);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Nodemailer Error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
