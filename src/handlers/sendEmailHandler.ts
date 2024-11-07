import { APIGatewayEvent, Context } from 'aws-lambda';
import EmailController from '../controllers/emailController';

export const sendWelcomeEmailHandler = async (event: APIGatewayEvent, context: Context) => {
  const { to, name } = JSON.parse(event.body || '{}');

  try {
    await EmailController.sendWelcomeEmail(to, name);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Failed to send email - ${error}` }),
    };
  }
};
