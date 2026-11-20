import type { TopicContent } from "@/data/grammar/types";

export const topicContent180: TopicContent = {
  topicId: "180",
  lesson: {
    parts: [
      {
        id: "180-1",
        title: "Bağdaşıklık ve Tutarlılık",
        titleEn: "Cohesion and Coherence",
        paragraphs: [
          "Bu bölüm metnin akışını, üslubunu ve bağlama uygun dil seçimini güçlendirir. Kartta gördüğün kalıplar arasında **\\Cohesion\\**, **\\Coherence\\**, **\\Reference\\**, **\\Lexical Chains\\** öne çıkar. Olumlu, olumsuz ve soru formlarını C1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Cohesion",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Coherence",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Reference",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Lexical Chains",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "180-ex-180-1-1",
      subtopicId: "180-1",
      type: "multiple_choice",
      prompt: "\"Bağdaşıklık ve Tutarlılık\" alt konusu hangi ana konuya aittir?",
      options: [
        "Bağdaşıklık ve Tutarlılık",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Bağdaşıklık ve Tutarlılık\" başlığı altındadır.",
    },
    {
      id: "180-ex-180-1-2",
      subtopicId: "180-1",
      type: "multiple_choice",
      prompt: "C1 seviyesindeki \"Bağdaşıklık ve Tutarlılık\" için doğru yaklaşım hangisidir?",
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
      id: "180-tf-180-1-1",
      subtopicId: "180-1",
      type: "true_false",
      prompt: "\"Bağdaşıklık ve Tutarlılık\" başlığı \"Bağdaşıklık ve Tutarlılık\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Bağdaşıklık ve Tutarlılık\" konusu altında işlenir.",
    },
    {
      id: "180-fb-180-1-1",
      subtopicId: "180-1",
      type: "fill_blank",
      prompt: "\"Bağdaşıklık ve Tutarlılık\" konusu _____ seviyesine uygundur.",
      answer: "C1",
      explanation: "Bu konu C1 seviyesindedir.",
    },
    {
      id: "180-match-1",
      subtopicId: "180-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Cohesion and Coherence",
          right: "Bağdaşıklık ve Tutarlılık",
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
      id: "180-cw-1",
      subtopicId: "180-1",
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
      id: "180-listen-01",
      subtopicId: "180-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Cohesion",
      answer: "Cohesion",
      acceptedAnswers: ["Cohesion", "cohesion"],
    },
  ],
  quiz: [
    {
      id: "quiz-180-180-1-1",
      subtopicId: "180-1",
      type: "multiple_choice",
      prompt: "\"Bağdaşıklık ve Tutarlılık\" alt konusu hangi ana konuya aittir?",
      options: [
        "Bağdaşıklık ve Tutarlılık",
        "Sadece kelime listesi",
        "Hiçbiri",
        "Tamamen farklı bir konu",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Bağdaşıklık ve Tutarlılık\" başlığı altındadır.",
    },
    {
      id: "quiz-180-180-1-2",
      subtopicId: "180-1",
      type: "multiple_choice",
      prompt: "C1 seviyesindeki \"Bağdaşıklık ve Tutarlılık\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-180-180-1-3",
      subtopicId: "180-1",
      type: "multiple_choice",
      prompt: "\"Bağdaşıklık ve Tutarlılık\" çalışırken hangisi doğrudur?",
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
      id: "quiz-180-level",
      subtopicId: "180-1",
      type: "multiple_choice",
      prompt: "\"Bağdaşıklık ve Tutarlılık\" konusu hangi seviyeye aittir?",
      options: [
        "Yanlış seviye",
        "C1",
        "Seviye yok",
        "Belirsiz",
      ],
      correctIndex: 1,
      explanation: "Bu konu C1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Bağdaşıklık ve Tutarlılık konusunu pekiştiren quiz. Başarılar.",
};
