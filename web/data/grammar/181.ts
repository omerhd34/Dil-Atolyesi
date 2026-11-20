import type { TopicContent } from "@/data/grammar/types";

export const topicContent181: TopicContent = {
  topicId: "181",
  lesson: {
    parts: [
      {
        id: "181-1",
        title: "İleri Noktalama",
        titleEn: "Advanced Punctuation",
        paragraphs: [
          "**İleri Noktalama** konusu C1 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Semicolon\\**, **\\Colon\\**, **\\Dash\\**, **\\Parentheses\\** öne çıkar. Olumlu, olumsuz ve soru formlarını C1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Semicolon",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Colon",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Dash",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Parentheses",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "181-ex-181-1-1",
      subtopicId: "181-1",
      type: "multiple_choice",
      prompt: "\"İleri Noktalama\" alt konusu hangi ana konuya aittir?",
      options: [
        "İleri Noktalama",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"İleri Noktalama\" başlığı altındadır.",
    },
    {
      id: "181-ex-181-1-2",
      subtopicId: "181-1",
      type: "multiple_choice",
      prompt: "C1 seviyesindeki \"İleri Noktalama\" için doğru yaklaşım hangisidir?",
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
      id: "181-tf-181-1-1",
      subtopicId: "181-1",
      type: "true_false",
      prompt: "\"İleri Noktalama\" başlığı \"İleri Noktalama\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"İleri Noktalama\" konusu altında işlenir.",
    },
    {
      id: "181-fb-181-1-1",
      subtopicId: "181-1",
      type: "fill_blank",
      prompt: "\"İleri Noktalama\" konusu _____ seviyesine uygundur.",
      answer: "C1",
      explanation: "Bu konu C1 seviyesindedir.",
    },
    {
      id: "181-match-1",
      subtopicId: "181-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Advanced Punctuation",
          right: "İleri Noktalama",
        },
        {
          left: "C1 level",
          right: "C1 seviyesi",
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
      id: "181-cw-1",
      subtopicId: "181-1",
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
      id: "181-listen-01",
      subtopicId: "181-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Semicolon",
      answer: "Semicolon",
      acceptedAnswers: ["Semicolon", "semicolon"],
    },
  ],
  quiz: [
    {
      id: "quiz-181-181-1-1",
      subtopicId: "181-1",
      type: "multiple_choice",
      prompt: "\"İleri Noktalama\" alt konusu hangi ana konuya aittir?",
      options: [
        "İleri Noktalama",
        "Sadece kelime listesi",
        "Tamamen farklı bir konu",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"İleri Noktalama\" başlığı altındadır.",
    },
    {
      id: "quiz-181-181-1-2",
      subtopicId: "181-1",
      type: "multiple_choice",
      prompt: "C1 seviyesindeki \"İleri Noktalama\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-181-181-1-3",
      subtopicId: "181-1",
      type: "multiple_choice",
      prompt: "\"İleri Noktalama\" çalışırken hangisi doğrudur?",
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
      id: "quiz-181-level",
      subtopicId: "181-1",
      type: "multiple_choice",
      prompt: "\"İleri Noktalama\" konusu hangi seviyeye aittir?",
      options: [
        "C1",
        "Belirsiz",
        "Seviye yok",
        "Yanlış seviye",
      ],
      correctIndex: 0,
      explanation: "Bu konu C1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "İleri Noktalama konusunu pekiştiren quiz. Başarılar.",
};
