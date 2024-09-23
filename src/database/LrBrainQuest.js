const questions = [
  {
    content: "Câu 1: Chọn mô tả đúng nhất với bản thân:",
    answers: [
      {
        answerId: "1",
        answerContent:
          "A. Ở nhà, phòng của tôi có ngăn kéo và tủ được tổ chức gọn gàng. Tôi cũng cố gắng sắp xếp những thứ khác quanh nhà",
      },
      {
        answerId: "2",
        answerContent:
          "B. Ở nhà, tôi thích phong cách sống tự nhiên, thoải mái. Tôi dọn dẹp khi thấy cần thiết và khi có thời gian",
      },
    ],
  },
  {
    content: "Câu 2: Chọn mô tả đúng nhất với bản thân:",
    answers: [
      {
        answerId: "3",
        answerContent:
          "A. Bàn làm việc của tôi thường sạch sẽ và mọi thứ đều ở đúng chỗ",
      },
      {
        answerId: "4",
        answerContent:
          "B. Tôi để dự án của mình trên bàn để có thể làm việc khi có ý tưởng",
      },
    ],
  },
  {
    content: "Câu 3: Tôi thích:",
    answers: [
      {
        answerId: "5",
        answerContent:
          "A. Sử dụng phương pháp đã được kiểm chứng và đáng tin cậy",
      },
      {
        answerId: "6",
        answerContent: "B. Tạo ra những phương pháp mới",
      },
    ],
  },
  {
    content: "Câu 4: Chọn mô tả đúng nhất với bản thân:",
    answers: [
      {
        answerId: "7",
        answerContent:
          "A. Tôi làm theo hướng dẫn một cách cẩn thận khi xây dựng mô hình, làm đồ thủ công,…",
      },
      {
        answerId: "8",
        answerContent:
          "B. Tôi thích xây dựng mô hình theo cách của mình, tạo ra sản phẩm riêng",
      },
    ],
  },
  {
    content: "Câu 5: Chọn mô tả đúng nhất với bản thân:",
    answers: [
      {
        answerId: "9",
        answerContent: "A. Tôi hoàn thành một dự án tại một thời điểm",
      },
      {
        answerId: "10",
        answerContent:
          "B. Tôi thích bắt đầu nhiều dự án khác nhau, nhưng không thích hoàn thành chúng",
      },
    ],
  },
  {
    content:
      "Câu 6: Khi tôi được yêu cầu viết một báo cáo về một chủ đề, tôi sẽ:",
    answers: [
      {
        answerId: "11",
        answerContent:
          "A. Nghiên cứu thông tin, sau đó lập dàn bài và tổ chức bài viết của mình",
      },
      {
        answerId: "12",
        answerContent: "B. Làm việc theo cảm hứng của riêng mình",
      },
    ],
  },
  {
    content: "Câu 7: Khi tôi phải thực hiện một dự án trong lớp, tôi sẽ:",
    answers: [
      {
        answerId: "13",
        answerContent:
          "A. sử dụng dự án minh họa trong sách hoặc mô phỏng dự án của một học sinh từng nhận được điểm A+ từ giáo viên của tôi",
      },
      {
        answerId: "14",
        answerContent:
          'B. thích thử thách, và như một "nhà khoa học điên", tôi tạo ra một dự án độc đáo',
      },
    ],
  },
  {
    content:
      "Câu 8: Khi tôi phụ trách một công việc lớn với nhiều người làm việc, tôi thường:",
    answers: [
      {
        answerId: "15",
        answerContent:
          "A. Tổ chức, giao trách nhiệm cho mọi người, lập danh sách và đảm bảo mọi người hoàn thành phần việc đúng thời hạn",
      },
      {
        answerId: "16",
        answerContent:
          "B. Làm việc theo tốc độ của riêng mình, để người khác làm việc theo cách họ muốn. Tôi muốn giải quyết các nhu cầu/vấn đề khi chúng phát sinh",
      },
    ],
  },
  {
    content: "Câu 9: Bạn thích hoạt động nào nhất?",
    answers: [
      {
        answerId: "17",
        answerContent: "A. Lập kế hoạch chi tiết cho một chuyến đi/dự án",
      },
      {
        answerId: "18",
        answerContent: "B. Tạo ra một hình thức nghệ thuật độc đáo",
      },
    ],
  },
  {
    content: "Câu 10: Tôi rất ghét khi người khác:",
    answers: [
      {
        answerId: "19",
        answerContent: "A. Không quyết đoán về các hoạt động khi tôi ở cùng họ",
      },
      {
        answerId: "20",
        answerContent:
          "B. Lên kế hoạch chi tiết từng bước cho các hoạt động khi tôi ở cùng họ",
      },
    ],
  },
  {
    content:
      "Câu 11: Nếu bạn có thể chọn một bài tập làm văn để thực hiện, bạn sẽ chọn:",
    answers: [
      {
        answerId: "21",
        answerContent: "A. Mô tả các hành tinh trong hệ mặt trời",
      },
      {
        answerId: "22",
        answerContent: "B. Viết một câu chuyện về một con kiến cứu thế giới",
      },
    ],
  },
  {
    content: "Câu 12: Bạn bè của bạn có khả năng sẽ bầu chọn bạn là:",
    answers: [
      {
        answerId: "23",
        answerContent: "A. Người có khả năng phát minh ra cỗ máy thời gian",
      },
      {
        answerId: "24",
        answerContent: "B. Người có khả năng bị lạc đường nhất",
      },
    ],
  },
  {
    content: "Câu 13: Buổi sáng bạn mặc đồ dựa theo:",
    answers: [
      { answerId: "25", answerContent: "A. Bộ trang phục bạn đã lên kế hoạch" },
      { answerId: "26", answerContent: "B. Bộ nào có mùi ổn là được" },
    ],
  },
  {
    content:
      "Câu 14: Nếu bạn có hai dự án bài tập về nhà cùng lúc, bạn sẽ tiếp tục bằng cách:",
    answers: [
      {
        answerId: "27",
        answerContent: "A. Hoàn thành một cái rồi chuyển sang cái tiếp theo",
      },
      {
        answerId: "28",
        answerContent:
          "B. Làm một chút cho một cái đến khi chán, rồi chuyển sang cái kia",
      },
    ],
  },
  {
    content: "Câu 15: Trong một vở kịch, bạn muốn:",
    answers: [
      {
        answerId: "29",
        answerContent: "A. Làm đạo diễn",
      },
      {
        answerId: "30",
        answerContent: "B. Làm diễn viên chính",
      },
    ],
  },
  {
    content:
      "Câu 16: Bạn vừa trúng thưởng một kỳ nghỉ miễn phí một tuần đến bãi biển! Bạn sẽ:",
    answers: [
      {
        answerId: "31",
        answerContent: "A. Dành chút thời gian lên kế hoạch cho chuyến đi",
      },
      { answerId: "32", answerContent: "B. Đi ngay bây giờ!" },
    ],
  },
  {
    content:
      "Câu 17: Ai đó vừa nói với bạn rằng bạn có khả năng ngoại cảm. Bạn nghĩ:",
    answers: [
      { answerId: "33", answerContent: "A. Điều đó thật vô lý" },
      {
        answerId: "34",
        answerContent: "B. Tôi nghĩ có thể mình thật sự có",
      },
    ],
  },
  {
    content: "Câu 18: Trong một bài kiểm tra trắc nghiệm, bạn thường:",
    answers: [
      {
        answerId: "35",
        answerContent:
          "A. Xem xét các lựa chọn và nhìn ra câu trả lời đúng rõ ràng",
      },
      {
        answerId: "36",
        answerContent: "B. Suy nghĩ quá nhiều và bị rối",
      },
    ],
  },
  {
    content: "Câu 19: Nếu bạn xem một bộ phim buồn trong lớp, bạn sẽ:",
    answers: [
      {
        answerId: "37",
        answerContent: "A. Kiềm chế cảm xúc",
      },
      {
        answerId: "38",
        answerContent: "B. Khóc một chút",
      },
    ],
  },
  {
    content: "Câu 20: Khi bạn ăn kẹo M&M, bạn bị thu hút bởi việc?",
    answers: [
      {
        answerId: "39",
        answerContent: "A. Phân loại theo màu và ăn theo thứ tự",
      },
      {
        answerId: "40",
        answerContent: "B. Lén ăn trong lớp khi bạn cảm thấy chán",
      },
    ],
  },
];

export default questions;
