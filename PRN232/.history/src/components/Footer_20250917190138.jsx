import React from "react";

function Footer() {
  return (
    <footer className="px-6 py-10 text-gray-200 bg-[#454545]">
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        
        {/* Cột 1 */}
        <div>
          <h2 className="mb-2 text-xl font-bold">Hình ảnh của Đăng</h2>
          <p>
            AAAAAAAAAAAAAAAA <br />
            AAAAAAAAAAAA
          </p>
        </div>

        {/* Cột 2 */}
        <div>
          <h2 className="mb-2 text-xl font-bold">Social</h2>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
            <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div>
          <h2 className="mb-2 text-xl font-bold">Contact</h2>
          <p>FPTUniversity@gmail.com</p>
          <p>+84 039283999222</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
