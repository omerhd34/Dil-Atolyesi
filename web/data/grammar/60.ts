import type { TopicContent } from "@/data/grammar/types";

export const topicContent60: TopicContent = {
  topicId: "60",
  lesson: {
    parts: [
      {
        id: "60-1",
        title: "Dolaylı Sorular",
        titleEn: "Indirect Questions (Could you tell me where...)",
        paragraphs: [
          "Soru sorarken daha kibar ve resmi bir ton kullanmaya hazır mısın? Bu derste **\\Could you tell me...\\**, **\\Do you know...\\** ve **\\I wonder...\\** gibi girişlerle başlayan **\\Indirect Questions\\** yapısını keşfedeceksin. Soru kelimesinden sonra **do/does/did** kullanmadan özne-fiil sırasına geçişi ve evet-hayır sorularında **\\if / whether\\** kullanımını inceleyeceksin. Yabancılarla ve resmi ortamlarda sorularını çok daha nazik biçimde sorabileceksin.",
        ],
        examplesTitle: "Örnek cümleler",
        examplesLayout: "columns",
        examplesPerRow: 2,
        exampleHeaders: {
          en: "İngilizce",
          tr: "Türkçe",
        },
        examples: [
          {
            en: "Could you tell me where the station is? Do you know what time it starts?.",
            tr: "Bağlamda incele.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "60-ex-60-1-1",
      subtopicId: "60-1",
      type: "multiple_choice",
      prompt: '"Dolaylı Sorular" alt konusu hangi ana konuya aittir?',
      options: [
        "Dolaylı Sorular",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: 'Bu alt konu "Dolaylı Sorular" başlığı altındadır.',
    },
    {
      id: "60-ex-60-1-2",
      subtopicId: "60-1",
      type: "multiple_choice",
      prompt:
        'B1 seviyesindeki "Dolaylı Sorular" için doğru yaklaşım hangisidir?',
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
      id: "60-tf-60-1-1",
      subtopicId: "60-1",
      type: "true_false",
      prompt:
        '"Dolaylı Sorular" başlığı "Dolaylı Sorular" konusunun bir parçasıdır.',
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation: 'Bu alt başlık "Dolaylı Sorular" konusu altında işlenir.',
    },
    {
      id: "60-fb-60-1-1",
      subtopicId: "60-1",
      type: "fill_blank",
      prompt: '"Dolaylı Sorular" konusu _____ seviyesine uygundur.',
      answer: "B1",
      explanation: "Bu konu B1 seviyesindedir.",
    },
    {
      id: "60-match-1",
      subtopicId: "60-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Indirect Questions (Could you tell me where...)",
          right: "Dolaylı Sorular",
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
      id: "60-cw-1",
      subtopicId: "60-1",
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
      id: "quiz-60-60-1-1",
      subtopicId: "60-1",
      type: "multiple_choice",
      prompt: '"Dolaylı Sorular" alt konusu hangi ana konuya aittir?',
      options: [
        "Dolaylı Sorular",
        "Sadece kelime listesi",
        "Hiçbiri",
        "Tamamen farklı bir konu",
      ],
      correctIndex: 0,
      explanation: 'Bu alt konu "Dolaylı Sorular" başlığı altındadır.',
    },
    {
      id: "quiz-60-60-1-2",
      subtopicId: "60-1",
      type: "multiple_choice",
      prompt:
        'B1 seviyesindeki "Dolaylı Sorular" için doğru yaklaşım hangisidir?',
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
      id: "quiz-60-60-1-3",
      subtopicId: "60-1",
      type: "multiple_choice",
      prompt: '"Dolaylı Sorular" çalışırken hangisi doğrudur?',
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
      id: "quiz-60-level",
      subtopicId: "60-1",
      type: "multiple_choice",
      prompt: '"Dolaylı Sorular" konusu hangi seviyeye aittir?',
      options: ["Yanlış seviye", "Seviye yok", "B1", "Belirsiz"],
      correctIndex: 2,
      explanation: "Bu konu B1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Dolaylı Sorular konusunu pekiştiren quiz. Başarılar.",
};
