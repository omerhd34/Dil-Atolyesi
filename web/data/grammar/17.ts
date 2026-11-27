import type { TopicContent } from "@/data/grammar/types";

export const topicContent17: TopicContent = {
  topicId: "17",
  lesson: {
    parts: [
      {
        id: "17-1",
        title: "Sıklık Zarfları",
        titleEn: "Adverbs of Frequency",
        paragraphs: [
          "**Sıklık Zarfları** konusu A1 müfredatında temel taşlardan biridir. Aşağıdaki piramit **\\Always\\** ile **\\Never\\** arasındaki sırayı yüzdeyle özetler; üstteki katmanlar daha yüksek sıklığı anlatır. Kartta gördüğün kalıplar arasında **\\Always\\**, **\\Usually\\**, **\\Often\\**, **\\Sometimes\\** öne çıkar. Olumlu, olumsuz ve soru formlarını A1 düzeyinde kısa alıştırmalarla pekiştirmeyi hedefle. Günlük konuşma ve okuma metinlerinde bu kalıpları tanıyıp doğru kullanmaya odaklan.",
        ],
        visual: "adverbsOfFrequency",
        examplesTitle: "İşlenecek kalıplar",
        examplesLayout: "columns",
        examplesPerRow: 2,
        exampleHeaders: {
          en: "İngilizce",
          tr: "Açıklama",
        },
        examples: [
          {
            en: "Always",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Usually",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Often",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Sometimes",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Hardly ever",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
          {
            en: "Never",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "17-ex-17-1-1",
      subtopicId: "17-1",
      type: "multiple_choice",
      prompt: '"Sıklık Zarfları" alt konusu hangi ana konuya aittir?',
      options: [
        "Sıklık Zarfları",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: 'Bu alt konu "Sıklık Zarfları" başlığı altındadır.',
    },
    {
      id: "17-ex-17-1-2",
      subtopicId: "17-1",
      type: "multiple_choice",
      prompt:
        'A1 seviyesindeki "Sıklık Zarfları" için doğru yaklaşım hangisidir?',
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
      id: "17-tf-17-1-1",
      subtopicId: "17-1",
      type: "true_false",
      prompt:
        '"Sıklık Zarfları" başlığı "Sıklık Zarfları" konusunun bir parçasıdır.',
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation: 'Bu alt başlık "Sıklık Zarfları" konusu altında işlenir.',
    },
    {
      id: "17-fb-17-1-1",
      subtopicId: "17-1",
      type: "fill_blank",
      prompt: '"Sıklık Zarfları" konusu _____ seviyesine uygundur.',
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "17-match-1",
      subtopicId: "17-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Adverbs of Frequency",
          right: "Sıklık Zarfları",
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
      id: "17-cw-1",
      subtopicId: "17-1",
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
      id: "17-listen-01",
      subtopicId: "17-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "Always",
      answer: "Always",
      acceptedAnswers: ["Always", "always"],
    },
  ],
  quiz: [
    {
      id: "quiz-17-17-1-1",
      subtopicId: "17-1",
      type: "multiple_choice",
      prompt: '"Sıklık Zarfları" alt konusu hangi ana konuya aittir?',
      options: [
        "Sıklık Zarfları",
        "Sadece kelime listesi",
        "Tamamen farklı bir konu",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: 'Bu alt konu "Sıklık Zarfları" başlığı altındadır.',
    },
    {
      id: "quiz-17-17-1-2",
      subtopicId: "17-1",
      type: "multiple_choice",
      prompt:
        'A1 seviyesindeki "Sıklık Zarfları" için doğru yaklaşım hangisidir?',
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
      id: "quiz-17-17-1-3",
      subtopicId: "17-1",
      type: "multiple_choice",
      prompt: '"Sıklık Zarfları" çalışırken hangisi doğrudur?',
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
      id: "quiz-17-level",
      subtopicId: "17-1",
      type: "multiple_choice",
      prompt: '"Sıklık Zarfları" konusu hangi seviyeye aittir?',
      options: ["A1", "Seviye yok", "Belirsiz", "Yanlış seviye"],
      correctIndex: 0,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Sıklık Zarfları konusunu pekiştiren quiz. Başarılar.",
};
