import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <motion.div
      className="flex flex-col justify-between bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 min-h-[500px]"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hình ảnh */}
      <Link to={`/post/${post.id}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[220px] object-cover"
        />
      </Link>

      {/* Nội dung */}
      <div className="flex flex-col justify-between flex-grow p-5">
        {/* Category tag */}
        <div>
          <span
            className={`inline-block px-3 py-1 mb-2 text-sm font-semibold rounded-full ${
              post.category === "Tôn giáo"
                ? "bg-orange-100 text-orange-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {post.category}
          </span>

          <p className="mb-2 text-sm text-gray-500">
            {post.date} • {post.readTime}
          </p>

          <h3 className="mb-1 text-lg font-bold leading-snug text-gray-800 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">
            {post.excerpt}
          </p>
        </div>

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
