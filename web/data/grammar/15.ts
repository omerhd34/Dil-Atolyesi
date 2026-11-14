import type { TopicContent } from "@/data/grammar/types";

export const topicContent15: TopicContent = {
  topicId: "15",
  lesson: {
    intro: "\"Temel Bağlaçlar\" konusu A1 seviyesine uygundur. Aşağıdaki alt başlıklarda temel kuralları, örnekleri ve kısa notları bulursun. İçerik geçicidir; ileride zenginleştirilebilir.",
    sections: [
      {
        subtopicId: "15-1",
        title: "Temel Bağlaçlar",
        titleEn: "I stayed home because it was cold, so I watched a film.",
        paragraphs: [
          "\"Temel Bağlaçlar\" başlığında Temel Bağlaçlar konusunun önemli noktalarını adım adım görürsün.",
          "Bu bölümde kalıpları tanı, örnekleri sesli tekrarla ve ardından alıştırmalara geç. A1 seviyesinde düzenli tekrar yeterlidir.",
          "Kısa not: Anlamadığın bir örneği işaretleyip alıştırmada yeniden dene.",
        ],
        examples: [
          {
            en: "Can you repeat that?",
            tr: "Tekrar eder misin?",
            note: "Temel Bağlaçlar — örnek 1",
          },
          {
            en: "Topic focus: Temel Bağlaçlar",
            tr: "Konu odağı: Temel Bağlaçlar",
          },
          {
            en: "Subtopic: Temel Bağlaçlar",
            tr: "Alt konu: Temel Bağlaçlar",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "15-ex-15-1-1",
      subtopicId: "15-1",
      type: "multiple_choice",
      prompt: "\"Temel Bağlaçlar\" alt konusu hangi ana konuya aittir?",
      options: [
        "Temel Bağlaçlar",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Temel Bağlaçlar\" başlığı altındadır.",
    },
    {
      id: "15-ex-15-1-2",
      subtopicId: "15-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Temel Bağlaçlar\" için doğru yaklaşım hangisidir?",
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
      id: "15-tf-15-1-1",
      subtopicId: "15-1",
      type: "true_false",
      prompt: "\"Temel Bağlaçlar\" başlığı \"Temel Bağlaçlar\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Temel Bağlaçlar\" konusu altında işlenir.",
    },
    {
      id: "15-fb-15-1-1",
      subtopicId: "15-1",
      type: "fill_blank",
      prompt: "\"Temel Bağlaçlar\" konusu _____ seviyesine uygundur.",
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "15-match-1",
      subtopicId: "15-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Basic Conjunctions (and, but, or, because, so)",
          right: "Temel Bağlaçlar",
        },
        {
          left: "A1 level",
          right: "A1 seviyesi",
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
      id: "15-cw-1",
      subtopicId: "15-1",
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
  quiz: [
    {
      id: "quiz-15-15-1-1",
      subtopicId: "15-1",
      type: "multiple_choice",
      prompt: "\"Temel Bağlaçlar\" alt konusu hangi ana konuya aittir?",
      options: [
        "Temel Bağlaçlar",
        "Sadece kelime listesi",
        "Tamamen farklı bir konu",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Temel Bağlaçlar\" başlığı altındadır.",
    },
    {
      id: "quiz-15-15-1-2",
      subtopicId: "15-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Temel Bağlaçlar\" için doğru yaklaşım hangisidir?",
      options: [
        "Örnekleri okuyup kısa pratik yapmak",
        "Sadece çeviri yapmadan ezberlemek",
        "Konuyu tamamen atlamak",
        "Hiç alıştırma çözmemek",
      ],
      correctIndex: 0,
      explanation: "Örnek + kısa pratik, kalıcı öğrenmeye yardımcı olur.",
    },
    {
      id: "quiz-15-15-1-3",
      subtopicId: "15-1",
      type: "multiple_choice",
      prompt: "\"Temel Bağlaçlar\" çalışırken hangisi doğrudur?",
      options: [
        "Anlamadığın örneği işaretleyip tekrar etmek",
        "Hiç örnek okumamak",
        "Konuyu tamamen atlamak",
        "Sadece dinleyip bırakmak",
      ],
      correctIndex: 0,
      explanation: "Tekrar ve işaretleme öğrenmeyi güçlendirir.",
    },
    {
      id: "quiz-15-level",
      subtopicId: "15-1",
      type: "multiple_choice",
      prompt: "\"Temel Bağlaçlar\" konusu hangi seviyeye aittir?",
      options: [
        "Belirsiz",
        "Yanlış seviye",
        "A1",
        "Seviye yok",
      ],
      correctIndex: 2,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 5,
};
