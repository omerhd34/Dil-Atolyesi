import type { TopicContent } from "@/data/grammar/types";

export const topicContent25: TopicContent = {
  topicId: "25",
  lesson: {
    intro: "\"Temel Fiil Kalıpları\" konusu A2 seviyesine uygundur. Aşağıdaki alt başlıklarda temel kuralları, örnekleri ve kısa notları bulursun. İçerik geçicidir; ileride zenginleştirilebilir.",
    sections: [
      {
        subtopicId: "25-1",
        title: "Temel Fiil Kalıpları",
        titleEn: "I enjoy coding. / She wants to travel abroad.",
        paragraphs: [
          "\"Temel Fiil Kalıpları\" başlığında Temel Fiil Kalıpları konusunun önemli noktalarını adım adım görürsün.",
          "Bu bölümde kalıpları tanı, örnekleri sesli tekrarla ve ardından alıştırmalara geç. A2 seviyesinde düzenli tekrar yeterlidir.",
          "Kısa not: Anlamadığın bir örneği işaretleyip alıştırmada yeniden dene.",
        ],
        examples: [
          {
            en: "Let's practice together.",
            tr: "Birlikte pratik yapalım.",
            note: "Temel Fiil Kalıpları — örnek 1",
          },
          {
            en: "Topic focus: Temel Fiil Kalıpları",
            tr: "Konu odağı: Temel Fiil Kalıpları",
          },
          {
            en: "Subtopic: Temel Fiil Kalıpları",
            tr: "Alt konu: Temel Fiil Kalıpları",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "25-ex-25-1-1",
      subtopicId: "25-1",
      type: "multiple_choice",
      prompt: "\"Temel Fiil Kalıpları\" alt konusu hangi ana konuya aittir?",
      options: [
        "Temel Fiil Kalıpları",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Temel Fiil Kalıpları\" başlığı altındadır.",
    },
    {
      id: "25-ex-25-1-2",
      subtopicId: "25-1",
      type: "multiple_choice",
      prompt: "A2 seviyesindeki \"Temel Fiil Kalıpları\" için doğru yaklaşım hangisidir?",
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
      id: "25-tf-25-1-1",
      subtopicId: "25-1",
      type: "true_false",
      prompt: "\"Temel Fiil Kalıpları\" başlığı \"Temel Fiil Kalıpları\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Temel Fiil Kalıpları\" konusu altında işlenir.",
    },
    {
      id: "25-fb-25-1-1",
      subtopicId: "25-1",
      type: "fill_blank",
      prompt: "\"Temel Fiil Kalıpları\" konusu _____ seviyesine uygundur.",
      answer: "A2",
      explanation: "Bu konu A2 seviyesindedir.",
    },
    {
      id: "25-match-1",
      subtopicId: "25-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Basic Verb Patterns (Verb + -ing / to-infinitive)",
          right: "Temel Fiil Kalıpları",
        },
        {
          left: "A2 level",
          right: "A2 seviyesi",
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
      id: "25-cw-1",
      subtopicId: "25-1",
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
      id: "quiz-25-25-1-1",
      subtopicId: "25-1",
      type: "multiple_choice",
      prompt: "\"Temel Fiil Kalıpları\" alt konusu hangi ana konuya aittir?",
      options: [
        "Temel Fiil Kalıpları",
        "Sadece kelime listesi",
        "Hiçbiri",
        "Tamamen farklı bir konu",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Temel Fiil Kalıpları\" başlığı altındadır.",
    },
    {
      id: "quiz-25-25-1-2",
      subtopicId: "25-1",
      type: "multiple_choice",
      prompt: "A2 seviyesindeki \"Temel Fiil Kalıpları\" için doğru yaklaşım hangisidir?",
      options: [
        "Örnekleri okuyup kısa pratik yapmak",
        "Hiç alıştırma çözmemek",
        "Sadece çeviri yapmadan ezberlemek",
        "Konuyu tamamen atlamak",
      ],
      correctIndex: 0,
      explanation: "Örnek + kısa pratik, kalıcı öğrenmeye yardımcı olur.",
    },
    {
      id: "quiz-25-25-1-3",
      subtopicId: "25-1",
      type: "multiple_choice",
      prompt: "\"Temel Fiil Kalıpları\" çalışırken hangisi doğrudur?",
      options: [
        "Konuyu tamamen atlamak",
        "Sadece dinleyip bırakmak",
        "Anlamadığın örneği işaretleyip tekrar etmek",
        "Hiç örnek okumamak",
      ],
      correctIndex: 2,
      explanation: "Tekrar ve işaretleme öğrenmeyi güçlendirir.",
    },
    {
      id: "quiz-25-level",
      subtopicId: "25-1",
      type: "multiple_choice",
      prompt: "\"Temel Fiil Kalıpları\" konusu hangi seviyeye aittir?",
      options: [
        "A2",
        "Yanlış seviye",
        "Belirsiz",
        "Seviye yok",
      ],
      correctIndex: 0,
      explanation: "Bu konu A2 seviyesindedir.",
    },
  ],
  viewMinutes: 5,
};
