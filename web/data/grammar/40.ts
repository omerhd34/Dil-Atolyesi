import type { TopicContent } from "@/data/grammar/types";

export const topicContent40: TopicContent = {
  topicId: "40",
  lesson: {
    parts: [
      {
        id: "40-1",
        title: "Tavsiye",
        titleEn: "Advice",
        paragraphs: [
          "**Tavsiye** konusu A2 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Should / Shouldn't\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Should / Shouldn't",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "40-ex-40-1-1",
      subtopicId: "40-1",
      type: "multiple_choice",
      prompt: "\"Tavsiye\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tavsiye",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Tavsiye\" başlığı altındadır.",
    },
    {
      id: "40-ex-40-1-2",
      subtopicId: "40-1",
      type: "multiple_choice",
      prompt: "A2 seviyesindeki \"Tavsiye\" için doğru yaklaşım hangisidir?",
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
      id: "40-tf-40-1-1",
      subtopicId: "40-1",
      type: "true_false",
      prompt: "\"Tavsiye\" başlığı \"Tavsiye\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Tavsiye\" konusu altında işlenir.",
    },
    {
      id: "40-fb-40-1-1",
      subtopicId: "40-1",
      type: "fill_blank",
      prompt: "\"Tavsiye\" konusu _____ seviyesine uygundur.",
      answer: "A2",
      explanation: "Bu konu A2 seviyesindedir.",
    },
    {
      id: "40-match-1",
      subtopicId: "40-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Advice",
          right: "Tavsiye",
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
      id: "40-cw-1",
      subtopicId: "40-1",
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
      id: "40-listen-01",
      subtopicId: "40-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Should / Shouldn",
      answer: "Should / Shouldn",
      acceptedAnswers: ["Should / Shouldn", "should / shouldn"],
    },
  ],
  quiz: [
    {
      id: "quiz-40-40-1-1",
      subtopicId: "40-1",
      type: "multiple_choice",
      prompt: "\"Tavsiye\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tamamen farklı bir konu",
        "Hiçbiri",
        "Tavsiye",
        "Sadece kelime listesi",
      ],
      correctIndex: 2,
      explanation: "Bu alt konu \"Tavsiye\" başlığı altındadır.",
    },
    {
      id: "quiz-40-40-1-2",
      subtopicId: "40-1",
      type: "multiple_choice",
      prompt: "A2 seviyesindeki \"Tavsiye\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-40-40-1-3",
      subtopicId: "40-1",
      type: "multiple_choice",
      prompt: "\"Tavsiye\" çalışırken hangisi doğrudur?",
      options: [
        "Konuyu tamamen atlamak",
        "Hiç örnek okumamak",
        "Anlamadığın örneği işaretleyip tekrar etmek",
        "Sadece dinleyip bırakmak",
      ],
      correctIndex: 2,
      explanation: "Tekrar ve işaretleme öğrenmeyi güçlendirir.",
    },
    {
      id: "quiz-40-level",
      subtopicId: "40-1",
      type: "multiple_choice",
      prompt: "\"Tavsiye\" konusu hangi seviyeye aittir?",
      options: [
        "Yanlış seviye",
        "A2",
        "Seviye yok",
        "Belirsiz",
      ],
      correctIndex: 1,
      explanation: "Bu konu A2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Tavsiye konusunu pekiştiren quiz. Başarılar.",
};
