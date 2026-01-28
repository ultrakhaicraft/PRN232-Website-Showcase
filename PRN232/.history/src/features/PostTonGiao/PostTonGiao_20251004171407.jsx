import React from "react";
import PostImage from "@/components/PostImage";
import PostParagraph from "@/components/PostParagraph";
import BackButton from "@/components/BackButton";
import KhaiNiemTonGiao from "@/assets/KhaiNiemTonGiao.jpeg"
import NguonGocTonGiao from "@/assets/NguonGocTonGiao.png"
import BieuTuongTonGiao from "@/assets/BieuTuongTonGiao.jpg"
import Tongiao2 from "@/assets/Tongiao2.jpg"

const PostTonGiao = () => {
  return (
    <div className="min-h-screen bg-[#FAF7E6]">
      <div className="max-w-8xl mx-auto px-6 py-8 bg-[#FAF7E6] mt-5">
        {/* Header */}
        <header className="mb-6">
          <BackButton className="mb-4" />
          <p className="text-sm text-gray-600 border-b border-gray-300 pb-1">
            Thứ tư, 29/09/2025 | 12:30
          </p>
        </header>

        {/* Title */}
        <h1 className="mb-4 text-center text-2xl font-bold">
          Thông qua thời kỳ quá độ, làm sao để tôn giáo cần được quản lý chặt chẽ hơn để đảm bảo an ninh trật tự xã hội ?
        </h1>

        {/* First Paragraph */}
        <PostParagraph text='Trong thời kỳ quá độ lên chủ nghĩa xã hội, tôn giáo là một hiện tượng tinh thần mang nhiều mặt: vừa là nhu cầu tinh thần, vừa có thể trở thành công cụ chính trị khi bị lợi dụng. Việc nhận diện tính chất của tôn giáo và xác lập nguyên tắc xử lý phù hợp là cần thiết để vừa giữ vững ổn định xã hội và khối đại đoàn kết dân tộc. ' className='mb-4 font-bold'/>

        <PostParagraph text='Bài viết này tóm lược quan điểm của chủ nghĩa Mác–Lênin về tôn giáo, phân tích đặc điểm tôn giáo ở Việt Nam và nêu nguyên tắc, định hướng chính sách xử lý vấn đề tôn giáo trong bối cảnh quá độ.' className='mb-4 font-bold'/>

        {/* First Image */}
        <PostImage src={KhaiNiemTonGiao} alt='Hình ảnh các ông theo tôn giáo' 
          imageCaption="Hình ảnh các ông theo tôn giáo"/>

        
        <h2 className="font-bold">Tôn giáo là gì ?</h2>

        <PostParagraph text='Tôn giáo là một sự tồn tại của niềm tin sâu sắc của một con người liên quan tới các yếu tố siêu nhiên, như là thần linh, thiên chúa, đấng siêu nhiên.. Là một hệ thống quan niệm phản ánh thế giới quan và nhân sinh quan, và có các hoạt động tôn giáo bao gồm đối tượng tôn thờ, giáo lý, giáo luật, lễ nghi và tổ chức.' className='mb-6'/>

        <PostParagraph text='Theo quan điểm Mác-Lênin cho rằng, tôn giáo là một hình thái ý thức xã hội thuộc “siêu cấu trúc”, phản ánh hiện thực dưới dạng ảo tưởng. Qua phản ánh đó, các lực lượng tự nhiên và xã hội bị nhân cách hóa, thần bí hóa. Ph. Ăngghen nhận xét rằng các tôn giáo chỉ là “Tất cả mọi tôn giáo chẳng qua chỉ là sự phản ánh hư ảo – vào trong đầu óc của cong người” của những lực lượng chi phối đời sống con người (Dương et al., 2021, 214). Đồng thời, tôn giáo là thực thể xã hội-văn hóa: có niềm tin vào đấng siêu nhiên, giáo thuyết, tổ chức, cơ sở thờ tự và tập hợp tín đồ. Tuy do con người sáng tạo ra, tôn giáo lại có khả năng chi phối đời sống người sáng tạo, dẫn đến sự lệ thuộc và phục tùng mù quáng.' className='mb-6'/>

        <PostParagraph text='Bản chất của tôn giáo không giống như bản chất của tín ngưỡng và mê tín dị đoan. Tín ngưỡng là hệ thống miền tin, sự ngưỡng mộ, và cách thức con người trước các sự vật, hiện tượng và lực lượng có tính thần thánh. Còn mê tín dị đoan là miền tin mê muôi, không dựa trên một cơ sơ khoa học nào hết, và toàn bảo phụ bởi yếu tố hư ảo. Dị đoan là sự suy đoán, hành động sai lệch những điều bình thường, chuẩn mực trong cuộc sống. Vì thế cả ba đều khác biệt với nhau, bản chất không giống nhau' className='mb-6'/>

        <h2 className="font-bold">Tôn giáo có từ khi nào?</h2>
        
        <PostImage src={NguonGocTonGiao} alt='Thủ tướng Phạm Minh Chính phát biểu tại hội nghị.' 
          imageCaption="Thủ tướng Phạm Minh Chính phát biểu tại hội nghị."/>

        <PostParagraph text='Xét về nguồn gốc tự nhiên, kinh tế-xã hội, trong xã hội nguyên thủy, do sản xuất chưa phát triển, con người vì bất lực trước thiên nhiên tác động và chi phối, cho đến nỗi không giải thích. Từ việc không giải thích được, con người dễ dàng cho là các hiện tượng tự nhiên có sức mạnh, quyền lực thần bí. Khi xã hội xuất hiện các giai cấp đối kháng và có sự áp bức bất công, 
        vì không giải thích được nguồn gốc của sự phân hóa giai cấp, bóc lột bất công, tội ác, và lo sợ trước sự thống trị của lực lượng xã hội. Tôn giáo trở thành phương tiện mà con người mong để được an ủi hay giải phóng họ bằng năng lực siêu nhiên.' className='mb-6'/>

        <PostParagraph text='Khi xã hội xuất hiện các giai cấp đối kháng và có sự áp bức bất công, vì không giải thích được nguồn gốc của sự phân hóa giai cấp, bóc lột bất công, tội ác, và lo sợ trước sự thống trị của lực lượng xã hội. Tôn giáo trở thành phương tiện mà con người mong để được an ủi hay giải phóng họ bằng năng lực siêu nhiên.' className='mb-6'/>

        <PostParagraph text='Còn về nhận thức, ở những giai đoạn kiến thức khoa học chưa phát triển và sự nhận thức của con người về tự nhiên và xã hội còn giới hạn, những điều chưa giải thích được thường được lý giải bằng tôn giáo. Từ đó nảy sinh và duy trì niềm tin tôn giáo.' className='mb-6'/>

        <PostParagraph text='Cuối cùng nguồn gốc cũng đến từ tâm lý của con người, khi các hiện tượng tự nhiên, xã hội, hay chỉ đơn giản là rủi ro hoặc vận may thì con người cũng tìm tới tôn giáo (Dương et al., 2021, 217). Thậm chí mong cầu bình an trong các dịp trọng đại, thể hiện lòng yêu nuốc cũng dẫn con người tìm đến tín ngưỡng, tôn giáo.' className='mb-6'/>

        <h2 className="font-bold">Tôn giáo có những đặc điểm gì ?</h2>

        <PostImage src={BieuTuongTonGiao} alt='Biểu tượng tôn giáo' 
          imageCaption="Biểu tượng tôn giáo."/>

        {/* Second Paragraph */}
        <PostParagraph text='Tôn giáo là một hiện tượng lịch sử, có sự quá trình hình thành và biển đổi thông qua giai đoạn lịch sử nhất định và có thể thích nghi với nhiều chế độ kính tế xã hội khác nhau, nghĩa là khi xã hội thay đổi thì tôn giáo thay đổi luôn. Hơn thế nữa, chính các điều kiện kinh tế - xã hội trong lịch sử cụ thể làm cho các tôn giáo bị phân liệt, chia ra thành nhiều tôn giáo khác nhau.' className='mb-6'/>

        {/* Second Paragraph */}
        <PostParagraph text='Tiếp theo, tôn giáo có tính quần chung. Là hiện tượng xã hội phổ biến ở tất cả các dân tộc, quốc gia và châu lục (Dương et al., 2021, 217), và cũng thể hiện thông qua sinh hoạt văn hóa và tinh thần của nhân dân. Mặc dù tôn giáo cho con người vào miền tin hạnh phúc hư ảo nhưng có phản ánh khát vọng về một xã hội bình đẳng, tự do và bác ái, và nhờ có tính nhân văn, nhân đạo và hướng thiện. Vì thế rất nhiều người khác nhau đi theo tôn giáo' className='mb-6'/>

        {/* Second Paragraph */}
        <PostParagraph text='Cuối cùng, tôn giáo có mang tính chính trị khi xã hội có xuất hiện giai cấp, nhất là sự đối kháng về lợi ích giai cấp. Tôn giáo có phản án lợi ích, nguyên vọng của các giai cấp khác nhau, do điều kiện kinh tế xã hội. Đồng thời tôn giáo cũng sử dụng bởi giai cấp thống trị để phục vụ lợi ích của riêng giai cấp mình và chống lại giai cấp lao động và tiến bộ xã hội, đó là tính chính trị tiêu cực. (Dương et al., 2021, 219),' className='mb-6'/>

        <h2 className="font-bold">Nguyên tắc giải quyết vấn đề tôn giáo trong thời kỳ quá độ</h2>

        {/* Second Paragraph */}
        <PostParagraph text='Vào thời kỳ quá độ lên chủ nghĩa xã hội tại Việt Nam, chúng ta đã có những nguyên tắc cơ bản khi giải quyết vấn đề tôn giáo như sau:' className='mb-6'/>

        <PostImage src={Tongiao2} alt='Hình ảnh người dân tộc thiểu số theo đạo.' 
          imageCaption="Hình ảnh người dân tộc thiểu số theo đạo."/>

        <PostParagraph text="Đầu tiên là phải Tôn trọng và bảo đảm quyền tự do tín ngưỡng, không tín ngưỡng. 
        Vì tôn giáo và tín ngưỡng là miền tin sâu sắc của một ngươi mà họ muốn tôn thờ, thuộc lĩnh vực ý thức tư tưởng, do đó việc theo đạo, đ
        ổi đạo và không theo đạo là quyền tự do lựa chọn của nhân dân. Tôn trọng tự do tín ngưỡng cũng chính là tôn trọng quyền của con người, 
        các tôn giáo và hoạt động tôn giáo nên phục vụ để thỏa mãn nhu cầu tín ngưỡng của người dân." className='mb-6'/>

        <PostParagraph text="Không có cá nhân, tổ chức nào có quyền can thiệp vào sự lựa chọn này. 
        Nhà nước xã hội chũ nghĩa không can thiệp và không cho bất cứ ai khác can thiệp và xâm phạm đến quyền tự do tín ngưỡng, 
        quyền lựa chọn theo hay không theo tôn giáo. Mọi hành vi cấm đoán, ép buộc và ngăn cản quyền lựa chọn tôn giáo là vi phạm quyền con người."
         className='mb-6'/>

        <PostParagraph text="Tiếp theo Khắc phục dần những ảnh hưởng tiêu cực của tôn giáo gắn với cải tạo xã hội. 
        Chúng ta cần xóa bỏ nguồn gốc sinh ra ảo tưởng tiêu cực, từ đó bỏ ảo tưởng tiêu cực nảy sinh trong tư tưởng con người. 
        Thay vì đàn áp, chúng ta nên xóa bỏ áp bức, nghèo đói, kém học thức; đồng thời nâng cao đời sống vật chất, tinh thần và trình độ dân trí.
         Đó là một quá trình lâu dài mà chúng ta cải tạo xã hội cũ, xây dựng xã hội mới" className='mb-6'/>

        <PostParagraph text="Phân biệt hai mặt chính trị và tư tưởng của tôn giáo, vì trong lịch sử giai đoạn công xã nguyên thủy thì có biểu hiện về tư tưởng, niềm tin về siêu nhiên. 
        Còn tôn giáo có tính chính trị từ khi xã hội xuất hiện giai cấp. Vì thế, hai mặt chính trị và tư tưởng thường thể hiện và có mối quan hệ với nhau. 
        Mặt chính trị thì liên quan tới đối kháng về lợi ích kinh tế của từng giai cấp và sự tiến bộ trong xã hội, còn mặt tư tưởng biểu hiện sự khác nhau về miền tin, mức độ tin giữa người tôn giáo và không theo tôn giáo. 
        Chúng ta cần nhận diện rõ đâu là mâu thuẫn tư tưởng (thuần túy niềm tin) và đâu là mâu thuẫn có tính chính trị, lợi dụng tôn giáo để phục vụ mục tiêu chống cách mạng. Từ đó có chính sách phù hợp, tránh cực đoan." 
        className='mb-6'/>

        <PostParagraph text="Cuối cùng, 
        giải quyết vấn đề tôn giáo với quan điểm lịch sử một cách cụ thế, vì mỗi tôn giáo, mỗi địa bàn, mỗi thời kỳ có đặc điểm khác nhau. Do đó phải có quan điểm lịch sử cụ thể để xem xét, đánh giá, và sử dụng biện pháp phù hợp theo điều kiện cụ thể." 
        className='mb-6'/>

        <PostParagraph text="Từ đó, những các nguyên tắc này đã trở thành một nền tảng để bảo vệ và tôn trọng tôn giáo trong xã hội kính tế" className='mb-6'/>

        
      </div>

      {/* References Source*/}
      <div>
        <h1 className="text-2xl font-bold">Các nguồn thông tin</h1>
        <p className="text-sm text-gray-600 border-b border-gray-300 pb-1"></p>
        {/* Author Footer */}
        <header className="mb-6">
          <p>
            Dương, X. N., Đỗ, T. T., & Hoàng, C. B. (2021). Giáo trình chủ nghĩa xã hội khoa học: Dành Cho bậc đại Học hệ Không Chuyên lý luận Chính trị. Nxb. Chính trị quốc gia sự thât. 
          </p>
        </header>
      </div>
      

    </div>
  );
};

export default PostTonGiao;