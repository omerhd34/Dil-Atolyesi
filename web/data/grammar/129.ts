import type { TopicContent } from "@/data/grammar/types";

export const topicContent129: TopicContent = {
  topicId: "129",
  lesson: {
    parts: [
      {
        id: "129-1",
        title: "Öne Taşıma",
        titleEn: "Fronting",
        paragraphs: [
          "**Öne Taşıma** konusu B2 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Fronting\\**, **\\Topicalisation\\**, **\\Here Comes\\** öne çıkar. Olumlu, olumsuz ve soru formlarını B2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
        ],
        examplesTitle: "İşlenecek kalıplar",
        examplesLayout: "columns",
        examplesPerRow: 2,
        exampleHeaders: {
          en: "İngilizce",
          tr: "Açıklama",
        },
        examples: [
          {
            en: "Fronting",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Topicalisation",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Here Comes",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "129-ex-129-1-1",
      subtopicId: "129-1",
      type: "multiple_choice",
      prompt: "\"Öne Taşıma\" alt konusu hangi ana konuya aittir?",
      options: [
        "Öne Taşıma",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Öne Taşıma\" başlığı altındadır.",
    },
    {
      id: "129-ex-129-1-2",
      subtopicId: "129-1",
      type: "multiple_choice",
      prompt: "B2 seviyesindeki \"Öne Taşıma\" için doğru yaklaşım hangisidir?",
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
      id: "129-tf-129-1-1",
      subtopicId: "129-1",
      type: "true_false",
      prompt: "\"Öne Taşıma\" başlığı \"Öne Taşıma\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Öne Taşıma\" konusu altında işlenir.",
    },
    {
      id: "129-fb-129-1-1",
      subtopicId: "129-1",
      type: "fill_blank",
      prompt: "\"Öne Taşıma\" konusu _____ seviyesine uygundur.",
      answer: "B2",
      explanation: "Bu konu B2 seviyesindedir.",
    },
    {
      id: "129-match-1",
      subtopicId: "129-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Fronting",
          right: "Öne Taşıma",
        },
        {
          left: "B2 level",
          right: "B2 seviyesi",
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
      id: "129-cw-1",
      subtopicId: "129-1",
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
      id: "quiz-129-129-1-1",
      subtopicId: "129-1",
      type: "multiple_choice",
      prompt: "\"Öne Taşıma\" alt konusu hangi ana konuya aittir?",
      options: [
        "Öne Taşıma",
        "Sadece kelime listesi",
        "Tamamen farklı bir konu",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Öne Taşıma\" başlığı altındadır.",
    },
    {
      id: "quiz-129-129-1-2",
      subtopicId: "129-1",
      type: "multiple_choice",
      prompt: "B2 seviyesindeki \"Öne Taşıma\" için doğru yaklaşım hangisidir?",
      options: [
        "Sadece çeviri yapmadan ezberlemek",
        "Hiç alıştırma çözmemek",
        "Örnekleri okuyup kısa pratik yapmak",
        "Konuyu tamamen atlamak",
      ],
      correctIndex: 2,
      explanation: "Örnek + kısa pratik, kalıcı öğrenmeye yardımcı olur.",
    },
    {
      id: "quiz-129-129-1-3",
      subtopicId: "129-1",
      type: "multiple_choice",
      prompt: "\"Öne Taşıma\" çalışırken hangisi doğrudur?",
      options: [
        "Anlamadığın örneği işaretleyip tekrar etmek",
        "Konuyu tamamen atlamak",
        "Sadece dinleyip bırakmak",
        "Hiç örnek okumamak",
      ],
      correctIndex: 0,
      explanation: "Tekrar ve işaretleme öğrenmeyi güçlendirir.",
    },
    {
      id: "quiz-129-level",
      subtopicId: "129-1",
      type: "multiple_choice",
      prompt: "\"Öne Taşıma\" konusu hangi seviyeye aittir?",
      options: [
        "Belirsiz",
        "Yanlış seviye",
        "B2",
        "Seviye yok",
      ],
      correctIndex: 2,
      explanation: "Bu konu B2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Öne Taşıma konusunu pekiştiren quiz. Başarılar.",
};
