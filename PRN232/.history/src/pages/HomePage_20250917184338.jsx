import React from "react";

function Homepage() {
  return (
    <div className="bg-[#FFFAE2] min-h-screen p-8">
      {/* Tiêu đề */}
      <h1 className="mb-10 text-6xl font-extrabold leading-tight">
        Hình ảnh của <br /> Đảng
      </h1>

      {/* Showcase */}
      <div className="grid items-center gap-8 mb-12 md:grid-cols-2">
        <div>
          <div className="px-4 py-3 mb-4 font-semibold text-white bg-red-600">
            Showcase về tinh thần của Đảng ta
          </div>
          <div className="px-4 py-3 font-semibold text-white bg-red-600">
            Truyền tải tinh thần yêu nước cho giới trẻ
          </div>
        </div>
        <div className="h-40 bg-gray-300 rounded-md"></div>
      </div>

      {/* Thông tin giới thiệu */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">
          Cổng thông tin về chủ nghĩa xã hội và chủ nghĩa Mác-Lênin
        </h2>
        <p className="mb-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Gravida elit malesuada ut
          aliquet. Ullamcorper ultrices tortor est semper tristique volutpat
          amet massa arcu. Elit lorem id est eleifend arcu tincidunt sit. At in
          morbi mauris molestie scelerisque lectus. Sed convallis nibh viverra
          mattis egestas faucibus. Aenean adipiscing posuere bibendum leo
          malesuada ut facilisi. Neque diam sit amet eros et molestie arcu
          ultrices.
        </p>
        <div className="h-32 bg-gray-300 rounded-md"></div>
      </section>

      {/* More about us */}
      <section className="mb-12">
        <h2 className="mb-2 text-xl font-bold">More about us</h2>
        <p className="text-gray-700">
          Cổng thông tin về chủ nghĩa xã hội và chủ nghĩa Mác-Lênin,
          Cổng thông tin về chủ nghĩa xã hội và chủ nghĩa Mác-Lênin,
          Cổng thông tin về chủ nghĩa xã hội và chủ nghĩa Mác-Lênin,
          Cổng thông tin về chủ nghĩa xã hội và chủ nghĩa Mác-Lênin.
        </p>
      </section>

      {/* Bài viết nổi bật */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Các Bài viết nổi bật</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex items-end h-32 p-2 text-sm bg-gray-300 rounded-md">
            Tại sao giới trẻ hiện nay
          </div>
          <div className="flex items-end h-32 p-2 text-sm bg-gray-300 rounded-md">
            Tại sao giới trẻ hiện nay
          </div>
          <div className="flex items-end h-32 p-2 text-sm bg-gray-300 rounded-md">
            Tại sao giới trẻ hiện nay
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
