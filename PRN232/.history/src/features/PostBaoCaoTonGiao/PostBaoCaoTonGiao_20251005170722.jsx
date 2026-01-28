import React from "react";
import PostImage1 from "../../assets/images/post-image-1.jpg";
import PostParagraph from "../../components/PostParagraph";
import PostImage from "@/assets/components/PostImage";
import PieChartTonGiao from "../../components/PieChartTonGiao.png";
import ImageOfAManDoingStuff from "../../assets/images/ImageOfAManDoingStuff.jpg";

import ImgCover1 from "@/assets/post4/cover1.png"; // múa lân, chùa
import ImgCover2 from "@/assets/post4/cover2.png"; // đông người viếng
import ImgCover3 from "@/assets/post4/cover3.png"; // chùa ban đêm
import ImgCover4 from "@/assets/post4/cover4.png"; // ảnh bìa

const PostBaoCaoTonGiao = () => {
  return (
    <div className="min-h-screen bg-[#FAF7E6]">
      <div className="max-w-8xl mx-auto px-6 py-8 bg-[#FAF7E6]">
        {/* Header */}
        <header className="mb-6">

          <p className="pb-1 text-sm text-gray-600 border-b border-gray-300">
            Thứ Năm, 02/10/2025 | 07:30
          </p>
        </header>

        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold text-center">
          Hiện trạng tôn giáo và chính sách tôn giáo hiện nay ở Việt Nam năm 2024

        </h1>

        {/* First Paragraph */}
        <PostParagraph text='Từ năm 2022 cho đến nay, tình trạng tôn giáo hiện nay đang theo hướng tốt và phát triển so với thời kỳ trước, kể cả các năm trước. Bài viết này sẽ nói đến những đặc điểm về Tôn giáo hiện nay, cũng như là thử thách và hướng đi tương lại sau này.' className='mb-4 font-semibold' />


        <h2 className="font-bold">I/Thông số</h2>
        <p>Theo các nguồn tin, từ năm 2022 cho đến hôm nay, tôn giáo tại Việt Nam có các con số như sau:</p>
        <ul className="mb-4 list-disc list-inside">
          <li>Có 16 tôn giáo được công nhận bởi Nhà Nước</li>
          <li>Khoảng 145,000 chức việc và hơn 54,500 chức sắc</li>
          <li>Dự đoán sẽ tiến gần 28 triệu tín đồ trong năm 2025 so với 27,7 triệu tín đồ trong năm 2023</li>
          <li>Có 43 tổ chức được công nhận hoặc cấp đăng ký hoạt động tôn giáo</li>
          <li>Cơ sở thờ tự đã lên tới 29.890 nơi</li>
        </ul>

        <PostImage src={PieChartTonGiao} caption="Số lượng người theo các tôn giáo theo % (2022-2025)" className="my-6" />

        <ul className="mb-4 list-disc list-inside">
          <li>-Không theo đạo: 72,78% - 74,042,080 dân</li>
          <li>-Số người theo đạo: 27,22% - 27,700,000 dân</li>
          <li>+Phật giáo: 14 triệu dân</li>
          <li>+Công giáo: 7 triệu dân</li>
          <li>+Tin Lành: 1,2 triệu dân</li>
          <li>+Cao Đài: 1,2 triệu dân</li>
          <li>+Hòa Hảo: 1,5 triệu dân</li>
          <li>+Các tôn giáo khác: 873,450 dân</li>
        </ul>

        <h2 className="font-bold">II/ Đặc điểm tôn giáo hiện nay</h2>



        <PostParagraph text='Có sự đa dạng, đan xen, là một phương tiện để chung sống hòa bình và không có xung đột, chiến tranh tôn giáo. Bởi vì nước Việt Nam có nhiều tôn giáo khác nhau, đều có nguồn gốc và quá trình phát triển khác nhau trong thời gian lịch sự nên sự gắn bó cũng khác nhau. Mọi người trong tôn giáo khi du nhập thường bản địa hóa, nghĩa là chung sống và hòa hợp với các tín đồ của tôn giáo khác trên một bàn địa. Luôn có một sự tôn trọng miền tin với nhau. Một ví dụ điển hình là Hồ Chi Minh có rất nhiều chùa cũng như là nhà thờ, với các người dân theo Phật và Công giáo sống cũng nhau.' className='mb-4 font-semibold' />

        <PostParagraph text='Hầu như các tín đồ, người theo tôn giáo là nhân dân lao động, có lòng yêu nước, tinh thần dân tộc. Tín đồ có thành phần chủ yếu là người dân lao động, có tinh thần chống giặc, yêu nước, tôn trọng công lý, gắn bó với nhau và đi theo Đảng, hăng hái xây dựng bảo vệ Tổ Quốc. Trong lịch sử, nhiều nhân dân từ các tôn giáo khác nhau đã làm nên những thắng lợi to lớn, vẻ vang dân tộc' className='mb-4 font-semibold' />
        <PostParagraph text='Chủ tịch nước Nguyễn Xuân dã nêu rõ “lịch sử Việt Nam luôn ghi nhận những đóng góp to lớn của Đạo Phật đối với dân tộc, trong đó có sự nghiệp giải phóng dân tộc, thống nhất đất nước trước đây cũng như xây dựng, bảo vệ Tổ quốc ngày nay. Lấy phương châm “Phật pháp bất ly thế gian giác”, “hộ quốc, an dân” cho đường hướng hành đạo, Phật giáo luôn luôn là thành viên tin cậy, có nhiều đóng góp quan trọng trong khối đại đoàn kết toàn dân tộc.” Và Thủ tướng Nguyễn Xuân Phúc nói. “Các chuẩn mực đạo đức tích cực, nhân bản của tôn giáo đã dung nạp vào đời sống xã hội, góp phần tạo nên những chuẩn mực đạo đức, văn hóa ứng xử nhân văn, nhân ái của dân tộc ta, như Bác Hồ từng nói: “Chúa Giêsu dạy: Đạo đức là bác ái, Phật Thích Ca dạy: Đạo đức là từ bi, Khổng Tử dạy: Đạo đức là nhân nghĩa”, ' className='mb-4 font-semibold' />

        <PostImage src={ImageOfAManDoingStuff} caption="" className="my-6" />

        <PostParagraph text='Chức sắc tôn giáo đóng vai trò quan trọng trong giáo hội, có uy tín, và ảnh hưởng tới người dân theo giáo (tín đồ), họ tự nguyện thực hiện thường xuyên nếp sống riêng theo giáo lý, giáo luật của tôn giáo mà họ tin theo. Họ là người truyền bá, thực hành giáo lý, giáo luật, lễ nghi, quản lý tổ chức của tôn giáo, họ có nhiệm vụ để duy trì, củng cố, và phát triển tôn giáo' className='mb-4 font-semibold' />

        <PostParagraph text='Các tôn giáo ở Việt Nam đều có quan hệ với các tổ chức, cá nhân tôn giáo ở nước ngoài. Đặc biệt, Nhà Nước Việt Nam đã thiết lập quan hệ ngoại giao với gần 200 quốc gia và vùng lãnh thổ trên toàn thế giới. Đại lễ Phật đản Vesak Liên hợp quốc 2008 được diễn ra tại Hà Nội đã chứng minh rằng Việt Nam là một nước muốn hòa bình, làm bạn với tất cả các nước trên thế  giới và tích cực góp phần xây dựng thế giới hòa bình.' className='mb-4 font-semibold' />

        <PostParagraph text='Vì vậy, để giải quyết các vấn đề tôn giáo ở Việt Nam thì nên mở rộng giao lưu hợp tác quốc tế với việc bảo đảm độc lập, chủ quyền, không cho ai lợi dụng để âm mưu “diễn biến hòa bình” đối với nước ta' className='mb-4 font-semibold' />

        <h2 className="font-bold">III/ Chính sách của Đảng và Nhà Nước Việt Nam về tôn giáo và hoạt động tôn giáo</h2>

        <PostParagraph text='Quyền tự do tín ngưỡng, tôn giáo luôn được Nhà nước Việt Nam tôn trọng và được khẳng định trong văn bản có giá trị pháp lý cao nhất – Hiến pháp, ghi rõ trong Điều 10  Hiến pháp nước Việt Nam Dân chủ Cộng hòa năm 1946: “Công dân Việt Nam có quyền: tự do ngôn luận, tự do xuất bản, tự do tổ chức và hội họp, tự do tín ngưỡng, tự do cư trú, đi lại trong nước và ra nước ngoài”. Năm 2013 có bổ sung chi tiết thêm trong Điều 24: “1. Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào. Các tôn giáo bình đẳng trước pháp luật; 2. Nhà nước tôn trọng và bảo hộ quyền tự do tín ngưỡng, tôn giáo; 3. Không ai được xâm phạm tự do tín ngưỡng, tôn giáo hoặc lợi dụng tín ngưỡng, tôn giáo để vi phạm pháp luật.”. Việc thừa nhân quyền tự do tín ngưỡng, tôn giáo trong Hiến Pháp là một lý do lớn nhất để có thể xây dựng mối quan hệ ổn định và bên vững với các tổ chức tôn giáo và người tín đồ, tạo ra sự đoàn kết quần chung.' className='mb-4 font-semibold' />

        <PostParagraph text='Tiếp đó, Nhà nước thực hiện nhất quán chính sách đại đoàn kết dân tộc, nhất là đoàn kết người đồng bào không và có đi theo tôn giáo. Thông qua quá trình vận động cả nhân dân tham gia lao động vì lợi ích xã hội thực tiễn, nâng cao đời sống vật chất, tinh thần, và trình độ kiến thức để tăng cường sự đoàn kết vì mục tiêu “dân giàu, nước mạnh, dân chủ, công bằng, văn minh”. Mọi công dân không phân biệt tín ngưỡng, tôn giáo đều có quyền và nghĩa vụ xây dựng, bảo vệ Tổ Quốc' className='mb-4 font-semibold' />
        <PostParagraph text='Công tác vận động quần chúng là trọng tâm cho việc động viên đồng bào yêu nước, ý thức bảo vệ độc lập và thống nhất của đất nước. Nhà nước đã đẩy mạnh phát triển kinh tế xã hội, văn hóa vùng đồng bào theo các tôn giáo để nâng cao trình độ phát triển gần hơn với hiện đại. Đồng thời, nhận thức nhân dân đúng đắn về đường lối, chính sách và pháp luật của Đảng.' className='mb-4 font-semibold' />
        <PostParagraph text='Làm tốt công tác tôn giáo là trách nhiệm của toàn bộ hệ thống chính trị bao gồm hệ thống tổ chức Đảng, chính quyền, và đoàn thể chính trị do Đảng lãnh đạo. Nhà nước đã tăng cường công tác quản lý nhà nước đối với các tôn giáo và đấu tranh với hoạt động lợi dụng tôn giáo gây hại cho lợi ích Nhà Nước và Nhân dan' className='mb-4 font-semibold' />

        <h2 className="font-bold">IV/ Thử thách và hướng giải pháp hiện nay</h2>

        <PostParagraph text='Kinh tế xã hội hiện nay đang gặp nhiều khó khăn, không chỉ ở trong Việt Nam, mà là toàn cầu. Sự bất ổn định về kinh tế sẽ gây tác động xấu tới tư tưởng của nhân dân ta, nhất là về phía tôn giáo và cả tư tưởng với Đảng. Sự bất ổn định là do sự xung đột giữa các nước quốc tế mà có khả năng ảnh hưởng tới kinh tế xã hội ta như là Thuế quan của tổng thống Mỹ Donald Trump. Chính vì thể, Nhà Nước Việt Nam đã chủ động phát triển cơ sở hạ tầng kinh tế, nhất tại các nơi kém phát triển. Thi hành chính sách vừa phát triển kinh tế, vừa phát triển trình độ của nhân dân.' className='mb-4 font-semibold' />

        <PostParagraph text='Sử dụng mạng xã hội và không gian mạng để lợi dung tôn giáo. Hiện này công nghệ số đang thịnh hành trên đất nước ta, như là Internet, Facebook, Instagram và Tiktok. Về mặt tốt, thì chúng ta có thể sử dụng các không gian mạng để truyền bà điều hay và tốt về Tôn giáo cho người dân và tạo ra những các tư liệu thông tin và tin tức về tôn giáo ấy, về mặt khác thì có tình trạng lợi dụng các trang mạng xã hội để làm những hoạt động tôn giáo có hại như là tuyên truyền mê tín dị đoan, xúc phạm và chia rẽ tín ngưỡng tôn giáo, và có thể chống phá Việt Nam, đòi thành lập “nhà nước riêng, tôn giáo riêng” và hơn thế nữa. Để chống các hoạt động này, thì người dân nên nhân thức các tổ chức và hoạt động tôn giáo có hại và báo cáo cho công án. Nhà nước cần đẩy mạng công tác quản lý tôn giáo trên không gian mạng và chủ động bắt các hoạt động lợi dụng tôn giáo, củng cố mối quan hệ giữa người tôn giáo với nhau, với người không tôn giáo' className='mb-4 font-semibold' />

        <h2 className="font-bold">Kết luận</h2>

        <PostParagraph text='Tôn giáo là hiện tượng xã hội có nguồn gốc phức hợp — tự nhiên, kinh tế-xã hội, nhận thức và tâm lý. Trong thời kỳ quá độ lên chủ nghĩa xã hội, chủ nghĩa Mác–Lênin cung cấp phương pháp luận khoa học để hiểu và xử lý vấn đề tôn giáo: không theo đuổi đàn áp, mà phải kết hợp tôn trọng quyền tự do tín ngưỡng với biện pháp xã hội-kinh tế, giáo dục và quản lý nhằm khắc phục nguyên nhân sinh ra ảo tưởng tôn giáo và ngăn chặn hành vi lợi dụng tôn giáo gây phương hại xã hội. Ở Việt Nam, với đặc thù đa tôn giáo, chính sách nhất quán là bảo đảm quyền tự do tín ngưỡng, phát huy giá trị tích cực của tôn giáo và kiên quyết phòng chống, xử lý hành vi lợi dụng tôn giáo để phá hoại khối đại đoàn kết và an ninh quốc gia.' className='mb-4 font-semibold' />

        {/* References Source*/}
        <div>
          <h1 className="text-2xl font-bold">Các nguồn thông tin</h1>
          <p className="pb-1 text-sm text-gray-600 border-b border-gray-300"></p>
          {/* Author Footer */}
          <header className="mb-6">
            <p>
              https://baochinhphu.vn/dong-bao-cac-ton-giao-la-mot-bo-phan-cua-khoi-dai-doan-ket-toan-dan-toc-102303516.htm
            </p>
            <p>
              https://thanhnien.vn/tin-do-cac-ton-giao-deu-co-tinh-than-yeu-nuoc-185873928.htm
            </p>
            <p>
              Dương, X. N., Đỗ, T. T., & Hoàng, C. B. (2021). Giáo trình chủ nghĩa xã hội khoa học: Dành Cho bậc đại Học hệ Không Chuyên lý luận Chính trị. Nxb. Chính trị quốc gia sự thât.
            </p>
            <p>
              https://vietnam.opendevelopmentmekong.net/topics/overview-of-religions-in-vietnam/
            </p>
          </header>
        </div>


      </div>
    </div>
  );
};

export default PostBaoCaoTonGiao;