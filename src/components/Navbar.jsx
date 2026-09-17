import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useThemeStore from "../store/themeStore";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-black text-blue-600"
        >
          MediBook
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">

          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 font-medium transition"
          >
            Home
          </Link>

          <Link
            to="/doctors"
            className="text-gray-600 hover:text-blue-600 font-medium transition"
          >
            Doctors
          </Link>

          <Link
            to="/my-appointments"
            className="text-gray-600 hover:text-blue-600 font-medium transition"
          >
            My Appointments
          </Link>

          <Link
            to="/profile"
            className="text-gray-600 hover:text-blue-600 font-medium transition"
          >
            Profile
          </Link>

          <Link
            to="/ai-assistant"
            className="text-purple-600 hover:text-purple-700 font-semibold transition"
          >
            🤖 AI Assistant
          </Link>

          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 transition text-xl"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Book Now */}
        <Link
          to="/doctors"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition"
        >
          Book Now
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-3xl"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-5 flex flex-col gap-3">

            <Link
              to="/"
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Home
            </Link>

            <Link
              to="/doctors"
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Doctors
            </Link>

            <Link
              to="/my-appointments"
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              My Appointments
            </Link>

            <Link
              to="/profile"
              onClick={closeMenu}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Profile
            </Link>

            <Link
              to="/ai-assistant"
              onClick={closeMenu}
              className="text-purple-600 hover:text-purple-700 font-semibold py-2"
            >
              🤖 AI Assistant
            </Link>

            {/* Mobile Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>

            <Link
              to="/doctors"
              onClick={closeMenu}
              className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold transition mt-2"
            >
              Book Now
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;