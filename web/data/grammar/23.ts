import type { TopicContent } from "@/data/grammar/types";

export const topicContent23: TopicContent = {
  topicId: "23",
  lesson: {
    parts: [
      {
        id: "23-1",
        title: "Temel Bağlaçlar",
        titleEn: "Basic Conjunctions",
        paragraphs: [
          "**Temel Bağlaçlar** konusu A1 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\And\\**, **\\But\\**, **\\Or\\**, **\\Because\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "And",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "But",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Or",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Because",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "23-ex-23-1-1",
      subtopicId: "23-1",
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
      id: "23-ex-23-1-2",
      subtopicId: "23-1",
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
      id: "23-tf-23-1-1",
      subtopicId: "23-1",
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
      id: "23-fb-23-1-1",
      subtopicId: "23-1",
      type: "fill_blank",
      prompt: "\"Temel Bağlaçlar\" konusu _____ seviyesine uygundur.",
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "23-match-1",
      subtopicId: "23-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Basic Conjunctions",
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
      id: "23-cw-1",
      subtopicId: "23-1",
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
  exercisesListening: [
    {
      id: "23-listen-01",
      subtopicId: "23-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "And",
      answer: "And",
      acceptedAnswers: ["And", "and"],
    },
  ],
  quiz: [
    {
      id: "quiz-23-23-1-1",
      subtopicId: "23-1",
      type: "multiple_choice",
      prompt: "\"Temel Bağlaçlar\" alt konusu hangi ana konuya aittir?",
      options: [
        "Sadece kelime listesi",
        "Hiçbiri",
        "Temel Bağlaçlar",
        "Tamamen farklı bir konu",
      ],
      correctIndex: 2,
      explanation: "Bu alt konu \"Temel Bağlaçlar\" başlığı altındadır.",
    },
    {
      id: "quiz-23-23-1-2",
      subtopicId: "23-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Temel Bağlaçlar\" için doğru yaklaşım hangisidir?",
      options: [
        "Örnekleri okuyup kısa pratik yapmak",
        "Sadece çeviri yapmadan ezberlemek",
        "Hiç alıştırma çözmemek",
        "Konuyu tamamen atlamak",
      ],
      correctIndex: 0,
      explanation: "Örnek + kısa pratik, kalıcı öğrenmeye yardımcı olur.",
    },
    {
      id: "quiz-23-23-1-3",
      subtopicId: "23-1",
      type: "multiple_choice",
      prompt: "\"Temel Bağlaçlar\" çalışırken hangisi doğrudur?",
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
      id: "quiz-23-level",
      subtopicId: "23-1",
      type: "multiple_choice",
      prompt: "\"Temel Bağlaçlar\" konusu hangi seviyeye aittir?",
      options: [
        "Yanlış seviye",
        "A1",
        "Seviye yok",
        "Belirsiz",
      ],
      correctIndex: 1,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Temel Bağlaçlar konusunu pekiştiren quiz. Başarılar.",
};
