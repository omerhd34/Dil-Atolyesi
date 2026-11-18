import type { TopicContent } from "@/data/grammar/types";

export const topicContent14: TopicContent = {
  topicId: "14",
  lesson: {
    parts: [
      {
        id: "14-1",
        title: "Emir Cümleleri",
        titleEn: "Imperatives",
        paragraphs: [
          "**Emir Cümleleri** konusu A1 müfredatında temel taşlardan biridir. Kartta gördüğün kalıplar arasında **\\Open The Door\\**, **\\Don't Run\\**, **\\Let's Go\\**, **\\Please\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Open The Door",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Don't Run",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Let's Go",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Please",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "14-ex-14-1-1",
      subtopicId: "14-1",
      type: "multiple_choice",
      prompt: "\"Emir Cümleleri\" alt konusu hangi ana konuya aittir?",
      options: [
        "Emir Cümleleri",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Emir Cümleleri\" başlığı altındadır.",
    },
    {
      id: "14-ex-14-1-2",
      subtopicId: "14-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Emir Cümleleri\" için doğru yaklaşım hangisidir?",
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
      id: "14-tf-14-1-1",
      subtopicId: "14-1",
      type: "true_false",
      prompt: "\"Emir Cümleleri\" başlığı \"Emir Cümleleri\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Emir Cümleleri\" konusu altında işlenir.",
    },
    {
      id: "14-fb-14-1-1",
      subtopicId: "14-1",
      type: "fill_blank",
      prompt: "\"Emir Cümleleri\" konusu _____ seviyesine uygundur.",
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "14-match-1",
      subtopicId: "14-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Imperatives",
          right: "Emir Cümleleri",
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
      id: "14-cw-1",
      subtopicId: "14-1",
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
      id: "quiz-14-14-1-1",
      subtopicId: "14-1",
      type: "multiple_choice",
      prompt: "\"Emir Cümleleri\" alt konusu hangi ana konuya aittir?",
      options: [
        "Sadece kelime listesi",
        "Hiçbiri",
        "Emir Cümleleri",
        "Tamamen farklı bir konu",
      ],
      correctIndex: 2,
      explanation: "Bu alt konu \"Emir Cümleleri\" başlığı altındadır.",
    },
    {
      id: "quiz-14-14-1-2",
      subtopicId: "14-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Emir Cümleleri\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-14-14-1-3",
      subtopicId: "14-1",
      type: "multiple_choice",
      prompt: "\"Emir Cümleleri\" çalışırken hangisi doğrudur?",
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
      id: "quiz-14-level",
      subtopicId: "14-1",
      type: "multiple_choice",
      prompt: "\"Emir Cümleleri\" konusu hangi seviyeye aittir?",
      options: [
        "Belirsiz",
        "Seviye yok",
        "Yanlış seviye",
        "A1",
      ],
      correctIndex: 3,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Emir Cümleleri konusunu pekiştiren quiz. Başarılar.",
};
