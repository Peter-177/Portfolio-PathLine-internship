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
      className="group relative bg-surface border border-white/5 rounded-3xl p-6 
                 hover:border-cta/20 hover:-translate-y-2 hover:shadow-premium
                 transition-all duration-500 ease-out flex flex-col items-center gap-4 overflow-hidden"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${skill.color}15, transparent 80%)`,
        }}
      />

      {/* Icon Wrapper */}
      <div
        className="relative w-16 h-16 rounded-2xl flex items-center justify-center 
                    group-hover:scale-110 transition-transform duration-500 overflow-hidden"
        style={{ backgroundColor: `${skill.color}08` }}
      >
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Icon
          className="relative z-10 text-3xl transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
          style={{ color: skill.color }}
        />
      </div>

      <h3 className="relative text-center text-xs font-black uppercase tracking-[0.2em] text-text-dim group-hover:text-text transition-colors">
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

      <section className="min-h-screen pt-40 pb-20 px-8 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-cta/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="mb-20">
            <h2 className="text-sm font-black text-cta uppercase tracking-[0.3em] mb-4">Expertise</h2>
            <h1 className="text-7xl md:text-9xl font-black text-text tracking-tighter leading-none mb-4">
              SKILLS<span className="text-text-dim/20">.</span>
            </h1>
            <p className="text-text-dim text-lg max-w-lg font-medium">Equipped with a modern tech stack to build lightning-fast, premium digital solutions.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {topics.map((topic) => (
              <div key={topic.title} className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                   <h2 className="text-2xl font-black text-text uppercase tracking-widest leading-none">
                    {topic.title}
                  </h2>
                  <div className="flex-1 h-px bg-white/10" />
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4" role="list">
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
