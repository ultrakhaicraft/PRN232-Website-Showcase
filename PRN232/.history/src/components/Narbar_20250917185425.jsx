import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 text-white bg-[#454545] shadow-md z-50">
      {/* Logo */}
      <div className="text-3xl font-bold">
        <Link to="/">Chương 7: Vấn đề gia đình thời kì quá độ lên chủ nghĩa xã hội</Link>
      </div>

      {/* Menu */}
      <div className="flex justify-center gap-6 text-lg">
        <Link to="/" className="hover:text-blue-400">Trang chủ</Link>
        <Link to="/about" className="hover:text-blue-400">Về chúng tôi</Link>
        <Link to="/news" className="hover:text-blue-400">Tư liệu nổi bật</Link>
      </div>
    </nav>
  );
}

export default Navbar;
