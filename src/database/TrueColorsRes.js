const Orange = {
  name: "orange",
  img: "https://mypersonalitystyle.com/app/Content/image/TrueColors/Preview",
  content: "Màu Cam",
  description:
    "Những người có tính cách Cam luôn tìm kiếm sự phiêu lưu và niềm vui trong cả công việc và cuộc sống. Họ là những người học hỏi bằng thực hành, nhanh trí, sáng tạo và vui tươi. Những người có tính cách Cam sẽ sử dụng sử dụng sự quyến rũ của mình để trở thành những nhà đàm phán tự nhiên. Họ là những người cạnh tranh, chấp nhận rủi ro và đôi khi có thể hành động bốc đồng. Những người có tính cách Cam cổ vũ người khác đạt được thành công và yêu thích những phần thưởng hữu hình cho nỗ lực của họ. Để phát huy tốt, những người có tính cách Cam cần sự tự do và linh hoạt.",
  tips:
    "Nếu những người có tính cách Cam trở nên tức giận hoặc thách thức, đồng nghiệp có thể châm thêm một chút hài hước vào tình huống để giúp họ lấy lại được cảm xúc. Người quản lý có thể trao cho họ cơ hội lãnh đạo và công nhận những công việc họ đã làm tốt.",
  };

const Green = {
  name: "green",
  img: "https://mypersonalitystyle.com/app/Content/image/TrueColors/Preview",
  content: "Màu Xanh Lá",
  description:
    "Những người có tính cách Xanh Lá thường rất phân tích và tò mò về thế giới xung quanh. Họ là những người suy nghĩ logic, thích nhìn nhận vấn đề ở tầm rộng và đôi khi có vẻ trí thức. Những tính cách Xanh Lá ghét sự lặp lại và thừa thãi. Họ thường là những người giải quyết vấn đề sáng tạo trong tổ chức. Để làm việc hiệu quả, những tính cách Xanh Lá cần được tự do suy nghĩ độc lập.",
  tips:
    "Đôi khi rất khó để nhận biết được liệu những kiểu tính cách Xanh Lá đang im lặng vì họ quá tập trung vào công việc hay vì họ đã mất tập trung. Nếu những kiểu tính cách Xanh Lá không còn hứng thú, họ cần có cơ hội đặt câu hỏi và thời gian để suy nghĩ về các khả năng giải quyết vấn đề. Những kiểu tính cách Xanh Lá cần hiểu được lý do đằng sau tình huống, vì vậy việc giải thích \"tại sao\" là rất quan trọng.",
  };

const Blue = {
  name: "blue",
  img: "https://mypersonalitystyle.com/app/Content/image/TrueColors/Preview",
  content: "Màu Xanh Lam",
  description:
    "Những người có tính cách Xanh Lam cực kỳ coi trọng mối quan hệ. Họ khao khát sự hòa hợp trong công việc và đánh giá cao cơ hội kết nối với những người khác trong nhóm. Những người có tính cách Xanh Lam coi trọng tình bạn và thật sự quan tâm đến người khác. Để làm việc hiệu quả, các loại tính cách màu xanh lam cần tìm được sự chấp nhận trong nhóm và tận hưởng cảm giác thuộc về. Trên thực tế, họ hạnh phúc nhất khi mọi người hòa thuận với nhau.",
  tips: 
    "Nếu một người có tính cách Xanh Lam thường thân thiện trở nên trầm lặng và thu mình, có nghĩa là có điều gì đó không ổn. Để giúp những người có tính cách Xanh Lam lấy lại bản chất vui vẻ tự nhiên của họ, hãy an ủi họ bằng cách lắng nghe những lo lắng và trấn an bằng cách hỗ trợ họ. Đồng nghiệp có thể giúp đỡ bằng cách thể hiện sự quan tâm và bày tỏ sự cảm kích đối với những nỗ lực của họ.",
};

const Gold = {
  name: "gold",
  img: "https://mypersonalitystyle.com/app/Content/image/TrueColors/Preview",
  content: "Màu Vàng",
  description:
    "Những người có tính cách Vàng rất chú ý đến chi tiết, thực tế và chính xác. Các nhà quản lý đánh giá cao tính cách Vàng vì đạo đức làm việc mạnh mẽ của họ, và đồng nghiệp có thể tin tưởng vào họ để tuân thủ quy tắc và hoàn thành nhiệm vụ đúng hạn. Để làm việc hiệu quả, những tính cách Vàng cần cần cảm thấy chuẩn bị cho trách nhiệm của họ. Họ thích bắt đầu với một kế hoạch thực tế để họ có thể tận hưởng cảm giác hoàn thành khi hoàn thành nhiệm vụ.",
  tips: 
    "Nếu những người nhóm tính cách Vàng lo lắng rằng mọi việc không diễn ra tốt đẹp, họ có thể trở nên độc đoán trong nỗ lực nắm quyền và cải thiện tình hình. Cung cấp hướng dẫn rõ ràng và cho họ thời gian riêng để suy nghĩ và đưa ra một kế hoạch khác có thể giúp ích.",
};

const array = [Orange, Green, Blue, Gold];

const getdata = (data) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === data) {
      return array[i];
    }
  }
};

export default { getdata };
