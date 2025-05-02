"use client";

import { useContext, useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { isValidEmail } from "../../data/checl-email";
import SectionTitle from "../Custom/SectionTitle";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";
import { contactText, sections } from "../../data/componentsText";
import { LanguageContext } from "../../context/languageContext";

type Props = {};

const Contact = ({}: Props) => {
  const { language } = useContext(LanguageContext);
  const {
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY,
  } = import.meta.env;

  const messageSize = 500;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ email: false, required: false });
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const sendButtonDisables = (): boolean => {
    return (
      loading ||
      !userInput.email ||
      !userInput.message ||
      !userInput.name ||
      error.email
    );
  };

  const handleSendMail = async (e: any) => {
    e.preventDefault();
    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    const options = {
      publicKey: VITE_EMAILJS_PUBLIC_KEY,
    };

    try {
      setLoading(true);
      const res = await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        {
          to_name: "Souheib",
          from_name: userInput.name,
          sender_email: userInput.email,
          message: userInput.message,
        },
        options
      );

      if (res.status === 200) {
        toast.success(contactText.successMessage[language]);
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error: any) {
      toast.error(contactText.failureMessage[language]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="flex my-12 items-center justify-center flex-col mx-auto md:w-10/12 w-11/12"
    >
      <SectionTitle title={sections[4].name[language]} />

      <div className="md:w-2/3 w-full text-white rounded-lg border border-[#464c6a] p-6 lg:p-8 shadow-lg bg-[#1a1f35] hover:shadow-xl hover:shadow-[#37BCF8]/10 transition-all duration-500">
        <Fade triggerOnce direction="up" duration={700}>
          <h2 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold bg-gradient-to-r from-[#37BCF8] to-violet-600 bg-clip-text text-transparent mb-6">
            {contactText.title[language]}
          </h2>

          <form
            className="mt-6 flex flex-col gap-6 text-xs sm:text-sm mg:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
            onSubmit={handleSendMail}
          >
            <div className="flex flex-col gap-2">
              <label className="font-medium text-[#37BCF8]">
                {contactText.labels.name[language]}
              </label>
              <input
                placeholder={contactText.placeholders.name[language]}
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#37BCF8] ring-0 outline-0 transition-all duration-300 px-4 py-3 focus:shadow-md focus:shadow-[#37BCF8]/20"
                type="text"
                maxLength={100}
                required={true}
                onChange={(e) =>
                  setUserInput({ ...userInput, name: e.target.value })
                }
                onBlur={checkRequired}
                value={userInput.name}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-[#37BCF8]">
                {contactText.labels.email[language]}
              </label>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#37BCF8] ring-0 outline-0 transition-all duration-300 px-4 py-3 focus:shadow-md focus:shadow-[#37BCF8]/20"
                type="email"
                placeholder={contactText.placeholders.email[language]}
                maxLength={100}
                required={true}
                value={userInput.email}
                onChange={(e) =>
                  setUserInput({ ...userInput, email: e.target.value })
                }
                onBlur={() => {
                  checkRequired();
                  setError({ ...error, email: !isValidEmail(userInput.email) });
                }}
              />
              {error.email && (
                <p className="text-sm text-red-400">
                  {contactText.errors.emailInvalid[language]}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 relative">
              <label className="font-medium text-[#37BCF8]">
                {contactText.labels.message[language]}
              </label>
              <textarea
                placeholder={contactText.placeholders.message[language]}
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#37BCF8] ring-0 outline-0 transition-all duration-300 px-4 py-3 focus:shadow-md focus:shadow-[#37BCF8]/20"
                maxLength={messageSize}
                name="message"
                required={true}
                onChange={(e) =>
                  setUserInput({ ...userInput, message: e.target.value })
                }
                onBlur={checkRequired}
                rows={6}
                value={userInput.message}
              />
              <span className="absolute text-xs sm:text-xs md:text-xs lg:text-base xl:text-lg 2xl:text-xl opacity-70 text-white bottom-3 right-3">
                {500 - userInput.message.length}/{messageSize}
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              {error.required && (
                <p className="text-sm text-red-400">
                  {contactText.errors.required[language]}
                </p>
              )}
              <button
                type="submit"
                disabled={sendButtonDisables()}
                className="disabled:opacity-80 flex flex-row items-center gap-3 hover:gap-5 rounded-full bg-gradient-to-r from-[#37BCF8] to-violet-600 px-8 md:px-12 py-3 md:py-4 text-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium uppercase tracking-wider text-white no-underline transition-all duration-300 ease-out hover:text-white hover:shadow-lg hover:shadow-[#37BCF8]/30 hover:translate-y-[-2px] w-full md:w-auto justify-center"
              >
                <span>{contactText.button.send[language]}</span>
                {loading ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </form>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
