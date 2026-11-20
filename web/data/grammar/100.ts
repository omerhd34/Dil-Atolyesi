import type { TopicContent } from "@/data/grammar/types";

export const topicContent100: TopicContent = {
  topicId: "100",
  lesson: {
    parts: [
      {
        id: "100-1",
        title: "Soru Kelimesi + Infinitive",
        titleEn: "Question Word + Infinitive",
        paragraphs: [
          "Fiilden türeyen **\\-ing\\** ve **\\to\\** kalıpları fiil yan yana getirir. Kartta gördüğün kalıplar arasında **\\What To Do\\**, **\\How To Use\\**, **\\Where To Go\\** öne çıkar. Olumlu, olumsuz ve soru formlarını B1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "What To Do",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "How To Use",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Where To Go",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "100-ex-100-1-1",
      subtopicId: "100-1",
      type: "multiple_choice",
      prompt: "\"Soru Kelimesi + Infinitive\" alt konusu hangi ana konuya aittir?",
      options: [
        "Soru Kelimesi + Infinitive",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Soru Kelimesi + Infinitive\" başlığı altındadır.",
    },
    {
      id: "100-ex-100-1-2",
      subtopicId: "100-1",
      type: "multiple_choice",
      prompt: "B1 seviyesindeki \"Soru Kelimesi + Infinitive\" için doğru yaklaşım hangisidir?",
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
      id: "100-tf-100-1-1",
      subtopicId: "100-1",
      type: "true_false",
      prompt: "\"Soru Kelimesi + Infinitive\" başlığı \"Soru Kelimesi + Infinitive\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Soru Kelimesi + Infinitive\" konusu altında işlenir.",
    },
    {
      id: "100-fb-100-1-1",
      subtopicId: "100-1",
      type: "fill_blank",
      prompt: "\"Soru Kelimesi + Infinitive\" konusu _____ seviyesine uygundur.",
      answer: "B1",
      explanation: "Bu konu B1 seviyesindedir.",
    },
    {
      id: "100-match-1",
      subtopicId: "100-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Question Word + Infinitive",
          right: "Soru Kelimesi + Infinitive",
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
      id: "100-cw-1",
      subtopicId: "100-1",
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
      id: "100-listen-01",
      subtopicId: "100-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "What To Do",
      answer: "What To Do",
      acceptedAnswers: ["What To Do", "what to do"],
    },
  ],
  quiz: [
    {
      id: "quiz-100-100-1-1",
      subtopicId: "100-1",
      type: "multiple_choice",
      prompt: "\"Soru Kelimesi + Infinitive\" alt konusu hangi ana konuya aittir?",
      options: [
        "Soru Kelimesi + Infinitive",
        "Hiçbiri",
        "Sadece kelime listesi",
        "Tamamen farklı bir konu",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Soru Kelimesi + Infinitive\" başlığı altındadır.",
    },
    {
      id: "quiz-100-100-1-2",
      subtopicId: "100-1",
      type: "multiple_choice",
      prompt: "B1 seviyesindeki \"Soru Kelimesi + Infinitive\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-100-100-1-3",
      subtopicId: "100-1",
      type: "multiple_choice",
      prompt: "\"Soru Kelimesi + Infinitive\" çalışırken hangisi doğrudur?",
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
      id: "quiz-100-level",
      subtopicId: "100-1",
      type: "multiple_choice",
      prompt: "\"Soru Kelimesi + Infinitive\" konusu hangi seviyeye aittir?",
      options: [
        "Belirsiz",
        "Seviye yok",
        "B1",
        "Yanlış seviye",
      ],
      correctIndex: 2,
      explanation: "Bu konu B1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Soru Kelimesi + Infinitive konusunu pekiştiren quiz. Başarılar.",
};
