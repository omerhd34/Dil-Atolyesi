import type { TopicContent } from "@/data/grammar/types";

export const topicContent30: TopicContent = {
  topicId: "30",
  lesson: {
    parts: [
      {
        id: "30-1",
        title: "Geçmiş Zaman",
        titleEn: "Past Simple",
        paragraphs: [
          "**Geçmiş Zaman** konusu A2 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Past Simple\\**, **\\Did\\**, **\\V2\\**, **\\Yesterday\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Past Simple",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Did",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "V2",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Yesterday",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Last Year",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "30-ex-30-1-1",
      subtopicId: "30-1",
      type: "multiple_choice",
      prompt: "\"Geçmiş Zaman\" alt konusu hangi ana konuya aittir?",
      options: [
        "Geçmiş Zaman",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Geçmiş Zaman\" başlığı altındadır.",
    },
    {
      id: "30-ex-30-1-2",
      subtopicId: "30-1",
      type: "multiple_choice",
      prompt: "A2 seviyesindeki \"Geçmiş Zaman\" için doğru yaklaşım hangisidir?",
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
      id: "30-tf-30-1-1",
      subtopicId: "30-1",
      type: "true_false",
      prompt: "\"Geçmiş Zaman\" başlığı \"Geçmiş Zaman\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Geçmiş Zaman\" konusu altında işlenir.",
    },
    {
      id: "30-fb-30-1-1",
      subtopicId: "30-1",
      type: "fill_blank",
      prompt: "\"Geçmiş Zaman\" konusu _____ seviyesine uygundur.",
      answer: "A2",
      explanation: "Bu konu A2 seviyesindedir.",
    },
    {
      id: "30-match-1",
      subtopicId: "30-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Past Simple",
          right: "Geçmiş Zaman",
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
      id: "30-cw-1",
      subtopicId: "30-1",
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
      id: "quiz-30-30-1-1",
      subtopicId: "30-1",
      type: "multiple_choice",
      prompt: "\"Geçmiş Zaman\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tamamen farklı bir konu",
        "Geçmiş Zaman",
        "Hiçbiri",
        "Sadece kelime listesi",
      ],
      correctIndex: 1,
      explanation: "Bu alt konu \"Geçmiş Zaman\" başlığı altındadır.",
    },
    {
      id: "quiz-30-30-1-2",
      subtopicId: "30-1",
      type: "multiple_choice",
      prompt: "A2 seviyesindeki \"Geçmiş Zaman\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-30-30-1-3",
      subtopicId: "30-1",
      type: "multiple_choice",
      prompt: "\"Geçmiş Zaman\" çalışırken hangisi doğrudur?",
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
      id: "quiz-30-level",
      subtopicId: "30-1",
      type: "multiple_choice",
      prompt: "\"Geçmiş Zaman\" konusu hangi seviyeye aittir?",
      options: [
        "A2",
        "Belirsiz",
        "Seviye yok",
        "Yanlış seviye",
      ],
      correctIndex: 0,
      explanation: "Bu konu A2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Geçmiş Zaman konusunu pekiştiren quiz. Başarılar.",
};
