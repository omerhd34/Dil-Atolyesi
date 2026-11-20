import type { TopicContent } from "@/data/grammar/types";

export const topicContent15: TopicContent = {
  topicId: "15",
  lesson: {
    parts: [
      {
        id: "15-1",
        title: "Kipler: Yapabilmek & İzin",
        titleEn: "Modals: To be able to & Permission",
        paragraphs: [
          "**\\Can\\** yetenek ve izin sorar; **\\can't\\** yasak veya imkânsızlık bildirir. **\\Can I ...?\\** ile izin iste, **\\I can swim\\** ile yeteneğini anlat. Kısa cevaplarda **\\Yes, you can\\** veya **\\No, you can't\\** yeterlidir.",
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
            en: "Can / Can't",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "15-ex-15-1-1",
      subtopicId: "15-1",
      type: "multiple_choice",
      prompt: "\"Kipler: Yapabilmek & İzin\" alt konusu hangi ana konuya aittir?",
      options: [
        "Kipler: Yapabilmek & İzin",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Kipler: Yapabilmek & İzin\" başlığı altındadır.",
    },
    {
      id: "15-ex-15-1-2",
      subtopicId: "15-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Kipler: Yapabilmek & İzin\" için doğru yaklaşım hangisidir?",
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
      id: "15-tf-15-1-1",
      subtopicId: "15-1",
      type: "true_false",
      prompt: "\"Kipler: Yapabilmek & İzin\" başlığı \"Kipler: Yapabilmek & İzin\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Kipler: Yapabilmek & İzin\" konusu altında işlenir.",
    },
    {
      id: "15-fb-15-1-1",
      subtopicId: "15-1",
      type: "fill_blank",
      prompt: "\"Kipler: Yapabilmek & İzin\" konusu _____ seviyesine uygundur.",
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "15-match-1",
      subtopicId: "15-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Modals: To be able to & Permission",
          right: "Kipler: Yapabilmek & İzin",
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
      id: "15-cw-1",
      subtopicId: "15-1",
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
      id: "15-listen-01",
      subtopicId: "15-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Can / Can",
      answer: "Can / Can",
      acceptedAnswers: ["Can / Can", "can / can"],
    },
  ],
  quiz: [
    {
      id: "quiz-15-15-1-1",
      subtopicId: "15-1",
      type: "multiple_choice",
      prompt: "\"Kipler: Yapabilmek & İzin\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tamamen farklı bir konu",
        "Hiçbiri",
        "Kipler: Yapabilmek & İzin",
        "Sadece kelime listesi",
      ],
      correctIndex: 2,
      explanation: "Bu alt konu \"Kipler: Yapabilmek & İzin\" başlığı altındadır.",
    },
    {
      id: "quiz-15-15-1-2",
      subtopicId: "15-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Kipler: Yapabilmek & İzin\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-15-15-1-3",
      subtopicId: "15-1",
      type: "multiple_choice",
      prompt: "\"Kipler: Yapabilmek & İzin\" çalışırken hangisi doğrudur?",
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
      id: "quiz-15-level",
      subtopicId: "15-1",
      type: "multiple_choice",
      prompt: "\"Kipler: Yapabilmek & İzin\" konusu hangi seviyeye aittir?",
      options: [
        "Belirsiz",
        "Yanlış seviye",
        "A1",
        "Seviye yok",
      ],
      correctIndex: 2,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Kipler: Yapabilmek & İzin konusunu pekiştiren quiz. Başarılar.",
};
