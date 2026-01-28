import React from "react";
import './About.css';
import AboutUs1 from '@/assets/AboutUs1.jpg';
import AboutUs2 from '@/assets/AboutUs2.jpg';
import QuangKhai from '@/assets/QuangKhai.png';
import LamKhanh from '@/assets/LamKhanh.jpg';
import DucThanh from '@/assets/DucThanh.jpg';

function About() {
  return (
    <div className="about-us p-8 text-center">
      <h1 className="text-4xl font-bold text-black relative inline-block mt-14">
        Về chúng tôi
        {/* extra thin line below */}
        <span className="block w-3/4 mx-auto h-0.5 bg-black mt-2"></span>
      </h1>
      <p className="mt-6 text-xl font-thick">
        Đây là website cung cấp thông tin về vấn đề dân tộc và tôn giáo ở Việt Nam hiện nay.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center max-w-6xl mx-auto">
        <div className="showcase-image bg-gray-300">
          <img
            src={AboutUs1}
            alt="Project 1"
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
        <div className="showcase-image bg-gray-300">
          <img
            src={AboutUs2}
            alt="Project 2"
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-black relative inline-block mt-14">
        Mục đích của website
        <span className="block w-3/4 mx-auto h-0.5 bg-black mt-2"></span>
      </h1>
      <p className="mt-6 text-xl font-thick">
        Mục đích của website này là giúp người đọc có thể hiểu các vấn đề về dân tộc và tôn giáo trong thời kỳ
        quá độ lên Chủ Nghĩa Xã Hội ở Việt Nam một cách tốt nhất.
      </p>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-black relative inline-block mt-14">
        Các thành viên trong nhóm
        <span className="block w-3/4 mx-auto h-0.5 bg-black mt-2"></span>
        </h1>

              {/* Team grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
          <div className="flex flex-col items-center">
            <img src={LamKhanh} alt="Trần Lâm Khánh" className="w-28 h-28 rounded-full" />           
            <p className="mt-2 font-semibold">Trần Lâm Khánh</p>
            <p className="mt-2 font-light">Content Writer</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-gray-300 rounded-full"></div>
            <p className="mt-2 font-semibold">Trần Nguyễn Thu An </p>
            <p className="mt-2 font-light">Content Writer</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={DucThanh} alt="Trần Lâm Khánh" className="w-28 h-28 rounded-full" />  
            <p className="mt-2 font-semibold">Nguyễn Đức Thành</p>
            <p className="mt-2 font-light">Frontend</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-gray-300 rounded-full"></div>
            <p className="mt-2 font-semibold">Phạm Đình Ngân</p>
            <p className="mt-2 font-light">Content Writer</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={QuangKhai} alt="Phan Quang Khải" className="w-28 h-28 rounded-full" />
            <p className="mt-2 font-semibold">Phan Quang Khải</p>
            <p className="mt-2 font-light">Leader, Frontend</p>
          </div>
        </div>
      </div>

    </div>

    
  );
}

export default About;
