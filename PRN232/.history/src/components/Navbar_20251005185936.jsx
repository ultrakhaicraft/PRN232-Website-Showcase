import { NavLink, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
export default function Navbar() {
  const navigate = useNavigate();
  return (
<header className="sticky top-0 z-40 shadow-sm bg-[#C62828] backdrop-blur">
      <nav className="flex items-center justify-between max-w-6xl px-4 py-6 mx-auto">
        <Motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-white"
          onClick={() => { navigate("/"), window.scrollTo(0, 0); }
          }
        >
          MLN131: CHƯƠNG 6
        </Motion.div>
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
