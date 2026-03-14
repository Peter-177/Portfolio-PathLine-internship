import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import emailjs from "@emailjs/browser";
import { FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loadingState, setLoadingState] = useState("");
  const myRef = useRef(null);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      const myAnimation = gsap.timeline({ defaults: { ease: "power3.out" } });

      myAnimation
        .from(".contact-label", { y: 20, opacity: 0, duration: 0.5 })
        .from(".contact-title", { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".contact-social", { y: 20, opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".contact-form", { y: 40, opacity: 0, duration: 0.7 }, "-=0.4");
    }, myRef);

    return () => gsapContext.revert();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoadingState("sending");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: userInput.name,
          from_email: userInput.email,
          message: userInput.message,
        },
        publicKey,
      );

      setLoadingState("success");
      setUserInput({ name: "", email: "", message: "" });
    } catch (error) {
      setLoadingState("error");
      console.error("EmailJS Error:", error?.text || error?.message || error);
    }
  };

  return (
    <>
      <div>
        <title>Contact | Peter Boshra</title>
        <meta
          name="description"
          content="Get in touch with Peter Boshra for collaborations or job opportunities in frontend development."
        />
      </div>
      <section
        ref={myRef}
        className="min-h-170 flex items-center px-6 md:px-16 py-16"
      >
        <div className="w-full flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <h2 className="contact-label text-sm font-mono text-primary uppercase tracking-widest mb-3">
              Get In Touch
            </h2>
            <h1 className="contact-title text-5xl font-bold text-base-content mb-4">
              Contact Me
            </h1>

            <div className="contact-social">
              <p className="text-xs text-base-content/40 font-medium uppercase tracking-wider mb-3">
                Find me on
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/peter-177"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-lg bg-base-200 border border-base-content/8 flex items-center justify-center 
                             hover:bg-base-300 hover:border-base-content/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/peter-boshra-2332783a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-lg bg-base-200 border border-base-content/8 flex items-center justify-center 
                             hover:bg-base-300 hover:border-base-content/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <FaLinkedin className="text-lg text-[#0A66C2]" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form flex-1 w-full">
            <div className="bg-base-200 border border-base-content/8 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-base-content mb-6">
                Send me a message
              </h3>

              <form onSubmit={sendEmail} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs text-base-content/40 font-medium mb-1.5 block"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <FiUser
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/30"
                      aria-hidden="true"
                    />
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="input input-bordered w-full pl-10"
                      value={userInput.name}
                      onChange={(e) =>
                        setUserInput({ ...userInput, name: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-xs text-base-content/40 font-medium mb-1.5 block"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <FiMail
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/30"
                      aria-hidden="true"
                    />
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="input input-bordered w-full pl-10"
                      value={userInput.email}
                      onChange={(e) =>
                        setUserInput({ ...userInput, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs text-base-content/40 font-medium mb-1.5 block"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <FiMessageSquare
                      className="absolute left-3.5 top-3.5 text-base-content/30"
                      aria-hidden="true"
                    />
                    <textarea
                      id="message"
                      placeholder="Your message"
                      className="textarea textarea-bordered w-full h-32 pl-10 pt-3"
                      value={userInput.message}
                      onChange={(e) =>
                        setUserInput({ ...userInput, message: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary gap-2 mt-1"
                  disabled={loadingState === "sending"}
                >
                  {loadingState === "sending" ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="text-sm" />
                      Send Message
                    </>
                  )}
                </button>

                {loadingState === "success" && (
                  <div className="flex items-center gap-2 text-sm text-success bg-success/10 border border-success/20 rounded-xl px-4 py-3">
                    <span>✓</span> Message sent successfully! I'll get back to
                    you soon.
                  </div>
                )}
                {loadingState === "error" && (
                  <div className="flex items-center gap-2 text-sm text-error bg-error/10 border border-error/20 rounded-xl px-4 py-3">
                    <span>✕</span> Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
