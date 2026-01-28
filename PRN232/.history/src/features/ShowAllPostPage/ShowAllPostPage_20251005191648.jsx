import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <motion.div
      className="flex flex-col justify-between bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 min-h-[520px] max-h-[520px]"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* ====== ẢNH ====== */}
      <Link to={`/post/${post.id}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[220px] object-cover"
        />
      </Link>

      {/* ====== NỘI DUNG ====== */}
      <div className="flex flex-col justify-between flex-grow p-5">
        {/* Category */}
        <span
          className={`inline-block px-3 py-1 mb-2 text-sm font-semibold rounded-full ${
            post.category === "Tôn giáo"
              ? "bg-orange-100 text-orange-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {post.category}
        </span>

        {/* Meta info */}
        <p className="mb-2 text-sm text-gray-500">
          {post.date} • {post.readTime}
        </p>

        {/* Title */}
        <h3 className="mb-1 text-lg font-bold leading-snug text-gray-800 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt – chỉ hiển thị 2 dòng */}
        <p className="text-sm leading-relaxed text-gray-600 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Read More */}
        <Link
          to={`/post/${post.id}`}
          className="inline-block mt-4 text-sm font-semibold text-red-600 transition-colors hover:text-yellow-600"
        >
          Read More →
        </Link>
      </div>
    </motion.div>
  );
};

export default PostCard;
