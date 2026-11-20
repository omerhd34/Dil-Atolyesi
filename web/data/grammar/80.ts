import type { TopicContent } from "@/data/grammar/types";

export const topicContent80: TopicContent = {
  topicId: "80",
  lesson: {
    parts: [
      {
        id: "80-1",
        title: "Edilgen Yapı",
        titleEn: "Passive Voice",
        paragraphs: [
          "Edilgen yapıda özne eylemi yapan değil, eylemden etkilenendir. Kartta gördüğün kalıplar arasında **\\Present Passive\\**, **\\Past Passive\\**, **\\Future Passive\\**, **\\Be + V3\\** öne çıkar. Olumlu, olumsuz ve soru formlarını B1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Present Passive",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Past Passive",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Future Passive",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Be + V3",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "80-ex-80-1-1",
      subtopicId: "80-1",
      type: "multiple_choice",
      prompt: "\"Edilgen Yapı\" alt konusu hangi ana konuya aittir?",
      options: [
        "Edilgen Yapı",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Edilgen Yapı\" başlığı altındadır.",
    },
    {
      id: "80-ex-80-1-2",
      subtopicId: "80-1",
      type: "multiple_choice",
      prompt: "B1 seviyesindeki \"Edilgen Yapı\" için doğru yaklaşım hangisidir?",
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
      id: "80-tf-80-1-1",
      subtopicId: "80-1",
      type: "true_false",
      prompt: "\"Edilgen Yapı\" başlığı \"Edilgen Yapı\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Edilgen Yapı\" konusu altında işlenir.",
    },
    {
      id: "80-fb-80-1-1",
      subtopicId: "80-1",
      type: "fill_blank",
      prompt: "\"Edilgen Yapı\" konusu _____ seviyesine uygundur.",
      answer: "B1",
      explanation: "Bu konu B1 seviyesindedir.",
    },
    {
      id: "80-match-1",
      subtopicId: "80-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Passive Voice",
          right: "Edilgen Yapı",
        },
        {
          left: "B1 level",
          right: "B1 seviyesi",
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
      id: "80-cw-1",
      subtopicId: "80-1",
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
      id: "80-listen-01",
      subtopicId: "80-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Present Passive",
      answer: "Present Passive",
      acceptedAnswers: ["Present Passive", "present passive"],
    },
  ],
  quiz: [
    {
      id: "quiz-80-80-1-1",
      subtopicId: "80-1",
      type: "multiple_choice",
      prompt: "\"Edilgen Yapı\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tamamen farklı bir konu",
        "Hiçbiri",
        "Sadece kelime listesi",
        "Edilgen Yapı",
      ],
      correctIndex: 3,
      explanation: "Bu alt konu \"Edilgen Yapı\" başlığı altındadır.",
    },
    {
      id: "quiz-80-80-1-2",
      subtopicId: "80-1",
      type: "multiple_choice",
      prompt: "B1 seviyesindeki \"Edilgen Yapı\" için doğru yaklaşım hangisidir?",
      options: [
        "Sadece çeviri yapmadan ezberlemek",
        "Konuyu tamamen atlamak",
        "Örnekleri okuyup kısa pratik yapmak",
        "Hiç alıştırma çözmemek",
      ],
      correctIndex: 2,
      explanation: "Örnek + kısa pratik, kalıcı öğrenmeye yardımcı olur.",
    },
    {
      id: "quiz-80-80-1-3",
      subtopicId: "80-1",
      type: "multiple_choice",
      prompt: "\"Edilgen Yapı\" çalışırken hangisi doğrudur?",
      options: [
        "Konuyu tamamen atlamak",
        "Hiç örnek okumamak",
        "Anlamadığın örneği işaretleyip tekrar etmek",
        "Sadece dinleyip bırakmak",
      ],
      correctIndex: 2,
      explanation: "Tekrar ve işaretleme öğrenmeyi güçlendirir.",
    },
    {
      id: "quiz-80-level",
      subtopicId: "80-1",
      type: "multiple_choice",
      prompt: "\"Edilgen Yapı\" konusu hangi seviyeye aittir?",
      options: [
        "Belirsiz",
        "Seviye yok",
        "Yanlış seviye",
        "B1",
      ],
      correctIndex: 3,
      explanation: "Bu konu B1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Edilgen Yapı konusunu pekiştiren quiz. Başarılar.",
};
