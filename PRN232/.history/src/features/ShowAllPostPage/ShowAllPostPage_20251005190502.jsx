import React, { useState } from "react";
import PostCard from "../../components/PostCard";
import { posts, categories } from "./Postdata";

const ShowAllPostPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts =
        selectedCategory === "All"
        ? posts
        : posts.filter((p) => p.category === selectedCategory);

     return (
    <div className="max-w-6xl px-4 py-10 mx-auto">
      <h1 className="mb-2 text-3xl font-bold text-center">TẤT CẢ SỰ KIỆN</h1>
      <p className="mb-8 text-center text-gray-600">
        những thông tin và tin tức được cấp nhập mới nhất của chúng tôi
      </p>

      {/* Category Filter */}
      <div className="flex justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-md font-medium transition ${
              selectedCategory === cat
                ? "bg-amber-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}


export default ShowAllPostPage;