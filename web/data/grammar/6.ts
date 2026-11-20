import type { TopicContent } from "@/data/grammar/types";

export const topicContent6: TopicContent = {
  topicId: "6",
  lesson: {
    parts: [
      {
        id: "6-1",
        title: "Tanımlıklar",
        titleEn: "Articles",
        paragraphs: [
          "İngilizcede **\\a\\**, **\\an\\** ve **\\the\\** en sık kullanılan tanımlıklardır. **\\A\\** ve **\\an\\** belirsiz tekil isimlerde, konu ilk kez söz konusu ediliyorsa kullanılır. **\\The\\** dinleyicinin veya okuyucunun bildiği, ya da bağlamda netleşmiş isimlerin önünde yer alır. **\\An\\**, ünlü sesle başlayan kelimelerde **\\a\\** yerine tercih edilir. Günlük tanıtım ve liste cümlelerinde doğru tanımlığı seçmeyi öğrenirsin.",
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
            en: "A",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "An",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "The",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "6-ex-6-1-1",
      subtopicId: "6-1",
      type: "multiple_choice",
      prompt: "\"Tanımlıklar\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tanımlıklar",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Tanımlıklar\" başlığı altındadır.",
    },
    {
      id: "6-ex-6-1-2",
      subtopicId: "6-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Tanımlıklar\" için doğru yaklaşım hangisidir?",
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
      id: "6-tf-6-1-1",
      subtopicId: "6-1",
      type: "true_false",
      prompt: "\"Tanımlıklar\" başlığı \"Tanımlıklar\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Tanımlıklar\" konusu altında işlenir.",
    },
    {
      id: "6-fb-6-1-1",
      subtopicId: "6-1",
      type: "fill_blank",
      prompt: "\"Tanımlıklar\" konusu _____ seviyesine uygundur.",
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "6-match-1",
      subtopicId: "6-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Articles",
          right: "Tanımlıklar",
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
      id: "6-cw-1",
      subtopicId: "6-1",
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
      id: "6-listen-01",
      subtopicId: "6-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "An",
      answer: "An",
      acceptedAnswers: ["An", "an"],
    },
  ],
  quiz: [
    {
      id: "quiz-6-6-1-1",
      subtopicId: "6-1",
      type: "multiple_choice",
      prompt: "\"Tanımlıklar\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tanımlıklar",
        "Hiçbiri",
        "Sadece kelime listesi",
        "Tamamen farklı bir konu",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Tanımlıklar\" başlığı altındadır.",
    },
    {
      id: "quiz-6-6-1-2",
      subtopicId: "6-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Tanımlıklar\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-6-6-1-3",
      subtopicId: "6-1",
      type: "multiple_choice",
      prompt: "\"Tanımlıklar\" çalışırken hangisi doğrudur?",
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
      id: "quiz-6-level",
      subtopicId: "6-1",
      type: "multiple_choice",
      prompt: "\"Tanımlıklar\" konusu hangi seviyeye aittir?",
      options: [
        "A1",
        "Seviye yok",
        "Belirsiz",
        "Yanlış seviye",
      ],
      correctIndex: 0,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Tanımlıklar konusunu pekiştiren quiz. Başarılar.",
};
