const LeftBrain = {
  name: "left",
  img: "https://www.simplypsychology.org/wp-content/uploads/left-right-brain-1024x681.jpg",
  content: "Người thuận não trái",
  description:
    "Người thuận não trái là những người có lượng neuron thần kinh được phân bổ ở vị trí não trái nhiều hơn so với bên còn lại. Bán cầu não trái có nhiệm vụ thiên về ngôn ngữ, tư duy logic, quan sát, tính toán, sắp xếp và phân loại, ghi nhớ, tri giác về thời gian. Những người thuận não trái thường sẽ kỷ luật hơn, họ thường xuyên nhìn đồng hồ và xử lý mọi thông tin theo quá trình một cách tuần tự.",
  char: "Người thuận não trái thường có những tính cách nổi bật như: Lý trí, logic; tỉ mỉ, cẩn thận; trật tự; thực dụng.",
  job: "Người thuận não trái thường phù hợp với các nghề nghiệp liên quan đến số liệu, logic, phân tích và ngôn ngữ như Phân tích tài chính, Kế toán, Luật sư, Kỹ sư xây dựng, Lập trình."
};

const MiddleBrain = {
  name: "middle",
  img: "https://www.simplypsychology.org/wp-content/uploads/left-right-brain-1024x681.jpg",
  content: "Người thuận cả hai bán cầu não",
  description:
    "Những người thuận cả hai bên bán cầu não sẽ có được sự lý trí và tính logic của bán cầu não trái, đồng thời còn có trực giác và tính nghệ thuật của não phải. Vì vậy, những người sử dụng cân bằng 2 bán cầu não thường rất giỏi giao tiếp cùng khả năng tư duy, nắm bắt tâm lý người đối diện và có nhân cách tốt.",
  char: "",
  job: "Những người sử dụng đồng thời cả não trái và não phải ít đối diện với căng thẳng và áp lực, họ luôn biết cách cân bằng cuộc sống và dễ phát hiện được đam mê, sở thích của mình và tìm kiếm được nghề nghiệp phù hợp.",
}

const RightBrain = {
  name: "right",
  img: "https://www.simplypsychology.org/wp-content/uploads/left-right-brain-1024x681.jpg",
  content: "Người thuận não phải",
  description:
    "Người thuận não phải sẽ có số lượng neuron thần kinh nhiều hơn ở bên não phải. Người thuận não phải thường được mô tả là giàu cảm xúc, trực giác tốt và óc sáng tạo cao hơn. Những người này thường có xu hướng làm việc liên quan đến sáng tạo và suy nghĩ tự do, chẳng hạn như trở thành một nghệ sĩ, nhà tâm lý học hoặc nhà văn, có khả năng nhìn thấu được những lời dối trá hay những lời bịp bợm.",
  char: "Người thuận não phải sẽ thường có những khả năng đặc trưng dựa theo một số đặc điểm như: Nhận dạng khuôn mặt tốt; Khả năng thể hiện cảm xúc giỏi; Có khả năng cảm nhạc; Có khả năng nhận ra cảm xúc và đồng cảm với người khác; Biết thưởng thức màu sắc; Sử dụng trí tưởng tượng tốt; Trực giác tốt; Có đầu óc sáng tạo.",
  job: "Người thuận não phải thường phù hợp với các lĩnh vực sáng tạo như Thiết kế đồ hoạ, Nhà tâm lý học, Hoạ sĩ, Kiến trúc sư.",
};

const array = [
  LeftBrain,
  MiddleBrain,
  RightBrain
];

const getdata = (data) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === data) {
      return array[i];
    }
  }
};

export default { getdata };