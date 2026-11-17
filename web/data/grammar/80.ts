import type { TopicContent } from "@/data/grammar/types";

export const topicContent80: TopicContent = {
  topicId: "80",
  lesson: {
    parts: [
      {
        id: "80-1",
        title: "Duyu Fiilleri + V-ing / V1",
        titleEn: "Verbs of Perception + V-ing / Bare Infinitive",
        paragraphs: [
          "Duyu fiillerinden sonra eylemin tamamını mı süregelen halini mi vurgulayacağını bilinçli seçmeye hazır mısın? Bu derste **\\see, hear, watch, feel, notice\\** gibi **\\verbs of perception\\** sonrasında **\\bare infinitive\\** (\\V1\\) ile **\\V-ing\\** arasındaki anlam farkını keşfedeceksin. Tamamlanmış eylem ile devam eden süreç vurgusu, aktif ve edilgen örnekler ile **\\make / let\\** ile benzerlikleri inceleyeceksin. Gözlem ve deneyim anlatırken dinleyicide doğru görüntüyü oluşturabileceksin.",
        ],
        examplesTitle: "Örnek cümleler",
        examplesLayout: "columns",
        examplesPerRow: 2,
        exampleHeaders: {
          en: "İngilizce",
          tr: "Türkçe",
        },
        examples: [
          {
            en: "I heard him leave.",
            tr: "Bağlamda incele.",
            note: "grammarHeading",
          },
          {
            en: "I saw her crossing the street.",
            tr: "Bağlamda incele.",
            note: "grammarHeading",
          },
          {
            en: "We watched them play football.",
            tr: "Bağlamda incele.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "80-ex-80-1-1",
      subtopicId: "80-1",
      type: "multiple_choice",
      prompt:
        '"Duyu Fiilleri + V-ing / V1" alt konusu hangi ana konuya aittir?',
      options: [
        "Duyu Fiilleri + V-ing / V1",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation:
        'Bu alt konu "Duyu Fiilleri + V-ing / V1" başlığı altındadır.',
    },
    {
      id: "80-ex-80-1-2",
      subtopicId: "80-1",
      type: "multiple_choice",
      prompt:
        'B2 seviyesindeki "Duyu Fiilleri + V-ing / V1" için doğru yaklaşım hangisidir?',
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
      id: "80-tf-80-1-1",
      subtopicId: "80-1",
      type: "true_false",
      prompt:
        '"Duyu Fiilleri + V-ing / V1" başlığı "Duyu Fiilleri + V-ing / V1" konusunun bir parçasıdır.',
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation:
        'Bu alt başlık "Duyu Fiilleri + V-ing / V1" konusu altında işlenir.',
    },
    {
      id: "80-fb-80-1-1",
      subtopicId: "80-1",
      type: "fill_blank",
      prompt: '"Duyu Fiilleri + V-ing / V1" konusu _____ seviyesine uygundur.',
      answer: "B2",
      explanation: "Bu konu B2 seviyesindedir.",
    },
    {
      id: "80-match-1",
      subtopicId: "80-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Verbs of Perception + V-ing / Bare Infinitive",
          right: "Duyu Fiilleri + V-ing / V1",
        },
        {
          left: "B2 level",
          right: "B2 seviyesi",
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
      id: "80-cw-1",
      subtopicId: "80-1",
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
      id: "quiz-80-80-1-1",
      subtopicId: "80-1",
      type: "multiple_choice",
      prompt:
        '"Duyu Fiilleri + V-ing / V1" alt konusu hangi ana konuya aittir?',
      options: [
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
        "Duyu Fiilleri + V-ing / V1",
      ],
      correctIndex: 3,
      explanation:
        'Bu alt konu "Duyu Fiilleri + V-ing / V1" başlığı altındadır.',
    },
    {
      id: "quiz-80-80-1-2",
      subtopicId: "80-1",
      type: "multiple_choice",
      prompt:
        'B2 seviyesindeki "Duyu Fiilleri + V-ing / V1" için doğru yaklaşım hangisidir?',
      options: [
        "Sadece çeviri yapmadan ezberlemek",
        "Konuyu tamamen atlamak",
        "Örnekleri okuyup kısa pratik yapmak",
        "Hiç alıştırma çözmemek",
      ],
      correctIndex: 2,
      explanation: "Örnek + kısa pratik, kalıcı öğrenmeye yardımcı olur.",
    },
    {
      id: "quiz-80-80-1-3",
      subtopicId: "80-1",
      type: "multiple_choice",
      prompt: '"Duyu Fiilleri + V-ing / V1" çalışırken hangisi doğrudur?',
      options: [
        "Konuyu tamamen atlamak",
        "Hiç örnek okumamak",
        "Anlamadığın örneği işaretleyip tekrar etmek",
        "Sadece dinleyip bırakmak",
      ],
      correctIndex: 2,
      explanation: "Tekrar ve işaretleme öğrenmeyi güçlendirir.",
    },
    {
      id: "quiz-80-level",
      subtopicId: "80-1",
      type: "multiple_choice",
      prompt: '"Duyu Fiilleri + V-ing / V1" konusu hangi seviyeye aittir?',
      options: ["B2", "Yanlış seviye", "Belirsiz", "Seviye yok"],
      correctIndex: 0,
      explanation: "Bu konu B2 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "Duyu Fiilleri + V-ing / V1 konusunu pekiştiren quiz. Başarılar.",
};
