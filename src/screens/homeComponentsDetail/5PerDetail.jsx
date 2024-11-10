import { Link } from "react-router-dom";

import image from "../../assets/images/5per.png"

export default function MBTI() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Trắc nghiệm tính cách Big 5</div>

      <img src={image} className="img-detail align-center" />

      <div className="detail-txt font-20 margin-top-2rem">
        Trắc nghiệm Big Five Personality (hay còn gọi là trắc nghiệm năm yếu tố tính cách) là một phương pháp được sử dụng rộng rãi trong tâm lý học để đo lường 5 đặc điểm tính cách chủ yếu của một cá nhân. Những đặc điểm này bao gồm:
      </div>

      <div className="detail-txt font-20">
        <ul>
          <li>
            <span className="bold-txt">Extraversion (E):</span> Đo lường mức độ xã hội, năng động và thích tìm kiếm những trải nghiệm mới mẻ. Người có điểm cao thường thích giao tiếp và tham gia vào các hoạt động xã hội.
          </li>
          <li>
            <span className="bold-txt">Agreeableness (A):</span> Đo lường mức độ dễ chịu, thân thiện và quan tâm đến người khác. Người có điểm cao dễ đồng cảm và hợp tác với người khác.
          </li>
          <li>
            <span className="bold-txt">Conscientiousness (C):</span> Đo lường mức độ có tổ chức, chăm chỉ và đáng tin cậy. Người có điểm cao thường rất cẩn thận và thích hoàn thành công việc đúng hạn.
          </li>
          <li>
            <span className="bold-txt">Neuroticism (N):</span> Đo lường mức độ cảm xúc, dễ bị căng thẳng và dễ thay đổi tâm trạng. Người có điểm cao thường xuyên cảm thấy lo âu hoặc lo lắng.
          </li>
          <li>
            <span className="bold-txt">Openness to Experience (O):</span> Đo lường mức độ sáng tạo, trí tò mò và sự cởi mở đối với những ý tưởng mới. Người có điểm cao thường thích khám phá và tìm hiểu những điều mới mẻ.
          </li>
        </ul>
      </div>

      <div className="detail-txt font-20">
        Bài kiểm tra Big Five Personality được thiết kế để giúp bạn hiểu rõ hơn về những đặc điểm tính cách của mình và cách chúng ảnh hưởng đến hành vi, mối quan hệ và cách bạn tương tác với thế giới xung quanh. 
        Sau khi hoàn thành bài kiểm tra, bạn sẽ nhận được điểm số cho từng yếu tố và đánh giá mức độ của các đặc điểm tính cách này.
      </div>

      <div className="detail-txt font-20">
        Căn cứ vào điểm số của bạn trong từng yếu tố, bạn có thể tham khảo các mức độ sau:
        <ul>
          <li>
            <span className="bold-txt">
              Điểm cao trong Extraversion (E):
            </span>{" "}
            Bạn là người năng động, thích giao tiếp và tham gia vào các hoạt động xã hội.
          </li>
          <li>
            <span className="bold-txt">
              Điểm cao trong Agreeableness (A):
            </span>{" "}
            Bạn là người hòa đồng, dễ gần và quan tâm đến cảm xúc của người khác.
          </li>
          <li>
            <span className="bold-txt">
              Điểm cao trong Conscientiousness (C):
            </span>{" "}
            Bạn là người có tổ chức, chú trọng chi tiết và luôn hoàn thành nhiệm vụ đúng thời gian.
          </li>
          <li>
            <span className="bold-txt">
              Điểm cao trong Neuroticism (N):
            </span>{" "}
            Bạn có thể dễ bị căng thẳng hoặc lo âu, nhưng điều này cũng có thể là động lực để bạn cải thiện bản thân.
          </li>
          <li>
            <span className="bold-txt">
              Điểm cao trong Openness to Experience (O):
            </span>{" "}
            Bạn có trí tò mò, sáng tạo và luôn tìm kiếm sự mới mẻ trong cuộc sống.
          </li>
        </ul>
      </div>

      <Link to="/fivePer" className="primary-btn font-18 align-center margin-top-2rem">
        Kiểm tra ngay
      </Link>
    </body>
  );
}