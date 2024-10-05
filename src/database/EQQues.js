const eqQuestions = [
    {
        index: 1,
        content:
          "Khi đang ngồi trên máy bay, đột nhiên máy bay rung động rất mạnh và lắc lư qua trái phải. Lúc đó, bạn sẽ làm gì?",
        answers: [
          {
            answerId: "1",
            answerContent: "A. Tiếp tục xem điện thoại, không quan tâm.",
            score: 20,
          },
          {
            answerId: "2",
            answerContent:
              "B. Quan sát tình hình thay đổi, cẩn thận lắng nghe thông báo từ tiếp viên.",
            score: 20,
          },
          {
            answerId: "3",
            answerContent: "C. Cả A và B đều đúng.",
            score: 20,
          },
          {
            answerId: "4",
            answerContent: "D. Tôi không biết, tôi không quan tâm.",
            score: 0,
          },
        ],
      },
      {
        index: 2,
        content:
          "Có 1 đứa trẻ trong nhóm 4 đứa mà bạn đang trông nom khóc vì không ai chơi cùng. Bạn sẽ làm gì lúc này?",
        answers: [
          {
            answerId: "1",
            answerContent: "A. Không quan tâm.",
            score: 0,
          },
          {
            answerId: "2",
            answerContent: "B. Trò chuyện, tìm cách giúp đứa trẻ.",
            score: 20,
          },
          {
            answerId: "3",
            answerContent: "C. Nhắc nhở bé nín khóc.",
            score: 0,
          },
          {
            answerId: "4",
            answerContent: "D. Cho bé đồ chơi.",
            score: 0,
          },
        ],
      },
      {
        index: 3,
        content:
          "Bạn là sinh viên và muốn đạt điểm cao ở môn học A, nhưng kết quả bài thi giữa kỳ môn đó chỉ ở mức trung bình. Bạn sẽ làm gì?",
        answers: [
          {
            answerId: "1",
            answerContent: "A. Lập kế hoạch học tập và quyết tâm thực hiện.",
            score: 20,
          },
          {
            answerId: "2",
            answerContent: "B. Sau này sẽ học tập chăm chỉ hơn.",
            score: 0,
          },
          {
            answerId: "3",
            answerContent:
              "C. Khích lệ bản thân: môn này không tốt thì tập trung vào môn học khác.",
            score: 20,
          },
          {
            answerId: "4",
            answerContent: "D. Thuyết phục giảng viên cho điểm cao hơn.",
            score: 0,
          },
        ],
      },
      {
        index: 4,
        content:
          "Bạn là nhân viên bán bảo hiểm và đang tìm kiếm khách hàng mới. Cả 15 người bạn trao đổi đều không có thái độ rõ ràng hoặc không muốn hợp tác. Lúc đó, bạn sẽ làm gì?",
        answers: [
          {
            answerId: "1",
            answerContent: "A. Nghĩ chuyện này chỉ xảy ra hôm nay, hy vọng ngày mai sẽ may mắn hơn.",
            score: 0,
          },
          {
            answerId: "2",
            answerContent: "B. Xem xét lại mình có phù hợp với công việc không.",
            score: 0,
          },
          {
            answerId: "3",
            answerContent: "C. Cố gắng hơn ở buổi gặp sau, duy trì thái độ làm việc siêng năng.",
            score: 20,
          },
          {
            answerId: "4",
            answerContent: "D. Bỏ qua 15 người này và tìm khách hàng khác.",
            score: 0,
          },
        ],
      },
      {
        index: 5,
        content:
          "Bạn là giám đốc và đưa ra quy định không được phân biệt chủng tộc trong công ty. Một hôm, bạn vô tình nghe thấy có người pha trò về vấn đề này. Bạn sẽ giải quyết như thế nào?",
        answers: [
          {
            answerId: "1",
            answerContent: "A. Mặc kệ, đó chỉ là trò đùa.",
            score: 0,
          },
          {
            answerId: "2",
            answerContent: "B. Gọi người đó vào phòng và mắng anh ta.",
            score: 0,
          },
          {
            answerId: "3",
            answerContent:
              "C. Ngay lập tức nói với anh ta rằng công ty không chấp nhận những trò đùa như vậy.",
            score: 20,
          },
          {
            answerId: "4",
            answerContent:
              "D. Khuyên người đó tham gia khóa học chống phân biệt chủng tộc.",
            score: 0,
          },
        ],
      },
    {
      index: 6,
      content:
        "Bạn thân bạn đang lái xe thì đột nhiên bị xe của người khác tông vào, khiến anh ấy rất tức giận. Bạn sẽ làm gì để anh bạn ấy bình tĩnh trở lại?",
      answers: [
        {
          answerId: "1",
          answerContent: "A. Khuyên ngăn anh ấy bỏ qua. Không ai bị thương, không có vấn đề gì lớn.",
          score: 0,
        },
        {
          answerId: "2",
          answerContent: "B. Chuyển sự chú ý bằng một bài hát anh ấy thích.",
          score: 5,
        },
        {
          answerId: "3",
          answerContent: "C. Cùng anh ấy đổ lỗi cho người lái xe kia, thể hiện rằng bạn đứng về phía anh ấy.",
          score: 5,
        },
        {
          answerId: "4",
          answerContent: "D. Kể với anh ấy trải nghiệm tương tự của bạn. Lúc đó bạn cũng rất tức giận, nhưng sau đó bạn thấy tài xế bị tai nạn và được đưa đi cấp cứu.",
          score: 20,
        },
      ],
    },
    {
      index: 7,
      content:
        "Bạn và chồng/vợ mâu thuẫn dẫn đến cãi nhau gay gắt. Trong lúc nóng nảy, cả hai đã xô xát với nhau, dù hai bạn thực sự không muốn. Lúc đó, bạn sẽ làm gì?",
      answers: [
        {
          answerId: "1",
          answerContent: "A. Im lặng 20 phút sau đó tiếp tục tranh luận.",
          score: 20,
        },
        {
          answerId: "2",
          answerContent: "B. Ngừng tranh cãi, im lặng mặc cho dù đối phương nói gì.",
          score: 0,
        },
        {
          answerId: "3",
          answerContent: "C. Xin lỗi đối phương và yêu cầu anh ấy/cô ấy xin lỗi.",
          score: 0,
        },
        {
          answerId: "4",
          answerContent: "D. Dừng lại sắp xếp suy nghĩ, sau đó trình bày quan điểm của bạn.",
          score: 0,
        },
      ],
    },
    {
      index: 8,
      content:
        "Bạn là trưởng bộ phận và muốn đề xuất biện pháp để giải quyết các vấn đề trong công việc. Vậy bạn sẽ làm gì trước tiên?",
      answers: [
        {
          answerId: "1",
          answerContent: "A. Sắp xếp lịch họp mỗi ngày để tối đa hóa thời gian thảo luận với mọi người.",
          score: 0,
        },
        {
          answerId: "2",
          answerContent: "B. Cho mọi người thời gian để tìm hiểu nhau.",
          score: 20,
        },
        {
          answerId: "3",
          answerContent: "C. Yêu cầu từng người chia sẻ cách giải quyết vấn đề.",
          score: 0,
        },
        {
          answerId: "4",
          answerContent: "D. Khuyến khích mọi người chia sẻ nhiều ý tưởng sáng tạo.",
          score: 0,
        },
      ],
    },
    {
      index: 9,
      content:
        "Con trai 3 tuổi của bạn rất nhút nhát. Bé sợ người lạ và sợ đến những nơi xa lạ. Bạn sẽ làm gì?",
      answers: [
        {
          answerId: "1",
          answerContent: "A. Chấp nhận tính nhút nhát của trẻ, xem xét cách để bé tránh được những nơi cảm thấy không được thoải mái.",
          score: 0,
        },
        {
          answerId: "2",
          answerContent: "B. Đưa con đến gặp chuyên gia tâm lý.",
          score: 5,
        },
        {
          answerId: "3",
          answerContent: "C. Cố tình đưa con đi gặp nhiều người, đến những nơi xa lạ để con vượt qua nỗi sợ.",
          score: 0,
        },
        {
          answerId: "4",
          answerContent: "D. Lên kế hoạch cho con học cách đối phó với người lạ theo mức độ tăng dần.",
          score: 20,
        },
      ],
    },
    {
      index: 10,
      content:
        "Bạn muốn bắt đầu học lại loại nhạc cụ đã từng học khi còn nhỏ. Bạn sẽ làm gì để tận dụng tối đa thời gian?",
      answers: [
        {
          answerId: "1",
          answerContent: "A. Luyện tập đều đặn mỗi ngày.",
          score: 0,
        },
        {
          answerId: "2",
          answerContent: "B. Lựa chọn bản nhạc có thể cải thiện khả năng của bạn để luyện tập.",
          score: 20,
        },
        {
          answerId: "3",
          answerContent: "C. Chỉ tập nếu có hứng thú.",
          score: 0,
        },
        {
          answerId: "4",
          answerContent: "D. Chọn bản nhạc khó hơn so với khả năng những nếu bạn luyện tập nhiều thì vẫn chơi được.",
          score: 0,
        },
      ],
    },
];
  
export default eqQuestions;