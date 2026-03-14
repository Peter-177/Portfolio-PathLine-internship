import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const colorList = {
  Games: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  Web: "bg-sky-500/10 text-sky-400 border-sky-500/20",
};

const tabList = ["All", "Games", "Web"];

const Projects = () => {
  const [currentTab, setCurrentTab] = useState("All");
  const myRef = useRef(null);

  const allProjects = [
    {
      id: 1,
      title: "MemoryGame",
      category: "Games",
      url: "https://peter-177.github.io/Memory-Game/",
      img: `${import.meta.env.BASE_URL}images/Memory.png`.replace(/\/+/g, '/'),
    },
    {
      id: 2,
      title: "Todo-list",
      category: "Web",
      url: "https://peter-177.github.io/To-do-List/",
      img: `${import.meta.env.BASE_URL}images/Todo.png`.replace(/\/+/g, '/'),
    },
    {
      id: 3,
      title: "FAQs",
      category: "Web",
      url: "https://peter-177.github.io/FAQs-frontend-mentor/",
      img: `${import.meta.env.BASE_URL}images/FAQs.png`.replace(/\/+/g, '/'),
    },
  ];

  const myProjects = currentTab === "All"
    ? allProjects
    : allProjects.filter((p) => p.category === currentTab);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      gsap.fromTo(
        ".projects-filter",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }, myRef);
    return () => gsapContext.revert();
  }, []);

  return (
    <>
      <div>
        <title>Projects | Peter Boshra</title>
        <meta name="description" content="Explore my portfolio of web development projects, including games and web applications built with React and JavaScript." />
      </div>
      <section ref={myRef} className="min-h-170 bg-base-100 px-6 md:px-16 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-base-content mb-4">
            My Projects
          </h1>
          <div className="w-10 border border-b-primary" />
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-10" role="group" aria-label="Project Categories">
          {tabList.map((category) => (
            <button
              key={category}
              onClick={() => setCurrentTab(category)}
              aria-pressed={currentTab === category}
              className={
                currentTab === category
                  ? "projects-filter px-5 py-2 rounded-full text-sm font-semibold bg-primary text-primary-content shadow-lg shadow-primary/30"
                  : "projects-filter px-4 py-1.5 rounded-full text-sm font-medium border text-base-content/60 border-base-content/15 hover:text-base-content hover:border-base-content/30"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
          {myProjects.map((project) => (
            <div
              key={project.id}
              role="listitem"
              className="project-card group bg-base-200 rounded-2xl border border-base-content/8 hover:bg-base-300 transition-all duration-300 p-7 flex flex-col gap-5 w-full"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border ${colorList[project.category]}`}
                >
                  {project.category}
                </span>
              </div>

              <div className="w-full h-45 rounded-xl overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  width="400"
                  height="200"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-base-content transition-colors mb-2">
                  {project.title}
                </h2>
              </div>

              <div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} project`}
                  className="btn btn-soft btn-primary inline-flex items-center gap-1.5 text-xs font-medium group-hover:translate-x-1 transition-all"
                >
                  View project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
