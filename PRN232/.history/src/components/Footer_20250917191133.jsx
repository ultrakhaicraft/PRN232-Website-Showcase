import React from "react";
import facebookLogo from "../assets/fb.png";
import twitterLogo from "../assets/x.png";
import instagramLogo from "../assets/ig.png";


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
  <ul className="space-y-2">
    <li className="flex items-center gap-2">
      <img src={facebookLogo} alt="Facebook" className="w-8 h-8" />
      <a href="#" className="hover:text-blue-400">Facebook</a>
    </li>
    <li className="flex items-center gap-2">
      <img src={twitterLogo} alt="Twitter" className="w-8 h-8" />
      <a href="#" className="hover:text-blue-400">Twitter</a>
    </li>
    <li className="flex items-center gap-2">
      <img src={instagramLogo} alt="Instagram" className="w-12 h-12" />
      <a href="#" className="hover:text-blue-400">Instagram</a>
    </li>
  </ul>
</div>


        {/* Cột 3 */}
        <div>
          <h2 className="mb-2 text-xl font-bold">Contact</h2>
          <p>FPTUniversity@gmail.com</p>
          <p>+84 39283999222</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
