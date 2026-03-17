import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "projects", text: "projects" },
  { id: 4, url: "skills", text: "skills" },
  { id: 5, url: "contact", text: "contact" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id} className="list-none">
            <NavLink 
              to={url} 
              className={({ isActive }) => `
                capitalize text-sm font-black tracking-widest transition-all duration-300 px-3 py-2 rounded-lg
                ${isActive ? 'text-cta bg-cta/5' : 'text-text-dim hover:text-text hover:bg-white/5'}
              `}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
