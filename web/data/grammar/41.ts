import type { TopicContent } from "@/data/grammar/types";

export const topicContent41: TopicContent = {
  topicId: "41",
  lesson: {
    parts: [
      {
        id: "41-1",
        title: "Olasılık",
        titleEn: "Probability",
        paragraphs: [
          "**Olasılık** konusu A2 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\May / Might\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "May / Might",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "41-ex-41-1-1",
      subtopicId: "41-1",
      type: "multiple_choice",
      prompt: "\"Olasılık\" alt konusu hangi ana konuya aittir?",
      options: [
        "Olasılık",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Olasılık\" başlığı altındadır.",
    },
    {
      id: "41-ex-41-1-2",
      subtopicId: "41-1",
      type: "multiple_choice",
      prompt: "A2 seviyesindeki \"Olasılık\" için doğru yaklaşım hangisidir?",
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
      id: "41-tf-41-1-1",
      subtopicId: "41-1",
      type: "true_false",
      prompt: "\"Olasılık\" başlığı \"Olasılık\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Olasılık\" konusu altında işlenir.",
    },
    {
      id: "41-fb-41-1-1",
      subtopicId: "41-1",
      type: "fill_blank",
      prompt: "\"Olasılık\" konusu _____ seviyesine uygundur.",
      answer: "A2",
      explanation: "Bu konu A2 seviyesindedir.",
    },
    {
      id: "41-match-1",
      subtopicId: "41-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Probability",
          right: "Olasılık",
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
      id: "41-cw-1",
      subtopicId: "41-1",
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
      id: "quiz-41-41-1-1",
      subtopicId: "41-1",
      type: "multiple_choice",
      prompt: "\"Olasılık\" alt konusu hangi ana konuya aittir?",
      options: [
        "Olasılık",
        "Hiçbiri",
        "Sadece kelime listesi",
        "Tamamen farklı bir konu",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Olasılık\" başlığı altındadır.",
    },
    {
      id: "quiz-41-41-1-2",
      subtopicId: "41-1",
      type: "multiple_choice",
      prompt: "A2 seviyesindeki \"Olasılık\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-41-41-1-3",
      subtopicId: "41-1",
      type: "multiple_choice",
      prompt: "\"Olasılık\" çalışırken hangisi doğrudur?",
      options: [
        "Anlamadığın örneği işaretleyip tekrar etmek",
        "Sadece dinleyip bırakmak",
        "Konuyu tamamen atlamak",
        "Hiç örnek okumamak",
      ],
      correctIndex: 0,
      explanation: "Tekrar ve işaretleme öğrenmeyi güçlendirir.",
    },
    {
      id: "quiz-41-level",
      subtopicId: "41-1",
      type: "multiple_choice",
      prompt: "\"Olasılık\" konusu hangi seviyeye aittir?",
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
  quizIntro: "Olasılık konusunu pekiştiren quiz. Başarılar.",
};
