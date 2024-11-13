const TCQuests = [
  {
    index: 1,
    content: "Câu 1: Khi đưa ra quyết định:",
    answers: [
      { answerId: "1", answerContent: "Tôi quyết định nhanh chóng theo trực giác đầu tiên." },
      { answerId: "2", answerContent: "Tôi suy nghĩ kỹ, cân nhắc các lựa chọn và sau đó quyết định." },
      { answerId: "3", answerContent: "Tôi lắng nghe cảm xúc của mình và xem xét quyết định của mình sẽ ảnh hưởng đến người khác như thế nào." },
      { answerId: "4", answerContent: "Tôi nghiêm túc và luôn cố gắng đưa ra quyết định đúng đắn." },
    ],
  },
  {
    index: 2,
    content: "Câu 2: Cách tốt nhất để người khác thể hiện sự quan tâm đến tôi là:",
    answers: [
      { answerId: "1", answerContent: "Làm những điều thú vị với tôi." },
      { answerId: "2", answerContent: "Cho tôi không gian để là chính mình." },
      { answerId: "3", answerContent: "Dành thời gian với tôi, làm bất cứ điều gì." },
      { answerId: "4", answerContent: "Làm những gì tôi muốn; không để tôi thất vọng hoặc không giữ lời." },
    ],
  },
  {
    index: 3,
    content: "Câu 3: Khi ở bên bạn bè, tôi thích mang đến:",
    answers: [
      { answerId: "1", answerContent: "Sự sôi nổi, niềm vui, những trò đùa." },
      { answerId: "2", answerContent: "Câu hỏi, câu trả lời, một cách nhìn vấn đề logic." },
      { answerId: "3", answerContent: "Sự quan tâm đến người khác, nhiều sự chăm sóc." },
      { answerId: "4", answerContent: "Sự lên kế hoạch, cảm giác an toàn, một chuẩn mực tốt." },
    ],
  },
  {
    index: 4,
    content: "Câu 4: Tôi thích:",
    answers: [
      { answerId: "1", answerContent: "Hành động ngay lập tức; làm những việc mạo hiểm." },
      { answerId: "2", answerContent: "Cung cấp câu trả lời hoặc suy nghĩ về câu hỏi của mọi người." },
      { answerId: "3", answerContent: "Giúp duy trì sự hài hòa và đoàn kết." },
      { answerId: "4", answerContent: "Có trách nhiệm, đáng tin cậy và giúp đỡ người khác." },
    ],
  },
  {
    index: 5,
    content: "Câu 5: Một điều mà tôi thực sự giỏi là:",
    answers: [
      { answerId: "1", answerContent: "Hành động dũng cảm." },
      { answerId: "2", answerContent: "Suy nghĩ." },
      { answerId: "3", answerContent: "Nhạy cảm." },
      { answerId: "4", answerContent: "Tổ chức." },
    ],
  },
  {
    index: 6,
    content: "Câu 6: Bạn bè thân thiết của tôi thường nói rằng tôi là người:",
    answers: [
      { answerId: "1", answerContent: "Cạnh tranh." },
      { answerId: "2", answerContent: "Kín đáo, suy nghĩ sâu sắc." },
      { answerId: "3", answerContent: "Cảm xúc, thân thiện." },
      { answerId: "4", answerContent: "Gọn gàng, chuẩn bị kỹ lưỡng." },
    ],
  },
  {
    index: 7,
    content: "Câu 7: Quan điểm sống cơ bản của tôi là:",
    answers: [
      { answerId: "1", answerContent: "Sống chậm rãi và tận hưởng từng ngày." },
      { answerId: "2", answerContent: "Tìm hiểu ý nghĩa cuộc sống." },
      { answerId: "3", answerContent: "Giúp đỡ người khác, hạnh phúc và thành công." },
      { answerId: "4", answerContent: "Lên kế hoạch cho tương lai và làm cho nó tốt nhất có thể." },
    ],
  },
  {
    index: 8,
    content: "Câu 8: Khi tôi cảm thấy chán nản hoặc không vui:",
    answers: [
      { answerId: "1", answerContent: "Tôi thường trở nên thô lỗ, tức giận hoặc thậm chí là xấu tính." },
      { answerId: "2", answerContent: "Tôi thu mình lại, không nói nhiều và cố gắng tự mình suy nghĩ để giải quyết vấn đề." },
      { answerId: "3", answerContent: "Tôi cảm thấy xúc động, buồn và thường thích nói chuyện với người thân." },
      { answerId: "4", answerContent: "Tôi cố gắng tìm ra nguyên nhân của vấn đề và sửa chữa nó." },
    ],
  },
  {
    index: 9,
    content: "Câu 9: Tôi cảm thấy tốt về bản thân khi:",
    answers: [
      { answerId: "1", answerContent: "Tôi có thể làm những việc khó khăn." },
      { answerId: "2", answerContent: "Tôi có thể giải quyết vấn đề hoặc tìm ra cách giải quyết." },
      { answerId: "3", answerContent: "Tôi có thể giúp đỡ người khác." },
      { answerId: "4", answerContent: "Tôi được đánh giá cao hoặc được khen thưởng vì những việc mình làm." },
    ],
  },
  {
    index: 10,
    content: "Câu 10: Giáo viên ở trường có thể miêu tả tôi khi tôi hành xử không được tốt và lịch sự là:",
    answers: [
      { answerId: "1", answerContent: "Hỗn láo hoặc hơi hoang dã." },
      { answerId: "2", answerContent: "Kiêu ngạo." },
      { answerId: "3", answerContent: "Nói nhiều." },
      { answerId: "4", answerContent: "Người muốn mọi thứ theo ý mình; thống trị; lo lắng." },
    ],
  },
  {
    index: 11,
    content: "Câu 11: Giáo viên ở trường (những người thích tôi và tôi học khá tốt trong lớp của họ) có lẽ sẽ mô tả tôi là:",
    answers: [
      { answerId: "1", answerContent: "Dễ thương, một nhà lãnh đạo tự nhiên, thông minh, khiến người khác vui vẻ khi ở cùng." },
      { answerId: "2", answerContent: "Chu đáo, thường có những câu trả lời hay, thích tìm ra vấn đề." },
      { answerId: "3", answerContent: "Tốt bụng, thân thiện, người hòa đồng với các học sinh khác, giúp đỡ giáo viên và những người khác." },
      { answerId: "4", answerContent: "Gọn gàng, ngăn nắp, chuẩn bị kỹ, luôn làm đủ bài tập và là một học sinh giỏi." },
    ],
  },
];

export default TCQuests;
