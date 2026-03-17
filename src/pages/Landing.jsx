import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

import gsap from "gsap";
import webImage from "../assets/undraw_website_27ju.svg";

const Landing = () => {
  const myRef = useRef(null);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      const myAnimation = gsap.timeline({ defaults: { ease: "power3.out" } });

      myAnimation.from(".landing-title", { y: 40, opacity: 0, duration: 0.8 })
        .from(".landing-subtitle", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".landing-desc", { y: 25, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".landing-btn", { y: 20, opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".landing-img", { x: 60, opacity: 0, duration: 0.8 }, "-=0.6");
    }, myRef);

    return () => gsapContext.revert();
  }, []);

  const SeoData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Peter Boshra",
    "jobTitle": "Frontend Developer",
    "url": "https://peterboshra.dev/",
    "sameAs": [
      "https://github.com/peter-177",
      "https://www.linkedin.com/in/peter-boshra-2332783a0/"
    ]
  };

  return (
    <>
      <div>
        <title>Peter Boshra | Frontend Developer Portfolio</title>
        <meta name="description" content="Welcome to the portfolio of Peter Boshra. I create beautiful, functional, and user-centered digital experiences." />
        <script type="application/ld+json">
          {JSON.stringify(SeoData)}
        </script>
      </div>

      <section ref={myRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-8">
        {/* Background Blobs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cta/20 rounded-full blur-[120px] animate-blob pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] animate-blob [animation-delay:2s] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-4 flex-wrap">
          <div className="flex-1 text-center md:text-left">
            <h1 className="landing-title text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8 text-text">
              CREATIVE<br />
              <span className="text-cta">DEVELOPER</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
              <h2 className="landing-subtitle text-xl md:text-2xl font-black text-text-dim border-l-4 border-cta pl-4 leading-tight">
                Hi, I'm Peter.<br />
                <span className="text-text">Frontend Expert.</span>
              </h2>
              
              <p className="landing-desc text-text-dim/80 text-lg leading-relaxed max-w-sm">
                Crafting high-performance digital experiences with a focus on premium aesthetics and user-centric design.
              </p>
            </div>

            <div className="landing-btn flex flex-wrap justify-center md:justify-start gap-4">
              <NavLink
                to="/projects"
                className="btn-premium-primary"
              >
                Explore Projects
              </NavLink>
              <NavLink
                to="/contact"
                className="btn-premium-secondary"
              >
                Get in Touch
              </NavLink>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="landing-img relative group">
              <div className="absolute inset-0 bg-cta/10 blur-3xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-700"></div>
              <img 
                src={webImage} 
                alt="Web development illustration" 
                className="relative z-10 w-full max-w-md drop-shadow-2xl brightness-90 contrast-125 hover:brightness-100 transition-all duration-500" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
