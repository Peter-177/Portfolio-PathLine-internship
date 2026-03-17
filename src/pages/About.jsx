import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import img from "../assets/undraw_profile_d7qw.svg";

const About = () => {
  const myRef = useRef(null);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      const myAnimation = gsap.timeline({ defaults: { ease: "power3.out" } });

      myAnimation
        .from(".about-img", { x: -50, opacity: 0, duration: 0.8 })
        .from(".about-title", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(
          ".about-text",
          { y: 25, opacity: 0, duration: 0.5, stagger: 0.15 },
          "-=0.3",
        )
        .from(".about-btn", { y: 20, opacity: 0, duration: 0.5 }, "-=0.2");
    }, myRef);

    return () => gsapContext.revert();
  }, []);

  return (
    <>
      <div>
        <title>About | Peter Boshra</title>
        <meta
          name="description"
          content="Learn more about Peter Boshra, a passionate Frontend Developer specializing in React and modern web technologies."
        />
      </div>

      <section ref={myRef} className="relative min-h-[80vh] flex items-center py-20 px-8 overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cta/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="about-label text-sm font-black text-cta uppercase tracking-[0.3em] mb-4">Discovery</h2>
            <h1 className="about-title text-6xl md:text-8xl font-black leading-[0.9] mb-10 text-text">
              BEYOND THE<br />
              <span className="text-text-dim/40 italic">PIXELS.</span>
            </h1>

            <div className="space-y-6 max-w-xl">
              <p className="about-text text-lg text-text font-medium leading-relaxed">
                I'm a 20-year-old creator dedicated to building digital experiences that marry 
                <span className="text-cta font-black"> technical precision</span> with 
                <span className="text-cta font-black"> artistic soul.</span>
              </p>

              <p className="about-text text-text-dim text-base leading-relaxed">
                Currently specializing in high-performance frontend engineering, my journey is driven 
                by a relentless curiosity for clean code and intuitive user interfaces. I believe 
                every project is an opportunity to solve complex problems through simple, elegant design.
              </p>

              <p className="about-text text-text-dim text-base leading-relaxed">
                From interactive games to robust web applications, my work reflects a commitment to 
                responsiveness, speed, and uncompromising quality. The future for me is about bridging 
                the gap between frontend aesthetics and backend logic.
              </p>
            </div>

            <div className="about-btn mt-12 flex items-center gap-6">
              <NavLink to="/projects" className="btn-premium-primary">
                View My Portfolio
              </NavLink>
              <div className="h-px w-20 bg-border hidden sm:block"></div>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="about-img relative group">
              <div className="absolute -inset-4 bg-cta/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img
                src={img}
                alt="Profile illustration"
                className="relative z-10 w-full max-w-md grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
