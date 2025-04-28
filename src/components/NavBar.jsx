import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false); // Close the menu after clicking a link
  };

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
    { path: "/news", name: "News" },
    { path: "/projects", name: "Projects" },
  ];

  return (
    <nav className="bg-gray-100 fixed top-0 left-0 w-full z-50 flex justify-between items-center h-18 px-6">
      <h1 className="text-3xl font-bold">Reform.</h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-4 justify-end">
          {navLinks.map(({ path, name }) => (
            <li key={path} className="px-2">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-blue-900 font-bold" : "hover:text-gray-200"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Donate Button */}
        <NavLink to="/donate" className="px-8 py-4 bg-black text-white font-bold">
          Donate
        </NavLink>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center space-x-4">
        <NavLink to="/donate" className="px-4 py-2 bg-black text-white text-sm font-medium">
          Donate
        </NavLink>

        <div onClick={handleNav} className="text-2xl cursor-pointer">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed left-0 top-0 w-3/5 h-full bg-blue-200 shadow-md transform ${
        nav ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:hidden z-20`}>
        <div className="p-6">
          <h1 className="text-3xl font-bold">Reform.</h1>
        </div>

        <ul className="space-y-4 uppercase pl-8">
          {navLinks.map(({ path, name }) => (
            <li key={path} className="p-2">
              <NavLink to={path} onClick={handleLinkClick} className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "hover:text-gray-200"
              }>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
