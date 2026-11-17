export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type GrammarHeading = {
  id: string;
  level: CefrLevel;
  title: string;
  titleEng: string;
  titleEx: string;
  intro: string;
};

export const grammarHeadings: Record<CefrLevel, GrammarHeading[]> = {
  A1: [
    {
      id: "1",
      level: "A1",
      title: "Alfabe & Ses Bilgisi",
      titleEng: "Alphabet & Basic Phonics",
      titleEx: "A, B, C — C is /k/ in cat and /s/ in city.",
      intro:
        "İngilizce kelimeleri doğru okumaya, hecelemeye ve ana dili konuşanlar gibi telaffuz etmeye ilk adımı atmaya hazır mısın? Bu derste **26 harflik** İngilizce alfabeyi, harflerin tekil adlarını ve kelime içindeki gerçek ses değerlerini detaylıca keşfedeceksin. **Ünlü** ile **ünsüz harfleri** ayırt etmeyi, **C** ve **Y** gibi yanındaki harfe göre ses değiştiren karakterleri tanımayı ve **sh, ch, th** gibi birleşik harfleri tek ses olarak okumayı öğreneceksin. Ayrıca kısa ve uzun ünlü seslerin yazım kurallarını kavrayarak yeni karşılaştığın kelimeleri bile tereddüt etmeden seslendirebileceksin.",
    },
    {
      id: "2",
      level: "A1",
      title: "Temel Cümle Yapısı",
      titleEng: "Basic Sentence Structure",
      titleEx: "The dog runs. We eat pizza. She reads books.",
      intro:
        "İngilizce cümlelerin içindeki temel parçaları tanıyıp kendi düşüncelerini doğru sırayla kurmaya hazır mısın? Bu derste **özne**, **fiil** ve **nesne** bileşenlerinin cümledeki standart **SVO** (Subject-Verb-Object) dizilimini ve **olmak** ile **eylem** cümleleri arasındaki farkı keşfedeceksin. Olumlu cümle kurmanın yanında temel **olumsuz** ve **soru** yapılarının iskeletini örneklerle inceleyeceksin. Dersin sonunda günlük hayatındaki basit olayları tek tek veya birkaç cümleyle hatasız İngilizceye aktarabileceksin.",
    },
    {
      id: "3",
      level: "A1",
      title: "Özne Zamirleri & 'To Be' Fiili",
      titleEng: "Subject Pronouns & 'To Be'",
      titleEx: "I am a developer. She is happy. They are here.",
      intro:
        "Kendini tanıtmak, mesleğini söylemek ve etrafındaki dünyayı tanımlamak için İngilizcenin en temel yapı taşlarını öğrenmeye hazır mısın? Bu derste **I, you, he, she, it, we, they** özne zamirlerini ve **to be** fiilinin **am, is, are** çekimlerini kapsamlı şekilde keşfedeceksin. Olumlu, olumsuz ve soru cümlelerinin yanı sıra günlük konuşmada sıkça kullanılan kısaltmaları (**I'm, she's, aren't**) inceleyeceksin. Dersin sonunda kim olduğunu, nerede bulunduğunu ve nasıl hissettiğini akıcı ve hatasız cümlelerle ifade edebileceksin.",
    },
    {
      id: "4",
      level: "A1",
      title: "Tanımlıklar & Çoğul İsimler",
      titleEng: "Articles & Plural Nouns",
      titleEx: "a book, an apple, the sun, two dogs, three cities",
      intro:
        "İngilizce isimlerin önüne gelen küçük ama anlamı doğrudan etkileyen tanımlıkları doğru seçmeye hazır mısın? Bu derste belirsiz tanımlıklar **a** ve **an** ile belirli tanımlık **the** kullanımının temel mantığını ses ve anlam kurallarıyla keşfedeceksin. İsimleri çoğul yaparken uygulanan **-s, -es, -ies** eklerinin yanı sıra **children, people, men** gibi düzensiz çoğul isimleri de tanıyacaksın. Böylece tekil ve çoğul nesnelerden bahsederken cümlelerini İngilizce düşünme sistemine tam uyumlu kurabileceksin.",
    },
    {
      id: "5",
      level: "A1",
      title: "İşaret Sıfatları & Zamirleri",
      titleEng: "Demonstratives (This, That, These, Those)",
      titleEx: "This is my laptop. Those are her keys.",
      intro:
        "Yakınındaki veya uzağındaki nesneleri ve kişileri İngilizce olarak net bir şekilde işaret etmeye hazır mısın? Bu derste **this, that, these, those** kelimelerinin hem isimlerin önünde işaret sıfatı hem de tek başına işaret zamiri olarak kullanımlarını keşfedeceksin. Mesafe (yakın-uzak) ve sayı (tekil-çoğul) ekseninde doğru kelimeyi seçmeyi ve *to be* fiiliyle uyumlu çekimlemeyi öğreneceksin. Günlük konuşmalarda eşyaları gösterirken, alışveriş yaparken veya birini tanıştırırken bu dört temel yapıyı refleks haline getireceksin.",
    },
    {
      id: "6",
      level: "A1",
      title: "Sayılar, Tarih & Saat",
      titleEng: "Numbers, Dates & Time",
      titleEx: "It's half past three on Monday, 15 May.",
      intro:
        "Telefon numarası, yaş, randevu ve doğum günü gibi bilgileri doğru İngilizceyle söylemeye ve yazmaya hazır mısın? Bu derste **cardinal numbers** (1–100 ve ötesi), sıra bildiren **ordinal numbers** (**first, second, third**) ile tarih (**on Monday, in May, in 2024**) ve saat (**o'clock, half past, quarter to**) kalıplarını keşfedeceksin. ABD ve İngiltere tarih yazım farkları ile **a.m. / p.m.** ve **24 saat** anlatımının temelini inceleyeceksin. Dersin sonunda saat ve tarih sorularına kendinden emin, net cevaplar verebileceksin.",
    },
    {
      id: "7",
      level: "A1",
      title: "İyelik Sıfatları, Zamirleri & -'s Eki",
      titleEng: "Possessives & Possessive 's",
      titleEx: "My car is blue. That is Ahmet's phone. It is mine.",
      intro:
        "Eşyaların, fikirlerin ve aile ilişkilerinin kime ait olduğunu doğal bir İngilizceyle ifade etmeye hazır mısın? Bu derste isimlerin önüne gelen **my, your, his, her, its, our, their** iyelik sıfatları ile ismin yerini tutan **mine, yours, hers, ours, theirs** iyelik zamirleri arasındaki farkı keşfedeceksin. Ayrıca özel isimlere ve tekil-çoğul isimlere eklenen **-'s** ve **-s'** sahiplik eklerinin yazım kurallarını inceleyeceksin. Dersin sonunda sahiplik bildiren tüm yapıları birbirine karıştırmadan günlük diyaloglarında ustalıkla kullanabileceksin.",
    },
    {
      id: "8",
      level: "A1",
      title: "Sahiplik Bildirme: Have got / Has got",
      titleEng: "Possession: Have got / Has got",
      titleEx: "I have got two sisters. He hasn't got a car.",
      intro:
        "Sahip olduğun eşyaları, fiziksel özellikleri ve aile bağlarını İngilizce olarak akıcı biçimde anlatmaya hazır mısın? Bu derste özellikle İngiliz İngilizcesinde yaygın kullanılan **have got** ve **has got** sahiplik kalıplarını özne uyumlarıyla birlikte keşfedeceksin. Olumlu cümlelerin yanı sıra **haven't got / hasn't got** ile olumsuz yapıları ve soru-cevap kalıplarını detaylıca inceleyeceksin. Kardeşlerinden, evcil hayvanlarından veya sahip olduğun teknolojik cihazlardan bahsederken bu yapıyı rahatlıkla kullanabileceksin.",
    },
    {
      id: "9",
      level: "A1",
      title: "Temel Sıfatlar & Sıfat Sırası",
      titleEng: "Basic Adjectives & Adjective Order",
      titleEx: "a small blue Italian car. She is very happy.",
      intro:
        "Kişileri, nesneleri ve durumları canlı ve ayrıntılı bir dille tanımlamaya hazır mısın? Bu derste isimlerin önünde veya **to be** sonrasında kullanılan temel **adjectives** (sıfatlar) ile olumlu, karşılaştırmalı ve en üstünlük anlamlarını (**-er / more**, **the -est / the most**) keşfedeceksin. Birden fazla sıfatın yan yana geldiğinde uyulması gereken **adjective order** (görüş, boyut, renk, köken vb.) kuralını örneklerle inceleyeceksin. Dersin sonunda çevrendeki insan ve nesneleri doğal, zengin sıfatlarla tanımlayabileceksin.",
    },
    {
      id: "10",
      level: "A1",
      title: "Zaman & Yer Edatları",
      titleEng: "Prepositions of Time & Place",
      titleEx: "at 5 o'clock, in Istanbul, on Monday, under the table",
      intro:
        "Olayların tam olarak ne zaman gerçekleştiğini ve nesnelerin nerede bulunduğunu eksiksiz ifade etmeye hazır mısın? Bu derste saatler, günler, aylar, mevsimler ve şehirlerle kullanılan **at, in, on** zaman ve yer edatlarının temel mantığını keşfedeceksin. Ayrıca **under, next to, between, behind, in front of** gibi konum bildiren yer edatlarıyla nesnelerin birbirine göre duruşunu tarif etmeyi öğreneceksin. Randevu planlarken veya yol tarifi verirken en sık hata yapılan edat kullanımlarını kalıcı olarak çözeceksin.",
    },
    {
      id: "11",
      level: "A1",
      title: "Sayılabilen/Sayılamayan İsimler & Miktar Belirteçleri",
      titleEng: "Countable / Uncountable & Quantifiers",
      titleEx: "some water, any apples, many books, a lot of time",
      intro:
        "Nesnelerin, yiyeceklerin ve soyut kavramların miktarını İngilizce mantığına uygun şekilde belirtmeye hazır mısın? Bu derste tekil-çoğul yapılabilen sayılabilen isimler ile tekil kabul edilen sayılamayan isimler (**water, money, time, information**) arasındaki ayrımı keşfedeceksin. Olumlu, olumsuz ve soru cümlelerine göre **some, any, many, much, a lot of** miktar belirteçlerini nasıl seçeceğini inceleyeceksin. Alışverişte, restoranda ve günlük sohbette miktar ifadelerini hatasız kullanabileceksin.",
    },
    {
      id: "12",
      level: "A1",
      title: "How much / How many",
      titleEng: "How much / How many",
      titleEx: "How much water do you need? How many chairs are there?",
      intro:
        "Sayılabilen ve sayılamayan isimlerin miktarını doğru soru kalıplarıyla öğrenmeye hazır mısın? Bu derste sayılamayan isimler için **How much** ile sayılabilen çoğul isimler için **How many** ayrımını ve cevap cümlelerinde **some, a lot of, a little, a few** gibi miktar belirteçlerini keşfedeceksin. **There is / There are** ve günlük alışveriş diyaloglarında bu soruların nasıl kullanıldığını inceleyeceksin. Dersin sonunda restoranda, markette ve günlük sohbette miktar sorularını hatasız kurabileceksin.",
    },
    {
      id: "13",
      level: "A1",
      title: "Varlık Bildirme: There is / There are",
      titleEng: "There is / There are",
      titleEx: "There is a cat on the sofa. Are there any chairs?",
      intro:
        "Bulunduğun odayı, yaşadığın şehri veya çevrende nelerin var olduğunu canlı bir şekilde tarif etmeye hazır mısın? Bu derste bir yerde bir şeyin varlığını veya yokluğunu bildiren **There is** ve **There are** kalıplarını tekil ve çoğul ayrımlarıyla keşfedeceksin. Olumlu cümlelerin yanında **isn't / aren't** ile olumsuz ifadeleri, **Is there / Are there** ile soru yapılarını ve kısa cevapları inceleyeceksin. Mekanları, evini veya masanın üzerindeki nesneleri anlatırken bu yapıyı çok doğal biçimde kullanabileceksin.",
    },
    {
      id: "14",
      level: "A1",
      title: "Geniş Zaman & Sıklık Zarfları",
      titleEng: "Present Simple & Adverbs of Frequency",
      titleEx: "I work every day. She always drinks coffee in the morning.",
      intro:
        "Günlük rutinlerini, alışkanlıklarını, hobilerini ve değişmeyen genel gerçekleri İngilizce anlatmaya hazır mısın? Bu derste **Present Simple** (Geniş Zaman) yapısının kurallarını ve **always, usually, often, sometimes, rarely, never** sıklık zarflarının cümle içindeki yerini keşfedeceksin. Üçüncü tekil şahıs (**he, she, it**) çekimlerinde fiile eklenen **-s / -es / -ies** takılarını ve olumsuz/soru cümlelerindeki **do / does** yardımcı fiillerini öğreneceksin. Kendi günlük yaşam düzenini başından sonuna kadar akıcı biçimde anlatabileceksin.",
    },
    {
      id: "15",
      level: "A1",
      title: "Evet-Hayır Soruları & Kısa Cevaplar",
      titleEng: "Yes/No Questions & Short Answers",
      titleEx: "Do you like coffee? — Yes, I do. / No, I don't.",
      intro:
        "Karşındakine **evet** veya **hayır** ile cevaplanabilecek net sorular sormaya hazır mısın? Bu derste **to be**, **have got**, **can** ve **Present Simple** ile kurulan **yes/no questions** yapılarını, yardımcı fiilin öznenin önüne geçtiği dizilimi keşfedeceksin. Uzun cevapların yanında konuşmayı hızlandıran **short answers** (**Yes, she is. / No, he can't.**) kalıplarını inceleyeceksin. Dersin sonunda günlük diyaloglarda doğal soru-cevap alışverişi yapabileceksin.",
    },
    {
      id: "16",
      level: "A1",
      title: "Temel Soru Kelimeleri",
      titleEng: "Basic Question Words (Wh- Questions)",
      titleEx: "What is this? Who is that? Where are you from?",
      intro:
        "İngilizce iletişim kurarken merak ettiğin her detayı doğru sorularla sormaya hazır mısın? Bu derste soru cümlelerinin en başında yer alan **What, Who, Where, When, Why, How, Which** ve **Whose** kelimelerinin hangi bilgi türünü sorguladığını keşfedeceksin. Soru kelimesinin ardından gelen yardımcı fiil ve özne dizilimini kavrayarak anlamlı ve tam sorular oluşturmayı öğreneceksin. Yeni insanlarla tanışırken, adres sorarken veya bilgi alırken bu kalıplarla doğal diyaloglar başlatabileceksin.",
    },
    {
      id: "17",
      level: "A1",
      title: "Emir Kipleri & Nesne Zamirleri",
      titleEng: "Imperatives & Object Pronouns",
      titleEx: "Listen to me. Open your book. Call him later.",
      intro:
        "Talimat vermeyi, nazik ricalarda bulunmayı ve eylemden etkilenen kişileri cümlede doğru göstermeyi öğrenmeye hazır mısın? Bu derste fiilin yalın haliyle kurulan olumlu ve **Don't** ile kurulan olumsuz emir kiplerini, **please** ile kibar istekleri ve **Let's** ile ortak önerileri keşfedeceksin. Ayrıca özne zamirlerinin karşılığı olan **me, you, him, her, it, us, them** nesne zamirlerini fiillerden ve edatlardan sonra doğru yerde kullanmayı inceleyeceksin. Günlük komutları ve sosyal önerileri akıcı şekilde ifade edebileceksin.",
    },
    {
      id: "18",
      level: "A1",
      title: "Şimdiki Zaman",
      titleEng: "Present Continuous",
      titleEx: "She is reading a book right now. We are learning English.",
      intro:
        "Tam konuşma anında gerçekleşen olayları ve içinde bulunduğun geçici süreçleri canlı bir şekilde ifade etmeye hazır mısın? Bu derste **am / is / are + V-ing** formülüyle kurulan **Present Continuous** (Şimdiki Zaman) yapısını ve fiillere **-ing** ekleme yazım kurallarını keşfedeceksin. **Now, right now, at the moment, today** gibi zaman belirteçleriyle eylemleri zamanlamayı inceleyeceksin. Ayrıca şimdiki zaman ile geniş zaman arasındaki temel kullanım farkını kavrayarak iki zamanı birbirine karıştırmadan kullanabileceksin.",
    },
    {
      id: "19",
      level: "A1",
      title: "Kipler: Yapabilmek & İzin (Can / Can't)",
      titleEng: "Modals: Can / Can't",
      titleEx: "I can swim well. Can I sit here?",
      intro:
        "Yeteneklerinden bahsetmeye, yapabildiğin veya yapamadığın şeyleri anlatmaya ve günlük hayatta kibarca izin istemeye hazır mısın? Bu derste **can** ve **can't** kip fiillerinin beceri, imkan, rica ve izin bildiren tüm kullanımlarını keşfedeceksin. Tüm öznelerle aynı kalan ve ardından fiilin yalın halini (**V1**) alan pratik dilbilgisi yapısını inceleyeceksin. Dersin sonunda becerilerini özgüvenle ifade edebilecek ve sosyal ortamlarda doğal ricalarda bulunabileceksin.",
    },
    {
      id: "20",
      level: "A1",
      title: "Would like: Sipariş & Rica",
      titleEng: "Would like: Orders & Requests",
      titleEx: "I'd like a coffee, please. Would you like some water?",
      intro:
        "Restoranda sipariş vermek, mağazada bir şey istemek veya kibarca rica etmek için en doğal ifadeyi kullanmaya hazır mısın? Bu derste **would like** kalıbının **want**'tan daha nazik tonunu, **I'd like** ve **Would you like** soru biçimlerini keşfedeceksin. **some / a**, sayılabilir ve sayılamayan isimlerle birlikte **please**, **Can I have...?** ve sipariş diyaloglarındaki tipik cevapları inceleyeceksin. Dersin sonunda yurt dışında veya İngilizce ortamda kibar ve akıcı istekte bulunabileceksin.",
    },
    {
      id: "21",
      level: "A1",
      title: "Temel Bağlaçlar",
      titleEng: "Basic Conjunctions (and, but, or, because, so)",
      titleEx: "I stayed home because it was cold, so I watched a film.",
      intro:
        "Kısa ve kopuk cümleleri birbirine bağlayarak düşüncelerini çok daha akıcı, mantıklı ve olgun bir dille ifade etmeye hazır mısın? Bu derste ekleme yapan **and**, zıtlık kuran **but**, seçenek sunan **or**, sebep bildiren **because** ve sonuç açıklayan **so** bağlaçlarını keşfedeceksin. Bu bağlaçların cümle içindeki noktalama kurallarını ve anlam ilişkilerini örneklerle inceleyeceksin. A1 seviyesinde öğrendiğin tüm yapıları bu bağlaçlarla birleştirerek kendi hikayelerini akıcı şekilde yazabileceksin.",
    },
  ],
  A2: [
    {
      id: "22",
      level: "A2",
      title: "Di'li Geçmiş Zaman (Was/Were & Fiiller)",
      titleEng: "Past Simple (To Be & Regular/Irregular Verbs)",
      titleEx: "We visited London last year. She was tired yesterday.",
      intro:
        "Dün neler yaptığını, geçmiş tatil anılarını ve tamamlanmış olayları İngilizce olarak akıcı biçimde anlatmaya hazır mısın? Bu derste isim cümlelerinde kullanılan **was / were** ile eylem cümlelerinde kullanılan düzenli (**-ed**) ve düzensiz (**went, saw, bought**) fiillerin **Past Simple** çekimlerini keşfedeceksin. Olumsuz ve soru cümlelerinde **did / didn't** kullanımıyla fiilin tekrar yalın hale dönmesi kuralını inceleyeceksin. **Yesterday, last week, in 2020, ago** gibi zaman ifadeleriyle geçmişi net bir şekilde hikaye edebileceksin.",
    },
    {
      id: "23",
      level: "A2",
      title: "Geçmişte Süreklilik Zamanı",
      titleEng: "Past Continuous",
      titleEx: "It was raining at 8 PM when I arrived home.",
      intro:
        "Geçmişte belirli bir anda devam etmekte olan olayları ve hikayelerinin arka plan atmosferini sahne kurar gibi anlatmaya hazır mısın? Bu derste **was / were + V-ing** formülüyle oluşturulan **Past Continuous** zamanını tüm yönleriyle keşfedeceksin. Özellikle **when** ve **while** bağlaçlarını kullanarak uzun süren bir eylemin ani bir geçmiş olayla nasıl kesildiğini inceleyeceksin. Geçmiş anılarını tekdüze cümleler yerine canlı ve sinematik bir anlatımla aktarabileceksin.",
    },
    {
      id: "24",
      level: "A2",
      title: "Durum Zarfları",
      titleEng: "Adverbs of Manner",
      titleEx: "She speaks slowly. He drives carefully.",
      intro:
        "Bir eylemin **nasıl** yapıldığını fiili zenginleştirerek anlatmaya hazır mısın? Bu derste fiilleri nitelerken kullanılan **adverbs of manner** (durum zarfları) ile düzenli sıfatlardan **-ly** ekiyle türeyen (**quick → quickly**) ve **good → well** gibi düzensiz formları keşfedeceksin. Zarfın cümlede **fiilden önce**, **fiil + nesneden sonra** veya **cümle sonunda** konumlanması seçeneklerini örneklerle inceleyeceksin. Dersin sonunda hikayelerinde ve günlük anlatımlarında eylemleri canlı durum zarflarıyla detaylandırabileceksin.",
    },
    {
      id: "25",
      level: "A2",
      title: "Geniş Zaman vs. Şimdiki Zaman & Durum Fiilleri",
      titleEng: "Present Simple vs. Continuous & Stative Verbs",
      titleEx: "I work every day. She is cooking now. I know him.",
      intro:
        "Genel gerçekler, şu an devam eden işler ve hisleri birbirine karıştırmadan doğru zamanı seçmeye hazır mısın? Bu derste alışkanlık ve rutin için **Present Simple** ile konuşma anındaki süreçler için **Present Continuous** ayrımını ve her ikisini de **kabul etmeyen durum fiilleri** (**know, like, believe, want**) listesini keşfedeceksin. **Now, at the moment, every day, usually** gibi zaman belirteçleriyle hangi zamanın seçileceğini inceleyeceksin. Dersin sonunda İngilizce konuşurken zaman seçiminde çok daha özgüvenli olacaksın.",
    },
    {
      id: "26",
      level: "A2",
      title: "Karşılaştırma & En Üstünlük Dereceleri",
      titleEng: "Comparatives & Superlatives",
      titleEx: "Istanbul is bigger than Ankara. It is the largest city.",
      intro:
        "İki kişiyi, şehri veya ürünü kıyaslamaya ve bir grubun içindeki en iyiyi veya en dikkat çekici olanı öne çıkarmaya hazır mısın? Bu derste karşılaştırma (**bigger than, more expensive than**) ve en üstünlük (**the largest, the most interesting**) derecelerinin kurallarını keşfedeceksin. Tek heceli ve çok heceli sıfatların çekimlerini, ayrıca **good - better - the best** ve **bad - worse - the worst** gibi düzensiz sıfatları inceleyeceksin. Günlük hayatta tercihlerini belirtirken ve kıyaslama yaparken fikirlerini ikna edici biçimde ifade edebileceksin.",
    },
    {
      id: "27",
      level: "A2",
      title: "Derecelendirme ve Karşılaştırma Yapıları",
      titleEng: "As...as, Too & Enough",
      titleEx: "This laptop isn't fast enough. It's as expensive as yours.",
      intro:
        "Karşılaştırmalarına eşitlik, aşırılık ve yeterlilik gibi ince anlam katmanları ekleyerek anlatımını keskinleştirmeye hazır mısın? Bu derste iki unsur arasındaki eşitliği veya farkı gösteren **as...as / not as...as**, gereğinden fazlalığı ifade eden **too** ve yeterlilik bildiren **enough** yapılarını keşfedeceksin. **Enough** kelimesinin sıfatlardan sonra, isimlerden ise önce gelmesi gibi kritik dizilim kurallarını inceleyeceksin. Günlük hayatta ürün değerlendirirken veya fikir belirtirken düşüncelerini çok daha hassas ifade edebileceksin.",
    },
    {
      id: "28",
      level: "A2",
      title: "Too much / Too many / A few / A little",
      titleEng: "Too much / Too many / A few / A little",
      titleEx: "Too much sugar. Too many emails. A few friends. A little time.",
      intro:
        "Bir şeyin fazla mı az mı olduğunu miktar belirteçleriyle net ifade etmeye hazır mısın? Bu derste sayılamayan isimlerle **too much / a little** ile sayılabilen çoğul isimlerle **too many / a few** eşleşmelerini ve **too** ile aşırılık vurgusunu keşfedeceksin. Olumlu cümlelerde **a little** ve **a few**'ün 'biraz, birkaç' anlamını; **too much / too many** ile 'fazla' uyarısını günlük örneklerle inceleyeceksin. Dersin sonunda yemek, zaman ve kaynaklardan bahsederken doğru miktar kalıplarını kullanabileceksin.",
    },
    {
      id: "29",
      level: "A2",
      title: "So / Such",
      titleEng: "So / Such",
      titleEx: "It's so cold today! She is such a kind teacher.",
      intro:
        "Duygu, derece ve vurguyu cümlelerine güçlü bir ton katan yapılarla ifade etmeye hazır mısın? Bu derste sıfat ve zarfları güçlendiren **so** ile isim tamlaması önünde kullanılan **such** ayrımını (**so + adjective/adverb** vs. **such + (a) + adjective + noun**) keşfedeceksin. **So many / so much** ve **such a lot of** gibi yaygın kombinasyonları ile konuşmada doğal vurgu kurmayı inceleyeceksin. Dersin sonunda şaşkınlık, memnuniyet veya eleştiriyi İngilizce'de daha etkili anlatabileceksin.",
    },
    {
      id: "30",
      level: "A2",
      title: "Gelecek Zaman (Will vs. Going to)",
      titleEng: "Future Forms: Will, Going to & Present Continuous",
      titleEx: "I think it will rain. / I am going to study tonight.",
      intro:
        "Geleceğe dair planlarını, konuşma anındaki ani kararlarını ve güçlü öngörülerini en doğru zaman kalıbıyla ifade etmeye hazır mısın? Bu derste tahmin ve anlık kararlar için **will**, önceden tasarlanmış niyetler için **be going to** ve kesinleşmiş takvim planları için **Present Continuous** kullanımlarını keşfedeceksin. Aynı durumun farklı niyetlerle nasıl farklı gelecek kalıplarıyla kurulduğunu karşılaştırmalı örneklerle inceleyeceksin. Gelecek planlarından bahsederken ana dili konuşanlar gibi doğal seçimler yapabileceksin.",
    },
    {
      id: "31",
      level: "A2",
      title: "Yakın Geçmiş Zaman",
      titleEng: "Present Perfect Simple (ever, never, just, already, yet)",
      titleEx: "I have seen that movie before. Have you finished yet?",
      intro:
        "Geçmişte yaşanmış ancak zamanı belirtilmeyen veya etkisi bugüne uzanan deneyimleri İngilizce ifade etmeye hazır mısın? Bu derste **have / has + V3** (Past Participle) yapısıyla kurulan **Present Perfect Simple** zamanını ve fiillerin 3. hallerini keşfedeceksin. Hayat deneyimlerini sorgulayan **ever, never** ile henüz tamamlanan veya beklenen işleri anlatan **just, already, yet** zarflarının cümle içindeki yerlerini inceleyeceksin. Geçmiş ile bugünü birbirine bağlayan bu kritik zaman yapısını özgüvenle kullanabileceksin.",
    },
    {
      id: "32",
      level: "A2",
      title: "Yakın Geçmiş ve Di'li Geçmiş Zaman Farkı",
      titleEng: "Present Perfect vs. Past Simple (for & since)",
      titleEx: "I have lived here since 2020. I moved here six years ago.",
      intro:
        "İngilizce öğrenenlerin en çok karıştırdığı iki geçmiş zaman arasındaki ince çizgiyi kalıcı olarak çözmeye hazır mısın? Bu derste bitmiş ve zamanı belli eylemlere odaklanan **Past Simple** ile geçmişte başlayıp hala devam eden süreçleri anlatan **Present Perfect** arasındaki temel farkı keşfedeceksin. Süreç uzunluğu bildiren **for**, başlangıç noktası belirten **since** ve bitmiş zaman gösteren **ago** belirteçlerinin kullanımını karşılaştıracaksın. Deneyimlerini ve yaşam geçmişini anlatırken her iki zamanı da hatasız seçebileceksin.",
    },
    {
      id: "33",
      level: "A2",
      title: "Kipler: Zorunluluk, Yasak & Tavsiye",
      titleEng: "Modals: Must, Have to, Should",
      titleEx: "You should rest. / You mustn't park here.",
      intro:
        "Kurallardan bahsetmeye, içsel ve dışsal zorunlulukları vurgulamaya ve arkadaşlarına yerinde tavsiyeler vermeye hazır mısın? Bu derste güçlü gereklilik bildiren **must** ve **have to** ile öneri sunan **should / shouldn't** kiplerinin anlam nüanslarını keşfedeceksin. Özellikle kesin yasak bildiren **mustn't** ile 'yapmana gerek yok' anlamına gelen **don't have to** arasındaki kritik farkı inceleyeceksin. Sosyal ortamlarda, iş hayatında ve kuralları açıklarken duruma en uygun kipi rahatlıkla kullanabileceksin.",
    },
    {
      id: "34",
      level: "A2",
      title: "Could (Geçmiş Yetenek) & May / Might (Olasılık)",
      titleEng: "Could & May / Might",
      titleEx: "I could read at four. It might rain later. May I come in?",
      intro:
        "Geçmişteki yeteneklerini anlatmaya, olasılıkları değerlendirmeye ve resmi ortamda izin istemeye hazır mısın? Bu derste geçmişte yapabildiğin şeyler için **could** (geçmiş yetenek), tahmin için **may / might** ve daha resmi **May I...?** izin kalıplarını keşfedeceksin. **Can't** ile kesin olmayan olasılık (**It can't be true.**) ve **could** ile nazik rica arasındaki ince farkları inceleyeceksin. Dersin sonunda geçmiş deneyimlerinden bahsederken ve belirsiz gelecek senaryoları tartışırken bu kipleri doğru seçebileceksin.",
    },
    {
      id: "35",
      level: "A2",
      title: "Belgisiz Zamirler",
      titleEng: "Indefinite Pronouns (someone, anything, nowhere)",
      titleEx: "Someone is at the door. I didn't buy anything.",
      intro:
        "Belirli bir isim veya adres vermeden kişilerden, nesnelerden ve yerlerden akıcı bir şekilde söz etmeye hazır mısın? Bu derste **some-, any-, no-, every-** ön eklerinin **-one / -body, -thing, -where** ekleriyle birleşerek oluşturduğu belgisiz zamirleri keşfedeceksin. Olumlu, olumsuz ve soru cümlelerinde doğru zamiri seçmeyi ve bu kelimelerin daima tekil fiille çekimlenmesi kuralını inceleyeceksin. Günlük konuşmalarda çok sık geçen bu pratik kalıplarla cümlelerini çok daha doğal kurabileceksin.",
    },
    {
      id: "36",
      level: "A2",
      title: "Temel Fiil Kalıpları",
      titleEng: "Basic Verb Patterns (Verb + -ing / to-infinitive)",
      titleEx: "I enjoy coding. / She wants to travel abroad.",
      intro:
        "Bir cümlede iki fiili arka arkaya kullanırken ikinci fiilin hangi biçimi alacağını kolayca belirlemeye hazır mısın? Bu derste **enjoy, finish, mind, suggest** gibi ardından **V-ing** (gerund) alan fiiller ile **want, decide, plan, hope, learn** gibi **to + V1** (infinitive) gerektiren fiilleri keşfedeceksin. Ayrıca **like, love, hate** gibi her iki yapıyla da kullanılabilen fiillerin temel mantığını örneklerle inceleyeceksin. Günlük konuşmada en sık kullanılan fiil eşleşmelerini doğal biçimde uygulayabileceksin.",
    },
    {
      id: "37",
      level: "A2",
      title: "Özne/Nesne Soruları & How long / How often",
      titleEng: "Subject/Object Questions & How long / How often",
      titleEx:
        "Who phoned you? How often do you go to the gym? How long have you lived here?",
      intro:
        "Cümlede **kimin** eylemi yaptığını veya **neyin** etkilendiğini ayırt eden sorular kurmaya hazır mısın? Bu derste **subject questions** (**Who called?** — soru kelimesi özne) ile **object questions** (**Who did you call?** — yardımcı fiil gerekir) farkını keşfedeceksin. Süre için **How long**, sıklık için **How often** ve uygun zaman (**for / since**, sıklık zarfları) ile cevap kalıplarını inceleyeceksin. Dersin sonunda merak ettiğin konuları doğru soru yapısıyla sorabilecek ve anlamlı yanıtlar verebileceksin.",
    },
    {
      id: "38",
      level: "A2",
      title: "Yansıma Zamirleri",
      titleEng: "Reflexive Pronouns (myself, each other)",
      titleEx: "I hurt myself. They love each other. She did it herself.",
      intro:
        "Eylemin özneye geri döndüğü veya iki tarafın birbirine yöneldiği durumları doğru zamirlerle ifade etmeye hazır mısın? Bu derste **myself, yourself, himself, herself** ve **ourselves** gibi **reflexive pronouns** ile tek kişinin kendi üzerindeki eylemini anlatmayı keşfedeceksin. Karşılıklı ilişkiler için **each other** ve **one another** kullanımını ve **by myself** ('yalnız başıma') kalıbını örneklerle inceleyeceksin. Dersin sonunda günlük olayları ve ilişkileri bu zamirlerle doğal İngilizce cümlelerde anlatabileceksin.",
    },
    {
      id: "39",
      level: "A2",
      title: "Both / Either / Neither",
      titleEng: "Both / Either / Neither",
      titleEx:
        "Both answers are correct. You can take either bus. Neither option works for me.",
      intro:
        "İki seçenek, kişi veya nesne arasında net tercih veya ortaklık bildirmeye hazır mısın? Bu derste ikisini birden kapsayan **both**, iki seçenekten birini işaret eden **either** ve ikisini de reddeden **neither** yapılarını tekil ve çoğul isimlerle keşfedeceksin. **Both of us**, **either ... or**, **neither ... nor** bağlantılarını ve fiil çekimi uyumunu inceleyeceksin. Dersin sonunda restoran menüsünden, ulaşım seçeneklerinden veya fikir ayrılıklarından bahsederken bu üç yapıyı özgüvenle kullanabileceksin.",
    },
    {
      id: "40",
      level: "A2",
      title: "Hareket Edatları",
      titleEng: "Prepositions of Movement (into, across, through)",
      titleEx:
        "She walked into the room. He ran across the street. We drove through the tunnel.",
      intro:
        "Hareket yönünü ve bir yerden başka bir yere geçişi net ifade etmeye hazır mısın? Bu derste hareket bildiren **into, out of, across, through, over, past, up, down** gibi edatların sabit konum için kullanılan yer edatlarından farkını keşfedeceksin. Bir alanın içine girme, karşıdan karşıya geçme veya bir noktanın içinden süzülerek ilerleme gibi senaryolarda doğru edatı seçmeyi inceleyeceksin. Yol tarifi verirken ve günlük anlatımlarda hareket edatlarını doğal biçimde kullanabileceksin.",
    },
    {
      id: "41",
      level: "A2",
      title: "Temel Phrasal Verbs",
      titleEng: "Basic Phrasal Verbs",
      titleEx: "Turn off the lights. Look after the kids. Give up smoking.",
      intro:
        "Tek fiille anlatamayacağın günlük eylemleri phrasal verb kalıplarıyla kurmaya hazır mısın? Bu derste fiil + edat veya zarf birleşimlerinden oluşan **turn on/off, look after, give up, pick up, get up** gibi en sık kullanılan temel **phrasal verb**'leri keşfedeceksin. Ayrılabilir ve ayrılamaz yapıların temel mantığını ve nesne zamirlerinin nereye yerleştiğini inceleyeceksin. Günlük İngilizcenin vazgeçilmez bu kalıplarını özgüvenle kullanabileceksin.",
    },
    {
      id: "42",
      level: "A2",
      title: "Temel Koşul Cümleleri (Tip 0 & Tip 1)",
      titleEng: "Zero & First Conditionals",
      titleEx: "If you heat ice, it melts. / If it rains, I will stay home.",
      intro:
        "Şartlara bağlı sonuçları, bilimsel gerçekleri ve geleceğe yönelik gerçekçi planlarını **if** cümleleriyle kurmaya hazır mısın? Bu derste her zaman geçerli genel doğruları anlatan **Zero Conditional** (**If + Present, Present**) ile gerçekleşmesi muhtemel gelecek senaryolarını ifade eden **First Conditional** (**If + Present, will + V1**) yapılarını keşfedeceksin. **If** cümleciği başa veya ortaya geldiğinde virgül kullanımını ve **when / unless** gibi temel alternatifleri inceleyeceksin. Koşul-sonuç ilişkilerini net ve akıcı cümlelerle ifade edebileceksin.",
    },
  ],
  B1: [
    {
      id: "43",
      level: "B1",
      title: "Geçmişteki Alışkanlıklar (Used to & Would)",
      titleEng: "Past Habits: Used to & Would",
      titleEx: "I used to play chess every weekend when I was a child.",
      intro:
        "Çocukluk anılarını, eskiden sahip olduğun ama artık bıraktığın alışkanlıkları ve geçmiş yaşam tarzını nostaljik bir dille anlatmaya hazır mısın? Bu derste geçmişteki sürekli durum ve rutinleri ifade eden **used to** ile tekrarlanan geçmiş eylemleri anlatan **would** kalıplarını keşfedeceksin. Durum fiilleriyle (*be, live, have*) neden yalnızca *used to* kullanıldığını ve olumsuz/soru çekimlerini (**didn't use to**) inceleyeceksin. Geçmiş ile bugünkü yaşamın arasındaki değişimleri son derece doğal ve akıcı bir İngilizceyle aktarabileceksin.",
    },
    {
      id: "44",
      level: "B1",
      title: "Be used to / Get used to",
      titleEng: "Be used to / Get used to",
      titleEx:
        "I am used to waking up early. She is getting used to the new job.",
      intro:
        "Bir şeye alışkın olmak ile yeni bir duruma alışma sürecini birbirinden ayırt etmeye hazır mısın? Bu derste **be used to + V-ing / noun** ile süregelen alışkanlık durumunu ve **get used to** ile zaman içinde oluşan uyumu keşfedeceksin. Geçmişteki eski alışkanlıkları anlatan **used to + V1** kalıbıyla arasındaki kritik anlam ve yapı farkını inceleyeceksin. Yeni iş, şehir veya rutinlere dair deneyimlerini doğru nuansla anlatabileceksin.",
    },
    {
      id: "45",
      level: "B1",
      title: "Süregelen Yakın Geçmiş Zaman",
      titleEng: "Present Perfect Continuous",
      titleEx: "I have been learning English for two years.",
      intro:
        "Geçmişte başlayıp hala devam eden eylemlerin süresini, kesintisizliğini ve şu ana yansıyan etkisini vurgulamaya hazır mısın? Bu derste **have / has been + V-ing** formülüyle kurulan **Present Perfect Continuous** zamanını tüm detaylarıyla keşfedeceksin. Eylemin tamamlanmış sonucuna odaklanan *Present Perfect Simple* ile sürecin devamlılığını öne çıkaran bu zaman arasındaki ince farkı inceleyeceksin. **For, since, all day, lately** belirteçleriyle ne zamandır ne yaptığını çok daha doğal ifade edebileceksin.",
    },
    {
      id: "46",
      level: "B1",
      title: "Miş'li Geçmiş Zaman",
      titleEng: "Past Perfect Simple",
      titleEx: "When I arrived at the station, the train had already left.",
      intro:
        "Geçmişte yaşanan iki olaydan hangisinin daha önce gerçekleştiğini net bir zaman sırasıyla anlatmaya hazır mısın? Bu derste 'geçmişin geçmişi' olarak bilinen ve **had + V3** yapısıyla kurulan **Past Perfect Simple** zamanını keşfedeceksin. **Before, after, by the time, when, already, just** bağlaç ve zarflarını kullanarak geçmişteki olaylar zincirini kronolojik bir netlikle kurgulamayı inceleyeceksin. Hikaye anlatımında ve geçmiş olayları açıklarken zaman karmaşasını tamamen ortadan kaldıracaksın.",
    },
    {
      id: "47",
      level: "B1",
      title: "Zaman Cümlecikleri",
      titleEng: "Time Clauses (when, as soon as, until)",
      titleEx:
        "When I arrive, I'll call you. As soon as she leaves, we can start. Wait until the bus comes.",
      intro:
        "Ana cümleden önce veya sonra gelen zaman bağlı cümleciklerle olayların sırasını net kurgulamaya hazır mısın? Bu derste **when, while, as, as soon as, until, before, after** ile kurulan **Time Clauses** yapısını ve gelecek anlatan ana cümleye rağmen yan cümlede **Present Simple** kullanımını keşfedeceksin. **As soon as** ile anında tetiklenen eylemleri ve **until** ile belirli bir olay gerçekleşene kadar bekleme mantığını inceleyeceksin. Plan ve söz cümlelerini zaman uyumuyla hatasız kurabileceksin.",
    },
    {
      id: "48",
      level: "B1",
      title: "Tahmin ve Olasılık Kipleri",
      titleEng: "Modals of Deduction & Possibility (Present)",
      titleEx: "The lights are off; they must be asleep. He might be late.",
      intro:
        "Elindeki ipuçlarına ve gözlemlerine dayanarak mantıklı çıkarımlar yapmaya ve ihtimal derecelerini belirtmeye hazır mısın? Bu derste güçlü kanıta dayalı eminlik bildiren **must**, mantıksal imkansızlık ifade eden **can't** ve düşük-orta ihtimalleri anlatan **may, might, could** kiplerini keşfedeceksin. Eminlik ölçeğine göre doğru kipi seçmeyi ve süregelen durumlar için **must be V-ing** kalıbını inceleyeceksin. Günlük konuşmalarda tahminlerini ve yorumlarını çok daha doğal ve ikna edici hale getireceksin.",
    },
    {
      id: "49",
      level: "B1",
      title: "Eklenti Soruları (Question Tags)",
      titleEng: "Question Tags",
      titleEx: "You live in Istanbul, don't you? She isn't coming, is she?",
      intro:
        "Sohbeti canlı tutmak, karşındakinden onay almak veya emin olduğun bir bilgiyi doğrulamak için doğal soru kuyrukları eklemeye hazır mısın? Bu derste **Question Tags** (Eklenti Soruları) yapısının olumlu cümleye olumsuz, olumsuz cümleye olumlu eklenti getirme mantığını keşfedeceksin. Farklı zaman kiplerindeki yardımcı fiillere göre doğru eklentiyi bulmayı ve **I am -> aren't I?** gibi özel istisnaları inceleyeceksin. Konuşmalarına ana dili konuşanların günlük ritmini ve etkileşimini katabileceksin.",
    },
    {
      id: "50",
      level: "B1",
      title: "So do I / Neither do I",
      titleEng: "So do I / Neither do I",
      titleEx:
        "I love coffee. — So do I. / I don't like mornings. — Neither do I.",
      intro:
        "Karşındakinin söylediğiyle aynı fikirde veya aynı durumda olduğunu kısa ve doğal yanıtlarla belirtmeye hazır mısın? Bu derste olumlu uyumu bildiren **So + yardımcı fiil + özne** ve olumsuz uyumu bildiren **Neither / Nor + yardımcı fiil + özne** kalıplarını keşfedeceksin. Farklı zaman kiplerinde doğru yardımcı fiili seçmeyi ve **So am I / Neither have I** gibi örnekleri inceleyeceksin. Sohbetlerde ortak noktalarını vurgulayarak diyalogları çok daha akıcı sürdürebileceksin.",
    },
    {
      id: "51",
      level: "B1",
      title: "Koşul Cümleleri (Tip 2 & Tip 1-2 Karşılaştırması)",
      titleEng: "Second Conditional (Unreal Present)",
      titleEx: "If I won the lottery, I would buy a house by the sea.",
      intro:
        "Hayal gücünü kullanarak şu anki gerçekliğin dışındaki varsayımsal senaryoları ve düşük olasılıklı hayalleri kurmaya hazır mısın? Bu derste **If + Past Simple, would + V1** yapısıyla kurulan **Second Conditional** (Tip 2) kalıbını ve Tip 1 ile farkını keşfedeceksin. Tüm öznelerle **were** kullanımını, özellikle tavsiye verirken kullanılan **If I were you...** kalıbını ve **could / might** alternatiflerini inceleyeceksin. Dileklerini, hayali planlarını ve yaratıcı düşüncelerini akıcı biçimde ifade edebileceksin.",
    },
    {
      id: "52",
      level: "B1",
      title: "Sıfat Cümlecikleri (Tanımlayan & Tanımlamayan)",
      titleEng: "Defining & Non-defining Relative Clauses",
      titleEx:
        "The man who lives next door is a doctor. / My car, which is old, still runs well.",
      intro:
        "İsimleri tek bir sıfat yerine açıklayıcı yan cümleciklerle tanımlayarak cümlelerini birleştirmeye ve anlatımını zenginleştirmeye hazır mısın? Bu derste **who, which, that, whose, where, when** ilgi zamirleriyle kurulan tanımlayan (**Defining**) ve tanımlamayan (**Non-defining**) sıfat cümleciklerini keşfedeceksin. Virgül kullanımının anlamı nasıl değiştirdiğini, hangi durumlarda **that** kullanılamayacağını ve nesne konumundaki ilgi zamirinin ne zaman düşürülebileceğini inceleyeceksin. Daha uzun, bağlantılı ve sofistike cümleler kurabileceksin.",
    },
    {
      id: "53",
      level: "B1",
      title: "Edilgen Çatı (Temel Zamanlar)",
      titleEng: "Passive Voice (Core Tenses)",
      titleEx: "The letter was sent yesterday. English is spoken worldwide.",
      intro:
        "Eylemi yapan kişiden çok yapılan işin kendisine veya sonucuna odaklanarak daha nesnel ve resmi cümleler kurmaya hazır mısın? Bu derste **be + V3** yapısıyla geniş, şimdiki, geçmiş ve gelecek zamanlarda kurulan **Passive Voice** (Edilgen Çatı) kurallarını keşfedeceksin. Etken bir cümlenin nesnesini özne konumuna taşıyarak edilgene dönüştürmeyi ve işi yapanı belirtmek için **by** edatının doğru kullanımını inceleyeceksin. Haber dilinde, raporlarda ve günlük açıklamalarda edilgen yapıyı rahatlıkla kullanabileceksin.",
    },
    {
      id: "54",
      level: "B1",
      title: "İsim Fiiller & Mastarlar (Anlam Değiştirenler)",
      titleEng: "Gerunds & Infinitives",
      titleEx: "I stopped smoking. / I stopped to smoke a cigarette.",
      intro:
        "Aynı fiilin ardından gelen **-ing** (gerund) veya **to + V1** (infinitive) yapısının cümlenin anlamını nasıl tamamen değiştirdiğini keşfetmeye hazır mısın? Bu derste **stop, remember, forget, try, regret, mean** gibi hem isim fiil hem de mastar alabilen kritik fiillerin anlam farklarını inceleyeceksin. Geçmişte yapılan bir eylemi hatırlamak (*remember doing*) ile yapılacak bir görevi unutmamak (*remember to do*) arasındaki ince ayrımı örneklerle kavrayacaksın. Bağlama göre doğru yapıyı seçerek anlatımındaki anlam kaymalarını tamamen önleyeceksin.",
    },
    {
      id: "55",
      level: "B1",
      title: "Make / Let / Allow",
      titleEng: "Make / Let / Allow (Active Causatives)",
      titleEx:
        "She made me apologise. Let him go. They don't allow smoking here.",
      intro:
        "Birinin başka birini bir şey yapmaya zorladığını, izin verdiğini veya buna müsaade ettiğini ifade etmeye hazır mısın? Bu derste etken nedensellik yapılarını bildiren **make, let** ve **allow** fiillerinin temel kullanımlarını keşfedeceksin. **Make** ile zorunlu eylemde ardından gelen fiilin yalın halde kalmasını, **let** ile izin verirken nesne + yalın fiil düzenini ve **allow + object + to V1** kalıbını inceleyeceksin. Günlük ve iş ortamında bu nedensellik cümlelerini doğru kurabileceksin.",
    },
    {
      id: "56",
      level: "B1",
      title: "-ed / -ing Sıfatları",
      titleEng: "Participle Adjectives (bored / boring)",
      titleEx: "The film was boring. I was bored during the meeting.",
      intro:
        "Bir şeyin mi yoksa seni mi etkilediğini **-ed** ve **-ing** sıfatlarıyla doğru ayırt etmeye hazır mısın? Bu derste duygu veya tepki bildiren **-ed** sıfatlarını (**bored, interested, tired**) ile neden veya özellik bildiren **-ing** sıfatlarını (**boring, interesting, tiring**) keşfedeceksin. **I am bored** ile **The film is boring** gibi karşılaştırmalı örneklerle anlam farkını inceleyeceksin. Duygu ve değerlendirme cümlelerini bu **participle adjectives** ile hatasız kurabileceksin.",
    },
    {
      id: "57",
      level: "B1",
      title: "Soru Kelimesi + Infinitive",
      titleEng: "Question Word + Infinitive",
      titleEx: "I don't know what to do. She showed me how to use it.",
      intro:
        "Bilmediğin bir konuyu veya yapılacak bir eylemi tek bir yapıda birleştirmeye hazır mısın? Bu derste **what, where, how, when, who** gibi soru kelimelerinin ardından **to + V1** gelmesiyle kurulan **Question Word + Infinitive** kalıbını keşfedeceksin. **I don't know where to go** ve **Tell me how to fix it** gibi günlük kalıpların cümle içindeki yerini inceleyeceksin. Kararsızlık, tavsiye ve yönlendirme cümlelerini kısa ve doğal ifade edebileceksin.",
    },
    {
      id: "58",
      level: "B1",
      title: "Dolaylı Anlatım (Temel Aktarım)",
      titleEng: "Reported Speech (Statements & Questions)",
      titleEx: "He said he was tired. She asked me where I lived.",
      intro:
        "Başkalarının söylediği sözleri ve sorduğu soruları kendi cümlelerinle akıcı ve doğru bir şekilde aktarmaya hazır mısın? Bu derste **Reported Speech** (Dolaylı Anlatım) yapısında zamanların bir derece geçmişe kayması (**tense backshift**) kuralını keşfedeceksin. **Say** ve **tell** fiilleri arasındaki nesne farkını, evet-hayır sorularında **if / whether** kullanımını ve zamirlerle zaman zarflarındaki dönüşümleri inceleyeceksin. Günlük konuşmaları, toplantı notlarını ve duyduğun haberleri doğal biçimde aktarabileceksin.",
    },
    {
      id: "59",
      level: "B1",
      title: "Dolaylı Emir ve Rica",
      titleEng: "Reported Commands & Requests",
      titleEx: "She told me to wait. He asked me not to open the window.",
      intro:
        "Doğrudan emir ve ricaları dolaylı anlatımla başkasına aktarmaya hazır mısın? Bu derste **tell / ask + object + (not) to + V1** yapısıyla kurulan **Reported Commands & Requests** kalıplarını keşfedeceksin. Emirleri **told me to** ile, nazik ricaları **asked me to** ile aktarmayı ve olumsuz yönergelerde **not to** kullanımını inceleyeceksin. Patron, öğretmen veya arkadaştan duyduğun talimatları doğal biçimde başkalarına iletebileceksin.",
    },
    {
      id: "60",
      level: "B1",
      title: "Dolaylı Sorular",
      titleEng: "Indirect Questions (Could you tell me where...)",
      titleEx:
        "Could you tell me where the station is? Do you know what time it starts?",
      intro:
        "Soru sorarken daha kibar ve resmi bir ton kullanmaya hazır mısın? Bu derste **Could you tell me...**, **Do you know...** ve **I wonder...** gibi girişlerle başlayan **Indirect Questions** yapısını keşfedeceksin. Soru kelimesinden sonra **do/does/did** kullanmadan özne-fiil sırasına geçişi ve evet-hayır sorularında **if / whether** kullanımını inceleyeceksin. Yabancılarla ve resmi ortamlarda sorularını çok daha nazik biçimde sorabileceksin.",
    },
    {
      id: "61",
      level: "B1",
      title: "Bağlaç ve Geçiş İfadeleri",
      titleEng: "Linking Words (however, therefore, although)",
      titleEx:
        "It was late; however, we kept talking. Although it rained, we went out.",
      intro:
        "Cümleleri ve fikirleri mantıksal bağlarla birleştirerek anlatımını akıcı kılmaya hazır mısın? Bu derste karşıtlık bildiren **however, although, but, whereas**, neden-sonuç için **therefore, so, as a result** ve ek bilgi için **moreover, furthermore** gibi **linking words** ve geçiş ifadelerini keşfedeceksin. Virgül ve noktalı virgül kullanımıyla **however** ve **therefore** gibi bağlayıcıların cümle içindeki konumunu inceleyeceksin. Yazılı ve sözlü anlatımlarında düşünceler arasında net geçişler kurabileceksin.",
    },
    {
      id: "62",
      level: "B1",
      title: "Fiil/Sıfat + Edat Kalıpları",
      titleEng: "Dependent Prepositions (Verb/Adjective + Preposition)",
      titleEx:
        "It depends on the weather. I'm interested in science. She apologised for being late.",
      intro:
        "Fiil ve sıfatlardan sonra hangi edatın geleceğini kalıplar halinde öğrenmeye hazır mısın? Bu derste **depend on, interested in, good at, worried about, apologise for** gibi **Dependent Prepositions** (fiil/sıfat + edat) eşleşmelerini keşfedeceksin. Nesne olarak **-ing** veya **to + V1** alan kalıpların edatla nasıl birlikte çalıştığını inceleyeceksin. Günlük konuşmada en sık hata yapılan edat seçimlerini doğru kullanabileceksin.",
    },
    {
      id: "63",
      level: "B1",
      title: "Phrasal Verbs (Orta Düzey)",
      titleEng: "Intermediate Phrasal Verbs",
      titleEx:
        "We ran out of milk. I'll look into the problem. He came across an old photo.",
      intro:
        "Orta düzey phrasal verb'lerle anlatımını zenginleştirmeye ve daha doğal konuşmaya hazır mısın? Bu derste **run out of, look into, come across, carry out, turn down** gibi günlük ve iş hayatında sık geçen **Intermediate Phrasal Verbs** kalıplarını keşfedeceksin. Temel seviyedekilerin ötesinde anlam çeşitliliği, ayrılamaz yapılar ve cümlede vurgulanması gereken parçacıkları inceleyeceksin. Bu kalıplarla İngilizceni bir üst seviyeye taşıyabileceksin.",
    },
  ],
  B2: [
    {
      id: "64",
      level: "B2",
      title: "İleri Gelecek Zamanlar (Future Continuous & Future Perfect)",
      titleEng: "Future Continuous & Future Perfect",
      titleEx:
        "This time tomorrow, I will be flying to Berlin. By June, I will have graduated.",
      intro:
        "Gelecekteki belirli bir anda devam ediyor olacak süreçleri ve belli bir tarihe kadar tamamlanmış olacak hedefleri yüksek hassasiyetle ifade etmeye hazır mısın? Bu derste **Future Continuous** (**will be V-ing**) ve **Future Perfect** (**will have V3**) zamanlarının kullanım alanlarını keşfedeceksin. **This time next week, by, by the time, within** gibi zaman belirteçleriyle geleceğin farklı kesitlerini nasıl kurgulayacağını inceleyeceksin. Kariyer planlarını, proje takvimlerini ve gelecek öngörülerini ileri düzey bir zaman hakimiyetiyle anlatabileceksin.",
    },
    {
      id: "65",
      level: "B2",
      title: "Süregelen Bitmiş Gelecek Zaman",
      titleEng: "Future Perfect Continuous",
      titleEx: "By next month, I will have been working here for ten years.",
      intro:
        "Gelecekte belirli bir ana kadar ne kadar süredir bir eylemin devam etmiş olacağını vurgulamaya hazır mısın? Bu derste **will have been + V-ing** formülüyle kurulan **Future Perfect Continuous** zamanını ve **by** ile belirlenen gelecek referans noktasını keşfedeceksin. **Future Perfect**'in tamamlanmış sonuca odaklanması ile bu zamanın süre vurgusunu nasıl öne çıkardığını inceleyeceksin. Kariyer hedeflerini ve uzun süreli planlarını ileri düzey bir zaman hassasiyetiyle ifade edebileceksin.",
    },
    {
      id: "66",
      level: "B2",
      title: "Süregelen Miş'li Geçmiş Zaman",
      titleEng: "Past Perfect Continuous",
      titleEx: "She was exhausted because she had been working all day.",
      intro:
        "Geçmişteki bir olaydan hemen önce ne kadar süredir bir eylemin devam ettiğini ve o anda yarattığı somut etkiyi vurgulamaya hazır mısın? Bu derste **had been + V-ing** formülüyle kurulan **Past Perfect Continuous** yapısını tüm incelikleriyle keşfedeceksin. Geçmişte tamamlanmış sayıya odaklanan *Past Perfect Simple* ile sürecin uzunluğunu ve arka planını öne çıkaran bu zaman arasındaki farkı inceleyeceksin. Hikaye anlatımında ve geçmiş olayların nedenlerini açıklarken sebep-sonuç bağlarını ustalıkla kurabileceksin.",
    },
    {
      id: "67",
      level: "B2",
      title: "Geçmişe Dönük Kipler (Perfect Modals)",
      titleEng: "Modals in the Past (should have, must have, might have)",
      titleEx: "You should have called me. He must have forgotten the meeting.",
      intro:
        "Geçmişte yaşanmış olaylar hakkında mantıklı çıkarımlar yapmaya, pişmanlıkları veya yapıcı eleştirileri incelikle dile getirmeye hazır mısın? Bu derste **must have, can't have, might have, could have** ile geçmişe dönük olasılıkları ve **should have / shouldn't have + V3** ile kaçırılmış fırsatları keşfedeceksin. Ayrıca yapmaya gerek olmayan ama yapılmış eylemleri anlatan **needn't have V3** kalıbının ince nüansını inceleyeceksin. Geçmiş olayları değerlendirirken duygusal ve mantıksal tonunu kusursuzca ayarlayabileceksin.",
    },
    {
      id: "68",
      level: "B2",
      title: "Needn't have vs. Didn't need to",
      titleEng: "Needn't have vs. Didn't need to",
      titleEx:
        "You needn't have bought milk — we already had some. I didn't need to wake up early; the meeting was cancelled.",
      intro:
        "Geçmişte yapılmak zorunda olunmayan veya gereksiz yere yapılmış eylemleri birbirinden ayırarak doğru tonu kullanmaya hazır mısın? Bu derste fiili yapmaya zorunluluğun olmadığını bildiren **didn't need to** ile yapıldığı halde gereksiz olduğunu vurgulayan **needn't have + V3** arasındaki kritik farkı keşfedeceksin. Olumlu ve olumsuz örneklerle **pişmanlık**, **rahatlama** ve **gereksiz emek** nüanslarını inceleyeceksin. Geçmiş olayları değerlendirirken karşındakinin gerçekten mecbur olup olmadığını net biçimde ifade edebileceksin.",
    },
    {
      id: "69",
      level: "B2",
      title: "Koşul Cümleleri (Tip 3 & Karışık Tipler)",
      titleEng: "Third & Mixed Conditionals",
      titleEx:
        "If I had studied harder, I would have passed. / If I had taken that job, I would be rich now.",
      intro:
        "Geçmişteki gerçekleşmemiş senaryoları, keşkeleri ve zamanlar arası varsayımsal sonuçları ustalıkla ifade etmeye hazır mısın? Bu derste geçmişteki hayali durumları anlatan **Third Conditional** (**If + had V3, would have V3**) ile geçmişteki bir koşulun bugünkü sonucunu veya bugünkü genel bir durumun geçmişteki etkisini birleştiren **Mixed Conditionals** yapılarını keşfedeceksin. **Would have, could have, might have** seçimlerinin anlamı nasıl esnettiğini inceleyeceksin. Karmaşık varsayımları ve pişmanlıkları doğru zaman uyumuyla akıcı biçimde kurabileceksin.",
    },
    {
      id: "70",
      level: "B2",
      title: "Dilek & Keşke Cümleleri (Wish & If Only)",
      titleEng: "Wish & If Only Clauses",
      titleEx: "I wish I had more free time. If only I hadn't said that.",
      intro:
        "Şu anki durumlarla ilgili hayallerini, geçmişe dair pişmanlıklarını ve çevrendekilerin değişmesini istediğin davranışlarını içtenlikle dile getirmeye hazır mısın? Bu derste **wish** ve daha güçlü vurgu taşıyan **if only** kalıplarının **Past Simple**, **Past Perfect** ve **would** ile kurulan üç farklı zaman kullanımını keşfedeceksin. Neden *I wish I would* kalıbının kendi eylemlerimiz için kullanılmadığını ve **were** kullanımının inceliklerini inceleyeceksin. Duygu, sitem ve keşkelerini en doğru kiple doğal bir İngilizceyle ifade edebileceksin.",
    },
    {
      id: "71",
      level: "B2",
      title: "Gerçek Dışı Geçmiş",
      titleEng: "Unreal Past (It's high time, would rather, as if, suppose)",
      titleEx:
        "It's high time you left. I'd rather you didn't smoke here. She talks as if she knew everything.",
      intro:
        "Şu anki durumla gerçek veya arzu ettiğin geçmiş arasında bir köprü kuran incelikli yapıları kullanmaya hazır mısın? Bu derste **It's (high) time + Past Simple**, **would rather + özne + Past Simple**, **as if / as though + Past Simple** ve **suppose / supposing (that)** gibi **Unreal Past** kalıplarını keşfedeceksin. Gerçek olmayan ya da geç kalmış eylemler için geçmiş kiplerin neden seçildiğini ve günlük ile resmi ton farklarını inceleyeceksin. Uyarı, tercih ve hayali senaryolarda İngilizce düşünme sistemine uygun cümleler kurabileceksin.",
    },
    {
      id: "72",
      level: "B2",
      title: "İleri Edilgen Çatı & Ettirgen Yapılar",
      titleEng: "Advanced Passive & Causatives (have/get something done)",
      titleEx: "I had my car repaired yesterday. The bridge is being built.",
      intro:
        "Süregelen ve bitmiş zamanlarda edilgen yapılar kurmayı ve bir hizmeti veya işi başkasına yaptırmayı akıcı biçimde ifade etmeye hazır mısın? Bu derste tüm zaman kipleri ve kip fiillerle (**modals**) çekimlenen ileri edilgen yapıları ile **have / get something done** ettirgen kalıplarını keşfedeceksin. Ayrıca **make, let, have, get** fiillerinin etken ettirgen kullanımlarını ve talihsiz olayları anlatan *have something done* nüansını inceleyeceksin. Günlük işlerden kurumsal raporlara kadar eylemin odağını ustalıkla yönetebileceksin.",
    },
    {
      id: "74",
      level: "B2",
      title: "Be supposed to / Be allowed to / Ought to",
      titleEng: "Be supposed to / Be allowed to / Ought to",
      titleEx:
        "You are supposed to wear a badge. Students aren't allowed to use phones. You ought to apologise.",
      intro:
        "Beklenti, izin ve ahlaki yükümlülükleri tek çatı altında doğru fiil kalıplarıyla ifade etmeye hazır mısın? Bu derste kurallara veya söylentilere dayanan **be supposed to**, resmi ve açık izin bildiren **be allowed to** ile içsel veya toplumsal gerekliliği taşıyan **ought to** yapılarını keşfedeceksin. **to be** çekimleri, olumsuz ve soru biçimleri ile günlük, okul ve iş ortamı örneklerini inceleyeceksin. Topluluk normlarını ve kişisel sorumlulukları birbirine karıştırmadan net cümleler kurabileceksin.",
    },
    {
      id: "75",
      level: "B2",
      title: "İleri Dolaylı Anlatım Fiilleri",
      titleEng: "Reporting Verbs (deny, advise, suggest, accuse)",
      titleEx: "He denied stealing the money. She advised me to apply early.",
      intro:
        "Sürekli *said* ve *told* tekrarlamak yerine konuşmanın niyetini, duygusunu ve tonunu yansıtan zengin aktarım fiillerine geçmeye hazır mısın? Bu derste **deny, admit, suggest, advise, warn, insist, accuse, apologize** gibi ileri düzey dolaylı anlatım fiillerini keşfedeceksin. Her fiilin ardından gelen **V-ing**, **to-infinitive**, **edat + V-ing** veya **that** cümleciği kalıplarını gruplandırarak inceleyeceksin. Akademik metinlerde, özetlerde ve profesyonel konuşmalarda başkalarının fikirlerini çok daha etkileyici biçimde aktarabileceksin.",
    },
    {
      id: "76",
      level: "B2",
      title: "Sıfat Cümleciklerinde Kısaltmalar",
      titleEng: "Reduced Relative Clauses",
      titleEx:
        "The boy standing by the gate is my brother. The book written in 1920 is rare.",
      intro:
        "Uzun sıfat cümleciklerini sadeleştirerek İngilizce cümlelerine çok daha akıcı, yoğun ve doğal bir ritim kazandırmaya hazır mısın? Bu derste **who, which, that** ilgi zamirlerini ve *to be* fiilini düşürerek etken yapıları **V-ing**, edilgen yapıları ise **V3** biçiminde kısaltmayı keşfedeceksin. Ayrıca **the first, the last, the only** veya en üstünlük derecesi içeren ifadelerden sonra kullanılan **to + V1** kısaltmalarını inceleyeceksin. Hem makalelerde hem de konuşma dilinde gereksiz kelimelerden arınmış özlü ifadeler kurabileceksin.",
    },
    {
      id: "77",
      level: "B2",
      title: "İlgi Zamiri + Edat",
      titleEng: "Relative Pronoun + Preposition (in which, to whom)",
      titleEx:
        "The house in which we grew up was sold. The manager to whom I wrote hasn't replied.",
      intro:
        "İlgi zamirlerini edatlarla birlikte zarif ve doğru konumda kullanmaya hazır mısın? Bu derste **in which, to whom, for which, on which** gibi **Relative Pronoun + Preposition** birleşimlerini hem resmi **preposition + whom/which** hem de günlük **preposition + that** (edat sonda) alternatifleriyle keşfedeceksin. **who/which/where** ile edatın başta mı sonda mı duracağını ve yazılı ile sözlü İngilizce farklarını inceleyeceksin. İlişki cümlelerini akıcı ve dilbilgisel olarak kusursuz genişletebileceksin.",
    },
    {
      id: "78",
      level: "B2",
      title: "Zıtlık, Amaç ve Sebep Cümlecikleri",
      titleEng: "Clauses of Contrast, Purpose & Reason",
      titleEx:
        "Despite the heavy rain, the match continued. I left early so that I wouldn't miss it.",
      intro:
        "Fikirlerin arasındaki karşıtlık, amaç ve neden-sonuç ilişkilerini üst düzey bağlaçlarla ustalıkla örmeye hazır mısın? Bu derste **although, even though, despite, in spite of** ile zıtlık; **so that, in order to, so as to** ile amaç; **because, since, as, due to, owing to** ile sebep bildiren yapıları keşfedeceksin. Hangi bağlaçtan sonra isim öbeği veya **V-ing**, hangisinden sonra tam cümle geleceğini net kurallarla inceleyeceksin. Kompozisyonlarında ve tartışmalarda argümanlarını mantıksal bir bütünlükle savunabileceksin.",
    },
    {
      id: "79",
      level: "B2",
      title: "Whereas / While: Karşıtlık Bağlaçları",
      titleEng: "Whereas / While (Contrast Conjunctions)",
      titleEx:
        "Whereas online sales grew, foot traffic fell. While I enjoy the city, the rent is too high.",
      intro:
        "İki durumu veya görüşü aynı cümlede karşılaştırıp dengeli bir kontrast kurmaya hazır mısın? Bu derste **whereas** ile daha resmi ve net karşıtlık, **while / whilst** ile hem zaman hem zıtlık anlamlarını taşıyan **contrast conjunctions** yapılarını keşfedeceksin. Paragraf düzeyinde **although** ile farklarını, cümle pozisyonlarını ve noktalama alışkanlıklarını inceleyeceksin. Rapor, makale ve günlük anlatımda fikirleri yan yana koyarak daha ikna edici metinler yazabileceksin.",
    },
    {
      id: "80",
      level: "B2",
      title: "Duyu Fiilleri + V-ing / V1",
      titleEng: "Verbs of Perception + V-ing / Bare Infinitive",
      titleEx:
        "I heard him leave. I saw her crossing the street. We watched them play football.",
      intro:
        "Duyu fiillerinden sonra eylemin tamamını mı süregelen halini mi vurgulayacağını bilinçli seçmeye hazır mısın? Bu derste **see, hear, watch, feel, notice** gibi **verbs of perception** sonrasında **bare infinitive** (V1) ile **V-ing** arasındaki anlam farkını keşfedeceksin. Tamamlanmış eylem ile devam eden süreç vurgusu, aktif ve edilgen örnekler ile **make / let** ile benzerlikleri inceleyeceksin. Gözlem ve deneyim anlatırken dinleyicide doğru görüntüyü oluşturabileceksin.",
    },
    {
      id: "81",
      level: "B2",
      title: "The more... the more",
      titleEng: "Double Comparatives (The more... the more)",
      titleEx:
        "The more you practise, the better you get. The harder the problem, the more rewarding the solution.",
      intro:
        "İki değişken arasındaki orantılı ilişkiyi tek kalıpla güçlü biçimde ifade etmeye hazır mısın? Bu derste **The + comparative, the + comparative** yapısıyla kurulan **Double Comparatives** kalıbını sıfat, zarf ve fiil çekimleriyle keşfedeceksin. **The more..., the more... / The less..., the sooner...** gibi yaygın kombinasyonları ve kelime sırası kurallarını inceleyeceksin. Motivasyon, tavsiye ve genellemelerde İngilizce'de doğal ve vurucu karşılaştırmalar kurabileceksin.",
    },
    {
      id: "82",
      level: "B2",
      title: "İleri Düzey Artikel Kullanımı",
      titleEng: "Advanced Article Usage (Zero Article)",
      titleEx:
        "She goes to school by bus. Life is hard without education. Mount Everest is in Asia.",
      intro:
        "Belirli veya genel anlamda **the** kullanılmayan isim gruplarında sıfır artikeli doğru uygulamaya hazır mısın? Bu derste **zero article** ile işaret edilen genel kavramlar, coğrafi isimler, yiyecek, dil, spor ve soyut isimlerde **a/an** ile **the** ayrımını keşfedeceksin. **go to school / go to the school**, **in hospital / in the hospital** gibi anlamı değiştiren çiftleri inceleyeceksin. İleri düzey metinlerde artikel seçiminden kaynaklanan belirsizlikleri ortadan kaldırabileceksin.",
    },
    {
      id: "83",
      level: "B2",
      title: "Belirleyiciler & İleri Miktar Belirteçleri",
      titleEng:
        "Determiners & Advanced Quantifiers (all, every, each, most, none)",
      titleEx:
        "Every student passed. Each of them has a locker. Most people agree; none of them objected.",
      intro:
        "Tüm, her, çoğu ve hiçbiri gibi miktar ve kapsam bildiren belirleyicileri doğru isimle eşleştirmeye hazır mısın? Bu derste **all, every, each, most, none** ve bunların **of** ile kurulan formlarını (**all of, each of, none of**) keşfedeceksin. Tekil ve çoğul isim uyumu, **every** ile **each** ince farkı ve **most** ile **the most** ayrımını örneklerle inceleyeceksin. Toplu ifadelerde ve istatistik anlatımında hatasız belirleyici seçimi yapabileceksin.",
    },
    {
      id: "84",
      level: "B2",
      title: "Paralel Yapılar",
      titleEng: "Parallel Structures",
      titleEx:
        "She likes hiking, swimming, and cycling. The report was clear, concise, and well researched.",
      intro:
        "Listenin, sıfatların ve fiil öbeklerinin aynı dilbilgisel formda dizildiği dengeli cümleler kurmaya hazır mısın? Bu derste **parallel structures** ilkesini **and, or, but** ile bağlanan ögelerde uygulamayı keşfedeceksin. Karışık türlerden (**V-ing** ile **to + V1**, sıfat ile isim) kaynaklanan **faulty parallelism** hatalarını tespit etme ve düzeltme yollarını inceleyeceksin. Yazılı İngilizcede akıcı, profesyonel ve kolay okunan paragraflar oluşturabileceksin.",
    },
  ],
  C1: [
    {
      id: "85",
      level: "C1",
      title: "İleri Gelecek Yapıları",
      titleEng:
        "Advanced Future Expressions (be about to, be due to, be set to)",
      titleEx:
        "The train is about to leave. The product is due to launch in May. The deal is set to close tonight.",
      intro:
        "Çok yakın gelecekte, planlı biçimde veya kaçınılmaz şekilde gerçekleşecek olayları keskin zaman ifadeleriyle anlatmaya hazır mısın? Bu derste **be about to**, **be due to**, **be set to** ve benzeri **advanced future expressions** kalıplarını **will** / **going to** ile nüans farklarıyla keşfedeceksin. Pasif formlar, resmi duyuru dili ve haber metinlerindeki tipik kullanımları inceleyeceksin. Sunum, basın ve profesyonel yazışmalarda gelecek olayları özgüvenli ve doğal vurgulayabileceksin.",
    },
    {
      id: "86",
      level: "C1",
      title: "Devrik Cümleler (Olumsuz & Kısıtlayıcı Zarflar)",
      titleEng: "Inversion with Negative & Limiting Adverbials",
      titleEx:
        "Seldom have I seen such a detailed analysis. Not only did he win, but he also broke the record.",
      intro:
        "İngilizce anlatımına edebi bir derinlik, güçlü bir vurgu ve resmi bir otorite kazandırmaya hazır mısın? Bu derste **seldom, rarely, never, hardly...when, no sooner...than, not only...but also, under no circumstances** gibi olumsuz veya sınırlayıcı zarflar cümle başına geldiğinde soru cümlesi düzeninde yardımcı fiil ile öznenin yer değiştirdiği **Inversion** yapısını keşfedeceksin. Basit zamanlarda **do / does / did** kullanımını ve vurgulanmak istenen ögeyi öne taşıma tekniklerini inceleyeceksin. İleri düzey yazılı ve sözlü söylemlerde dramatik ve etkileyici bir üslup yakalayabileceksin.",
    },
    {
      id: "87",
      level: "C1",
      title: "Koşul Cümlelerinde Devriklik & Alternatif Bağlaçlar",
      titleEng: "Conditional Inversion & Alternatives to 'If'",
      titleEx:
        "Had I known about the delay, I would have stayed. Provided that you agree, we can start.",
      intro:
        "Koşul cümlelerini klasik *if* kalıbının ötesine taşıyarak akademik, hukuki ve resmi bir esneklikle kurmaya hazır mısın? Bu derste **if** bağlacını düşürerek oluşturulan **Were I..., Had I..., Should you...** devrik koşul yapılarını ve ince ihtimal farklarını keşfedeceksin. Ayrıca **provided that, as long as, unless, on condition that, in case, supposing** gibi alternatif koşul bağlaçlarının anlam nüanslarını inceleyeceksin. Şart ifadelerini üst düzey metinlerde ve profesyonel yazışmalarda zarifçe çeşitlendirebileceksin.",
    },
    {
      id: "88",
      level: "C1",
      title: "Bölünmüş & Vurgu Cümleleri",
      titleEng: "Cleft Sentences (It-clefts & Wh-clefts)",
      titleEx:
        "It was John who solved the bug. What I need right now is a clear answer.",
      intro:
        "Cümledeki belirli bir bilgiyi spot ışığı altına alarak okuyucunun veya dinleyicinin dikkatini tam istediğin noktaya çekmeye hazır mısın? Bu derste kişi, nesne, zaman veya yeri öne çıkaran **It-cleft** (**It is / was ... who / that**) ile eyleme veya duruma odaklanan **Wh-cleft** (**What + özne + fiil + is / was**) yapılarını keşfedeceksin. Ayrıca **All (that), The reason why, The place where** gibi ileri düzey vurgu kalıplarını inceleyeceksin. Tartışmalarda, sunumlarda ve yazılı analizlerde mesajının ikna gücünü en üst düzeye çıkarabileceksin.",
    },
    {
      id: "89",
      level: "C1",
      title: "Vurgulayıcı Do / Did",
      titleEng: "Emphatic Do / Did",
      titleEx:
        "I do like your idea. She did finish the report on time. Do tell me what happened.",
      intro:
        "Şüpheyi yok etmek veya duyguyu güçlendirmek için yardımcı **do / does / did** kullanımına hakim olmaya hazır mısın? Bu derste **Present Simple** ve **Past Simple** olumlu cümlelerde özneden önce gelen **emphatic do / did** ile vurgu ve sürpriz tonunu keşfedeceksin. **I do agree, She did apologise** örnekleriyle olasılık fiilleri ve kısaltmalarla karışmamasını inceleyeceksin. Tartışma ve diyalogda ne dediğini netleştirip karşındakini ikna edecek tonu kullanabileceksin.",
    },
    {
      id: "90",
      level: "C1",
      title: "İstek & Dilek Kipi (Subjunctive Mood)",
      titleEng: "Mandative Subjunctive Mood",
      titleEx:
        "It is essential that he be present at the hearing. They demanded that the report be revised.",
      intro:
        "Resmi talepleri, önerileri, kararları ve zorunlulukları en rafine dilbilgisi kurallarıyla ifade etmeye hazır mısın? Bu derste **demand, insist, recommend, suggest, propose** fiilleri ve **it is essential / vital / imperative / crucial that** sıfat kalıplarının ardından özneye veya zamana bakılmaksızın fiilin yalın halinin (**V1**, olumsuzda **not + V1**, edilgende **be + V3**) kullanıldığı **Mandative Subjunctive** yapısını keşfedeceksin. İngiliz ve Amerikan İngilizcesindeki *should* alternatifleriyle farkını inceleyeceksin. Kurumsal ve akademik dilde kusursuz ve otoriter bir üslup yakalayabileceksin.",
    },
    {
      id: "91",
      level: "C1",
      title: "İleri Düzey Ortaç & Ulaç Cümlecikleri",
      titleEng: "Advanced Participle Clauses",
      titleEx: "Having completed the project, she presented it to the board.",
      intro:
        "Uzun zarf ve bağlaç yan cümleciklerini tek bir akıcı ortaç yapısında birleştirerek anlatımına yoğunluk ve edebi zarafet katmaya hazır mısın? Bu derste zaman, neden-sonuç ve koşul bildiren yan cümleleri etken yapılarda **V-ing**, edilgen yapılarda **V3** ve öncelik-sonralık ilişkisinde **Having + V3** / **Having been + V3** kalıplarıyla kısaltmayı keşfedeceksin. Öznesi ana cümleden farklı olan yapıları (**nominative absolute**) ve anlam karışıklığına yol açan **dangling participles** hatalarından kaçınma yöntemlerini inceleyeceksin. Akademik makalelerde ve ileri düzey metinlerde akıcı bir sentez gücü kazanacaksın.",
    },
    {
      id: "92",
      level: "C1",
      title: "Whatever / Whoever / However",
      titleEng: "Whatever / Whoever / However",
      titleEx:
        "Whatever you decide, I'll support you. Whoever arrives first gets a seat. However hard you try, some things won't change.",
      intro:
        "Ne olursa olsun, kim olursa olsun veya her ne kadar kalıplarıyla koşulsuz ve esnek anlam kurmaya hazır mısın? Bu derste **whatever, whoever, whichever, however** ile **-ever** eklisinin kurduğu **free relative clauses** yapılarını keşfedeceksin. **However + sıfat/zarf** ile zıtlık, nesne ve özne rollerindeki kelime dizilimini inceleyeceksin. Günlük konuşmadan akademik metne kadar geniş bir üslupta özgür ve güçlü cümleler kurabileceksin.",
    },
    {
      id: "93",
      level: "C1",
      title: "Sıfat Dereceleri & Pekiştirme",
      titleEng:
        "Gradable Adjectives & Intensifiers (utterly, fairly, absolutely)",
      titleEx: "utterly exhausted, fairly good, absolutely right",
      intro:
        "Derecelendirilebilir ve mutlak sıfatların üzerine binen **intensifier** (pekiştirme) zarflarını seçerken üslubunun doğallığını ve akademik keskinliğini artırmaya hazır mısın? Bu derste **utterly, fairly, absolutely, quite, virtually** gibi yapıların **gradable** ile **ungradable (absolute)** sıfatlarla uyumunu ve anlam kaymalarını keşfedeceksin. **Fairly** ile yapılan ölçülü vurgu ile **absolutely** ve **utterly** ile kurulan tamamlayıcı güçlendirmelerin ton farklarını inceleyeceksin. İleri düzey yazı ve sözlü anlatımlarda değerlendirme ve yargıları ince derecelendirerek ifade edebileceksin.",
    },
    {
      id: "94",
      level: "C1",
      title: "Zarf Yerleşimi",
      titleEng: "Adverb Placement",
      titleEx:
        "She carefully explained the issue. Only then did I realise the truth.",
      intro:
        "Zarfların cümle içindeki konumunun anlamı, vurguyu ve resmiyeti nasıl belirlediğini bilinçli biçimde yönetmeye hazır mısın? Bu derste **frequency, manner, degree** ve **sentence adverbs** için fiil öncesi, fiil-sonrası ve cümle başı-sonu seçeneklerini ve **only, even, still** gibi ögelerin yer değiştirmeyi tetiklediği durumları keşfedeceksin. **Split infinitive** (**to carefully consider**) ile geleneksel dizilim arasındaki kayıt farklarını ve çoklu zarf sıralamasını inceleyeceksin. Karmaşık cümlelerde anlamı tam istediğin ögeye çekerek daha net ve profesyonel bir ritim kurabileceksin.",
    },
    {
      id: "95",
      level: "C1",
      title: "İsim Cümlecikleri",
      titleEng: "Noun Clauses (What he said surprised me)",
      titleEx:
        "What he said surprised me. / That she left so early worried them.",
      intro:
        "Özne, nesne veya tamamlayıcı konumunda yer alan **noun clauses** ile düşünce, duyum ve yargıları tek bir cümlede bütünleştirmeye hazır mısın? Bu derste **what, that, whether, if** ve **wh-** bağlantılı **noun clauses** yapılarının ana cümle ile uyumunu ve fiil çekimini keşfedeceksin. **Whatever, whoever, whichever** ile genişletilmiş öbeklerin ve **anticipatory it** (**It is clear that...**) kalıplarının işlevini inceleyeceksin. Akademik tartışma, rapor ve günlük üst düzey anlatımlarda soyut fikirleri açık ve tutarlı biçimde bağlayabileceksin.",
    },
    {
      id: "96",
      level: "C1",
      title: "Edilgen Infinitive/Gerund & Perfect Edilgen",
      titleEng:
        "Passive Infinitives/Gerunds & Perfect Passive (to be done, having been told)",
      titleEx:
        "The task is to be done by Friday. / Having been told the truth, she remained silent.",
      intro:
        "Edilgen anlamı **infinitive** ve **gerund** öbeklerine taşıyarak eylemin kime yöneldiğini ve zaman ilişkisini incel biçimde ifade etmeye hazır mısın? Bu derste **to be done, being repaired, having been informed** gibi **passive infinitive / gerund** kalıplarını ve **perfect passive** (**to have been V3, having been V3**) yapılarını keşfedeceksin. **Need / want + V-ing**, **be supposed to be V3** ve rapor dilindeki **expected to be completed** örüntülerinin kullanımını inceleyeceksin. Kurumsal yazışma ve akademik metinlerde süreç, sorumluluk ve sonuçları sofistike bir dilbilgisiyle aktarabileceksin.",
    },
    {
      id: "97",
      level: "C1",
      title: "Perfect Gerund & Infinitive",
      titleEng: "Perfect Gerund & Infinitive (I regret having said that)",
      titleEx:
        "I regret having said that. / He seems to have forgotten the meeting.",
      intro:
        "Eylemin ana fiilden önce mi sonra mı gerçekleştiğini **perfect gerund** ve **perfect infinitive** ile kesin sınırlarla ifade etmeye hazır mısın? Bu derste **regret / remember / forget / try** gibi fiillerde **V-ing** ile **perfect** formların (**having V3, to have V3**) anlam farklarını keşfedeceksin. **Appear, seem, claim, be believed** yapılarında **to have V3** kullanımı ile geçmişe yönelik çıkarımları inceleyeceksin. Pişmanlık, varsayım ve rapor edilen olayları üst düzey İngilizcede zaman doğruluğuyla anlatabileceksin.",
    },
    {
      id: "98",
      level: "C1",
      title: "Mesafe Koyma & Kesinlikten Kaçınma Yapıları",
      titleEng: "Distancing & Hedging Language",
      titleEx:
        "The suspect is alleged to have fled the country. It is widely believed that markets will recover.",
      intro:
        "Akademik yazılarda, gazetecilik dilinde ve bilimsel tartışmalarda iddiaları nesnel bir mesafeyle sunmaya ve aşırı genellemelerden kaçınmaya hazır mısın? Bu derste **is alleged to, is believed to have V3, it is widely acknowledged that** gibi mesafe koyma (**distancing**) yapıları ile **appear, seem, tend to, arguably, conceivably** gibi kesinlikten kaçınma (**hedging**) araçlarını keşfedeceksin. Kanıtlanmamış bilgileri veya karmaşık tezleri temkinli, tarafsız ve ikna edici bir üslupla temellendirmeyi inceleyeceksin. İleri düzey akademik ve profesyonel yazışmalarda güvenilir bir yazar sesi oluşturabileceksin.",
    },
    {
      id: "99",
      level: "C1",
      title: "Eksiltme, Yerine Koyma & Söylem Belirleyicileri",
      titleEng: "Ellipsis, Substitution & Advanced Discourse Markers",
      titleEx:
        "A: Will they join us? B: I hope so. / Notwithstanding the high costs, the plan succeeded.",
      intro:
        "Gereksiz kelime tekrarlarından kaçınarak ve fikirler arasında sofistike mantıksal köprüler kurarak ana dili düzeyinde bir metin bütünlüğü yakalamaya hazır mısın? Bu derste bağlamdan anlaşılan ögeleri düşürmeye dayanan **Ellipsis**, tekrarlanan isim veya tümcelerin yerine **one / ones, do so, so / not** ifadelerini getiren **Substitution** yöntemlerini ve **notwithstanding, nonetheless, albeit, thereby, hence** söylem belirleyicilerini keşfedeceksin. Paragraflar ve konuşma turları arasında pürüzsüz bir akış kurmayı inceleyeceksin. Anlatımını hem ekonomik hem de son derece tutarlı bir yapıya kavuşturabileceksin.",
    },
    {
      id: "100",
      level: "C1",
      title: "Kalıp İfadeler & Collocations",
      titleEng: "Fixed Expressions & Collocations",
      titleEx: "take into account, bear in mind, come to terms with",
      intro:
        "Tek tek kelimeler yerine ana dili konuşanların kullandığı **fixed expressions** ve **collocations** ile ifadenin doğallığını ve ikna gücünü yükseltmeye hazır mısın? Bu derste **make a decision** (*do a decision* değil), **raise awareness, commit a crime, heavy rain** gibi sıkı eşdizim örüntülerini ve **phrasal / prepositional verbs** ile sabit kalıpları keşfedeceksin. **Formal register** ile **informal** ortamlarda tercih edilen alternatifleri ve yanlış çeviri tuzaklarını inceleyeceksin. Yazılı ve sözlü iletişimde takılmadan, akıcı ve yerinde kalıp kullanabileceksin.",
    },
    {
      id: "101",
      level: "C1",
      title: "Bağdaşıklık & Tutarlılık",
      titleEng: "Cohesion & Coherence",
      titleEx:
        "Furthermore, the data support this claim. / In contrast, earlier studies disagreed.",
      intro:
        "Paragraf ve bölümler arasında mantıksal bağ kurarak **cohesion** ile anlam bütünlüğünü (**coherence**) birlikte güçlendirmeye hazır mısın? Bu derste **furthermore, nevertheless, consequently, in contrast** gibi **discourse markers**, **this / these / such** ile **anaphoric reference** ve **lexical cohesion** (eş anlamlı ve tekrar önleyici **synonymy / substitution**) araçlarını keşfedeceksin. Konu cümlesi, gelişme ve sonuç örgüsünün okuyucuyu kaybetmeden ilerlemesini inceleyeceksin. Akademik makale, sunum ve uzun metinlerde fikirlerinin akışını profesyonel düzeyde tutarlı kılacaksın.",
    },
    {
      id: "102",
      level: "C1",
      title: "İleri Noktalama",
      titleEng: "Advanced Punctuation",
      titleEx:
        "The results—unexpected as they were—proved decisive; however, further study is needed.",
      intro:
        "Virgülün ötesinde **semicolon, colon, dash, parentheses** ve **quotation marks** ile anlamı, duraklamayı ve vurguyu bilinçli biçimde yönlendirmeye hazır mısın? Bu derste **em dash** ile ara cümle ekleme, **colon** ile açıklama veya liste sunma, **semicolon** ile bağımsız ama bağlı cümleleri birleştirme kurallarını keşfedeceksin. **Restrictive vs. non-restrictive** virgül kullanımı, **sic**, çoklu noktalama ve akademik atıf biçimlerindeki ince ayrımları inceleyeceksin. İleri düzey yazılarda okunabilirliği ve otoriter bir biçimsel titizliği bir arada sürdürebileceksin.",
    },
  ],
  C2: [
    {
      id: "73",
      level: "C2",
      title: "Pasif Bildirme Yapıları",
      titleEng:
        "Passive Reporting Structures (It is said that / He is said to)",
      titleEx:
        "It is said that the economy will recover. He is said to be leaving the company next month.",
      intro:
        "Üçüncü şahıs kaynaklardan aktarılan bilgiyi nesnel ve sofistike bir pasif üslupla sunmaya hazır mısın? Bu derste **It is said / believed / reported that + cümle** ile **Özne + is said to + infinitive** formundaki **Passive Reporting Structures** yapılarını keşfedeceksin. Zaman uyumu (**to be doing, to have done**) ve akademik ile gazetecilik dilindeki tipik kullanımları inceleyeceksin. İleri düzey metinlerde iddia ve söylentileri doğrudan atıf yapmadan profesyonel bir mesafeyle aktarabileceksin.",
    },
    {
      id: "103",
      level: "C2",
      title: "Üslupsal Öne Çıkarma & Ödünleme Yapıları",
      titleEng: "Stylistic Fronting & Concessive Inversion",
      titleEx:
        "Rich as he was, he lived humbly. Try as he might, he couldn't convince the committee.",
      intro:
        "Söz dizimini ustalıkla esneterek karşıtlık, ödünleme ve dramatik vurgu anlamlarını edebi bir ritimle ifade etmeye hazır mısın? Bu derste sıfat, zarf veya fiil öbeklerinin cümle başına taşındığı **Rich as he was, Try as he might, Much as I admire** gibi **Concessive Inversion** kalıpları ile nesne ve yer yön öbeklerinin öne çıkarıldığı **Stylistic Fronting** yapılarını keşfedeceksin. **So + sıfat + be + özne** ve **Such + be + özne** dizilimlerinin retorik etkisini inceleyeceksin. İleri düzey yazılı ve sözlü anlatımlarda üslup zenginliğini zirveye taşıyabileceksin.",
    },
    {
      id: "104",
      level: "C2",
      title: "Geçmişte Gelecek Nüansları",
      titleEng:
        "Future in the Past (was to have been V3, was on the verge of V-ing)",
      titleEx:
        "The ceremony was to have been held last week. / He was on the verge of resigning.",
      intro:
        "Geçmiş bir bakış açısından geleceğe yönelik plan, beklenen sonuç veya vazgeçilmiş niyeti **future in the past** yapılarıyla ifade etmeye hazır mısın? Bu derste **was / were to V**, gerçekleşmemiş planlar için **was to have been V3** ve ani eşik anları için **was on the point / verge / brink of V-ing** kalıplarını keşfedeceksin. **Was going to**, **would** ve **was about to** ile anlam ve kayıt farklarını inceleyeceksin. Anlatı, tarihsel özet ve ileri düzey raporlarda zaman çizgisini nüanslı ve kusursuz biçimde kurabileceksin.",
    },
    {
      id: "105",
      level: "C2",
      title: "İleri Düzey İsimleştirme & Sözdizimsel Yoğunluk",
      titleEng: "Advanced Nominalization & Syntactic Density",
      titleEx:
        "The rapid proliferation of AI tools necessitated an immediate overhaul of existing regulations.",
      intro:
        "Fiil ve sıfatları soyut kavramlara ve karmaşık isim öbeklerine dönüştürerek akademik, hukuki ve kurumsal metinlere yüksek bilgi yoğunluğu kazandırmaya hazır mısın? Bu derste uzun yan cümleleri özlü isim tamlamalarıyla özetleyen **Advanced Nominalization** stratejilerini ve çok katmanlı niteleyici yapıları keşfedeceksin. Günlük konuşma dilindeki fiil ağırlıklı ifadeleri nesnel, otoriter ve sıkı bir akademik sözdizimine dönüştürme tekniklerini inceleyeceksin. Profesyonel raporlarda, makalelerde ve üst düzey sunumlarda etkileyici bir dil mimarisi kurabileceksin.",
    },
    {
      id: "106",
      level: "C2",
      title: "Kalıplaşmış İstek Kipleri & Biçem/Ton Nüansları",
      titleEng: "Fixed Subjunctives, Register & Tone Nuances",
      titleEx:
        "Be that as it may, we must proceed. Suffice it to say, the outcome was far from satisfactory.",
      intro:
        "İngilizcenin tarihsel kalıplarını ve muhataba, ortama veya amaca göre değişen en ince üslup nüanslarını tam bir ustalıkla yönetmeye hazır mısın? Bu derste **Be that as it may, Suffice it to say, Far be it from me, Come what may, Lest we forget** gibi yerleşik istek kiplerini ve edebi-arkaik ifadeleri keşfedeceksin. Resmi, akademik, diplomatik, nötr ve gündelik dil düzeyleri (**register**) arasındaki ince sözcük ve dilbilgisi geçişleri ile ironi, nezaket ve vurgu tonlamalarını inceleyeceksin. Her iletişim ortamında mesajının etkisini en üst düzeye çıkarabileceksin.",
    },
    {
      id: "107",
      level: "C2",
      title: "Edimbilimsel Anlam & İma",
      titleEng: "Pragmatic Meaning & Implicature",
      titleEx: "A: It's cold in here. B: I'll close the window. (implicature)",
      intro:
        "Söylenenin ötesinde taşınan **pragmatic meaning** ve **conversational implicature** ile gerçek iletişim niyetini çözümlemeye hazır mısın? Bu derste **Grice'ın işbirlikçi ilke**leri (**quantity, quality, relation, manner**) ve **flouting / violating** ile oluşan ima katmanlarını keşfedeceksin. Dolaylı **requests**, **indirect speech acts** ve bağlamın anlamı nasıl belirlediğini örnek diyaloglarla inceleyeceksin. Üst düzey okuma, müzakere ve kültürlerarası iletişimde söylenmeyeni de güvenle yorumlayıp uygun karşılık verebileceksin.",
    },
    {
      id: "108",
      level: "C2",
      title: "İleri Bilgi Yapısı",
      titleEng: "Advanced Information Structure",
      titleEx:
        "It was the evidence that convinced the jury. / As for the budget, we need deeper cuts.",
      intro:
        "Eski ve yeni bilgiyi (**given vs. new**) bilinçli sıralayarak **information structure** ile okuyucunun dikkatini yönetmeye hazır mısın? Bu derste **theme–rheme**, **end-focus** ilkesi, **topicalization** ve **As for / Regarding** gibi çerçeveleme öbeklerini keşfedeceksin. **Cleft sentences**, **existential there** ve **passive** seçiminin odak ve vurguya etkisini inceleyeceksin. Akademik ve profesyonel metinlerde karmaşık argümanları anlaşılır, hiyerarşik ve ikna edici bir akışla sunabileceksin.",
    },
    {
      id: "109",
      level: "C2",
      title: "İroni & Retorik Yapılar",
      titleEng: "Irony & Rhetorical Structures",
      titleEx: "What a brilliant idea—to cancel the launch for the third time.",
      intro:
        "Sözün tam tersini kasteden **irony** ile soru, tekrar ve karşıtlık üzerinden kurulan **rhetorical structures** ile üslubuna derinlik katmaya hazır mısın? Bu derste **sarcasm**, **litotes**, **hyperbole** ve **rhetorical questions** gibi retorik araçların ton ve bağlamla ilişkisini keşfedeceksin. **Antithesis**, **parallelism**, **chiasmus** ve vurgulu söylem kalıplarının ikna ve mizah işlevlerini inceleyeceksin. Edebiyat, medya dili ve üst düzey tartışmalarda niyeti, mizahı ve eleştiriyi ince katmanlarıyla okuyup üretebileceksin.",
    },
    {
      id: "110",
      level: "C2",
      title: "İleri Deyimsel Dil & Eşdizim Kalıpları",
      titleEng: "Advanced Idiomatic Language & Collocational Patterns",
      titleEx: "by and large, at the end of the day, the ball is in your court",
      intro:
        "Kalıplaşmış **idioms**, deyimsel fiiller ve istatistiksel olarak birlikte gelen **collocational patterns** ile ana diline yakın bir akıcılığa ulaşmaya hazır mısın? Bu derste **break the ice, bite the bullet, shed light on** gibi deyimlerin bağlamsal anlamlarını ve **strong / weak collocations** ayrımını keşfedeceksin. Kayıt düzeyine göre **formal vs. informal** kalıp seçimi ile yanlış eşdizim hatalarından kaçınma stratejilerini inceleyeceksin. İş İngilizcesi, günlük üst düzey sohbet ve akademik diyaloglarda doğal, yerinde ve etkileyici bir dil kullanabileceksin.",
    },
  ],
};

export const allGrammarHeadings: GrammarHeading[] = (
  Object.keys(grammarHeadings) as CefrLevel[]
).flatMap((level) => grammarHeadings[level]);
