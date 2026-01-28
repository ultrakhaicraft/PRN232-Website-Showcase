import React from "react";
import "./HomePage.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ảnh minh họa
import HinhAnhHCM from "@/assets/HinhAnhHCM.png";
import cover2 from "@/assets/cover2.png";
import coverReligion from "@/assets/cover_religion.png"; // ảnh minh họa bài Tôn giáo
import coverEthnic from "@/assets/cover_ethnic.png";     // ảnh minh họa bài Quan hệ dân tộc

function Homepage() {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate("/about");
  };

  return (
    <div className="bg-[#FFFAE2] min-h-screen p-8">
      {/* Header Section */}
      <motion.div
        className="relative mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="relative z-20 mb-10 text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600 drop-shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Tôn giáo & Dân tộc <br /> trong thời kỳ quá độ
        </motion.h1>

        <div className="flex items-center gap-8">
          <motion.img
            src={HinhAnhHCM}
            alt="Hình ảnh Hồ Chí Minh"
            className="w-3/4 mx-auto rounded-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Giới thiệu */}
      <section className="mb-16">
        <motion.h2
          className="mb-4 text-5xl font-bold text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Cổng thông tin về dân tộc và tôn giáo Việt Nam
        </motion.h2>
        <motion.p
          className="mb-6 text-xl text-center text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Chào mừng bạn đến với cổng thông tin tổng hợp các tiểu luận, tài liệu và tin tức về công tác tôn giáo và dân tộc của Việt Nam.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src={cover2}
            alt="cover2"
            className="object-cover shadow-xl cursor-pointer rounded-xl"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </section>

      {/* Về chúng tôi */}
      <section className="my-20 text-center">
        <motion.h2
          className="mb-6 text-5xl font-bold text-red-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Về chúng tôi
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto mb-6 text-xl text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Website này tập hợp các bài viết, tiểu luận chính trị, phân tích khoa học nhằm giúp bạn đọc hiểu rõ hơn về công tác dân tộc và tôn giáo trong thời kỳ đổi mới và hội nhập.
        </motion.p>

        <ReadMoreButton onClick={handleReadMoreClick}>
          Nhấn vào đây để tìm hiểu thêm
        </ReadMoreButton>
      </section>

      {/* Bài viết nổi bật */}
      <section className="mb-20">
        <h2 className="mb-8 text-4xl font-bold section-title">Tiểu luận nổi bật</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Tiểu luận 1 */}
          <motion.div
            className="flex flex-col gap-2"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/post/ton-giao">
              <img
                src={coverReligion}
                alt="Tôn giáo trong thời kỳ quá độ"
                className="w-full h-[300px] rounded-lg object-cover shadow-md hover:brightness-90 transition"
              />
            </Link>
            <p className="text-lg font-semibold medium-text">
              Tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội — Tiểu luận ngắn
            </p>
          </motion.div>

          {/* Tiểu luận 2 */}
          <motion.div
            className="flex flex-col gap-2"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/post/dan-toc-ton-giao">
              <img
                src={coverEthnic}
                alt="Quan hệ dân tộc và tôn giáo"
                className="w-full h-[300px] rounded-lg object-cover shadow-md hover:brightness-90 transition"
              />
            </Link>
            <p className="text-lg font-semibold medium-text">
              Quan hệ dân tộc và tôn giáo ở Việt Nam — Tiểu luận
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const ReadMoreButton = ({ children, onClick }) => {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.button
        onClick={onClick}
        className="px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-red-500 to-yellow-500 hover:from-yellow-500 hover:to-red-500 hover:shadow-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {children} <span className="ml-2">→</span>
      </motion.button>
    </motion.div>
  );
};

export default Homepage;
