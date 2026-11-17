import type { TopicContent } from "@/data/grammar/types";

export const topicContent100: TopicContent = {
    topicId: "100",
    lesson: {
      parts: [
        {
          id: "100-1",
          title: "Kalıp İfadeler & Collocations",
          titleEn: "Fixed Expressions & Collocations",
          paragraphs: [
            "Tek tek kelimeler yerine ana dili konuşanların kullandığı **\\fixed expressions\\** ve **\\collocations\\** ile ifadenin doğallığını ve ikna gücünü yükseltmeye hazır mısın? Bu derste **\\make a decision\\** (**\\do a decision\\** değil), **\\raise awareness, commit a crime, heavy rain\\** gibi sıkı eşdizim örüntülerini ve **\\phrasal / prepositional verbs\\** ile sabit kalıpları keşfedeceksin. **\\Formal register\\** ile **\\informal\\** ortamlarda tercih edilen alternatifleri ve yanlış çeviri tuzaklarını inceleyeceksin. Yazılı ve sözlü iletişimde takılmadan, akıcı ve yerinde kalıp kullanabileceksin.",
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
              en: "take into account, bear in mind, come to terms with.",
              tr: "Bağlamda incele.",
              note: "grammarHeading",
            },
          ],
        },
      ],
    },
    exercises: [
      {
        id: "100-ex-100-1-1",
        subtopicId: "100-1",
        type: "multiple_choice",
        prompt: "\"Kalıp İfadeler & Collocations\" alt konusu hangi ana konuya aittir?",
        options: [
          "Kalıp İfadeler & Collocations",
          "Tamamen farklı bir konu",
          "Sadece kelime listesi",
          "Hiçbiri",
        ],
        correctIndex: 0,
        explanation: "Bu alt konu \"Kalıp İfadeler & Collocations\" başlığı altındadır.",
      },
      {
        id: "100-ex-100-1-2",
        subtopicId: "100-1",
        type: "multiple_choice",
        prompt: "C1 seviyesindeki \"Kalıp İfadeler & Collocations\" için doğru yaklaşım hangisidir?",
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
        id: "100-tf-100-1-1",
        subtopicId: "100-1",
        type: "true_false",
        prompt: "\"Kalıp İfadeler & Collocations\" başlığı \"Kalıp İfadeler & Collocations\" konusunun bir parçasıdır.",
        options: [
          "Doğru",
          "Yanlış",
        ],
        correctIndex: 0,
        explanation: "Bu alt başlık \"Kalıp İfadeler & Collocations\" konusu altında işlenir.",
      },
      {
        id: "100-fb-100-1-1",
        subtopicId: "100-1",
        type: "fill_blank",
        prompt: "\"Kalıp İfadeler & Collocations\" konusu _____ seviyesine uygundur.",
        answer: "C1",
        explanation: "Bu konu C1 seviyesindedir.",
      },
      {
        id: "100-match-1",
        subtopicId: "100-1",
        type: "matching",
        prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
        pairs: [
          {
            left: "Fixed Expressions & Collocations",
            right: "Kalıp İfadeler & Collocations",
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
        id: "100-cw-1",
        subtopicId: "100-1",
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
        id: "quiz-100-100-1-1",
        subtopicId: "100-1",
        type: "multiple_choice",
        prompt: "\"Kalıp İfadeler & Collocations\" alt konusu hangi ana konuya aittir?",
        options: [
          "Kalıp İfadeler & Collocations",
          "Sadece kelime listesi",
          "Hiçbiri",
          "Tamamen farklı bir konu",
        ],
        correctIndex: 0,
        explanation: "Bu alt konu \"Kalıp İfadeler & Collocations\" başlığı altındadır.",
      },
      {
        id: "quiz-100-100-1-2",
        subtopicId: "100-1",
        type: "multiple_choice",
        prompt: "C1 seviyesindeki \"Kalıp İfadeler & Collocations\" için doğru yaklaşım hangisidir?",
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
        id: "quiz-100-100-1-3",
        subtopicId: "100-1",
        type: "multiple_choice",
        prompt: "\"Kalıp İfadeler & Collocations\" çalışırken hangisi doğrudur?",
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
        id: "quiz-100-level",
        subtopicId: "100-1",
        type: "multiple_choice",
        prompt: "\"Kalıp İfadeler & Collocations\" konusu hangi seviyeye aittir?",
        options: [
          "Yanlış seviye",
          "Seviye yok",
          "C1",
          "Belirsiz",
        ],
        correctIndex: 2,
        explanation: "Bu konu C1 seviyesindedir.",
      },
    ],
    viewMinutes: 10,
    quizIntro: "Kalıp İfadeler & Collocations konusunu pekiştiren quiz. Başarılar.",
  };
