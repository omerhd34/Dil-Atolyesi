import type { TopicContent } from "@/data/grammar/types";

export const topicContent101: TopicContent = {
    topicId: "101",
    lesson: {
      parts: [
        {
          id: "101-1",
          title: "Bağdaşıklık & Tutarlılık",
          titleEn: "Cohesion & Coherence",
          paragraphs: [
            "Paragraf ve bölümler arasında mantıksal bağ kurarak **\\cohesion\\** ile anlam bütünlüğünü (**\\coherence\\**) birlikte güçlendirmeye hazır mısın? Bu derste **\\furthermore, nevertheless, consequently, in contrast\\** gibi **\\discourse markers\\**, **\\this / these / such\\** ile **\\anaphoric reference\\** ve **\\lexical cohesion\\** (eş anlamlı ve tekrar önleyici **\\synonymy / substitution\\**) araçlarını keşfedeceksin. Konu cümlesi, gelişme ve sonuç örgüsünün okuyucuyu kaybetmeden ilerlemesini inceleyeceksin. Akademik makale, sunum ve uzun metinlerde fikirlerinin akışını profesyonel düzeyde tutarlı kılacaksın.",
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
              en: "Furthermore, the data support this claim.",
              tr: "Bağlamda incele.",
              note: "grammarHeading",
            },
            {
              en: "In contrast, earlier studies disagreed.",
              tr: "Bağlamda incele.",
              note: "grammarHeading",
            },
          ],
        },
      ],
    },
    exercises: [
      {
        id: "101-ex-101-1-1",
        subtopicId: "101-1",
        type: "multiple_choice",
        prompt: "\"Bağdaşıklık & Tutarlılık\" alt konusu hangi ana konuya aittir?",
        options: [
          "Bağdaşıklık & Tutarlılık",
          "Tamamen farklı bir konu",
          "Sadece kelime listesi",
          "Hiçbiri",
        ],
        correctIndex: 0,
        explanation: "Bu alt konu \"Bağdaşıklık & Tutarlılık\" başlığı altındadır.",
      },
      {
        id: "101-ex-101-1-2",
        subtopicId: "101-1",
        type: "multiple_choice",
        prompt: "C1 seviyesindeki \"Bağdaşıklık & Tutarlılık\" için doğru yaklaşım hangisidir?",
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
        id: "101-tf-101-1-1",
        subtopicId: "101-1",
        type: "true_false",
        prompt: "\"Bağdaşıklık & Tutarlılık\" başlığı \"Bağdaşıklık & Tutarlılık\" konusunun bir parçasıdır.",
        options: [
          "Doğru",
          "Yanlış",
        ],
        correctIndex: 0,
        explanation: "Bu alt başlık \"Bağdaşıklık & Tutarlılık\" konusu altında işlenir.",
      },
      {
        id: "101-fb-101-1-1",
        subtopicId: "101-1",
        type: "fill_blank",
        prompt: "\"Bağdaşıklık & Tutarlılık\" konusu _____ seviyesine uygundur.",
        answer: "C1",
        explanation: "Bu konu C1 seviyesindedir.",
      },
      {
        id: "101-match-1",
        subtopicId: "101-1",
        type: "matching",
        prompt: "İngilizce ifadeleri Türkçe karşılıklarıyla eşleştir.",
        pairs: [
          {
            left: "Cohesion & Coherence",
            right: "Bağdaşıklık & Tutarlılık",
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
        id: "101-cw-1",
        subtopicId: "101-1",
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
        id: "quiz-101-101-1-1",
        subtopicId: "101-1",
        type: "multiple_choice",
        prompt: "\"Bağdaşıklık & Tutarlılık\" alt konusu hangi ana konuya aittir?",
        options: [
          "Tamamen farklı bir konu",
          "Hiçbiri",
          "Bağdaşıklık & Tutarlılık",
          "Sadece kelime listesi",
        ],
        correctIndex: 2,
        explanation: "Bu alt konu \"Bağdaşıklık & Tutarlılık\" başlığı altındadır.",
      },
      {
        id: "quiz-101-101-1-2",
        subtopicId: "101-1",
        type: "multiple_choice",
        prompt: "C1 seviyesindeki \"Bağdaşıklık & Tutarlılık\" için doğru yaklaşım hangisidir?",
        options: [
          "Örnekleri okuyup kısa pratik yapmak",
          "Hiç alıştırma çözmemek",
          "Sadece çeviri yapmadan ezberlemek",
          "Konuyu tamamen atlamak",
        ],
        correctIndex: 0,
        explanation: "Örnek + kısa pratik, kalıcı öğrenmeye yardımcı olur.",
      },
      {
        id: "quiz-101-101-1-3",
        subtopicId: "101-1",
        type: "multiple_choice",
        prompt: "\"Bağdaşıklık & Tutarlılık\" çalışırken hangisi doğrudur?",
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
        id: "quiz-101-level",
        subtopicId: "101-1",
        type: "multiple_choice",
        prompt: "\"Bağdaşıklık & Tutarlılık\" konusu hangi seviyeye aittir?",
        options: [
          "C1",
          "Belirsiz",
          "Seviye yok",
          "Yanlış seviye",
        ],
        correctIndex: 0,
        explanation: "Bu konu C1 seviyesindedir.",
      },
    ],
    viewMinutes: 10,
    quizIntro: "Bağdaşıklık & Tutarlılık konusunu pekiştiren quiz. Başarılar.",
  };
