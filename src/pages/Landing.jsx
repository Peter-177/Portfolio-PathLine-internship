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
      <section ref={myRef} className="h-170 flex items-center px-8">
        <div className="max-auto w-500 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="landing-title max-w-2xl text-6xl font-bold tracking-tight sm:text-7xl mb-6">
              Hi, I'm{" "}
              <span className="inline-block bg-primary text-primary-content px-5 py-2 rounded-3xl ml-1 leading-none shadow-lg shadow-primary/30">
                Peter
              </span>
            </h1>

            <h2 className="landing-subtitle text-2xl font-semibold mb-6 text-base-content/80">
              Frontend Developer
            </h2>

            <p className="landing-desc text-gray-500 text-base leading-relaxed mb-8 max-w-md">
              I'm 20 years old and I've been learning web development for a
              while. I'm using Tailwind and React to create simple projects that people can use.
            </p>
            <NavLink
              to={"/contact"}
              className="landing-btn capitalize btn btn-primary hover:bg-primary-700 hover:text-white text-sm font-medium px-6 py-3 rounded-lg"
            >
              contact me
            </NavLink>
          </div>
          <div className="flex-1 flex justify-end">
            <img src={webImage} alt="Web development illustration" className="landing-img w-100" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
