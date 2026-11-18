import type { TopicContent } from "@/data/grammar/types";

export const topicContent60: TopicContent = {
  topicId: "60",
  lesson: {
    parts: [
      {
        id: "60-1",
        title: "Katılma & Benzerlik Bildirme",
        titleEn: "Expressing Agreement and Similarity",
        paragraphs: [
          "**Katılma ve Benzerlik Bildirme** konusu A2 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\So / Neither\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "So / Neither",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "60-ex-60-1-1",
      subtopicId: "60-1",
      type: "multiple_choice",
      prompt:
        '"Katılma ve Benzerlik Bildirme" alt konusu hangi ana konuya aittir?',
      options: [
        "Katılma & Benzerlik Bildirme",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation:
        'Bu alt konu "Katılma ve Benzerlik Bildirme" başlığı altındadır.',
    },
    {
      id: "60-ex-60-1-2",
      subtopicId: "60-1",
      type: "multiple_choice",
      prompt:
        'A2 seviyesindeki "Katılma ve Benzerlik Bildirme" için doğru yaklaşım hangisidir?',
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
      id: "60-tf-60-1-1",
      subtopicId: "60-1",
      type: "true_false",
      prompt:
        '"Katılma ve Benzerlik Bildirme" başlığı "Katılma ve Benzerlik Bildirme" konusunun bir parçasıdır.',
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation:
        'Bu alt başlık "Katılma ve Benzerlik Bildirme" konusu altında işlenir.',
    },
    {
      id: "60-fb-60-1-1",
      subtopicId: "60-1",
      type: "fill_blank",
      prompt:
        '"Katılma ve Benzerlik Bildirme" konusu _____ seviyesine uygundur.',
      answer: "A2",
      explanation: "Bu konu A2 seviyesindedir.",
    },
    {
      id: "60-match-1",
      subtopicId: "60-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Expressing Agreement and Similarity",
          right: "Katılma & Benzerlik Bildirme",
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
      id: "60-cw-1",
      subtopicId: "60-1",
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
      id: "quiz-60-60-1-1",
      subtopicId: "60-1",
      type: "multiple_choice",
      prompt:
        '"Katılma ve Benzerlik Bildirme" alt konusu hangi ana konuya aittir?',
      options: [
        "Sadece kelime listesi",
        "Tamamen farklı bir konu",
        "Katılma & Benzerlik Bildirme",
        "Hiçbiri",
      ],
      correctIndex: 2,
      explanation:
        'Bu alt konu "Katılma ve Benzerlik Bildirme" başlığı altındadır.',
    },
    {
      id: "quiz-60-60-1-2",
      subtopicId: "60-1",
      type: "multiple_choice",
      prompt:
        'A2 seviyesindeki "Katılma ve Benzerlik Bildirme" için doğru yaklaşım hangisidir?',
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
      id: "quiz-60-60-1-3",
      subtopicId: "60-1",
      type: "multiple_choice",
      prompt: '"Katılma ve Benzerlik Bildirme" çalışırken hangisi doğrudur?',
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
      id: "quiz-60-level",
      subtopicId: "60-1",
      type: "multiple_choice",
      prompt: '"Katılma ve Benzerlik Bildirme" konusu hangi seviyeye aittir?',
      options: ["Belirsiz", "Seviye yok", "Yanlış seviye", "A2"],
      correctIndex: 3,
      explanation: "Bu konu A2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro:
    "Katılma ve Benzerlik Bildirme konusunu pekiştiren quiz. Başarılar.",
};
