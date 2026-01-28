import { NavLink, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
export default function Navbar() {
  const navigate = useNavigate();
  return (
<header className="sticky top-0 z-40 shadow-sm bg-[#C62828] backdrop-blur">
      <nav className="flex items-center justify-between max-w-6xl px-4 py-6 mx-auto">
       <motion.div
  whileHover={{ scale: 1.08, rotate: 1 }}
  className="cursor-pointer select-none 
             px-4 py-2 
             text-lg md:text-xl font-extrabold tracking-wide 
             text-white 
             bg-gradient-to-r from-[#B71C1C] to-[#D32F2F] 
             rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.3)] 
             border border-[#FFD54F]/70 
             hover:shadow-[0_6px_15px_rgba(0,0,0,0.4)] 
             transition-all duration-300"
  onClick={() => {
    navigate("/");
    window.scrollTo(0, 0);
  }}
>
  <span className="bg-gradient-to-r from-[#FFD54F] to-[#FFF59D] bg-clip-text text-transparent drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]">
    MLN131
  </span>
  <span className="text-white"> - NHÓM 4</span>
</motion.div>

        <div className="flex gap-6 text-sm">
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
                `hover:text-white transition ${isActive ? "text-white font-semibold" : "text-indigo-300"
                } p-2 ${isActive ? "border-2 rounded-xl border-black-200" : ""}`
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
