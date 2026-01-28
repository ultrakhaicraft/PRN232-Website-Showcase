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
    <div className="bg-[#FFF8E7] min-h-screen py-12">
      {/* ===== HEADER ===== */}
      <motion.div
        className="max-w-5xl mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-[#B71C1C] via-[#E53935] to-[#FBC02D] drop-shadow-[0_3px_4px_rgba(0,0,0,0.3)]">
          TẤT CẢ SỰ KIỆN & BÀI VIẾT
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Cập nhật các thông tin, chính sách và bài viết mới nhất về Dân tộc và
          Tôn giáo ở Việt Nam.
        </p>
      </motion.div>

      {/* ===== CATEGORY FILTER ===== */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 px-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            whileHover={{ scale: 1.05 }}
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
        className="grid max-w-6xl gap-8 px-6 mx-auto md:grid-cols-3 sm:grid-cols-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
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
