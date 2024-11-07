import EmailService from '../services/EmailService';

class EmailController {
    private emailService: EmailService;

    constructor() {
        this.emailService = new EmailService();
    }

    async sendWelcomeEmail(to: string, name: string) {
        const subject = 'Welcome to Our Service!';
        const data = { name };

        try {
            await this.emailService.sendEmail(to, subject);
        } catch (error) {
            console.error('Error in sending welcome email:', error);
            throw new Error(`Failed to send welcome email - ${error}`);
        }
    }

    // More methods for other email types (e.g., reset password, etc.)
}

export default new EmailController();
