import type { TopicContent } from "@/data/grammar/types";

export const topicContent5: TopicContent = {
  topicId: "5",
  lesson: {
    parts: [
      {
        id: "5-1",
        title: "İyelik Zamirleri",
        titleEn: "Possessive Pronouns",
        paragraphs: [
          "Zamirler özne, nesne veya dönüşlü görevde kelimenin yerini tutar. Kartta gördüğün kalıplar arasında **\\Mine\\**, **\\Yours\\**, **\\His\\**, **\\Hers\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Mine",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Yours",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "His",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Hers",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Ours",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Theirs",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "5-ex-5-1-1",
      subtopicId: "5-1",
      type: "multiple_choice",
      prompt: "\"İyelik Zamirleri\" alt konusu hangi ana konuya aittir?",
      options: [
        "İyelik Zamirleri",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"İyelik Zamirleri\" başlığı altındadır.",
    },
    {
      id: "5-ex-5-1-2",
      subtopicId: "5-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"İyelik Zamirleri\" için doğru yaklaşım hangisidir?",
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
      id: "5-tf-5-1-1",
      subtopicId: "5-1",
      type: "true_false",
      prompt: "\"İyelik Zamirleri\" başlığı \"İyelik Zamirleri\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"İyelik Zamirleri\" konusu altında işlenir.",
    },
    {
      id: "5-fb-5-1-1",
      subtopicId: "5-1",
      type: "fill_blank",
      prompt: "\"İyelik Zamirleri\" konusu _____ seviyesine uygundur.",
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "5-match-1",
      subtopicId: "5-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Possessive Pronouns",
          right: "İyelik Zamirleri",
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
      id: "5-cw-1",
      subtopicId: "5-1",
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
      id: "quiz-5-5-1-1",
      subtopicId: "5-1",
      type: "multiple_choice",
      prompt: "\"İyelik Zamirleri\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tamamen farklı bir konu",
        "Hiçbiri",
        "İyelik Zamirleri",
        "Sadece kelime listesi",
      ],
      correctIndex: 2,
      explanation: "Bu alt konu \"İyelik Zamirleri\" başlığı altındadır.",
    },
    {
      id: "quiz-5-5-1-2",
      subtopicId: "5-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"İyelik Zamirleri\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-5-5-1-3",
      subtopicId: "5-1",
      type: "multiple_choice",
      prompt: "\"İyelik Zamirleri\" çalışırken hangisi doğrudur?",
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
      id: "quiz-5-level",
      subtopicId: "5-1",
      type: "multiple_choice",
      prompt: "\"İyelik Zamirleri\" konusu hangi seviyeye aittir?",
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
  quizIntro: "İyelik Zamirleri konusunu pekiştiren quiz. Başarılar.",
};
