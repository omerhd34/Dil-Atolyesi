import type { TopicContent } from "@/data/grammar/types";

export const topicContent45: TopicContent = {
  topicId: "45",
  lesson: {
    parts: [
      {
        id: "45-1",
        title: "Fazlalık ve Yeterlilik",
        titleEn: "Excess and Sufficiency",
        paragraphs: [
          "**Fazlalık ve Yeterlilik** konusu A2 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Too / Enough\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Too / Enough",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "45-ex-45-1-1",
      subtopicId: "45-1",
      type: "multiple_choice",
      prompt: "\"Fazlalık ve Yeterlilik\" alt konusu hangi ana konuya aittir?",
      options: [
        "Fazlalık ve Yeterlilik",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Fazlalık ve Yeterlilik\" başlığı altındadır.",
    },
    {
      id: "45-ex-45-1-2",
      subtopicId: "45-1",
      type: "multiple_choice",
      prompt: "A2 seviyesindeki \"Fazlalık ve Yeterlilik\" için doğru yaklaşım hangisidir?",
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
      id: "45-tf-45-1-1",
      subtopicId: "45-1",
      type: "true_false",
      prompt: "\"Fazlalık ve Yeterlilik\" başlığı \"Fazlalık ve Yeterlilik\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Fazlalık ve Yeterlilik\" konusu altında işlenir.",
    },
    {
      id: "45-fb-45-1-1",
      subtopicId: "45-1",
      type: "fill_blank",
      prompt: "\"Fazlalık ve Yeterlilik\" konusu _____ seviyesine uygundur.",
      answer: "A2",
      explanation: "Bu konu A2 seviyesindedir.",
    },
    {
      id: "45-match-1",
      subtopicId: "45-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Excess and Sufficiency",
          right: "Fazlalık ve Yeterlilik",
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
      id: "45-cw-1",
      subtopicId: "45-1",
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
      id: "quiz-45-45-1-1",
      subtopicId: "45-1",
      type: "multiple_choice",
      prompt: "\"Fazlalık ve Yeterlilik\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tamamen farklı bir konu",
        "Hiçbiri",
        "Fazlalık ve Yeterlilik",
        "Sadece kelime listesi",
      ],
      correctIndex: 2,
      explanation: "Bu alt konu \"Fazlalık ve Yeterlilik\" başlığı altındadır.",
    },
    {
      id: "quiz-45-45-1-2",
      subtopicId: "45-1",
      type: "multiple_choice",
      prompt: "A2 seviyesindeki \"Fazlalık ve Yeterlilik\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-45-45-1-3",
      subtopicId: "45-1",
      type: "multiple_choice",
      prompt: "\"Fazlalık ve Yeterlilik\" çalışırken hangisi doğrudur?",
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
      id: "quiz-45-level",
      subtopicId: "45-1",
      type: "multiple_choice",
      prompt: "\"Fazlalık ve Yeterlilik\" konusu hangi seviyeye aittir?",
      options: [
        "A2",
        "Belirsiz",
        "Seviye yok",
        "Yanlış seviye",
      ],
      correctIndex: 0,
      explanation: "Bu konu A2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Fazlalık ve Yeterlilik konusunu pekiştiren quiz. Başarılar.",
};
