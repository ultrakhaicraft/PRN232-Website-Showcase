import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Family3 from "@/assets/PostImage3.jpg";
import PostImage1 from "@/assets/Dang1.jpg";
import HinhAnhHCM from "@/assets/HinhAnhHCM.png";
import cover2 from "@/assets/cover2.png";

export default function Homepage() {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#FFF8E7] via-[#FFF3C4] to-[#FFE57F]">
      {/* ✨ Moving background light */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        animate={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(255,213,79,0.3), transparent 70%), radial-gradient(circle at 70% 60%, rgba(183,28,28,0.25), transparent 70%)",
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <div className="relative z-10 p-8">
        {/* ===== HEADER ===== */}
        <motion.div
          className="relative mb-16 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="relative z-20 mb-6 text-5xl md:text-6xl font-extrabold leading-snug bg-clip-text text-transparent bg-gradient-to-r from-[#C62828] via-[#E53935] to-[#FBC02D]"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="block text-4xl tracking-wide md:text-5xl"
              animate={{ textShadow: ["0 0 10px #FFEB3B", "0 0 0px transparent"] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              DÂN TỘC VÀ TÔN GIÁO
            </motion.span>
            <span className="block mt-2 text-3xl font-bold text-yellow-700 md:text-4xl">
              TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
            </span>
          </motion.h1>

          <motion.img
            src={HinhAnhHCM}
            alt="Hồ Chí Minh"
            className="w-full max-w-3xl mx-auto rounded-2xl border-4 border-[#FBC02D]/70 shadow-xl"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* ===== SECTION 1 ===== */}
        <section className="mb-20 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#B71C1C] mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cổng thông tin về Dân tộc và Tôn giáo Việt Nam
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto mb-8 text-lg text-gray-700 md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nơi chia sẻ tư liệu, chính sách, và các nghiên cứu học thuật về tôn
            giáo và dân tộc tại Việt Nam — hướng đến hiểu biết, đoàn kết và phát
            triển.
          </motion.p>

          <motion.img
            src={cover2}
            alt="Bản đồ Việt Nam"
            className="w-full max-w-4xl mx-auto transition-all shadow-2xl rounded-2xl hover:brightness-95"
            whileHover={{ scale: 1.04 }}
          />
        </section>

        {/* ===== SECTION 2 ===== */}
        <section className="my-24 text-center">
          <motion.h2
            className="mb-6 text-4xl md:text-5xl font-bold text-[#B71C1C]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Về chúng tôi
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto mb-8 text-lg text-gray-700 md:text-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Website được thực hiện bởi nhóm sinh viên{" "}
            <strong className="text-[#C62828]">MLN131 - Nhóm 4</strong>, với mục
            tiêu cung cấp nguồn tư liệu đáng tin cậy về dân tộc và tôn giáo ở
            Việt Nam.
          </motion.p>

          <motion.button
            onClick={handleReadMoreClick}
            className="px-8 py-4 text-lg font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-[#C62828] to-[#FBC02D] hover:from-[#FBC02D] hover:to-[#C62828]"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(251,192,45,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Nhấn để tìm hiểu thêm →
          </motion.button>
        </section>

        {/* ===== SECTION 3 ===== */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#B71C1C] mb-8 border-b-4 border-[#FBC02D] inline-block">
            Các bài viết nổi bật
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="relative overflow-hidden shadow-lg md:col-span-2 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/post/1">
                <motion.img
                  src={Family3}
                  alt="Post 1"
                  className="object-cover w-full h-[500px]"
                  whileHover={{ scale: 1.05 }}
                />
              </Link>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-lg font-semibold">
                  Thủ tướng Phạm Minh Chính chỉ đạo thúc đẩy phát triển vùng dân
                  tộc thiểu số
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col gap-8">
              {[2, 3].map((id, i) => (
                <motion.div
                  key={id}
                  className="overflow-hidden shadow-md rounded-xl"
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/post/${id}`}>
                    <img
                      src={PostImage1}
                      alt={`Post ${id}`}
                      className="w-full h-[220px] object-cover"
                    />
                  </Link>
                  <p className="p-3 font-medium text-gray-800 bg-white">
                    {i === 0
                      ? "Tăng cường quản lý hoạt động tôn giáo trên không gian mạng Việt Nam"
                      : "Làm sao để tôn giáo được quản lý chặt chẽ nhằm đảm bảo an ninh xã hội?"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
