import type { TopicContent } from "@/data/grammar/types";

export const topicContent4: TopicContent = {
  topicId: "4",
  lesson: {
    parts: [
      {
        id: "4-1",
        title: "İyelik Sıfatları",
        titleEn: "Possessive Adjectives",
        paragraphs: [
          "**İyelik Sıfatları** konusu A1 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\My\\**, **\\Your\\**, **\\His\\**, **\\Her\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "My",
            tr: "Benim",
          },
          {
            en: "Your",
            tr: "Senin",
          },
          {
            en: "His",
            tr: "Onun (Erkek)",
          },
          {
            en: "Her",
            tr: "Onun (Kadın)",
          },
          {
            en: "Its",
            tr: "Onun (Eşya, hayvan vb.)",
          },
          {
            en: "Our",
            tr: "Bizim",
          },
          {
            en: "Their",
            tr: "Onların",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "4-ex-4-1-1",
      subtopicId: "4-1",
      type: "multiple_choice",
      prompt: '"İyelik Sıfatları" alt konusu hangi ana konuya aittir?',
      options: [
        "İyelik Sıfatları",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: 'Bu alt konu "İyelik Sıfatları" başlığı altındadır.',
    },
    {
      id: "4-ex-4-1-2",
      subtopicId: "4-1",
      type: "multiple_choice",
      prompt:
        'A1 seviyesindeki "İyelik Sıfatları" için doğru yaklaşım hangisidir?',
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
      id: "4-tf-4-1-1",
      subtopicId: "4-1",
      type: "true_false",
      prompt:
        '"İyelik Sıfatları" başlığı "İyelik Sıfatları" konusunun bir parçasıdır.',
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation: 'Bu alt başlık "İyelik Sıfatları" konusu altında işlenir.',
    },
    {
      id: "4-fb-4-1-1",
      subtopicId: "4-1",
      type: "fill_blank",
      prompt: '"İyelik Sıfatları" konusu _____ seviyesine uygundur.',
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "4-match-1",
      subtopicId: "4-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Possessive Adjectives",
          right: "İyelik Sıfatları",
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
      id: "4-cw-1",
      subtopicId: "4-1",
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
      id: "4-listen-01",
      subtopicId: "4-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "My",
      answer: "My",
      acceptedAnswers: ["My", "my"],
    },
  ],
  quiz: [
    {
      id: "quiz-4-4-1-1",
      subtopicId: "4-1",
      type: "multiple_choice",
      prompt: '"İyelik Sıfatları" alt konusu hangi ana konuya aittir?',
      options: [
        "Hiçbiri",
        "İyelik Sıfatları",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
      ],
      correctIndex: 1,
      explanation: 'Bu alt konu "İyelik Sıfatları" başlığı altındadır.',
    },
    {
      id: "quiz-4-4-1-2",
      subtopicId: "4-1",
      type: "multiple_choice",
      prompt:
        'A1 seviyesindeki "İyelik Sıfatları" için doğru yaklaşım hangisidir?',
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
      id: "quiz-4-4-1-3",
      subtopicId: "4-1",
      type: "multiple_choice",
      prompt: '"İyelik Sıfatları" çalışırken hangisi doğrudur?',
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
      id: "quiz-4-level",
      subtopicId: "4-1",
      type: "multiple_choice",
      prompt: '"İyelik Sıfatları" konusu hangi seviyeye aittir?',
      options: ["A1", "Yanlış seviye", "Belirsiz", "Seviye yok"],
      correctIndex: 0,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "İyelik Sıfatları konusunu pekiştiren quiz. Başarılar.",
};
