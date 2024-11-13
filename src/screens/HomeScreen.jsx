import { Link } from "react-router-dom";

import image1 from "../assets/images/graduationOrCareerChoice.jpg"
import image2 from "../assets/images/ikigai.jpg"

function HomeScreen() {  
  return (
    <>
      <body className="body">
        {/* Row 1 */}
        <div className="home-card flex-row flex-space-between">
          <img src={image1} className="img-home-1"/>
          <div>
            <div className="card-title">Bài kiểm tra định hướng ngành nghề</div>
            <div className="card-content">Bài kiểm tra định hướng ngành nghề BKareer bao gồm 2 phần: Bài trắc nghiệm tính cách MBTI và Bài trắc nghiệm khám phá năng lực nghề nghiệp. Sau khi hoàn thành cả 2 phần trên, bạn sẽ khám phá được những điểm nổi trội của mình và nhận được gợi ý các thông tin ngành nghề - nghề nghiệp bạn nên ưu tiên tìm hiểu.</div>
            <Link className="secondary-outline-btn" to="/majorTest">Kiểm tra ngay</Link>
          </div>
        </div>
        
        {/* Rows Below */}
        <div className="card-group-container">
          {/* Ikigai */}
          <div className="flex-row card-margin-top">
            <div className="home-card flex-row flex-space-between flex-items-center card-left card-margin-right">
              <div className="width-45 flex-col flex-self-start">
                <div className="card-title">Ikigai</div>
                <div className="card-content">Ikigai là một khái niệm sống gắn liền với niềm đam mê, mục tiêu, giá trị và sự hài lòng. Đây cũng chính là bí quyết sống trường thọ và hạnh phúc của người Nhật Bản.</div>
                <Link className="secondary-outline-btn" to="/ikigai">Tìm hiểu thêm</Link>
              </div>
              <img src={image2} className="img-home-2"/>
            </div>

            <div className="home-card card-right flex-col">
              <div className="card-title">Tin tức</div>
              <div className="card-content">Cập nhật những tin tức mới nhất về giáo dục, hướng nghiệp và thị trường lao động, cung cấp thông tin về các chương trình đào tạo, cơ hội học bổng và những xu hướng nghề nghiệp nổi bật.</div>
              <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/news">Tìm hiểu thêm</Link></div>
            </div>
          </div>

          {/* MBTI, CC, 3 thiên hướng học tập */}
          <div className="flex-row card-margin-top">
            <div className="card-left card-margin-right">
              <div className="flex-row flex-space-between flex-items-center card-group-container">
                <div className="home-card width-fit-content card-group-ele">
                  <div className="card-title">Trắc nghiệm tính cách MBTI</div>
                  <div className="card-content">Trắc nghiệm tính cách MBTI (Myers-Briggs Type Indicator) là một phương pháp sử dụng hàng loạt các câu hỏi trắc nghiệm để phân tích tính cách con người.</div>
                  <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/mbtiDetail">Tìm hiểu thêm</Link></div>
                </div>

                <div className="home-card width-fit-content card-group-ele">
                  <div className="card-title">Khám phá năng lực nghề nghiệp</div>
                  <div className="card-content">Bài trắc nghiệm khám phá năng lực nghề nghiệp – Career Clusters Interest Survey được Ivy Global School xây dựng dựa trên tư liệu của tổ chức Advance CTE (Mỹ).</div>
                  <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/ccDetail">Tìm hiểu thêm</Link></div>
                </div>
              </div>
            </div>
            
            <div className="home-card card-right flex-col">
              <div className="card-title">Trắc nghiệm 3 thiên hướng học tập</div>
              <div className="card-content">Trắc nghiệm 3 thiên hướng học tập Vak là bài tập trắc nghiệm xác định thiên hướng học tập. Mô hình này cho rằng mỗi cá nhân sẽ có một cách học tập lý tưởng và đạt được các hiệu quả khác nhau.</div>
              <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/learningStyleDetail">Tìm hiểu thêm</Link></div>
            </div>
          </div>

          {/* IQ, EQ, não trái - não phải */}
          <div className="flex-row card-margin-top">
            <div className="card-left card-margin-right">
              <div className="flex-row flex-space-between flex-items-center card-group-container">
                <div className="home-card width-fit-content card-group-ele">
                  <div className="card-title"><Link to="/" className="card-title text-decor-none">Trắc nghiệm IQ</Link></div>
                  <div className="card-content">Bài test IQ gồm một loạt các câu hỏi trắc nghiệm được thiết kế nhằm mục đích đánh giá khả năng tư duy của não bộ. Đây là phương pháp đo lường chỉ số IQ chính xác và phổ biến nhất hiện nay.</div>
                  <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/iqDetail">Tìm hiểu thêm</Link></div>
                </div>

                <div className="home-card width-fit-content card-group-ele">
                  <div className="card-title"><Link to="/" className="card-title text-decor-none">Trắc nghiệm EQ</Link></div>
                  <div className="card-content">Đa số các dạng bài kiểm tra EQ hiện nay đều là bộ câu hỏi dựa trên hai dạng mô hình cảm xúc là: Mô hình cảm xúc năng lực và Mô hình cảm xúc đặc điểm, hướng đến đo lường và đánh giá trí tuệ cảm xúc.</div>
                  <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/eqDetail">Tìm hiểu thêm</Link></div>
                </div>
              </div>
            </div>

            <div className="home-card card-right flex-col">
              <div className="card-title">Trắc nghiệm não trái - não phải</div>
              <div className="card-content">Thông qua bài trắc nghiệm đơn giản này, bạn sẽ biết được tuổi não trái và não phải, đâu là thế mạnh nên phát huy của bản thân.</div>
              <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/lrBrainDetail">Tìm hiểu thêm</Link></div>
            </div>
          </div>

          {/* Big Five, Work Styles */}
          <div className="flex-row card-margin-top">
            <div className="home-card width-50 card-margin-right flex-col">
              <div className="card-title">Trắc nghiệm tính cách Big Five</div>
              <div className="card-content">Trắc nghiệm Big Five đo lường 5 yếu tố tính cách chính của con người: Extraversion, Agreeableness, Conscientiousness, Neuroticism và Openness to Experience.</div>
              <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/fivePerDetail">Tìm hiểu thêm</Link></div>
            </div>

            <div className="home-card width-50 card-margin-right flex-col">
              <div className="card-title">Trắc nghiệm Phong Cách Làm Việc</div>
              <div className="card-content">
                Khám phá phong cách làm việc của bạn để hiểu rõ hơn về cách bạn tiếp cận công việc và tương tác với đồng nghiệp, từ đó phát huy tối đa hiệu quả làm việc.
              </div>
              <div className="margin-bottom-2rem">
                <Link className="secondary-outline-btn" to="/workStyleDetail">Tìm hiểu thêm</Link>
              </div>
            </div>
          </div>

          {/* Work Styles, IQ2 */}


          {/* Color Test, Grit Scale */}
          <div className="flex-row card-margin-top">
            <div className="home-card width-50 card-margin-right flex-col">
              <div className="card-title">Bài kiểm tra tính cách True Colors</div>
              <div className="card-content">Hệ thống True Colors được hỗ trợ bởi các nhà tâm lý học nổi tiếng và chuyên gia trong lĩnh vực này, cho rằng mỗi người trên hành tinh này đều có một kiểu màu sắc phù hợp với tính cách thật, bên trong của họ.</div>
              <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/colorsDetail">Tìm hiểu thêm</Link></div>
            </div>
            

            <div className="home-card width-50 card-margin-right flex-col">
              <div className="card-title">Bài kiểm tra Grit Scale</div>
              <div className="card-content">
                Đo lường độ kiên trì và đam mê của bạn đối với các mục tiêu dài hạn bằng trắc nghiệm Grit Scale, giúp bạn hiểu rõ hơn về khả năng vượt qua thử thách và kiên trì với mục tiêu.
              </div>
              <div className="margin-bottom-2rem">
                <Link className="secondary-outline-btn" to="/gritDetail">Tìm hiểu thêm</Link>
              </div>
            </div>

          </div>

          {/* Weight-sum, VIKOR */}
          <div className="flex-row card-margin-top">
            <div className="home-card width-50 card-margin-right flex-col">
              <div className="card-title">Weight-sum</div>
              <div className="card-content">Dựa trên dữ liệu đầu vào từ người dùng và dữ liệu của tổ chức lao động thế giới ILOSTAT, phương pháp Weight-sum gán trọng số cho từng tiêu chí dựa trên tầm quan trọng tương đối của chúng.</div>
              <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/weightedSum">Tìm hiểu thêm</Link></div>
            </div>

            <div className="home-card width-50 flex-col">
              <div className="card-title">VIKOR</div>
              <div className="card-content">Dựa trên dữ liệu đầu vào từ người dùng và dữ liệu của tổ chức lao động thế giới ILOSTAT, phương pháp VIKOR xác định các nghiệm lý tưởng và phản lý tưởng.</div>
              <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/vikor">Tìm hiểu thêm</Link></div>
            </div>

          </div>


        </div>
      </body>
    </>
  );
}

export default HomeScreen;
