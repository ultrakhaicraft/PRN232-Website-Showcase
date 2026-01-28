import React from "react";
import "./HomePage.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Assets
import Family3 from "@/assets/PostImage3.jpg";
import PostImage1 from "@/assets/Dang1.jpg";
import HinhAnhHCM from "@/assets/HinhAnhHCM.png";
import cover2 from "@/assets/cover2.png";

function Homepage() {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#FFF8E7] min-h-screen p-8">

      <motion.div
        className="relative mb-16 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
    
        <motion.h1
          className="relative z-20 mb-6 text-5xl md:text-6xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#C62828] via-[#E53935] to-[#FBC02D] drop-shadow-[0_3px_4px_rgba(0,0,0,0.3)]"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-4xl tracking-wide md:text-5xl">
            DÂN TỘC VÀ TÔN GIÁO
          </span>
          <span className="block mt-2 text-3xl font-bold text-yellow-600 md:text-4xl">
            TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
          </span>
        </motion.h1>


        <div className="flex justify-center mt-10">
          <motion.img
            src={HinhAnhHCM}
            alt="Hồ Chí Minh và nền tảng tư tưởng"
            className="w-full max-w-3xl rounded-2xl shadow-2xl border-4 border-[#FBC02D]/70"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      <section className="mb-20">
        <motion.h2
          className="mb-4 text-4xl md:text-5xl font-extrabold text-center text-[#B71C1C]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Cổng thông tin về Dân tộc và Tôn giáo Việt Nam
        </motion.h2>
        <motion.p
          className="mb-6 text-lg text-center text-gray-800 md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Chào mừng bạn đến với cổng thông tin tổng hợp, cung cấp tư liệu,
          chính sách và các nghiên cứu về tôn giáo và dân tộc tại Việt Nam.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src={cover2}
            alt="Bản đồ Việt Nam"
            className="object-cover w-full max-w-4xl transition shadow-xl rounded-2xl hover:brightness-95"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </section>

    
      <section className="my-20 text-center">
        <motion.h2
          className="mb-6 text-4xl md:text-5xl font-bold text-[#B71C1C]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Về chúng tôi
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto mb-6 text-lg text-gray-700 md:text-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Website được thực hiện bởi nhóm sinh viên MLN131 - Nhóm 4, với mục tiêu
          chia sẻ kiến thức, chính sách và các tư liệu học thuật về dân tộc và tôn giáo ở Việt Nam.
        </motion.p>

        <ReadMoreButton onClick={handleReadMoreClick}>
          Nhấn vào đây để tìm hiểu thêm
        </ReadMoreButton>
      </section>

      <section className="mb-20">
        <h2 className="mb-8 text-4xl font-bold text-[#B71C1C] border-b-4 border-[#FBC02D] inline-block">
          Các Bài viết nổi bật
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            className="flex flex-col gap-3 md:col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/post/1">
              <img
                src={Family3}
                alt="Family"
                className="w-full rounded-xl h-[500px] object-cover shadow-lg hover:brightness-90 transition"
              />
            </Link>
            <p className="text-lg font-semibold text-gray-800">
              Thủ tướng Phạm Minh Chính chỉ đạo thúc đẩy phát triển vùng dân tộc thiểu số
            </p>
          </motion.div>

         
          <div className="flex flex-col gap-8">
            <motion.div
              className="flex flex-col gap-2"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/post/2">
                <img
                  src={PostImage1}
                  alt="Post 2"
                  className="w-full h-[220px] rounded-xl object-cover shadow-md hover:brightness-90 transition"
                />
              </Link>
              <p className="font-medium text-gray-700">
                Tăng cường quản lí nhà nước về hoạt động trên không gian mạng Việt Nam
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-2"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/post/3">
                <img
                  src={PostImage1}
                  alt="Post 3"
                  className="w-full h-[220px] rounded-xl object-cover shadow-md hover:brightness-90 transition"
                />
              </Link>
              <p className="font-medium text-gray-700">
                Làm sao để tôn giáo được quản lý chặt chẽ hơn nhằm đảm bảo an ninh xã hội?
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

const ReadMoreButton = ({ children, onClick }) => (
  <motion.div
    className="flex justify-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <motion.button
      onClick={onClick}
      className="px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#C62828] to-[#FBC02D] hover:from-[#FBC02D] hover:to-[#C62828] hover:shadow-2xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children} <span className="ml-2">→</span>
    </motion.button>
  </motion.div>
);

export default Homepage;
