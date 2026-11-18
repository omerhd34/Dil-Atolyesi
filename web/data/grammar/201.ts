import type { TopicContent } from "@/data/grammar/types";

export const topicContent201: TopicContent = {
  topicId: "201",
  lesson: {
    parts: [
      {
        id: "201-1",
        title: "İleri Dil Düzeyi ve Üslup",
        titleEn: "Advanced Register and Style",
        paragraphs: [
          "Bu bölüm metnin akışını, üslubunu ve bağlama uygun dil seçimini güçlendirir. Kartta gördüğün kalıplar arasında **\\Register\\**, **\\Style\\**, **\\Formal\\**, **\\Informal\\** öne çıkar. Olumlu, olumsuz ve soru formlarını C2 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
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
            en: "Register",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Style",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Formal",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Informal",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "201-ex-201-1-1",
      subtopicId: "201-1",
      type: "multiple_choice",
      prompt: "\"İleri Dil Düzeyi ve Üslup\" alt konusu hangi ana konuya aittir?",
      options: [
        "İleri Dil Düzeyi ve Üslup",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"İleri Dil Düzeyi ve Üslup\" başlığı altındadır.",
    },
    {
      id: "201-ex-201-1-2",
      subtopicId: "201-1",
      type: "multiple_choice",
      prompt: "C2 seviyesindeki \"İleri Dil Düzeyi ve Üslup\" için doğru yaklaşım hangisidir?",
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
      id: "201-tf-201-1-1",
      subtopicId: "201-1",
      type: "true_false",
      prompt: "\"İleri Dil Düzeyi ve Üslup\" başlığı \"İleri Dil Düzeyi ve Üslup\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"İleri Dil Düzeyi ve Üslup\" konusu altında işlenir.",
    },
    {
      id: "201-fb-201-1-1",
      subtopicId: "201-1",
      type: "fill_blank",
      prompt: "\"İleri Dil Düzeyi ve Üslup\" konusu _____ seviyesine uygundur.",
      answer: "C2",
      explanation: "Bu konu C2 seviyesindedir.",
    },
    {
      id: "201-match-1",
      subtopicId: "201-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Advanced Register and Style",
          right: "İleri Dil Düzeyi ve Üslup",
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
      id: "201-cw-1",
      subtopicId: "201-1",
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
      id: "quiz-201-201-1-1",
      subtopicId: "201-1",
      type: "multiple_choice",
      prompt: "\"İleri Dil Düzeyi ve Üslup\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
        "İleri Dil Düzeyi ve Üslup",
      ],
      correctIndex: 3,
      explanation: "Bu alt konu \"İleri Dil Düzeyi ve Üslup\" başlığı altındadır.",
    },
    {
      id: "quiz-201-201-1-2",
      subtopicId: "201-1",
      type: "multiple_choice",
      prompt: "C2 seviyesindeki \"İleri Dil Düzeyi ve Üslup\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-201-201-1-3",
      subtopicId: "201-1",
      type: "multiple_choice",
      prompt: "\"İleri Dil Düzeyi ve Üslup\" çalışırken hangisi doğrudur?",
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
      id: "quiz-201-level",
      subtopicId: "201-1",
      type: "multiple_choice",
      prompt: "\"İleri Dil Düzeyi ve Üslup\" konusu hangi seviyeye aittir?",
      options: [
        "C2",
        "Yanlış seviye",
        "Belirsiz",
        "Seviye yok",
      ],
      correctIndex: 0,
      explanation: "Bu konu C2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "İleri Dil Düzeyi ve Üslup konusunu pekiştiren quiz. Başarılar.",
};
