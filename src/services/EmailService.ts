import nodemailer from 'nodemailer';

class EmailService {
    private transporter: { sendMail: (arg0: { from: string | undefined; to: string; subject: string; html: string; }) => any; };

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
    }

    async sendEmail(to: string, subject: string) {
        const emailBody = `
            <h1>Welcome to Our Service</h1>
            <p>Thank you for signing up! We’re excited to have you on board.</p>
            <p>If you have any questions, feel free to reply to this email.</p>
        `;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            html: emailBody,
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            throw new Error('Email sending failed');
        }
    }
}

export default EmailService;
