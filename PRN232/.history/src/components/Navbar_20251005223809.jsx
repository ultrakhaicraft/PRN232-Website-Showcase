<header
  className="sticky top-0 z-40 bg-center bg-cover shadow-md backdrop-blur"
  style={{
    backgroundImage: "url('/src/assets/bg.png')",
  }}
>
  <nav className="flex items-center justify-between max-w-6xl px-4 py-6 mx-auto">
    <div
      onClick={() => {
        navigate("/");
        window.scrollTo(0, 0);
      }}
      className="px-4 py-2 text-xl font-extrabold text-white bg-[#C62828]/90 rounded-xl border border-yellow-400 shadow-lg cursor-pointer hover:scale-105 transition"
    >
      MLN131 - NHÓM 4
    </div>

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
            `px-3 py-2 rounded-md transition-all ${
              isActive
                ? "bg-gradient-to-r from-[#FBC02D] to-[#E53935] text-white shadow-md"
                : "text-yellow-100 hover:text-white hover:bg-[#B71C1C]/60"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  </nav>
</header>
