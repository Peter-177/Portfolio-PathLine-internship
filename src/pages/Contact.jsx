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
        className="min-h-screen pt-40 pb-20 px-8 relative overflow-hidden"
      >
       
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cta/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-24 items-start">
        
          <div className="flex-1">
            <h2 className="text-sm font-black text-cta uppercase tracking-[0.3em] mb-4">Communication</h2>
            <h1 className="text-7xl md:text-9xl font-black text-text tracking-tighter leading-none mb-8">
              HELLO<span className="text-text-dim/20">.</span>
            </h1>
            
            <p className="text-text-dim text-xl font-medium leading-relaxed max-w-md mb-12">
              Ready to bring your next big idea to life? Let's connect and build something 
              <span className="text-text font-black"> extraordinary</span> together.
            </p>

            <div className="contact-social">
              <p className="text-[10px] font-black uppercase text-cta tracking-[0.2em] mb-6">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/peter-177"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-14 h-14 rounded-2xl bg-surface border border-white/5 flex items-center justify-center 
                             hover:bg-zinc-800 hover:border-cta/30 hover:-translate-y-1 shadow-lg transition-all duration-300 group"
                >
                  <FaGithub className="text-2xl group-hover:text-cta transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/peter-boshra-2332783a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-14 h-14 rounded-2xl bg-surface border border-white/5 flex items-center justify-center 
                             hover:bg-zinc-800 hover:border-[#0A66C2]/30 hover:-translate-y-1 shadow-lg transition-all duration-300 group"
                >
                  <FaLinkedin className="text-2xl group-hover:text-[#0A66C2] transition-colors" />
                </a>
                <a
                  href="mailto:peterboshra@example.com"
                  className="w-14 h-14 rounded-2xl bg-surface border border-white/5 flex items-center justify-center 
                             hover:bg-zinc-800 hover:border-cta/30 hover:-translate-y-1 shadow-lg transition-all duration-300 group"
                >
                  <FiMail className="text-2xl group-hover:text-cta transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="glass-card !p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cta/5 blur-2xl group-hover:w-48 group-hover:h-48 transition-all duration-700"></div>
              
              <h3 className="text-3xl font-black text-text tracking-tight mb-10">
                Direct Message
              </h3>

              <form onSubmit={sendEmail} className="flex flex-col gap-8">
                <div className="space-y-6">
             
                  <div className="relative group/input">
                    <label
                      htmlFor="name"
                      className="text-[10px] font-black uppercase text-text-dim tracking-widest ml-1 mb-2 block group-focus-within/input:text-cta transition-colors"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <FiUser
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim/40 group-focus-within/input:text-cta transition-colors"
                        aria-hidden="true"
                      />
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full bg-background/50 border border-white/5 h-14 pl-12 pr-4 rounded-xl outline-none focus:border-cta/50 focus:ring-4 focus:ring-cta/5 transition-all font-medium text-text placeholder:text-text-dim/20"
                        value={userInput.name}
                        onChange={(e) =>
                          setUserInput({ ...userInput, name: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="relative group/input">
                    <label
                      htmlFor="email"
                      className="text-[10px] font-black uppercase text-text-dim tracking-widest ml-1 mb-2 block group-focus-within/input:text-cta transition-colors"
                    >
                      Electronic Mail
                    </label>
                    <div className="relative">
                      <FiMail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim/40 group-focus-within/input:text-cta transition-colors"
                        aria-hidden="true"
                      />
                      <input
                        id="email"
                        type="email"
                        placeholder="email@gmail.com"
                        className="w-full bg-background/50 border border-white/5 h-14 pl-12 pr-4 rounded-xl outline-none focus:border-cta/50 focus:ring-4 focus:ring-cta/5 transition-all font-medium text-text placeholder:text-text-dim/20"
                        value={userInput.email}
                        onChange={(e) =>
                          setUserInput({ ...userInput, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  
                  <div className="relative group/input">
                    <label
                      htmlFor="message"
                      className="text-[10px] font-black uppercase text-text-dim tracking-widest ml-1 mb-2 block group-focus-within/input:text-cta transition-colors"
                    >
                      Your Message
                    </label>
                    <div className="relative">
                      <FiMessageSquare
                        className="absolute left-4 top-5 text-text-dim/40 group-focus-within/input:text-cta transition-colors"
                        aria-hidden="true"
                      />
                      <textarea
                        id="message"
                        placeholder="Youremail@gmail.com"
                        className="w-full bg-background/50 border border-white/5 min-h-[160px] p-5 pl-12 rounded-xl outline-none focus:border-cta/50 focus:ring-4 focus:ring-cta/5 transition-all font-medium text-text placeholder:text-text-dim/20 resize-none"
                        value={userInput.message}
                        onChange={(e) =>
                          setUserInput({ ...userInput, message: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-premium-primary w-full group/btn"
                  disabled={loadingState === "sending"}
                >
                  {loadingState === "sending" ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                      Dispatching...
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>

              
                {loadingState === "success" && (
                  <div className="flex items-center gap-3 text-sm text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-2xl px-6 py-4 animate-fadeIn">
                    <div className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center shrink-0">✓</div>
                    <span>Message dispatched successfully! Expect a reply soon.</span>
                  </div>
                )}
                {loadingState === "error" && (
                  <div className="flex items-center gap-3 text-sm text-rose-400 bg-rose-400/10 border border-rose-400/20 rounded-2xl px-6 py-4 animate-fadeIn">
                    <div className="w-8 h-8 rounded-full bg-rose-400/20 flex items-center justify-center shrink-0">✕</div>
                    <span>System encountered an error. Please try again.</span>
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
