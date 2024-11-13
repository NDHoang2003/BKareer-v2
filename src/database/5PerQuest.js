const questions = [
  {
    index: 1,
    content: "Tôi là tâm điểm của bữa tiệc.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "E", // Extroversion
  },
  {
    index: 2,
    content: "Tôi ít quan tâm đến người khác.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "A", // Agreeableness
  },
  {
    index: 3,
    content: "Tôi luôn chuẩn bị sẵn sàng.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "C", // Conscientiousness
  },
  {
    index: 4,
    content: "Tôi dễ bị căng thẳng.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "N", // Neuroticism
  },
  {
    index: 5,
    content: "Tôi có vốn từ vựng phong phú.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "O", // Openness
  },
  {
    index: 6,
    content: "Tôi không nói nhiều.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "E", // Extroversion
  },
  {
    index: 7,
    content: "Tôi quan tâm đến mọi người.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "A", // Agreeableness
  },
  {
    index: 8,
    content: "Tôi hay để đồ đạc lung tung.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "C", // Conscientiousness
  },
  {
    index: 9,
    content: "Tôi thường thư giãn, thoải mái.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "N", // Neuroticism (reversed)
  },
  {
    index: 10,
    content: "Tôi khó hiểu các ý tưởng trừu tượng.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "O", // Openness
  },
  {
    index: 11,
    content: "Tôi cảm thấy thoải mái khi ở xung quanh mọi người.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "E", // Extraversion
  },
  {
    index: 12,
    content: "Tôi thường xúc phạm người khác.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "A", // Agreeableness (reversed)
  },
  {
    index: 13,
    content: "Tôi chú ý đến các chi tiết.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "C", // Conscientiousness
  },
  {
    index: 14,
    content: "Tôi lo lắng về mọi thứ.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "N", // Neuroticism
  },
  {
    index: 15,
    content: "Tôi có trí tưởng tượng sống động.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "O", // Openness
  },
  {
    index: 16,
    content: "Tôi giữ mình ở phía sau.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "E", // Extraversion
  },
  {
    index: 17,
    content: "Tôi thông cảm với cảm xúc của người khác.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "A", // Agreeableness
  },
  {
    index: 18,
    content: "Tôi làm lộn xộn mọi thứ.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "C", // Conscientiousness
  },
  {
    index: 19,
    content: "Tôi hiếm khi cảm thấy buồn.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "N", // Neuroticism
  },
  {
    index: 20,
    content: "Tôi không quan tâm đến các ý tưởng trừu tượng.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "O", // Openness
  },
  {
    index: 21,
    content: "Tôi bắt đầu các cuộc trò chuyện.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "E", // Extraversion
  },
  {
    index: 22,
    content: "Tôi không quan tâm đến vấn đề của người khác.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "A", // Agreeableness
  },
  {
    index: 23,
    content: "Tôi hoàn thành công việc ngay lập tức.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "C", // Conscientiousness
  },
  {
    index: 24,
    content: "Tôi dễ bị làm phiền.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "N", // Neuroticism
  },
  {
    index: 25,
    content: "Tôi có những ý tưởng tuyệt vời.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "O", // Openness
  },
  {
    index: 26,
    content: "Tôi ít nói.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "E", // Extraversion
  },
  {
    index: 27,
    content: "Tôi có ít điều để nói.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "E", // Extraversion
  },
  {
    index: 28,
    content: "Tôi có một trái tim mềm mại.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "A", // Agreeableness
  },
  {
    index: 29,
    content: "Tôi dễ bị lo âu.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "N", // Neuroticism
  },
  {
    index: 30,
    content: "Tôi thường quên để đồ vật ở đúng chỗ.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "C", // Conscientiousness
  },
  {
    index: 31,
    content: "Tôi nói chuyện với nhiều người khác nhau tại các bữa tiệc.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "E", // Extraversion
  },
  {
    index: 32,
    content: "Tôi không thực sự quan tâm đến người khác.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "A", // Agreeableness
  },
  {
    index: 33,
    content: "Tôi thích sự ngăn nắp.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "C", // Conscientiousness
  },
  {
    index: 34,
    content: "Tôi thay đổi tâm trạng rất nhanh.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "N", // Neuroticism
  },
  {
    index: 35,
    content: "Tôi nhanh chóng hiểu mọi thứ.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "O", // Openness
  },
  {
    index: 36,
    content: "Tôi không thích thu hút sự chú ý đến mình.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "E", // Extraversion
  },
  {
    index: 37,
    content: "Tôi dành thời gian cho người khác.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "A", // Agreeableness
  },
  {
    index: 38,
    content: "Tôi né tránh trách nhiệm.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "C", // Conscientiousness
  },
  {
    index: 39,
    content: "Tôi hay bị kích động.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "N", // Neuroticism
  },
  {
    index: 40,
    content: "Tôi sử dụng các từ ngữ phức tạp.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "O", // Openness
  },
  {
    index: 41,
    content: "Tôi không ngại trở thành trung tâm của sự chú ý.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "E", // Extroversion
  },
  {
    index: 42,
    content: "Tôi cảm nhận được cảm xúc của người khác.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "A", // Agreeableness
  },
  {
    index: 43,
    content: "Tôi tuân theo một thời gian biểu.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "C", // Conscientiousness
  },
  {
    index: 44,
    content: "Tôi dễ dàng bị kích động.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "N", // Neuroticism
  },
  {
    index: 45,
    content: "Tôi dành thời gian để suy ngẫm về mọi thứ.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "O", // Openness
  },
  {
    index: 46,
    content: "Tôi im lặng khi ở cạnh người lạ.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "E", // Extraversion
  },
  {
    index: 47,
    content: "Tôi làm cho người khác cảm thấy thoải mái.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "A", // Agreeableness
  },
  {
    index: 48,
    content: "Tôi làm việc rất cẩn thận và chính xác.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "C", // Conscientiousness
  },
  {
    index: 49,
    content: "Tôi thường cảm thấy buồn.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "N", // Neuroticism
  },
  {
    index: 50,
    content: "Tôi có nhiều ý tưởng.",
    answers: [
      { answerId: "1", answerContent: "Hoàn toàn không đồng ý" },
      { answerId: "2", answerContent: "Không đồng ý" },
      { answerId: "3", answerContent: "Trung lập" },
      { answerId: "4", answerContent: "Đồng ý" },
      { answerId: "5", answerContent: "Hoàn toàn đồng ý" },
    ],
    dimension: "O", // Openness
  },
];
export default questions;
