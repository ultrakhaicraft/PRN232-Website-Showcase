import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 text-white bg-[#454545]">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">Chương 7</Link>
      </div>

      {/* Menu */}
      <div className="flex justify-center gap-6 text-lg">
        <Link to="/" className="hover:text-blue-400">Trang chủ</Link>
        <Link to="/about" className="hover:text-blue-400">Về chúng tôi</Link>
        <Link to="/news" className="hover:text-blue-400">News</Link>
      </div>
    </nav>
  );
}

export default Navbar;
