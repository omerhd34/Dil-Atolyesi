import type { TopicContent } from "@/data/grammar/types";

export const topicContent21: TopicContent = {
  topicId: "21",
  lesson: {
    parts: [
      {
        id: "21-1",
        title: "Zarflar",
        titleEn: "Adverbs",
        paragraphs: [
          "**Zarflar** konusu A1 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Slowly\\**, **\\Quickly\\**, **\\Well\\**, **\\Badly\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Slowly",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Quickly",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Well",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Badly",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Adverbs",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "21-ex-21-1-1",
      subtopicId: "21-1",
      type: "multiple_choice",
      prompt: "\"Zarflar\" alt konusu hangi ana konuya aittir?",
      options: [
        "Zarflar",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Zarflar\" başlığı altındadır.",
    },
    {
      id: "21-ex-21-1-2",
      subtopicId: "21-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Zarflar\" için doğru yaklaşım hangisidir?",
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
      id: "21-tf-21-1-1",
      subtopicId: "21-1",
      type: "true_false",
      prompt: "\"Zarflar\" başlığı \"Zarflar\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Zarflar\" konusu altında işlenir.",
    },
    {
      id: "21-fb-21-1-1",
      subtopicId: "21-1",
      type: "fill_blank",
      prompt: "\"Zarflar\" konusu _____ seviyesine uygundur.",
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "21-match-1",
      subtopicId: "21-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Adverbs",
          right: "Zarflar",
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
      id: "21-cw-1",
      subtopicId: "21-1",
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
      id: "21-listen-01",
      subtopicId: "21-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Slowly",
      answer: "Slowly",
      acceptedAnswers: ["Slowly", "slowly"],
    },
  ],
  quiz: [
    {
      id: "quiz-21-21-1-1",
      subtopicId: "21-1",
      type: "multiple_choice",
      prompt: "\"Zarflar\" alt konusu hangi ana konuya aittir?",
      options: [
        "Zarflar",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Zarflar\" başlığı altındadır.",
    },
    {
      id: "quiz-21-21-1-2",
      subtopicId: "21-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Zarflar\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-21-21-1-3",
      subtopicId: "21-1",
      type: "multiple_choice",
      prompt: "\"Zarflar\" çalışırken hangisi doğrudur?",
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
      id: "quiz-21-level",
      subtopicId: "21-1",
      type: "multiple_choice",
      prompt: "\"Zarflar\" konusu hangi seviyeye aittir?",
      options: [
        "Yanlış seviye",
        "Seviye yok",
        "Belirsiz",
        "A1",
      ],
      correctIndex: 3,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Zarflar konusunu pekiştiren quiz. Başarılar.",
};
