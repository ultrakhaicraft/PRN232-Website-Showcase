import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaUsers, FaLightbulb } from "react-icons/fa";
import AboutUs1 from "@/assets/AboutUs1.jpg";
import AboutUs2 from "@/assets/AboutUs2.jpg";
import QuangKhai from "@/assets/QuangKhai.png";
import LamKhanh from "@/assets/LamKhanh.jpg";
import DucThanh from "@/assets/DucThanh.jpg";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  },
});

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8E7] via-[#FFF3C4] to-[#FFF8E7] py-16 px-6 text-center relative overflow-hidden">

      {/* Background animation */}
      <motion.div
        className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,#FFD54F,transparent_70%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Header */}
      <motion.div
        className="relative z-10 mb-12"
        variants={fadeInUp()}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <FaHandsHelping className="text-[#B71C1C] text-3xl" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#B71C1C]">
            Về chúng tôi
          </h1>
          <FaHandsHelping className="text-[#FBC02D] text-3xl" />
        </div>
        <div className="w-28 h-1 bg-gradient-to-r from-[#B71C1C] to-[#FBC02D] mx-auto rounded-full mb-6"></div>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-800 md:text-xl">
          Trang web được xây dựng với mục tiêu chia sẻ thông tin về{" "}
          <span className="text-[#C62828] font-semibold">
            dân tộc và tôn giáo ở Việt Nam
          </span>{" "}
          — giúp người đọc hiểu sâu hơn về văn hóa, đoàn kết và phát triển xã hội.
        </p>
      </motion.div>

      {/* Showcase Images */}
      <motion.div
        className="grid max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[AboutUs1, AboutUs2].map((img, i) => (
          <motion.div
            key={i}
            variants={fadeInUp(i * 0.2)}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="overflow-hidden border border-yellow-100 shadow-lg rounded-xl"
          >
            <img src={img} alt={`About-${i}`} className="object-cover w-full h-[300px]" />
          </motion.div>
        ))}
      </motion.div>

      {/* Purpose */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto mt-20"
        variants={fadeInUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <FaLightbulb className="text-2xl text-yellow-500 animate-pulse" />
          <h2 className="text-3xl font-bold text-[#B71C1C]">
            Mục đích của website
          </h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FBC02D] to-[#B71C1C] mx-auto mt-3 rounded-full"></div>
        <p className="mt-6 text-lg leading-relaxed text-gray-800">
          Mục tiêu của website là cung cấp góc nhìn khách quan và khoa học về{" "}
          <span className="font-semibold text-[#D32F2F]">
            các vấn đề dân tộc và tôn giáo
          </span>{" "}
          trong thời kỳ quá độ lên Chủ nghĩa Xã hội ở Việt Nam, thông qua bài
          viết, sự kiện và nguồn học thuật.
        </p>
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="max-w-6xl mx-auto mt-24"
        variants={fadeInUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <FaUsers className="text-[#B71C1C] text-3xl" />
          <h2 className="text-3xl font-bold text-[#B71C1C]">
            Các thành viên trong nhóm
          </h2>
        </div>
        <div className="w-28 h-1 bg-gradient-to-r from-[#FBC02D] to-[#B71C1C] mx-auto rounded-full mb-10"></div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
          {[
            { name: "Trần Lâm Khánh", role: "Content Writer", img: LamKhanh },
            { name: "Trần Nguyễn Thu An", role: "Content Writer", img: null },
            { name: "Nguyễn Đức Thành", role: "Frontend", img: DucThanh },
            { name: "Phạm Đình Ngân", role: "Content Writer", img: null },
            { name: "Phan Quang Khải", role: "Leader, Frontend", img: QuangKhai },
          ].map((m, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.08,
                rotate: 2,
                boxShadow: "0 10px 25px rgba(251,192,45,0.4)",
              }}
              className="flex flex-col items-center text-center transition-all duration-300"
            >
              {m.img ? (
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-28 h-28 object-cover rounded-full border-4 border-[#FFD54F] shadow-md"
                />
              ) : (
                <div className="border border-gray-300 rounded-full shadow-inner w-28 h-28 bg-gradient-to-br from-gray-200 to-gray-300"></div>
              )}
              <p className="mt-3 font-semibold text-gray-800">{m.name}</p>
              <p className="text-sm text-gray-500">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer note */}
      <motion.div
        className="mt-20 text-sm italic text-center text-gray-600"
        variants={fadeInUp(0.5)}
        initial="hidden"
        whileInView="visible"
      >
        <p>“Chúng tôi tin rằng đoàn kết và hiểu biết là nền tảng của hòa bình.”</p>
        <p className="mt-2 font-semibold text-[#C62828]">— Nhóm 4 | MLN131 —</p>
      </motion.div>
    </div>
  );
}
