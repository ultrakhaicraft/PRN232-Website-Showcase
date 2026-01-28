// components/PostCard.jsx
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 min-h-[520px] max-h-[520px]">
      {/* Ảnh và category */}
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[220px] object-cover"
        />
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
            post.category === "Tôn giáo"
              ? "bg-orange-600 text-white"
              : "bg-amber-600 text-white"
          }`}
        >
          {post.category}
        </span>
      </div>

      <div className="flex flex-col justify-between flex-grow p-5">
        <div className="mb-1 text-sm text-gray-500">
          {post.date} • {post.readTime}
        </div>

        <h2 className="mb-2 text-lg font-semibold text-gray-800 line-clamp-2">
          {post.title}
        </h2> 
        <p className="mb-3 text-sm text-gray-600 line-clamp-2">
          {post.excerpt}
        </p>

        {post.author && (
          <div className="mb-3 text-sm font-medium text-gray-700">
            {post.author}
          </div>
        )}
        
        <Link
          to={post.path}
          className="mt-auto inline-block text-sm font-semibold text-[#C62828] hover:text-[#FBC02D] transition-colors"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
