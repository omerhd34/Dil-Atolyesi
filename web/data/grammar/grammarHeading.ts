export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

/**
 * Seslendirme işaretleri (`lessonSpeakText.ts` ile aynı):
 * - `**metin**` — vurgu; Türkçe ses (`\...\` içindeki parça İngilizce ses).
 * - `\metin\` — yalnızca İngilizce okunur (kaynakta `\\metin\\`).
 * - `/ses/` — fonetik (tek slash), Türkçe akışta.
 *
 * Yazım (çift ses: tr-TR + en-US):
 * - Paragraflar kısa cümlelerle dinlenebilir olsun; paragraf başına tek ana fikir.
 * - İngilizce örnek ve kalıplar tam cümle olarak `\\...\\` içinde yazılsın.
 * - « » ve … kullanmayın; Türkçede doğal ifade veya **vurgu** tercih edin.
 * - Giriş metinleri hedefi net söylesin; aynı kalıp cümleleri tekrarlamayın.
 */

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
        "Doğru okuma ve heceleme İngilizce yolculuğunun ilk adımıdır. Bu derste **26 harflik** alfabeyi, harf adlarını ve kelime içindeki **ses değerlerini** öğreneceksin. **Ünlü** ve **ünsüz** ayrımı, **\\C\\**, **\\G\\**, **\\Y\\** ile değişen sesler ve **\\sh, ch, th\\** ikilileri dersin omurgasıdır. Kısa ve uzun ünlü ipuçlarıyla yeni kelimeleri daha güvenle seslendireceksin.",
    },
    {
      id: "2",
      level: "A1",
      title: "Temel Cümle Yapısı",
      titleEng: "Basic Sentence Structure",
      titleEx: "The dog runs. We eat pizza. She reads books.",
      intro:
        "İngilizce cümlede kelimelerin yeri anlamı şekillendirir. Burada **özne**, **fiil** ve **nesne** ile standart **\\SVO\\** sırasını işleyeceksin. **Olmak** ve **eylem** cümleleri arasındaki farkı netleştirip temel **olumlu**, **olumsuz** ve **soru** iskeletlerini örneklerle pekiştireceksin. Hedef: günlük olayları kısa ve doğru sırayla kurmak.",
    },
    {
      id: "3",
      level: "A1",
      title: "Özne Zamirleri & 'To Be' Fiili",
      titleEng: "Subject Pronouns & 'To Be'",
      titleEx: "I am a developer. She is happy. They are here.",
      intro:
        "Tanışma ve kısa tanımlama cümleleri bu derste. **\\I, you, he, she, it, we, they\\** özne zamirleri ile **\\to be\\** fiilinin **\\am, is, are\\** biçimlerini öğreneceksin. Olumlu, olumsuz ve soru kalıplarının yanında **\\I'm, she's, aren't\\** gibi günlük kısaltmalar var. Kendini, konumunu ve duygunu tek cümlede söylemek bu konunun sonucu.",
    },
    {
      id: "4",
      level: "A1",
      title: "Tanımlıklar & Çoğul İsimler",
      titleEng: "Articles & Plural Nouns",
      titleEx: "a book, an apple, the sun, two dogs, three cities",
      intro:
        "**\\a\\**, **\\an\\** ve **\\the\\** seçimi cümlenin anlamını değiştirir. Bu derste belirsiz ve belirli tanımlıkların temel kuralını ses uyumuyla birlikte ele alıyoruz. Çoğulda **\\-s\\**, **\\-es\\**, **\\-ies\\** ile **\\children, people, men\\** gibi düzensiz formlar da var. Tekil ve çoğul isimleri doğru artikülle kullanmayı hedefliyoruz.",
    },
    {
      id: "5",
      level: "A1",
      title: "İşaret Sıfatları & Zamirleri",
      titleEng: "Demonstratives (This, That, These, Those)",
      titleEx: "This is my laptop. Those are her keys.",
      intro:
        "Yakın ve uzak nesneleri İngilizcede **\\this, that, these, those\\** ile gösterirsin. Kelimeler hem işaret sıfatı hem işaret zamiri olarak çalışır. Mesafe ve tekil–çoğul seçimini **\\to be\\** ile birleştirmeyi öğreneceksin. Alışveriş, tanıtma ve günlük göstermede bu dört kalıp sık kullanılır.",
    },
    {
      id: "6",
      level: "A1",
      title: "Sayılar, Tarih & Saat",
      titleEng: "Numbers, Dates & Time",
      titleEx: "It's half past three on Monday, 15 May.",
      intro:
        "Sayı, tarih ve saat günlük iletişimin temelidir. **Temel sayılar** ve **\\first, second, third\\** gibi sıra sayıları; **\\on Monday, in May\\** ile **\\o'clock, half past\\** kalıpları bu derste. ABD ve İngiltere tarih yazımı ile **\\a.m.\\**, **\\p.m.\\** ve 24 saat ifadesinin özünü de göreceksin. Randevu ve yaş sorularına net cevap vermek hedef.",
    },
    {
      id: "7",
      level: "A1",
      title: "İyelik Sıfatları, Zamirleri & -'s Eki",
      titleEng: "Possessives & Possessive 's",
      titleEx: "My car is blue. That is Ahmet's phone. It is mine.",
      intro:
        "Kime ait olduğunu söylemek için birkaç yapı vardır. **\\my, your, his\\** gibi iyelik sıfatları ile **\\mine, yours, hers\\** zamirlerini ayırt edeceksin. Özel ve çoğul isimlerde **-'s** ve **-s'** yazım kuralları da bu konuda. Karıştırmadan sahiplik kurmak derin hedef.",
    },
    {
      id: "8",
      level: "A1",
      title: "Sahiplik Bildirme: Have got / Has got",
      titleEng: "Possession: Have got / Has got",
      titleEx: "I have got two sisters. He hasn't got a car.",
      intro:
        "**\\have got\\** ve **\\has got\\** İngiliz İngilizcesinde sık duyulan sahiplik kalıplarıdır. **\\I, we, they\\** ile **\\have got\\**; **\\he, she, it\\** ile **\\has got\\** kuralını öğreneceksin. Olumsuz **\\haven't got\\**, soru ve kısa cevaplar da aynı derste. Aile, eşya ve fiziksel özellik anlatımında doğrudan kullanırsın.",
    },
    {
      id: "9",
      level: "A1",
      title: "Temel Sıfatlar & Sıfat Sırası",
      titleEng: "Basic Adjectives & Adjective Order",
      titleEx: "a small blue Italian car. She is very happy.",
      intro:
        "Sıfatlar isimleri ve **\\to be\\** sonrasındaki tamamlayıcıları zenginleştirir. Temel **\\adjectives\\**, **\\-er / more\\** ve **\\the -est / the most\\** dereceleri bu derste. Birden fazla sıfat yan yana gelince **\\adjective order\\** kuralına uyarsın. İnsan ve nesneleri kısa, doğal tanımlarla anlatmak hedef.",
    },
    {
      id: "10",
      level: "A1",
      title: "Zaman & Yer Edatları",
      titleEng: "Prepositions of Time & Place",
      titleEx: "at 5 o'clock, in Istanbul, on Monday, under the table",
      intro:
        "**\\at, in, on\\** hem zaman hem yer için temel edatlardır. Saat, gün, ay ve şehir örnekleriyle hangi bağlamda hangisini seçeceğini öğreneceksin. **\\under, next to, between\\** ve benzeri edatlarla konum tarifi de var. Yanlış edat seçimini bu derste sadeleştiriyoruz.",
    },
    {
      id: "11",
      level: "A1",
      title: "Sayılabilen/Sayılamayan İsimler & Miktar Belirteçleri",
      titleEng: "Countable / Uncountable & Quantifiers",
      titleEx: "some water, any apples, many books, a lot of time",
      intro:
        "Sayılabilen ve sayılamayan isimler farklı miktar kelimeleri ister. **\\water, money, time\\** gibi tekil isimler ile **\\book, apple\\** gibi çoğullaşanlar ayrılır. **\\some, any, many, much, a lot of\\** seçimini olumlu, olumsuz ve soruya göre öğreneceksin. Market ve restoran diyaloglarında doğrudan işine yarar.",
    },
    {
      id: "12",
      level: "A1",
      title: "How much / How many",
      titleEng: "How much / How many",
      titleEx: "How much water do you need? How many chairs are there?",
      intro:
        "Miktar sorusu isim türüne bağlıdır: sayılamayan için **\\How much\\**, sayılabilir çoğul için **\\How many\\**. Cevaplarda **\\some\\**, **\\a lot of\\**, **\\a little\\**, **\\a few\\** sık gelir. **\\There is\\** ve **\\There are\\** ile birlikte market ve restoran diyaloglarında pratik edeceksin.",
    },
    {
      id: "13",
      level: "A1",
      title: "Varlık Bildirme: There is / There are",
      titleEng: "There is / There are",
      titleEx: "There is a cat on the sofa. Are there any chairs?",
      intro:
        "Bir yerde ne olduğunu **\\There is\\** ve **\\There are\\** ile söylersin. Tekil ve çoğul isim seçimi fiili belirler. Olumsuz **\\isn't / aren't\\**, soru **\\Is there / Are there\\** ve kısa cevaplar aynı pakette. Oda, şehir veya masa üstü tarifinde doğal kalıp budur.",
    },
    {
      id: "14",
      level: "A1",
      title: "Geniş Zaman & Sıklık Zarfları",
      titleEng: "Present Simple & Adverbs of Frequency",
      titleEx: "I work every day. She always drinks coffee in the morning.",
      intro:
        "Alışkanlık ve genel gerçekler **\\Present Simple\\** ile anlatılır. **\\always, usually, often\\** gibi sıklık zarflarının yeri ve **\\he, she, it\\** için **\\-s / -es\\** ekleri bu derste. Olumsuz ve soruda **\\do / does\\** yardımcı fiilleri de var. Günlük rutinini uçtan uca kurmak hedef.",
    },
    {
      id: "15",
      level: "A1",
      title: "Evet-Hayır Soruları & Kısa Cevaplar",
      titleEng: "Yes/No Questions & Short Answers",
      titleEx: "Do you like coffee? — Yes, I do. / No, I don't.",
      intro:
        "Evet–hayır soruları günlük diyalogun temelidir. **\\to be\\**, **\\have got\\**, **\\can\\** ve **\\Present Simple\\** ile kurulan **\\yes/no questions\\** yapısını öğreneceksin. Yardımcı fiil öznenin önüne geçer; **\\Yes, she is.\\** ve **\\No, he can't.\\** gibi kısa cevaplar konuşmayı hızlandırır.",
    },
    {
      id: "16",
      level: "A1",
      title: "Temel Soru Kelimeleri",
      titleEng: "Basic Question Words (Wh- Questions)",
      titleEx: "What is this? Who is that? Where are you from?",
      intro:
        "**Wh- soruları** bilgi toplarken en çok kullandığın kalıplardır. Bu derste **\\What, Who, Where, When, Why, How, Which\\** ve **\\Whose\\** kelimelerinin ne sorduğunu netleştirirsin. Soru kelimesinden sonra yardımcı fiil ve öznenin doğru sırasını kurarak eksiksiz sorular kurabilirsin.",
    },
    {
      id: "17",
      level: "A1",
      title: "Emir Kipleri & Nesne Zamirleri",
      titleEng: "Imperatives & Object Pronouns",
      titleEx: "Listen to me. Open your book. Call him later.",
      intro:
        "Emir cümleleri talimat, uyarı ve kibar rica için kısa ve etkilidir. Olumlu emirde fiil yalın başlar; olumsuzda **\\Don't\\** kullanılır. **\\Please\\** ve **\\Let's\\** ile tonu yumuşatır; **\\me, you, him, her, it, us, them\\** nesne zamirlerini fiil veya edattan sonra doğru yere koyarsın.",
    },
    {
      id: "18",
      level: "A1",
      title: "Şimdiki Zaman",
      titleEng: "Present Continuous",
      titleEx: "She is reading a book right now. We are learning English.",
      intro:
        "**\\Present Continuous\\** konuştuğun anda veya geçici süreçte devam eden işleri anlatır. Kalıp **\\am, is, are\\** artı **\\-ing\\** fiilidir. **\\Now, right now, at the moment\\** gibi zaman ifadeleri ve geniş zamanla farkı bu derste netleşir.",
    },
    {
      id: "19",
      level: "A1",
      title: "Kipler: Yapabilmek & İzin (Can / Can't)",
      titleEng: "Modals: Can / Can't",
      titleEx: "I can swim well. Can I sit here?",
      intro:
        "**\\Can\\** ve **\\can't\\** yetenek, olasılık, izin ve nazik rica bildirir. Tüm öznelerde aynı kalır; ardından fiilin yalın hali gelir. **\\I can swim.\\** **\\Can I sit here?\\** gibi günlük kalıpları güvenle kullanırsın.",
    },
    {
      id: "20",
      level: "A1",
      title: "Would like: Sipariş & Rica",
      titleEng: "Would like: Orders & Requests",
      titleEx: "I'd like a coffee, please. Would you like some water?",
      intro:
        "**\\Would like\\**, **\\want\\**'a göre daha kibar istek ve teklif içindir. **\\I'd like a coffee.\\** ile sipariş verir; **\\Would you like some tea?\\** ile karşı tarafa seçenek sunarsın. Sayılabilir ve sayılamayan isimlerle doğru miktar ifadesini eşleştirirsin.",
    },
    {
      id: "21",
      level: "A1",
      title: "Temel Bağlaçlar",
      titleEng: "Basic Conjunctions (and, but, or, because, so)",
      titleEx: "I stayed home because it was cold, so I watched a film.",
      intro:
        "Kısa cümleleri bağlaçlarla birleştirince anlatım daha akıcı olur. **\\And\\** ekleme, **\\but\\** zıtlık, **\\or\\** seçenek, **\\because\\** sebep, **\\so\\** sonuç bildirir. Virgül ve anlam ilişkisini doğru kurarak kendi hikayeni tek parçada anlatabilirsin.",
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
        "**\\Past Simple\\** bitmiş geçmiş olayları anlatır. İsim cümlelerinde **\\was, were\\**; eylem cümlelerinde **\\-ed\\** veya düzensiz **\\V2\\** kullanılır. Soru ve olumsuzda **\\did, didn't\\** gelir; asıl fiil yalın kalır. **\\Yesterday, last week, two days ago\\** gibi ifadeler zamanı netleştirir.",
    },
    {
      id: "23",
      level: "A2",
      title: "Geçmişte Süreklilik Zamanı",
      titleEng: "Past Continuous",
      titleEx: "It was raining at 8 PM when I arrived home.",
      intro:
        "**\\Past Continuous\\**, geçmişte belli bir anda süren eylemi **\\was, were\\** artı **\\-ing\\** ile kurar. **\\When\\** ani olay, **\\while\\** uzun süren arka plan için kullanılır. Geçmiş hikayelerde atmosfer ve kesilen eylem bir arada akıcı anlatılır.",
    },
    {
      id: "24",
      level: "A2",
      title: "Durum Zarfları",
      titleEng: "Adverbs of Manner",
      titleEx: "She speaks slowly. He drives carefully.",
      intro:
        "Durum zarfları eylemin **nasıl** yapıldığını söyler. Çoğu sıfattan **\\-ly\\** ile türetilir: **\\quick\\** kelimesinden **\\quickly\\**. **\\Good\\** sıfat, **\\well\\** zarf olarak kullanılır. Zarf fiilden önce, nesneden sonra veya cümle sonunda konumlanabilir.",
    },
    {
      id: "25",
      level: "A2",
      title: "Geniş Zaman vs. Şimdiki Zaman & Durum Fiilleri",
      titleEng: "Present Simple vs. Continuous & Stative Verbs",
      titleEx: "I work every day. She is cooking now. I know him.",
      intro:
        "Rutin ve genel gerçekler için **\\Present Simple\\**, şu an devam eden işler için **\\Present Continuous\\** seçilir. **\\Know, like, believe, want\\** gibi durum fiilleri genelde sürekli zaman almaz. **\\Every day\\** ile **\\now\\** gibi zaman ipuçları doğru seçimi kolaylaştırır.",
    },
    {
      id: "26",
      level: "A2",
      title: "Karşılaştırma & En Üstünlük Dereceleri",
      titleEng: "Comparatives & Superlatives",
      titleEx: "Istanbul is bigger than Ankara. It is the largest city.",
      intro:
        "İki şeyi kıyaslamak için karşılaştırma, gruptaki en üstü için en üstünlük derecesi kullanılır. Kısa sıfatlarda **\\-er\\** ve **\\than\\**; uzun sıfatlarda **\\more\\** ve **\\the most\\** gelir. **\\Good, better, the best\\** ile **\\bad, worse, the worst\\** düzensiz formları ezberlersin.",
    },
    {
      id: "27",
      level: "A2",
      title: "Derecelendirme ve Karşılaştırma Yapıları",
      titleEng: "As...as, Too & Enough",
      titleEx: "This laptop isn't fast enough. It's as expensive as yours.",
      intro:
        "**\\As ... as\\** eşitlik veya farkı gösterir; olumsuzda **\\not as\\** ile **kadar ... değil** anlamı kurulur. **\\Too\\** fazlalık, **\\enough\\** yeterlilik bildirir. **\\Enough\\** sıfattan sonra, isimden önce gelir; bu sıra karışıklığı önler.",
    },
    {
      id: "28",
      level: "A2",
      title: "Too much / Too many / A few / A little",
      titleEng: "Too much / Too many / A few / A little",
      titleEx: "Too much sugar. Too many emails. A few friends. A little time.",
      intro:
        "Miktar ifadeleri sayılabilir ve sayılamayan isimle eşleşmelidir. Sayılamayanlarla **\\too much, a little\\**; sayılabilir çoğulla **\\too many, a few\\** kullanılır. **\\Too\\** fazlalık uyarısı verir; **\\a few\\** ve **\\a little\\** olumlu cümlede küçük miktar anlatır.",
    },
    {
      id: "29",
      level: "A2",
      title: "So / Such",
      titleEng: "So / Such",
      titleEx: "It's so cold today! She is such a kind teacher.",
      intro:
        "**\\So\\** sıfat veya zarfı güçlendirir: **\\so cold\\**. **\\Such\\** isim tamlamasının önünde gelir: **\\such a nice day\\**. **\\So many\\**, **\\so much\\** ve **\\such a lot of\\** ile günlük konuşmada vurguyu doğal kurarsın.",
    },
    {
      id: "30",
      level: "A2",
      title: "Gelecek Zaman (Will vs. Going to)",
      titleEng: "Future Forms: Will, Going to & Present Continuous",
      titleEx: "I think it will rain. / I am going to study tonight.",
      intro:
        "Gelecek için üç yaygın kalıp vardır. Ani karar ve tahminde **\\will\\**; önceden düşünülmüş niyette **\\be going to\\**; kesin randevu ve takvimde **\\Present Continuous\\** tercih edilir. Aynı durumda niyet farkı hangi zamanı seçeceğini belirler.",
    },
    {
      id: "31",
      level: "A2",
      title: "Yakın Geçmiş Zaman",
      titleEng: "Present Perfect Simple (ever, never, just, already, yet)",
      titleEx: "I have seen that movie before. Have you finished yet?",
      intro:
        "Zamanı net söylemeden geçmiş deneyim veya bugüne uzanan sonuç anlatırken **\\Present Perfect Simple\\** devreye girer. **\\have / has + V3\\** kalıbını, **\\ever, never, just, already, yet\\** kelimelerinin cümle içindeki yerini ve günlük soru-cevap örneklerini bu derste dinliyorsun.",
    },
    {
      id: "32",
      level: "A2",
      title: "Yakın Geçmiş ve Di'li Geçmiş Zaman Farkı",
      titleEng: "Present Perfect vs. Past Simple (for & since)",
      titleEx: "I have lived here since 2020. I moved here six years ago.",
      intro:
        "Olay bitti mi, yoksa hâlâ etkisini mi taşıyor? **\\Past Simple\\** ile **\\Present Perfect\\** ayrımını **\\for, since, ago\\** belirteçleri üzerinden netleştiriyorsun; hangi durumda hangi zamanın seçildiğini örnek cümlelerle duyuyorsun.",
    },
    {
      id: "33",
      level: "A2",
      title: "Kipler: Zorunluluk, Yasak & Tavsiye",
      titleEng: "Modals: Must, Have to, Should",
      titleEx: "You should rest. / You mustn't park here.",
      intro:
        "Kural, iç zorunluluk, dış şart ve tavsiye farklı tonlar taşır. **\\must, have to, should\\** ile **\\mustn't\\** ve **\\don't have to\\** arasındaki anlam farkını dinleyerek hangi durumda hangi kipi seçeceğini öğreniyorsun.",
    },
    {
      id: "34",
      level: "A2",
      title: "Could (Geçmiş Yetenek) & May / Might (Olasılık)",
      titleEng: "Could & May / Might",
      titleEx: "I could read at four. It might rain later. May I come in?",
      intro:
        "Geçmişte yapabildiğin işler, belirsiz olasılık ve resmi izin isteme birbirinden ayrılır. **\\could\\**, **\\may / might\\** ve **\\May I\\** kalıplarını; ayrıca çıkarım anlamındaki **\\can't\\** ile nazik **\\could\\** ricasını örneklerle ayırıyorsun.",
    },
    {
      id: "35",
      level: "A2",
      title: "Belgisiz Zamirler",
      titleEng: "Indefinite Pronouns (someone, anything, nowhere)",
      titleEx: "Someone is at the door. I didn't buy anything.",
      intro:
        "İsmi vermeden biri, bir şey veya bir yerden bahsetmek günlük İngilizcede çok sık gerekir. **\\someone, anything, nowhere\\** gibi belgisiz zamirleri **\\some-, any-, no-, every-\\** önekleriyle kurup olumlu, olumsuz ve soru cümlelerinde doğru seçiyorsun.",
    },
    {
      id: "36",
      level: "A2",
      title: "Temel Fiil Kalıpları",
      titleEng: "Basic Verb Patterns (Verb + -ing / to-infinitive)",
      titleEx: "I enjoy coding. / She wants to travel abroad.",
      intro:
        "Peş peşe iki fiil gelince ikincisi çoğu zaman **\\-ing\\** ya da **\\to + V1\\** alır; hangi fiilin hangisini istediği ezberlenir. **\\enjoy, want, suggest\\** gibi sık örnekleri ve **\\like / love / hate\\** gibi her iki yapıya da izin veren fiilleri dinliyorsun.",
    },
    {
      id: "37",
      level: "A2",
      title: "Özne/Nesne Soruları & How long / How often",
      titleEng: "Subject/Object Questions & How long / How often",
      titleEx:
        "Who phoned you? How often do you go to the gym? How long have you lived here?",
      intro:
        "Soru kelimesi özneyse yardımcı fiil gerekmez; nesneyi soruyorsan **\\do / does\\** veya **\\did\\** devreye girer. **\\Who called?\\** ile **\\Who did you call?\\** farkını, ardından **\\How long\\** ve **\\How often\\** sorularına verilen **\\for / since\\** ve sıklık cevaplarını çalışıyorsun.",
    },
    {
      id: "38",
      level: "A2",
      title: "Yansıma Zamirleri",
      titleEng: "Reflexive Pronouns (myself, each other)",
      titleEx: "I hurt myself. They love each other. She did it herself.",
      intro:
        "Eylem özneye dönerse yansıma zamiri, iki kişi birbirine yönelirse **\\each other\\** kullanılır. **\\myself, yourself\\** ve **\\by myself\\** kalıbını günlük cümlelerle dinleyerek doğru zamir seçimini pekiştiriyorsun.",
    },
    {
      id: "39",
      level: "A2",
      title: "Both / Either / Neither",
      titleEng: "Both / Either / Neither",
      titleEx:
        "Both answers are correct. You can take either bus. Neither option works for me.",
      intro:
        "İki seçenekten bahsederken üç kelime iş görür: ikisi birden **\\both\\**, biri **\\either\\**, hiçbiri **\\neither\\**. **\\both of us\\**, **\\either ... or\\** ve **\\neither ... nor\\** bağlantılarını fiil uyumuyla birlikte öğreniyorsun.",
    },
    {
      id: "40",
      level: "A2",
      title: "Hareket Edatları",
      titleEng: "Prepositions of Movement (into, across, through)",
      titleEx:
        "She walked into the room. He ran across the street. We drove through the tunnel.",
      intro:
        "Yer edatı nerede durduğunu, hareket edatı nereye gittiğini anlatır. **\\into, across, through, over, past\\** gibi sık edatları yol tarifi ve günlük anlatım örnekleriyle dinliyorsun.",
    },
    {
      id: "41",
      level: "A2",
      title: "Temel Phrasal Verbs",
      titleEng: "Basic Phrasal Verbs",
      titleEx: "Turn off the lights. Look after the kids. Give up smoking.",
      intro:
        "Konuşma dilinde tek fiil yetmez; **\\turn off, look after, give up\\** gibi **\\phrasal verb\\** kalıpları devreye girer. Ayrılabilir yapılarda nesne zamirinin nereye oturduğunu ve en yaygın birleşik fiilleri bu derste dinliyorsun.",
    },
    {
      id: "42",
      level: "A2",
      title: "Temel Koşul Cümleleri (Tip 0 & Tip 1)",
      titleEng: "Zero & First Conditionals",
      titleEx: "If you heat ice, it melts. / If it rains, I will stay home.",
      intro:
        "Genel gerçekler ile muhtemel gelecek planları farklı **\\if\\** yapıları ister. **\\Zero Conditional\\** ve **\\First Conditional\\** kalıplarını, virgül kuralını ve **\\when / unless\\** alternatiflerini örnek cümlelerle öğreniyorsun.",
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
        "Eskiden vardı, artık yok: geçmiş alışkanlık ve durumlar **\\used to\\** ile anlatılır; tekrarlayan geçmiş eylemler bazen **\\would\\** ile kurulur. Durum fiillerinde neden yalnızca **\\used to\\** kullanıldığını ve **\\didn't use to\\** soru-olumsuz yapısını dinliyorsun.",
    },
    {
      id: "44",
      level: "B1",
      title: "Be used to / Get used to",
      titleEng: "Be used to / Get used to",
      titleEx:
        "I am used to waking up early. She is getting used to the new job.",
      intro:
        "**\\Be used to\\** bir şeye alışkın olduğunu, **\\get used to\\** yavaş yavaş alıştığını anlatır; geçmiş alışkanlık için kullanılan **\\used to + V1\\** ile karıştırılmamalı. Üç kalıbın yapı ve anlam farkını bu derste netleştiriyorsun.",
    },
    {
      id: "45",
      level: "B1",
      title: "Süregelen Yakın Geçmiş Zaman",
      titleEng: "Present Perfect Continuous",
      titleEx: "I have been learning English for two years.",
      intro:
        "Ne kadar süredir bir şey yaptığını vurgulamak için **\\have / has been + V-ing\\** kullanılır. **\\Present Perfect Continuous\\** ile sonuç odaklı **\\Present Perfect Simple\\** arasındaki farkı **\\for, since, lately\\** örnekleriyle dinliyorsun.",
    },
    {
      id: "46",
      level: "B1",
      title: "Miş'li Geçmiş Zaman",
      titleEng: "Past Perfect Simple",
      titleEx: "When I arrived at the station, the train had already left.",
      intro:
        "Geçmişteki iki olaydan hangisinin önce gerçekleştiğini **\\had + V3\\** ile net anlatmayı öğreniyorsun. **\\Before, after, by the time, when, already, just\\** gibi bağlaç ve zarflarla zaman zincirini bu derste dinliyorsun.",
    },
    {
      id: "47",
      level: "B1",
      title: "Zaman Cümlecikleri",
      titleEng: "Time Clauses (when, as soon as, until)",
      titleEx:
        "When I arrive, I'll call you. As soon as she leaves, we can start. Wait until the bus comes.",
      intro:
        "Olay sırasını **\\when, while, as, as soon as, until, before, after\\** ile kurulan **\\time clauses\\** yapısında dinliyorsun. Gelecek anlatan ana cümlede yan cümlede **\\Present Simple\\** kuralına özellikle dikkat edeceksin.",
    },
    {
      id: "48",
      level: "B1",
      title: "Tahmin ve Olasılık Kipleri",
      titleEng: "Modals of Deduction & Possibility (Present)",
      titleEx: "The lights are off; they must be asleep. He might be late.",
      intro:
        "Gözleme dayalı tahminlerde **\\must\\**, **\\can't\\**, **\\may, might, could\\** arasındaki eminlik farkını bu derste dinliyorsun. Süregelen durumlar için **\\must be V-ing\\** kalıbını da örneklerle duyacaksın.",
    },
    {
      id: "49",
      level: "B1",
      title: "Eklenti Soruları (Question Tags)",
      titleEng: "Question Tags",
      titleEx: "You live in Istanbul, don't you? She isn't coming, is she?",
      intro:
        "**\\Question tags\\** ile olumlu cümleye olumsuz, olumsuz cümleye olumlu eklenti getirme mantığını dinliyorsun. Yardımcı fiil seçimi ve **\\I am → aren't I?\\** gibi istisnalar bu derste var.",
    },
    {
      id: "50",
      level: "B1",
      title: "So do I / Neither do I",
      titleEng: "So do I / Neither do I",
      titleEx:
        "I love coffee. — So do I. / I don't like mornings. — Neither do I.",
      intro:
        "Aynı fikri veya durumu kısa bildirmek için **\\So + yardımcı fiil + özne\\** ve **\\Neither / Nor + yardımcı fiil + özne\\** kalıplarını örneklerle dinliyorsun.",
    },
    {
      id: "51",
      level: "B1",
      title: "Koşul Cümleleri (Tip 2 & Tip 1-2 Karşılaştırması)",
      titleEng: "Second Conditional (Unreal Present)",
      titleEx: "If I won the lottery, I would buy a house by the sea.",
      intro:
        "Gerçek dışı şimdiki senaryolar için **\\If + Past Simple, would + V1\\** yapısını, **\\Tip 2\\** ile **\\Tip 1\\** farkını ve **\\If I were you…\\** kalıbını bu derste dinliyorsun.",
    },
    {
      id: "52",
      level: "B1",
      title: "Sıfat Cümlecikleri (Tanımlayan & Tanımlamayan)",
      titleEng: "Defining & Non-defining Relative Clauses",
      titleEx:
        "The man who lives next door is a doctor. / My car, which is old, still runs well.",
      intro:
        "**\\Defining\\** ve **\\non-defining\\** sıfat cümleciklerinde **\\who, which, that, whose, where, when\\** kullanımını, virgül kuralını ve ilgi zamirini düşürmeyi dinliyorsun.",
    },
    {
      id: "53",
      level: "B1",
      title: "Edilgen Çatı (Temel Zamanlar)",
      titleEng: "Passive Voice (Core Tenses)",
      titleEx: "The letter was sent yesterday. English is spoken worldwide.",
      intro:
        "Temel zamanlarda **\\be + V3\\** ile kurulan **\\passive voice\\** yapısını, **\\by\\** edatını ve etkenden edilgene dönüşümü bu derste dinliyorsun.",
    },
    {
      id: "54",
      level: "B1",
      title: "İsim Fiiller & Mastarlar (Anlam Değiştirenler)",
      titleEng: "Gerunds & Infinitives",
      titleEx: "I stopped smoking. / I stopped to smoke a cigarette.",
      intro:
        "**\\stop, remember, forget, try, regret, mean\\** gibi fiillerde **\\gerund\\** ile **\\to-infinitive\\** arasındaki anlam farkını örnek cümlelerle dinliyorsun.",
    },
    {
      id: "55",
      level: "B1",
      title: "Make / Let / Allow",
      titleEng: "Make / Let / Allow (Active Causatives)",
      titleEx:
        "She made me apologise. Let him go. They don't allow smoking here.",
      intro:
        "**\\make, let, allow\\** ile zorlama, izin ve müsaade anlatan **\\causative\\** kalıplarını bu derste dinliyorsun.",
    },
    {
      id: "56",
      level: "B1",
      title: "-ed / -ing Sıfatları",
      titleEng: "Participle Adjectives (bored / boring)",
      titleEx: "The film was boring. I was bored during the meeting.",
      intro:
        "Duygu bildiren **\\-ed\\** sıfatları ile neden bildiren **\\-ing\\** sıfatları arasındaki farkı **\\bored / boring\\** örnekleriyle dinliyorsun.",
    },
    {
      id: "57",
      level: "B1",
      title: "Soru Kelimesi + Infinitive",
      titleEng: "Question Word + Infinitive",
      titleEx: "I don't know what to do. She showed me how to use it.",
      intro:
        "**\\what, where, how, when, who\\** + **\\to + V1\\** kalıbını **\\I don't know where to go\\** gibi günlük örneklerle dinliyorsun.",
    },
    {
      id: "58",
      level: "B1",
      title: "Dolaylı Anlatım (Temel Aktarım)",
      titleEng: "Reported Speech (Statements & Questions)",
      titleEx: "He said he was tired. She asked me where I lived.",
      intro:
        "Başkalarının söylediği sözleri ve sorduğu soruları kendi cümlelerinle akıcı ve doğru bir şekilde aktarmaya hazır mısın? Bu derste **\\Reported Speech\\** (Dolaylı Anlatım) yapısında zamanların bir derece geçmişe kayması (**\\tense backshift\\**) kuralını keşfedeceksin. **\\Say\\** ve **\\tell\\** fiilleri arasındaki nesne farkını, evet-hayır sorularında **\\if / whether\\** kullanımını ve zamirlerle zaman zarflarındaki dönüşümleri inceleyeceksin. Günlük konuşmaları, toplantı notlarını ve duyduğun haberleri doğal biçimde aktarabileceksin.",
    },
    {
      id: "59",
      level: "B1",
      title: "Dolaylı Emir ve Rica",
      titleEng: "Reported Commands & Requests",
      titleEx: "She told me to wait. He asked me not to open the window.",
      intro:
        "Doğrudan emir ve ricaları dolaylı anlatımla başkasına aktarmaya hazır mısın? Bu derste **tell / ask + object + (not) to + V1** yapısıyla kurulan **\\Reported Commands & Requests\\** kalıplarını keşfedeceksin. Emirleri **\\told me to\\** ile, nazik ricaları **\\asked me to\\** ile aktarmayı ve olumsuz yönergelerde **\\not to\\** kullanımını inceleyeceksin. Patron, öğretmen veya arkadaştan duyduğun talimatları doğal biçimde başkalarına iletebileceksin.",
    },
    {
      id: "60",
      level: "B1",
      title: "Dolaylı Sorular",
      titleEng: "Indirect Questions (Could you tell me where...)",
      titleEx:
        "Could you tell me where the station is? Do you know what time it starts?",
      intro:
        "Soru sorarken daha kibar ve resmi bir ton kullanmaya hazır mısın? Bu derste **\\Could you tell me...\\**, **\\Do you know...\\** ve **\\I wonder...\\** gibi girişlerle başlayan **\\Indirect Questions\\** yapısını keşfedeceksin. Soru kelimesinden sonra **do/does/did** kullanmadan özne-fiil sırasına geçişi ve evet-hayır sorularında **\\if / whether\\** kullanımını inceleyeceksin. Yabancılarla ve resmi ortamlarda sorularını çok daha nazik biçimde sorabileceksin.",
    },
    {
      id: "61",
      level: "B1",
      title: "Bağlaç ve Geçiş İfadeleri",
      titleEng: "Linking Words (however, therefore, although)",
      titleEx:
        "It was late; however, we kept talking. Although it rained, we went out.",
      intro:
        "Cümleleri ve fikirleri mantıksal bağlarla birleştirerek anlatımını akıcı kılmaya hazır mısın? Bu derste karşıtlık bildiren **\\however, although, but, whereas\\**, neden-sonuç için **\\therefore, so, as a result\\** ve ek bilgi için **\\moreover, furthermore\\** gibi **\\linking words\\** ve geçiş ifadelerini keşfedeceksin. Virgül ve noktalı virgül kullanımıyla **\\however\\** ve **\\therefore\\** gibi bağlayıcıların cümle içindeki konumunu inceleyeceksin. Yazılı ve sözlü anlatımlarında düşünceler arasında net geçişler kurabileceksin.",
    },
    {
      id: "62",
      level: "B1",
      title: "Fiil/Sıfat + Edat Kalıpları",
      titleEng: "Dependent Prepositions (Verb/Adjective + Preposition)",
      titleEx:
        "It depends on the weather. I'm interested in science. She apologised for being late.",
      intro:
        "Fiil ve sıfatlardan sonra hangi edatın geleceğini kalıplar halinde öğrenmeye hazır mısın? Bu derste **\\depend on, interested in, good at, worried about, apologise for\\** gibi **\\Dependent Prepositions\\** (fiil/sıfat + edat) eşleşmelerini keşfedeceksin. Nesne olarak **\\-ing\\** veya **to + V1** alan kalıpların edatla nasıl birlikte çalıştığını inceleyeceksin. Günlük konuşmada en sık hata yapılan edat seçimlerini doğru kullanabileceksin.",
    },
    {
      id: "63",
      level: "B1",
      title: "Phrasal Verbs (Orta Düzey)",
      titleEng: "Intermediate Phrasal Verbs",
      titleEx:
        "We ran out of milk. I'll look into the problem. He came across an old photo.",
      intro:
        "Orta düzey phrasal verb'lerle anlatımını zenginleştirmeye ve daha doğal konuşmaya hazır mısın? Bu derste **\\run out of, look into, come across, carry out, turn down\\** gibi günlük ve iş hayatında sık geçen **\\Intermediate Phrasal Verbs\\** kalıplarını keşfedeceksin. Temel seviyedekilerin ötesinde anlam çeşitliliği, ayrılamaz yapılar ve cümlede vurgulanması gereken parçacıkları inceleyeceksin. Bu kalıplarla İngilizceni bir üst seviyeye taşıyabileceksin.",
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
        "Gelecekteki belirli bir anda devam ediyor olacak süreçleri ve belli bir tarihe kadar tamamlanmış olacak hedefleri yüksek hassasiyetle ifade etmeye hazır mısın? Bu derste **\\Future Continuous\\** (**\\will be V-ing\\**) ve **\\Future Perfect\\** (**\\will have V3\\**) zamanlarının kullanım alanlarını keşfedeceksin. **\\This time next week, by, by the time, within\\** gibi zaman belirteçleriyle geleceğin farklı kesitlerini nasıl kurgulayacağını inceleyeceksin. Kariyer planlarını, proje takvimlerini ve gelecek öngörülerini ileri düzey bir zaman hakimiyetiyle anlatabileceksin.",
    },
    {
      id: "65",
      level: "B2",
      title: "Süregelen Bitmiş Gelecek Zaman",
      titleEng: "Future Perfect Continuous",
      titleEx: "By next month, I will have been working here for ten years.",
      intro:
        "Gelecekte belirli bir ana kadar ne kadar süredir bir eylemin devam etmiş olacağını vurgulamaya hazır mısın? Bu derste **\\will have been + V-ing\\** formülüyle kurulan **\\Future Perfect Continuous\\** zamanını ve **\\by\\** ile belirlenen gelecek referans noktasını keşfedeceksin. **\\Future Perfect\\**'in tamamlanmış sonuca odaklanması ile bu zamanın süre vurgusunu nasıl öne çıkardığını inceleyeceksin. Kariyer hedeflerini ve uzun süreli planlarını ileri düzey bir zaman hassasiyetiyle ifade edebileceksin.",
    },
    {
      id: "66",
      level: "B2",
      title: "Süregelen Miş'li Geçmiş Zaman",
      titleEng: "Past Perfect Continuous",
      titleEx: "She was exhausted because she had been working all day.",
      intro:
        "Geçmişteki bir olaydan hemen önce ne kadar süredir bir eylemin devam ettiğini ve o anda yarattığı somut etkiyi vurgulamaya hazır mısın? Bu derste **\\had been + V-ing\\** formülüyle kurulan **\\Past Perfect Continuous\\** yapısını tüm incelikleriyle keşfedeceksin. Geçmişte tamamlanmış sayıya odaklanan **\\Past Perfect Simple\\** ile sürecin uzunluğunu ve arka planını öne çıkaran bu zaman arasındaki farkı inceleyeceksin. Hikaye anlatımında ve geçmiş olayların nedenlerini açıklarken sebep-sonuç bağlarını ustalıkla kurabileceksin.",
    },
    {
      id: "67",
      level: "B2",
      title: "Geçmişe Dönük Kipler (Perfect Modals)",
      titleEng: "Modals in the Past (should have, must have, might have)",
      titleEx: "You should have called me. He must have forgotten the meeting.",
      intro:
        "Geçmişte yaşanmış olaylar hakkında mantıklı çıkarımlar yapmaya, pişmanlıkları veya yapıcı eleştirileri incelikle dile getirmeye hazır mısın? Bu derste **\\must have, can't have, might have, could have\\** ile geçmişe dönük olasılıkları ve **\\should have / shouldn't have + V3\\** ile kaçırılmış fırsatları keşfedeceksin. Ayrıca yapmaya gerek olmayan ama yapılmış eylemleri anlatan **\\needn't have V3\\** kalıbının ince nüansını inceleyeceksin. Geçmiş olayları değerlendirirken duygusal ve mantıksal tonunu kusursuzca ayarlayabileceksin.",
    },
    {
      id: "68",
      level: "B2",
      title: "Needn't have vs. Didn't need to",
      titleEng: "Needn't have vs. Didn't need to",
      titleEx:
        "You needn't have bought milk — we already had some. I didn't need to wake up early; the meeting was cancelled.",
      intro:
        "Geçmişte yapılmak zorunda olunmayan veya gereksiz yere yapılmış eylemleri birbirinden ayırarak doğru tonu kullanmaya hazır mısın? Bu derste fiili yapmaya zorunluluğun olmadığını bildiren **\\didn't need to\\** ile yapıldığı halde gereksiz olduğunu vurgulayan **\\needn't have + V3\\** arasındaki kritik farkı keşfedeceksin. Olumlu ve olumsuz örneklerle **pişmanlık**, **\\rahatlama\\** ve **\\gereksiz emek\\** nüanslarını inceleyeceksin. Geçmiş olayları değerlendirirken karşındakinin gerçekten mecbur olup olmadığını net biçimde ifade edebileceksin.",
    },
    {
      id: "69",
      level: "B2",
      title: "Koşul Cümleleri (Tip 3 & Karışık Tipler)",
      titleEng: "Third & Mixed Conditionals",
      titleEx:
        "If I had studied harder, I would have passed. / If I had taken that job, I would be rich now.",
      intro:
        "Geçmişteki gerçekleşmemiş senaryoları, keşkeleri ve zamanlar arası varsayımsal sonuçları ustalıkla ifade etmeye hazır mısın? Bu derste geçmişteki hayali durumları anlatan **\\Third Conditional\\** (**\\If + had V3, would have V3\\**) ile geçmişteki bir koşulun bugünkü sonucunu veya bugünkü genel bir durumun geçmişteki etkisini birleştiren **\\Mixed Conditionals\\** yapılarını keşfedeceksin. **\\Would have, could have, might have\\** seçimlerinin anlamı nasıl esnettiğini inceleyeceksin. Karmaşık varsayımları ve pişmanlıkları doğru zaman uyumuyla akıcı biçimde kurabileceksin.",
    },
    {
      id: "70",
      level: "B2",
      title: "Dilek & Keşke Cümleleri (Wish & If Only)",
      titleEng: "Wish & If Only Clauses",
      titleEx: "I wish I had more free time. If only I hadn't said that.",
      intro:
        "Şu anki durumlarla ilgili hayallerini, geçmişe dair pişmanlıklarını ve çevrendekilerin değişmesini istediğin davranışlarını içtenlikle dile getirmeye hazır mısın? Bu derste **\\wish\\** ve daha güçlü vurgu taşıyan **\\if only\\** kalıplarının **\\Past Simple\\**, **\\Past Perfect\\** ve **\\would\\** ile kurulan üç farklı zaman kullanımını keşfedeceksin. Neden **\\I wish I would\\** kalıbının kendi eylemlerimiz için kullanılmadığını ve **\\were\\** kullanımının inceliklerini inceleyeceksin. Duygu, sitem ve keşkelerini en doğru kiple doğal bir İngilizceyle ifade edebileceksin.",
    },
    {
      id: "71",
      level: "B2",
      title: "Gerçek Dışı Geçmiş",
      titleEng: "Unreal Past (It's high time, would rather, as if, suppose)",
      titleEx:
        "It's high time you left. I'd rather you didn't smoke here. She talks as if she knew everything.",
      intro:
        "Şu anki durumla gerçek veya arzu ettiğin geçmiş arasında bir köprü kuran incelikli yapıları kullanmaya hazır mısın? Bu derste **\\It's (high) time + Past Simple\\**, **would rather + özne + Past Simple**, **\\as if / as though + Past Simple\\** ve **\\suppose / supposing (that)\\** gibi **\\Unreal Past\\** kalıplarını keşfedeceksin. Gerçek olmayan ya da geç kalmış eylemler için geçmiş kiplerin neden seçildiğini ve günlük ile resmi ton farklarını inceleyeceksin. Uyarı, tercih ve hayali senaryolarda İngilizce düşünme sistemine uygun cümleler kurabileceksin.",
    },
    {
      id: "72",
      level: "B2",
      title: "İleri Edilgen Çatı & Ettirgen Yapılar",
      titleEng: "Advanced Passive & Causatives (have/get something done)",
      titleEx: "I had my car repaired yesterday. The bridge is being built.",
      intro:
        "Süregelen ve bitmiş zamanlarda edilgen yapılar kurmayı ve bir hizmeti veya işi başkasına yaptırmayı akıcı biçimde ifade etmeye hazır mısın? Bu derste tüm zaman kipleri ve kip fiillerle (**\\modals\\**) çekimlenen ileri edilgen yapıları ile **\\have / get something done\\** ettirgen kalıplarını keşfedeceksin. Ayrıca **\\make, let, have, get\\** fiillerinin etken ettirgen kullanımlarını ve talihsiz olayları anlatan **\\have something done\\** nüansını inceleyeceksin. Günlük işlerden kurumsal raporlara kadar eylemin odağını ustalıkla yönetebileceksin.",
    },
    {
      id: "74",
      level: "B2",
      title: "Be supposed to / Be allowed to / Ought to",
      titleEng: "Be supposed to / Be allowed to / Ought to",
      titleEx:
        "You are supposed to wear a badge. Students aren't allowed to use phones. You ought to apologise.",
      intro:
        "Beklenti, izin ve ahlaki yükümlülükleri tek çatı altında doğru fiil kalıplarıyla ifade etmeye hazır mısın? Bu derste kurallara veya söylentilere dayanan **\\be supposed to\\**, resmi ve açık izin bildiren **\\be allowed to\\** ile içsel veya toplumsal gerekliliği taşıyan **\\ought to\\** yapılarını keşfedeceksin. **\\to be\\** çekimleri, olumsuz ve soru biçimleri ile günlük, okul ve iş ortamı örneklerini inceleyeceksin. Topluluk normlarını ve kişisel sorumlulukları birbirine karıştırmadan net cümleler kurabileceksin.",
    },
    {
      id: "75",
      level: "B2",
      title: "İleri Dolaylı Anlatım Fiilleri",
      titleEng: "Reporting Verbs (deny, advise, suggest, accuse)",
      titleEx: "He denied stealing the money. She advised me to apply early.",
      intro:
        "Sürekli **\\said\\** ve **\\told\\** tekrarlamak yerine konuşmanın niyetini, duygusunu ve tonunu yansıtan zengin aktarım fiillerine geçmeye hazır mısın? Bu derste **\\deny, admit, suggest, advise, warn, insist, accuse, apologize\\** gibi ileri düzey dolaylı anlatım fiillerini keşfedeceksin. Her fiilin ardından gelen **\\V-ing\\**, **\\to-infinitive\\**, **\\edat + V-ing\\** veya **\\that\\** cümleciği kalıplarını gruplandırarak inceleyeceksin. Akademik metinlerde, özetlerde ve profesyonel konuşmalarda başkalarının fikirlerini çok daha etkileyici biçimde aktarabileceksin.",
    },
    {
      id: "76",
      level: "B2",
      title: "Sıfat Cümleciklerinde Kısaltmalar",
      titleEng: "Reduced Relative Clauses",
      titleEx:
        "The boy standing by the gate is my brother. The book written in 1920 is rare.",
      intro:
        "Uzun sıfat cümleciklerini sadeleştirerek İngilizce cümlelerine çok daha akıcı, yoğun ve doğal bir ritim kazandırmaya hazır mısın? Bu derste **\\who, which, that\\** ilgi zamirlerini ve **\\to be\\** fiilini düşürerek etken yapıları **\\V-ing\\**, edilgen yapıları ise **\\V3\\** biçiminde kısaltmayı keşfedeceksin. Ayrıca **\\the first, the last, the only\\** veya en üstünlük derecesi içeren ifadelerden sonra kullanılan **to + V1** kısaltmalarını inceleyeceksin. Hem makalelerde hem de konuşma dilinde gereksiz kelimelerden arınmış özlü ifadeler kurabileceksin.",
    },
    {
      id: "77",
      level: "B2",
      title: "İlgi Zamiri + Edat",
      titleEng: "Relative Pronoun + Preposition (in which, to whom)",
      titleEx:
        "The house in which we grew up was sold. The manager to whom I wrote hasn't replied.",
      intro:
        "İlgi zamirlerini edatlarla birlikte zarif ve doğru konumda kullanmaya hazır mısın? Bu derste **\\in which, to whom, for which, on which\\** gibi **\\Relative Pronoun + Preposition\\** birleşimlerini hem resmi **preposition + whom/which** hem de günlük **\\preposition + that\\** (\\edat sonda\\) alternatifleriyle keşfedeceksin. **who/which/where** ile edatın başta mı sonda mı duracağını ve yazılı ile sözlü İngilizce farklarını inceleyeceksin. İlişki cümlelerini akıcı ve dilbilgisel olarak kusursuz genişletebileceksin.",
    },
    {
      id: "78",
      level: "B2",
      title: "Zıtlık, Amaç ve Sebep Cümlecikleri",
      titleEng: "Clauses of Contrast, Purpose & Reason",
      titleEx:
        "Despite the heavy rain, the match continued. I left early so that I wouldn't miss it.",
      intro:
        "Fikirlerin arasındaki karşıtlık, amaç ve neden-sonuç ilişkilerini üst düzey bağlaçlarla ustalıkla örmeye hazır mısın? Bu derste **\\although, even though, despite, in spite of\\** ile zıtlık; **\\so that, in order to, so as to\\** ile amaç; **\\because, since, as, due to, owing to\\** ile sebep bildiren yapıları keşfedeceksin. Hangi bağlaçtan sonra isim öbeği veya **\\V-ing\\**, hangisinden sonra tam cümle geleceğini net kurallarla inceleyeceksin. Kompozisyonlarında ve tartışmalarda argümanlarını mantıksal bir bütünlükle savunabileceksin.",
    },
    {
      id: "79",
      level: "B2",
      title: "Whereas / While: Karşıtlık Bağlaçları",
      titleEng: "Whereas / While (Contrast Conjunctions)",
      titleEx:
        "Whereas online sales grew, foot traffic fell. While I enjoy the city, the rent is too high.",
      intro:
        "İki durumu veya görüşü aynı cümlede karşılaştırıp dengeli bir kontrast kurmaya hazır mısın? Bu derste **\\whereas\\** ile daha resmi ve net karşıtlık, **\\while / whilst\\** ile hem zaman hem zıtlık anlamlarını taşıyan **\\contrast conjunctions\\** yapılarını keşfedeceksin. Paragraf düzeyinde **\\although\\** ile farklarını, cümle pozisyonlarını ve noktalama alışkanlıklarını inceleyeceksin. Rapor, makale ve günlük anlatımda fikirleri yan yana koyarak daha ikna edici metinler yazabileceksin.",
    },
    {
      id: "80",
      level: "B2",
      title: "Duyu Fiilleri + V-ing / V1",
      titleEng: "Verbs of Perception + V-ing / Bare Infinitive",
      titleEx:
        "I heard him leave. I saw her crossing the street. We watched them play football.",
      intro:
        "Duyu fiillerinden sonra eylemin tamamını mı süregelen halini mi vurgulayacağını bilinçli seçmeye hazır mısın? Bu derste **\\see, hear, watch, feel, notice\\** gibi **\\verbs of perception\\** sonrasında **\\bare infinitive\\** (\\V1\\) ile **\\V-ing\\** arasındaki anlam farkını keşfedeceksin. Tamamlanmış eylem ile devam eden süreç vurgusu, aktif ve edilgen örnekler ile **\\make / let\\** ile benzerlikleri inceleyeceksin. Gözlem ve deneyim anlatırken dinleyicide doğru görüntüyü oluşturabileceksin.",
    },
    {
      id: "81",
      level: "B2",
      title: "The more... the more",
      titleEng: "Double Comparatives (The more... the more)",
      titleEx:
        "The more you practise, the better you get. The harder the problem, the more rewarding the solution.",
      intro:
        "İki değişken arasındaki orantılı ilişkiyi tek kalıpla güçlü biçimde ifade etmeye hazır mısın? Bu derste **\\The + comparative, the + comparative\\** yapısıyla kurulan **\\Double Comparatives\\** kalıbını sıfat, zarf ve fiil çekimleriyle keşfedeceksin. **\\The more..., the more... / The less..., the sooner...\\** gibi yaygın kombinasyonları ve kelime sırası kurallarını inceleyeceksin. Motivasyon, tavsiye ve genellemelerde İngilizce'de doğal ve vurucu karşılaştırmalar kurabileceksin.",
    },
    {
      id: "82",
      level: "B2",
      title: "İleri Düzey Artikel Kullanımı",
      titleEng: "Advanced Article Usage (Zero Article)",
      titleEx:
        "She goes to school by bus. Life is hard without education. Mount Everest is in Asia.",
      intro:
        "Belirli veya genel anlamda **\\the\\** kullanılmayan isim gruplarında sıfır artikeli doğru uygulamaya hazır mısın? Bu derste **\\zero article\\** ile işaret edilen genel kavramlar, coğrafi isimler, yiyecek, dil, spor ve soyut isimlerde **a/an** ile **\\the\\** ayrımını keşfedeceksin. **\\go to school / go to the school\\**, **\\in hospital / in the hospital\\** gibi anlamı değiştiren çiftleri inceleyeceksin. İleri düzey metinlerde artikel seçiminden kaynaklanan belirsizlikleri ortadan kaldırabileceksin.",
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
        "Tüm, her, çoğu ve hiçbiri gibi miktar ve kapsam bildiren belirleyicileri doğru isimle eşleştirmeye hazır mısın? Bu derste **\\all, every, each, most, none\\** ve bunların **\\of\\** ile kurulan formlarını (**\\all of, each of, none of\\**) keşfedeceksin. Tekil ve çoğul isim uyumu, **\\every\\** ile **\\each\\** ince farkı ve **\\most\\** ile **\\the most\\** ayrımını örneklerle inceleyeceksin. Toplu ifadelerde ve istatistik anlatımında hatasız belirleyici seçimi yapabileceksin.",
    },
    {
      id: "84",
      level: "B2",
      title: "Paralel Yapılar",
      titleEng: "Parallel Structures",
      titleEx:
        "She likes hiking, swimming, and cycling. The report was clear, concise, and well researched.",
      intro:
        "Listenin, sıfatların ve fiil öbeklerinin aynı dilbilgisel formda dizildiği dengeli cümleler kurmaya hazır mısın? Bu derste **\\parallel structures\\** ilkesini **\\and, or, but\\** ile bağlanan ögelerde uygulamayı keşfedeceksin. Karışık türlerden (**\\V-ing\\** ile **to + V1**, sıfat ile isim) kaynaklanan **\\faulty parallelism\\** hatalarını tespit etme ve düzeltme yollarını inceleyeceksin. Yazılı İngilizcede akıcı, profesyonel ve kolay okunan paragraflar oluşturabileceksin.",
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
        "Çok yakın gelecekte, planlı biçimde veya kaçınılmaz şekilde gerçekleşecek olayları keskin zaman ifadeleriyle anlatmaya hazır mısın? Bu derste **\\be about to\\**, **\\be due to\\**, **\\be set to\\** ve benzeri **\\advanced future expressions\\** kalıplarını **\\will\\** / **\\going to\\** ile nüans farklarıyla keşfedeceksin. Pasif formlar, resmi duyuru dili ve haber metinlerindeki tipik kullanımları inceleyeceksin. Sunum, basın ve profesyonel yazışmalarda gelecek olayları özgüvenli ve doğal vurgulayabileceksin.",
    },
    {
      id: "86",
      level: "C1",
      title: "Devrik Cümleler (Olumsuz & Kısıtlayıcı Zarflar)",
      titleEng: "Inversion with Negative & Limiting Adverbials",
      titleEx:
        "Seldom have I seen such a detailed analysis. Not only did he win, but he also broke the record.",
      intro:
        "İngilizce anlatımına edebi bir derinlik, güçlü bir vurgu ve resmi bir otorite kazandırmaya hazır mısın? Bu derste **\\seldom, rarely, never, hardly...when, no sooner...than, not only...but also, under no circumstances\\** gibi olumsuz veya sınırlayıcı zarflar cümle başına geldiğinde soru cümlesi düzeninde yardımcı fiil ile öznenin yer değiştirdiği **\\Inversion\\** yapısını keşfedeceksin. Basit zamanlarda **\\do / does / did\\** kullanımını ve vurgulanmak istenen ögeyi öne taşıma tekniklerini inceleyeceksin. İleri düzey yazılı ve sözlü söylemlerde dramatik ve etkileyici bir üslup yakalayabileceksin.",
    },
    {
      id: "87",
      level: "C1",
      title: "Koşul Cümlelerinde Devriklik & Alternatif Bağlaçlar",
      titleEng: "Conditional Inversion & Alternatives to 'If'",
      titleEx:
        "Had I known about the delay, I would have stayed. Provided that you agree, we can start.",
      intro:
        "Koşul cümlelerini klasik **\\if\\** kalıbının ötesine taşıyarak akademik, hukuki ve resmi bir esneklikle kurmaya hazır mısın? Bu derste **\\if\\** bağlacını düşürerek oluşturulan **\\Were I..., Had I..., Should you...\\** devrik koşul yapılarını ve ince ihtimal farklarını keşfedeceksin. Ayrıca **\\provided that, as long as, unless, on condition that, in case, supposing\\** gibi alternatif koşul bağlaçlarının anlam nüanslarını inceleyeceksin. Şart ifadelerini üst düzey metinlerde ve profesyonel yazışmalarda zarifçe çeşitlendirebileceksin.",
    },
    {
      id: "88",
      level: "C1",
      title: "Bölünmüş & Vurgu Cümleleri",
      titleEng: "Cleft Sentences (It-clefts & Wh-clefts)",
      titleEx:
        "It was John who solved the bug. What I need right now is a clear answer.",
      intro:
        "Cümledeki belirli bir bilgiyi spot ışığı altına alarak okuyucunun veya dinleyicinin dikkatini tam istediğin noktaya çekmeye hazır mısın? Bu derste kişi, nesne, zaman veya yeri öne çıkaran **\\It-cleft\\** (**\\It is / was ... who / that\\**) ile eyleme veya duruma odaklanan **\\Wh-cleft\\** (**What + özne + fiil + is / was**) yapılarını keşfedeceksin. Ayrıca **\\All (that), The reason why, The place where\\** gibi ileri düzey vurgu kalıplarını inceleyeceksin. Tartışmalarda, sunumlarda ve yazılı analizlerde mesajının ikna gücünü en üst düzeye çıkarabileceksin.",
    },
    {
      id: "89",
      level: "C1",
      title: "Vurgulayıcı Do / Did",
      titleEng: "Emphatic Do / Did",
      titleEx:
        "I do like your idea. She did finish the report on time. Do tell me what happened.",
      intro:
        "Şüpheyi yok etmek veya duyguyu güçlendirmek için yardımcı **\\do / does / did\\** kullanımına hakim olmaya hazır mısın? Bu derste **\\Present Simple\\** ve **\\Past Simple\\** olumlu cümlelerde özneden önce gelen **\\emphatic do / did\\** ile vurgu ve sürpriz tonunu keşfedeceksin. **\\I do agree, She did apologise\\** örnekleriyle olasılık fiilleri ve kısaltmalarla karışmamasını inceleyeceksin. Tartışma ve diyalogda ne dediğini netleştirip karşındakini ikna edecek tonu kullanabileceksin.",
    },
    {
      id: "90",
      level: "C1",
      title: "İstek & Dilek Kipi (Subjunctive Mood)",
      titleEng: "Mandative Subjunctive Mood",
      titleEx:
        "It is essential that he be present at the hearing. They demanded that the report be revised.",
      intro:
        "Resmi talepleri, önerileri, kararları ve zorunlulukları en rafine dilbilgisi kurallarıyla ifade etmeye hazır mısın? Bu derste **\\demand, insist, recommend, suggest, propose\\** fiilleri ve **\\it is essential / vital / imperative / crucial that\\** sıfat kalıplarının ardından özneye veya zamana bakılmaksızın fiilin yalın halinin (**\\V1\\**, olumsuzda **not + V1**, edilgende **be + V3**) kullanıldığı **\\Mandative Subjunctive\\** yapısını keşfedeceksin. İngiliz ve Amerikan İngilizcesindeki **\\should\\** alternatifleriyle farkını inceleyeceksin. Kurumsal ve akademik dilde kusursuz ve otoriter bir üslup yakalayabileceksin.",
    },
    {
      id: "91",
      level: "C1",
      title: "İleri Düzey Ortaç & Ulaç Cümlecikleri",
      titleEng: "Advanced Participle Clauses",
      titleEx: "Having completed the project, she presented it to the board.",
      intro:
        "Uzun zarf ve bağlaç yan cümleciklerini tek bir akıcı ortaç yapısında birleştirerek anlatımına yoğunluk ve edebi zarafet katmaya hazır mısın? Bu derste zaman, neden-sonuç ve koşul bildiren yan cümleleri etken yapılarda **\\V-ing\\**, edilgen yapılarda **\\V3\\** ve öncelik-sonralık ilişkisinde **Having + V3** / **\\Having been + V3\\** kalıplarıyla kısaltmayı keşfedeceksin. Öznesi ana cümleden farklı olan yapıları (**\\nominative absolute\\**) ve anlam karışıklığına yol açan **\\dangling participles\\** hatalarından kaçınma yöntemlerini inceleyeceksin. Akademik makalelerde ve ileri düzey metinlerde akıcı bir sentez gücü kazanacaksın.",
    },
    {
      id: "92",
      level: "C1",
      title: "Whatever / Whoever / However",
      titleEng: "Whatever / Whoever / However",
      titleEx:
        "Whatever you decide, I'll support you. Whoever arrives first gets a seat. However hard you try, some things won't change.",
      intro:
        "Ne olursa olsun, kim olursa olsun veya her ne kadar kalıplarıyla koşulsuz ve esnek anlam kurmaya hazır mısın? Bu derste **\\whatever, whoever, whichever, however\\** ile **\\-ever\\** eklisinin kurduğu **\\free relative clauses\\** yapılarını keşfedeceksin. **However + sıfat/zarf** ile zıtlık, nesne ve özne rollerindeki kelime dizilimini inceleyeceksin. Günlük konuşmadan akademik metne kadar geniş bir üslupta özgür ve güçlü cümleler kurabileceksin.",
    },
    {
      id: "93",
      level: "C1",
      title: "Sıfat Dereceleri & Pekiştirme",
      titleEng:
        "Gradable Adjectives & Intensifiers (utterly, fairly, absolutely)",
      titleEx: "utterly exhausted, fairly good, absolutely right",
      intro:
        "Derecelendirilebilir ve mutlak sıfatların üzerine binen **\\intensifier\\** (pekiştirme) zarflarını seçerken üslubunun doğallığını ve akademik keskinliğini artırmaya hazır mısın? Bu derste **\\utterly, fairly, absolutely, quite, virtually\\** gibi yapıların **\\gradable\\** ile **\\ungradable (absolute)\\** sıfatlarla uyumunu ve anlam kaymalarını keşfedeceksin. **\\Fairly\\** ile yapılan ölçülü vurgu ile **\\absolutely\\** ve **\\utterly\\** ile kurulan tamamlayıcı güçlendirmelerin ton farklarını inceleyeceksin. İleri düzey yazı ve sözlü anlatımlarda değerlendirme ve yargıları ince derecelendirerek ifade edebileceksin.",
    },
    {
      id: "94",
      level: "C1",
      title: "Zarf Yerleşimi",
      titleEng: "Adverb Placement",
      titleEx:
        "She carefully explained the issue. Only then did I realise the truth.",
      intro:
        "Zarfların cümle içindeki konumunun anlamı, vurguyu ve resmiyeti nasıl belirlediğini bilinçli biçimde yönetmeye hazır mısın? Bu derste **\\frequency, manner, degree\\** ve **\\sentence adverbs\\** için fiil öncesi, fiil-sonrası ve cümle başı-sonu seçeneklerini ve **\\only, even, still\\** gibi ögelerin yer değiştirmeyi tetiklediği durumları keşfedeceksin. **\\Split infinitive\\** (**\\to carefully consider\\**) ile geleneksel dizilim arasındaki kayıt farklarını ve çoklu zarf sıralamasını inceleyeceksin. Karmaşık cümlelerde anlamı tam istediğin ögeye çekerek daha net ve profesyonel bir ritim kurabileceksin.",
    },
    {
      id: "95",
      level: "C1",
      title: "İsim Cümlecikleri",
      titleEng: "Noun Clauses (What he said surprised me)",
      titleEx:
        "What he said surprised me. / That she left so early worried them.",
      intro:
        "Özne, nesne veya tamamlayıcı konumunda yer alan **\\noun clauses\\** ile düşünce, duyum ve yargıları tek bir cümlede bütünleştirmeye hazır mısın? Bu derste **\\what, that, whether, if\\** ve **\\wh-\\** bağlantılı **\\noun clauses\\** yapılarının ana cümle ile uyumunu ve fiil çekimini keşfedeceksin. **\\Whatever, whoever, whichever\\** ile genişletilmiş öbeklerin ve **\\anticipatory it\\** (**\\It is clear that...\\**) kalıplarının işlevini inceleyeceksin. Akademik tartışma, rapor ve günlük üst düzey anlatımlarda soyut fikirleri açık ve tutarlı biçimde bağlayabileceksin.",
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
        "Edilgen anlamı **\\infinitive\\** ve **\\gerund\\** öbeklerine taşıyarak eylemin kime yöneldiğini ve zaman ilişkisini incel biçimde ifade etmeye hazır mısın? Bu derste **\\to be done, being repaired, having been informed\\** gibi **\\passive infinitive / gerund\\** kalıplarını ve **\\perfect passive\\** (**\\to have been V3, having been V3\\**) yapılarını keşfedeceksin. **\\Need / want + V-ing\\**, **\\be supposed to be V3\\** ve rapor dilindeki **\\expected to be completed\\** örüntülerinin kullanımını inceleyeceksin. Kurumsal yazışma ve akademik metinlerde süreç, sorumluluk ve sonuçları sofistike bir dilbilgisiyle aktarabileceksin.",
    },
    {
      id: "97",
      level: "C1",
      title: "Perfect Gerund & Infinitive",
      titleEng: "Perfect Gerund & Infinitive (I regret having said that)",
      titleEx:
        "I regret having said that. / He seems to have forgotten the meeting.",
      intro:
        "Eylemin ana fiilden önce mi sonra mı gerçekleştiğini **\\perfect gerund\\** ve **\\perfect infinitive\\** ile kesin sınırlarla ifade etmeye hazır mısın? Bu derste **\\regret / remember / forget / try\\** gibi fiillerde **\\V-ing\\** ile **\\perfect\\** formların (**\\having V3, to have V3\\**) anlam farklarını keşfedeceksin. **\\Appear, seem, claim, be believed\\** yapılarında **\\to have V3\\** kullanımı ile geçmişe yönelik çıkarımları inceleyeceksin. Pişmanlık, varsayım ve rapor edilen olayları üst düzey İngilizcede zaman doğruluğuyla anlatabileceksin.",
    },
    {
      id: "98",
      level: "C1",
      title: "Mesafe Koyma & Kesinlikten Kaçınma Yapıları",
      titleEng: "Distancing & Hedging Language",
      titleEx:
        "The suspect is alleged to have fled the country. It is widely believed that markets will recover.",
      intro:
        "Akademik yazılarda, gazetecilik dilinde ve bilimsel tartışmalarda iddiaları nesnel bir mesafeyle sunmaya ve aşırı genellemelerden kaçınmaya hazır mısın? Bu derste **\\is alleged to, is believed to have V3, it is widely acknowledged that\\** gibi mesafe koyma (**\\distancing\\**) yapıları ile **\\appear, seem, tend to, arguably, conceivably\\** gibi kesinlikten kaçınma (**\\hedging\\**) araçlarını keşfedeceksin. Kanıtlanmamış bilgileri veya karmaşık tezleri temkinli, tarafsız ve ikna edici bir üslupla temellendirmeyi inceleyeceksin. İleri düzey akademik ve profesyonel yazışmalarda güvenilir bir yazar sesi oluşturabileceksin.",
    },
    {
      id: "99",
      level: "C1",
      title: "Eksiltme, Yerine Koyma & Söylem Belirleyicileri",
      titleEng: "Ellipsis, Substitution & Advanced Discourse Markers",
      titleEx:
        "A: Will they join us? B: I hope so. / Notwithstanding the high costs, the plan succeeded.",
      intro:
        "Gereksiz kelime tekrarlarından kaçınarak ve fikirler arasında sofistike mantıksal köprüler kurarak ana dili düzeyinde bir metin bütünlüğü yakalamaya hazır mısın? Bu derste bağlamdan anlaşılan ögeleri düşürmeye dayanan **\\Ellipsis\\**, tekrarlanan isim veya tümcelerin yerine **\\one / ones, do so, so / not\\** ifadelerini getiren **\\Substitution\\** yöntemlerini ve **\\notwithstanding, nonetheless, albeit, thereby, hence\\** söylem belirleyicilerini keşfedeceksin. Paragraflar ve konuşma turları arasında pürüzsüz bir akış kurmayı inceleyeceksin. Anlatımını hem ekonomik hem de son derece tutarlı bir yapıya kavuşturabileceksin.",
    },
    {
      id: "100",
      level: "C1",
      title: "Kalıp İfadeler & Collocations",
      titleEng: "Fixed Expressions & Collocations",
      titleEx: "take into account, bear in mind, come to terms with",
      intro:
        "Tek tek kelimeler yerine ana dili konuşanların kullandığı **\\fixed expressions\\** ve **\\collocations\\** ile ifadenin doğallığını ve ikna gücünü yükseltmeye hazır mısın? Bu derste **\\make a decision\\** (**\\do a decision\\** değil), **\\raise awareness, commit a crime, heavy rain\\** gibi sıkı eşdizim örüntülerini ve **\\phrasal / prepositional verbs\\** ile sabit kalıpları keşfedeceksin. **\\Formal register\\** ile **\\informal\\** ortamlarda tercih edilen alternatifleri ve yanlış çeviri tuzaklarını inceleyeceksin. Yazılı ve sözlü iletişimde takılmadan, akıcı ve yerinde kalıp kullanabileceksin.",
    },
    {
      id: "101",
      level: "C1",
      title: "Bağdaşıklık & Tutarlılık",
      titleEng: "Cohesion & Coherence",
      titleEx:
        "Furthermore, the data support this claim. / In contrast, earlier studies disagreed.",
      intro:
        "Paragraf ve bölümler arasında mantıksal bağ kurarak **\\cohesion\\** ile anlam bütünlüğünü (**\\coherence\\**) birlikte güçlendirmeye hazır mısın? Bu derste **\\furthermore, nevertheless, consequently, in contrast\\** gibi **\\discourse markers\\**, **\\this / these / such\\** ile **\\anaphoric reference\\** ve **\\lexical cohesion\\** (eş anlamlı ve tekrar önleyici **\\synonymy / substitution\\**) araçlarını keşfedeceksin. Konu cümlesi, gelişme ve sonuç örgüsünün okuyucuyu kaybetmeden ilerlemesini inceleyeceksin. Akademik makale, sunum ve uzun metinlerde fikirlerinin akışını profesyonel düzeyde tutarlı kılacaksın.",
    },
    {
      id: "102",
      level: "C1",
      title: "İleri Noktalama",
      titleEng: "Advanced Punctuation",
      titleEx:
        "The results—unexpected as they were—proved decisive; however, further study is needed.",
      intro:
        "Virgülün ötesinde **\\semicolon, colon, dash, parentheses\\** ve **\\quotation marks\\** ile anlamı, duraklamayı ve vurguyu bilinçli biçimde yönlendirmeye hazır mısın? Bu derste **\\em dash\\** ile ara cümle ekleme, **\\colon\\** ile açıklama veya liste sunma, **\\semicolon\\** ile bağımsız ama bağlı cümleleri birleştirme kurallarını keşfedeceksin. **\\Restrictive vs. non-restrictive\\** virgül kullanımı, **\\sic\\**, çoklu noktalama ve akademik atıf biçimlerindeki ince ayrımları inceleyeceksin. İleri düzey yazılarda okunabilirliği ve otoriter bir biçimsel titizliği bir arada sürdürebileceksin.",
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
        "Üçüncü şahıs kaynaklardan aktarılan bilgiyi nesnel ve sofistike bir pasif üslupla sunmaya hazır mısın? Bu derste **It is said / believed / reported that + cümle** ile **Özne + is said to + infinitive** formundaki **\\Passive Reporting Structures\\** yapılarını keşfedeceksin. Zaman uyumu (**\\to be doing, to have done\\**) ve akademik ile gazetecilik dilindeki tipik kullanımları inceleyeceksin. İleri düzey metinlerde iddia ve söylentileri doğrudan atıf yapmadan profesyonel bir mesafeyle aktarabileceksin.",
    },
    {
      id: "103",
      level: "C2",
      title: "Üslupsal Öne Çıkarma & Ödünleme Yapıları",
      titleEng: "Stylistic Fronting & Concessive Inversion",
      titleEx:
        "Rich as he was, he lived humbly. Try as he might, he couldn't convince the committee.",
      intro:
        "Söz dizimini ustalıkla esneterek karşıtlık, ödünleme ve dramatik vurgu anlamlarını edebi bir ritimle ifade etmeye hazır mısın? Bu derste sıfat, zarf veya fiil öbeklerinin cümle başına taşındığı **\\Rich as he was, Try as he might, Much as I admire\\** gibi **\\Concessive Inversion\\** kalıpları ile nesne ve yer yön öbeklerinin öne çıkarıldığı **\\Stylistic Fronting\\** yapılarını keşfedeceksin. **So + sıfat + be + özne** ve **Such + be + özne** dizilimlerinin retorik etkisini inceleyeceksin. İleri düzey yazılı ve sözlü anlatımlarda üslup zenginliğini zirveye taşıyabileceksin.",
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
        "Geçmiş bir bakış açısından geleceğe yönelik plan, beklenen sonuç veya vazgeçilmiş niyeti **\\future in the past\\** yapılarıyla ifade etmeye hazır mısın? Bu derste **\\was / were to V\\**, gerçekleşmemiş planlar için **\\was to have been V3\\** ve ani eşik anları için **\\was on the point / verge / brink of V-ing\\** kalıplarını keşfedeceksin. **\\Was going to\\**, **\\would\\** ve **\\was about to\\** ile anlam ve kayıt farklarını inceleyeceksin. Anlatı, tarihsel özet ve ileri düzey raporlarda zaman çizgisini nüanslı ve kusursuz biçimde kurabileceksin.",
    },
    {
      id: "105",
      level: "C2",
      title: "İleri Düzey İsimleştirme & Sözdizimsel Yoğunluk",
      titleEng: "Advanced Nominalization & Syntactic Density",
      titleEx:
        "The rapid proliferation of AI tools necessitated an immediate overhaul of existing regulations.",
      intro:
        "Fiil ve sıfatları soyut kavramlara ve karmaşık isim öbeklerine dönüştürerek akademik, hukuki ve kurumsal metinlere yüksek bilgi yoğunluğu kazandırmaya hazır mısın? Bu derste uzun yan cümleleri özlü isim tamlamalarıyla özetleyen **\\Advanced Nominalization\\** stratejilerini ve çok katmanlı niteleyici yapıları keşfedeceksin. Günlük konuşma dilindeki fiil ağırlıklı ifadeleri nesnel, otoriter ve sıkı bir akademik sözdizimine dönüştürme tekniklerini inceleyeceksin. Profesyonel raporlarda, makalelerde ve üst düzey sunumlarda etkileyici bir dil mimarisi kurabileceksin.",
    },
    {
      id: "106",
      level: "C2",
      title: "Kalıplaşmış İstek Kipleri & Biçem/Ton Nüansları",
      titleEng: "Fixed Subjunctives, Register & Tone Nuances",
      titleEx:
        "Be that as it may, we must proceed. Suffice it to say, the outcome was far from satisfactory.",
      intro:
        "İngilizcenin tarihsel kalıplarını ve muhataba, ortama veya amaca göre değişen en ince üslup nüanslarını tam bir ustalıkla yönetmeye hazır mısın? Bu derste **\\Be that as it may, Suffice it to say, Far be it from me, Come what may, Lest we forget\\** gibi yerleşik istek kiplerini ve edebi-arkaik ifadeleri keşfedeceksin. Resmi, akademik, diplomatik, nötr ve gündelik dil düzeyleri (**\\register\\**) arasındaki ince sözcük ve dilbilgisi geçişleri ile ironi, nezaket ve vurgu tonlamalarını inceleyeceksin. Her iletişim ortamında mesajının etkisini en üst düzeye çıkarabileceksin.",
    },
    {
      id: "107",
      level: "C2",
      title: "Edimbilimsel Anlam & İma",
      titleEng: "Pragmatic Meaning & Implicature",
      titleEx: "A: It's cold in here. B: I'll close the window. (implicature)",
      intro:
        "Söylenenin ötesinde taşınan **\\pragmatic meaning\\** ve **\\conversational implicature\\** ile gerçek iletişim niyetini çözümlemeye hazır mısın? Bu derste **Grice'ın işbirlikçi ilke**leri (**\\quantity, quality, relation, manner\\**) ve **\\flouting / violating\\** ile oluşan ima katmanlarını keşfedeceksin. Dolaylı **\\requests\\**, **\\indirect speech acts\\** ve bağlamın anlamı nasıl belirlediğini örnek diyaloglarla inceleyeceksin. Üst düzey okuma, müzakere ve kültürlerarası iletişimde söylenmeyeni de güvenle yorumlayıp uygun karşılık verebileceksin.",
    },
    {
      id: "108",
      level: "C2",
      title: "İleri Bilgi Yapısı",
      titleEng: "Advanced Information Structure",
      titleEx:
        "It was the evidence that convinced the jury. / As for the budget, we need deeper cuts.",
      intro:
        "Eski ve yeni bilgiyi (**\\given vs. new\\**) bilinçli sıralayarak **\\information structure\\** ile okuyucunun dikkatini yönetmeye hazır mısın? Bu derste **theme–rheme**, **\\end-focus\\** ilkesi, **\\topicalization\\** ve **\\As for / Regarding\\** gibi çerçeveleme öbeklerini keşfedeceksin. **\\Cleft sentences\\**, **\\existential there\\** ve **\\passive\\** seçiminin odak ve vurguya etkisini inceleyeceksin. Akademik ve profesyonel metinlerde karmaşık argümanları anlaşılır, hiyerarşik ve ikna edici bir akışla sunabileceksin.",
    },
    {
      id: "109",
      level: "C2",
      title: "İroni & Retorik Yapılar",
      titleEng: "Irony & Rhetorical Structures",
      titleEx: "What a brilliant idea—to cancel the launch for the third time.",
      intro:
        "Sözün tam tersini kasteden **\\irony\\** ile soru, tekrar ve karşıtlık üzerinden kurulan **\\rhetorical structures\\** ile üslubuna derinlik katmaya hazır mısın? Bu derste **\\sarcasm\\**, **\\litotes\\**, **\\hyperbole\\** ve **\\rhetorical questions\\** gibi retorik araçların ton ve bağlamla ilişkisini keşfedeceksin. **\\Antithesis\\**, **\\parallelism\\**, **\\chiasmus\\** ve vurgulu söylem kalıplarının ikna ve mizah işlevlerini inceleyeceksin. Edebiyat, medya dili ve üst düzey tartışmalarda niyeti, mizahı ve eleştiriyi ince katmanlarıyla okuyup üretebileceksin.",
    },
    {
      id: "110",
      level: "C2",
      title: "İleri Deyimsel Dil & Eşdizim Kalıpları",
      titleEng: "Advanced Idiomatic Language & Collocational Patterns",
      titleEx: "by and large, at the end of the day, the ball is in your court",
      intro:
        "Kalıplaşmış **\\idioms\\**, deyimsel fiiller ve istatistiksel olarak birlikte gelen **\\collocational patterns\\** ile ana diline yakın bir akıcılığa ulaşmaya hazır mısın? Bu derste **\\break the ice, bite the bullet, shed light on\\** gibi deyimlerin bağlamsal anlamlarını ve **\\strong / weak collocations\\** ayrımını keşfedeceksin. Kayıt düzeyine göre **\\formal vs. informal\\** kalıp seçimi ile yanlış eşdizim hatalarından kaçınma stratejilerini inceleyeceksin. İş İngilizcesi, günlük üst düzey sohbet ve akademik diyaloglarda doğal, yerinde ve etkileyici bir dil kullanabileceksin.",
    },
  ],
};

export const allGrammarHeadings: GrammarHeading[] = (
  Object.keys(grammarHeadings) as CefrLevel[]
)
  .flatMap((level) => grammarHeadings[level])
  .sort((a, b) => Number.parseInt(a.id, 10) - Number.parseInt(b.id, 10));
