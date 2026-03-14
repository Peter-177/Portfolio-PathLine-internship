import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { Helmet } from "react-helmet-async";

const frontend = [
  { name: "HTML", icon: FaHtml5, color: "#E44D26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
];

const server = [
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
];

const tools = [
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
];

const topics = [
  { title: "Frontend", skills: frontend },
  { title: "Server-Side development", skills: server },
  { title: "Tools", skills: tools },
];

const Card = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <div
      role="listitem"
      className="group relative bg-base-200 border border-base-content/8 rounded-2xl p-4 
                 hover:border-base-content/20 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5 
                 transition-all duration-300 ease-out"
      style={{ animationDelay: `${index * 80}ms` }}
    >

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${skill.color}10, transparent 70%)`,
        }}
      />


      <div className="relative flex items-center justify-center mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center 
                      group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: `${skill.color}15` }}
        >
          <Icon
            className="text-2xl transition-all duration-300 group-hover:drop-shadow-lg"
            style={{ color: skill.color }}
          />
        </div>
      </div>


      <h3 className="relative text-center text-sm font-semibold text-base-content">
        {skill.name}
      </h3>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <div>
        <title>Skills | Peter Boshra</title>
        <meta name="description" content="Technical skills and technologies I use to build modern web applications, including React, Node.js, and Docker." />
      </div>
      <section className="min-h-170 flex items-center px-6 md:px-16 py-16">
        <div className="w-full">

          <div className="mb-14">
            <h2 className="skills-label text-sm font-mono text-primary uppercase tracking-widest mb-3">
              What I Work With
            </h2>
            <h1 id="skills-heading" className="skills-title text-5xl font-bold text-base-content mb-4">
              My Skills
            </h1>
          </div>


          <div className="flex flex-col gap-12">
            {topics.map((topic) => (
              <div key={topic.title}>
                <h2 className="text-xl font-semibold text-base-content mb-5 flex items-center gap-3">
                  {topic.title}
                  <span className="flex-1 h-px bg-base-content/10" />
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" role="list">
                  {topic.skills.map((skill, index) => (
                    <Card key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
