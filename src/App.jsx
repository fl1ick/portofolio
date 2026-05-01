import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import DataImage from "./data";
import { listTools } from "./data";
import { listProyek } from "./data";
import UnicornScene from "unicornstudio-react";

export const lightTheme = {
  bg: "#FFF8ED",
  card: "#FFE8CC",
  border: "#E3C6A0",
  accent: "#FFB347",
  text: "#3E2C1C",
};

export const darkTheme = {
  bg: "#111113",
  card: "#1C1C1F",
  border: "#2E2E33",
  accent: "#6D28D9",
  text: "#FFFFFF",
};

// ── Typing Animation Hook ──────────────────────────────────────────
function useTypingEffect(
  words,
  typingSpeed = 110,
  deletingSpeed = 60,
  pause = 1800,
) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;
    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayed(
            isDeleting
              ? current.slice(0, displayed.length - 1)
              : current.slice(0, displayed.length + 1),
          );
        },
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [
    displayed,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  return displayed;
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isLight, setIsLight] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const toggleTheme = () => setIsLight((v) => !v);
  const colors = isLight ? lightTheme : darkTheme;

  const theme = isLight
    ? {
        bg: "bg-[#FFF8ED]",
        card: "bg-[#FFE8CC]",
        text: "text-[#3E2C1C]",
        accent: "bg-[#FFB347]",
        border: "border-[#E3C6A0]",
        hover: "hover:bg-[#FFD9A0]",
        input: "bg-[#FFF8ED] text-[#3E2C1C] placeholder-[#A0856A]",
        accentColor: "#FFB347",
      }
    : {
        bg: "bg-[#111113]",
        card: "bg-[#1C1C1F]",
        text: "text-white",
        accent: "bg-violet-700",
        border: "border-[#2E2E33]",
        hover: "hover:bg-violet-600",
        input: "bg-[#111113] text-white placeholder-zinc-500",
        accentColor: "#8B5CF6",
      };

  const typedText = useTypingEffect([
    "Bagas Maulana",
    "Full Stack Dev",
    "UI/UX Designer",
  ]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Mengirim...");
    const formData = new FormData(event.target);
    formData.append("access_key", "644250bf-556f-479b-b9b7-5ac85a88a164");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setLoading(false);
      setResult("Pesan berhasil terkirim!");
      event.target.reset();
    } else {
      setLoading(false);
      setResult("Terjadi kesalahan, coba lagi.");
    }
  };

  return (
    <div
      className={`${theme.bg} min-h-screen transition-all duration-700 ease-in-out`}
    >
      <Navbar isLight={isLight} toggleTheme={toggleTheme} />

      {/* ── HERO SECTION ── */}
      <section
        id="beranda"
        className="relative min-h-screen px-4 sm:px-10 overflow-hidden"
      >
        {/*
          UnicornScene: lebar 900px, geser ke kanan melewati edge layar (-mr)
          sehingga gambar tidak terpotong dan gradient kanan menutup sempurna
        */}
        <div
          className="absolute top-0 right-0 z-10 pointer-events-none"
          style={{ width: "900px", height: "900px", marginRight: "100px" }}
        >
          <UnicornScene
            projectId="JFLwWuSJyMN5OO9EgP4U"
            width="900px"
            height="900px"
            scale={1}
            dpi={1.5}
            sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.11/dist/unicornStudio.umd.js"
          />

          {/* Gradient kiri — fade ke konten */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${colors.bg} 0%, ${colors.bg}EE 8%, ${colors.bg}99 20%, transparent 50%)`,
            }}
          />
          {/* Gradient kanan — tutup overflow sisi kanan */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${colors.bg} 0%, ${colors.bg} 12%, transparent 35%)`,
            }}
          />
          {/* Gradient atas */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, ${colors.bg} 0%, transparent 15%)`,
            }}
          />
          {/* Gradient bawah */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to top, ${colors.bg} 0%, transparent 25%)`,
            }}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 pt-52 sm:pt-40">
          <div className="animate__animated animate__fadeInUp animate__delay-3s text-center md:text-left">
            {/* Quote card */}
            <div
              className={`flex items-center justify-center md:justify-start gap-3 mb-6 ${theme.card} ${theme.border} border w-fit mx-auto md:mx-0 p-4 rounded-2xl`}
            >
              <img
                src={DataImage.HeroImage}
                alt="Hero"
                className="w-10 rounded-md"
              />
              <q className={`${theme.text}`}>
                kode yang indah, Lahir dari ketekunan.😁
              </q>
            </div>

            {/* Heading + Typing */}
            <h1 className={`text-3xl sm:text-5xl font-bold mb-6 ${theme.text}`}>
              Hi, Saya{" "}
              <span
                className="inline-block whitespace-nowrap"
                style={{ color: theme.accentColor }}
              >
                {typedText}
                <span
                  className="inline-block w-[3px] h-[0.85em] ml-[2px] align-middle rounded-sm"
                  style={{
                    background: theme.accentColor,
                    animation: "blink 0.8s step-end infinite",
                  }}
                />
              </span>
            </h1>

            <p className={`text-sm sm:text-base mb-6 opacity-70 ${theme.text}`}>
              Saya mempunyai ketertarikan dalam bidang Programming dan Designer,
              terutama pada pembuatan Website dan Desain seperti Poster, Pamflet
              serta Banner. Ketertarikan pada bidang ini sudah berlangsung lebih
              dari 2 tahun untuk semua bidang.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <a
                href="/CV-Bagas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme.accent} w-full sm:w-auto text-center p-4 rounded-2xl text-white ${theme.hover} transition-colors duration-300`}
              >
                Preview CV <i className="ri-eye-line ri-lg"></i>
              </a>
              <a
                href="#proyek"
                className={`${theme.card} w-full sm:w-auto text-center p-4 rounded-2xl ${theme.text} ${theme.border} border ${theme.hover} transition-colors duration-300`}
              >
                Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TENTANG ── */}
      <div className="tentang mt-16 py-10 px-6 sm:px-10" id="tentang">
        <div
          className={`${theme.card} ${theme.border} border xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 rounded-lg`}
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className={`text-base/loose mb-10 ${theme.text}`}>
            Hi, perkenalkan saya Bagas Maulana, seorang Full Stack Web Developer
            dan Designer untuk UI/UX Design maupun Product Digital. Saya percaya
            bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga
            setiap proyek yang saya kembangkan tidak hanya terlihat menarik
            tetapi juga memberikan pengalaman pengguna yang optimal.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center justify-between gap-6">
              <div>
                <h1 className={`text-4xl mb-1 ${theme.text}`}>
                  10 <span className="text-violet-500">+</span>
                  <p className="text-base font-normal">Proyek Selesai</p>
                </h1>
              </div>
              <div className={`text-4xl mb-1 ${theme.text}`}>
                <h1>
                  1 <span className="text-violet-500">+</span>
                  <p className="text-base font-normal">Tahun Pengalaman</p>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="tools mt-16">
          <h1 className={`text-4xl/snug font-bold mb-4 ${theme.text}`}>
            Tools yang dipakai
          </h1>
          <p
            className={`xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-70 ${theme.text}`}
            data-aos="fade-up"
            data-aos-duration="200"
            data-aos-delay="300"
          >
            Berikut ini beberapa tools dan sofware yang saya kuasai
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay={tool.dad}
                className={`flex items-center gap-2 p-3 ${theme.card} ${theme.border} border rounded-md ${theme.hover} group transition-colors duration-300`}
              >
                <img
                  src={tool.gambar}
                  alt="Tools"
                  className="w-14 p-1 group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
                <div>
                  <h4 className={`font-bold ${theme.text}`}>{tool.nama}</h4>
                  <p className={`opacity-70 text-sm ${theme.text}`}>
                    {tool.ket}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROYEK ── */}
      <div className="proyek mt-16 py-10 px-6 sm:px-10" id="proyek">
        <h1
          className={`text-center text-4xl font-bold mb-2 ${theme.text}`}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          Proyek
        </h1>
        <p
          className={`text-base/loose text-center opacity-70 ${theme.text}`}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          Berikut ini beberapa proyek yang telah saya buat.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay={proyek.dad}
              className={`p-4 ${theme.card} ${theme.border} border rounded-md`}
            >
              <img
                src={proyek.gambar}
                alt="Proyek"
                loading="lazy"
                className="w-full rounded-md"
              />
              <div>
                <h1 className={`text-2xl font-bold my-4 ${theme.text}`}>
                  {proyek.nama}
                </h1>
                <p className={`text-base/loose mb-4 opacity-80 ${theme.text}`}>
                  {proyek.desk}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className={`py-1 px-3 ${theme.border} border rounded-md font-semibold text-sm ${theme.text}`}
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <button
                    onClick={() => {
                      setPreviewUrl(proyek.link);
                      setShowModal(true);
                    }}
                    className={`${theme.accent} p-3 rounded-lg block w-full text-white ${theme.hover} transition-colors duration-300`}
                  >
                    Lihat Website
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div
            className="w-full max-w-5xl rounded-xl overflow-hidden relative"
            style={{
              background: colors.card,
              border: `1px solid ${colors.border}`,
            }}
          >
            <div
              className="flex justify-between items-center p-4 border-b"
              style={{ borderColor: colors.border }}
            >
              <h2 className="font-bold text-lg" style={{ color: colors.text }}>
                Preview Website
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-xl font-bold text-yellow-500 hover:text-red-500"
              >
                Kembali ✕
              </button>
            </div>
            <div
              className="p-4 border-b text-sm"
              style={{
                borderColor: colors.border,
                background: isLight ? "#FFF3CD" : "#1C1A00",
              }}
            >
              <p className="font-semibold text-yellow-600">Demo Login:</p>
              <p style={{ color: colors.text }}>Email: demo@gmail.com</p>
              <p style={{ color: colors.text }}>Password: 123456</p>
            </div>
            <iframe
              src={previewUrl}
              className="w-full h-[500px]"
              title="Preview Website"
            ></iframe>
          </div>
        </div>
      )}

      {/* ── KONTAK ── */}
      <div className="kontak mt-16 sm:p-10 p-6" id="kontak">
        <h1 className={`text-4xl mb-2 font-bold text-center ${theme.text}`}>
          Kontak
        </h1>
        <p
          className={`text-base/loose text-center mb-10 opacity-70 ${theme.text}`}
        >
          Silakan bisa menghubungi saya lewat form di bawah ini.
        </p>
        <form
          onSubmit={handleSubmit}
          className={`${theme.card} ${theme.border} border p-8 sm:p-10 w-full max-w-xl mx-auto rounded-md`}
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className={`font-semibold ${theme.text}`}>
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                placeholder="Masukan Nama..."
                className={`${theme.border} ${theme.input} border p-2 rounded-md outline-none focus:ring-2 focus:ring-violet-500 transition`}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={`font-semibold ${theme.text}`}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukan Email..."
                className={`${theme.border} ${theme.input} border p-2 rounded-md outline-none focus:ring-2 focus:ring-violet-500 transition`}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={`font-semibold ${theme.text}`}>Pesan</label>
              <textarea
                name="message"
                rows="7"
                placeholder="Pesan"
                className={`${theme.border} ${theme.input} border p-2 rounded-md outline-none focus:ring-2 focus:ring-violet-500 transition`}
                required
              ></textarea>
            </div>
            {result && (
              <p className="text-center font-semibold text-green-500">
                {result}
              </p>
            )}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`${theme.accent} p-3 rounded-lg w-full cursor-pointer text-white ${theme.hover} transition-colors duration-300`}
              >
                {loading ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </div>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default App;
