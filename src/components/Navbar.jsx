import { useState, useEffect } from "react";

const Navbar = ({ isLight, toggleTheme }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // tema navbar sinkron dengan App.jsx
  const theme = isLight
    ? {
        bg: active ? "bg-[#FFE8CC]/80 backdrop-blur-md shadow-md" : "bg-transparent",
        text: "text-[#3E2C1C]",
        accent: "bg-[#FFB347] hover:bg-[#FFD9A0] text-white",
      }
    : {
        bg: active ? "bg-zinc-900/80 backdrop-blur-md shadow-md" : "bg-transparent",
        text: "text-white",
        accent: "bg-violet-700 hover:bg-violet-600 text-white",
      };

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 ${theme.bg}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="logo">
          <h1 className={`text-2xl font-bold ${theme.text}`}>Portofolio</h1>
        </div>

        {/* Menu */}
        <ul className="flex items-center sm:gap-10 gap-5">
          <li>
            <a href="#beranda" className={`${theme.text} hover:opacity-70 font-medium`}>
              Beranda
            </a>
          </li>
          <li>
            <a href="#tentang" className={`${theme.text} hover:opacity-70 font-medium`}>
              Tentang
            </a>
          </li>
          <li>
            <a href="#proyek" className={`${theme.text} hover:opacity-70 font-medium`}>
              Proyek
            </a>
          </li>
          <li>
            <a href="#kontak" className={`${theme.text} hover:opacity-70 font-medium`}>
              Kontak
            </a>
          </li>
        </ul>

        {/* Tombol Toggle Tema */}
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
