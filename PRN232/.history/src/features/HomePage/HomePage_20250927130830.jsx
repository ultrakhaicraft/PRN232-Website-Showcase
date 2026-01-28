import React from "react";
import './HomePage.css'
import { Link, useNavigate } from "react-router-dom";
import PostImage1 from "../assets/PostImage1.jpg";
import HinhAnhHCM from "../assets/HinhAnhHCM.png"


function Homepage() {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/about");

  };

  return (
    <div className="bg-[#FFFAE2] min-h-screen p-8">
      <div className="relative mb-12">
        {/* Title */}
        <h1 className="massive-text mb-10 font-extrabold leading-tight relative z-20">
          Hình ảnh của <br /> Đảng
        </h1>

        {/* Content row */}
        <div className="flex items-center gap-8">
          {/* Red part */}
          <div className="flex flex-col gap-4 w-1/3">
            <div className="colored-text px-4 py-3 font-semibold bg-red-600 text-white">
              Thể hiện về tinh thần vững nước của Đảng ta
            </div>
            <div className="colored-text px-4 py-3 font-semibold bg-red-600 text-white">
              Truyền tải tinh thần yêu nước cho giới trẻ
            </div>
          </div>

          {/* (image) */}
          <div className="flex-1">
            <img className="title-image rounded-md" src={HinhAnhHCM} alt="Hình ảnh của Đảng" />
          </div>
        </div>
      </div>

      {/* Thông tin giới thiệu */}
      <section className="mb-12 ">
        <h2 className="mb-4 text-5xl font-bold">
          Cổng thông tin về dân tộc và tôn giáo của Việt Nam
        </h2>
        <p className="mb-4 text-xl">
          Chào mừng mọi người đển với cổng thông tin về dân tộc và tôn giáo của Việt Nam dành cho người Việt Nam
        </p>
        {/* TODO: Bigger image height and smaller image width */}
        <div className="flex justify-center">
          <div className="h-[400px] w-2/3 bg-gray-300 rounded-md"></div>
        </div>
      </section>

      {/* More about us */}
      <section className="more-about-us">
        <h2 className="section-title mb-4 text-5xl font-bold">Về chúng tôi</h2>
        <p className="section-text text-xl">
          Trong website này các bạn có thể đọc qua các tài liệu và
          tin tức mới nhất về dân tộc và tôn giáo của Việt Nam.
        </p>
        <ReadMoreButton onClick={handleReadMoreClick}>
          Nhấn vào đây để tìm hiểu thêm
        </ReadMoreButton>
      </section>

      {/* Bài viết nổi bật */}
      <section className="mb-20">
        <h2 className="section-title">Các Bài viết nổi bật</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Big grey box first */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <Link to="/post">
              <img
                src={PostImage1}
                alt="Family"
                className="w-full rounded-md h-[600px] object-cover cursor-pointer hover:opacity-90 transition"
              />
            </Link>
            <p className="medium-text">Thủ tướng Phạm Minh Chinh chỉ đạo thúc đẩy mạnh phát triến tại các vùng dân tộc thiểu số</p>
          </div>

          {/* Smaller stacked boxes */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 mb-10">
              <Link to="/post">
                <img
                  src={PostImage1}
                  alt="Family"
                  className="w-full h-[220px] rounded-md object-cover cursor-pointer hover:opacity-90 transition"
                />
              </Link>
              <p className="medium-text">Tăng cường quản lí nhà nước về hoạt động trên không gian mạng Việt Nam hiện nay</p>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/post">
                <img
                  src={PostImage1}
                  alt="Family"
                  className="w-full  h-[220px] rounded-md object-cover cursor-pointer hover:opacity-90 transition"
                />
              </Link>
              <p className="medium-text">Tại sao giới trẻ hiện nay</p>
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
