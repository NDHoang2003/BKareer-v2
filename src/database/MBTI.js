const MBTI = [
  {
    id: "1",
    title: "Tại một buổi tiệc, bạn sẽ:",
    options: [
      {
        optionID: "1",
        optionContent: "Giao tiếp với nhiều người, kể cả người lạ",
      },
      {
        optionID: "2",
        optionContent: "Chỉ giao tiếp với với một số ít người mà bạn đã quen",
      }
    ],
  },
  {
    id: "2",
    title: "Bạn thấy mình là người nghiêng về kiểu nào nhiều hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Thực tế",
      },
      {
        optionID: "2",
        optionContent: "Sáng tạo",
      }
    ],
  },
  {
    id: "3",
    title: "Bạn nghĩ tình huống nào tồi tệ hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Đầu óc của bạn cứ “bay bổng trên mây",
      },
      {
        optionID: "2",
        optionContent: "Cuộc sống của bạn thật nhàm chán và không bao giờ thay đổi",
      }
    ],
  },
  {
    id: "4",
    title: "Bạn sẽ bị ấn tượng hơn với",
    options: [
      {
        optionID: "1",
        optionContent: "Các nguyên tắc",
      },
      {
        optionID: "2",
        optionContent: "Những cảm xúc",
      }
    ],
  },
  {
    id: "5",
    title: "Khi quyết định việc gì đó, bạn thường hay dựa vào:",
    options: [
      {
        optionID: "1",
        optionContent: "Sự thuyết phục",
      },
      {
        optionID: "2",
        optionContent: "Sự đồng cảm",
      }
    ],
  },
  {
    id: "6",
    title: "Bạn thích làm việc theo kiểu nào nhiều hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Theo đúng thời hạn",
      },
      {
        optionID: "2",
        optionContent: "Tùy hứng",
      }
    ],
  },
  {
    id: "7",
    title: "Bạn có khuynh hướng đưa ra các lựa chọn",
    options: [
      {
        optionID: "1",
        optionContent: "Rất cẩn thận",
      },
      {
        optionID: "2",
        optionContent: "Phần nào theo cảm nhận",
      }
    ],
  },
  {
    id: "8",
    title: "Tại các bữa tiệc, bạn thường:",
    options: [
      {
        optionID: "1",
        optionContent: "Ở lại tới cùng và cảm thấy càng lúc càng hào hứng",
      },
      {
        optionID: "2",
        optionContent: "Ra về sớm vì cảm thấy mệt mỏi dần",
      }
    ],
  },
  {
    id: "9",
    title: "Kiểu người nào sẽ thu hút bạn hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Người thực tế và có lý lẽ",
      },
      {
        optionID: "2",
        optionContent: "Người giàu trí tưởng tượng",
      }
    ],
  },
  {
    id: "10",
    title: "Điều nào khiến bạn thấy thích thú hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Những điều thực tế",
      },
      {
        optionID: "2",
        optionContent: "Những ý tưởng khả thi",
      }
    ],
  },
  {
    id: "11",
    title: "Khi đánh giá hoặc phán xét người khác, bạn thường hay dựa vào điều gì?",
    options: [
      {
        optionID: "1",
        optionContent: "Luật lệ và nguyên tắc",
      },
      {
        optionID: "2",
        optionContent: "Hoàn cảnh",
      }
    ],
  },
  {
    id: "12",
    title: "Khi tiếp cận, tiếp xúc người khác, bạn nghiêng về hướng nào hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Tiếp cận theo hướng khách quan",
      },
      {
        optionID: "2",
        optionContent: "Tiếp cận theo hướng sử dụng trải nghiệm cá nhân",
      }
    ],
  },
  {
    id: "13",
    title: "Phong cách của bạn nghiêng về hướng nào hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Đúng giờ, nghiêm túc",
      },
      {
        optionID: "2",
        optionContent: "Nhàn nhã, thoải mái",
      }
    ],
  },
  {
    id: "14",
    title: "Bạn cảm thấy không thoải mái khi có những việc:",
    options: [
      {
        optionID: "1",
        optionContent: "Chưa hoàn thiện",
      },
      {
        optionID: "2",
        optionContent: "Đã quá hoàn thiện",
      }
    ],
  },
  {
    id: "15",
    title: "Trong các mối quan hệ xã hội, bạn thường",
    options: [
      {
        optionID: "1",
        optionContent: "Luôn nắm bắt kịp thời thông tin về các vấn đề của mọi người",
      },
      {
        optionID: "2",
        optionContent: "Thường biết thông tin sau những người khác",
      }
    ],
  },
  {
    id: "16",
    title: "Với các công việc thông thường, bạn nghiêng về cách:",
    options: [
      {
        optionID: "1",
        optionContent: "Làm theo cách thông thường",
      },
      {
        optionID: "2",
        optionContent: "Làm theo cách của riêng mình",
      }
    ],
  },
  {
    id: "17",
    title: "Các nhà văn nên:",
    options: [
      {
        optionID: "1",
        optionContent: "Viết những gì họ nghĩ và chân thật với những gì mình viết",
      },
      {
        optionID: "2",
        optionContent: "Diễn đạt sự việc bằng cách so sánh hay liên tưởng",
      }
    ],
  },
  {
    id: "18",
    title: "Điều gì lôi cuốn bạn hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Tính nhất quán của tư duy, suy nghĩ",
      },
      {
        optionID: "2",
        optionContent: "Sự hòa hợp trong các mối quan hệ của con người",
      }
    ],
  },
  {
    id: "19",
    title: "Bạn cảm thấy thoải mái hơn khi đưa ra:",
    options: [
      {
        optionID: "1",
        optionContent: "Những đánh giá, nhận xét một cách logic",
      },
      {
        optionID: "2",
        optionContent: "Những đánh giá, nhận xét một cách có ý nghĩa",
      }
    ],
  },
  {
    id: "20",
    title: "Bạn thích những điều:",
    options: [
      {
        optionID: "1",
        optionContent: "Đã được sắp xếp, quyết định trước",
      },
      {
        optionID: "2",
        optionContent: "Chưa xác định, chưa được quyết định",
      }
    ],
  },
  {
    id: "21",
    title: "Bạn tự thấy mình:",
    options: [
      {
        optionID: "1",
        optionContent: "Nghiêm túc, quyết đoán",
      },
      {
        optionID: "2",
        optionContent: "Dễ gần, thoải mái",
      }
    ],
  },
  {
    id: "22",
    title: "Khi nói chuyện điện thoại, bạn:",
    options: [
      {
        optionID: "1",
        optionContent: "Cứ gọi bình thường",
      },
      {
        optionID: "2",
        optionContent: "Chuẩn bị trước những điều sẽ nói",
      }
    ],
  },
  {
    id: "23",
    title: "Những sự kiện trong thực tế",
    options: [
      {
        optionID: "1",
        optionContent: "Bản thân nó giải thích cho chính nó",
      },
      {
        optionID: "2",
        optionContent: "Nó là bằng chứng giải thích cho các quy tắc, quy luật",
      }
    ],
  },
  {
    id: "24",
    title: "Những người có tầm nhìn xa/người lo xa",
    options: [
      {
        optionID: "1",
        optionContent: "Thường gây khó chịu cho người khác",
      },
      {
        optionID: "2",
        optionContent: "Khá thú vị",
      }
    ],
  },
  {
    id: "25",
    title: "Bạn thường là người có",
    options: [
      {
        optionID: "1",
        optionContent: "Cái đầu lạnh",
      },
      {
        optionID: "2",
        optionContent: "Trái tim nóng",
      }
    ],
  },
  {
    id: "26",
    title: "Điều nào tồi tệ hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Không công bằng",
      },
      {
        optionID: "2",
        optionContent: "Tàn nhẫn",
      }
    ],
  },
  {
    id: "27",
    title: "Các sự kiện nên xảy ra theo hướng:",
    options: [
      {
        optionID: "1",
        optionContent: "Được lựa chọn và cân nhắc kỹ lưỡng",
      },
      {
        optionID: "2",
        optionContent: "Ngẫu nhiên và tự nhiên",
      }
    ],
  },
  {
    id: "28",
    title: "Bạn cảm thấy thoải mái hơn khi",
    options: [
      {
        optionID: "1",
        optionContent: "Đã mua một thứ gì đó",
      },
      {
        optionID: "2",
        optionContent: "Đang lựa chọn để mua",
      }
    ],
  },
  {
    id: "29",
    title: "Trong công ty, bạn là người:",
    options: [
      {
        optionID: "1",
        optionContent: "Khởi xướng các câu chuyện",
      },
      {
        optionID: "2",
        optionContent: "Đợi người khác bắt chuyện với mình",
      }
    ],
  },
  {
    id: "30",
    title: "Đối với những quy ước, quy tắc thông thường trong xã hội, bạn:",
    options: [
      {
        optionID: "1",
        optionContent: "Ít khi nghi ngờ những điều này",
      },
      {
        optionID: "2",
        optionContent: "Thường xem xét lại tính đúng đắn của những điều đó",
      }
    ],
  },
  {
    id: "31",
    title: "Trẻ em thường:",
    options: [
      {
        optionID: "1",
        optionContent: "Chưa cố gắng đủ",
      },
      {
        optionID: "2",
        optionContent: "Chưa vui chơi đủ",
      }
    ],
  },
  {
    id: "32",
    title: "Khi đưa ra các quyết định, bạn sẽ thấy thoải mái hơn với",
    options: [
      {
        optionID: "1",
        optionContent: "Các tiêu chuẩn",
      },
      {
        optionID: "2",
        optionContent: "Cảm xúc, cảm nhận",
      }
    ],
  },
  {
    id: "33",
    title: "Bạn nghiêng về tính cách nào hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Cứng rắn",
      },
      {
        optionID: "2",
        optionContent: "Nhẹ nhàng",
      }
    ],
  },
  {
    id: "34",
    title: "Theo bạn, khả năng nào đáng khâm phục hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Khả năng tổ chức và làm việc có phương pháp",
      },
      {
        optionID: "2",
        optionContent: "Khả năng thích ứng và xoay xở trước mọi tình huống",
      }
    ],
  },
  {
    id: "35",
    title: "Bạn đề cao tố chất nào hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Sự chắc chắn",
      },
      {
        optionID: "2",
        optionContent: "Sự cởi mở",
      }
    ],
  },
  {
    id: "36",
    title: "Khi phải tương tác với người khác ở các tình huống và vấn đề mới lạ, không thường gặp, bạn thường:",
    options: [
      {
        optionID: "1",
        optionContent: "Thấy phấn chấn và hào hứng",
      },
      {
        optionID: "2",
        optionContent: "Cảm thấy mệt mỏi",
      }
    ],
  },
  {
    id: "37",
    title: "Thường thì bạn là:",
    options: [
      {
        optionID: "1",
        optionContent: "Người thực tế",
      },
      {
        optionID: "2",
        optionContent: "Người có khả năng tưởng tượng phong phú",
      }
    ],
  },
  {
    id: "38",
    title: "Bạn thường có xu hướng:",
    options: [
      {
        optionID: "1",
        optionContent: "Xem người khác có thể làm được việc gì hữu ích",
      },
      {
        optionID: "2",
        optionContent: "Xem người khác sẽ nghĩ và cảm nhận như thế nào",
      }
    ],
  },
  {
    id: "39",
    title: "Bạn cảm thấy thoải mái hơn khi:",
    options: [
      {
        optionID: "1",
        optionContent: "Thảo luận một vân đề kĩ lưỡng, triệt để",
      },
      {
        optionID: "2",
        optionContent: "Đạt được thỏa thuận, sự nhất trí về vấn đề",
      }
    ],
  },
  {
    id: "40",
    title: "Cái đầu hay trái tim chi phối bạn nhiều hơn",
    options: [
      {
        optionID: "1",
        optionContent: "Cái đầu",
      },
      {
        optionID: "2",
        optionContent: "Trái tim",
      }
    ],
  },
  {
    id: "41",
    title: "Bạn cảm thấy thoải mái hơn khi làm các công việc theo dạng",
    options: [
      {
        optionID: "1",
        optionContent: "Được giao trọn gói, làm xong hết rồi bàn giao",
      },
      {
        optionID: "2",
        optionContent: "Công việc làm hàng ngày, theo lịch",
      }
    ],
  },
  {
    id: "42",
    title: "Bạn có xu hướng tìm kiếm những điều:",
    options: [
      {
        optionID: "1",
        optionContent: "Theo trật tự, thứ tự",
      },
      {
        optionID: "2",
        optionContent: "Ngẫu nhiên",
      }
    ],
  },
  {
    id: "43",
    title: "Bạn thích kiểu nào hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Nhiều bạn bè ở mức độ xã giao",
      },
      {
        optionID: "2",
        optionContent: "Một vài người bạn thân",
      }
    ],
  },
  {
    id: "44",
    title: "Bạn thường dựa vào:",
    options: [
      {
        optionID: "1",
        optionContent: "Sự kiện, thông tin thực tế",
      },
      {
        optionID: "2",
        optionContent: "Nguyên lý, nguyên tắc",
      }
    ],
  },
  {
    id: "45",
    title: "Bạn hứng thú với việc gì hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Sản xuất và phân phối",
      },
      {
        optionID: "2",
        optionContent: "Thiết kế và nghiên cứu",
      }
    ],
  },
  {
    id: "46",
    title: "Lời khen nào giá trị hơn?",
    options: [
      {
        optionID: "1",
        optionContent: '"Đó là một người có suy nghĩ rất logic"',
      },
      {
        optionID: "2",
        optionContent: '"Đó là một người rất tình cảm, tinh tế"',
      }
    ],
  },
  {
    id: "47",
    title: "Bạn thích mình có tố chất nào hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Kiên định, vững vàng",
      },
      {
        optionID: "2",
        optionContent: "Toàn tâm, cống hiến",
      }
    ],
  },
  {
    id: "48",
    title: "Bạn thường thích điều nào hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Một tuyên bố cuối cùng, không thay đổi",
      },
      {
        optionID: "2",
        optionContent: "Một tuyên bố dự kiến, ban đầu",
      }
    ],
  },
  {
    id: "49",
    title: "Bạn thấy thoải mái hơn vào lúc:",
    options: [
      {
        optionID: "1",
        optionContent: "Trước khi đưa ra quyết định",
      },
      {
        optionID: "2",
        optionContent: "Sau khi đưa ra quyết định",
      }
    ],
  },
  {
    id: "50",
    title: "Bạn có thấy mình:",
    options: [
      {
        optionID: "1",
        optionContent: "Dễ dàng bắt chuyện và kéo dài cuộc trò chuyện với người mới gặp",
      },
      {
        optionID: "2",
        optionContent: "Khó mà trò chuyện nhiều với những người mới quen",
      }
    ],
  },
  {
    id: "51",
    title: "Bạn có xu hướng tin tưởng vào:",
    options: [
      {
        optionID: "1",
        optionContent: "Kinh nghiệm của mình",
      },
      {
        optionID: "2",
        optionContent: "Linh cảm của mình",
      }
    ],
  },
  {
    id: "52",
    title: "Bạn cho rằng mình thuộc tuýp người nào hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Người thực tế",
      },
      {
        optionID: "2",
        optionContent: "Người khôn khéo",
      }
    ],
  },
  {
    id: "53",
    title: "Theo bạn ai là người đáng được khen ngợi hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Một người giàu lý trí",
      },
      {
        optionID: "2",
        optionContent: "Một người giàu cảm xúc",
      }
    ],
  },
  {
    id: "54",
    title: "Bạn có xu hướng hành xử:",
    options: [
      {
        optionID: "1",
        optionContent: "Công bằng, vô tư",
      },
      {
        optionID: "2",
        optionContent: "Thông cảm, đồng cảm",
      }
    ],
  },
  {
    id: "55",
    title: "Bạn thích:",
    options: [
      {
        optionID: "1",
        optionContent: "Đảm bảo rằng mọi việc được chuẩn bị, thu xếp sẵn sàng",
      },
      {
        optionID: "2",
        optionContent: "Để mọi việc diễn ra tự nhiên",
      }
    ],
  },
  {
    id: "56",
    title: "Trong các mối quan hệ thì mọi việc:",
    options: [
      {
        optionID: "1",
        optionContent: "Có thể thảo luận để giải quyết được",
      },
      {
        optionID: "2",
        optionContent: "Diễn ra ngẫu nhiên và tùy theo điều kiện hoàn cảnh",
      }
    ],
  },
  {
    id: "57",
    title: "Khi chuông điện thoại reo, bạn sẽ:",
    options: [
      {
        optionID: "1",
        optionContent: "Là người đầu tiên nhấc máy",
      },
      {
        optionID: "2",
        optionContent: "Hy vọng có người khác sẽ nhấc máy",
      }
    ],
  },
  {
    id: "58",
    title: "Bạn đánh giá cao điều gì trong mình hơn:",
    options: [
      {
        optionID: "1",
        optionContent: "Nhận thức tốt về các yếu tố thực tế",
      },
      {
        optionID: "2",
        optionContent: "Có trí tưởng tượng phong phú, rực rỡ",
      }
    ],
  },
  {
    id: "59",
    title: "Bạn sẽ chú tâm hơn đến:",
    options: [
      {
        optionID: "1",
        optionContent: "Các nguyên tắc, nguyên lý cơ bản",
      },
      {
        optionID: "2",
        optionContent: "Các ngụ ý, hàm ý, ẩn ý",
      }
    ],
  },
  {
    id: "60",
    title: "Điều gì có vẻ sẽ là một lỗi lớn hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Quá nồng nhiệt, thiết tha",
      },
      {
        optionID: "2",
        optionContent: "Quá khách quan, thờ ơ",
      }
    ],
  },
  {
    id: "61",
    title: "Về cơ bản, bạn sẽ đánh giá mình là người thế nào?",
    options: [
      {
        optionID: "1",
        optionContent: "Thiết thực, ít bị chi phối bởi tình cảm",
      },
      {
        optionID: "2",
        optionContent: "Từ tâm, đa cảm",
      }
    ],
  },
  {
    id: "62",
    title: "Tình huống nào sẽ lôi cuốn bạn hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Tình huống rõ ràng, có kế hoạch",
      },
      {
        optionID: "2",
        optionContent: "Tình huống không xác định, không có kế hoạch",
      }
    ],
  },
  {
    id: "63",
    title: "Bạn là người có xu hướng nào hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Theo thói quen",
      },
      {
        optionID: "2",
        optionContent: "Hay thay đổi",
      }
    ],
  },
  {
    id: "64",
    title: "Bạn có xu hướng nào hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Là người dễ tiếp cận",
      },
      {
        optionID: "2",
        optionContent: "Ở mức độ nào đó là người kín đáo",
      }
    ],
  },
  {
    id: "65",
    title: "Khi viết, bạn thích:",
    options: [
      {
        optionID: "1",
        optionContent: "Viết theo hướng văn chương hơn",
      },
      {
        optionID: "2",
        optionContent: "Viết theo số liệu, dữ liệu hơn",
      }
    ],
  },
  {
    id: "66",
    title: "Đối với bạn, điều gì khó thực hiện hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Hiểu và chia sẻ với người khác",
      },
      {
        optionID: "2",
        optionContent: "Điều khiển người khác",
      }
    ],
  },
  {
    id: "67",
    title: "Bạn mong ước mình sẽ có thêm nhiều điều gì?",
    options: [
      {
        optionID: "1",
        optionContent: "Lí trí và khả năng nhận xét rõ ràng",
      },
      {
        optionID: "2",
        optionContent: "Tình thương, lòng trắc ẩn sâu sắc",
      }
    ],
  },
  {
    id: "68",
    title: "Điều gì sẽ là lỗi lớn hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Hành động bừa bãi, không cân nhắc",
      },
      {
        optionID: "2",
        optionContent: "Hành động chỉ trích, phê phán",
      }
    ],
  },
  {
    id: "69",
    title: "Bạn sẽ thích sự kiện nào hơn?",
    options: [
      {
        optionID: "1",
        optionContent: "Sự kiện có lên kế hoạch trước",
      },
      {
        optionID: "2",
        optionContent: "Sự kiện không có kế hoạch trước",
      }
    ],
  },
  {
    id: "70",
    title: "Bạn thường có hành động:",
    options: [
      {
        optionID: "1",
        optionContent: "Cân nhắc thận trọng",
      },
      {
        optionID: "2",
        optionContent: "Tự nhiên, tự phát",
      }
    ],
  },
];

export default MBTI;
