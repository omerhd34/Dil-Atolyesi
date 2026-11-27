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
          "**\\have got\\** ve **\\has got\\** İngiliz İngilizcesinde sık duyulan sahiplik kalıplarıdır; Türkçedeki **\\… var / …ım var\\** karşılığına yakın düşün. **\\I, we, they\\** ile **\\have got\\**; **\\he, she, it\\** ile **\\has got\\** kullanırsın. Kalıp: **özne + have/has got + isim**. Olumsuzda **\\haven't got\\** / **\\hasn't got\\**, soruda fiil başa gelir: **\\Have\\** you got…? Kısa cevapta **\\Yes, I have.\\** / **\\No, I haven't.\\** yeterlidir; tamamlayıcıyı tekrar etmezsin.",
        ],
        examplesTitle: "Olumlu, olumsuz ve soru",
        examplesLayout: "columns",
        examplesPerRow: 2,
        exampleHeaders: {
          en: "İngilizce",
          tr: "Türkçe",
        },
        examples: [
          {
            en: "I \\have got\\ a dog.",
            tr: "Bir köpeğim var.",
            note: "I → have got",
          },
          {
            en: "We \\have got\\ a small flat.",
            tr: "Küçük bir dairemiz var.",
            note: "We → have got",
          },
          {
            en: "They \\have got\\ two children.",
            tr: "İki çocukları var.",
            note: "They → have got",
          },
          {
            en: "He \\has got\\ a new phone.",
            tr: "Yeni bir telefonu var.",
            note: "He → has got",
          },
          {
            en: "She \\has got\\ long hair.",
            tr: "Uzun saçları var.",
            note: "She → has got",
          },
          {
            en: "It \\has got\\ four wheels.",
            tr: "Dört tekerleği var.",
            note: "It → has got",
          },
          {
            en: "I \\haven't got\\ a car.",
            tr: "Arabam yok.",
            note: "have not got = haven't got",
          },
          {
            en: "She \\hasn't got\\ a laptop.",
            tr: "Dizüstü bilgisayarı yok.",
            note: "has not got = hasn't got",
          },
          {
            en: "\\Have\\ you got a sister?",
            tr: "Kız kardeşin var mı?",
            note: "Yes, I have.",
            note2: "Evet, var.",
          },
          {
            en: "\\Has\\ he got a brother?",
            tr: "Erkek kardeşi var mı?",
            note: "Yes, he has.",
            note2: "Evet, var.",
          },
          {
            en: "\\Have\\ they got a garden?",
            tr: "Bahçeleri var mı?",
            note: "No, they haven't.",
            note2: "Hayır, yok.",
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
      prompt: '"Sahiplik Bildirme" alt konusu hangi ana konuya aittir?',
      options: [
        "Sahiplik Bildirme",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: 'Bu alt konu "Sahiplik Bildirme" başlığı altındadır.',
    },
    {
      id: "8-ex-8-1-2",
      subtopicId: "8-1",
      type: "multiple_choice",
      prompt:
        'A1 seviyesindeki "Sahiplik Bildirme" için doğru yaklaşım hangisidir?',
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
      prompt:
        '"Sahiplik Bildirme" başlığı "Sahiplik Bildirme" konusunun bir parçasıdır.',
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation: 'Bu alt başlık "Sahiplik Bildirme" konusu altında işlenir.',
    },
    {
      id: "8-fb-8-1-1",
      subtopicId: "8-1",
      type: "fill_blank",
      prompt: '"Sahiplik Bildirme" konusu _____ seviyesine uygundur.',
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
  exercisesListening: [
    {
      id: "8-listen-01",
      subtopicId: "8-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "I have got a dog.",
      answer: "I have got a dog.",
      acceptedAnswers: [
        "I have got a dog.",
        "I have got a dog",
        "i have got a dog.",
      ],
    },
  ],
  quiz: [
    {
      id: "quiz-8-8-1-1",
      subtopicId: "8-1",
      type: "multiple_choice",
      prompt: '"Sahiplik Bildirme" alt konusu hangi ana konuya aittir?',
      options: [
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
        "Sahiplik Bildirme",
      ],
      correctIndex: 3,
      explanation: 'Bu alt konu "Sahiplik Bildirme" başlığı altındadır.',
    },
    {
      id: "quiz-8-8-1-2",
      subtopicId: "8-1",
      type: "multiple_choice",
      prompt:
        'A1 seviyesindeki "Sahiplik Bildirme" için doğru yaklaşım hangisidir?',
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
      prompt: '"Sahiplik Bildirme" çalışırken hangisi doğrudur?',
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
      prompt: '"Sahiplik Bildirme" konusu hangi seviyeye aittir?',
      options: ["A1", "Yanlış seviye", "Belirsiz", "Seviye yok"],
      correctIndex: 0,
      explanation: "Bu konu A1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro:
    "Bu quiz **\\have got\\** ve **\\has got\\** kullanımını ölçer. Özneye göre doğru **\\have\\** / **\\has\\** ve kısa cevap kalıplarına dikkat et.",
};
