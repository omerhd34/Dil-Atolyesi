import type { TopicContent } from "@/data/grammar/types";

export const topicContent70: TopicContent = {
  topicId: "70",
  lesson: {
    parts: [
      {
        id: "70-1",
        title: "Past Perfect vs Past Simple",
        titleEn: "Past Perfect vs Past Simple",
        paragraphs: [
          "Past perfect iki geçmiş olayı sıraya koyar; önce tamamlanan eylemi işaret eder. Kartta gördüğün kalıplar arasında **\\Had + V3\\**, **\\Past Simple\\**, **\\By The Time\\** öne çıkar. Olumlu, olumsuz ve soru formlarını B1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Had + V3",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Past Simple",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "By The Time",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "70-ex-70-1-1",
      subtopicId: "70-1",
      type: "multiple_choice",
      prompt:
        '"Past Perfect vs Past Simple" alt konusu hangi ana konuya aittir?',
      options: [
        "Past Perfect vs Past Simple",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation:
        'Bu alt konu "Past Perfect vs Past Simple" başlığı altındadır.',
    },
    {
      id: "70-ex-70-1-2",
      subtopicId: "70-1",
      type: "multiple_choice",
      prompt:
        'B1 seviyesindeki "Past Perfect vs Past Simple" için doğru yaklaşım hangisidir?',
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
      id: "70-tf-70-1-1",
      subtopicId: "70-1",
      type: "true_false",
      prompt:
        '"Past Perfect vs Past Simple" başlığı "Past Perfect vs Past Simple" konusunun bir parçasıdır.',
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation:
        'Bu alt başlık "Past Perfect vs Past Simple" konusu altında işlenir.',
    },
    {
      id: "70-fb-70-1-1",
      subtopicId: "70-1",
      type: "fill_blank",
      prompt: '"Past Perfect vs Past Simple" konusu _____ seviyesine uygundur.',
      answer: "B1",
      explanation: "Bu konu B1 seviyesindedir.",
    },
    {
      id: "70-match-1",
      subtopicId: "70-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Past Perfect vs Past Simple",
          right: "Past Perfect vs Past Simple",
        },
        {
          left: "B1 level",
          right: "B1 seviyesi",
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
      id: "70-cw-1",
      subtopicId: "70-1",
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
      id: "quiz-70-70-1-1",
      subtopicId: "70-1",
      type: "multiple_choice",
      prompt:
        '"Past Perfect vs Past Simple" alt konusu hangi ana konuya aittir?',
      options: [
        "Sadece kelime listesi",
        "Hiçbiri",
        "Past Perfect vs Past Simple",
        "Tamamen farklı bir konu",
      ],
      correctIndex: 2,
      explanation:
        'Bu alt konu "Past Perfect vs Past Simple" başlığı altındadır.',
    },
    {
      id: "quiz-70-70-1-2",
      subtopicId: "70-1",
      type: "multiple_choice",
      prompt:
        'B1 seviyesindeki "Past Perfect vs Past Simple" için doğru yaklaşım hangisidir?',
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
      id: "quiz-70-70-1-3",
      subtopicId: "70-1",
      type: "multiple_choice",
      prompt: '"Past Perfect vs Past Simple" çalışırken hangisi doğrudur?',
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
      id: "quiz-70-level",
      subtopicId: "70-1",
      type: "multiple_choice",
      prompt: '"Past Perfect vs Past Simple" konusu hangi seviyeye aittir?',
      options: ["B1", "Yanlış seviye", "Belirsiz", "Seviye yok"],
      correctIndex: 0,
      explanation: "Bu konu B1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Past Perfect vs Past Simple konusunu pekiştiren quiz. Başarılar.",
};
