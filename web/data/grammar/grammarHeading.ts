export type GrammarHeading = {
  id: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  title: string;
  titleEng: string;
  titleEx: string;
};

export const grammarHeadings: GrammarHeading[] = [
  //! ==================== A1: TEMEL YAPI TAŞLARI ====================
  {
    id: "1",
    level: "A1",
    title: "Alfabe & Ses Bilgisi",
    titleEng: "Alphabet & Basic Phonics",
    titleEx: "A, B, C — C is /k/ in cat and /s/ in city.",
  },
  {
    id: "2",
    level: "A1",
    title: "Özne Zamirleri & 'To Be' Fiili",
    titleEng: "Subject Pronouns & 'To Be'",
    titleEx: "I am a developer. She is happy. They are here.",
  },
  {
    id: "3",
    level: "A1",
    title: "Tanımlıklar & Çoğul İsimler",
    titleEng: "Articles & Plural Nouns",
    titleEx: "a book, an apple, the sun, two dogs, three cities",
  },
  {
    id: "4",
    level: "A1",
    title: "İşaret Sıfatları & Zamirleri",
    titleEng: "Demonstratives (This, That, These, Those)",
    titleEx: "This is my laptop. Those are her keys.",
  },
  {
    id: "5",
    level: "A1",
    title: "İyelik Sıfatları, Zamirleri & -'s Eki",
    titleEng: "Possessives & Possessive 's",
    titleEx: "My car is blue. That is Ahmet's phone. It is mine.",
  },
  {
    id: "6",
    level: "A1",
    title: "Temel Soru Kelimeleri",
    titleEng: "Basic Question Words (Wh- Questions)",
    titleEx: "What is this? Who is that? Where are you from?",
  },
  {
    id: "7",
    level: "A1",
    title: "Varlık Bildirme: There is / There are",
    titleEng: "There is / There are",
    titleEx: "There is a cat on the sofa. Are there any chairs?",
  },
  {
    id: "8",
    level: "A1",
    title: "Zaman & Yer Edatları",
    titleEng: "Prepositions of Time & Place",
    titleEx: "at 5 o'clock, in Istanbul, on Monday, under the table",
  },
  {
    id: "9",
    level: "A1",
    title: "Sahiplik Bildirme: Have got / Has got",
    titleEng: "Possession: Have got / Has got",
    titleEx: "I have got two sisters. He hasn't got a car.",
  },
  {
    id: "10",
    level: "A1",
    title: "Emir Kipleri & Nesne Zamirleri",
    titleEng: "Imperatives & Object Pronouns",
    titleEx: "Listen to me. Open your book. Call him later.",
  },
  {
    id: "11",
    level: "A1",
    title: "Geniş Zaman & Sıklık Zarfları",
    titleEng: "Present Simple & Adverbs of Frequency",
    titleEx: "I work every day. She always drinks coffee in the morning.",
  },
  {
    id: "12",
    level: "A1",
    title: "Şimdiki Zaman",
    titleEng: "Present Continuous",
    titleEx: "She is reading a book right now. We are learning English.",
  },
  {
    id: "13",
    level: "A1",
    title: "Kipler: Yapabilmek & İzin (Can / Can't)",
    titleEng: "Modals: Can / Can't",
    titleEx: "I can swim well. Can I sit here?",
  },
  {
    id: "14",
    level: "A1",
    title: "Sayılabilen/Sayılamayan İsimler & Miktar Belirteçleri",
    titleEng: "Countable / Uncountable & Quantifiers",
    titleEx: "some water, any apples, many books, a lot of time",
  },
  {
    id: "15",
    level: "A1",
    title: "Temel Bağlaçlar",
    titleEng: "Basic Conjunctions (and, but, or, because, so)",
    titleEx: "I stayed home because it was cold, so I watched a film.",
  },

  //! ==================== A2: ZAMANLAR VE KARŞILAŞTIRMA ====================
  {
    id: "16",
    level: "A2",
    title: "Di'li Geçmiş Zaman (Was/Were & Fiiller)",
    titleEng: "Past Simple (To Be & Regular/Irregular Verbs)",
    titleEx: "We visited London last year. She was tired yesterday.",
  },
  {
    id: "17",
    level: "A2",
    title: "Geçmişte Süreklilik Zamanı",
    titleEng: "Past Continuous",
    titleEx: "It was raining at 8 PM when I arrived home.",
  },
  {
    id: "18",
    level: "A2",
    title: "Sıfatlar & Durum Zarfları",
    titleEng: "Adjectives & Adverbs of Manner",
    titleEx: "He is a careful driver. He drives carefully.",
  },
  {
    id: "19",
    level: "A2",
    title: "Karşılaştırma & En Üstünlük Dereceleri",
    titleEng: "Comparatives & Superlatives",
    titleEx: "Istanbul is bigger than Ankara. It is the largest city.",
  },
  {
    id: "20",
    level: "A2",
    title: "Gelecek Zaman (Will vs. Going to)",
    titleEng: "Future Forms: Will, Going to & Present Continuous",
    titleEx: "I think it will rain. / I am going to study tonight.",
  },
  {
    id: "21",
    level: "A2",
    title: "Yakın Geçmiş Zaman",
    titleEng: "Present Perfect Simple (ever, never, just, already, yet)",
    titleEx: "I have seen that movie before. Have you finished yet?",
  },
  {
    id: "22",
    level: "A2",
    title: "Yakın Geçmiş ve Di'li Geçmiş Zaman Farkı",
    titleEng: "Present Perfect vs. Past Simple (for & since)",
    titleEx: "I have lived here since 2020. I moved here six years ago.",
  },
  {
    id: "23",
    level: "A2",
    title: "Kipler: Zorunluluk, Yasak & Tavsiye",
    titleEng: "Modals: Must, Have to, Should",
    titleEx: "You should rest. / You mustn't park here.",
  },
  {
    id: "24",
    level: "A2",
    title: "Belgisiz Zamirler",
    titleEng: "Indefinite Pronouns (someone, anything, nowhere)",
    titleEx: "Someone is at the door. I didn't buy anything.",
  },
  {
    id: "25",
    level: "A2",
    title: "Temel Fiil Kalıpları",
    titleEng: "Basic Verb Patterns (Verb + -ing / to-infinitive)",
    titleEx: "I enjoy coding. / She wants to travel abroad.",
  },
  {
    id: "26",
    level: "A2",
    title: "Temel Koşul Cümleleri (Tip 0 & Tip 1)",
    titleEng: "Zero & First Conditionals",
    titleEx: "If you heat ice, it melts. / If it rains, I will stay home.",
  },

  //! ==================== B1: KARMAŞIK CÜMLE YAPILARI ====================
  {
    id: "27",
    level: "B1",
    title: "Geçmişteki Alışkanlıklar (Used to & Would)",
    titleEng: "Past Habits: Used to & Would",
    titleEx: "I used to play chess every weekend when I was a child.",
  },
  {
    id: "28",
    level: "B1",
    title: "Süregelen Yakın Geçmiş Zaman",
    titleEng: "Present Perfect Continuous",
    titleEx: "I have been learning English for two years.",
  },
  {
    id: "29",
    level: "B1",
    title: "Miş'li Geçmiş Zaman",
    titleEng: "Past Perfect Simple",
    titleEx: "When I arrived at the station, the train had already left.",
  },
  {
    id: "30",
    level: "B1",
    title: "Derecelendirme ve Karşılaştırma Yapıları",
    titleEng: "As...as, Too & Enough",
    titleEx: "This laptop isn't fast enough. It's as expensive as yours.",
  },
  {
    id: "31",
    level: "B1",
    title: "Tahmin ve Olasılık Kipleri",
    titleEng: "Modals of Deduction & Possibility (Present)",
    titleEx: "The lights are off; they must be asleep. He might be late.",
  },
  {
    id: "32",
    level: "B1",
    title: "Eklenti Soruları (Question Tags)",
    titleEng: "Question Tags",
    titleEx: "You live in Istanbul, don't you? She isn't coming, is she?",
  },
  {
    id: "33",
    level: "B1",
    title: "Koşul Cümleleri (Tip 2 & Tip 1-2 Karşılaştırması)",
    titleEng: "Second Conditional (Unreal Present)",
    titleEx: "If I won the lottery, I would buy a house by the sea.",
  },
  {
    id: "34",
    level: "B1",
    title: "Sıfat Cümlecikleri (Tanımlayan & Tanımlamayan)",
    titleEng: "Defining & Non-defining Relative Clauses",
    titleEx:
      "The man who lives next door is a doctor. / My car, which is old, still runs well.",
  },
  {
    id: "35",
    level: "B1",
    title: "Edilgen Çatı (Temel Zamanlar)",
    titleEng: "Passive Voice (Core Tenses)",
    titleEx: "The letter was sent yesterday. English is spoken worldwide.",
  },
  {
    id: "36",
    level: "B1",
    title: "İsim Fiiller & Mastarlar (Anlam Değiştirenler)",
    titleEng: "Gerunds & Infinitives",
    titleEx: "I stopped smoking. / I stopped to smoke a cigarette.",
  },
  {
    id: "37",
    level: "B1",
    title: "Dolaylı Anlatım (Temel Aktarım)",
    titleEng: "Reported Speech (Statements & Questions)",
    titleEx: "He said he was tired. She asked me where I lived.",
  },

  //! ==================== B2: İLERİ DÜZEY ZAMANLAR VE NUANSLAR ====================
  {
    id: "38",
    level: "B2",
    title: "İleri Gelecek Zamanlar (Future Continuous & Future Perfect)",
    titleEng: "Future Continuous & Future Perfect",
    titleEx:
      "This time tomorrow, I will be flying to Berlin. By June, I will have graduated.",
  },
  {
    id: "39",
    level: "B2",
    title: "Süregelen Miş'li Geçmiş Zaman",
    titleEng: "Past Perfect Continuous",
    titleEx: "She was exhausted because she had been working all day.",
  },
  {
    id: "40",
    level: "B2",
    title: "Geçmişe Dönük Kipler (Perfect Modals)",
    titleEng: "Modals in the Past (should have, must have, might have)",
    titleEx: "You should have called me. He must have forgotten the meeting.",
  },
  {
    id: "41",
    level: "B2",
    title: "Koşul Cümleleri (Tip 3 & Karışık Tipler)",
    titleEng: "Third & Mixed Conditionals",
    titleEx:
      "If I had studied harder, I would have passed. / If I had taken that job, I would be rich now.",
  },
  {
    id: "42",
    level: "B2",
    title: "Dilek & Keşke Cümleleri (Wish & If Only)",
    titleEng: "Wish & If Only Clauses",
    titleEx: "I wish I had more free time. If only I hadn't said that.",
  },
  {
    id: "43",
    level: "B2",
    title: "İleri Edilgen Çatı & Ettirgen Yapılar",
    titleEng: "Advanced Passive & Causatives (have/get something done)",
    titleEx: "I had my car repaired yesterday. The bridge is being built.",
  },
  {
    id: "44",
    level: "B2",
    title: "İleri Dolaylı Anlatım Fiilleri",
    titleEng: "Reporting Verbs (deny, advise, suggest, accuse)",
    titleEx: "He denied stealing the money. She advised me to apply early.",
  },
  {
    id: "45",
    level: "B2",
    title: "Sıfat Cümleciklerinde Kısaltmalar",
    titleEng: "Reduced Relative Clauses",
    titleEx:
      "The boy standing by the gate is my brother. The book written in 1920 is rare.",
  },
  {
    id: "46",
    level: "B2",
    title: "Zıtlık, Amaç ve Sebep Cümlecikleri",
    titleEng: "Clauses of Contrast, Purpose & Reason",
    titleEx:
      "Despite the heavy rain, the match continued. I left early so that I wouldn't miss it.",
  },

  //! ==================== C1: AKADEMİK VE SOFİSTİKE YAPILAR ====================
  {
    id: "47",
    level: "C1",
    title: "Devrik Cümleler (Olumsuz & Kısıtlayıcı Zarflar)",
    titleEng: "Inversion with Negative & Limiting Adverbials",
    titleEx:
      "Seldom have I seen such a detailed analysis. Not only did he win, but he also broke the record.",
  },
  {
    id: "48",
    level: "C1",
    title: "Koşul Cümlelerinde Devriklik & Alternatif Bağlaçlar",
    titleEng: "Conditional Inversion & Alternatives to 'If'",
    titleEx:
      "Had I known about the delay, I would have stayed. Provided that you agree, we can start.",
  },
  {
    id: "49",
    level: "C1",
    title: "Bölünmüş & Vurgu Cümleleri",
    titleEng: "Cleft Sentences (It-clefts & Wh-clefts)",
    titleEx:
      "It was John who solved the bug. What I need right now is a clear answer.",
  },
  {
    id: "50",
    level: "C1",
    title: "İstek & Dilek Kipi (Subjunctive Mood)",
    titleEng: "Mandative Subjunctive Mood",
    titleEx:
      "It is essential that he be present at the hearing. They demanded that the report be revised.",
  },
  {
    id: "51",
    level: "C1",
    title: "İleri Düzey Ortaç & Ulaç Cümlecikleri",
    titleEng: "Advanced Participle Clauses",
    titleEx: "Having completed the project, she presented it to the board.",
  },
  {
    id: "52",
    level: "C1",
    title: "Mesafe Koyma & Kesinlikten Kaçınma Yapıları",
    titleEng: "Distancing & Hedging Language",
    titleEx:
      "The suspect is alleged to have fled the country. It is widely believed that markets will recover.",
  },
  {
    id: "53",
    level: "C1",
    title: "Eksiltme, Yerine Koyma & Söylem Belirleyicileri",
    titleEng: "Ellipsis, Substitution & Advanced Discourse Markers",
    titleEx:
      "A: Will they join us? B: I hope so. / Notwithstanding the high costs, the plan succeeded.",
  },

  //! ==================== C2: ANA DİL DÜZEYİNDE ÜSLUP VE NÜANS ====================
  {
    id: "54",
    level: "C2",
    title: "Üslupsal Öne Çıkarma & Ödünleme Yapıları",
    titleEng: "Stylistic Fronting & Concessive Inversion",
    titleEx:
      "Rich as he was, he lived humbly. Try as he might, he couldn't convince the committee.",
  },
  {
    id: "55",
    level: "C2",
    title: "Gerçek Dışı Geçmiş & Geçmişte Gelecek Nüansları",
    titleEng: "Unreal Past & Future in the Past",
    titleEx:
      "It is high time we addressed this issue. The treaty was to have been signed in Geneva.",
  },
  {
    id: "56",
    level: "C2",
    title: "İleri Düzey İsimleştirme & Sözdizimsel Yoğunluk",
    titleEng: "Advanced Nominalization & Syntactic Density",
    titleEx:
      "The rapid proliferation of AI tools necessitated an immediate overhaul of existing regulations.",
  },
  {
    id: "57",
    level: "C2",
    title: "Kalıplaşmış İstek Kipleri & Biçem/Ton Nüansları",
    titleEng: "Fixed Subjunctives, Register & Tone Nuances",
    titleEx:
      "Be that as it may, we must proceed. Suffice it to say, the outcome was far from satisfactory.",
  },
];
