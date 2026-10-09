import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Solutions",
      path: "/solutions",
    },
    {
      name: "Company",
      path: "/company",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <header
      className="fixed left-0 top-0 z-[9999] w-full text-white"
      style={{
        backgroundColor: scrolled ? "#000000" : "transparent",
        transition: "background-color 300ms ease",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Bhavya WebTech"
            className="h-15 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={
                link.name === "Contact Us"
                  ? "rounded-full bg-[#c9f31d] px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white"
                  : "text-sm font-medium text-white transition-colors duration-300 hover:text-[#c9f31d]"
              }
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#33362c] text-2xl text-[#c9f31d] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={
                  link.name === "Contact Us"
                    ? "mt-2 rounded-full bg-[#c9f31d] px-6 py-3 text-center font-semibold text-black"
                    : "rounded-lg px-4 py-3 text-white transition-colors hover:bg-white/10 hover:text-[#c9f31d]"
                }
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;