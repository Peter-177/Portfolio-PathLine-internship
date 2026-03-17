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
      img: "images/Memory.png",
    },
    {
      id: 2,
      title: "Todo-list",
      category: "Web",
      url: "https://peter-177.github.io/To-do-List/",
      img: "images/Todo.png",
    },
    {
      id: 3,
      title: "FAQs",
      category: "Web",
      url: "https://peter-177.github.io/FAQs-frontend-mentor/",
      img: "images/FAQs.png",
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
      
      <section ref={myRef} className="min-h-screen pt-40 pb-20 px-8 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-cta/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-sm font-black text-cta uppercase tracking-[0.3em] mb-4">Portfolio</h2>
            <h1 className="text-7xl md:text-9xl font-black text-text tracking-tighter leading-none mb-4">
              WORKS<span className="text-text-dim/20">.</span>
            </h1>
            <p className="text-text-dim text-lg max-w-md font-medium">A curated selection of digital experiments and professional projects.</p>
          </div>

          {/* Filtering - Tactile Chips */}
          <div className="bg-surface/30 backdrop-blur-md p-3 rounded-2xl border border-white/5 inline-flex items-center gap-2 mb-12 shadow-xl" role="group" aria-label="Project Categories">
            {tabList.map((category) => {
              const isActive = currentTab === category;
              return (
                <button
                  key={category}
                  onClick={() => setCurrentTab(category)}
                  aria-pressed={isActive}
                  className={`
                    projects-filter px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300
                    ${isActive 
                      ? "bg-cta text-white shadow-lg shadow-cta/20" 
                      : "text-text-dim hover:text-text hover:bg-white/5"}
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {myProjects.map((project) => (
              <div
                key={project.id}
                role="listitem"
                className="project-card group bg-surface border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cta/20 hover:shadow-premium transition-all duration-500 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-cta/20 opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700"
                  />
                  {/* Category Badge on Image */}
                  <div className="absolute top-6 right-6 z-20">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md bg-black/40 border border-white/10 ${colorList[project.category].split(' ').pop()}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-1 gap-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-black text-text tracking-tight mb-2 group-hover:text-cta transition-colors">
                      {project.title}
                    </h2>
                    <div className="h-1 w-12 bg-cta/20 rounded-full group-hover:w-20 group-hover:bg-cta transition-all duration-500"></div>
                  </div>

                  <div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} project`}
                      className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-text group-hover:text-cta transition-colors"
                    >
                      <span className="w-10 h-10 rounded-full bg-cta/10 flex items-center justify-center group-hover:bg-cta group-hover:text-white transition-all duration-300">
                        ↗
                      </span>
                      Explore Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
