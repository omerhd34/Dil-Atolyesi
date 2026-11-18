import type { TopicContent } from "@/data/grammar/types";

export const topicContent42: TopicContent = {
  topicId: "42",
  lesson: {
    parts: [
      {
        id: "42-1",
        title: "Karşılaştırma Sıfatları",
        titleEn: "Comparatives",
        paragraphs: [
          "Karşılaştırma yapıları iki veya daha fazla şeyi derecelendirir. Kartta gördüğün kalıplar arasında **\\Bigger\\**, **\\Smaller\\**, **\\More\\**, **\\Less\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Bigger",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Smaller",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "More",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Less",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "-er Than",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "-ier Than",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "42-ex-42-1-1",
      subtopicId: "42-1",
      type: "multiple_choice",
      prompt: '"Karşılaştırma Sıfatları" alt konusu hangi ana konuya aittir?',
      options: [
        "Karşılaştırma Sıfatları",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: 'Bu alt konu "Karşılaştırma Sıfatları" başlığı altındadır.',
    },
    {
      id: "42-ex-42-1-2",
      subtopicId: "42-1",
      type: "multiple_choice",
      prompt:
        'A2 seviyesindeki "Karşılaştırma Sıfatları" için doğru yaklaşım hangisidir?',
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
      id: "42-tf-42-1-1",
      subtopicId: "42-1",
      type: "true_false",
      prompt:
        '"Karşılaştırma Sıfatları" başlığı "Karşılaştırma Sıfatları" konusunun bir parçasıdır.',
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation:
        'Bu alt başlık "Karşılaştırma Sıfatları" konusu altında işlenir.',
    },
    {
      id: "42-fb-42-1-1",
      subtopicId: "42-1",
      type: "fill_blank",
      prompt: '"Karşılaştırma Sıfatları" konusu _____ seviyesine uygundur.',
      answer: "A2",
      explanation: "Bu konu A2 seviyesindedir.",
    },
    {
      id: "42-match-1",
      subtopicId: "42-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Comparatives",
          right: "Karşılaştırma Sıfatları",
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
      id: "42-cw-1",
      subtopicId: "42-1",
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
      id: "quiz-42-42-1-1",
      subtopicId: "42-1",
      type: "multiple_choice",
      prompt: '"Karşılaştırma Sıfatları" alt konusu hangi ana konuya aittir?',
      options: [
        "Karşılaştırma Sıfatları",
        "Sadece kelime listesi",
        "Tamamen farklı bir konu",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: 'Bu alt konu "Karşılaştırma Sıfatları" başlığı altındadır.',
    },
    {
      id: "quiz-42-42-1-2",
      subtopicId: "42-1",
      type: "multiple_choice",
      prompt:
        'A2 seviyesindeki "Karşılaştırma Sıfatları" için doğru yaklaşım hangisidir?',
      options: [
        "Sadece çeviri yapmadan ezberlemek",
        "Konuyu tamamen atlamak",
        "Örnekleri okuyup kısa pratik yapmak",
        "Hiç alıştırma çözmemek",
      ],
      correctIndex: 2,
      explanation: "Örnek + kısa pratik, kalıcı öğrenmeye yardımcı olur.",
    },
    {
      id: "quiz-42-42-1-3",
      subtopicId: "42-1",
      type: "multiple_choice",
      prompt: '"Karşılaştırma Sıfatları" çalışırken hangisi doğrudur?',
      options: [
        "Anlamadığın örneği işaretleyip tekrar etmek",
        "Konuyu tamamen atlamak",
        "Hiç örnek okumamak",
        "Sadece dinleyip bırakmak",
      ],
      correctIndex: 0,
      explanation: "Tekrar ve işaretleme öğrenmeyi güçlendirir.",
    },
    {
      id: "quiz-42-level",
      subtopicId: "42-1",
      type: "multiple_choice",
      prompt: '"Karşılaştırma Sıfatları" konusu hangi seviyeye aittir?',
      options: ["Belirsiz", "Seviye yok", "Yanlış seviye", "A2"],
      correctIndex: 3,
      explanation: "Bu konu A2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Karşılaştırma Sıfatları konusunu pekiştiren quiz. Başarılar.",
};
