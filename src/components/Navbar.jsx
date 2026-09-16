import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

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
        <div className="hidden md:flex items-center gap-8">
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
        </div>

        {/* Desktop Button */}
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
          <div className="px-6 py-5 flex flex-col gap-4">

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
              to="/doctors"
              onClick={closeMenu}
              className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold transition"
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