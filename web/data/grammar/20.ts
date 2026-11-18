import type { TopicContent } from "@/data/grammar/types";

export const topicContent20: TopicContent = {
  topicId: "20",
  lesson: {
    parts: [
      {
        id: "20-1",
        title: "Sıfatlar",
        titleEn: "Adjectives",
        paragraphs: [
          "**Sıfatlar** konusu A1 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Big\\**, **\\Small\\**, **\\Happy\\**, **\\Old\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Big",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Small",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Happy",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Old",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "New",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Adjective Order",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "20-ex-20-1-1",
      subtopicId: "20-1",
      type: "multiple_choice",
      prompt: "\"Sıfatlar\" alt konusu hangi ana konuya aittir?",
      options: [
        "Sıfatlar",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Sıfatlar\" başlığı altındadır.",
    },
    {
      id: "20-ex-20-1-2",
      subtopicId: "20-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Sıfatlar\" için doğru yaklaşım hangisidir?",
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
      id: "20-tf-20-1-1",
      subtopicId: "20-1",
      type: "true_false",
      prompt: "\"Sıfatlar\" başlığı \"Sıfatlar\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Sıfatlar\" konusu altında işlenir.",
    },
    {
      id: "20-fb-20-1-1",
      subtopicId: "20-1",
      type: "fill_blank",
      prompt: "\"Sıfatlar\" konusu _____ seviyesine uygundur.",
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "20-match-1",
      subtopicId: "20-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Adjectives",
          right: "Sıfatlar",
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
      id: "20-cw-1",
      subtopicId: "20-1",
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
      id: "quiz-20-20-1-1",
      subtopicId: "20-1",
      type: "multiple_choice",
      prompt: "\"Sıfatlar\" alt konusu hangi ana konuya aittir?",
      options: [
        "Sıfatlar",
        "Sadece kelime listesi",
        "Tamamen farklı bir konu",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Sıfatlar\" başlığı altındadır.",
    },
    {
      id: "quiz-20-20-1-2",
      subtopicId: "20-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Sıfatlar\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-20-20-1-3",
      subtopicId: "20-1",
      type: "multiple_choice",
      prompt: "\"Sıfatlar\" çalışırken hangisi doğrudur?",
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
      id: "quiz-20-level",
      subtopicId: "20-1",
      type: "multiple_choice",
      prompt: "\"Sıfatlar\" konusu hangi seviyeye aittir?",
      options: [
        "A1",
        "Belirsiz",
        "Yanlış seviye",
        "Seviye yok",
      ],
      correctIndex: 0,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Sıfatlar konusunu pekiştiren quiz. Başarılar.",
};
