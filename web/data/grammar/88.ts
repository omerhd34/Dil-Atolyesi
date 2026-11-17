import type { TopicContent } from "@/data/grammar/types";

export const topicContent88: TopicContent = {
    topicId: "88",
    lesson: {
      parts: [
        {
          id: "88-1",
          title: "Bölünmüş & Vurgu Cümleleri",
          titleEn: "Cleft Sentences (It-clefts & Wh-clefts)",
          paragraphs: [
            "Cümledeki belirli bir bilgiyi spot ışığı altına alarak okuyucunun veya dinleyicinin dikkatini tam istediğin noktaya çekmeye hazır mısın? Bu derste kişi, nesne, zaman veya yeri öne çıkaran **\\It-cleft\\** (**\\It is / was ... who / that\\**) ile eyleme veya duruma odaklanan **\\Wh-cleft\\** (**What + özne + fiil + is / was**) yapılarını keşfedeceksin. Ayrıca **\\All (that), The reason why, The place where\\** gibi ileri düzey vurgu kalıplarını inceleyeceksin. Tartışmalarda, sunumlarda ve yazılı analizlerde mesajının ikna gücünü en üst düzeye çıkarabileceksin.",
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
              en: "It was John who solved the bug.",
              tr: "Bağlamda incele.",
              note: "grammarHeading",
            },
            {
              en: "What I need right now is a clear answer.",
              tr: "Bağlamda incele.",
              note: "grammarHeading",
            },
          ],
        },
      ],
    },
    exercises: [
      {
        id: "88-ex-88-1-1",
        subtopicId: "88-1",
        type: "multiple_choice",
        prompt: "\"Bölünmüş & Vurgu Cümleleri\" alt konusu hangi ana konuya aittir?",
        options: [
          "Bölünmüş & Vurgu Cümleleri",
          "Tamamen farklı bir konu",
          "Sadece kelime listesi",
          "Hiçbiri",
        ],
        correctIndex: 0,
        explanation: "Bu alt konu \"Bölünmüş & Vurgu Cümleleri\" başlığı altındadır.",
      },
      {
        id: "88-ex-88-1-2",
        subtopicId: "88-1",
        type: "multiple_choice",
        prompt: "C1 seviyesindeki \"Bölünmüş & Vurgu Cümleleri\" için doğru yaklaşım hangisidir?",
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
        id: "88-tf-88-1-1",
        subtopicId: "88-1",
        type: "true_false",
        prompt: "\"Bölünmüş & Vurgu Cümleleri\" başlığı \"Bölünmüş & Vurgu Cümleleri\" konusunun bir parçasıdır.",
        options: [
          "Doğru",
          "Yanlış",
        ],
        correctIndex: 0,
        explanation: "Bu alt başlık \"Bölünmüş & Vurgu Cümleleri\" konusu altında işlenir.",
      },
      {
        id: "88-fb-88-1-1",
        subtopicId: "88-1",
        type: "fill_blank",
        prompt: "\"Bölünmüş & Vurgu Cümleleri\" konusu _____ seviyesine uygundur.",
        answer: "C1",
        explanation: "Bu konu C1 seviyesindedir.",
      },
      {
        id: "88-match-1",
        subtopicId: "88-1",
        type: "matching",
        prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
        pairs: [
          {
            left: "Cleft Sentences (It-clefts & Wh-clefts)",
            right: "Bölünmüş & Vurgu Cümleleri",
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
        id: "88-cw-1",
        subtopicId: "88-1",
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
        id: "quiz-88-88-1-1",
        subtopicId: "88-1",
        type: "multiple_choice",
        prompt: "\"Bölünmüş & Vurgu Cümleleri\" alt konusu hangi ana konuya aittir?",
        options: [
          "Sadece kelime listesi",
          "Hiçbiri",
          "Bölünmüş & Vurgu Cümleleri",
          "Tamamen farklı bir konu",
        ],
        correctIndex: 2,
        explanation: "Bu alt konu \"Bölünmüş & Vurgu Cümleleri\" başlığı altındadır.",
      },
      {
        id: "quiz-88-88-1-2",
        subtopicId: "88-1",
        type: "multiple_choice",
        prompt: "C1 seviyesindeki \"Bölünmüş & Vurgu Cümleleri\" için doğru yaklaşım hangisidir?",
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
        id: "quiz-88-88-1-3",
        subtopicId: "88-1",
        type: "multiple_choice",
        prompt: "\"Bölünmüş & Vurgu Cümleleri\" çalışırken hangisi doğrudur?",
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
        id: "quiz-88-level",
        subtopicId: "88-1",
        type: "multiple_choice",
        prompt: "\"Bölünmüş & Vurgu Cümleleri\" konusu hangi seviyeye aittir?",
        options: [
          "C1",
          "Belirsiz",
          "Yanlış seviye",
          "Seviye yok",
        ],
        correctIndex: 0,
        explanation: "Bu konu C1 seviyesindedir.",
      },
    ],
    viewMinutes: 10,
    quizIntro: "Bölünmüş & Vurgu Cümleleri konusunu pekiştiren quiz. Başarılar.",
  };
