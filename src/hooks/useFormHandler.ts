import { formAlertsTextContent } from "../utils/text-content";
import { useAppState } from "../store/app-state";

export const useFormHandler = () => {
  const { lang } = useAppState();

  const textContent = formAlertsTextContent(lang);

  const nameValidations = (name: string) => {
    if (!name) return textContent.name.required;
    if (name.length < 3) return textContent.name.minLength;
    return null;
  };

  const emailValidations = (email: string) => {
    if (!email) return textContent.email.required;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return textContent.email.pattern;
    return null;
  };

  const messageValidations = (message: string) => {
    if (!message) return textContent.message.required;
    if (message.length < 3) return textContent.message.minLength;
    return null;
  };
  const sendMessage = async (
    name: string,
    email: string,
    message: string
  ): Promise<string> => {
    const nameValidation = nameValidations(name);
    const emailValidation = emailValidations(email);
    const messageValidation = messageValidations(message);

    if (nameValidation) return nameValidation;
    if (emailValidation) return emailValidation;
    if (messageValidation) return messageValidation;

    const data = {
      service_id: import.meta.env.VITE_SERVICE_ID,
      template_id: import.meta.env.VITE_TEMPLATE_ID,
      user_id: import.meta.env.VITE_USER_ID,
      template_params: {
        username: name,
        email: email,
        message: message,
        "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
      },
    };

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const status = await res.text();

      if (status === "OK") {
        return textContent.success;
      } else {
        return textContent.error;
      }
    } catch (error) {
      console.log(error);
      return textContent.error;
    }
  };

  return { sendMessage };
};
