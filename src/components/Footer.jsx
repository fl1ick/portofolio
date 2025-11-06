const Footer = () => {
  return (
    <footer className="mt-32 py-6 px-6 md:px-10 bg-transparent">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portofolio</h1>

        <div className="flex gap-7 text-sm md:text-base">
          <a href="#beranda" className="hover:text-purple-400 transition-colors">Beranda</a>
          <a href="#tentang" className="hover:text-purple-400 transition-colors">Tentang</a>
          <a href="#proyek" className="hover:text-purple-400 transition-colors">Proyek</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-purple-400 transition-colors">
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            <i className="ri-linkedin-fill ri-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
