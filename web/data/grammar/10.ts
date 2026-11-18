import type { TopicContent } from "@/data/grammar/types";

export const topicContent10: TopicContent = {
  topicId: "10",
  lesson: {
    parts: [
      {
        id: "10-1",
        title: "Sayılabilen & Sayılamayan İsimler",
        titleEn: "Countable & Uncountable Nouns",
        paragraphs: [
          "**Sayılabilen/Sayılamayan İsimler** konusu A1 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Countable Nouns\\**, **\\Uncountable Nouns\\**, **\\A\\**, **\\An\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Countable Nouns",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Uncountable Nouns",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "A",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "An",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Much",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Many",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "10-ex-10-1-1",
      subtopicId: "10-1",
      type: "multiple_choice",
      prompt:
        '"Sayılabilen/Sayılamayan İsimler" alt konusu hangi ana konuya aittir?',
      options: [
        "Sayılabilen/Sayılamayan İsimler",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation:
        'Bu alt konu "Sayılabilen/Sayılamayan İsimler" başlığı altındadır.',
    },
    {
      id: "10-ex-10-1-2",
      subtopicId: "10-1",
      type: "multiple_choice",
      prompt:
        'A1 seviyesindeki "Sayılabilen/Sayılamayan İsimler" için doğru yaklaşım hangisidir?',
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
      id: "10-tf-10-1-1",
      subtopicId: "10-1",
      type: "true_false",
      prompt:
        '"Sayılabilen/Sayılamayan İsimler" başlığı "Sayılabilen/Sayılamayan İsimler" konusunun bir parçasıdır.',
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation:
        'Bu alt başlık "Sayılabilen/Sayılamayan İsimler" konusu altında işlenir.',
    },
    {
      id: "10-fb-10-1-1",
      subtopicId: "10-1",
      type: "fill_blank",
      prompt:
        '"Sayılabilen/Sayılamayan İsimler" konusu _____ seviyesine uygundur.',
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "10-match-1",
      subtopicId: "10-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Countable & Uncountable Nouns",
          right: "Sayılabilen/Sayılamayan İsimler",
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
      id: "10-cw-1",
      subtopicId: "10-1",
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
      id: "quiz-10-10-1-1",
      subtopicId: "10-1",
      type: "multiple_choice",
      prompt:
        '"Sayılabilen/Sayılamayan İsimler" alt konusu hangi ana konuya aittir?',
      options: [
        "Tamamen farklı bir konu",
        "Hiçbiri",
        "Sayılabilen/Sayılamayan İsimler",
        "Sadece kelime listesi",
      ],
      correctIndex: 2,
      explanation:
        'Bu alt konu "Sayılabilen/Sayılamayan İsimler" başlığı altındadır.',
    },
    {
      id: "quiz-10-10-1-2",
      subtopicId: "10-1",
      type: "multiple_choice",
      prompt:
        'A1 seviyesindeki "Sayılabilen/Sayılamayan İsimler" için doğru yaklaşım hangisidir?',
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
      id: "quiz-10-10-1-3",
      subtopicId: "10-1",
      type: "multiple_choice",
      prompt: '"Sayılabilen/Sayılamayan İsimler" çalışırken hangisi doğrudur?',
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
      id: "quiz-10-level",
      subtopicId: "10-1",
      type: "multiple_choice",
      prompt: '"Sayılabilen/Sayılamayan İsimler" konusu hangi seviyeye aittir?',
      options: ["Yanlış seviye", "Seviye yok", "Belirsiz", "A1"],
      correctIndex: 3,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro:
    "Sayılabilen/Sayılamayan İsimler konusunu pekiştiren quiz. Başarılar.",
};
