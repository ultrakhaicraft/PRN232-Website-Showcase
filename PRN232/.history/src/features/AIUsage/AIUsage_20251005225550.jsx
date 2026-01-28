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
    <motion.div
      className={`p-6 border rounded-2xl transition-all duration-500 
      ${
        isOpen
          ? "bg-gradient-to-br from-[#FFF8E7] via-[#FFF1B2] to-[#FFE57F] shadow-[0_0_20px_rgba(251,192,45,0.3)]"
          : "bg-white shadow-md border-gray-100"
      }`}
      whileHover={{ scale: 1.02 }}
    >
      {/* HEADER */}
      <button
        onClick={() => onToggle(index)}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 8 }}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
              isOpen ? "bg-[#B71C1C]" : "bg-[#B71C1C]/10"
            }`}
          >
            <Icon
              className={`w-6 h-6 transition-all ${
                isOpen ? "text-yellow-300" : "text-[#B71C1C]"
              }`}
            />
          </motion.div>
          <h2
            className={`text-xl md:text-2xl font-bold transition-colors ${
              isOpen ? "text-[#B71C1C]" : "text-gray-900"
            }`}
          >
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
            transition={{ duration: 0.45 }}
            className="mt-4 space-y-3 overflow-hidden leading-relaxed text-gray-800"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function AIUsage() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleSection = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-16 bg-gradient-to-br from-[#FFF8E7] via-[#FFF9C4] to-[#FFF8E7]">
      {/* ✨ Floating background animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-20"
        animate={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(255,193,7,0.25), transparent 70%), radial-gradient(circle at 70% 60%, rgba(183,28,28,0.2), transparent 70%)",
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-12 text-center"
      >
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B71C1C] via-[#E53935] to-[#FBC02D] drop-shadow-sm"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Cách chúng tôi sử dụng Trí tuệ Nhân tạo (AI)
        </motion.h1>
        <p className="max-w-2xl mx-auto mt-3 text-lg text-gray-700">
          Bấm vào từng biểu tượng để khám phá cách nhóm chúng tôi ứng dụng AI
          trong dự án này.
        </p>
        <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-[#B71C1C] to-[#FBC02D] rounded-full"></div>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col max-w-4xl gap-6 mx-auto">
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

        <Section
          index={4}
          icon={Users2}
          title="Kết luận"
          isOpen={openIndex === 4}
          onToggle={toggleSection}
        >
          <p>
            Chúng tôi tin rằng AI là công cụ mạnh mẽ giúp con người sáng tạo hiệu
            quả hơn, nhưng yếu tố con người vẫn là trung tâm của mọi đổi mới.
          </p>
          <p className="mt-3 font-semibold text-[#B71C1C] italic">
            “AI là người cộng sự, không phải người thay thế.”
          </p>
        </Section>
      </div>
    </div>
  );
}
