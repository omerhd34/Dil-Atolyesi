import type { TopicContent } from "@/data/grammar/types";

export const topicContent91: TopicContent = {
  topicId: "91",
  lesson: {
    parts: [
      {
        id: "91-1",
        title: "Alışkanlık Yapıları",
        titleEn: "Used To / Be Used To / Get Used To",
        paragraphs: [
          "**Alışkanlık Yapıları** konusu B1 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Used To\\**, **\\Be Used To\\**, **\\Get Used To\\** öne çıkar. Olumlu, olumsuz ve soru formlarını B1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Used To",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Be Used To",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Get Used To",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "91-ex-91-1-1",
      subtopicId: "91-1",
      type: "multiple_choice",
      prompt: "\"Alışkanlık Yapıları\" alt konusu hangi ana konuya aittir?",
      options: [
        "Alışkanlık Yapıları",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Alışkanlık Yapıları\" başlığı altındadır.",
    },
    {
      id: "91-ex-91-1-2",
      subtopicId: "91-1",
      type: "multiple_choice",
      prompt: "B1 seviyesindeki \"Alışkanlık Yapıları\" için doğru yaklaşım hangisidir?",
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
      id: "91-tf-91-1-1",
      subtopicId: "91-1",
      type: "true_false",
      prompt: "\"Alışkanlık Yapıları\" başlığı \"Alışkanlık Yapıları\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Alışkanlık Yapıları\" konusu altında işlenir.",
    },
    {
      id: "91-fb-91-1-1",
      subtopicId: "91-1",
      type: "fill_blank",
      prompt: "\"Alışkanlık Yapıları\" konusu _____ seviyesine uygundur.",
      answer: "B1",
      explanation: "Bu konu B1 seviyesindedir.",
    },
    {
      id: "91-match-1",
      subtopicId: "91-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Used To / Be Used To / Get Used To",
          right: "Alışkanlık Yapıları",
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
      id: "91-cw-1",
      subtopicId: "91-1",
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
      id: "91-listen-01",
      subtopicId: "91-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Used To",
      answer: "Used To",
      acceptedAnswers: ["Used To", "used to"],
    },
  ],
  quiz: [
    {
      id: "quiz-91-91-1-1",
      subtopicId: "91-1",
      type: "multiple_choice",
      prompt: "\"Alışkanlık Yapıları\" alt konusu hangi ana konuya aittir?",
      options: [
        "Sadece kelime listesi",
        "Tamamen farklı bir konu",
        "Alışkanlık Yapıları",
        "Hiçbiri",
      ],
      correctIndex: 2,
      explanation: "Bu alt konu \"Alışkanlık Yapıları\" başlığı altındadır.",
    },
    {
      id: "quiz-91-91-1-2",
      subtopicId: "91-1",
      type: "multiple_choice",
      prompt: "B1 seviyesindeki \"Alışkanlık Yapıları\" için doğru yaklaşım hangisidir?",
      options: [
        "Sadece çeviri yapmadan ezberlemek",
        "Konuyu tamamen atlamak",
        "Örnekleri okuyup kısa pratik yapmak",
        "Hiç alıştırma çözmemek",
      ],
      correctIndex: 2,
      explanation: "Örnek + kısa pratik, kalıcı öğrenmeye yardımcı olur.",
    },
    {
      id: "quiz-91-91-1-3",
      subtopicId: "91-1",
      type: "multiple_choice",
      prompt: "\"Alışkanlık Yapıları\" çalışırken hangisi doğrudur?",
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
      id: "quiz-91-level",
      subtopicId: "91-1",
      type: "multiple_choice",
      prompt: "\"Alışkanlık Yapıları\" konusu hangi seviyeye aittir?",
      options: [
        "Yanlış seviye",
        "B1",
        "Seviye yok",
        "Belirsiz",
      ],
      correctIndex: 1,
      explanation: "Bu konu B1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Alışkanlık Yapıları konusunu pekiştiren quiz. Başarılar.",
};
