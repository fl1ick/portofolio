import { useState } from "react";
import Navbar from "./components/Navbar";
import DataImage from "./data";
import { listTools } from "./data";
import { listProyek } from "./data";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  // state untuk ganti tema
  const [isLight, setIsLight] = useState(false);

  // fungsi toggle
  const toggleTheme = () => setIsLight(!isLight);

  // definisi tema global
  const theme = isLight
    ? {
        bg: "bg-[#FFF8ED]",
        card: "bg-[#FFE8CC]",
        text: "text-[#3E2C1C]",
        accent: "bg-[#FFB347]",
        border: "border-[#E3C6A0]",
        hover: "hover:bg-[#FFD9A0]",
      }
    : {
        bg: "bg-zinc-900",
        card: "bg-zinc-800",
        text: "text-white",
        accent: "bg-violet-700",
        border: "border-zinc-600",
        hover: "hover:bg-violet-600",
      };

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

const [result, setResult] = useState("");
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
          {/* Navbar */}
          <Navbar isLight={isLight} toggleTheme={toggleTheme} />

          {/* Hero Section */}
          <div
            id="beranda"
            className="hero grid md:grid-cols-2 items-center pt-40 xl:gap-0 gap-6 grid-cols-1 px-6 sm:px-10"
          >
            <div className="animate__animated animate__fadeInUp animate__delay-3s">
              <div
                className={`flex items-center gap-3 mb-6 ${theme.card} ${theme.border} border w-fit p-4 rounded-2xl`}
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
              <h1 className={`text-5xl/tight font-bold mb-6 ${theme.text}`}>
                Hi, Saya Bagas Maulana
              </h1>
              <p className={`text-base/loose mb-6 opacity-70 ${theme.text}`}>
                Saya mempunyai ketertarikan dalam bidang Programming dan Designer,
                terutama pada pembuatan Website dan Desain seperti Poster, Pamflet
                serta Banner. Ketertarikan pada bidang ini sudah berlangsung lebih
                dari 2 tahun untuk semua bidang.
              </p>
              <div className="flex items-center sm:gap-4 gap-2">
                <a
                  href="/CV-Bagas.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.accent} p-4 rounded-2xl text-white ${theme.hover}`}
                >
                  Preview CV <i className="ri-eye-line ri-lg"></i>
                </a>
                <a
                  href="#proyek"
                  className={`${theme.card} p-4 rounded-2xl ${theme.text} ${theme.border} border ${theme.hover}`}
                >
                  Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
                </a>
              </div>
            </div>
            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="w-[500px] md:ml-80 ml-auto animate__animated animate__fadeInUp animate__delay-4s rounded-2xl border border-zinc-700"
              loading="lazy"
            />
          </div>

          {/* Tentang Section */}
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
                      <p>Proyek Selesai</p>
                    </h1>
                  </div>
                  <div className={`text-4xl mb-1 ${theme.text}`}>
                    <h1>
                      1 <span className="text-violet-500">+</span>
                      <p>Tahun Pengalaman</p>
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
                className={`xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-70 ${theme.text}`} data-aos="fade-up" data-aos-duration="200" data-aos-delay="300"
              >
                Berikut ini beberapa tools dan sofware yang saya kuasai
              </p>
              <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {listTools.map((tool) => (
                  <div
                    key={tool.id} data-aos="fade-up" data-aos-duration="2000" data-aos-delay={tool.dad}
                    className={`flex items-center gap-2 p-3 ${theme.border} border rounded-md ${theme.hover} group`}
                  >
                    <img
                      src={tool.gambar}
                      alt="Tools"
                      className="w-14 bg-opacity-20 p-1 group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                    <div>
                      <h4 className={`font-bold ${theme.text}`}>{tool.nama}</h4>
                      <p className={`opacity-70 ${theme.text}`}>{tool.ket}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Proyek Section */}
          <div className="proyek mt-16 py-10 px-6 sm:px-10" id="proyek">
            <h1 className={`text-center text-4xl font-bold mb-2 ${theme.text}`} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
              Proyek
            </h1>
            <p
              className={`text-base/loose text-center opacity-70 ${theme.text}`} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300"
            >
              Berikut ini beberapa proyek yang telah saya buat.
            </p>
            <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {listProyek.map((proyek) => (
                <div
                  key={proyek.id} data-aos="fade-up" data-aos-duration="2000" data-aos-delay={proyek.dad}
                  className={`p-4 ${theme.card} ${theme.border} border rounded-md`}
                >
                  <img src={proyek.gambar} alt="Proyek" loading="lazy" />
                  <div>
                    <h1 className={`text-2xl font-bold my-4 ${theme.text}`}>
                      {proyek.nama}
                    </h1>
                    <p className={`text-base/loose mb-4 ${theme.text}`}>
                      {proyek.desk}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proyek.tools.map((tool, index) => (
                        <p
                          className={`py-1 px-3 ${theme.border} border rounded-md font-semibold ${theme.text}`}
                          key={index}
                        >
                          {tool}
                        </p>
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                    <button
                      onClick={() => {
                        setPreviewUrl(proyek.link); // pastikan ada link di data
                        setShowModal(true);
                      }}
                      className={`${theme.accent} p-3 rounded-lg block w-full text-white ${theme.hover}`}
                    >
                      Lihat Website
                    </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
    <div className="bg-white w-full max-w-5xl rounded-xl overflow-hidden relative">

      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="font-bold text-lg">Preview Website</h2>
        <button
          onClick={() => setShowModal(true)}
          className="text-xl font-bold hover:text-red-500"
        >
           Kembali ✕
        </button>
      </div>

      {/* Content */}
      <div className="h-[70vh]">
        <iframe
          src={previewUrl}
          title="Preview Website"
          className="w-full h-full"
        />
      </div>

    </div>
  </div>
)}


          {/* Kontak Section */}
          <div className="kontak mt-16 sm:p-10 p-0" id="kontak">
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
          className={`${theme.card} ${theme.border} border p-10 w-full max-w-xl mx-auto rounded-md`}
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className={`font-semibold ${theme.text}`}>Nama Lengkap</label>
              <input
                type="text"
                name="name"
                placeholder="Masukan Nama..."z
                className={`${theme.border} border p-2 rounded-md`}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className={`font-semibold ${theme.text}`}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukan Email..."
                className={`${theme.border} border p-2 rounded-md`}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className={`font-semibold ${theme.text}`}>Pesan</label>
              <textarea
                name="message"
                rows="7"
                placeholder="Pesan"
                className={`${theme.border} border p-2 rounded-md`}
                required
              ></textarea>
            </div>

            {result && (
              <p className="text-center font-semibold text-green-500">{result}</p>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`${theme.accent} p-3 rounded-lg w-full cursor-pointer text-white ${theme.hover}`}
              >
                {loading ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </div>
          </div>
        </form>
        </div>
        </div>
      );
}

export default App;
