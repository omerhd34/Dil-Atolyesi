import type { TopicContent } from "@/data/grammar/types";

export const topicContent25: TopicContent = {
  topicId: "25",
  lesson: {
    parts: [
      {
        id: "25-1",
        title: "Temel Cümle Yapısı",
        titleEn: "Basic Sentence Structure",
        paragraphs: [
          "**Temel Cümle Yapısı** konusu A1 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Subject\\**, **\\Verb\\**, **\\Object\\**, **\\SVO\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Subject",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Verb",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Object",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "SVO",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Word Order",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "25-ex-25-1-1",
      subtopicId: "25-1",
      type: "multiple_choice",
      prompt: "\"Temel Cümle Yapısı\" alt konusu hangi ana konuya aittir?",
      options: [
        "Temel Cümle Yapısı",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Temel Cümle Yapısı\" başlığı altındadır.",
    },
    {
      id: "25-ex-25-1-2",
      subtopicId: "25-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Temel Cümle Yapısı\" için doğru yaklaşım hangisidir?",
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
      id: "25-tf-25-1-1",
      subtopicId: "25-1",
      type: "true_false",
      prompt: "\"Temel Cümle Yapısı\" başlığı \"Temel Cümle Yapısı\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Temel Cümle Yapısı\" konusu altında işlenir.",
    },
    {
      id: "25-fb-25-1-1",
      subtopicId: "25-1",
      type: "fill_blank",
      prompt: "\"Temel Cümle Yapısı\" konusu _____ seviyesine uygundur.",
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "25-match-1",
      subtopicId: "25-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Basic Sentence Structure",
          right: "Temel Cümle Yapısı",
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
      id: "25-cw-1",
      subtopicId: "25-1",
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
      id: "25-listen-01",
      subtopicId: "25-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Subject",
      answer: "Subject",
      acceptedAnswers: ["Subject", "subject"],
    },
  ],
  quiz: [
    {
      id: "quiz-25-25-1-1",
      subtopicId: "25-1",
      type: "multiple_choice",
      prompt: "\"Temel Cümle Yapısı\" alt konusu hangi ana konuya aittir?",
      options: [
        "Hiçbiri",
        "Temel Cümle Yapısı",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
      ],
      correctIndex: 1,
      explanation: "Bu alt konu \"Temel Cümle Yapısı\" başlığı altındadır.",
    },
    {
      id: "quiz-25-25-1-2",
      subtopicId: "25-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Temel Cümle Yapısı\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-25-25-1-3",
      subtopicId: "25-1",
      type: "multiple_choice",
      prompt: "\"Temel Cümle Yapısı\" çalışırken hangisi doğrudur?",
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
      id: "quiz-25-level",
      subtopicId: "25-1",
      type: "multiple_choice",
      prompt: "\"Temel Cümle Yapısı\" konusu hangi seviyeye aittir?",
      options: [
        "Belirsiz",
        "Seviye yok",
        "Yanlış seviye",
        "A1",
      ],
      correctIndex: 3,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Temel Cümle Yapısı konusunu pekiştiren quiz. Başarılar.",
};
