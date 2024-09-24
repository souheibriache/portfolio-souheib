import React, { useState } from "react";
import { TbLadder, TbLoader, TbMailForward } from "react-icons/tb";
import { isValidEmail } from "../../data/checl-email";
import SectionTitle from "../Custom/SectionTitle";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

type Props = {};

const Contact = ({}: Props) => {
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

    const serviceID =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_ocqz84q";
    const templateID =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_c1pgs4b";
    const options = {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "oAY48D47Dz9elgdSE",
    };

    try {
      setLoading(true);
      const res = await emailjs.send(
        serviceID,
        templateID,
        {
          to_name: "Souheib",
          from_name: userInput.name,
          sender_email: userInput.email,
          message: userInput.message,
        },
        options
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error: any) {
      toast.error(error?.text || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="flex items-center justify-center flex-col mx-auto md:w-10/12 w-11/12"
    >
      <SectionTitle title="Contact" />
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {
            "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
          }
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#37BCF8] ring-0 outline-0 transition-all duration-300 px-3 py-2"
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
            <label className="text-base">Your Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#37BCF8] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
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
                Please provide a valid email!
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 relative">
            <span className="absolute text-sm text-white bottom-1 right-1">
              {500 - userInput.message.length}/{messageSize}
            </span>
            <label className="text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#37BCF8] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength={messageSize}
              name="message"
              required={true}
              onChange={(e) =>
                setUserInput({ ...userInput, message: e.target.value })
              }
              onBlur={checkRequired}
              rows={4}
              value={userInput.message}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            {error.required && (
              <p className="text-sm text-red-400">
                Email and Message are required!
              </p>
            )}
            <button
              disabled={sendButtonDisables()}
              className="disabled:opacity-80 flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#37BCF8] to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              onClick={handleSendMail}
            >
              <span>Send Message</span>
              {loading ? (
                <TbLoader className="animate-spin" />
              ) : (
                <TbMailForward className="mt-1" size={18} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
