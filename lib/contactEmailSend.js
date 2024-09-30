import { EmailTemplate } from "@/components/emails/contact-email-tem";
import { resend } from "@/utils/resend";

export const contactEmailSend = async ({ name, email, budget, select, description, topic }) => {
  await resend.emails.send({
    from: "client@sayan.com",
    to: "sayan61668@gmail.com",
    subject: "Contact Project",
    react: EmailTemplate({ firstName: name, email, budget, select, description, topic }),
  });
  return (
    {
      success: true,
      message: "Varify email send successfully",
    },
    {
      status: 200,
    }
  );
};

export default contactEmailSend;
