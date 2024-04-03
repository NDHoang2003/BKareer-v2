const MBTI = [
  {
    id: "1",
    title: "Tại một buổi tiệc, bạn sẽ:",
    option1: "Giao tiếp với nhiều người, kể cả người lạ",
    option2: "Chỉ giao tiếp với với một số ít người mà bạn đã quen",
  },
  {
    id: "2",
    title: "Bạn thấy mình là người nghiêng về kiểu nào nhiều hơn?",
    option1: "Thực tế",
    option2: "Sáng tạo",
  },
  {
    id: "3",
    title: "Bạn nghĩ tình huống nào tồi tệ hơn?",
    option1: "Đầu óc của bạn cứ “bay bổng trên mây",
    option2: "Cuộc sống của bạn thật nhàm chán và không bao giờ thay đổi",
  },
  {
    id: "4",
    title: "Bạn sẽ bị ấn tượng hơn với",
    option1: "Các nguyên tắc",
    option2: "Những cảm xúc",
  },
  {
    id: "5",
    title: "Khi quyết định việc gì đó, bạn thường hay dựa vào:",
    option1: "Sự thuyết phục",
    option2: "Sự đồng cảm",
  },
  {
    id: "6",
    title: "Bạn thích làm việc theo kiểu nào nhiều hơn?",
    option1: "Theo đúng thời hạn",
    option2: "Tùy hứng",
  },
  {
    id: "7",
    title: "Bạn có khuynh hướng đưa ra các lựa chọn",
    option1: "Rất cẩn thận",
    option2: "Phần nào theo cảm nhận",
  },
  {
    id: "8",
    title: "Tại các bữa tiệc, bạn thường:",
    option1: "Ở lại tới cùng và cảm thấy càng lúc càng hào hứng",
    option2: "Ra về sớm vì cảm thấy mệt mỏi dần",
  },
  {
    id: "9",
    title: "Kiểu người nào sẽ thu hút bạn hơn?",
    option1: "Người thực tế và có lý lẽ",
    option2: "Người giàu trí tưởng tượng",
  },
  {
    id: "10",
    title: "Điều nào khiến bạn thấy thích thú hơn?",
    option1: "Những điều thực tế",
    option2: "Những ý tưởng khả thi",
  },
  {
    id: "11",
    title:
      "Khi đánh giá hoặc phán xét người khác, bạn thường hay dựa vào điều gì?",
    option1: "Luật lệ và nguyên tắc",
    option2: "Hoàn cảnh",
  },
  {
    id: "12",
    title: "Khi tiếp cận, tiếp xúc người khác, bạn nghiêng về hướng nào hơn?",
    option1: "Tiếp cận theo hướng khách quan",
    option2: "Tiếp cận theo hướng sử dụng trải nghiệm cá nhân",
  },
  {
    id: "13",
    title: "Phong cách của bạn nghiêng về hướng nào hơn?",
    option1: "Đúng giờ, nghiêm túc",
    option2: "Nhàn nhã, thoải mái",
  },
  {
    id: "14",
    title: "Bạn cảm thấy không thoải mái khi có những việc:",
    option1: "Chưa hoàn thiện",
    option2: "Đã quá hoàn thiện",
  },
  {
    id: "15",
    title: "Trong các mối quan hệ xã hội, bạn thường",
    option1: "Luôn nắm bắt kịp thời thông tin về các vấn đề của mọi người",
    option2: "Thường biết thông tin sau những người khác",
  },
  {
    id: "16",
    title: "Với các công việc thông thường, bạn nghiêng về cách:",
    option1: "Làm theo cách thông thường",
    option2: "Làm theo cách của riêng mình",
  },
  {
    id: "17",
    title: "Các nhà văn nên:",
    option1: "Viết những gì họ nghĩ và chân thật với những gì mình viết",
    option2: "Diễn đạt sự việc bằng cách so sánh hay liên tưởng",
  },
  {
    id: "18",
    title: "Điều gì lôi cuốn bạn hơn?",
    option1: "Tính nhất quán của tư duy, suy nghĩ",
    option2: "Sự hòa hợp trong các mối quan hệ của con người",
  },
  {
    id: "19",
    title: "Bạn cảm thấy thoải mái hơn khi đưa ra:",
    option1: "Những đánh giá, nhận xét một cách logic",
    option2: "Những đánh giá, nhận xét một cách có ý nghĩa",
  },
  {
    id: "20",
    title: "Bạn thích những điều:",
    option1: "Đã được sắp xếp, quyết định trước",
    option2: "Chưa xác định, chưa được quyết định",
  },
  {
    id: "21",
    title: "Bạn tự thấy mình:",
    option1: "Nghiêm túc, quyết đoán",
    option2: "Dễ gần, thoải mái",
  },
  {
    id: "22",
    title: "Khi nói chuyện điện thoại, bạn:",
    option1: "Cứ gọi bình thường",
    option2: "Chuẩn bị trước những điều sẽ nói",
  },
  {
    id: "23",
    title: "Những sự kiện trong thực tế",
    option1: "Bản thân nó giải thích cho chính nó”",
    option2: "Nó là bằng chứng giải thích cho các quy tắc, quy luật",
  },
  {
    id: "24",
    title: "Những người có tầm nhìn xa/người lo xa",
    option1: "Thường gây khó chịu cho người khác",
    option2: "Khá thú vị",
  },
  {
    id: "25",
    title: "Bạn thường là người có",
    option1: "Cái đầu lạnh",
    option2: "Trái tim nóng",
  },
  {
    id: "26",
    title: "Điều nào tồi tệ hơn?",
    option1: "Không công bằng",
    option2: "Tàn nhẫn",
  },
  {
    id: "27",
    title: "Các sự kiện nên xảy ra theo hướng:",
    option1: "Được lựa chọn và cân nhắc kỹ lưỡng",
    option2: "Ngẫu nhiên và tự nhiên",
  },
  {
    id: "28",
    title: "Bạn cảm thấy thoải mái hơn khi",
    option1: "Đã mua một thứ gì đó",
    option2: "Đang lựa chọn để mua",
  },
  {
    id: "29",
    title: "Trong công ty, bạn là người:",
    option1: "Khởi xướng các câu chuyện",
    option2: "Đợi người khác bắt chuyện với mình",
  },
  {
    id: "30",
    title: "Đối với những quy ước, quy tắc thông thường trong xã hội, bạn:",
    option1: "Ít khi nghi ngờ những điều này",
    option2: "Thường xem xét lại tính đúng đắn của những điều đó",
  },
  {
    id: "31",
    title: "Trẻ em thường:",
    option1: "Chưa cố gắng đủ",
    option2: "Chưa vui chơi đủ",
  },
  {
    id: "32",
    title: "Khi đưa ra các quyết định, bạn sẽ thấy thoải mái hơn với",
    option1: "Các tiêu chuẩn",
    option2: "Cảm xúc, cảm nhận",
  },
  {
    id: "33",
    title: "Bạn nghiêng về tính cách nào hơn?",
    option1: "Cứng rắn",
    option2: "Nhẹ nhàng",
  },
  {
    id: "34",
    title: "Theo bạn, khả năng nào đáng khâm phục hơn?",
    option1: "Khả năng tổ chức và làm việc có phương pháp",
    option2: "Khả năng thích ứng và xoay xở trước mọi tình huống",
  },
  {
    id: "35",
    title: "Bạn đề cao tố chất nào hơn?",
    option1: "Sự chắc chắn",
    option2: "Sự cởi mở",
  },
  {
    id: "36",
    title:
      "Khi phải tương tác với người khác ở các tình huống và vấn đề mới lạ, không thường gặp, bạn thường:",
    option1: "Thấy phấn chấn và hào hứng",
    option2: "Cảm thấy mệt mỏi",
  },
  {
    id: "37",
    title: "Thường thì bạn là:",
    option1: "Người thực tế",
    option2: "Người có khả năng tưởng tượng phong phú",
  },
  {
    id: "38",
    title: "Bạn thường có xu hướng:",
    option1: "Xem người khác có thể làm được việc gì hữu ích",
    option2: "Xem người khác sẽ nghĩ và cảm nhận như thế nào",
  },
  {
    id: "39",
    title: "Bạn cảm thấy thoải mái hơn khi:",
    option1: "Thảo luận một vân đề kĩ lưỡng, triệt để",
    option2: "Đạt được thỏa thuận, sự nhất trí về vấn đề",
  },
  {
    id: "40",
    title: "Cái đầu hay trái tim chi phối bạn nhiều hơn",
    option1: "Cái đầu",
    option2: "Trái tim",
  },
  {
    id: "41",
    title: "Bạn cảm thấy thoải mái hơn khi làm các công việc theo dạng",
    option1: "Được giao trọn gói, làm xong hết rồi bàn giao",
    option2: "Công việc làm hàng ngày, theo lịch",
  },
  {
    id: "42",
    title: "Bạn có xu hướng tìm kiếm những điều:",
    option1: "Theo trật tự, thứ tự",
    option2: "Ngẫu nhiên",
  },
  {
    id: "43",
    title: "Bạn thích kiểu nào hơn?",
    option1: "Nhiều bạn bè ở mức độ xã giao",
    option2: "Một vài người bạn thân",
  },
  {
    id: "44",
    title: "Bạn thường dựa vào:",
    option1: "Sự kiện, thông tin thực tế",
    option2: "Nguyên lý, nguyên tắc",
  },
  {
    id: "45",
    title: "Bạn hứng thú với việc gì hơn?",
    option1: "Sản xuất và phân phối",
    option2: "Thiết kế và nghiên cứu",
  },
  {
    id: "46",
    title: "Lời khen nào giá trị hơn?",
    option1: '"Đó là một người có suy nghĩ rất logic"',
    option2: '"Đó là một người rất tình cảm, tinh tế"',
  },
  {
    id: "47",
    title: "Bạn thích mình có tố chất nào hơn?",
    option1: "Kiên định, vững vàng",
    option2: "Toàn tâm, cống hiến",
  },
  {
    id: "48",
    title: "Bạn thường thích điều nào hơn?",
    option1: "Một tuyên bố cuối cùng, không thay đổi",
    option2: "Một tuyên bố dự kiến, ban đầu",
  },
  {
    id: "49",
    title: "Bạn thấy thoải mái hơn vào lúc:",
    option1: "Trước khi đưa ra quyết định",
    option2: "Sau khi đưa ra quyết định",
  },
  {
    id: "50",
    title: "Bạn có thấy mình:",
    option1: "Dễ dàng bắt chuyện và kéo dài cuộc trò chuyện với người mới gặp",
    option2: "Khó mà trò chuyện nhiều với những người mới quen",
  },
  {
    id: "51",
    title: "Bạn có xu hướng tin tưởng vào:",
    option1: "Kinh nghiệm của mình",
    option2: "Linh cảm của mình",
  },
  {
    id: "52",
    title: "Bạn cho rằng mình thuộc tuýp người nào hơn?",
    option1: "Người thực tế",
    option2: "Người khôn khéo",
  },
  {
    id: "53",
    title: "Theo bạn ai là người đáng được khen ngợi hơn?",
    option1: "Một người giàu lý trí",
    option2: "Một người giàu cảm xúc",
  },
  {
    id: "54",
    title: "Bạn có xu hướng hành xử:",
    option1: "Công bằng, vô tư",
    option2: "Thông cảm, đồng cảm",
  },
  {
    id: "55",
    title: "Bạn thích:",
    option1: "Đảm bảo rằng mọi việc được chuẩn bị, thu xếp sẵn sàng",
    option2: "Để mọi việc diễn ra tự nhiên",
  },
  {
    id: "56",
    title: "Trong các mối quan hệ thì mọi việc:",
    option1: "Có thể thảo luận để giải quyết được",
    option2: "Diễn ra ngẫu nhiên và tùy theo điều kiện hoàn cảnh",
  },
  {
    id: "57",
    title: "Khi chuông điện thoại reo, bạn sẽ:",
    option1: "Là người đầu tiên nhấc máy",
    option2: "Hy vọng có người khác sẽ nhấc máy",
  },
  {
    id: "58",
    title: "Bạn đánh giá cao điều gì trong mình hơn:",
    option1: "Nhận thức tốt về các yếu tố thực tế",
    option2: "Có trí tưởng tượng phong phú, rực rỡ",
  },
  {
    id: "59",
    title: "Bạn sẽ chú tâm hơn đến:",
    option1: "Các nguyên tắc, nguyên lý cơ bản",
    option2: "Các ngụ ý, hàm ý, ẩn ý",
  },
  {
    id: "60",
    title: "Điều gì có vẻ sẽ là một lỗi lớn hơn?",
    option1: "Quá nồng nhiệt, thiết tha",
    option2: "Quá khách quan, thờ ơ",
  },
  {
    id: "61",
    title: "Về cơ bản, bạn sẽ đánh giá mình là người thế nào?",
    option1: "Thiết thực, ít bị chi phối bởi tình cảm",
    option2: "Từ tâm, đa cảm",
  },
  {
    id: "62",
    title: "Tình huống nào sẽ lôi cuốn bạn hơn?",
    option1: "Tình huống rõ ràng, có kế hoạch",
    option2: "Tình huống không xác định, không có kế hoạch",
  },
  {
    id: "63",
    title: "Bạn là người có xu hướng nào hơn?",
    option1: "Theo thói quen",
    option2: "Hay thay đổi",
  },
  {
    id: "64",
    title: "Bạn có xu hướng nào hơn?",
    option1: "Là người dễ tiếp cận",
    option2: "Ở mức độ nào đó là người kín đáo",
  },
  {
    id: "65",
    title: "Khi viết, bạn thích:",
    option1: "Viết theo hướng văn chương hơn",
    option2: "Viết theo số liệu, dữ liệu hơn",
  },
  {
    id: "66",
    title: "Đối với bạn, điều gì khó thực hiện hơn?",
    option1: "Hiểu và chia sẻ với người khác",
    option2: "Điều khiển người khác",
  },
  {
    id: "67",
    title: "Bạn mong ước mình sẽ có thêm nhiều điều gì?",
    option1: "Lí trí và khả năng nhận xét rõ ràng",
    option2: "Tình thương, lòng trắc ẩn sâu sắc",
  },
  {
    id: "68",
    title: "Điều gì sẽ là lỗi lớn hơn?",
    option1: "Hành động bừa bãi, không cân nhắc",
    option2: "Hành động chỉ trích, phê phán",
  },
  {
    id: "69",
    title: "Bạn sẽ thích sự kiện nào hơn?",
    option1: "Sự kiện có lên kế hoạch trước",
    option2: "Sự kiện không có kế hoạch trước",
  },
  {
    id: "70",
    title: "Bạn thường có hành động:",
    option1: "Cân nhắc thận trọng",
    option2: "Tự nhiên, tự phát",
  },
];

export default MBTI;