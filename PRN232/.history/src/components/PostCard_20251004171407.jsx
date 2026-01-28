// components/PostCard.jsx
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
          {post.category}
        </span>
      </div>
      <div className="p-4">
        <div className="text-gray-500 text-sm mb-1">
          {post.date} • {post.readTime}
        </div>
        <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
        <div className="text-sm font-medium text-gray-700 mb-2">
          {post.author}
        </div>
        <Link
          to={post.path}
          className="text-amber-600 font-medium hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
