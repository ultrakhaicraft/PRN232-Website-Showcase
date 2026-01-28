import React from "react";
import { motion } from "framer-motion";
import "./About.css";

import AboutUs1 from "@/assets/AboutUs1.jpg";
import AboutUs2 from "@/assets/AboutUs2.jpg";
import QuangKhai from "@/assets/QuangKhai.png";
import LamKhanh from "@/assets/LamKhanh.jpg";
import DucThanh from "@/assets/DucThanh.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] py-16 px-6 text-center">
      {/* ====== HEADER ====== */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#B71C1C]">
          Về chúng tôi
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#B71C1C] to-[#FBC02D] mx-auto mt-3 rounded-full"></div>
        <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed text-gray-800 md:text-xl">
          Đây là website cung cấp thông tin về vấn đề{" "}
          <span className="font-semibold text-[#C62828]">
            dân tộc và tôn giáo ở Việt Nam
          </span>{" "}
          trong thời kỳ quá độ lên Chủ nghĩa Xã hội.
        </p>
      </motion.div>

      {/* ====== HÌNH ẢNH DỰ ÁN ====== */}
      <motion.div
        className="grid max-w-6xl grid-cols-1 gap-10 mx-auto mt-12 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[AboutUs1, AboutUs2].map((img, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            custom={i * 0.2}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden border border-yellow-100 shadow-lg rounded-xl"
          >
            <img
              src={img}
              alt={`About-${i}`}
              className="object-cover w-full h-[320px]"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ====== MỤC ĐÍCH ====== */}
      <motion.div
        className="max-w-3xl mx-auto mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={0.3}
      >
        <h2 className="text-3xl font-bold text-[#B71C1C]">
          Mục đích của website
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#FBC02D] to-[#B71C1C] mx-auto mt-3 rounded-full"></div>
        <p className="mt-6 text-lg leading-relaxed text-gray-800">
          Mục tiêu của website này là giúp người đọc hiểu rõ hơn về{" "}
          <span className="font-semibold text-[#D32F2F]">
            các vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên Chủ nghĩa Xã hội
          </span>{" "}
          tại Việt Nam thông qua các bài viết, sự kiện và thông tin học thuật.
        </p>
      </motion.div>

      {/* ====== THÀNH VIÊN NHÓM ====== */}
      <motion.div
        className="max-w-6xl mx-auto mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={0.4}
      >
        <h2 className="text-3xl font-bold text-[#B71C1C]">
          Các thành viên trong nhóm
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FBC02D] to-[#B71C1C] mx-auto mt-3 rounded-full"></div>

        {/* GRID MEMBERS */}
        <div className="grid grid-cols-2 gap-10 mt-12 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
          {[
            { name: "Trần Lâm Khánh", role: "Content Writer", img: LamKhanh },
            {
              name: "Trần Nguyễn Thu An",
              role: "Content Writer",
              img: null,
            },
            { name: "Nguyễn Đức Thành", role: "Frontend", img: DucThanh },
            { name: "Phạm Đình Ngân", role: "Content Writer", img: null },
            {
              name: "Phan Quang Khải",
              role: "Leader, Frontend",
              img: QuangKhai,
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              {member.img ? (
                <img
                  src={member.img}
                  alt={member.name}
                  className="object-cover border-4 border-yellow-200 rounded-full shadow-md w-28 h-28"
                />
              ) : (
                <div className="border rounded-full shadow-inner w-28 h-28 bg-gradient-to-br from-gray-200 to-gray-300"></div>
              )}
              <p className="mt-3 font-semibold text-gray-800">{member.name}</p>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
