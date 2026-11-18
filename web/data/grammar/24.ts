import type { TopicContent } from "@/data/grammar/types";

export const topicContent24: TopicContent = {
  topicId: "24",
  lesson: {
    parts: [
      {
        id: "24-1",
        title: "İstek Bildirme",
        titleEn: "Expressing Wishes",
        paragraphs: [
          "**İstek Bildirme** konusu A1 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Would Like\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Would Like",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "24-ex-24-1-1",
      subtopicId: "24-1",
      type: "multiple_choice",
      prompt: "\"İstek Bildirme\" alt konusu hangi ana konuya aittir?",
      options: [
        "İstek Bildirme",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"İstek Bildirme\" başlığı altındadır.",
    },
    {
      id: "24-ex-24-1-2",
      subtopicId: "24-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"İstek Bildirme\" için doğru yaklaşım hangisidir?",
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
      id: "24-tf-24-1-1",
      subtopicId: "24-1",
      type: "true_false",
      prompt: "\"İstek Bildirme\" başlığı \"İstek Bildirme\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"İstek Bildirme\" konusu altında işlenir.",
    },
    {
      id: "24-fb-24-1-1",
      subtopicId: "24-1",
      type: "fill_blank",
      prompt: "\"İstek Bildirme\" konusu _____ seviyesine uygundur.",
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "24-match-1",
      subtopicId: "24-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Expressing Wishes",
          right: "İstek Bildirme",
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
      id: "24-cw-1",
      subtopicId: "24-1",
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
      id: "quiz-24-24-1-1",
      subtopicId: "24-1",
      type: "multiple_choice",
      prompt: "\"İstek Bildirme\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tamamen farklı bir konu",
        "Hiçbiri",
        "İstek Bildirme",
        "Sadece kelime listesi",
      ],
      correctIndex: 2,
      explanation: "Bu alt konu \"İstek Bildirme\" başlığı altındadır.",
    },
    {
      id: "quiz-24-24-1-2",
      subtopicId: "24-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"İstek Bildirme\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-24-24-1-3",
      subtopicId: "24-1",
      type: "multiple_choice",
      prompt: "\"İstek Bildirme\" çalışırken hangisi doğrudur?",
      options: [
        "Anlamadığın örneği işaretleyip tekrar etmek",
        "Hiç örnek okumamak",
        "Konuyu tamamen atlamak",
        "Sadece dinleyip bırakmak",
      ],
      correctIndex: 0,
      explanation: "Tekrar ve işaretleme öğrenmeyi güçlendirir.",
    },
    {
      id: "quiz-24-level",
      subtopicId: "24-1",
      type: "multiple_choice",
      prompt: "\"İstek Bildirme\" konusu hangi seviyeye aittir?",
      options: [
        "A1",
        "Belirsiz",
        "Yanlış seviye",
        "Seviye yok",
      ],
      correctIndex: 0,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "İstek Bildirme konusunu pekiştiren quiz. Başarılar.",
};
