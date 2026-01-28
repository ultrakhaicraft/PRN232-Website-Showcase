import React from "react";
import PostParagraph from "@/components/PostParagraph";

// Import ảnh (lưu ở src/assets/post2/)
import ImgKeyboard from "@/assets/post2/keyboard.png";
import ImgLawBook from "@/assets/post2/lawbook.png";
import ImgPrayer from "@/assets/post2/prayer.png";
import ImgLeaders from "@/assets/post2/leaders.png";

const Post2 = () => {
  return (
    <div className="min-h-screen bg-[#FAF7E6]">
      <div className="max-w-5xl px-6 py-8 mx-auto">
        
        {/* Header */}
        <header className="mb-6">
          <p className="pb-1 text-sm text-gray-600 border-b border-gray-300">
            Thứ Sáu, 26/09/2025 | 22:30
          </p>
        </header>

        {/* Title */}
        <h1 className="mb-6 text-4xl font-bold text-center">
          Tăng cường quản lí nhà nước về hoạt động tôn giáo trên không gian mạng Việt Nam hiện nay
        </h1>

        {/* Content */}
        <PostParagraph text="Không gian mạng ngày nay đã trở thành một môi trường có vai trò quan trọng trong đời sống văn hóa - xã hội, trong đó bao gồm các hoạt động tôn giáo. Nhiều tổ chức, cá nhân đã tận dụng môi trường này để truyền bá giáo lý, sinh hoạt tín ngưỡng cũng như các hoạt động gắn kết cộng đồng và các hoạt động nhân đạo khác như từ thiện,.. Nhờ vậy mà đông đảo người dân, nhất là các bạn trẻ dễ dàng tiếp cận cũng từ đó mà các giá trị tích cực được lan tỏa trong xã hội." className="mb-4" />
        <PostParagraph text="Cùng với những mặt tốt đẹp, vẫn còn đó những hành vi vi phạm pháp luật liên quan đến tôn giáo đã và đang diễn ra trên không gian mạng với diễn biến ngày càng phức tạp. Tiêu biểu như tình trạng trục lợi kinh tế, xuyên tạc giáo lý, truyền bá những “đạo lạ” trái ngược với giá trị văn hóa truyền thống. Vì thế, việc tăng cường quản lý nhà nước đối với các hoạt động tôn giáo trên mạng xã hội trở thành yêu cầu cấp thiết nhằm đảm bảo quyền tự do tín ngưỡng tôn giáo và giữ vững an ninh trật tự, ổn định xã hội, bảo vệ nền tảng tư tưởng Đảng." className="mb-6" />

        {/* Image 1 */}
        <div className="my-6">
          <img src={ImgKeyboard} alt="Không gian mạng và tôn giáo" className="w-full rounded-lg shadow" />
          <p className="mt-2 text-sm text-center text-gray-700">“Không gian mạng không thể là một lĩnh vực không có luật pháp”</p>
        </div>

        {/* Main Sections */}
        <h2 className="mb-4 text-xl font-bold">Một là, xây dựng chính sách và hệ thống pháp luật trong quản lý tôn giáo.</h2>
       

        {/* Image 2 */}
       <div className="flex my-6">
  <img 
    src={ImgLawBook} 
    alt="Luật Tín ngưỡng, Tôn giáo" 
    className="w-40 h-auto mr-4 rounded-lg shadow" 
  />
  <p className="mb-5 text-l">
     Nhà nước đã ban hành nhiều văn bản pháp lý quan trọng, như: Luật Tín ngưỡng, tôn giáo năm 2016; Nghị định số 162/2017/NĐ-CP ngày 30/12/2017 quy định chi tiết và biện pháp thi hành Luật Tín ngưỡng, tôn giáo; Nghị định số 95/2023/NĐ-CP ngày 29/12/2023 quy định chi tiết một số điều và biện pháp thi hành Luật Tín ngưỡng, tôn giáo; Luật Công nghệ thông tin 2006; Bộ luật Hình sự 2015; Luật Tiếp cận thông tin 2016; Luật An ninh mạng 2018. Hệ thống quy định này tạo dựng khung pháp lý toàn diện và chặt chẽ, vừa bảo đảm quyền tự do tín ngưỡng, tôn giáo, vừa ngăn chặn tình trạng phát tán thông tin sai lệch, xuyên tạc hoặc kích động gây chia rẽ.

  </p>
</div>


        <h2 className="mb-4 text-xl font-bold">Hai là, kiện toàn bộ máy tổ chức quản lý và bảo đảm an ninh mạng.</h2>
        <PostParagraph text="Ngày 26/02/2025, Bộ Dân tộc và Tôn giáo được thành lập, đảm nhận chức năng quản lý nhà nước về lĩnh vực dân tộc, tín ngưỡng, tôn giáo. Đây là bước đi quan trọng... Bộ Công an, Bộ KH&CN, cùng các tổ chức tôn giáo như Giáo hội Phật giáo, Hội đồng Giám mục Việt Nam, Hội thánh Tin lành… phối hợp ban hành quy tắc truyền thông nội bộ và xử lý vi phạm." className="mb-6" />

        <h2 className="mb-4 text-xl font-bold">Ba là, bảo đảm quyền tự do tín ngưỡng, tôn giáo trên môi trường số.</h2>
        <PostParagraph text="Việt Nam hiện có trên 26,5 triệu tín đồ, chiếm khoảng 27% dân số, thuộc 16 tôn giáo khác nhau. Nhà nước công nhận 36 tổ chức tôn giáo... Hoạt động tôn giáo trên mạng trở nên đa dạng, từ “đi lễ online”, “cúng dường online”, “cúng giỗ online” đến “từ thiện online”. Thậm chí, đã xuất hiện khái niệm “giáo sĩ người máy” (robot clergy) với thuyết pháp trực tuyến bằng công nghệ AI." className="mb-6" />

       

        <h2 className="mb-4 text-xl font-bold">Bốn là, sự quan tâm của hệ thống chính trị đối với công tác tín ngưỡng, tôn giáo.</h2>
        <PostParagraph text="Các cấp, ngành đã chủ động tham mưu, kịp thời phát hiện và xử lý vi phạm pháp luật liên quan đến tôn giáo, tạo sự đồng thuận... Chính quyền địa phương cũng chú trọng hướng dẫn tổ chức tôn giáo hoạt động đúng quy định pháp luật." className="mb-6" />

        <h2 className="mb-4 text-xl font-bold">Năm là, đào tạo, bồi dưỡng cán bộ làm công tác tôn giáo.</h2>
        <PostParagraph text="Hàng năm, công tác tập huấn được tổ chức rộng khắp với 216 hội nghị tập huấn, 28.100 lượt cán bộ tham dự... Qua đó, đội ngũ cán bộ được trang bị kiến thức, nâng cao kỹ năng nghiệp vụ và phương pháp xử lý tình huống." className="mb-6" />

        <h2 className="mb-4 text-xl font-bold">Sáu là, thanh tra, kiểm tra, xử lý vi phạm trong lĩnh vực tôn giáo trên không gian mạng.</h2>
        <PostParagraph text="Thông tư 04/2016/TT-BNV ngày 10/6/2016 đã hướng dẫn nội dung thanh tra chuyên ngành về tôn giáo. Hoạt động thanh tra, kiểm tra được tiến hành thường xuyên... góp phần xây dựng môi trường số tích cực, bảo đảm quyền bình đẳng giữa các tôn giáo." className="mb-6" />
 {/* Image 3 */}
        <div className="my-6">
          <img src={ImgPrayer} alt="Một số hiện tượng tôn giáo bị xử lý" className="w-full rounded-lg shadow" />
          <p className="mt-2 text-sm text-center text-gray-700">Một số hiện tượng tôn giáo vi phạm bị xử lý</p>
        </div>
        <PostParagraph text="Mặc dù đạt nhiều kết quả, công tác quản lý nhà nước với hoạt động tôn giáo trên không gian mạng vẫn còn hạn chế: thiếu quy định chi tiết cho giảng pháp, nghi lễ livestream; khó xác minh vi phạm mê tín tà đạo; hạn chế phối hợp liên ngành; tốc độ phản bác thông tin xuyên tạc còn chậm..." className="mb-6" />

       

        {/* Conclusion */}
        <h2 className="mb-4 text-xl font-bold">Tóm lại</h2>
        <PostParagraph text="Giải pháp tăng cường quản lý nhà nước về hoạt động tôn giáo trên không gian mạng tập trung vào hoàn thiện pháp luật, bổ sung quy định giảng pháp, lễ nghi, quyên góp trực tuyến, định danh tài khoản; tăng cường phối hợp liên ngành, nâng cấp giám sát an toàn mạng, ứng dụng AI và phân tích dữ liệu lớn để xử lý kịp thời vi phạm." className="mb-6" />

        
         {/* Image 4 */}
        <div className="my-6">
          <img src={ImgLeaders} alt="Lãnh đạo gặp gỡ các tôn giáo" className="w-full rounded-lg shadow" />
          <p className="mt-2 text-sm text-center text-gray-700">Gặp gỡ đại diện các tôn giáo</p>
        </div>
        {/* Hiến pháp */}
        <div className="p-4 my-6 bg-gray-100 border border-gray-300 rounded">
          <p className="italic">
            Điều 24 Hiến pháp năm 2013 khẳng định: “Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào, các tôn giáo bình đẳng trước pháp luật. Nhà nước tôn trọng và bảo hộ quyền tự do tín ngưỡng, tôn giáo. Không ai được xâm phạm tự do tín ngưỡng, tôn giáo hoặc lợi dụng tín ngưỡng, tôn giáo để vi phạm pháp luật”.
          </p>
        </div>

        {/* Reference */}
        <div className="mt-8">
          <h1 className="text-2xl font-bold">Các nguồn tham khảo</h1>
          <ul className="pl-6 mt-2 space-y-2 text-blue-600 list-disc">
            <li><a href="https://www.quanlynhanuoc.vn/2025/07/24/tang-cuong-quan-ly-nha-nuoc-ve-hoat-dong-ton-giao-tren-khong-gian-mang-o-viet-nam-hien-nay/">Tăng cường quản lý nhà nước về hoạt động tôn giáo trên không gian mạng</a></li>
            <li><a href="https://congthuong.vn/quan-ly-nha-nuoc-ra-sao-doi-voi-hien-tuong-lan-truyen-ta-dao-tren-mang-365944.html">Quản lý nhà nước ra sao đối với hiện tượng lan truyền tà đạo trên mạng?</a></li>
            <li><a href="https://tcnn.vn/news/detail/63198/Tu-do-tin-nguong-ton-giao-tren-khong-gian-mang.html">Tự do tín ngưỡng, tôn giáo trên không gian mạng</a></li>
            <li><a href="https://www.tapchicongsan.org.vn/.../nhan-dien-va-phan-bac-luan-dieu-xuyen-tac">Nhận diện và phản bác luận điệu xuyên tạc, chống phá chính sách tự do tín ngưỡng</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Post2;
