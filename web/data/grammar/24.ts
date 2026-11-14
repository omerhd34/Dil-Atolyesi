import type { TopicContent } from "@/data/grammar/types";

export const topicContent24: TopicContent = {
  topicId: "24",
  lesson: {
    intro: "\"Belgisiz Zamirler\" konusu A2 seviyesine uygundur. Aşağıdaki alt başlıklarda temel kuralları, örnekleri ve kısa notları bulursun. İçerik geçicidir; ileride zenginleştirilebilir.",
    sections: [
      {
        subtopicId: "24-1",
        title: "Belgisiz Zamirler",
        titleEn: "Someone is at the door. I didn't buy anything.",
        paragraphs: [
          "\"Belgisiz Zamirler\" başlığında Belgisiz Zamirler konusunun önemli noktalarını adım adım görürsün.",
          "Bu bölümde kalıpları tanı, örnekleri sesli tekrarla ve ardından alıştırmalara geç. A2 seviyesinde düzenli tekrar yeterlidir.",
          "Kısa not: Anlamadığın bir örneği işaretleyip alıştırmada yeniden dene.",
        ],
        examples: [
          {
            en: "I understand this topic.",
            tr: "Bu konuyu anlıyorum.",
            note: "Belgisiz Zamirler — örnek 1",
          },
          {
            en: "Topic focus: Belgisiz Zamirler",
            tr: "Konu odağı: Belgisiz Zamirler",
          },
          {
            en: "Subtopic: Belgisiz Zamirler",
            tr: "Alt konu: Belgisiz Zamirler",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "24-ex-24-1-1",
      subtopicId: "24-1",
      type: "multiple_choice",
      prompt: "\"Belgisiz Zamirler\" alt konusu hangi ana konuya aittir?",
      options: [
        "Belgisiz Zamirler",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Belgisiz Zamirler\" başlığı altındadır.",
    },
    {
      id: "24-ex-24-1-2",
      subtopicId: "24-1",
      type: "multiple_choice",
      prompt: "A2 seviyesindeki \"Belgisiz Zamirler\" için doğru yaklaşım hangisidir?",
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
      id: "24-tf-24-1-1",
      subtopicId: "24-1",
      type: "true_false",
      prompt: "\"Belgisiz Zamirler\" başlığı \"Belgisiz Zamirler\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Belgisiz Zamirler\" konusu altında işlenir.",
    },
    {
      id: "24-fb-24-1-1",
      subtopicId: "24-1",
      type: "fill_blank",
      prompt: "\"Belgisiz Zamirler\" konusu _____ seviyesine uygundur.",
      answer: "A2",
      explanation: "Bu konu A2 seviyesindedir.",
    },
    {
      id: "24-match-1",
      subtopicId: "24-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Indefinite Pronouns (someone, anything, nowhere)",
          right: "Belgisiz Zamirler",
        },
        {
          left: "A2 level",
          right: "A2 seviyesi",
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
      id: "24-cw-1",
      subtopicId: "24-1",
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
      id: "quiz-24-24-1-1",
      subtopicId: "24-1",
      type: "multiple_choice",
      prompt: "\"Belgisiz Zamirler\" alt konusu hangi ana konuya aittir?",
      options: [
        "Sadece kelime listesi",
        "Hiçbiri",
        "Tamamen farklı bir konu",
        "Belgisiz Zamirler",
      ],
      correctIndex: 3,
      explanation: "Bu alt konu \"Belgisiz Zamirler\" başlığı altındadır.",
    },
    {
      id: "quiz-24-24-1-2",
      subtopicId: "24-1",
      type: "multiple_choice",
      prompt: "A2 seviyesindeki \"Belgisiz Zamirler\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-24-24-1-3",
      subtopicId: "24-1",
      type: "multiple_choice",
      prompt: "\"Belgisiz Zamirler\" çalışırken hangisi doğrudur?",
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
      id: "quiz-24-level",
      subtopicId: "24-1",
      type: "multiple_choice",
      prompt: "\"Belgisiz Zamirler\" konusu hangi seviyeye aittir?",
      options: [
        "Belirsiz",
        "Seviye yok",
        "Yanlış seviye",
        "A2",
      ],
      correctIndex: 3,
      explanation: "Bu konu A2 seviyesindedir.",
    },
  ],
  viewMinutes: 5,
};
