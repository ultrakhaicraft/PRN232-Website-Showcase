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
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-2">All Stories</h1>
      <p className="text-center text-gray-600 mb-8">
        A collection of timeless tales and thoughtful musings from our vintage journal
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
      <div className="grid md:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}


export default ShowAllPostPage;