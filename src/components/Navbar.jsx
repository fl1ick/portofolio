import { useState, useEffect } from "react";

const Navbar = ({ isLight, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const theme = isLight
    ? {
        bg: scrolled
          ? "bg-[#FFE8CC]/80 backdrop-blur-md shadow-sm"
          : "bg-transparent",
        text: "text-[#3E2C1C]",
        accent: "bg-[#FFB347] hover:bg-[#FFD9A0] text-white",
        border: "border-[#E3C6A0]",
      }
    : {
        bg: scrolled
          ? "bg-[#111113]/80 backdrop-blur-md shadow-sm"
          : "bg-transparent",
        text: "text-white",
        accent: "bg-violet-700 hover:bg-violet-600 text-white",
        border: "border-[#2E2E33]",
      };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${theme.bg}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className={`text-2xl font-bold ${theme.text}`}>Portofolio</h1>

        {/* Menu */}
        <ul className="hidden sm:flex items-center gap-8">
          {["beranda", "tentang", "proyek", "kontak"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`${theme.text} hover:opacity-60 font-medium capitalize transition-opacity duration-200`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle Tema */}
        <button
          onClick={toggleTheme}
          className={`${theme.accent} px-4 py-2 rounded-xl font-semibold transition-all duration-300`}
        >
          {isLight ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
