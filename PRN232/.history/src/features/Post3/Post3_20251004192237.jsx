import React from "react";
import PostParagraph from "@/components/PostParagraph";

// Ảnh minh họa (lưu trong src/assets/post3/)
import ImgCover1 from "@/assets/post3/cover1.png"; // lễ hội khánh thành
import ImgCover2 from "@/assets/post3/cover2.png"; // lớp học
import ImgCover3 from "@/assets/post3/cover3.png"; // sinh hoạt cộng đồng

const Post3 = () => {
  return (
    <div className="min-h-screen bg-[#FAF7E6]">
      <div className="max-w-5xl px-6 py-8 mx-auto">
        
        {/* Header */}
        <header className="mb-6">
          <p className="pb-1 text-sm text-gray-600 border-b border-gray-300">
            Thứ Bảy, 04/10/2025 | 09:00
          </p>
        </header>

       
        <h1 className="mb-6 text-2xl font-bold text-center">
          Bảo tồn, phát huy văn hóa và ngôn ngữ đồng bào dân tộc La Ha
        </h1>

        <PostParagraph text="Ở Việt Nam, đồng bào dân tộc La Ha tập trung sinh sống chủ yếu tại tỉnh Sơn La. Đến nay, người La Ha vẫn lưu giữ và truyền lại những nét văn hóa truyền thống phong phú, đặc sắc." />
        <PostParagraph text="Tuy nhiên, một số giá trị văn hóa, trong đó có ngôn ngữ và chữ viết của dân tộc La Ha, đang dần bị mai một... Trước thực trạng đó, tỉnh Sơn La đã triển khai nhiều chương trình và chính sách nhằm giữ gìn ngôn ngữ và văn hóa của đồng bào La Ha." />
        <PostParagraph text="Tỉnh Sơn La hiện có 12 dân tộc cùng chung sống... Sự giao thoa văn hóa đã góp phần hình thành nền văn hóa đa sắc tộc, phong phú và đặc biệt của Sơn La." />
        
        <figure className="flex flex-col items-center my-6">
          <img 
            src={ImgCover1} 
            alt="Lễ khánh thành văn hóa dân tộc La Ha" 
            className="w-3/4 rounded-lg shadow" 
          />
          <figcaption className="mt-2 text-sm text-center text-gray-700">
            Lễ khánh thành Nhà văn hóa cộng đồng dân tộc La Ha
          </figcaption>
        </figure>

   
        <PostParagraph text="Dân tộc La Ha có mặt từ rất sớm tại vùng Tây Bắc... để bảo tồn và phát huy các giá trị văn hóa này, Sơn La đã chỉ đạo các sở, ngành liên quan phối hợp huyện đẩy mạnh nghiên cứu phục dựng lễ hội, trang phục, trong đó có ngôn ngữ của đồng bào La Ha." />
        <PostParagraph text="Trong số các dân tộc thiểu số hiện nay ở Sơn La, chỉ còn ba dân tộc giữ được chữ viết là Thái, Lào và Dao... Lớp trẻ hầu như không biết tiếng mẹ đẻ, thay vào đó sử dụng tiếng Thái." />
        <PostParagraph text="Người La Ha sinh sống chủ yếu tại các huyện Quỳnh Nhai, Thuận Châu, Mường La, Mộc Châu... Câu lạc bộ không chỉ duy trì múa hát, giao lưu văn hóa mà còn là nơi bà con sử dụng ngôn ngữ La Ha." />

      
        <figure className="flex flex-col items-center my-6">
          <img 
            src={ImgCover2} 
            alt="Sinh hoạt cộng đồng La Ha" 
            className="w-3/4 rounded-lg shadow" 
          />
          <figcaption className="mt-2 text-sm text-center text-gray-700">
            Sinh hoạt cộng đồng La Ha
          </figcaption>
        </figure>

        <PostParagraph text="Riêng tại huyện Mường La, có gần 5.300 người La Ha, chiếm khoảng 5% dân số huyện... Nguyên nhân một phần do sống xen kẽ với người Thái, dẫn đến ngôn ngữ bị thay thế dần." />
        <PostParagraph text="Để bảo tồn tiếng nói, chữ viết, tỉnh Sơn La đã giao các huyện phối hợp mở lớp dạy tiếng La Ha. Ví dụ, tại xã Hua Trai, bà con quen dùng tiếng Thái khiến nhiều người lầm tưởng đây là bản của dân tộc Thái. Từ năm 2020, ông Quàng Văn Hóa đã tham gia đứng lớp dạy tiếng La Ha..." />


        <figure className="flex flex-col items-center my-6">
          <img 
            src={ImgCover3} 
            alt="Điệu múa truyền thống La Ha" 
            className="w-3/4 rounded-lg shadow" 
          />
          <figcaption className="mt-2 text-sm text-center text-gray-700">
            Điệu múa truyền thống La Ha
          </figcaption>
        </figure>

     
        <PostParagraph text="Năm 2017, tỉnh Sơn La ban hành Quyết định số 2477/QĐ-UBND phê duyệt Đề án hỗ trợ phát triển kinh tế-xã hội dân tộc La Ha giai đoạn 2017–2025... Các chính sách hỗ trợ đã giúp người La Ha thay đổi tập quán sinh hoạt, ổn định đời sống và phát triển kinh tế." />
        <PostParagraph text="Nhờ những nỗ lực này, đời sống đồng bào La Ha ngày càng được nâng cao... Các địa phương còn tổ chức khôi phục lễ hội, mở lớp dạy tiếng, cải tạo chuồng trại, hỗ trợ kỹ thuật sản xuất, nuôi trồng thủy sản." />
        <PostParagraph text="Thông tin từ Ban Dân tộc tỉnh Sơn La cho biết, để bảo tồn ngôn ngữ và văn hóa La Ha, nhiều lớp học tiếng đã được mở tại các bản. Đây là nền tảng quan trọng để phục hồi, phát triển tiếng mẹ đẻ..." />
        <PostParagraph text="Như vậy, thông qua sự quan tâm của Đảng, Nhà nước và chính quyền địa phương, đồng bào La Ha không chỉ cải thiện đời sống vật chất, tinh thần mà còn có cơ hội khôi phục, gìn giữ và phát huy tiếng nói, chữ viết cùng bản sắc văn hóa truyền thống." />

        {/* Video Youtube */}
        <div className="flex justify-center my-8">
          <iframe
            className="rounded-lg shadow"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/plZ9DJTNpqc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        
        <div className="mt-8">
          <h1 className="text-2xl font-bold">Nguồn tham khảo</h1>
          <ul className="pl-6 mt-2 space-y-2 text-blue-600 list-disc">
            <li>
              <a
                href="https://baotintuc.vn/van-hoa/bao-ton-phat-huy-van-hoa-va-ngon-ngu-dong-bao-dan-toc-la-ha-20230618121320947.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bảo tồn, phát huy văn hóa và ngôn ngữ đồng bào dân tộc La Ha
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Post3;
