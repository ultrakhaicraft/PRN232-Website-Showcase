import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Search,
  Sparkles,
  ShieldCheck,
  Users2,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7 },
  }),
};

const AIUsage = () => {
  return (
    <div className="min-h-screen bg-[#FAF7E6] px-6 py-12">
      {/* ===== Header Card ===== */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#FAF7E6] border-2 border-yellow-500 rounded-xl shadow-lg p-8 max-w-3xl mx-auto text-center"
      >
        <h1 className="text-3xl font-extrabold text-[#B71C1C] mb-3">
          Artificial Intelligence Usage
        </h1>
        <p className="text-lg text-gray-800">
          Cách chúng tôi ứng dụng trí tuệ nhân tạo (AI) để phát triển dự án này.
        </p>
        <div className="w-16 h-1 mx-auto mt-4 bg-yellow-500 rounded-full"></div>
      </motion.div>

      {/* ===== Content Card ===== */}
      <div className="max-w-5xl p-10 mx-auto bg-white shadow-md mt-14 rounded-xl space-y-14">
        {/* ===== Section 1 ===== */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
        >
          <div className="flex items-center gap-3">
            <Brain className="w-7 h-7 text-[#C62828]" />
            <h2 className="text-2xl font-bold text-gray-900">
              Chúng tôi đã sử dụng AI như thế nào?
            </h2>
          </div>
          <p className="leading-relaxed text-gray-700">
            Trong quá trình phát triển dự án này, chúng tôi chủ yếu sử dụng{" "}
            <span className="font-bold text-[#B71C1C]">ChatGPT</span> để hỗ trợ
            các công việc sau:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li className="flex items-start gap-2">
              <Code2 className="w-5 h-5 text-yellow-600 mt-0.5" />
              Tạo code dựa trên thiết kế Figma của chúng tôi
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-yellow-600 mt-0.5" />
              Hỗ trợ gỡ lỗi và tối ưu hóa trang web
            </li>
            <li className="flex items-start gap-2">
              <Search className="w-5 h-5 text-yellow-600 mt-0.5" />
              Tìm kiếm tài liệu học thuật và nguồn tin tức cho bài viết của chúng tôi
            </li>
            <li className="flex items-start gap-2">
              <Brain className="w-5 h-5 text-yellow-600 mt-0.5" />
              Tạo ý tưởng cơ bản cho bài viết
            </li>
          </ul>
        </motion.div>

        {/* ===== Section 2 ===== */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-[#C62828]" />
            <h2 className="text-2xl font-bold text-gray-900">
              Lý do sử dụng AI
            </h2>
          </div>
          <p className="leading-relaxed text-gray-700">
            Dưới đây là lý do tại sao chúng tôi sử dụng AI:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>
              Đầu tiên, để hỗ trợ việc triển khai UI/UX vào mã Frontend. Tất cả
              chúng tôi không phải là nhà phát triển front end chuyên nghiệp,
              nên AI giúp chuyển ý tưởng thiết kế Figma thành code React nhanh chóng.
            </li>
            <li>
              Thứ hai, AI giúp chúng tôi tạo nhiều ý tưởng bài viết, chọn lọc và
              phân tích nguồn tin nhanh hơn. Qua đó, tiết kiệm thời gian trong
              việc thu thập tài liệu học thuật và nguồn tin tức.
            </li>
          </ul>
        </motion.div>

        {/* ===== Section 3 ===== */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={2}
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-[#C62828]" />
            <h2 className="text-2xl font-bold text-gray-900">
              Trách nhiệm và tính chính trực học thuật
            </h2>
          </div>
          <p className="leading-relaxed text-gray-700">
            Mặc dù AI đóng vai trò hỗ trợ, nhóm chúng tôi vẫn đảm bảo tuân thủ
            các quy tắc về{" "}
            <span className="font-semibold text-[#B71C1C]">
              chính trực học thuật
            </span>{" "}
            và tính minh bạch:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>Ghi rõ nguồn gốc nội dung do AI tạo ra</li>
            <li>
              Chỉ sử dụng nội dung AI tạo ra như một tài nguyên bổ sung hoặc cảm hứng
            </li>
            <li>Xem xét và kiểm tra kỹ code AI trước khi triển khai</li>
            <li>Đảm bảo sản phẩm cuối cùng là nguyên bản và chính xác</li>
            <li>
              Duy trì trao đổi, phản hồi giữa các thành viên để liên tục cải tiến
            </li>
          </ul>
        </motion.div>

        {/* ===== Section 4 ===== */}
        <motion.div
          className="flex items-center justify-center pt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={3}
        >
          <Users2 className="w-8 h-8 mr-2 text-yellow-600" />
          <p className="text-lg font-medium text-center text-gray-600">
            Cảm ơn bạn đã đọc — nhóm chúng tôi tin rằng AI là công cụ hỗ trợ tuyệt vời,
            nhưng **con người** mới là yếu tố quyết định chất lượng.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AIUsage;
