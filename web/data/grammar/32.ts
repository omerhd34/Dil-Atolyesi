import type { TopicContent } from "@/data/grammar/types";

export const topicContent32: TopicContent = {
  topicId: "32",
  lesson: {
    parts: [
      {
        id: "32-1",
        title: "Düzenli & Düzensiz Fiiller",
        titleEn: "Regular and Irregular Verbs",
        paragraphs: [
          "**Düzenli ve Düzensiz Fiiller** konusu A2 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Regular Verbs\\**, **\\Irregular Verbs\\**, **\\-ed\\**, **\\V2\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Regular Verbs",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Irregular Verbs",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "-ed",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "V2",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "32-ex-32-1-1",
      subtopicId: "32-1",
      type: "multiple_choice",
      prompt: "\"Düzenli ve Düzensiz Fiiller\" alt konusu hangi ana konuya aittir?",
      options: [
        "Düzenli & Düzensiz Fiiller",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Düzenli ve Düzensiz Fiiller\" başlığı altındadır.",
    },
    {
      id: "32-ex-32-1-2",
      subtopicId: "32-1",
      type: "multiple_choice",
      prompt: "A2 seviyesindeki \"Düzenli ve Düzensiz Fiiller\" için doğru yaklaşım hangisidir?",
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
      id: "32-tf-32-1-1",
      subtopicId: "32-1",
      type: "true_false",
      prompt: "\"Düzenli ve Düzensiz Fiiller\" başlığı \"Düzenli ve Düzensiz Fiiller\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Düzenli ve Düzensiz Fiiller\" konusu altında işlenir.",
    },
    {
      id: "32-fb-32-1-1",
      subtopicId: "32-1",
      type: "fill_blank",
      prompt: "\"Düzenli ve Düzensiz Fiiller\" konusu _____ seviyesine uygundur.",
      answer: "A2",
      explanation: "Bu konu A2 seviyesindedir.",
    },
    {
      id: "32-match-1",
      subtopicId: "32-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Regular and Irregular Verbs",
          right: "Düzenli & Düzensiz Fiiller",
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
      id: "32-cw-1",
      subtopicId: "32-1",
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
      id: "quiz-32-32-1-1",
      subtopicId: "32-1",
      type: "multiple_choice",
      prompt: "\"Düzenli ve Düzensiz Fiiller\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tamamen farklı bir konu",
        "Hiçbiri",
        "Düzenli & Düzensiz Fiiller",
        "Sadece kelime listesi",
      ],
      correctIndex: 2,
      explanation: "Bu alt konu \"Düzenli ve Düzensiz Fiiller\" başlığı altındadır.",
    },
    {
      id: "quiz-32-32-1-2",
      subtopicId: "32-1",
      type: "multiple_choice",
      prompt: "A2 seviyesindeki \"Düzenli ve Düzensiz Fiiller\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-32-32-1-3",
      subtopicId: "32-1",
      type: "multiple_choice",
      prompt: "\"Düzenli ve Düzensiz Fiiller\" çalışırken hangisi doğrudur?",
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
      id: "quiz-32-level",
      subtopicId: "32-1",
      type: "multiple_choice",
      prompt: "\"Düzenli ve Düzensiz Fiiller\" konusu hangi seviyeye aittir?",
      options: [
        "A2",
        "Belirsiz",
        "Yanlış seviye",
        "Seviye yok",
      ],
      correctIndex: 0,
      explanation: "Bu konu A2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Düzenli ve Düzensiz Fiiller konusunu pekiştiren quiz. Başarılar.",
};
