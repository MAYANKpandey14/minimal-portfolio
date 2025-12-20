import emailjs from "@emailjs/browser";

// Initialize EmailJS with public key
emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID!);

export const sendEmail = async ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID!,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
    {
      from_name: name,
      from_email: email,
      subject,
      message,
      to_name: "Developer", // Add recipient name for template
    }
  );
};
