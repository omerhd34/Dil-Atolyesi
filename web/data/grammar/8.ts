import type { TopicContent } from "@/data/grammar/types";

export const topicContent8: TopicContent = {
  topicId: "8",
  lesson: {
    parts: [
      {
        id: "8-1",
        title: "Sahiplik Bildirme",
        titleEn: "Possession",
        paragraphs: [
          "**\\have got\\** ve **\\has got\\** İngiliz İngilizcesinde sık duyulan sahiplik kalıplarıdır. **\\I, we, they\\** ile **\\have got\\**; **\\he, she, it\\** ile **\\has got\\** kuralını öğreneceksin. Olumsuz **\\haven't got\\**, soru ve kısa cevaplar da aynı derste. Aile, eşya ve fiziksel özellik anlatımında doğrudan kullanırsın.",
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
            en: "Have got / Has got",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "8-ex-8-1-1",
      subtopicId: "8-1",
      type: "multiple_choice",
      prompt: "\"Sahiplik Bildirme\" alt konusu hangi ana konuya aittir?",
      options: [
        "Sahiplik Bildirme",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Sahiplik Bildirme\" başlığı altındadır.",
    },
    {
      id: "8-ex-8-1-2",
      subtopicId: "8-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Sahiplik Bildirme\" için doğru yaklaşım hangisidir?",
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
      id: "8-tf-8-1-1",
      subtopicId: "8-1",
      type: "true_false",
      prompt: "\"Sahiplik Bildirme\" başlığı \"Sahiplik Bildirme\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Sahiplik Bildirme\" konusu altında işlenir.",
    },
    {
      id: "8-fb-8-1-1",
      subtopicId: "8-1",
      type: "fill_blank",
      prompt: "\"Sahiplik Bildirme\" konusu _____ seviyesine uygundur.",
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "8-match-1",
      subtopicId: "8-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Possession",
          right: "Sahiplik Bildirme",
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
      id: "8-cw-1",
      subtopicId: "8-1",
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
      id: "quiz-8-8-1-1",
      subtopicId: "8-1",
      type: "multiple_choice",
      prompt: "\"Sahiplik Bildirme\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
        "Sahiplik Bildirme",
      ],
      correctIndex: 3,
      explanation: "Bu alt konu \"Sahiplik Bildirme\" başlığı altındadır.",
    },
    {
      id: "quiz-8-8-1-2",
      subtopicId: "8-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Sahiplik Bildirme\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-8-8-1-3",
      subtopicId: "8-1",
      type: "multiple_choice",
      prompt: "\"Sahiplik Bildirme\" çalışırken hangisi doğrudur?",
      options: [
        "Anlamadığın örneği işaretleyip tekrar etmek",
        "Konuyu tamamen atlamak",
        "Sadece dinleyip bırakmak",
        "Hiç örnek okumamak",
      ],
      correctIndex: 0,
      explanation: "Tekrar ve işaretleme öğrenmeyi güçlendirir.",
    },
    {
      id: "quiz-8-level",
      subtopicId: "8-1",
      type: "multiple_choice",
      prompt: "\"Sahiplik Bildirme\" konusu hangi seviyeye aittir?",
      options: [
        "A1",
        "Yanlış seviye",
        "Belirsiz",
        "Seviye yok",
      ],
      correctIndex: 0,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Sahiplik Bildirme konusunu pekiştiren quiz. Başarılar.",
};
