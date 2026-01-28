import React from "react";
import './HomePage.css'
import { Link, useNavigate } from "react-router-dom";
import Family1 from "@/assets/Family1.jpg";
import Dang1 from "@/assets/Dang1.jpg";


function Homepage() {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate("/about");
  };

  return (
    <div className="bg-[#FFFAE2] min-h-screen p-8">
      <div className="relative mb-12">
        {/* Title */}
        <h1 className="relative z-20 mb-10 font-extrabold leading-tight massive-text">
          Hình ảnh của <br /> Đảng
        </h1>

        {/* Content row */}
        <div className="flex items-center gap-8">
          {/* Red part */}
          <div className="flex flex-col w-1/3 gap-4">
            <div className="px-4 py-3 font-semibold text-white bg-red-600 colored-text">
              Thể hiện về tinh thần vững nước của Đảng ta
            </div>
            <div className="px-4 py-3 font-semibold text-white bg-red-600 colored-text">
              Truyền tải tinh thần yêu nước cho giới trẻ
            </div>
          </div>

          {/* Gray rectangle (image) */}
          <div className="flex-1">
            <img className="rounded-md title-image" src={Dang1} alt="Hình ảnh của Đảng" />
          </div>
        </div>
      </div>

      {/* Thông tin giới thiệu */}
      <section className="mb-12 ">
        <h2 className="mb-4 text-4xl font-bold">
          Cổng thông tin về dân tộc và tôn giáo của Việt Nam
        </h2>
        <p className="mb-4 text-gray-700">
          Chào mừng mọi người đển với cổng thông tin về dân tộc và tôn giáo của Việt Nam dành cho người Việt Nam
        </p>
        {/* TODO: Bigger image height and smaller image width */}
        <div className="flex justify-center">
          <div className="h-[400px] w-2/3 bg-gray-300 rounded-md"></div>
        </div>
      </section>

      {/* More about us */}
      <section className="more-about-us">
        <h2 className="section-title">Về chúng tôi</h2>
        <p className="section-text">
          tại đây các bạn có thể đọc qua các tài liệu và
          tin tức mới nhất về dân tộc và tôn giáo của Việt Nam.
        </p>
        <ReadMoreButton onClick={handleReadMoreClick}>
          Nhấn vào đây để tìm hiểu thêm
        </ReadMoreButton>
      </section>

      {/* Bài viết nổi bật */}
      <section className="mb-20">
        <h2 className="mb-6 text-2xl font-bold">Các Bài viết nổi bật</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Big grey box first */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <Link to="/post">
              <img
                src={Family1}
                alt="Family"
                className="w-full rounded-md min-h-[332px] object-cover cursor-pointer hover:opacity-90 transition"
              />
            </Link>
            <p className="text-sm">Tại sao giới trẻ hiện nay</p>
          </div>

          {/* Smaller stacked boxes */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="h-40 bg-gray-300 rounded-md"></div>
              <p className="text-sm">Tại sao giới trẻ hiện nay</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-40 bg-gray-300 rounded-md"></div>
              <p className="text-sm">Tại sao giới trẻ hiện nay</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

const ReadMoreButton = ({ children, onClick }) => {
  return (
    <div className="read-more-container">
      <button onClick={onClick} className="read-more-button">
        <span>{children}</span>
        <span className="arrow">→</span>
      </button>
    </div>
  );
};


export default Homepage;
