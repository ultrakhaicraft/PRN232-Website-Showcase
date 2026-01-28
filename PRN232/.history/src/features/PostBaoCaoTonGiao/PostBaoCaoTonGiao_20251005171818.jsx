import React from "react";
import PostParagraph from "../../components/PostParagraph";
import PostImage from "../../components/PostImage";

// 🖼️ Import ảnh từ thư mục assets
import ImgCover1 from "../../assets/post5/PieChartTonGiao.png";
import ImgCover2 from "../../assets/post5/ImageOfAManDoingStuff.jpg";

const PostBaoCaoTonGiao = () => {
  return (
    <div className="min-h-screen bg-[#FAF7E6]">
      <div className="max-w-5xl mx-auto px-6 py-8 bg-[#FAF7E6]">
        {/* Header */}
        <header className="mb-6">
          <p className="pb-1 text-sm text-gray-600 border-b border-gray-300">
            Thứ Năm, 02/10/2025 | 07:30
          </p>
        </header>

        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold text-center">
          Hiện trạng tôn giáo và chính sách tôn giáo hiện nay ở Việt Nam năm 2024
        </h1>

        {/* First Paragraph */}
        <PostParagraph
          text="Từ năm 2022 cho đến nay, tình trạng tôn giáo hiện nay đang theo hướng tốt và phát triển so với thời kỳ trước, kể cả các năm trước. Bài viết này sẽ nói đến những đặc điểm về Tôn giáo hiện nay, cũng như là thử thách và hướng đi tương lại sau này."
          className="mb-4 font-semibold"
        />

        <h2 className="font-bold">I/ Thông số</h2>
        <p>
          Theo các nguồn tin, từ năm 2022 cho đến hôm nay, tôn giáo tại Việt Nam có các con số như sau:
        </p>
        <ul className="mb-4 list-disc list-inside">
          <li>Có 16 tôn giáo được công nhận bởi Nhà Nước</li>
          <li>Khoảng 145,000 chức việc và hơn 54,500 chức sắc</li>
          <li>Dự đoán sẽ tiến gần 28 triệu tín đồ trong năm 2025 so với 27,7 triệu tín đồ trong năm 2023</li>
          <li>Có 43 tổ chức được công nhận hoặc cấp đăng ký hoạt động tôn giáo</li>
          <li>Cơ sở thờ tự đã lên tới 29.890 nơi</li>
        </ul>

        <PostImage
          src={ImgCover1}
          caption="Số lượng người theo các tôn giáo theo % (2022-2025)"
        />

        <ul className="mb-4 list-disc list-inside">
          <li>Không theo đạo: 72,78% - 74,042,080 dân</li>
          <li>Số người theo đạo: 27,22% - 27,700,000 dân</li>
          <li>Phật giáo: 14 triệu dân</li>
          <li>Công giáo: 7 triệu dân</li>
          <li>Tin Lành: 1,2 triệu dân</li>
          <li>Cao Đài: 1,2 triệu dân</li>
          <li>Hòa Hảo: 1,5 triệu dân</li>
          <li>Các tôn giáo khác: 873,450 dân</li>
        </ul>

        <h2 className="font-bold">II/ Đặc điểm tôn giáo hiện nay</h2>

        <PostParagraph
          text="Có sự đa dạng, đan xen, là một phương tiện để chung sống hòa bình và không có xung đột, chiến tranh tôn giáo. Bởi vì nước Việt Nam có nhiều tôn giáo khác nhau, đều có nguồn gốc và quá trình phát triển khác nhau trong thời gian lịch sự nên sự gắn bó cũng khác nhau..."
          className="mb-4 font-semibold"
        />

        <PostParagraph
          text="Hầu như các tín đồ, người theo tôn giáo là nhân dân lao động, có lòng yêu nước, tinh thần dân tộc..."
          className="mb-4 font-semibold"
        />

        <PostParagraph
          text="Chủ tịch nước Nguyễn Xuân Phúc đã nêu rõ rằng lịch sử Việt Nam luôn ghi nhận những đóng góp to lớn của Đạo Phật đối với dân tộc..."
          className="mb-4 font-semibold"
        />

        <PostImage src={ImgCover2} caption="Hình ảnh hoạt động tôn giáo tại Việt Nam" />

        <PostParagraph
          text="Chức sắc tôn giáo đóng vai trò quan trọng trong giáo hội..."
          className="mb-4 font-semibold"
        />

        <PostParagraph
          text="Các tôn giáo ở Việt Nam đều có quan hệ với các tổ chức, cá nhân tôn giáo ở nước ngoài..."
          className="mb-4 font-semibold"
        />

        <h2 className="font-bold">III/ Chính sách của Đảng và Nhà Nước Việt Nam</h2>

        <PostParagraph
          text="Quyền tự do tín ngưỡng, tôn giáo luôn được Nhà nước Việt Nam tôn trọng..."
          className="mb-4 font-semibold"
        />

        <PostParagraph
          text="Tiếp đó, Nhà nước thực hiện nhất quán chính sách đại đoàn kết dân tộc..."
          className="mb-4 font-semibold"
        />

        <PostParagraph
          text="Công tác vận động quần chúng là trọng tâm cho việc động viên đồng bào yêu nước..."
          className="mb-4 font-semibold"
        />

        <h2 className="font-bold">IV/ Thử thách và hướng giải pháp hiện nay</h2>

        <PostParagraph
          text="Kinh tế xã hội hiện nay đang gặp nhiều khó khăn, không chỉ ở trong Việt Nam, mà là toàn cầu..."
          className="mb-4 font-semibold"
        />

        <PostParagraph
          text="Sử dụng mạng xã hội và không gian mạng để lợi dụng tôn giáo..."
          className="mb-4 font-semibold"
        />

        <h2 className="font-bold">Kết luận</h2>

        <PostParagraph
          text="Tôn giáo là hiện tượng xã hội có nguồn gốc phức hợp — tự nhiên, kinh tế-xã hội, nhận thức và tâm lý..."
          className="mb-4 font-semibold"
        />

        {/* References */}
        <div>
          <h1 className="text-2xl font-bold">Các nguồn thông tin</h1>
          <p className="pb-1 text-sm text-gray-600 border-b border-gray-300"></p>
          <header className="mb-6">
            <p>https://baochinhphu.vn/dong-bao-cac-ton-giao-la-mot-bo-phan-cua-khoi-dai-doan-ket-toan-dan-toc-102303516.htm</p>
            <p>https://thanhnien.vn/tin-do-cac-ton-giao-deu-co-tinh-than-yeu-nuoc-185873928.htm</p>
            <p>Dương, X. N., Đỗ, T. T., & Hoàng, C. B. (2021). Giáo trình chủ nghĩa xã hội khoa học. Nxb. Chính trị quốc gia Sự thật.</p>
            <p>https://vietnam.opendevelopmentmekong.net/topics/overview-of-religions-in-vietnam/</p>
          </header>
        </div>
      </div>
    </div>
  );
};

export default PostBaoCaoTonGiao;
