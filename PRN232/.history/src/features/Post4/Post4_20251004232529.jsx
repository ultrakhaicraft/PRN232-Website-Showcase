import React from "react";
import PostParagraph from "@/components/PostParagraph";

// Ảnh minh họa (bạn cần để trong src/assets/post4/)
import ImgCover1 from "@/assets/post4/cover1.png"; // múa lân, chùa
import ImgCover2 from "@/assets/post4/cover2.png"; // đông người viếng
import ImgCover3 from "@/assets/post4/cover3.png"; // chùa ban đêm
import ImgCover4 from "@/assets/post4/cover4.png"; // ảnh bìa

const Post4 = () => {
  return (
    <div className="min-h-screen bg-[#FAF7E6]">
      <div className="max-w-5xl px-6 py-8 mx-auto">
        
        {/* Header */}
        <header className="mb-6">
          <p className="pb-1 text-sm text-gray-600 border-b border-gray-300">
            Chủ Nhật, 05/10/2025 | 10:00
          </p>
        </header>

        {/* Title */}
        <h1 className="mb-6 text-2xl font-bold text-center">
          Lễ hội Vía Bà Chúa Xứ Núi Sam - Niềm tự hào Di sản thế giới
        </h1>

        {/* Nội dung */}
        <PostParagraph text="Tại Kỳ họp lần thứ 19 của Ủy ban Liên Chính phủ Công ước 2003 về bảo vệ Di sản văn hóa phi vật thể của UNESCO tổ chức tại Cộng hòa Paraguay, Lễ hội Vía Bà Chúa Xứ Núi Sam của Việt Nam đã chính thức được ghi danh vào Danh sách Di sản văn hóa phi vật thể đại diện của nhân loại." />

        <h2 className="mt-6 mb-2 text-xl font-semibold">Lễ hội văn hóa đặc sắc</h2>
        <PostParagraph text="Lễ hội Vía Bà Chúa Xứ Núi Sam là một trong những lễ hội lớn, mang đậm bản sắc văn hóa của cư dân vùng Tây Nam Bộ, diễn ra hằng năm từ ngày 22 đến 27/4 âm lịch tại phường Núi Sam, thành phố Châu Đốc. Trong tín ngưỡng của người Kinh, Bà Chúa Xứ nằm trong hệ thống Thánh Mẫu, được tôn thờ trong điện thần và gắn liền với nhiều thực hành tín ngưỡng như lễ hội, nghi thức tế lễ cùng các loại hình diễn xướng dân gian..." />
        
        {/* Ảnh 1 */}
        <figure className="flex flex-col items-center my-6">
          <img src={ImgCover1} alt="Múa lân tại Lễ hội Vía Bà Chúa Xứ Núi Sam" className="w-3/4 rounded-lg shadow" />
          <figcaption className="mt-2 text-sm text-center text-gray-700">
            Múa lân tại Lễ hội Vía Bà Chúa Xứ Núi Sam
          </figcaption>
        </figure>

        <PostParagraph text="Lễ hội là sự kết tinh bản sắc và quá trình kế thừa của cộng đồng người Kinh trong tiến trình giao lưu, tiếp biến văn hóa với các dân tộc Hoa, Khmer và Chăm... Ngoài phần lễ, địa phương còn tổ chức phần hội cùng nhiều hoạt động văn hóa - thể thao, trò chơi dân gian, diễn xướng nhằm phục vụ nhu cầu của nhân dân và du khách." />

        <PostParagraph text="Theo Ủy viên Ban Chấp hành Trung ương Đảng, Bí thư Tỉnh ủy An Giang Lê Hồng Quang: 'Thông qua các hoạt động thực hành, lễ hội đã trao truyền đến thế hệ hôm nay những hiểu biết sâu sắc về phong tục, tập quán, đạo đức, lối ứng xử trong xã hội, phản ánh hành trình khẩn hoang, mở đất, bảo vệ phương Nam của Tổ quốc cùng quan niệm về thế giới quan, nhân sinh quan của ông cha...'" />

        {/* Ảnh 2 */}
        <figure className="flex flex-col items-center my-6">
          <img src={ImgCover2} alt="Đông đảo người dân viếng Bà Chúa Xứ" className="w-3/4 rounded-lg shadow" />
          <figcaption className="mt-2 text-sm text-center text-gray-700">
            Đông đảo người dân và du khách viếng Bà Chúa Xứ
          </figcaption>
        </figure>

        <h2 className="mt-6 mb-2 text-xl font-semibold">Vinh dự, tự hào</h2>
        <PostParagraph text="Lễ hội Vía Bà Chúa Xứ đã được Bộ Văn hóa, Thể thao và Du lịch công nhận là Di sản văn hóa phi vật thể quốc gia từ năm 2014. Đến năm 2023, lễ hội tiếp tục được vinh danh là 'Hoạt động văn hóa tiêu biểu Châu Á - Thái Bình Dương'. Ngày 4/12/2024, di sản chính thức được UNESCO ghi danh vào Danh sách Di sản văn hóa phi vật thể đại diện của nhân loại." />

        {/* Ảnh 3 */}
        <figure className="flex flex-col items-center my-6">
          <img src={ImgCover3} alt="Lễ hội Vía Bà Chúa Xứ Núi Sam về đêm" className="w-3/4 rounded-lg shadow" />
          <figcaption className="mt-2 text-sm text-center text-gray-700">
            Lễ hội Vía Bà Chúa Xứ Núi Sam lung linh về đêm
          </figcaption>
        </figure>

        <PostParagraph text="Lễ hội Vía Bà Chúa Xứ Núi Sam là một lễ hội dân gian truyền thống độc đáo của An Giang nói chung và thành phố Châu Đốc nói riêng, có vai trò quan trọng trong đời sống văn hóa tinh thần của nhân dân địa phương. Lễ hội chứa đựng những giá trị lịch sử - văn hóa tiêu biểu trong dòng chảy văn hóa Nam Bộ. Trong thời gian tới, tỉnh An Giang sẽ tiếp tục đẩy mạnh công tác bảo tồn, gìn giữ và phát huy giá trị của di sản, đồng thời quảng bá sâu rộng hình ảnh văn hóa và con người An Giang đến với bạn bè trong nước và quốc tế..." />

        {/* Ảnh bìa */}
        <figure className="flex flex-col items-center my-6">
          <img src={ImgCover4} alt="Ảnh bìa Lễ hội Vía Bà Chúa Xứ Núi Sam" className="w-3/4 rounded-lg shadow" />
          <figcaption className="mt-2 text-sm text-center text-gray-700">
            Ảnh bìa: Lễ hội Vía Bà Chúa Xứ Núi Sam
          </figcaption>
        </figure>

        {/* Reference */}
        <div className="mt-8">
          <h1 className="text-2xl font-bold">Nguồn tham khảo</h1>
          <ul className="pl-6 mt-2 space-y-2 text-blue-600 list-disc">
            <li>
              <a
                href="https://angiang.gov.vn/vi/le-hoi-ba-chua-xu-nui-sam-niem-tu-hao-di-san-gioi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lễ hội Bà Chúa Xứ Núi Sam - Niềm tự hào Di sản thế giới
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Post4;
