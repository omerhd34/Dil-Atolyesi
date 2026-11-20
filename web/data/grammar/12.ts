import type { TopicContent } from "@/data/grammar/types";

export const topicContent12: TopicContent = {
  topicId: "12",
  lesson: {
    parts: [
      {
        id: "12-1",
        title: "Yer Edatları",
        titleEn: "Prepositions of Place",
        paragraphs: [
          "Edatlar yer, zaman veya hareket ilişkisini isimle bağlar. Kartta gördüğün kalıplar arasında **\\In\\**, **\\On\\**, **\\At\\**, **\\Under\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "In",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "On",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "At",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Under",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Behind",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Between",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Next To",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "12-ex-12-1-1",
      subtopicId: "12-1",
      type: "multiple_choice",
      prompt: "\"Yer Edatları\" alt konusu hangi ana konuya aittir?",
      options: [
        "Yer Edatları",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Yer Edatları\" başlığı altındadır.",
    },
    {
      id: "12-ex-12-1-2",
      subtopicId: "12-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Yer Edatları\" için doğru yaklaşım hangisidir?",
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
      id: "12-tf-12-1-1",
      subtopicId: "12-1",
      type: "true_false",
      prompt: "\"Yer Edatları\" başlığı \"Yer Edatları\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Yer Edatları\" konusu altında işlenir.",
    },
    {
      id: "12-fb-12-1-1",
      subtopicId: "12-1",
      type: "fill_blank",
      prompt: "\"Yer Edatları\" konusu _____ seviyesine uygundur.",
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "12-match-1",
      subtopicId: "12-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Prepositions of Place",
          right: "Yer Edatları",
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
      id: "12-cw-1",
      subtopicId: "12-1",
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
      id: "12-listen-01",
      subtopicId: "12-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "In",
      answer: "In",
      acceptedAnswers: ["In", "in"],
    },
  ],
  quiz: [
    {
      id: "quiz-12-12-1-1",
      subtopicId: "12-1",
      type: "multiple_choice",
      prompt: "\"Yer Edatları\" alt konusu hangi ana konuya aittir?",
      options: [
        "Sadece kelime listesi",
        "Hiçbiri",
        "Yer Edatları",
        "Tamamen farklı bir konu",
      ],
      correctIndex: 2,
      explanation: "Bu alt konu \"Yer Edatları\" başlığı altındadır.",
    },
    {
      id: "quiz-12-12-1-2",
      subtopicId: "12-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Yer Edatları\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-12-12-1-3",
      subtopicId: "12-1",
      type: "multiple_choice",
      prompt: "\"Yer Edatları\" çalışırken hangisi doğrudur?",
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
      id: "quiz-12-level",
      subtopicId: "12-1",
      type: "multiple_choice",
      prompt: "\"Yer Edatları\" konusu hangi seviyeye aittir?",
      options: [
        "Yanlış seviye",
        "A1",
        "Seviye yok",
        "Belirsiz",
      ],
      correctIndex: 1,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Yer Edatları konusunu pekiştiren quiz. Başarılar.",
};
