const questions = [
    {
      index: 1,
      content: "Tôi đã vượt qua những trở ngại để chinh phục một thử thách quan trọng.",
      answers: [
        { answerId: "5", answerContent: "Rất giống tôi" },
        { answerId: "4", answerContent: "Khá giống tôi" },
        { answerId: "3", answerContent: "Hơi giống tôi" },
        { answerId: "2", answerContent: "Không giống tôi lắm" },
        { answerId: "1", answerContent: "Hoàn toàn không giống tôi" },
      ],
    },
    {
      index: 2,
      content: "Ý tưởng và dự án mới đôi khi làm tôi mất tập trung vào những cái trước đó.",
      answers: [
        { answerId: "1", answerContent: "Rất giống tôi" },
        { answerId: "2", answerContent: "Khá giống tôi" },
        { answerId: "3", answerContent: "Hơi giống tôi" },
        { answerId: "4", answerContent: "Không giống tôi lắm" },
        { answerId: "5", answerContent: "Hoàn toàn không giống tôi" },
      ],
    },
    {
      index: 3,
      content: "Sở thích của tôi thay đổi theo từng năm.",
      answers: [
        { answerId: "1", answerContent: "Rất giống tôi" },
        { answerId: "2", answerContent: "Khá giống tôi" },
        { answerId: "3", answerContent: "Hơi giống tôi" },
        { answerId: "4", answerContent: "Không giống tôi lắm" },
        { answerId: "5", answerContent: "Hoàn toàn không giống tôi" },
      ],    },
    {
      index: 4,
      content: "Những trở ngại không làm tôi nản lòng.",
      answers: [
        { answerId: "5", answerContent: "Rất giống tôi" },
        { answerId: "4", answerContent: "Khá giống tôi" },
        { answerId: "3", answerContent: "Hơi giống tôi" },
        { answerId: "2", answerContent: "Không giống tôi lắm" },
        { answerId: "1", answerContent: "Hoàn toàn không giống tôi" },
      ],
    },
    {
      index: 5,
      content: "Tôi đã từng bị cuốn hút bởi một ý tưởng hoặc dự án trong thời gian ngắn nhưng sau đó mất hứng thú.",
      answers: [
        { answerId: "1", answerContent: "Rất giống tôi" },
        { answerId: "2", answerContent: "Khá giống tôi" },
        { answerId: "3", answerContent: "Hơi giống tôi" },
        { answerId: "4", answerContent: "Không giống tôi lắm" },
        { answerId: "5", answerContent: "Hoàn toàn không giống tôi" },
      ],
    },
    {
      index: 6,
      content: "Tôi là một người làm việc chăm chỉ.",
      answers: [
        { answerId: "5", answerContent: "Rất giống tôi" },
        { answerId: "4", answerContent: "Khá giống tôi" },
        { answerId: "3", answerContent: "Hơi giống tôi" },
        { answerId: "2", answerContent: "Không giống tôi lắm" },
        { answerId: "1", answerContent: "Hoàn toàn không giống tôi" },
      ],
    },
    {
      index: 7,
      content: "Tôi thường đặt ra một mục tiêu nhưng sau đó lại chọn theo đuổi một mục tiêu khác.",
      answers: [
        { answerId: "1", answerContent: "Rất giống tôi" },
        { answerId: "2", answerContent: "Khá giống tôi" },
        { answerId: "3", answerContent: "Hơi giống tôi" },
        { answerId: "4", answerContent: "Không giống tôi lắm" },
        { answerId: "5", answerContent: "Hoàn toàn không giống tôi" },
      ],
      
    },
    {
      index: 8,
      content: "Tôi gặp khó khăn trong việc duy trì tập trung vào các dự án kéo dài hơn vài tháng.",
      answers: [
        { answerId: "1", answerContent: "Rất giống tôi" },
        { answerId: "2", answerContent: "Khá giống tôi" },
        { answerId: "3", answerContent: "Hơi giống tôi" },
        { answerId: "4", answerContent: "Không giống tôi lắm" },
        { answerId: "5", answerContent: "Hoàn toàn không giống tôi" },
      ],
      
    },
    {
      index: 9,
      content: "Tôi hoàn thành mọi thứ tôi bắt đầu.",
      answers: [
        { answerId: "5", answerContent: "Rất giống tôi" },
        { answerId: "4", answerContent: "Khá giống tôi" },
        { answerId: "3", answerContent: "Hơi giống tôi" },
        { answerId: "2", answerContent: "Không giống tôi lắm" },
        { answerId: "1", answerContent: "Hoàn toàn không giống tôi" },
      ],
      
    },
    {
      index: 10,
      content: "Tôi đã đạt được một mục tiêu mà phải mất nhiều năm để hoàn thành.",
      answers: [
        { answerId: "5", answerContent: "Rất giống tôi" },
        { answerId: "4", answerContent: "Khá giống tôi" },
        { answerId: "3", answerContent: "Hơi giống tôi" },
        { answerId: "2", answerContent: "Không giống tôi lắm" },
        { answerId: "1", answerContent: "Hoàn toàn không giống tôi" },
      ],
      
    },
    {
      index: 11,
      content: "Tôi hứng thú với những điều mới mẻ mỗi vài tháng.",
      answers: [
        { answerId: "1", answerContent: "Rất giống tôi" },
        { answerId: "2", answerContent: "Khá giống tôi" },
        { answerId: "3", answerContent: "Hơi giống tôi" },
        { answerId: "4", answerContent: "Không giống tôi lắm" },
        { answerId: "5", answerContent: "Hoàn toàn không giống tôi" },
      ],
      
    },
    {
      index: 12,
      content: "Tôi là một người kiên trì.",
      answers: [
        { answerId: "5", answerContent: "Rất giống tôi" },
        { answerId: "4", answerContent: "Khá giống tôi" },
        { answerId: "3", answerContent: "Hơi giống tôi" },
        { answerId: "2", answerContent: "Không giống tôi lắm" },
        { answerId: "1", answerContent: "Hoàn toàn không giống tôi" },
      ],
      
    },
  ];
  export default questions;
  