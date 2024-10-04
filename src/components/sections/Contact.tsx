import { useState } from "react";
import { TbLoader, TbMailForward } from "react-icons/tb";
import { isValidEmail } from "../../data/checl-email";
import SectionTitle from "../Custom/SectionTitle";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";

type Props = {};

const Contact = ({}: Props) => {
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
    console.log({ env: import.meta.env });

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
      className="flex my-4 items-center justify-center flex-col mx-auto md:w-10/12 w-11/12 "
    >
      <SectionTitle title="Contact" />

      <div className="md:w-2/3 w-full text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <Fade triggerOnce direction="up" duration={700}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-[#fff] flex flex-col gap-2">
            Des questions? Des propositions?{" "}
          </p>
          <div className="mt-6 flex flex-col gap-4 text-xs sm:text-sm mg:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            <div className="flex flex-col gap-2 ">
              <label className="">Nom: </label>
              <input
                placeholder="John Doe"
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
              <label>Email: </label>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#37BCF8] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="email"
                placeholder="johndoe@example.com"
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
              <span className="absolute text-xs sm:text-xs md:text-xs lg:text-base xl:text-lg 2xl:text-xl opacity-70 text-white bottom-1 right-1">
                {500 - userInput.message.length}/{messageSize}
              </span>
              <label>Message: </label>
              <textarea
                placeholder="écrire ton message ici..."
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
                className="disabled:opacity-80 flex flex-row items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#37BCF8] to-violet-600 px-5 md:px-12 py-2 md:py-3 text-center text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                role="button"
                onClick={handleSendMail}
              >
                <span>Envoyer</span>
                {loading ? (
                  <TbLoader className="animate-spin" />
                ) : (
                  <TbMailForward className="w-auto h-3 sm:h-4 md:h-5 lg:h-6 xl:h-7" />
                )}
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
