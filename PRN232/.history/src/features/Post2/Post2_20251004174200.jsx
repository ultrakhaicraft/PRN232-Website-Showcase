import React from "react";
import PostParagraph from "@/components/PostParagraph";

// Import ảnh bạn đã upload (bạn đặt file trong /public/assets hoặc /src/assets)
import ImgKeyboard from "/assets/post2/keyboard.png";
import ImgLawBook from "/assets/post2/lawbook.png";
import ImgPrayer from "/assets/post2/prayer.png";
import ImgLeaders from "/assets/post2/leaders.png";
// import ImgConstitution from "/assets/post2/constitution.png";

const Post2 = () => {
  return (
    <div className="min-h-screen bg-[#FAF7E6]">
      <div className="max-w-5xl mx-auto px-6 py-8 bg-[#FAF7E6]">
        {/* Header */}
        <header className="mb-6">
          <p className="pb-1 text-sm text-gray-600 border-b border-gray-300">
            Thứ Sáu, 26/09/2025 | 22:30
          </p>
        </header>

        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold text-center">
          Tăng cường quản lí nhà nước về hoạt động tôn giáo trên không gian mạng Việt Nam hiện nay
        </h1>

        {/* First Paragraph */}
        <PostParagraph
          text="Không gian mạng ngày nay đã trở thành một môi trường có vai trò quan trọng trong đời sống văn hóa - xã hội, trong đó bao gồm các hoạt động tôn giáo..."
          className="mb-4 font-semibold"
        />

        {/* First Image */}
        <div className="my-6">
          <img src={ImgKeyboard} alt="Không gian mạng và tôn giáo" className="w-full rounded-lg shadow" />
          <p className="mt-2 text-sm text-center text-gray-700">
            “Không gian mạng không thể là một lĩnh vực không có luật pháp”
          </p>
        </div>

        <PostParagraph
          text="Một là, xây dựng chính sách và hệ thống pháp luật trong quản lý tôn giáo."
          className="mb-6"
        />

        {/* Second Image */}
        <div className="my-6">
          <img src={ImgLawBook} alt="Luật Tín ngưỡng, Tôn giáo" className="w-full rounded-lg shadow" />
          <p className="mt-2 text-sm text-center text-gray-700">Luật Tín ngưỡng, Tôn giáo</p>
        </div>

        <PostParagraph
          text="Hai là, kiện toàn bộ máy tổ chức quản lý và bảo đảm an ninh mạng..."
          className="mb-6"
        />

        {/* Third Image */}
        <div className="my-6">
          <img src={ImgPrayer} alt="Hoạt động tôn giáo vi phạm" className="w-full rounded-lg shadow" />
          <p className="mt-2 text-sm text-center text-gray-700">
            Một số hiện tượng tôn giáo vi phạm bị xử lý
          </p>
        </div>

        <PostParagraph
          text="Tóm lại, giải pháp tăng cường quản lý nhà nước..."
          className="mb-6"
        />

        {/* Fourth Image */}
        <div className="my-6">
          <img src={ImgLeaders} alt="Lãnh đạo gặp gỡ các tôn giáo" className="w-full rounded-lg shadow" />
          <p className="mt-2 text-sm text-center text-gray-700">
            Gặp gỡ đại diện các tôn giáo
          </p>
        </div>

        {/* Constitution Box */}
        {/* <div className="p-4 my-6 bg-gray-100 border border-gray-300 rounded">
          <img src={ImgConstitution} alt="Điều 24 Hiến pháp 2013" className="mx-auto" />
        </div> */}

        {/* References */}
        <div className="mt-8">
          <h1 className="text-2xl font-bold">Các nguồn thông tin</h1>
          <p className="pb-1 text-sm text-gray-600 border-b border-gray-300"></p>
          <ul className="pl-6 space-y-2 text-blue-600 list-disc">
            <li>
              <a href="https://www.quanlynhanuoc.vn/2025/07/24/tang-cuong-quan-ly-nha-nuoc-ve-hoat-dong-ton-giao-tren-khong-gian-mang-o-viet-nam-hien-nay/">
                Tăng cường quản lý nhà nước về hoạt động tôn giáo...
              </a>
            </li>
            <li>
              <a href="https://congthuong.vn/quan-ly-nha-nuoc-ra-sao-doi-voi-hien-tuong-lan-truyen-ta-dao-tren-mang-365944.html">
                Quản lý nhà nước ra sao đối với hiện tượng tà đạo...
              </a>
            </li>
            <li>
              <a href="https://tcnn.vn/news/detail/63198/Tu-do-tin-nguong-ton-giao-tren-khong-gian-mang.html">
                Tự do tín ngưỡng, tôn giáo trên không gian mạng
              </a>
            </li>
            <li>
              <a href="https://www.tapchicongsan.org.vn/dau-tranh-phan-bac-cac-luan-dieu-sai-trai-thu-dich/chi-tiet/-/asset_publisher/YqSB2JpnYto9/content/nhan-dien-va-phan-bac-luan-dieu-xuyen-tac-chong-pha-chinh-sach-tu-do-tin-nguong-ton-giao-o-viet-nam-qua-mot-so-hien-tuong-mang-lien-quan-den-ton-giao">
                Nhận diện và phản bác luận điệu xuyên tạc...
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post2;
