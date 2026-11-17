import type { TopicContent } from "@/data/grammar/types";

export const topicContent95: TopicContent = {
  topicId: "95",
  lesson: {
    parts: [
      {
        id: "95-1",
        title: "İsim Cümlecikleri",
        titleEn: "Noun Clauses (What he said surprised me)",
        paragraphs: [
          "Özne, nesne veya tamamlayıcı konumunda yer alan **\\noun clauses\\** ile düşünce, duyum ve yargıları tek bir cümlede bütünleştirmeye hazır mısın? Bu derste **\\what, that, whether, if\\** ve **\\wh-\\** bağlantılı **\\noun clauses\\** yapılarının ana cümle ile uyumunu ve fiil çekimini keşfedeceksin. **\\Whatever, whoever, whichever\\** ile genişletilmiş öbeklerin ve **\\anticipatory it\\** (**\\It is clear that...\\**) kalıplarının işlevini inceleyeceksin. Akademik tartışma, rapor ve günlük üst düzey anlatımlarda soyut fikirleri açık ve tutarlı biçimde bağlayabileceksin.",
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
            en: "What he said surprised me.",
            tr: "Bağlamda incele.",
            note: "grammarHeading",
          },
          {
            en: "That she left so early worried them.",
            tr: "Bağlamda incele.",
            note: "grammarHeading",
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: "95-ex-95-1-1",
      subtopicId: "95-1",
      type: "multiple_choice",
      prompt: '"İsim Cümlecikleri" alt konusu hangi ana konuya aittir?',
      options: [
        "İsim Cümlecikleri",
        "Tamamen farklı bir konu",
        "Sadece kelime listesi",
        "Hiçbiri",
      ],
      correctIndex: 0,
      explanation: 'Bu alt konu "İsim Cümlecikleri" başlığı altındadır.',
    },
    {
      id: "95-ex-95-1-2",
      subtopicId: "95-1",
      type: "multiple_choice",
      prompt:
        'C1 seviyesindeki "İsim Cümlecikleri" için doğru yaklaşım hangisidir?',
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
      id: "95-tf-95-1-1",
      subtopicId: "95-1",
      type: "true_false",
      prompt:
        '"İsim Cümlecikleri" başlığı "İsim Cümlecikleri" konusunun bir parçasıdır.',
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation: 'Bu alt başlık "İsim Cümlecikleri" konusu altında işlenir.',
    },
    {
      id: "95-fb-95-1-1",
      subtopicId: "95-1",
      type: "fill_blank",
      prompt: '"İsim Cümlecikleri" konusu _____ seviyesine uygundur.',
      answer: "C1",
      explanation: "Bu konu C1 seviyesindedir.",
    },
    {
      id: "95-match-1",
      subtopicId: "95-1",
      type: "matching",
      prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        {
          left: "Noun Clauses (What he said surprised me)",
          right: "İsim Cümlecikleri",
        },
        {
          left: "C1 level",
          right: "C1 seviyesi",
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
      id: "95-cw-1",
      subtopicId: "95-1",
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
      id: "quiz-95-95-1-1",
      subtopicId: "95-1",
      type: "multiple_choice",
      prompt: '"İsim Cümlecikleri" alt konusu hangi ana konuya aittir?',
      options: [
        "Tamamen farklı bir konu",
        "Hiçbiri",
        "İsim Cümlecikleri",
        "Sadece kelime listesi",
      ],
      correctIndex: 2,
      explanation: 'Bu alt konu "İsim Cümlecikleri" başlığı altındadır.',
    },
    {
      id: "quiz-95-95-1-2",
      subtopicId: "95-1",
      type: "multiple_choice",
      prompt:
        'C1 seviyesindeki "İsim Cümlecikleri" için doğru yaklaşım hangisidir?',
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
      id: "quiz-95-95-1-3",
      subtopicId: "95-1",
      type: "multiple_choice",
      prompt: '"İsim Cümlecikleri" çalışırken hangisi doğrudur?',
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
      id: "quiz-95-level",
      subtopicId: "95-1",
      type: "multiple_choice",
      prompt: '"İsim Cümlecikleri" konusu hangi seviyeye aittir?',
      options: ["C1", "Belirsiz", "Seviye yok", "Yanlış seviye"],
      correctIndex: 0,
      explanation: "Bu konu C1 seviyesindedir.",
    },
  ],
  viewMinutes: 10,
  quizIntro: "İsim Cümlecikleri konusunu pekiştiren quiz. Başarılar.",
};
