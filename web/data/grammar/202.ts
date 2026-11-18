import type { TopicContent } from "@/data/grammar/types";

export const topicContent202: TopicContent = {
  topicId: "202",
  lesson: {
    parts: [
      {
        id: "202-1",
        title: "İleri Retorik Yapılar",
        titleEn: "Advanced Rhetorical Structures",
        paragraphs: [
          "İleri düzeyde anlamı milimetrik seçer, karmaşık metinleri güvenle kurarsın. Kartta gördüğün kalıplar arasında **\\Rhetoric\\**, **\\Antithesis\\**, **\\Parallelism\\** öne çıkar. Olumlu, olumsuz ve soru formlarını C2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Rhetoric",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Antithesis",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Parallelism",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "202-ex-202-1-1",
      subtopicId: "202-1",
      type: "multiple_choice",
      prompt: "\"İleri Retorik Yapılar\" alt konusu hangi ana konuya aittir?",
      options: [
        "İleri Retorik Yapılar",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"İleri Retorik Yapılar\" başlığı altındadır.",
    },
    {
      id: "202-ex-202-1-2",
      subtopicId: "202-1",
      type: "multiple_choice",
      prompt: "C2 seviyesindeki \"İleri Retorik Yapılar\" için doğru yaklaşım hangisidir?",
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
      id: "202-tf-202-1-1",
      subtopicId: "202-1",
      type: "true_false",
      prompt: "\"İleri Retorik Yapılar\" başlığı \"İleri Retorik Yapılar\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"İleri Retorik Yapılar\" konusu altında işlenir.",
    },
    {
      id: "202-fb-202-1-1",
      subtopicId: "202-1",
      type: "fill_blank",
      prompt: "\"İleri Retorik Yapılar\" konusu _____ seviyesine uygundur.",
      answer: "C2",
      explanation: "Bu konu C2 seviyesindedir.",
    },
    {
      id: "202-match-1",
      subtopicId: "202-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Advanced Rhetorical Structures",
          right: "İleri Retorik Yapılar",
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
      id: "202-cw-1",
      subtopicId: "202-1",
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
      id: "quiz-202-202-1-1",
      subtopicId: "202-1",
      type: "multiple_choice",
      prompt: "\"İleri Retorik Yapılar\" alt konusu hangi ana konuya aittir?",
      options: [
        "İleri Retorik Yapılar",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"İleri Retorik Yapılar\" başlığı altındadır.",
    },
    {
      id: "quiz-202-202-1-2",
      subtopicId: "202-1",
      type: "multiple_choice",
      prompt: "C2 seviyesindeki \"İleri Retorik Yapılar\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-202-202-1-3",
      subtopicId: "202-1",
      type: "multiple_choice",
      prompt: "\"İleri Retorik Yapılar\" çalışırken hangisi doğrudur?",
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
      id: "quiz-202-level",
      subtopicId: "202-1",
      type: "multiple_choice",
      prompt: "\"İleri Retorik Yapılar\" konusu hangi seviyeye aittir?",
      options: [
        "Yanlış seviye",
        "Seviye yok",
        "C2",
        "Belirsiz",
      ],
      correctIndex: 2,
      explanation: "Bu konu C2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "İleri Retorik Yapılar konusunu pekiştiren quiz. Başarılar.",
};
