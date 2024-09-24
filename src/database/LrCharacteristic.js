const LeftBrain = {
  name: "left",
  img: "https://www.simplypsychology.org/wp-content/uploads/left-right-brain-1024x681.jpg",
  content: "Người thuận não trái",
  description:
    "Người thuận não trái là những người có lượng neuron thần kinh được phân bổ ở vị trí não trái nhiều hơn so với bên còn lại. Bán cầu não trái có nhiệm vụ thiên về ngôn ngữ, tư duy logic, quan sát, tính toán, sắp xếp và phân loại, ghi nhớ, tri giác về thời gian. Những người thuận não trái thường sẽ kỷ luật hơn, họ thường xuyên nhìn đồng hồ và xử lý mọi thông tin theo quá trình một cách tuần tự.",
  };

const MiddleBrain = {
  name: "middle",
  img: "https://www.simplypsychology.org/wp-content/uploads/left-right-brain-1024x681.jpg",
  content: "Người thuận cả hai bán cầu não",
  description:
    "Những người thuận cả hai bên bán cầu não sẽ có được sự lý trí và tính logic của bán cầu não trái, đồng thời còn có trực giác và tính nghệ thuật của não phải.",
}

const RightBrain = {
  name: "right",
  img: "https://www.simplypsychology.org/wp-content/uploads/left-right-brain-1024x681.jpg",
  content: "Người thuận não phải",
  description:
    "Người thuận não phải sẽ có số lượng neuron thần kinh nhiều hơn ở bên não phải. Người thuận não phải thường được mô tả là giàu cảm xúc, trực giác tốt và óc sáng tạo cao hơn. Những người này thường có xu hướng làm việc liên quan đến sáng tạo và suy nghĩ tự do, chẳng hạn như trở thành một nghệ sĩ, nhà tâm lý học hoặc nhà văn, có khả năng nhìn thấu được những lời dối trá hay những lời bịp bợm.",
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