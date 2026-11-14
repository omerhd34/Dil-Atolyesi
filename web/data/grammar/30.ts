import type { TopicContent } from "@/data/grammar/types";

export const topicContent30: TopicContent = {
  topicId: "30",
  lesson: {
    intro: "\"Derecelendirme ve Karşılaştırma Yapıları\" konusu B1 seviyesine uygundur. Aşağıdaki alt başlıklarda temel kuralları, örnekleri ve kısa notları bulursun. İçerik geçicidir; ileride zenginleştirilebilir.",
    sections: [
      {
        subtopicId: "30-1",
        title: "Derecelendirme ve Karşılaştırma Yapıları",
        titleEn: "This laptop isn't fast enough. It's as expensive as yours.",
        paragraphs: [
          "\"Derecelendirme ve Karşılaştırma Yapıları\" başlığında Derecelendirme ve Karşılaştırma Yapıları konusunun önemli noktalarını adım adım görürsün.",
          "Bu bölümde kalıpları tanı, örnekleri sesli tekrarla ve ardından alıştırmalara geç. B1 seviyesinde düzenli tekrar yeterlidir.",
          "Kısa not: Anlamadığın bir örneği işaretleyip alıştırmada yeniden dene.",
        ],
        examples: [
          {
            en: "I understand this topic.",
            tr: "Bu konuyu anlıyorum.",
            note: "Derecelendirme ve Karşılaştırma Yapıları — örnek 1",
          },
          {
            en: "Topic focus: Derecelendirme ve Karşılaştırma Yapıları",
            tr: "Konu odağı: Derecelendirme ve Karşılaştırma Yapıları",
          },
          {
            en: "Subtopic: Derecelendirme ve Karşılaştırma Yapıları",
            tr: "Alt konu: Derecelendirme ve Karşılaştırma Yapıları",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "30-ex-30-1-1",
      subtopicId: "30-1",
      type: "multiple_choice",
      prompt: "\"Derecelendirme ve Karşılaştırma Yapıları\" alt konusu hangi ana konuya aittir?",
      options: [
        "Derecelendirme ve Karşılaştırma Yapıları",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Derecelendirme ve Karşılaştırma Yapıları\" başlığı altındadır.",
    },
    {
      id: "30-ex-30-1-2",
      subtopicId: "30-1",
      type: "multiple_choice",
      prompt: "B1 seviyesindeki \"Derecelendirme ve Karşılaştırma Yapıları\" için doğru yaklaşım hangisidir?",
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
      id: "30-tf-30-1-1",
      subtopicId: "30-1",
      type: "true_false",
      prompt: "\"Derecelendirme ve Karşılaştırma Yapıları\" başlığı \"Derecelendirme ve Karşılaştırma Yapıları\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Derecelendirme ve Karşılaştırma Yapıları\" konusu altında işlenir.",
    },
    {
      id: "30-fb-30-1-1",
      subtopicId: "30-1",
      type: "fill_blank",
      prompt: "\"Derecelendirme ve Karşılaştırma Yapıları\" konusu _____ seviyesine uygundur.",
      answer: "B1",
      explanation: "Bu konu B1 seviyesindedir.",
    },
    {
      id: "30-match-1",
      subtopicId: "30-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "As...as, Too & Enough",
          right: "Derecelendirme ve Karşılaştırma Yapıları",
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
      id: "30-cw-1",
      subtopicId: "30-1",
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
      id: "quiz-30-30-1-1",
      subtopicId: "30-1",
      type: "multiple_choice",
      prompt: "\"Derecelendirme ve Karşılaştırma Yapıları\" alt konusu hangi ana konuya aittir?",
      options: [
        "Tamamen farklı bir konu",
        "Derecelendirme ve Karşılaştırma Yapıları",
        "Hiçbiri",
        "Sadece kelime listesi",
      ],
      correctIndex: 1,
      explanation: "Bu alt konu \"Derecelendirme ve Karşılaştırma Yapıları\" başlığı altındadır.",
    },
    {
      id: "quiz-30-30-1-2",
      subtopicId: "30-1",
      type: "multiple_choice",
      prompt: "B1 seviyesindeki \"Derecelendirme ve Karşılaştırma Yapıları\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-30-30-1-3",
      subtopicId: "30-1",
      type: "multiple_choice",
      prompt: "\"Derecelendirme ve Karşılaştırma Yapıları\" çalışırken hangisi doğrudur?",
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
      id: "quiz-30-level",
      subtopicId: "30-1",
      type: "multiple_choice",
      prompt: "\"Derecelendirme ve Karşılaştırma Yapıları\" konusu hangi seviyeye aittir?",
      options: [
        "B1",
        "Belirsiz",
        "Yanlış seviye",
        "Seviye yok",
      ],
      correctIndex: 0,
      explanation: "Bu konu B1 seviyesindedir.",
    },
  ],
  viewMinutes: 5,
};
