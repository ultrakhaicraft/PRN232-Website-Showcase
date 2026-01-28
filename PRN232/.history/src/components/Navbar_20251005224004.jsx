import { NavLink, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 shadow-md bg-gradient-to-r from-[#B71C1C] to-[#D32F2F] backdrop-blur-lg">
      <nav className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        
        {/* ======= LOGO ======= */}
        <Motion.div
          whileHover={{ scale: 1.08, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          className="cursor-pointer select-none px-5 py-2.5 
                     bg-gradient-to-r from-[#B71C1C] to-[#E53935]
                     border border-[#FFD54F]/70
                     rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.3)]
                     hover:shadow-[0_6px_15px_rgba(0,0,0,0.45)]
                     transition-all duration-300"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD54F] to-[#FFF59D] drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)] text-xl font-extrabold tracking-wide">
            MLN131
          </span>
          <span className="ml-1 font-semibold text-white">- NHÓM 4</span>
        </Motion.div>

        {/* ======= NAV LINKS ======= */}
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
                 ${isActive
                   ? "text-[#FFFDE7] font-semibold bg-[#8E0000]/50 shadow-inner"
                   : "text-[#FFD180] hover:text-white"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
