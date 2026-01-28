import React from "react";
import './AIUsage.css';

const AIUsage = () => {
  return (
    <div className="body min-h-screen bg-[#FAF7E6] px-6 py-10">
      {/* Header Card */}
      <div className="bg-[#FAF7E6] border-2 border-yellow-500 rounded-lg shadow-md p-8 max-w-3xl mx-auto text-center mt-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Artificial Intelligence Usage (Sử dụng trí tuệ nhân tạo)
        </h1>
        <p className="text-gray-700 mb-6">
          Chúng tôi muốn tiết lộ cách sử dụng AI đã giúp chúng tôi tạo ra dự án này.
        </p>
        <div className="w-16 h-1 bg-yellow-500 mx-auto rounded"></div>
      </div>

      {/* Post Content */}
      <div className="max-w-8xl mx-auto mt-10 bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Chúng tôi đã sử dụng AI như thế nào?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Trong quá trình phát triển dự án này, chúng tôi chủ yếu sử dụng <span className="font-bold">ChatGPT</span> để hỗ trợ các công việc sau:
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Tạo code dựa trên thiết kế Figma của chúng tôi</li>
            <li>Hỗ trợ gỡ lỗi và tối ưu hóa trang web</li>
            <li>Tìm kiếm tài liệu học thuật và nguồn tin tức cho bài viết của chúng tôi</li>
            <li>Tạo ý tưởng cơ bản cho bài viết</li>
          </ul>

        </p>

        <h2 className="text-2xl font-semibold text-gray-900">
          Lý do sử dụng AI
        </h2>
        
        <p className="text-gray-700 leading-relaxed">
          Dưới đây là lý do tại sao chúng tôi sử dụng AI:
          <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Đầu tiên, để hỗ trợ việc triển khai UI/UX vào mã Front end.
            Lý do là tất cả chúng tôi không phải là nhà phát triển front end với kỹ năng thiết kế trang web. Do đó, việc sử dụng AI chủ yếu là để
            tạo Code React dựa trên thiết kế Figma của chúng tôi</li>
          <li>Thứ hai, chúng tôi muốn tạo ra nhiều ý tưởng cho các bài viết của mình một cách nhanh chóng
            để nhanh chóng chuyển sang việc chọn lọc ý tưởng. Do đó, công việc của AI là tạo ra khung ý tưởng cơ bản cho mỗi
            bài viết cũng như tìm kiếm các nguồn trực tuyến, chẳng hạn như tài liệu nghiên cứu học thuật và tin tức</li>
        </ul>
        </p>
        

        <h2 className="text-2xl font-semibold text-gray-900">
          Trách nhiệm của chúng tôi trong việc tuân thủ Chính trực học thuật
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Mặc dù AI đã đóng góp vào dự án này, chúng tôi vẫn phải tuân thủ quy tắc ứng xử về tính chính trực trong học thuật. Do đó, chúng tôi đảm bảo:
           <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Ghi rõ nguồn gốc nội dung do AI tạo ra</li>
            <li>Chỉ sử dụng nội dung do AI tạo ra như một tài nguyên bổ sung hoặc nguồn cảm hứng, không phải là nguồn chính</li>
            <li>Xem xét và xác thực code do AI tạo ra trước khi triển khai</li>
            <li>Đảm bảo sản phẩm cuối cùng là nguyên bản</li>
            <li>Quan trọng nhất, giao tiếp giữa các thành viên trong nhóm để nhận phản hồi và cải tiến</li>
          </ul>
        </p>

      
      </div>
    </div>
  )
}

export default AIUsage;