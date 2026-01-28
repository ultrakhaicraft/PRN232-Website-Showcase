import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import bgPattern from "@/assets/bg.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // ===== Theo dõi cuộn trang để thay đổi hiệu ứng =====
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 backdrop-blur-md border-b-[3px] border-[#FFD54F]/60 
        transition-all duration-500 shadow-lg bg-center bg-repeat`}
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: "400px", // lặp vân đẹp hơn
        backgroundPosition: "center",
        opacity: scrolled ? 1 : 0.8,
        backgroundColor: scrolled ? "rgba(183, 28, 28, 0.85)" : "rgba(183, 28, 28, 0.55)",
      }}
    >
      {/* ====== Thanh điều hướng ====== */}
      <nav className="relative flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        {/* ===== LOGO ===== */}
        <Motion.div
          whileHover={{ scale: 1.08, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          className="cursor-pointer select-none px-5 py-2.5 bg-[#B71C1C]/90 border border-[#FFD54F]/70
                     rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.3)]
                     hover:shadow-[0_6px_15px_rgba(0,0,0,0.45)]
                     transition-all duration-300"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD54F] to-[#FFF59D] 
                           drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)] text-xl font-extrabold tracking-wide">
            MLN131
          </span>
          <span className="ml-1 font-semibold text-white">- NHÓM 4</span>
        </Motion.div>

        {/* ===== NAV LINKS ===== */}
        <div className="flex gap-6 text-[15px] font-medium">
          {[
            { to: "/", label: "Trang chủ" },
            { to: "/show-all-posts", label: "Các Bài viết" },
            { to: "/about", label: "Về chúng tôi" },
            { to: "/ai-usage", label: "Sử dụng AI" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-all duration-200 px-3 py-1.5 rounded-lg 
                 ${
                   isActive
                     ? "text-[#FFFDE7] font-semibold bg-[#8E0000]/60 shadow-inner border border-[#FFD54F]/50"
                     : "text-[#FFECB3] hover:text-white hover:bg-[#7B0000]/50"
                 }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* ===== Overlay ánh sáng nhẹ ===== */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#B71C1C]/40 via-transparent to-[#FFD54F]/10"></div>
    </Motion.header>
  );
}
