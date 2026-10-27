import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive
        ? "text-green-300"
        : "text-white hover:text-green-300"
    }`;

  return (
    <header>
      <nav className="bg-blue-900 py-4">
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Link
              to="/"
              className="text-white text-2xl font-bold no-underline"
            >
              Shemiring Restaurant
            </Link>
          </div>

          <ul className="list-none flex flex-wrap justify-center gap-6">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Menu" className={navLinkClass}>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={navLinkClass}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;