import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const ContactMe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      const sendEmailPromise = emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.promise(sendEmailPromise, {
        loading: "Sending message...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again later.",
      });

      sendEmailPromise.finally(() => {
        form.current?.reset();
      });
    }
  };

  return (
    <div className="flex flex-col">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 self-center max-w-lg w-full"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="dark:text-headlinelight p-2 rounded-lg border-2 dark:bg-backgroundlight bg-backgrounddark text-headlinedark hover:border-button font-gabarito text-lg"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="dark:text-headlinelight p-2 rounded-lg border-2 dark:bg-backgroundlight bg-backgrounddark text-headlinedark hover:border-button font-gabarito text-lg"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="dark:text-headlinelight p-2 rounded-lg border-2 dark:bg-backgroundlight bg-backgrounddark text-headlinedark hover:border-button font-gabarito text-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="dark:text-headlinelight p-2 rounded-lg border-2 dark:bg-backgroundlight bg-backgrounddark text-headlinedark h-40 min-h-[48px] max-h-[250px] hover:border-button font-gabarito text-lg"
          required
        />
        <button
          type="submit"
          className="bg-button text-headlinelight dark:text-buttontext font-gabarito font-medium text-xl p-2 rounded-lg mt-2 self-center dark:hover:text-headlinelight hover:text-buttontext"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
