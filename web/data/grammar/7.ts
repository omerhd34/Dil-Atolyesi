import type { TopicContent } from "@/data/grammar/types";

export const topicContent7: TopicContent = {
  topicId: "7",
  lesson: {
    parts: [
      {
        id: "7-1",
        title: "Tekil & Çoğul İsimler",
        titleEn: "Singular & Plural Nouns",
        paragraphs: [
          "**Tekil ve Çoğul İsimler** konusu A1 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Singular\\**, **\\Plural\\**, **\\-s\\**, **\\-es\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Singular",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Plural",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "-s",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "-es",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "-ies",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Irregular Plurals",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "7-ex-7-1-1",
      subtopicId: "7-1",
      type: "multiple_choice",
      prompt: '"Tekil ve Çoğul İsimler" alt konusu hangi ana konuya aittir?',
      options: [
        "Tekil ve Çoğul İsimler",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: 'Bu alt konu "Tekil ve Çoğul İsimler" başlığı altındadır.',
    },
    {
      id: "7-ex-7-1-2",
      subtopicId: "7-1",
      type: "multiple_choice",
      prompt:
        'A1 seviyesindeki "Tekil ve Çoğul İsimler" için doğru yaklaşım hangisidir?',
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
      id: "7-tf-7-1-1",
      subtopicId: "7-1",
      type: "true_false",
      prompt:
        '"Tekil ve Çoğul İsimler" başlığı "Tekil ve Çoğul İsimler" konusunun bir parçasıdır.',
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation:
        'Bu alt başlık "Tekil ve Çoğul İsimler" konusu altında işlenir.',
    },
    {
      id: "7-fb-7-1-1",
      subtopicId: "7-1",
      type: "fill_blank",
      prompt: '"Tekil ve Çoğul İsimler" konusu _____ seviyesine uygundur.',
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "7-match-1",
      subtopicId: "7-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Singular & Plural Nouns",
          right: "Tekil ve Çoğul İsimler",
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
      id: "7-cw-1",
      subtopicId: "7-1",
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
      id: "7-listen-01",
      subtopicId: "7-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Singular",
      answer: "Singular",
      acceptedAnswers: ["Singular", "singular"],
    },
  ],
  quiz: [
    {
      id: "quiz-7-7-1-1",
      subtopicId: "7-1",
      type: "multiple_choice",
      prompt: '"Tekil ve Çoğul İsimler" alt konusu hangi ana konuya aittir?',
      options: [
        "Sadece kelime listesi",
        "Hiçbiri",
        "Tekil ve Çoğul İsimler",
        "Tamamen farklı bir konu",
      ],
      correctIndex: 2,
      explanation: 'Bu alt konu "Tekil ve Çoğul İsimler" başlığı altındadır.',
    },
    {
      id: "quiz-7-7-1-2",
      subtopicId: "7-1",
      type: "multiple_choice",
      prompt:
        'A1 seviyesindeki "Tekil ve Çoğul İsimler" için doğru yaklaşım hangisidir?',
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
      id: "quiz-7-7-1-3",
      subtopicId: "7-1",
      type: "multiple_choice",
      prompt: '"Tekil ve Çoğul İsimler" çalışırken hangisi doğrudur?',
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
      id: "quiz-7-level",
      subtopicId: "7-1",
      type: "multiple_choice",
      prompt: '"Tekil ve Çoğul İsimler" konusu hangi seviyeye aittir?',
      options: ["Yanlış seviye", "A1", "Seviye yok", "Belirsiz"],
      correctIndex: 1,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Tekil ve Çoğul İsimler konusunu pekiştiren quiz. Başarılar.",
};
