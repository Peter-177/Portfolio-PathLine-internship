import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import img from "../assets/undraw_fixing-bugs_1ytu.svg";

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
      <section ref={myRef} className="min-h-170 flex items-center px-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1">
            <img
              src={img}
              alt="Bug fixing illustration"
              className="about-img w-100"
            />
          </div>

          <div className="flex-1">
            <h1 className="about-title text-6xl font-black leading-tight mb-6">
              About me
            </h1>

            <p className="about-text text-base-content/60 text-base leading-relaxed mb-4 max-w-md">
              Now I'm focused on learning Frontend, and in the future I plan to learn Backend to
              make my sites even better.
            </p>

            <p className="about-text text-base-content/60 text-base leading-relaxed mb-8 max-w-md">
              I've already made some small projects like a Todo-list and an FAQ
              page to practice my skills. I try to keep my designs clean and
              easy to use. Even though I'm still learning.
            </p>

            <NavLink to="/projects" className="about-btn btn btn-primary">
              View My Work
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
