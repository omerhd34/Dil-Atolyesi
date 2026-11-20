import type { TopicContent } from "@/data/grammar/types";

export const topicContent101: TopicContent = {
  topicId: "101",
  lesson: {
    parts: [
      {
        id: "101-1",
        title: "-ed ve -ing Sıfatları",
        titleEn: "Participle Adjectives",
        paragraphs: [
          "Participle yapıları yan cümleleri kısaltır ve metni sıkılaştırır. Kartta gördüğün kalıplar arasında **\\-ed Adjectives\\**, **\\-ing Adjectives\\**, **\\Bored\\**, **\\Boring\\** öne çıkar. Olumlu, olumsuz ve soru formlarını B1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "-ed Adjectives",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "-ing Adjectives",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Bored",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Boring",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "101-ex-101-1-1",
      subtopicId: "101-1",
      type: "multiple_choice",
      prompt: "\"-ed ve -ing Sıfatları\" alt konusu hangi ana konuya aittir?",
      options: [
        "-ed ve -ing Sıfatları",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"-ed ve -ing Sıfatları\" başlığı altındadır.",
    },
    {
      id: "101-ex-101-1-2",
      subtopicId: "101-1",
      type: "multiple_choice",
      prompt: "B1 seviyesindeki \"-ed ve -ing Sıfatları\" için doğru yaklaşım hangisidir?",
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
      id: "101-tf-101-1-1",
      subtopicId: "101-1",
      type: "true_false",
      prompt: "\"-ed ve -ing Sıfatları\" başlığı \"-ed ve -ing Sıfatları\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"-ed ve -ing Sıfatları\" konusu altında işlenir.",
    },
    {
      id: "101-fb-101-1-1",
      subtopicId: "101-1",
      type: "fill_blank",
      prompt: "\"-ed ve -ing Sıfatları\" konusu _____ seviyesine uygundur.",
      answer: "B1",
      explanation: "Bu konu B1 seviyesindedir.",
    },
    {
      id: "101-match-1",
      subtopicId: "101-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Participle Adjectives",
          right: "-ed ve -ing Sıfatları",
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
      id: "101-cw-1",
      subtopicId: "101-1",
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
      id: "101-listen-01",
      subtopicId: "101-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "-ed Adjectives",
      answer: "-ed Adjectives",
      acceptedAnswers: ["-ed Adjectives", "-ed adjectives"],
    },
  ],
  quiz: [
    {
      id: "quiz-101-101-1-1",
      subtopicId: "101-1",
      type: "multiple_choice",
      prompt: "\"-ed ve -ing Sıfatları\" alt konusu hangi ana konuya aittir?",
      options: [
        "Sadece kelime listesi",
        "Hiçbiri",
        "Tamamen farklı bir konu",
        "-ed ve -ing Sıfatları",
      ],
      correctIndex: 3,
      explanation: "Bu alt konu \"-ed ve -ing Sıfatları\" başlığı altındadır.",
    },
    {
      id: "quiz-101-101-1-2",
      subtopicId: "101-1",
      type: "multiple_choice",
      prompt: "B1 seviyesindeki \"-ed ve -ing Sıfatları\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-101-101-1-3",
      subtopicId: "101-1",
      type: "multiple_choice",
      prompt: "\"-ed ve -ing Sıfatları\" çalışırken hangisi doğrudur?",
      options: [
        "Konuyu tamamen atlamak",
        "Sadece dinleyip bırakmak",
        "Anlamadığın örneği işaretleyip tekrar etmek",
        "Hiç örnek okumamak",
      ],
      correctIndex: 2,
      explanation: "Tekrar ve işaretleme öğrenmeyi güçlendirir.",
    },
    {
      id: "quiz-101-level",
      subtopicId: "101-1",
      type: "multiple_choice",
      prompt: "\"-ed ve -ing Sıfatları\" konusu hangi seviyeye aittir?",
      options: [
        "Seviye yok",
        "B1",
        "Yanlış seviye",
        "Belirsiz",
      ],
      correctIndex: 1,
      explanation: "Bu konu B1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "-ed ve -ing Sıfatları konusunu pekiştiren quiz. Başarılar.",
};
