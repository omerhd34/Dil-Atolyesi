import type { TopicContent } from "@/data/grammar/types";

export const topicContent102: TopicContent = {
    topicId: "102",
    lesson: {
      parts: [
        {
          id: "102-1",
          title: "İleri Noktalama",
          titleEn: "Advanced Punctuation",
          paragraphs: [
            "Virgülün ötesinde **\\semicolon, colon, dash, parentheses\\** ve **\\quotation marks\\** ile anlamı, duraklamayı ve vurguyu bilinçli biçimde yönlendirmeye hazır mısın? Bu derste **\\em dash\\** ile ara cümle ekleme, **\\colon\\** ile açıklama veya liste sunma, **\\semicolon\\** ile bağımsız ama bağlı cümleleri birleştirme kurallarını keşfedeceksin. **\\Restrictive vs. non-restrictive\\** virgül kullanımı, **\\sic\\**, çoklu noktalama ve akademik atıf biçimlerindeki ince ayrımları inceleyeceksin. İleri düzey yazılarda okunabilirliği ve otoriter bir biçimsel titizliği bir arada sürdürebileceksin.",
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
              en: "The results—unexpected as they were—proved decisive; however, further study is needed.",
              tr: "Bağlamda incele.",
              note: "grammarHeading",
            },
          ],
        },
      ],
    },
    exercises: [
      {
        id: "102-ex-102-1-1",
        subtopicId: "102-1",
        type: "multiple_choice",
        prompt: "\"İleri Noktalama\" alt konusu hangi ana konuya aittir?",
        options: [
          "İleri Noktalama",
          "Tamamen farklı bir konu",
          "Sadece kelime listesi",
          "Hiçbiri",
        ],
        correctIndex: 0,
        explanation: "Bu alt konu \"İleri Noktalama\" başlığı altındadır.",
      },
      {
        id: "102-ex-102-1-2",
        subtopicId: "102-1",
        type: "multiple_choice",
        prompt: "C1 seviyesindeki \"İleri Noktalama\" için doğru yaklaşım hangisidir?",
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
        id: "102-tf-102-1-1",
        subtopicId: "102-1",
        type: "true_false",
        prompt: "\"İleri Noktalama\" başlığı \"İleri Noktalama\" konusunun bir parçasıdır.",
        options: [
          "Doğru",
          "Yanlış",
        ],
        correctIndex: 0,
        explanation: "Bu alt başlık \"İleri Noktalama\" konusu altında işlenir.",
      },
      {
        id: "102-fb-102-1-1",
        subtopicId: "102-1",
        type: "fill_blank",
        prompt: "\"İleri Noktalama\" konusu _____ seviyesine uygundur.",
        answer: "C1",
        explanation: "Bu konu C1 seviyesindedir.",
      },
      {
        id: "102-match-1",
        subtopicId: "102-1",
        type: "matching",
        prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
        pairs: [
          {
            left: "Advanced Punctuation",
            right: "İleri Noktalama",
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
        id: "102-cw-1",
        subtopicId: "102-1",
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
        id: "quiz-102-102-1-1",
        subtopicId: "102-1",
        type: "multiple_choice",
        prompt: "\"İleri Noktalama\" alt konusu hangi ana konuya aittir?",
        options: [
          "İleri Noktalama",
          "Tamamen farklı bir konu",
          "Sadece kelime listesi",
          "Hiçbiri",
        ],
        correctIndex: 0,
        explanation: "Bu alt konu \"İleri Noktalama\" başlığı altındadır.",
      },
      {
        id: "quiz-102-102-1-2",
        subtopicId: "102-1",
        type: "multiple_choice",
        prompt: "C1 seviyesindeki \"İleri Noktalama\" için doğru yaklaşım hangisidir?",
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
        id: "quiz-102-102-1-3",
        subtopicId: "102-1",
        type: "multiple_choice",
        prompt: "\"İleri Noktalama\" çalışırken hangisi doğrudur?",
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
        id: "quiz-102-level",
        subtopicId: "102-1",
        type: "multiple_choice",
        prompt: "\"İleri Noktalama\" konusu hangi seviyeye aittir?",
        options: [
          "Yanlış seviye",
          "Seviye yok",
          "Belirsiz",
          "C1",
        ],
        correctIndex: 3,
        explanation: "Bu konu C1 seviyesindedir.",
      },
    ],
    viewMinutes: 10,
    quizIntro: "İleri Noktalama konusunu pekiştiren quiz. Başarılar.",
  };
