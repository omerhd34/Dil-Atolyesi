import type { TopicContent } from "@/data/grammar/types";

export const topicContent204: TopicContent = {
  topicId: "204",
  lesson: {
    parts: [
      {
        id: "204-1",
        title: "İleri Deyimsel Dil Yapıları",
        titleEn: "Advanced Idiomatic Language Structures",
        paragraphs: [
          "İleri düzeyde anlamı milimetrik seçer, karmaşık metinleri güvenle kurarsın. Kartta gördüğün kalıplar arasında **\\Idioms\\**, **\\Fixed Expressions\\** öne çıkar. Olumlu, olumsuz ve soru formlarını C2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Idioms",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Fixed Expressions",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "204-ex-204-1-1",
      subtopicId: "204-1",
      type: "multiple_choice",
      prompt: "\"İleri Deyimsel Dil Yapıları\" alt konusu hangi ana konuya aittir?",
      options: [
        "İleri Deyimsel Dil Yapıları",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"İleri Deyimsel Dil Yapıları\" başlığı altındadır.",
    },
    {
      id: "204-ex-204-1-2",
      subtopicId: "204-1",
      type: "multiple_choice",
      prompt: "C2 seviyesindeki \"İleri Deyimsel Dil Yapıları\" için doğru yaklaşım hangisidir?",
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
      id: "204-tf-204-1-1",
      subtopicId: "204-1",
      type: "true_false",
      prompt: "\"İleri Deyimsel Dil Yapıları\" başlığı \"İleri Deyimsel Dil Yapıları\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"İleri Deyimsel Dil Yapıları\" konusu altında işlenir.",
    },
    {
      id: "204-fb-204-1-1",
      subtopicId: "204-1",
      type: "fill_blank",
      prompt: "\"İleri Deyimsel Dil Yapıları\" konusu _____ seviyesine uygundur.",
      answer: "C2",
      explanation: "Bu konu C2 seviyesindedir.",
    },
    {
      id: "204-match-1",
      subtopicId: "204-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Advanced Idiomatic Language Structures",
          right: "İleri Deyimsel Dil Yapıları",
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
      id: "204-cw-1",
      subtopicId: "204-1",
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
      id: "204-listen-01",
      subtopicId: "204-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Idioms",
      answer: "Idioms",
      acceptedAnswers: ["Idioms", "idioms"],
    },
  ],
  quiz: [
    {
      id: "quiz-204-204-1-1",
      subtopicId: "204-1",
      type: "multiple_choice",
      prompt: "\"İleri Deyimsel Dil Yapıları\" alt konusu hangi ana konuya aittir?",
      options: [
        "İleri Deyimsel Dil Yapıları",
        "Sadece kelime listesi",
        "Hiçbiri",
        "Tamamen farklı bir konu",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"İleri Deyimsel Dil Yapıları\" başlığı altındadır.",
    },
    {
      id: "quiz-204-204-1-2",
      subtopicId: "204-1",
      type: "multiple_choice",
      prompt: "C2 seviyesindeki \"İleri Deyimsel Dil Yapıları\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-204-204-1-3",
      subtopicId: "204-1",
      type: "multiple_choice",
      prompt: "\"İleri Deyimsel Dil Yapıları\" çalışırken hangisi doğrudur?",
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
      id: "quiz-204-level",
      subtopicId: "204-1",
      type: "multiple_choice",
      prompt: "\"İleri Deyimsel Dil Yapıları\" konusu hangi seviyeye aittir?",
      options: [
        "Yanlış seviye",
        "Belirsiz",
        "Seviye yok",
        "C2",
      ],
      correctIndex: 3,
      explanation: "Bu konu C2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "İleri Deyimsel Dil Yapıları konusunu pekiştiren quiz. Başarılar.",
};
