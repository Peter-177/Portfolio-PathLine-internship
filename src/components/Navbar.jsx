import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 transform-gpu">
      <div className="glass-card mx-auto max-w-7xl px-8 h-20 flex items-center justify-between border-white/10">
        {/* Brand/Logo */}
        <div className="flex-1">
          <a href="/" className="text-2xl font-black tracking-tighter text-text group hover:opacity-80 transition-opacity">
            PB<span className="text-cta">.</span>
          </a>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-8 font-medium">
            <NavLinks />
          </ul>
        </div>

        {/* End Actions */}
        <div className="flex-1 flex justify-end items-center gap-4">
          {/* Mobile Menu Toggle */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} role="button" aria-label="Open Menu" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <FaBarsStaggered className="h-5 w-5 text-text" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[100] p-4 shadow-premium glass-card w-56 gap-2"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
