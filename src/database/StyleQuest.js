const questions = [
    {
      index: 1,
      content:
        "Bạn muốn đọc loại sách nào để giải trí?",
      answers: [
        {
          answerId: "1",
          answerContent: "Một cuốn sách có nhiều hình ảnh", 
        },
        {
          answerId: "2",
          answerContent: "Một cuốn sách có rất nhiều từ trong đó", 
        },
        {
          answerId: "3",
          answerContent: "Một cuốn sách có trò chơi tìm kiếm từ hoặc ô chữ", 
        },
  
      ],
  
    },
    {
      index: 2,
      content: "Khi bạn không chắc chắn về cách đánh vần một từ, bạn có xu hướng làm gì nhất?",
      answers: [
        {
          answerId: "4",
          answerContent: "Viết ra để xem có đúng không",
        },
        {
          answerId: "5",
          answerContent: "Đánh vần lớn tiếng để xem nghe có đúng không",
        },
        {
          answerId: "6",
          answerContent: "Dò theo từng chữ cái trên không (đánh vần bằng tay)",
        }
      ]
    },   
    {
      index: 3,
      content: "Bạn đang mua quần áo và đứng chờ thanh toán. Bạn có xu hướng làm gì trong khi chờ đợi?",
      answers: [
        {
          answerId: "7",
          answerContent: "Nhìn quanh các bộ quần áo khác trên giá",
        },
        {
          answerId: "8",
          answerContent: "Nói chuyện với người đứng cạnh bạn trong hàng",
        },
        {
          answerId: "9",
          answerContent: "Cử động tay chân hoặc di chuyển qua lại",
        },
      ],
    },
    {
      index: 4,
      content: "Khi bạn thấy từ 'mèo', điều đầu tiên bạn làm là gì?",
      answers: [
        {
          answerId: "10",
          answerContent: "Hình dung một con mèo trong tâm trí bạn",
        },
        {
          answerId: "11",
          answerContent: "Tự nói từ 'mèo' với chính mình",
        },
        {
          answerId: "12",
          answerContent: "Nghĩ về việc ở cùng một con mèo (vuốt ve hoặc nghe tiếng mèo kêu)",
        },
      ],
    },
    {
      index: 5,
      content: "Cách tốt nhất để bạn ôn tập cho một bài kiểm tra là gì?",
      answers: [
        {
          answerId: "13",
          answerContent: "Đọc sách hoặc ghi chú của bạn và xem lại các biểu đồ hoặc hình ảnh",
        },
        {
          answerId: "14",
          answerContent: "Nhờ ai đó hỏi bạn các câu hỏi mà bạn có thể trả lời thành tiếng",
        },
        {
          answerId: "15",
          answerContent: "Tạo thẻ ghi nhớ mà bạn có thể ôn lại",
        },
      ],
    },
    {
      index: 6,
      content: "Cách tốt nhất để bạn học cách sử dụng một thứ gì đó (như máy tính hoặc trò chơi điện tử) là gì?",
      answers: [
        {
          answerId: "16",
          answerContent: "Nhờ ai đó chỉ cho bạn",
        },
        {
          answerId: "17",
          answerContent: "Đọc hoặc nghe ai đó giải thích",
        },
        {
          answerId: "18",
          answerContent: "Tự mình tìm cách làm",
        },
      ],
    },
    {
      index: 7,
      content: "Nếu bạn tham dự một buổi khiêu vũ ở trường, bạn sẽ nhớ điều gì nhất vào ngày hôm sau?",
      answers: [
        {
          answerId: "19",
          answerContent: "Khuôn mặt của những người đã có mặt",
        },
        {
          answerId: "20",
          answerContent: "Bản nhạc đã được chơi",
        },
        {
          answerId: "21",
          answerContent: "Những điệu nhảy bạn đã thực hiện và thức ăn bạn đã ăn",
        },
      ],
    },
    {
      index: 8,
      content: "Bạn thấy điều gì làm bạn mất tập trung nhất khi bạn đang cố gắng học?",
      answers: [
        {
          answerId: "22",
          answerContent: "Mọi người đi ngang qua bạn",
        },
        {
          answerId: "23",
          answerContent: "Tiếng ồn lớn",
        },
        {
          answerId: "24",
          answerContent: "Ghế ngồi không thoải mái",
        },
      ],
    },
    {
        index: 9,
        content: "Khi bạn tức giận, bạn có xu hướng làm gì nhất?",
        answers: [
          {
            answerId: "25",
            answerContent: "Thể hiện khuôn mặt 'tức giận' của bạn",
          },
          {
            answerId: "26",
            answerContent: "La hét",
          },
          {
            answerId: "27",
            answerContent: "Đập cửa",
          },
        ],
    },
    {
        index: 10,
        content: "Khi bạn vui vẻ, bạn có xu hướng làm gì nhất?",
        answers: [
          {
            answerId: "28",
            answerContent: "Cười toe toét",
          },
          {
            answerId: "29",
            answerContent: "Nói không ngừng",
          },
          {
            answerId: "30",
            answerContent: "Hành động rất phấn khích",
          }
        ],
    },
    {
      index: 11,
      content: "Khi đến một nơi mới, bạn sẽ tìm đường như thế nào?",
      answers: [
        {
          answerId: "31",
          answerContent: "Tìm bản đồ hoặc sơ đồ chỉ ra mọi thứ",
        },
        {
          answerId: "32",
          answerContent: "Hỏi ai đó chỉ đường",
        },
        {
          answerId: "33",
          answerContent: "Cứ bắt đầu đi loanh quanh cho đến khi tìm thấy thứ bạn cần",
        },
      ],
    },
    {
      index: 12,
      content: "Trong ba lớp học sau, bạn yêu thích lớp nào nhất?",
      answers: [
        {
          answerId: "34",
          answerContent: "Lớp học nghệ thuật",
        },
        {
          answerId: "35",
          answerContent: "Lớp học âm nhạc",
        },
        {
          answerId: "36",
          answerContent: "Lớp thể dục",
        },
      ],
    },
    {
      index: 13,
      content: "Khi bạn nghe một bài hát trên radio, bạn có xu hướng làm gì nhất?",
      answers: [
        {
          answerId: "37",
          answerContent: "Hình dung video đi kèm với bài hát",
        },
        {
          answerId: "38",
          answerContent: "Hát hoặc ngân nga theo nhạc",
        },
        {
          answerId: "39",
          answerContent: "Bắt đầu nhảy và gõ nhịp chân",
        },
      ],
    },
    {
      index: 14,
      content: "Điều gì làm bạn mất tập trung nhất khi đang trong lớp học?",
      answers: [
        {
          answerId: "40",
          answerContent: "Ánh sáng quá sáng hoặc quá tối",
        },
        {
          answerId: "41",
          answerContent: "Tiếng ồn từ hành lang hoặc bên ngoài tòa nhà (như giao thông hoặc ai đó đang cắt cỏ)",
        },
        {
          answerId: "42",
          answerContent: "Nhiệt độ quá nóng hoặc quá lạnh",
        },
      ],
    },
    {
      index: 15,
      content: "Bạn thích làm gì để thư giãn?",
      answers: [
        {
          answerId: "43",
          answerContent: "Đọc sách",
        },
        {
          answerId: "44",
          answerContent: "Nghe nhạc",
        },
        {
          answerId: "45",
          answerContent: "Tập thể dục (đi bộ, chạy, chơi thể thao, v.v.)",
        },
      ],
    },
    {
      index: 16,
      content: "Cách tốt nhất để bạn nhớ số điện thoại của một người bạn là gì?",
      answers: [
        {
          answerId: "46",
          answerContent: "Hình dung các số trên điện thoại như khi bạn quay số",
        },
        {
          answerId: "47",
          answerContent: "Nói to nhiều lần",
        },
        {
          answerId: "48",
          answerContent: "Viết ra hoặc lưu vào danh bạ điện thoại",
        },
      ],
    },
    {
      index: 17,
      content: "Nếu bạn thắng một trò chơi, bạn sẽ chọn phần thưởng nào trong ba phần thưởng sau?",
      answers: [
        {
          answerId: "49",
          answerContent: "Một tấm poster treo tường",
        },
        {
          answerId: "50",
          answerContent: "Thẻ quà tặng dịch vụ nghe nhạc trực tuyến",
        },
        {
          answerId: "51",
          answerContent: "Một trò chơi nào đó (hoặc một quả bóng đá, bóng rổ, v.v.)",
        },
      ],
    },
    {
      index: 18,
      content: "Bạn thích đi đâu với nhóm bạn của mình hơn?",
      answers: [
        {
          answerId: "52",
          answerContent: "Xem phim",
        },
        {
          answerId: "53",
          answerContent: "Buổi hòa nhạc",
        },
        {
          answerId: "54",
          answerContent: "Công viên giải trí",
        },
      ],
    },
    {
      index: 19,
      content: "Bạn có xu hướng nhớ điều gì nhất về những người mới gặp?",
      answers: [
        {
          answerId: "55",
          answerContent: "Khuôn mặt của họ nhưng không nhớ tên",
        },
        {
          answerId: "56",
          answerContent: "Tên của họ nhưng không nhớ khuôn mặt",
        },
        {
          answerId: "57",
          answerContent: "Những gì bạn đã nói chuyện với họ",
        },
      ],
    },
    {
      index: 20,
      content: "Khi bạn chỉ đường cho ai đó đến nhà mình, bạn có xu hướng nói gì nhất?",
      answers: [
        {
          answerId: "58",
          answerContent: "Mô tả các tòa nhà và địa danh họ sẽ đi qua",
        },
        {
          answerId: "59",
          answerContent: "Tên của các con đường hoặc đường phố họ sẽ đi qua",
        },
        {
          answerId: "60",
          answerContent: "'Đi theo tôi - sẽ dễ hơn nếu tôi chỉ cho bạn cách đến đó.'",
        },
      ],
    },
  ];
  export default questions;