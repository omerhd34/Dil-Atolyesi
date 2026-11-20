import type { TopicContent } from "@/data/grammar/types";

export const topicContent206: TopicContent = {
  topicId: "206",
  lesson: {
    parts: [
      {
        id: "206-1",
        title: "Sözcüksel ve Sözdizimsel Hassasiyet",
        titleEn: "Lexical and Syntactic Precision",
        paragraphs: [
          "İleri düzeyde anlamı milimetrik seçer, karmaşık metinleri güvenle kurarsın. Kartta gördüğün kalıplar arasında **\\Precision\\**, **\\Word Choice\\**, **\\Syntax\\** öne çıkar. Olumlu, olumsuz ve soru formlarını C2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Precision",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Word Choice",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Syntax",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "206-ex-206-1-1",
      subtopicId: "206-1",
      type: "multiple_choice",
      prompt: "\"Sözcüksel ve Sözdizimsel Hassasiyet\" alt konusu hangi ana konuya aittir?",
      options: [
        "Sözcüksel ve Sözdizimsel Hassasiyet",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Sözcüksel ve Sözdizimsel Hassasiyet\" başlığı altındadır.",
    },
    {
      id: "206-ex-206-1-2",
      subtopicId: "206-1",
      type: "multiple_choice",
      prompt: "C2 seviyesindeki \"Sözcüksel ve Sözdizimsel Hassasiyet\" için doğru yaklaşım hangisidir?",
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
      id: "206-tf-206-1-1",
      subtopicId: "206-1",
      type: "true_false",
      prompt: "\"Sözcüksel ve Sözdizimsel Hassasiyet\" başlığı \"Sözcüksel ve Sözdizimsel Hassasiyet\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Sözcüksel ve Sözdizimsel Hassasiyet\" konusu altında işlenir.",
    },
    {
      id: "206-fb-206-1-1",
      subtopicId: "206-1",
      type: "fill_blank",
      prompt: "\"Sözcüksel ve Sözdizimsel Hassasiyet\" konusu _____ seviyesine uygundur.",
      answer: "C2",
      explanation: "Bu konu C2 seviyesindedir.",
    },
    {
      id: "206-match-1",
      subtopicId: "206-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Lexical and Syntactic Precision",
          right: "Sözcüksel ve Sözdizimsel Hassasiyet",
        },
        {
          left: "C2 level",
          right: "C2 seviyesi",
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
      id: "206-cw-1",
      subtopicId: "206-1",
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
      id: "206-listen-01",
      subtopicId: "206-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Precision",
      answer: "Precision",
      acceptedAnswers: ["Precision", "precision"],
    },
  ],
  quiz: [
    {
      id: "quiz-206-206-1-1",
      subtopicId: "206-1",
      type: "multiple_choice",
      prompt: "\"Sözcüksel ve Sözdizimsel Hassasiyet\" alt konusu hangi ana konuya aittir?",
      options: [
        "Sözcüksel ve Sözdizimsel Hassasiyet",
        "Sadece kelime listesi",
        "Hiçbiri",
        "Tamamen farklı bir konu",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Sözcüksel ve Sözdizimsel Hassasiyet\" başlığı altındadır.",
    },
    {
      id: "quiz-206-206-1-2",
      subtopicId: "206-1",
      type: "multiple_choice",
      prompt: "C2 seviyesindeki \"Sözcüksel ve Sözdizimsel Hassasiyet\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-206-206-1-3",
      subtopicId: "206-1",
      type: "multiple_choice",
      prompt: "\"Sözcüksel ve Sözdizimsel Hassasiyet\" çalışırken hangisi doğrudur?",
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
      id: "quiz-206-level",
      subtopicId: "206-1",
      type: "multiple_choice",
      prompt: "\"Sözcüksel ve Sözdizimsel Hassasiyet\" konusu hangi seviyeye aittir?",
      options: [
        "Seviye yok",
        "C2",
        "Yanlış seviye",
        "Belirsiz",
      ],
      correctIndex: 1,
      explanation: "Bu konu C2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Sözcüksel ve Sözdizimsel Hassasiyet konusunu pekiştiren quiz. Başarılar.",
};
