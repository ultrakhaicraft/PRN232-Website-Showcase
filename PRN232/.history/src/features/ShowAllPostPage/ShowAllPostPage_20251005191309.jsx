<div
  className="flex flex-col justify-between bg-white rounded-xl shadow-lg overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl duration-300 min-h-[480px]"
>
  <img
    src={post.image}
    alt={post.title}
    className="w-full h-[200px] object-cover"
  />

  <div className="flex flex-col justify-between flex-grow p-5">
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
      <h3 className="mb-2 text-lg font-bold text-gray-800 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">
        {post.excerpt}
      </p>
    </div>

    <a
      href={`/post/${post.id}`}
      className="mt-4 text-sm font-semibold text-red-600 transition-colors hover:text-yellow-600"
    >
      Read More →
    </a>
  </div>
</div>
