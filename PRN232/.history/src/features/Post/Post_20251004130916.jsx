// src/pages/Post.jsx - Page of Post
import React from "react";
import PostImage from "@/components/PostImage";
import PostParagraph from "@/components/PostParagraph";
import PostImage1 from "@/assets/PostImage1.jpg"; 
import PostImage2 from "@/assets/PostImage2.jpg";

const Post = () => {
  return (
    <div className="min-h-screen bg-[#FAF7E6]">
      <div className="max-w-8xl mx-auto px-6 py-8 bg-[#FAF7E6] mt-5">
        {/* Header */}
        <header className="mb-6">
         
          <p className="text-sm text-gray-600 border-b border-gray-300 pb-1">
            Thứ tư, 24/09/2025 | 12:30
          </p>
        </header>

        {/* Title */}
        <h1 className="mb-4 text-center text-2xl font-bold">
          Thủ tướng Phạm Minh Chinh chỉ đạo thúc đẩy mạnh phát triến tại các vùng dân tộc thiểu số
        </h1>

        {/* First Paragraph */}
        <PostParagraph text='Vào ngày 13/9, tại hội nghịa toàn quốc tổng kết chương trình
        và định hướng 2026-2030 tại Hà Nội, Thủ tướng Phạm Minh Chính đã chỉ đạo
        các bộ, ngành và địa phương để bàn về việc thúc đẩy phát triển 
        kinh tế - xã hội tại các vùng dân tộc thiểu số. Thông qua thực hiện chủ trương
        của Đảng và Chính sách của Nhà Nước' className='mb-4 font-semibold'/>

        {/* First Image */}
        <PostImage src={PostImage1} alt='Thủ tướng Phạm Minh Chính phát biểu tại hội nghị.' 
          imageCaption="Thủ tướng Phạm Minh Chính phát biểu tại hội nghị."/>


        {/* Second Paragraph */}
        <PostParagraph text='Thủ tướng Phạm Minh Chính phát biểu:
        "Việc thúc đẩy phát triển kinh tế - xã hội ở vùng miền núi và vùng dân tộc thiểu số vừa là nhiệm vụ chính trị, vừa là
        một cam kết nhân đạo đối với các cộng đồng còn gặp nhiều khó khăn về giao thông, giáo dục, y tế và
        vệ sinh."' className='mb-6'/>

        {/* Second Paragraph */}
        <PostParagraph text='Lãnh đạo Chính phủ kêu gọi một cách tiếp cận toàn diện, lấy người dân làm trung tâm, bao gồm toàn bộ hệ thống chính trị, với sự phân cấp và phân quyền mạnh mẽ hơn,
        miễn là năng lực thực hiện mạnh mẽ hơn, tăng cường thanh tra, hoàn thiện khuôn khổ thể chế và phân bổ nguồn lực có mục tiêu.' className='mb-6'/>

        {/* Second Paragraph */}
        <PostParagraph text='Nỗ lực này đòi hỏi hành động thực chất và hướng đến kết quả, được hỗ trợ bởi luật pháp và cơ chế từ tất cả các cấp chính quyền. Họ cũng đã đề ra những nhiệm vụ và giải pháp trọng tâm để cải thiện các cộng đồng này. Việc giảm thiểu tài sản phải được thực hiện nhanh chóng và hiệu quả, đặc biệt là đối với những nơi cần nhất.' className='mb-6'/>

        {/* Second Paragraph */}
        <PostParagraph text='Theo Thủ tướng, Chính phủ sẽ cung cấp nguồn lực cho việc tạo việc làm,
        cải thiện chăm sóc sức khỏe, nâng cấp cơ sở hạ tầng và hệ thống trường học. Chính phủ cũng sẽ hướng đến việc phát triển các chính sách để
        thúc đẩy liên kết cộng đồng dân tộc, hỗ trợ hợp tác và sử dụng công nghệ mới để thúc đẩy kinh tế địa phương
        và phúc lợi xã hội.' className='mb-6'/>

       

         {/* Second Image */}
        <PostImage src={PostImage2} alt='Hình ảnh khách nước ngoài thăm quan vùng dân tộc thiểu số.' 
          imageCaption="Khách nước ngoài thăm quan vùng dân tộc thiểu số."/>


        <PostParagraph text="Theo Ban Chỉ đạo Trung ương các Chương trình mục tiêu quốc gia,
Việt Nam là nơi sinh sống của 53 dân tộc thiểu số với tổng số hơn 14,4 triệu người, chiếm khoảng ba phần tư diện tích đất nước.
Sau đợt tái cơ cấu đơn vị hành chính gần đây, 1.516 xã thuộc 32 tỉnh, thành phố được xếp vào vùng dân tộc thiểu số và miền núi." className='mb-6'/>

          <PostParagraph text="Kế hoạch tổng thể phát triển kinh tế - xã hội nông thôn và miền núi giai đoạn 2021-2030 do Quốc hội ban hành đã trở thành chương trình trọng điểm quốc gia nhằm thúc đẩy phát triển kinh tế - xã hội khu vực nông thôn và miền núi. Tổng mức đầu tư cho chương trình ước tính khoảng 137 nghìn tỷ đồng (5,26 tỷ USD) trong 5 năm đầu tiên, với 10 dự án thuộc nhiều lĩnh vực. Các dự án này hướng đến mục tiêu giảm nghèo, tăng thu nhập bình quân đầu người, giáo dục và đào tạo nghề, bảo tồn di sản văn hóa và cải thiện y tế." className='mb-6'/>

       

        
      </div>

      {/* References Source*/}
      <div>
        <h1 className="text-2xl font-bold">Các nguồn thông tin</h1>
        <p className="text-sm text-gray-600 border-b border-gray-300 pb-1"></p>
        {/* Author Footer */}
        <header className="mb-6">
          <p>
            https://en.qdnd.vn/social-affairs/news/pm-orders-stronger-push-on-minority-mountainous-region-development-581498 - Báo Quân đội nhân dân, nguồn chính VNA
          </p>
        </header>
      </div>
      

    </div>
  );
};

export default Post;
