import type { TopicContent } from "@/data/grammar/types";

export const topicContentExamC2: TopicContent = {
  topicId: "exam-c2",
  lesson: {
        title: "C2 Yeterlilik Sınavı",
        titleEn: "C2 Proficiency Exam",
        paragraphs: [
          '"C2 Yeterlilik Sınavı" başlığında C2 Yeterlilik Sınavı konusunun önemli noktalarını adım adım görürsün.',
          "Bu bölümde kalıpları tanı, örnekleri sesli tekrarla ve ardından alıştırmalara geç. C2 seviyesinde düzenli tekrar yeterlidir.",
          "Bu bir yeterlilik sınavı bölümüdür: önceki konuları hatırlayarak ilerlemeyi hedefle.",
        ],
        examples: [
          {
            en: "This is a useful example.",
            tr: "Bu faydalı bir örnek.",
            note: "C2 Yeterlilik Sınavı — örnek 1",
          },
          {
            en: "Topic focus: C2 Yeterlilik Sınavı",
            tr: "Konu odağı: C2 Yeterlilik Sınavı",
          },
          {
            en: "Subtopic: C2 Yeterlilik Sınavı",
            tr: "Alt konu: C2 Yeterlilik Sınavı",
          },
        ],
      
  },
  exercises: [
    {
      id: "exam-c2-ex-128-1-1",
      subtopicId: "exam-c2-1",
      type: "multiple_choice",
      prompt: "\"C2 Yeterlilik Sınavı\" alt konusu hangi ana konuya aittir?",
      options: [
        "C2 Yeterlilik Sınavı",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"C2 Yeterlilik Sınavı\" başlığı altındadır.",
    },
    {
      id: "exam-c2-ex-128-1-2",
      subtopicId: "exam-c2-1",
      type: "multiple_choice",
      prompt: "C2 seviyesindeki \"C2 Yeterlilik Sınavı\" için doğru yaklaşım hangisidir?",
      options: [
        "Örnekleri okuyup kısa pratik yapmak",
        "Konuyu tamamen atlamak",
        "Sadece çeviri yapmadan ezberlemek",
        "Hiç alıştırma çözmemek",
      ],
      correctIndex: 0,
      explanation: "Örnek + kısa pratik, kalıcı öğrenmeye yardımcı olur.",
    },
    {
      id: "exam-c2-tf-128-1-1",
      subtopicId: "exam-c2-1",
      type: "true_false",
      prompt: "\"C2 Yeterlilik Sınavı\" başlığı \"C2 Yeterlilik Sınavı\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"C2 Yeterlilik Sınavı\" konusu altında işlenir.",
    },
    {
      id: "exam-c2-fb-128-1-1",
      subtopicId: "exam-c2-1",
      type: "fill_blank",
      prompt: "\"C2 Yeterlilik Sınavı\" konusu _____ seviyesine uygundur.",
      answer: "C2",
      explanation: "Bu konu C2 seviyesindedir.",
    },
    {
      id: "exam-c2-match-1",
      subtopicId: "exam-c2-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "C2 Proficiency Exam",
          right: "C2 Yeterlilik Sınavı",
        },
        {
          left: "C2 level",
          right: "C2 seviyesi",
        },
        {
          left: "Practice",
          right: "Alıştırma",
        },
        {
          left: "Example",
          right: "Örnek",
        },
        {
          left: "Lesson",
          right: "Konu anlatımı",
        },
        {
          left: "Quiz",
          right: "Quiz",
        },
      ],
    },
    {
      id: "exam-c2-cw-1",
      subtopicId: "exam-c2-1",
      type: "crossword",
      rows: 3,
      cols: 5,
      clues: [
        {
          number: 1,
          direction: "across",
          text: "3 sayısı İngilizcede",
          answer: "THREE",
          row: 0,
          col: 0,
        },
        {
          number: 2,
          direction: "down",
          text: "10 sayısı İngilizcede",
          answer: "TEN",
          row: 0,
          col: 0,
        },
        {
          number: 3,
          direction: "across",
          text: "9 sayısı İngilizcede",
          answer: "NINE",
          row: 2,
          col: 0,
        },
      ],
    },
  ],
};
