import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Sparkles,
  ShieldCheck,
  Users2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Section = ({ icon: Icon, title, children, index, isOpen, onToggle }) => {
  return (
    <div className="p-6 bg-white border border-gray-100 shadow-md rounded-xl">
      {/* HEADER */}
      <button
        onClick={() => onToggle(index)}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="flex items-center justify-center w-10 h-10 bg-[#B71C1C]/10 rounded-full"
          >
            <Icon className="w-6 h-6 text-[#B71C1C]" />
          </motion.div>
          <h2 className="text-xl font-bold text-left text-gray-900 md:text-2xl">
            {title}
          </h2>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-gray-700" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-700" />
          )}
        </motion.div>
      </button>

      {/* BODY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 space-y-3 overflow-hidden leading-relaxed text-gray-700"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AIUsage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FAF7E6] px-6 py-12">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#B71C1C] mb-2">
          Cách chúng tôi sử dụng Trí tuệ Nhân tạo (AI)
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Bấm vào từng biểu tượng để khám phá cách nhóm chúng tôi áp dụng AI trong dự án này.
        </p>
        <div className="w-20 h-1 mx-auto mt-4 bg-yellow-500 rounded-full"></div>
      </motion.div>

      {/* CONTENT */}
      <div className="flex flex-col max-w-4xl gap-6 mx-auto">
        {/* Section 1 */}
        <Section
          index={1}
          icon={Brain}
          title="Chúng tôi đã sử dụng AI như thế nào?"
          isOpen={openIndex === 1}
          onToggle={toggleSection}
        >
          <p>
            Trong quá trình phát triển dự án, nhóm chủ yếu sử dụng{" "}
            <strong>ChatGPT</strong> để hỗ trợ các công việc sau:
          </p>
          <ul className="list-disc list-inside">
            <li>Tạo code React dựa trên thiết kế Figma.</li>
            <li>Hỗ trợ gỡ lỗi và tối ưu hóa trang web.</li>
            <li>Tìm kiếm tài liệu học thuật và nguồn tin tức liên quan.</li>
            <li>Tạo ý tưởng cơ bản cho bài viết.</li>
          </ul>
        </Section>

        {/* Section 2 */}
        <Section
          index={2}
          icon={Sparkles}
          title="Lý do chúng tôi sử dụng AI"
          isOpen={openIndex === 2}
          onToggle={toggleSection}
        >
          <p>
            Chúng tôi sử dụng AI vì muốn tăng tốc quá trình sáng tạo và triển
            khai. Cụ thể:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Hỗ trợ triển khai UI/UX từ bản thiết kế mà không cần lập trình viên
              chuyên sâu về frontend.
            </li>
            <li>
              Giúp tạo nhanh ý tưởng cho các bài viết và nghiên cứu nội dung.
            </li>
          </ul>
        </Section>

        {/* Section 3 */}
        <Section
          index={3}
          icon={ShieldCheck}
          title="Trách nhiệm và Chính trực học thuật"
          isOpen={openIndex === 3}
          onToggle={toggleSection}
        >
          <p>
            Mặc dù AI hỗ trợ nhiều, nhóm vẫn đảm bảo tuân thủ các nguyên tắc
            học thuật:
          </p>
          <ul className="list-disc list-inside">
            <li>Ghi rõ nguồn gốc nội dung AI tạo ra.</li>
            <li>
              Xem xét và kiểm tra kỹ code hoặc nội dung trước khi đưa vào sản phẩm.
            </li>
            <li>
              Chỉ sử dụng AI như nguồn cảm hứng, không thay thế nghiên cứu con người.
            </li>
          </ul>
        </Section>

        {/* Section 4 */}
        <Section
          index={4}
          icon={Users2}
          title="Kết luận"
          isOpen={openIndex === 4}
          onToggle={toggleSection}
        >
          <p>
            Chúng tôi tin rằng AI là công cụ mạnh mẽ giúp con người sáng tạo hiệu quả hơn,
            nhưng yếu tố con người vẫn là trung tâm của mọi đổi mới.
          </p>
        </Section>
      </div>
    </div>
  );
}
