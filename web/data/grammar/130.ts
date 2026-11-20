import type { TopicContent } from "@/data/grammar/types";

export const topicContent130: TopicContent = {
  topicId: "130",
  lesson: {
    parts: [
      {
        id: "130-1",
        title: "Eksiltili Yapılar",
        titleEn: "Ellipsis",
        paragraphs: [
          "**Eksiltili Yapılar** konusu B2 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Omission\\**, **\\So Do I\\**, **\\Auxiliary Ellipsis\\** öne çıkar. Olumlu, olumsuz ve soru formlarını B2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Omission",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "So Do I",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Auxiliary Ellipsis",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "130-ex-130-1-1",
      subtopicId: "130-1",
      type: "multiple_choice",
      prompt: "\"Eksiltili Yapılar\" alt konusu hangi ana konuya aittir?",
      options: [
        "Eksiltili Yapılar",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Eksiltili Yapılar\" başlığı altındadır.",
    },
    {
      id: "130-ex-130-1-2",
      subtopicId: "130-1",
      type: "multiple_choice",
      prompt: "B2 seviyesindeki \"Eksiltili Yapılar\" için doğru yaklaşım hangisidir?",
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
      id: "130-tf-130-1-1",
      subtopicId: "130-1",
      type: "true_false",
      prompt: "\"Eksiltili Yapılar\" başlığı \"Eksiltili Yapılar\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Eksiltili Yapılar\" konusu altında işlenir.",
    },
    {
      id: "130-fb-130-1-1",
      subtopicId: "130-1",
      type: "fill_blank",
      prompt: "\"Eksiltili Yapılar\" konusu _____ seviyesine uygundur.",
      answer: "B2",
      explanation: "Bu konu B2 seviyesindedir.",
    },
    {
      id: "130-match-1",
      subtopicId: "130-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Ellipsis",
          right: "Eksiltili Yapılar",
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
      id: "130-cw-1",
      subtopicId: "130-1",
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
      id: "130-listen-01",
      subtopicId: "130-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Omission",
      answer: "Omission",
      acceptedAnswers: ["Omission", "omission"],
    },
  ],
  quiz: [
    {
      id: "quiz-130-130-1-1",
      subtopicId: "130-1",
      type: "multiple_choice",
      prompt: "\"Eksiltili Yapılar\" alt konusu hangi ana konuya aittir?",
      options: [
        "Sadece kelime listesi",
        "Tamamen farklı bir konu",
        "Eksiltili Yapılar",
        "Hiçbiri",
      ],
      correctIndex: 2,
      explanation: "Bu alt konu \"Eksiltili Yapılar\" başlığı altındadır.",
    },
    {
      id: "quiz-130-130-1-2",
      subtopicId: "130-1",
      type: "multiple_choice",
      prompt: "B2 seviyesindeki \"Eksiltili Yapılar\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-130-130-1-3",
      subtopicId: "130-1",
      type: "multiple_choice",
      prompt: "\"Eksiltili Yapılar\" çalışırken hangisi doğrudur?",
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
      id: "quiz-130-level",
      subtopicId: "130-1",
      type: "multiple_choice",
      prompt: "\"Eksiltili Yapılar\" konusu hangi seviyeye aittir?",
      options: [
        "Belirsiz",
        "Seviye yok",
        "B2",
        "Yanlış seviye",
      ],
      correctIndex: 2,
      explanation: "Bu konu B2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Eksiltili Yapılar konusunu pekiştiren quiz. Başarılar.",
};
