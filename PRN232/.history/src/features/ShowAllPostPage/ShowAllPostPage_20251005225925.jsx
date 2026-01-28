import React, { useState } from "react";
import { motion } from "framer-motion";
import PostCard from "../../components/PostCard";
import { posts, categories } from "./Postdata";

const ShowAllPostPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FFF8E7] via-[#FFF3C4] to-[#FFE57F] py-16 overflow-hidden">

      {/* Background accent light */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        animate={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(255,213,79,0.3), transparent 70%), radial-gradient(circle at 70% 60%, rgba(183,28,28,0.25), transparent 70%)",
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* ===== HEADER ===== */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mt-6 text-transparent bg-clip-text bg-gradient-to-r from-[#B71C1C] via-[#E53935] to-[#FBC02D] drop-shadow-[0_3px_5px_rgba(0,0,0,0.3)]"
          animate={{
            textShadow: ["0 0 10px #FBC02D", "0 0 0px transparent"],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          TẤT CẢ SỰ KIỆN & BÀI VIẾT
        </motion.h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-700">
          Nơi cập nhật các thông tin, chính sách và bài viết mới nhất về{" "}
          <span className="text-[#B71C1C] font-semibold">Dân tộc</span> và{" "}
          <span className="text-[#E53935] font-semibold">Tôn giáo</span> tại Việt Nam.
        </p>
      </motion.div>

      {/* ===== CATEGORY FILTER ===== */}
      <motion.div
        className="relative z-10 flex flex-wrap justify-center gap-3 px-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 12px rgba(251,192,45,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 
              ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#C62828] to-[#FBC02D] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-[#FFF3CD] border border-gray-200"
              }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* ===== POST GRID ===== */}
      <motion.div
        className="relative z-10 grid max-w-6xl gap-8 px-6 mx-auto sm:grid-cols-2 md:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{
                scale: 1.03,
                rotate: 0.3,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
              className="transition-transform"
            >
              <PostCard post={post} />
            </motion.div>
          ))
        ) : (
          <div className="italic text-center text-gray-500 col-span-full">
            Không có bài viết nào thuộc danh mục này.
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ShowAllPostPage;
