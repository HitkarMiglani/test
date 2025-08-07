import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, isAuthenticated, logout } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experiences", path: "/experience" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-md py-3 md:py-4"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="w-7 h-7 bg-white rounded flex items-center justify-center">
          <svg className="w-4 h-4 fill-white" viewBox="0 0 27 27">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.70092 7.8607C8.04663e-08 9.14123 0 10.6859 0 13.7753V15.8288C0 21.0948 1.60933e-07 23.728 1.58162 25.3639C3.16325 27 5.70883 27 10.8 27H16.2C21.2911 27 23.8368 27 25.4183 25.3639C27 23.728 27 21.0948 27 15.8288V13.7753C27 10.6859 27 9.14123 26.2991 7.8607C25.5982 6.58018 24.3177 5.78544 21.7566 4.19596L19.0566 2.52027C16.3493 0.840091 14.9957 0 13.5 0C12.0043 0 10.6507 0.840091 7.94344 2.52027L5.24344 4.19598C2.68238 5.78544 1.40184 6.58018 0.70092 7.8607ZM10.0529 18.0866C9.6037 17.7536 8.96958 17.8478 8.63659 18.2971C8.30361 18.7464 8.39784 19.3805 8.84708 19.7134C10.1598 20.6865 11.7653 21.2625 13.5 21.2625C15.2347 21.2625 16.8402 20.6865 18.1529 19.7134C18.6022 19.3805 18.6964 18.7464 18.3634 18.2971C18.0305 17.8478 17.3964 17.7536 16.9471 18.0866C15.9637 18.8154 14.777 19.2375 13.5 19.2375C12.223 19.2375 11.0363 18.8154 10.0529 18.0866Z"
              fill="#272727"
            />
          </svg>
        </div>
        <span className="text-xl font-semibold text-white">QuickStay</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="text-white hover:text-white/80 transition-colors text-sm font-medium"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <Link
              to="/dashboard"
              className="text-white hover:text-white/80 transition-colors text-sm font-medium"
            >
              Dashboard
            </Link>
            <button
              onClick={logout}
              className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-6 w-6 cursor-pointer text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white flex flex-col md:hidden items-center justify-center gap-8 font-medium text-lg transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/20 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-yellow-300 transition-all duration-300 text-xl font-medium"
          >
            {link.name}
          </Link>
        ))}

        {isAuthenticated ? (
          <>
            <Link
              to="/dashboard"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-yellow-300 transition-all duration-300 text-xl font-medium"
            >
              Dashboard
            </Link>
            <button
              onClick={() => {
                logout();
                setIsMenuOpen(false);
              }}
              className="bg-white text-indigo-600 px-10 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="bg-white text-indigo-600 px-10 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
