import type { TopicContent } from "@/data/grammar/types";

export const topicContent9: TopicContent = {
  topicId: "9",
  lesson: {
    parts: [
      {
        id: "9-1",
        title: "Varlık Bildirme",
        titleEn: "Declaration of Assets",
        paragraphs: [
          "Bir yerde ne olduğunu **\\There is\\** ve **\\There are\\** ile söylersin. Tekil ve çoğul isim seçimi fiili belirler. Olumsuz **\\isn't / aren't\\**, soru **\\Is there / Are there\\** ve kısa cevaplar aynı pakette. Oda, şehir veya masa üstü tarifinde doğal kalıp budur.",
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
            en: "There is / There are",
            tr: "Bu derste işlenir.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "9-ex-9-1-1",
      subtopicId: "9-1",
      type: "multiple_choice",
      prompt: "\"Varlık Bildirme\" alt konusu hangi ana konuya aittir?",
      options: [
        "Varlık Bildirme",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: "Bu alt konu \"Varlık Bildirme\" başlığı altındadır.",
    },
    {
      id: "9-ex-9-1-2",
      subtopicId: "9-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Varlık Bildirme\" için doğru yaklaşım hangisidir?",
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
      id: "9-tf-9-1-1",
      subtopicId: "9-1",
      type: "true_false",
      prompt: "\"Varlık Bildirme\" başlığı \"Varlık Bildirme\" konusunun bir parçasıdır.",
      options: [
        "Doğru",
        "Yanlış",
      ],
      correctIndex: 0,
      explanation: "Bu alt başlık \"Varlık Bildirme\" konusu altında işlenir.",
    },
    {
      id: "9-fb-9-1-1",
      subtopicId: "9-1",
      type: "fill_blank",
      prompt: "\"Varlık Bildirme\" konusu _____ seviyesine uygundur.",
      answer: "A1",
      explanation: "Bu konu A1 seviyesindedir.",
    },
    {
      id: "9-match-1",
      subtopicId: "9-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Declaration of Assets",
          right: "Varlık Bildirme",
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
      id: "9-cw-1",
      subtopicId: "9-1",
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
      id: "9-listen-01",
      subtopicId: "9-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "There is / There are",
      answer: "There is / There are",
      acceptedAnswers: ["There is / There are", "there is / there are"],
    },
  ],
  quiz: [
    {
      id: "quiz-9-9-1-1",
      subtopicId: "9-1",
      type: "multiple_choice",
      prompt: "\"Varlık Bildirme\" alt konusu hangi ana konuya aittir?",
      options: [
        "Sadece kelime listesi",
        "Hiçbiri",
        "Tamamen farklı bir konu",
        "Varlık Bildirme",
      ],
      correctIndex: 3,
      explanation: "Bu alt konu \"Varlık Bildirme\" başlığı altındadır.",
    },
    {
      id: "quiz-9-9-1-2",
      subtopicId: "9-1",
      type: "multiple_choice",
      prompt: "A1 seviyesindeki \"Varlık Bildirme\" için doğru yaklaşım hangisidir?",
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
      id: "quiz-9-9-1-3",
      subtopicId: "9-1",
      type: "multiple_choice",
      prompt: "\"Varlık Bildirme\" çalışırken hangisi doğrudur?",
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
      id: "quiz-9-level",
      subtopicId: "9-1",
      type: "multiple_choice",
      prompt: "\"Varlık Bildirme\" konusu hangi seviyeye aittir?",
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
  quizIntro: "Varlık Bildirme konusunu pekiştiren quiz. Başarılar.",
};
