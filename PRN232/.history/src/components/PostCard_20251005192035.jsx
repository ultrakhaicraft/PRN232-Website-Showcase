// components/PostCard.jsx
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="group flex flex-col justify-between bg-white/90 rounded-2xl shadow-md overflow-hidden 
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white min-h-[520px]">
      
      {/* === ẢNH === */}
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/40 to-transparent group-hover:opacity-100"></div>

        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
            post.category === "Tôn giáo"
              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
              : "bg-gradient-to-r from-amber-500 to-yellow-400 text-white"
          }`}
        >
          {post.category}
        </span>
      </div>

      {/* === NỘI DUNG === */}
      <div className="flex flex-col justify-between flex-grow p-5">
        {/* Meta info */}
        <div className="mb-1 text-xs text-gray-500 md:text-sm">
          {post.date} • {post.readTime}
        </div>

        {/* Tiêu đề */}
        <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#C62828] transition-colors">
          {post.title}
        </h2>

        {/* Đoạn trích (Excerpt) */}
        <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Tác giả */}
        {post.author && (
          <div className="mb-4 text-sm italic font-medium text-gray-700">
            {post.author}
          </div>
        )}

        {/* Nút đọc thêm */}
        <Link
          to={post.path}
          className="mt-auto inline-block w-fit text-sm font-semibold text-[#C62828] hover:text-[#FBC02D] 
                     transition-colors border-b-2 border-transparent hover:border-[#FBC02D]"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
