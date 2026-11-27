import type { TopicContent } from "@/data/grammar/types";

export const topicContent2: TopicContent = {
  topicId: "2",
  viewMinutes: 8,
  quizIntro:
    "Bu quiz yedi özne zamirini ve Türkçe karşılıklarını ölçer. **\\He\\**, **\\She\\** ve **\\It\\** ayrımına özellikle dikkat et.",
  lesson: {
    parts: [
      {
        id: "2-1",
        title: "Özne Zamirleri",
        titleEn: "Subject Pronouns",
        paragraphs: [
          "İngilizcede cümlenin kim hakkında olduğunu söyleyen kelimelere **özne zamirleri** yani **\\subject pronouns\\** denir. Bunlar **\\I\\**, **\\you\\**, **\\he\\**, **\\she\\**, **\\it\\**, **\\we\\** ve **\\they\\** olmak üzere 7 tanedir. Her zamirin kim için kullanıldığını bilmek, doğru fiil çekimini seçmenin ilk adımıdır.",

          "Konuşan kişi için **\\I\\**, karşındaki kişi veya kişiler için **\\you\\** kullanılır. Bu iki zamir cinsiyet ayrımı yapmaz. Konuşanı da içine alan bir grubu anlatmak için **\\we\\**, konuşanın ve karşısındakinin dışında kalan kişileri veya çoğul nesneleri anlatmak için ise **\\they\\** kullanılır.",

          "Türkçede tek bir **o** zamiri varken İngilizcede cinsiyet ve canlılık ayrımı vardır: Erkek için **\\he\\**, kadın için **\\she\\**, hayvan, eşya veya durum için **\\it\\** kullanılır. Bu ayrımı cümle kurarken baştan netleştirmek gerekir.",
        ],
        examplesTitle: "Özne zamirleri",
        examplesLayout: "columns",
        examplesPerRow: 2,
        exampleHeaders: { en: "Zamir", tr: "Anlam" },
        examples: [
          { en: "I", tr: "Ben", note: "Her zaman büyük harfle yazılır" },
          { en: "you", tr: "Sen / Siz", note: "Tekil ve çoğul aynı" },
          { en: "he", tr: "O (erkek)" },
          { en: "she", tr: "O (kadın)" },
          { en: "it", tr: "O (nesne / hayvan)" },
          { en: "we", tr: "Biz" },
          { en: "they", tr: "Onlar" },
        ],
      },
    ],
  },
  exercisesMultipleChoice: [
    {
      id: "2-ex-1",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt: "Kadın bir kişiden bahsederken hangi özne zamiri kullanılır?",
      options: ["he", "she", "it", "they"],
      correctIndex: 1,
      explanation: "Kadın kişiler için 'she' kullanılır.",
    },
    {
      id: "2-ex-2",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "'Ahmet and I' (Ahmet ve ben) ifadesinin yerine hangi özne zamiri kullanılır?",
      options: ["they", "you", "we", "he"],
      correctIndex: 2,
      explanation:
        "Konuşan kişiyi ('I') de içeren gruplar için 'we' (biz) zamiri kullanılır.",
    },
    {
      id: "2-ex-3",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "İki veya daha fazla nesneden (örneğin 'the books' - kitaplar) bahsederken hangi zamir kullanılır?",
      options: ["it", "we", "they", "you"],
      correctIndex: 2,
      explanation:
        "Tekil nesneler için 'it', çoğul nesneler ve kişiler için 'they' kullanılır.",
    },
    {
      id: "2-ex-4",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt: "Erkek bir kişiden bahsederken hangi özne zamiri tercih edilir?",
      options: ["she", "it", "he", "we"],
      correctIndex: 2,
      explanation: "Erkek kişiler için 'he' özne zamiri kullanılır.",
    },
    {
      id: "2-ex-5",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "'The weather is cold today. _____ is raining.' cümlesindeki boşluğa hangi zamir gelmelidir?",
      options: ["He", "She", "It", "They"],
      correctIndex: 2,
      explanation:
        "Hava durumundan ve doğa olaylarından bahsederken 'It' zamiri kullanılır.",
    },
    {
      id: "2-ex-6",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "'Selin and Burak are friends. _____ are at school.' cümlesinde boşluğa hangisi gelmelidir?",
      options: ["We", "You", "They", "He"],
      correctIndex: 2,
      explanation:
        "Konuşma dışındaki iki kişiden (onlar) bahsedildiği için 'They' kullanılır.",
    },
    {
      id: "2-ex-7",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "Karşındaki iki arkadaşına hitap ederken hangi zamiri kullanırsın?",
      options: ["they", "we", "you", "it"],
      correctIndex: 2,
      explanation:
        "'You' zamiri hem tekil (sen) hem de çoğul (siz) hitaplar için kullanılır.",
    },
    {
      id: "2-ex-8",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "'My mother is a teacher. _____ loves her job.' cümlesinde boşluğa hangisi gelmelidir?",
      options: ["He", "She", "It", "We"],
      correctIndex: 1,
      explanation:
        "'My mother' (annem) kadın olduğu için yerine 'She' zamiri getirilir.",
    },
    {
      id: "2-ex-9",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "'The cat is sleeping on the sofa. _____ is very cute.' cümlesinde boşluğa hangisi gelmelidir?",
      options: ["He", "She", "It", "They"],
      correctIndex: 2,
      explanation:
        "Tekil hayvanlardan bahsederken genel olarak 'It' zamiri kullanılır.",
    },
    {
      id: "2-ex-10",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "İngilizcede toplam kaç tane özne zamiri (subject pronoun) vardır?",
      options: ["5", "6", "7", "8"],
      correctIndex: 2,
      explanation:
        "İngilizcede I, you, he, she, it, we ve they olmak üzere 7 özne zamiri vardır.",
    },
  ],
  exercisesFillBlank: [
    {
      id: "2-fb-1",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt: "Bir nesne veya hayvan için _____ zamiri kullanılır.",
      answer: "it",
      explanation: "Eşya, hayvan ve durum için 'it' tercih edilir.",
    },
    {
      id: "2-fb-2",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt:
        "İngilizcede 'ben' anlamına gelen _____ zamiri cümlenin neresinde olursa olsun her zaman büyük harfle yazılır.",
      answer: "I",
      explanation:
        "'I' (ben) zamiri yazım kuralı olarak daima büyük harfle yazılır.",
    },
    {
      id: "2-fb-3",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt:
        "'Ayşe and Zeynep' isimlerinin yerine tek bir zamir kullanmak istersek _____ yazarız.",
      answer: "they",
      explanation:
        "Birden fazla kişiden (onlar) bahsederken cinsiyet fark etmeksizin 'they' kullanılır.",
    },
    {
      id: "2-fb-4",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt:
        "Karşımızdaki tek bir kişiye veya bir topluluğa hitap ederken _____ zamirini kullanırız.",
      answer: "you",
      explanation:
        "'You' zamiri hem tekil (sen) hem de çoğul (siz) anlamında kullanılır.",
    },
    {
      id: "2-fb-5",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt: "'My brother and I' ifadesinin yerine _____ zamiri kullanılır.",
      answer: "we",
      explanation:
        "Kardeşim ve ben (biz) anlamını vermek için 'we' kullanılır.",
    },
    {
      id: "2-fb-6",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt:
        "'Mr. Demir' erkek bir kişiyi ifade ettiği için yerine _____ zamiri gelir.",
      answer: "he",
      explanation: "Erkek isim ve unvanlarının yerine 'he' zamiri kullanılır.",
    },
    {
      id: "2-fb-7",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt:
        "'Mrs. Yılmaz' kadın bir kişiyi ifade ettiği için yerine _____ zamiri gelir.",
      answer: "she",
      explanation: "Kadın isim ve unvanlarının yerine 'she' zamiri kullanılır.",
    },
    {
      id: "2-fb-8",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt:
        "'Three dogs' (üç köpek) çoğul olduğu için yerine _____ zamiri kullanılır.",
      answer: "they",
      explanation:
        "Tekil hayvanlar için 'it', çoğul hayvanlar için 'they' kullanılır.",
    },
    {
      id: "2-fb-9",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt:
        "'A new phone' (yeni bir telefon) tekil bir nesne olduğu için yerine _____ zamiri kullanılır.",
      answer: "it",
      explanation: "Tekil eşya ve cihazlar için 'it' özne zamiri kullanılır.",
    },
    {
      id: "2-fb-10",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt:
        "'You and Ali' (sen ve Ali) ifadesinin yerine çoğul anlamda _____ zamiri kullanılabilir.",
      answer: "you",
      explanation:
        "Karşıdaki kişiyi içeren çoğul hitaplarda (siz) yine 'you' kullanılır.",
    },
  ],
  exercisesTrueFalse: [
    {
      id: "2-tf-1",
      subtopicId: "2-1",
      type: "true_false",
      prompt: "'You' zamiri hem 'sen' hem 'siz' anlamına gelebilir.",
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation: "İngilizcede 'you' tekil ve çoğul için aynıdır.",
    },
    {
      id: "2-tf-2",
      subtopicId: "2-1",
      type: "true_false",
      prompt:
        "Çoğul nesneler (örneğin 'cars' - arabalar) için 'it' zamiri kullanılır.",
      options: ["Doğru", "Yanlış"],
      correctIndex: 1,
      explanation:
        "'It' yalnızca tekil nesneler, hayvanlar veya durumlar içindir; çoğul nesneler için 'they' kullanılır.",
    },
    {
      id: "2-tf-3",
      subtopicId: "2-1",
      type: "true_false",
      prompt:
        "'I' zamiri cümlenin ortasında yer aldığında küçük harfle ('i') yazılır.",
      options: ["Doğru", "Yanlış"],
      correctIndex: 1,
      explanation:
        "'I' zamiri cümle başı veya ortası fark etmeksizin her zaman büyük harfle yazılır.",
    },
    {
      id: "2-tf-4",
      subtopicId: "2-1",
      type: "true_false",
      prompt:
        "'They' zamiri hem insanlar hem de çoğul nesneler için kullanılabilir.",
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation:
        "'They' (onlar) zamiri çoğul insan grupları, hayvanlar ve eşyalar için ortaktır.",
    },
    {
      id: "2-tf-5",
      subtopicId: "2-1",
      type: "true_false",
      prompt: "'We' zamiri konuşan kişiyi de içine alan bir grubu ifade eder.",
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation: "'We' (biz) zamiri her zaman konuşan kişiyi ('I') kapsar.",
    },
    {
      id: "2-tf-6",
      subtopicId: "2-1",
      type: "true_false",
      prompt:
        "İngilizcede 'we' ve 'they' zamirlerinde kadın-erkek ayrımı vardır.",
      options: ["Doğru", "Yanlış"],
      correctIndex: 1,
      explanation:
        "Cinsiyet ayrımı yalnızca tekil üçüncü şahıslarda ('he' ve 'she') bulunur; 'we' ve 'they' cinsiyet ayrımı yapmaz.",
    },
    {
      id: "2-tf-7",
      subtopicId: "2-1",
      type: "true_false",
      prompt:
        "Saat, gün veya hava durumundan bahsederken özne olarak 'it' kullanılır.",
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation:
        "Soyut durumlar, zaman ve hava koşulları için İngilizcede 'it' öznesi kullanılır.",
    },
    {
      id: "2-tf-8",
      subtopicId: "2-1",
      type: "true_false",
      prompt:
        "'My uncle' (amcam/dayım) ifadesinin yerine 'she' zamiri kullanılır.",
      options: ["Doğru", "Yanlış"],
      correctIndex: 1,
      explanation:
        "'My uncle' erkek bir akrabayı ifade ettiği için 'he' zamiri kullanılmalıdır.",
    },
    {
      id: "2-tf-9",
      subtopicId: "2-1",
      type: "true_false",
      prompt:
        "Özne zamirleri İngilizcede cümlenin kimin hakkında olduğunu gösterir.",
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation:
        "Özne zamirleri cümlede eylemi yapan veya hakkında konuşulan özneyi temsil eder.",
    },
    {
      id: "2-tf-10",
      subtopicId: "2-1",
      type: "true_false",
      prompt:
        "'A table and a chair' (bir masa ve bir sandalye) ifadesinin yerine 'it' zamiri getirilir.",
      options: ["Doğru", "Yanlış"],
      correctIndex: 1,
      explanation:
        "İki nesneden bahsedildiği için özne çoğuldur ve yerine 'they' zamiri gelir.",
    },
  ],
  exercisesMatching: [
    {
      id: "2-match-1",
      subtopicId: "2-1",
      type: "matching",
      prompt: "Özne zamirlerini Türkçe karşılıklarıyla eşleştir.",
      pairs: [
        { left: "I", right: "ben" },
        { left: "he", right: "o (erkek)" },
        { left: "she", right: "o (kadın)" },
        { left: "it", right: "o (nesne)" },
        { left: "we", right: "biz" },
        { left: "they", right: "onlar" },
      ],
    },
    {
      id: "2-match-2",
      subtopicId: "2-1",
      type: "matching",
      prompt: "Verilen isim ve ifadeleri uygun özne zamirleriyle eşleştir.",
      pairs: [
        { left: "Mehmet", right: "he" },
        { left: "Elif", right: "she" },
        { left: "a computer (bir bilgisayar)", right: "it" },
        { left: "Ali and I (Ali ve ben)", right: "we" },
        { left: "Selin and Mert", right: "they" },
        { left: "you and your friend", right: "you" },
      ],
    },
    {
      id: "2-match-3",
      subtopicId: "2-1",
      type: "matching",
      prompt: "Aile bireylerini uygun özne zamirleriyle eşleştir.",
      pairs: [
        { left: "my father (babam)", right: "he" },
        { left: "my mother (annem)", right: "she" },
        { left: "my parents (ebeveynlerim)", right: "they" },
        { left: "my sister and I", right: "we" },
        { left: "our house (evimiz)", right: "it" },
      ],
    },
    {
      id: "2-match-4",
      subtopicId: "2-1",
      type: "matching",
      prompt: "Tekil ve çoğul nesneleri doğru zamirlerle eşleştir.",
      pairs: [
        { left: "a book (bir kitap)", right: "it" },
        { left: "books (kitaplar)", right: "they" },
        { left: "the sun (güneş)", right: "it" },
        { left: "the stars (yıldızlar)", right: "they" },
      ],
    },
    {
      id: "2-match-5",
      subtopicId: "2-1",
      type: "matching",
      prompt: "Özne zamirlerini kullanım alanlarıyla eşleştir.",
      pairs: [
        { left: "I", right: "Konuşan kişi" },
        { left: "you", right: "Karşıdaki kişi veya kişiler" },
        { left: "he", right: "Tekil erkek kişi" },
        { left: "she", right: "Tekil kadın kişi" },
        { left: "it", right: "Tekil nesne, hayvan veya durum" },
      ],
    },
    {
      id: "2-match-6",
      subtopicId: "2-1",
      type: "matching",
      prompt: "Kişi gruplarını karşılık gelen zamirlerle eşleştir.",
      pairs: [
        { left: "You and I (Sen ve ben)", right: "we" },
        { left: "You and Can (Sen ve Can)", right: "you" },
        { left: "Can and Ece (Can ve Ece)", right: "they" },
        { left: "Only Can (Sadece Can)", right: "he" },
        { left: "Only Ece (Sadece Ece)", right: "she" },
      ],
    },
    {
      id: "2-match-7",
      subtopicId: "2-1",
      type: "matching",
      prompt: "Hayvan ve doğa ifadelerini uygun zamirlerle eşleştir.",
      pairs: [
        { left: "a bird (bir kuş)", right: "it" },
        { left: "two birds (iki kuş)", right: "they" },
        { left: "the rain (yağmur)", right: "it" },
        { left: "the trees (ağaçlar)", right: "they" },
      ],
    },
    {
      id: "2-match-8",
      subtopicId: "2-1",
      type: "matching",
      prompt: "Meslek sahibi kişileri uygun özne zamirleriyle eşleştir.",
      pairs: [
        { left: "Mr. Kaya (erkek öğretmen)", right: "he" },
        { left: "Ms. Aydın (kadın doktor)", right: "she" },
        { left: "the doctors (doktorlar)", right: "they" },
        { left: "the hospital (hastane)", right: "it" },
      ],
    },
    {
      id: "2-match-9",
      subtopicId: "2-1",
      type: "matching",
      prompt: "Türkçe özne ifadelerini İngilizce karşılıklarıyla eşleştir.",
      pairs: [
        { left: "ben", right: "I" },
        { left: "sen / siz", right: "you" },
        { left: "biz", right: "we" },
        { left: "onlar", right: "they" },
      ],
    },
    {
      id: "2-match-10",
      subtopicId: "2-1",
      type: "matching",
      prompt:
        "Cümle başındaki özneleri yerlerine geçebilecek zamirlerle eşleştir.",
      pairs: [
        { left: "İstanbul", right: "it" },
        { left: "Ahmet", right: "he" },
        { left: "Zeynep", right: "she" },
        { left: "Ahmet, Zeynep and I", right: "we" },
        { left: "İstanbul and Ankara", right: "they" },
      ],
    },
  ],
  exercisesCrossword: [
    {
      id: "2-cw-1",
      subtopicId: "2-1",
      type: "crossword",
      rows: 9,
      cols: 11,
      clues: [
        {
          number: 1,
          direction: "across",
          text: "Kadın kişi için özne zamiri",
          answer: "SHE",
          row: 0,
          col: 0,
        },
        {
          number: 2,
          direction: "down",
          text: "Erkek kişi için özne zamiri",
          answer: "HE",
          row: 0,
          col: 1,
        },
        {
          number: 3,
          direction: "across",
          text: "**\\Onlar\\** anlamında özne zamiri",
          answer: "THEY",
          row: 2,
          col: 0,
        },
        {
          number: 4,
          direction: "down",
          text: "**\\Ben\\** anlamında özne zamiri",
          answer: "I",
          row: 1,
          col: 0,
        },
        {
          number: 5,
          direction: "across",
          text: "**\\Sen\\** veya **\\siz\\** için özne zamiri",
          answer: "YOU",
          row: 0,
          col: 3,
        },
        {
          number: 6,
          direction: "down",
          text: "Nesne, hayvan veya durum için özne zamiri",
          answer: "IT",
          row: 1,
          col: 5,
        },
        {
          number: 7,
          direction: "across",
          text: "**\\Biz\\** anlamında özne zamiri",
          answer: "WE",
          row: 4,
          col: 0,
        },
        {
          number: 8,
          direction: "across",
          text: "Erkek çocuk (genelde **\\he\\** ile anlatılır)",
          answer: "BOY",
          row: 5,
          col: 8,
        },
        {
          number: 9,
          direction: "across",
          text: "Kız çocuk (genelde **\\she\\** ile anlatılır)",
          answer: "GIRL",
          row: 6,
          col: 0,
        },
        {
          number: 10,
          direction: "across",
          text: "Yetişkin erkek; çoğu zaman **\\he\\** ile kullanılır",
          answer: "MAN",
          row: 7,
          col: 3,
        },
        {
          number: 11,
          direction: "across",
          text: "Erkek cinsiyet sıfatı",
          answer: "MALE",
          row: 3,
          col: 6,
        },
        {
          number: 12,
          direction: "across",
          text: "Birden fazla kadın; **\\they\\** ile anlatılır",
          answer: "WOMEN",
          row: 8,
          col: 0,
        },
        {
          number: 13,
          direction: "down",
          text: "**\\She\\** zamiriyle eşleşen nesne zamiri",
          answer: "HER",
          row: 0,
          col: 8,
        },
        {
          number: 14,
          direction: "across",
          text: "**\\He\\** zamiriyle eşleşen nesne zamiri",
          answer: "HIM",
          row: 5,
          col: 5,
        },
        {
          number: 15,
          direction: "across",
          text: "**\\We\\** ile eşleşen nesne zamiri",
          answer: "US",
          row: 8,
          col: 6,
        },
      ],
    },
  ],
  exercisesListening: [
    {
      id: "2-listen-01",
      subtopicId: "2-1",
      type: "listening",
      prompt: "Dinlediğini İngilizce olarak yaz.",
      speakText: "it",
      answer: "it",
      acceptedAnswers: ["it"],
    },
  ],
  quiz: [
    {
      id: "quiz-2-1",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt: "Hayvan veya eşya için hangi zamir kullanılır?",
      options: ["he", "she", "it", "we"],
      correctIndex: 2,
      explanation: "Hayvan, eşya ve durum için 'it' kullanılır.",
    },
    {
      id: "quiz-2-2",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "Aşağıdaki ifadelerden hangisinin yerine 'we' özne zamiri getirilebilir?",
      options: [
        "My sister and my mother",
        "You and I",
        "The cat and the dog",
        "Mr. Yılmaz",
      ],
      correctIndex: 1,
      explanation:
        "'You and I' (Sen ve ben) ifadesi konuşanı da kapsadığı için 'we' (biz) zamirine karşılık gelir.",
    },
    {
      id: "quiz-2-3",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "'My father is a doctor. _____ works at a hospital.' cümlesinde boşluğa hangisi gelmelidir?",
      options: ["She", "It", "He", "They"],
      correctIndex: 2,
      explanation:
        "'My father' (babam) erkek bir kişi olduğu için yerine 'He' zamiri kullanılır.",
    },
    {
      id: "quiz-2-4",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "'The apples are on the table. _____ are red.' cümlesinde boşluğa hangi zamir gelmelidir?",
      options: ["It", "They", "We", "You"],
      correctIndex: 1,
      explanation:
        "'The apples' (elmalar) çoğul bir nesne grubudur; bu nedenle 'it' değil 'They' kullanılır.",
    },
    {
      id: "quiz-2-5",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt:
        "'My sister is a student. _____ is 20 years old.' cümlesindeki boşluğu uygun zamirle tamamla.",
      answer: "She",
      explanation:
        "'My sister' (kız kardeşim) kadın olduğu için cümle başında 'She' zamiri kullanılır.",
    },
    {
      id: "quiz-2-6",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt:
        "'Look at that car! _____ is very fast.' cümlesindeki boşluğu uygun zamirle tamamla.",
      answer: "It",
      explanation:
        "'That car' (şu araba) tekil bir nesne olduğu için 'It' zamiri kullanılır.",
    },
    {
      id: "quiz-2-7",
      subtopicId: "2-1",
      type: "true_false",
      prompt:
        "İngilizcede 'he', 'she' ve 'it' zamirlerinin üçü de Türkçeye 'o' olarak çevrilir.",
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation:
        "Türkçede tek bir 'o' zamiri bulunurken İngilizcede bu anlam cinsiyet ve canlılığa göre 'he', 'she' ve 'it' olarak üçe ayrılır.",
    },
    {
      id: "quiz-2-8",
      subtopicId: "2-1",
      type: "true_false",
      prompt:
        "'You' zamiri yalnızca tek bir kişiye hitap ederken kullanılır; çoğul kişiler için 'they' kullanılır.",
      options: ["Doğru", "Yanlış"],
      correctIndex: 1,
      explanation:
        "'You' hem 'sen' (tekil) hem de 'siz' (çoğul) için kullanılır; 'they' ise konuşma dışındaki üçüncü şahıslar (onlar) içindir.",
    },
    {
      id: "quiz-2-9",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "Hangi seçenekte İngilizcedeki 7 özne zamirinin tamamı doğru verilmiştir?",
      options: [
        "I, you, he, she, it, we, they",
        "I, me, you, he, she, we, they",
        "I, you, his, her, it, we, them",
        "I, you, he, she, it, us, they",
      ],
      correctIndex: 0,
      explanation:
        "İngilizcedeki 7 özne zamiri sırasıyla: I, you, he, she, it, we ve they'dir.",
    },
    {
      id: "quiz-2-10",
      subtopicId: "2-1",
      type: "matching",
      prompt:
        "Cümlelerdeki özne ifadelerini karşılık gelen zamirlerle eşleştir.",
      pairs: [
        { left: "The weather (Hava)", right: "it" },
        { left: "My brother and I", right: "we" },
        { left: "Mrs. Kaya", right: "she" },
        { left: "Mr. Demir", right: "he" },
        { left: "The students", right: "they" },
      ],
    },
    {
      id: "quiz-2-11",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "'Emre and I are brothers. _____ live in İstanbul.' cümlesinde boşluğa hangi zamir gelmelidir?",
      options: ["They", "We", "You", "He"],
      correctIndex: 1,
      explanation:
        "Konuşan kişiyi ('I') içeren çoğul özneler için 'We' zamiri kullanılır.",
    },
    {
      id: "quiz-2-12",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "'Where is my bag? _____ is on the chair.' cümlesinde boşluğa hangi zamir gelmelidir?",
      options: ["He", "She", "It", "They"],
      correctIndex: 2,
      explanation:
        "'My bag' (çantam) tekil bir eşya olduğu için yerine 'It' kullanılır.",
    },
    {
      id: "quiz-2-13",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt:
        "'Hello! _____ am Ömer.' cümlesindeki boşluğu uygun özne zamiriyle doldur.",
      answer: "I",
      explanation:
        "Kişi kendisinden bahsederken her zaman büyük harfle yazılan 'I' zamirini kullanır.",
    },
    {
      id: "quiz-2-14",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt:
        "'Ali and Veli are at the park. _____ are playing football.' cümlesindeki boşluğu tamamla.",
      answer: "They",
      explanation:
        "Ali ve Veli (onlar) üçüncü çoğul şahıs olduğu için 'They' kullanılır.",
    },
    {
      id: "quiz-2-15",
      subtopicId: "2-1",
      type: "true_false",
      prompt:
        "İngilizcede 'she' zamiri yalnızca kadın kişiler için kullanılır.",
      options: ["Doğru", "Yanlış"],
      correctIndex: 0,
      explanation:
        "'She' zamiri tekil kadın özneleri ifade etmek için kullanılır.",
    },
    {
      id: "quiz-2-16",
      subtopicId: "2-1",
      type: "true_false",
      prompt:
        "'My phone and my laptop' ifadesinin yerine tekil olduğu için 'it' zamiri kullanılır.",
      options: ["Doğru", "Yanlış"],
      correctIndex: 1,
      explanation:
        "İki ayrı eşyadan (telefonum ve dizüstü bilgisayarım) bahsedildiği için özne çoğuldur ve 'they' kullanılmalıdır.",
    },
    {
      id: "quiz-2-17",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt:
        "'Ayşe is my friend. _____ is very kind.' cümlesinde boşluğa hangisi gelmelidir?",
      options: ["He", "She", "It", "We"],
      correctIndex: 1,
      explanation:
        "Ayşe kadın ismi olduğu için özne zamiri olarak 'She' kullanılır.",
    },
    {
      id: "quiz-2-18",
      subtopicId: "2-1",
      type: "multiple_choice",
      prompt: "Aşağıdaki eşleştirmelerden hangisi yanlıştır?",
      options: [
        "a dog → it",
        "two dogs → they",
        "my brother → he",
        "my grandmother → he",
      ],
      correctIndex: 3,
      explanation:
        "'My grandmother' (büyükannem) kadın olduğu için 'he' değil 'she' ile eşleşmelidir.",
    },
    {
      id: "quiz-2-19",
      subtopicId: "2-1",
      type: "fill_blank",
      prompt:
        "'Ahmet is a good engineer. _____ works very hard.' cümlesindeki boşluğu tamamla.",
      answer: "He",
      explanation:
        "Ahmet erkek ismi olduğu için cümlenin devamında yerine 'He' zamiri kullanılır.",
    },
    {
      id: "quiz-2-20",
      subtopicId: "2-1",
      type: "matching",
      prompt: "İngilizce zamirleri Türkçe anlamlarıyla son kez eşleştir.",
      pairs: [
        { left: "I", right: "ben" },
        { left: "you", right: "sen / siz" },
        { left: "he", right: "o (erkek)" },
        { left: "she", right: "o (kadın)" },
        { left: "it", right: "o (nesne / hayvan)" },
        { left: "we", right: "biz" },
        { left: "they", right: "onlar" },
      ],
    },
  ],
};
