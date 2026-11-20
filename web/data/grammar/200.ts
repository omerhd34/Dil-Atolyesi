import type { TopicContent } from "@/data/grammar/types";

export const topicContent200: TopicContent = {
  topicId: "200",
  lesson: {
    parts: [
      {
        id: "200-1",
        title: "İleri Söylem Yapıları",
        titleEn: "Advanced Discourse Structures",
        paragraphs: [
          "Bu bölüm metnin akışını, üslubunu ve bağlama uygun dil seçimini güçlendirir. Kartta gördüğün kalıplar arasında **\\Discourse\\**, **\\Cohesion\\**, **\\Turn-Taking\\** öne çıkar. Olumlu, olumsuz ve soru formlarını C2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Discourse",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Cohesion",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Turn-Taking",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "200-ex-200-1-1",
      subtopicId: "200-1",
      type: "multiple_choice",
      prompt: "\"İleri Söylem Yapıları\" alt konusu hangi ana konuya aittir?",
      options: [
        "İleri Söylem Yapıları",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"İleri Söylem Yapıları\" başlığı altındadır.",
    },
    {
      id: "200-ex-200-1-2",
      subtopicId: "200-1",
      type: "multiple_choice",
      prompt: "C2 seviyesindeki \"İleri Söylem Yapıları\" için doğru yaklaşım hangisidir?",
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
      id: "200-tf-200-1-1",
      subtopicId: "200-1",
      type: "true_false",
      prompt: "\"İleri Söylem Yapıları\" başlığı \"İleri Söylem Yapıları\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"İleri Söylem Yapıları\" konusu altında işlenir.",
    },
    {
      id: "200-fb-200-1-1",
      subtopicId: "200-1",
      type: "fill_blank",
      prompt: "\"İleri Söylem Yapıları\" konusu _____ seviyesine uygundur.",
      answer: "C2",
      explanation: "Bu konu C2 seviyesindedir.",
    },
    {
      id: "200-match-1",
      subtopicId: "200-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Advanced Discourse Structures",
          right: "İleri Söylem Yapıları",
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
      id: "200-cw-1",
      subtopicId: "200-1",
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
      id: "200-listen-01",
      subtopicId: "200-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Discourse",
      answer: "Discourse",
      acceptedAnswers: ["Discourse", "discourse"],
    },
  ],
  quiz: [
    {
      id: "quiz-200-200-1-1",
      subtopicId: "200-1",
      type: "multiple_choice",
      prompt: "\"İleri Söylem Yapıları\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tamamen farklı bir konu",
        "İleri Söylem Yapıları",
        "Hiçbiri",
        "Sadece kelime listesi",
      ],
      correctIndex: 1,
      explanation: "Bu alt konu \"İleri Söylem Yapıları\" başlığı altındadır.",
    },
    {
      id: "quiz-200-200-1-2",
      subtopicId: "200-1",
      type: "multiple_choice",
      prompt: "C2 seviyesindeki \"İleri Söylem Yapıları\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-200-200-1-3",
      subtopicId: "200-1",
      type: "multiple_choice",
      prompt: "\"İleri Söylem Yapıları\" çalışırken hangisi doğrudur?",
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
      id: "quiz-200-level",
      subtopicId: "200-1",
      type: "multiple_choice",
      prompt: "\"İleri Söylem Yapıları\" konusu hangi seviyeye aittir?",
      options: [
        "Belirsiz",
        "Seviye yok",
        "Yanlış seviye",
        "C2",
      ],
      correctIndex: 3,
      explanation: "Bu konu C2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "İleri Söylem Yapıları konusunu pekiştiren quiz. Başarılar.",
};
