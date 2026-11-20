import type { TopicContent } from "@/data/grammar/types";

export const topicContent16: TopicContent = {
  topicId: "16",
  lesson: {
    parts: [
      {
        id: "16-1",
        title: "Geniş Zaman",
        titleEn: "Present Simple",
        paragraphs: [
          "**Geniş Zaman** konusu A1 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Present Simple\\**, **\\Do\\**, **\\Does\\**, **\\V1\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Present Simple",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Do",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Does",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "V1",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Always",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Usually",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "16-ex-16-1-1",
      subtopicId: "16-1",
      type: "multiple_choice",
      prompt: "\"Geniş Zaman\" alt konusu hangi ana konuya aittir?",
      options: [
        "Geniş Zaman",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Geniş Zaman\" başlığı altındadır.",
    },
    {
      id: "16-ex-16-1-2",
      subtopicId: "16-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Geniş Zaman\" için doğru yaklaşım hangisidir?",
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
      id: "16-tf-16-1-1",
      subtopicId: "16-1",
      type: "true_false",
      prompt: "\"Geniş Zaman\" başlığı \"Geniş Zaman\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Geniş Zaman\" konusu altında işlenir.",
    },
    {
      id: "16-fb-16-1-1",
      subtopicId: "16-1",
      type: "fill_blank",
      prompt: "\"Geniş Zaman\" konusu _____ seviyesine uygundur.",
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "16-match-1",
      subtopicId: "16-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Present Simple",
          right: "Geniş Zaman",
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
      id: "16-cw-1",
      subtopicId: "16-1",
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
      id: "16-listen-01",
      subtopicId: "16-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Present Simple",
      answer: "Present Simple",
      acceptedAnswers: ["Present Simple", "present simple"],
    },
  ],
  quiz: [
    {
      id: "quiz-16-16-1-1",
      subtopicId: "16-1",
      type: "multiple_choice",
      prompt: "\"Geniş Zaman\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
        "Geniş Zaman",
      ],
      correctIndex: 3,
      explanation: "Bu alt konu \"Geniş Zaman\" başlığı altındadır.",
    },
    {
      id: "quiz-16-16-1-2",
      subtopicId: "16-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Geniş Zaman\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-16-16-1-3",
      subtopicId: "16-1",
      type: "multiple_choice",
      prompt: "\"Geniş Zaman\" çalışırken hangisi doğrudur?",
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
      id: "quiz-16-level",
      subtopicId: "16-1",
      type: "multiple_choice",
      prompt: "\"Geniş Zaman\" konusu hangi seviyeye aittir?",
      options: [
        "Seviye yok",
        "A1",
        "Yanlış seviye",
        "Belirsiz",
      ],
      correctIndex: 1,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Geniş Zaman konusunu pekiştiren quiz. Başarılar.",
};
