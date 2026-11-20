import type { TopicContent } from "@/data/grammar/types";

export const topicContent111: TopicContent = {
  topicId: "111",
  lesson: {
    parts: [
      {
        id: "111-1",
        title: "Tercih Yapıları",
        titleEn: "Would Rather / Would Prefer",
        paragraphs: [
          "**Tercih Yapıları** konusu B2 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Would Rather\\**, **\\Would Prefer\\**, **\\Than\\** öne çıkar. Olumlu, olumsuz ve soru formlarını B2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Would Rather",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Would Prefer",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Than",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "111-ex-111-1-1",
      subtopicId: "111-1",
      type: "multiple_choice",
      prompt: '"Tercih Yapıları" alt konusu hangi ana konuya aittir?',
      options: [
        "Tercih Yapıları",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: 'Bu alt konu "Tercih Yapıları" başlığı altındadır.',
    },
    {
      id: "111-ex-111-1-2",
      subtopicId: "111-1",
      type: "multiple_choice",
      prompt:
        'B2 seviyesindeki "Tercih Yapıları" için doğru yaklaşım hangisidir?',
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
      id: "111-tf-111-1-1",
      subtopicId: "111-1",
      type: "true_false",
      prompt:
        '"Tercih Yapıları" başlığı "Tercih Yapıları" konusunun bir parçasıdır.',
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation: 'Bu alt başlık "Tercih Yapıları" konusu altında işlenir.',
    },
    {
      id: "111-fb-111-1-1",
      subtopicId: "111-1",
      type: "fill_blank",
      prompt: '"Tercih Yapıları" konusu _____ seviyesine uygundur.',
      answer: "B2",
      explanation: "Bu konu B2 seviyesindedir.",
    },
    {
      id: "111-match-1",
      subtopicId: "111-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Would Rather / Would Prefer",
          right: "Tercih Yapıları",
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
      id: "111-cw-1",
      subtopicId: "111-1",
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
      id: "111-listen-01",
      subtopicId: "111-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Would Rather",
      answer: "Would Rather",
      acceptedAnswers: ["Would Rather", "would rather"],
    },
  ],
  quiz: [
    {
      id: "quiz-111-111-1-1",
      subtopicId: "111-1",
      type: "multiple_choice",
      prompt: '"Tercih Yapıları" alt konusu hangi ana konuya aittir?',
      options: [
        "Tercih Yapıları",
        "Sadece kelime listesi",
        "Tamamen farklı bir konu",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: 'Bu alt konu "Tercih Yapıları" başlığı altındadır.',
    },
    {
      id: "quiz-111-111-1-2",
      subtopicId: "111-1",
      type: "multiple_choice",
      prompt:
        'B2 seviyesindeki "Tercih Yapıları" için doğru yaklaşım hangisidir?',
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
      id: "quiz-111-111-1-3",
      subtopicId: "111-1",
      type: "multiple_choice",
      prompt: '"Tercih Yapıları" çalışırken hangisi doğrudur?',
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
      id: "quiz-111-level",
      subtopicId: "111-1",
      type: "multiple_choice",
      prompt: '"Tercih Yapıları" konusu hangi seviyeye aittir?',
      options: ["Yanlış seviye", "Belirsiz", "Seviye yok", "B2"],
      correctIndex: 3,
      explanation: "Bu konu B2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Tercih Yapıları konusunu pekiştiren quiz. Başarılar.",
};
