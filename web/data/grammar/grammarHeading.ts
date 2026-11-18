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
      titleEng: "Alphabet & Phonetics",
      titleEx:
        "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z",
      intro:
        "Doğru okuma ve heceleme İngilizce yolculuğunun ilk adımıdır. Bu derste **26 harflik** alfabeyi, harf adlarını ve kelime içindeki **ses değerlerini** öğreneceksin. **Ünlü** ve **ünsüz** ayrımı, **\\C\\**, **\\G\\**, **\\Y\\** ile değişen sesler ve **\\sh, ch, th\\** ikilileri dersin omurgasıdır. Kısa ve uzun ünlü ipuçlarıyla yeni kelimeleri daha güvenle seslendireceksin.",
    },
    {
      id: "2",
      level: "A1",
      title: "Özne Zamirleri",
      titleEng: "Subject Pronouns",
      titleEx: "I, You, He, She, It, We, They",
      intro:
        "Özne zamirleri cümlenin konusunu gösterir. İngilizcede **\\I\\**, **\\you\\**, **\\he\\**, **\\she\\**, **\\it\\**, **\\we\\** ve **\\they\\** olmak üzere yedidir; karttaki kalıpların tamamını bu derste işlersin. **\\I\\** her zaman büyük harfle yazılır; **\\you\\** tekil ve çoğul için ortaktır. **\\He\\**, **\\she\\** ve **\\it\\** kişi ya da nesne ayrımını netleştirir.",
    },
    {
      id: "3",
      level: "A1",
      title: "To Be – Olumlu, Olumsuz ve Soru Yapıları",
      titleEng: "To Be – Affirmative, Negative, and Interrogative Forms",
      titleEx: "Am, Is, Are",
      intro:
        "**\\To be\\** cümlede durum, kimlik ve konum bildirir. **\\Am\\** yalnızca **\\I\\** ile; **\\is\\** tekil öznelerle; **\\are\\** çoğul öznelerle gelir. Olumsuz **\\am not / isn't / aren't\\** ve soru **\\Am I / Is she / Are they\\** yapılarını aynı derste kurup kısa cevaplarla pekiştirirsin.",
    },
    {
      id: "4",
      level: "A1",
      title: "İyelik Sıfatları",
      titleEng: "Possessive Adjectives",
      titleEx: "My, Your, His, Her, Its, Our, Their",
      intro:
        "İyelik sıfatları ismin hemen önünde durur ve kime ait olduğunu söyler. **\\My\\**, **\\Your\\**, **\\His\\**, **\\Her\\** gibi kalıpların yanı sıra **\\Its\\**, **\\Our\\**, **\\Their\\** özne zamirine göre değişir; isimle birlikte tek bir öbek oluşturur. Kendini ve çevreni tanıtırken **\\my book\\**, **\\their house\\** gibi cümleler kurarsın.",
    },
    {
      id: "5",
      level: "A1",
      title: "İyelik Zamirleri",
      titleEng: "Possessive Pronouns",
      titleEx: "Mine, Yours, His, Hers, Ours, Theirs",
      intro:
        "İyelik zamirleri isim yerine geçer; cümlede yalnız başına kullanılır. **\\Mine\\**, **\\Yours\\**, **\\His\\**, **\\Hers\\**, **\\Ours\\**, **\\Theirs\\** kalıpları **\\This is mine\\**, **\\Those are theirs\\** gibi cevaplarda görülür. İyelik sıfatlarıyla karıştırmamak için sona gelip gelmediğine dikkat edersin.",
    },
    {
      id: "6",
      level: "A1",
      title: "Tanımlıklar",
      titleEng: "Articles",
      titleEx: "A, An, The",
      intro:
        "İngilizcede **\\a\\**, **\\an\\** ve **\\the\\** en sık kullanılan tanımlıklardır. **\\A\\** ve **\\an\\** belirsiz tekil isimlerde, konu ilk kez söz konusu ediliyorsa kullanılır. **\\The\\** dinleyicinin veya okuyucunun bildiği, ya da bağlamda netleşmiş isimlerin önünde yer alır. **\\An\\**, ünlü sesle başlayan kelimelerde **\\a\\** yerine tercih edilir. Günlük tanıtım ve liste cümlelerinde doğru tanımlığı seçmeyi öğrenirsin.",
    },
    {
      id: "7",
      level: "A1",
      title: "Tekil & Çoğul İsimler",
      titleEng: "Singular & Plural Nouns",
      titleEx: "Singular, Plural, -s, -es, -ies, Irregular Plurals",
      intro:
        "İngilizcede çoğu isim çoğulda **\\-s\\** veya **\\-es\\** alır; **\\-y\\** sonu bazen **\\-ies\\** olur. Düzensiz çoğullar ezberlenir. Tekil–çoğul seçimi **\\there is/are\\**, miktar belirteçleri ve fiil uyumu için zorunludur.",
    },
    {
      id: "8",
      level: "A1",
      title: "Sahiplik Bildirme",
      titleEng: "Possession",
      titleEx: "Have got / Has got",
      intro:
        "**\\have got\\** ve **\\has got\\** İngiliz İngilizcesinde sık duyulan sahiplik kalıplarıdır. **\\I, we, they\\** ile **\\have got\\**; **\\he, she, it\\** ile **\\has got\\** kuralını öğreneceksin. Olumsuz **\\haven't got\\**, soru ve kısa cevaplar da aynı derste. Aile, eşya ve fiziksel özellik anlatımında doğrudan kullanırsın.",
    },
    {
      id: "9",
      level: "A1",
      title: "Varlık Bildirme",
      titleEng: "Declaration of Assets",
      titleEx: "There is / There are",
      intro:
        "Bir yerde ne olduğunu **\\There is\\** ve **\\There are\\** ile söylersin. Tekil ve çoğul isim seçimi fiili belirler. Olumsuz **\\isn't / aren't\\**, soru **\\Is there / Are there\\** ve kısa cevaplar aynı pakette. Oda, şehir veya masa üstü tarifinde doğal kalıp budur.",
    },
    {
      id: "10",
      level: "A1",
      title: "Sayılabilen & Sayılamayan İsimler",
      titleEng: "Countable & Uncountable Nouns",
      titleEx: "Countable Nouns, Uncountable Nouns, A, An, Much, Many",
      intro:
        "Sayılabilen isimler sayılabilir ve **\\a/an\\** alır; sayılamayanlar genelde ölçüsüz kalır. **\\Countable Nouns\\**, **\\Uncountable Nouns\\**, **\\A\\**, **\\An\\**, **\\Much\\**, **\\Many\\** ayrımı **\\much/many\\**, **\\a few/a little\\** ve tanımlık seçimini belirler. Alışveriş ve yemek listelerinde doğru isim türünü seçersin.",
    },
    {
      id: "11",
      level: "A1",
      title: "Miktar Belirteçleri",
      titleEng: "Quantifiers",
      titleEx: "Some, Any, Much, Many, A Lot Of, Lots Of",
      intro:
        "**\\Some\\** olumlu cümlelerde ve tekliflerde; **\\any\\** soru ve olumsuzda sık görülür. **\\Much\\** sayılamayan, **\\many\\** sayılabilen isimlerle kullanılır. **\\A lot of\\** ve **\\lots of\\** her iki grup için de doğaldır; isim türünü seçerek miktar anlatırsın.",
    },
    {
      id: "12",
      level: "A1",
      title: "Yer Edatları",
      titleEng: "Prepositions of Place",
      titleEx: "In, On, At, Under, Behind, Between, Next To",
      intro:
        "Yer edatları ismin nerede olduğunu gösterir. **\\In\\**, **\\On\\**, **\\At\\**, **\\Under\\** gibi kalıpların yanı sıra **\\Behind\\**, **\\Between\\**, **\\Next To\\** kalıpları oda tarifi, adres ve yön bulma cümlelerinde kullanılır. **\\In\\** kapalı alan, **\\on\\** yüzey, **\\at\\** belirli nokta gibi ayrımları örneklerle ayırırsın.",
    },
    {
      id: "13",
      level: "A1",
      title: "Zaman Edatları",
      titleEng: "Prepositions of Time",
      titleEx: "In, On, At, For, Since, Until, From ... To",
      intro:
        "Zaman edatları gün, saat, dönem ve süre ifade eder. **\\In\\**, **\\On\\**, **\\At\\**, **\\For\\** gibi kalıpların yanı sıra **\\Since\\**, **\\Until\\**, **\\From ... To\\** yapıları randevu, rutin ve geçmiş–gelecek anlatımında sık çıkar. **\\In\\** ay ve yıl, **\\on\\** gün, **\\at\\** saat eşleşmesini pekiştirirsin.",
    },
    {
      id: "14",
      level: "A1",
      title: "Emir Cümleleri",
      titleEng: "Imperatives",
      titleEx: "Open The Door, Don't Run, Let's Go, Please",
      intro:
        "Emir cümlelerinde özne genelde gizlidir; fiil veya **\\let's\\** doğrudan başlar. **\\Open The Door\\**, **\\Don't Run\\**, **\\Let's Go\\**, **\\Please\\** örnekleri yönerge, rica ve uyarı anlatır. **\\Don't\\** ile olumsuz emir kurmayı günlük iletişimde kullanırsın.",
    },
    {
      id: "15",
      level: "A1",
      title: "Kipler: Yapabilmek & İzin",
      titleEng: "Modals: To be able to & Permission",
      titleEx: "Can / Can't",
      intro:
        "**\\Can\\** yetenek ve izin sorar; **\\can't\\** yasak veya imkânsızlık bildirir. **\\Can I ...?\\** ile izin iste, **\\I can swim\\** ile yeteneğini anlat. Kısa cevaplarda **\\Yes, you can\\** veya **\\No, you can't\\** yeterlidir.",
    },
    {
      id: "16",
      level: "A1",
      title: "Geniş Zaman",
      titleEng: "Present Simple",
      titleEx: "Present Simple, Do, Does, V1, Always, Usually",
      intro:
        "Geniş zaman alışkanlık, genel gerçek ve sabit program anlatır. **\\Present Simple\\**, **\\Do\\**, **\\Does\\**, **\\V1\\**, **\\Always\\**, **\\Usually\\** ile olumlu cümlede yardımcı **\\do/does\\** soru ve olumsuzda devreye girer. Sıklık zarflarının cümledeki yeri bu zamanla birlikte öğrenilir.",
    },
    {
      id: "17",
      level: "A1",
      title: "Sıklık Zarfları",
      titleEng: "Adverbs of Frequency",
      titleEx: "Always, Usually, Often, Sometimes, Rarely, Never",
      intro:
        "Sıklık zarfları eylemin ne kadar tekrarlandığını gösterir. **\\Always\\**, **\\Usually\\**, **\\Often\\**, **\\Sometimes\\**, **\\Rarely\\**, **\\Never\\** geniş zaman cümlelerinde fiilden önce veya **\\to be\\** sonrasında yer alır. **\\Never\\** ve **\\always\\** gibi uç zarfların konumu pratikte önemlidir.",
    },
    {
      id: "18",
      level: "A1",
      title: "Temel Soru Kelimeleri",
      titleEng: "Basic Question Words",
      titleEx: "What, Who, Where, When, Why, How, Which, Whose",
      intro:
        "Soru kelimeleri bilgi türünü seçer: **\\What\\** nesne veya iş; **\\Who\\** kişi; **\\Where\\** yer; **\\When\\** zaman; **\\Why\\** sebep; **\\How\\** yöntem. **\\Which\\** sınırlı seçenek, **\\Whose\\** sahiplik sorar. Soru cümlesinde **\\do / does\\** veya **\\am, is, are\\** yerleşimini de görürsün.",
    },
    {
      id: "19",
      level: "A1",
      title: "Nesne Zamirleri",
      titleEng: "Object Pronouns",
      titleEx: "Me, You, Him, Her, It, Us, Them",
      intro:
        "Nesne zamirleri eylemin geçtiği kişi veya nesneyi isim yerine gösterir. **\\Me\\**, **\\You\\**, **\\Him\\**, **\\Her\\** gibi kalıpların yanı sıra **\\It\\**, **\\Us\\**, **\\Them\\** yedi kalıbın tamamı özne zamirleriyle eşleşir. **\\I see him\\**, **\\She calls us\\** gibi cümlelerde doğru nesne zamirini seçersin.",
    },
    {
      id: "20",
      level: "A1",
      title: "Sıfatlar",
      titleEng: "Adjectives",
      titleEx: "Big, Small, Happy, Old, New, Adjective Order",
      intro:
        "Sıfatlar ismi niteleyerek boyut, duygu veya kalite ekler. **\\Big\\**, **\\Small\\**, **\\Happy\\**, **\\Old\\**, **\\New\\**, **\\Adjective Order\\** ile tanıma ve karşılaştırma cümleleri kurarsın. Birden fazla sıfatın sırası ileri seviyede detaylanır; A1'de temel **\\big, happy, new\\** yeterlidir.",
    },
    {
      id: "21",
      level: "A1",
      title: "Zarflar",
      titleEng: "Adverbs",
      titleEx: "Slowly, Quickly, Well, Badly, Adverbs",
      intro:
        "Zarflar fiili, sıfatı veya başka zarfı niteler; çoğu **\\-ly\\** ile türetilir. **\\Slowly\\**, **\\Quickly\\**, **\\Well\\**, **\\Badly\\**, **\\Adverbs\\** eylemin nasıl yapıldığını anlatır. **\\Well\\** ve **\\badly\\** düzensiz biçimleriyle ayrıca ezberlenir.",
    },
    {
      id: "22",
      level: "A1",
      title: "İyelik Eki",
      titleEng: "Possessive's",
      titleEx: "John's Car, Mary's Book, Possessive 's",
      intro:
        "İngilizcede **\\'s\\** eki kişi veya canlı isimlere eklenerek sahiplik kurar. **\\John's Car\\**, **\\Mary's Book\\**, **\\Possessive 's\\** örnekleri mülk ve yakınlık bildirir. Türkçedeki **-in/-nın** yapısına denk düşen kısa kalıplar üretirsin.",
    },
    {
      id: "23",
      level: "A1",
      title: "Temel Bağlaçlar",
      titleEng: "Basic Conjunctions",
      titleEx: "And, But, Or, Because",
      intro:
        "Bağlaçlar iki fikri tek cümlede birleştirir. **\\And\\**, **\\But\\**, **\\Or\\**, **\\Because\\** ekleme, zıtlık, seçenek ve sebep ilişkisi kurar. **\\Because\\** ile nedeni sonuç cümlesine bağlamayı hedeflersin.",
    },
    {
      id: "24",
      level: "A1",
      title: "İstek Bildirme",
      titleEng: "Expressing Wishes",
      titleEx: "Would Like",
      intro:
        "**\\Would like\\** kibar istek ve tercih bildirir; **\\want\\**ten daha yumuşaktır. Menüden seçim, davet ve plan ifadesinde **\\I'd like...\\** kalıbını kullanırsın.",
    },
    {
      id: "25",
      level: "A1",
      title: "Temel Cümle Yapısı",
      titleEng: "Basic Sentence Structure",
      titleEx: "Subject, Verb, Object, SVO, Word Order",
      intro:
        "İngilizce temel cümle dizimi çoğunlukla **özne + fiil + nesne** şeklindedir. **\\Subject\\**, **\\Verb\\**, **\\Object\\**, **\\SVO\\**, **\\Word Order\\** öğelerinin yeri soru cümlesinde değişir. İlk cümlelerini bu iskelet üzerine kurarsın.",
    },
    {
      id: "26",
      level: "A1",
      title: "Fiillerin Temel Biçimleri",
      titleEng: "Basic Verb Forms",
      titleEx: "Base Form, Past Simple, Past Participle, V1, V2, V3",
      intro:
        "Fiillerin **\\V1\\** (yalın), **\\V2\\** (geçmiş) ve **\\V3\\** (participle) biçimleri zaman ve edilgen için gereklidir. Düzenli fiillerde **\\-ed\\**, düzensizler listeden ezberlenir.",
    },
  ],
  A2: [
    {
      id: "27",
      level: "A2",
      title: "Şimdiki Zaman",
      titleEng: "Present Continuous",
      titleEx: "Am, Is, Are + V-ing, Now, At The Moment, Right Now",
      intro:
        "**\\Present Continuous\\** konuştuğun anda veya geçici süreçte devam eden işleri anlatır. Kalıp **\\am, is, are\\** artı **\\-ing\\** fiilidir. **\\Now, right now, at the moment\\** gibi zaman ifadeleri ve geniş zamanla farkı bu derste netleşir.",
    },
    {
      id: "28",
      level: "A2",
      title: "Geniş Zaman & Şimdiki Zaman",
      titleEng: "Present Simple vs. Present Continuous",
      titleEx: "Present Simple, Present Continuous, Always, Now",
      intro:
        "Geniş zaman kalıcı veya tekrarlayan işler içindir; **\\-ing\\** yapısı şu an veya geçici süreç içindir. **\\Present Simple\\**, **\\Present Continuous\\**, **\\Always\\**, **\\Now\\** zamanları aynı özneyle karşılaştırarak doğru zamanı seçersin.",
    },
    {
      id: "29",
      level: "A2",
      title: "Durum Fiilleri",
      titleEng: "Stative Verbs",
      titleEx: "Know, Like, Believe, Understand, Stative Verbs",
      intro:
        "Durum fiilleri genelde **\\-ing\\** almaz; duygu, düşünce ve sahiplik bildirir. **\\Know\\**, **\\Like\\**, **\\Believe\\**, **\\Understand\\**, **\\Stative Verbs\\** listesindeki fiiller **\\I am knowing\\** yerine **\\I know\\** biçiminde kalır. Şimdiki zamanla çakışmaları bu derste netleşir.",
    },
    {
      id: "30",
      level: "A2",
      title: "Geçmiş Zaman",
      titleEng: "Past Simple",
      titleEx: "Past Simple, Did, V2, Yesterday, Last Year",
      intro:
        "Geçmiş zamanda eylem belirli bir anda bitmiş kabul edilir. **\\Past Simple\\**, **\\Did\\**, **\\V2\\**, **\\Yesterday\\**, **\\Last Year\\** ile geçmiş olay ve biyografi anlatımı yaparsın. Olumsuz ve soruda **\\did\\** + yalın fiil kuralını uygularsın.",
    },
    {
      id: "31",
      level: "A2",
      title: "To Be Fiilinin Geçmiş Hâli",
      titleEng: "The Past Tense of the Verb 'To Be'",
      titleEx: "Was / Were",
      intro:
        "Geçmişte **\\to be\\** **\\was\\** ve **\\were\\** biçiminde çekimlenir. Tekil için **\\was\\**, çoğul ve **\\you\\** için **\\were\\** kullanılır. Geçmişte konum ve durum cümleleri bu iki kalıpla kurulur.",
    },
    {
      id: "32",
      level: "A2",
      title: "Düzenli & Düzensiz Fiiller",
      titleEng: "Regular and Irregular Verbs",
      titleEx: "Regular Verbs, Irregular Verbs, -ed, V2",
      intro:
        "Düzenli fiillerde geçmiş **\\-ed\\** ile yazılır; düzensizlerin **\\V2\\** biçimi ezberlenir. **\\Regular Verbs\\**, **\\Irregular Verbs\\**, **\\-ed\\**, **\\V2\\** ayrımı geçmiş zaman ve perfect yapılarda temel oluşturur.",
    },
    {
      id: "33",
      level: "A2",
      title: "Geçmiş Zaman İfadeleri",
      titleEng: "Past Time Expressions",
      titleEx: "Yesterday, Last Week, Ago, In 2020, When I Was",
      intro:
        "Geçmiş zamanla birlikte **\\yesterday\\**, **\\last week\\**, **\\ago\\** gibi ifadeler zamanı netleştirir. **\\Yesterday\\**, **\\Last Week\\**, **\\Ago\\**, **\\In 2020\\**, **\\When I Was\\** kalıplarını geçmiş cümle sonunda veya başında doğal kullanırsın.",
    },
    {
      id: "34",
      level: "A2",
      title: "Will ile Gelecek Zaman",
      titleEng: "Future with Will",
      titleEx: "Will, Won't, I'll, Predictions, Promises",
      intro:
        "**\\Will\\** ani karar, tahmin ve söz için kullanılır; kısalmalar **\\I'll\\**, **\\won't\\** günlük konuşmada sıktır. Gelecek zaman fiili özneden sonra gelir, ek fiil gerekmez.",
    },
    {
      id: "35",
      level: "A2",
      title: "Be Going To – Gelecek Planları ve Niyetleri",
      titleEng: "Be Going To – Future Plans and Intentions",
      titleEx: "Be Going To, Plans, Intentions, Evidence",
      intro:
        "**\\Be going to\\** önceden düşünülmüş plan veya delile dayalı tahmin bildirir. **\\Be Going To\\**, **\\Plans\\**, **\\Intentions\\**, **\\Evidence\\** yapısı **\\am/is/are going to\\** + yalın fiille kurulur. **\\Will\\** ile anlam farkını örneklerle ayırırsın.",
    },
    {
      id: "36",
      level: "A2",
      title: "Gelecek Zaman Yapılarının Karşılaştırılması",
      titleEng: "Future Forms",
      titleEx: "Will, Be Going To, Present Continuous For Future",
      intro:
        "Geleceği anlatmak için **\\will\\**, **\\be going to\\** ve bazen şimdiki zaman kullanılır. **\\Will\\**, **\\Be Going To\\**, **\\Present Continuous For Future\\** seçimi niyet, program ve konuşma anına göre değişir. Aynı öznede üç yapıyı karşılaştırırsın.",
    },
    {
      id: "37",
      level: "A2",
      title: "Yetenek ve İzin Bildiren Modallar",
      titleEng: "Modals Expressing Ability and Permission",
      titleEx: "Can / Could",
      intro:
        "**\\Can\\** güncel yetenek ve izin; **\\could\\** geçmiş yetenek veya kibar istek için gelir. **\\Can / Could\\** modallarından sonra fiil yalın halde kalır.",
    },
    {
      id: "38",
      level: "A2",
      title: "Zorunluluk ve Yasak",
      titleEng: "Obligation and Prohibition",
      titleEx: "Must / Mustn't / Have To / Has To",
      intro:
        "**\\Must\\** güçlü zorunluluk veya içsel gereklilik; **\\have to\\** dış kuralı anlatır. **\\Must / Mustn't / Have To / Has To\\** ile yasak ve zorunluluk cümleleri kurarsın.",
    },
    {
      id: "39",
      level: "A2",
      title: "Zorunda Olmama",
      titleEng: "Don't Have To",
      titleEx: "Don't Have To / Doesn't Have To",
      intro:
        "**\\Don't have to\\** zorunlu olmama anlamı verir; **\\mustn't\\** ile karıştırılmamalıdır. Seçenekli görev ve kurallarda doğru modalı seçersin.",
    },
    {
      id: "40",
      level: "A2",
      title: "Tavsiye",
      titleEng: "Advice",
      titleEx: "Should / Shouldn't",
      intro:
        "**\\Should\\** tavsiye ve beklenti bildirir; **\\shouldn't\\** uyarı içerir. Sağlık, çalışma ve günlük öneri cümlelerinde kullanırsın.",
    },
    {
      id: "41",
      level: "A2",
      title: "Olasılık",
      titleEng: "Probability",
      titleEx: "May / Might",
      intro:
        "**\\May\\** ve **\\might\\** olasılık ve izin anlatır; **\\might\\** genelde daha düşük ihtimal taşır. Hava, sonuç ve kibar tahmin cümlelerinde yer alır.",
    },
    {
      id: "42",
      level: "A2",
      title: "Karşılaştırma Sıfatları",
      titleEng: "Comparatives",
      titleEx: "Bigger, Smaller, More, Less, -er Than, -ier Than",
      intro:
        "Karşılaştırma sıfatları iki şeyi derecelendirir. **\\Bigger\\**, **\\Smaller\\**, **\\More\\**, **\\Less\\**, **\\-er Than\\**, **\\-ier Than\\** ile **\\than\\** yapısı kurulur; kısa sıfatlarda **\\-er\\**, uzunlarda **\\more\\** kullanılır.",
    },
    {
      id: "43",
      level: "A2",
      title: "Üstünlük Sıfatları",
      titleEng: "Superlatives",
      titleEx: "The Biggest, The Most, -est, -iest, Superlatives",
      intro:
        "Üstünlük sıfatları bir grupta en üstü seçer. **\\The Biggest\\**, **\\The Most\\**, **\\-est\\**, **\\-iest\\**, **\\Superlatives\\** kalıpları **\\the\\** ile birlikte gelir. **\\-est\\** ve **\\most\\** kurallarını örneklerle pekiştirirsin.",
    },
    {
      id: "44",
      level: "A2",
      title: "Eşitlik Karşılaştırmaları",
      titleEng: "Comparisons of Equality",
      titleEx: "As ... As / Not As ... As",
      intro:
        "Eşitlik karşılaştırmasında **\\as ... as\\** yapısı kullanılır; olumsuzda **\\not as ... as\\** yetersizlik bildirir. **\\As ... As / Not As ... As\\** iki özelliği aynı düzeyde sunar.",
    },
    {
      id: "45",
      level: "A2",
      title: "Fazlalık ve Yeterlilik",
      titleEng: "Excess and Sufficiency",
      titleEx: "Too / Enough",
      intro:
        "**\\Too\\** aşırılık, **\\enough\\** yeterlilik gösterir; sıfat veya zarfın önünde veya sonunda konumları değişir. Şikâyet ve yeterlilik cümlelerinde ayırırsın.",
    },
    {
      id: "46",
      level: "A2",
      title: "Durum Zarfları",
      titleEng: "Adverbs of Manner",
      titleEx: "Quickly, Slowly, Carefully, -ly, Adverbs Of Manner",
      intro:
        "Durum zarfları eylemin nasıl yapıldığını söyler. **\\Quickly\\**, **\\Slowly\\**, **\\Carefully\\**, **\\-ly\\**, **\\Adverbs Of Manner\\** çoğunlukla **\\-ly\\** ile türetilir ve fiilden sonra gelir. **\\Quickly\\**, **\\slowly\\** gibi zarflar cümleyi canlandırır.",
    },
    {
      id: "47",
      level: "A2",
      title: "Belirsiz Zamirler",
      titleEng: "Indefinite Pronouns",
      titleEx:
        "Someone, Anyone, No One, Everyone, Something, Anything, Nothing, Everything",
      intro:
        "Belirsiz zamirler kimseyi veya şeyi isim söylemeden gösterir. **\\Someone\\**, **\\Anyone\\**, **\\No One\\**, **\\Everyone\\** gibi kalıpların yanı sıra **\\Something\\**, **\\Anything\\**, **\\Nothing\\** olumlu, olumsuz ve soru cümlelerinde farklı biçimler alır (**\\some-\\** / **\\any-\\**).",
    },
    {
      id: "48",
      level: "A2",
      title: "Seçim ve Birliktelik Yapıları",
      titleEng: "Structures for Selection and Combination",
      titleEx: "Both / Either / Neither",
      intro:
        "**\\Both\\** ikisini birden, **\\either\\** ikisinden biri, **\\neither\\** ikisi de olumsuz seçenekte kullanılır. **\\Both / Either / Neither\\** çoğul isim ve yardımcı fiil uyumuna dikkat edersin.",
    },
    {
      id: "49",
      level: "A2",
      title: "İleri Miktar Belirteçleri",
      titleEng: "Advanced Quantity Specifiers",
      titleEx: "A Few, Few, A Little, Little, Too Much, Too Many, Enough",
      intro:
        "İleri miktar belirteçleri sayılabilen ve sayılamayan isimle eşleşir. **\\A Few\\**, **\\Few\\**, **\\A Little\\**, **\\Little\\** gibi kalıpların yanı sıra **\\Too Much\\**, **\\Too Many\\**, **\\Enough\\** **\\few/little\\** ve **\\a few/a little\\** anlam farkını taşır. **\\Too much\\** ve **\\too many\\** aşırılığı gösterir.",
    },
    {
      id: "50",
      level: "A2",
      title: "Hareket Edatları",
      titleEng: "Prepositions of Movement",
      titleEx: "To, Into, Out Of, Across, Through, Along, Over",
      intro:
        "Hareket edatları yöne, geçişe ve varışa işaret eder. **\\To\\**, **\\Into\\**, **\\Out Of\\**, **\\Across\\** gibi kalıpların yanı sıra **\\Through\\**, **\\Along\\**, **\\Over\\** yön tarifi ve seyahat anlatımında kullanılır. Yer edatlarıyla karışan **\\in/into\\** ayrımına dikkat edersin.",
    },
    {
      id: "51",
      level: "A2",
      title: "Gerund ve Mastar – Verb + -  ing / To + Verb",
      titleEng: "Gerund ve Infinitive – Verb + -  ing / To + Verb",
      titleEx: "Verb + -ing, Verb + To Infinitive, Like Doing, Want To",
      intro:
        "Bazı fiillerden sonra **\\-ing\\**, bazılarından sonra **\\to\\** gelir; anlam fiile göre değişebilir. **\\Verb + -ing\\**, **\\Verb + To Infinitive\\**, **\\Like Doing\\**, **\\Want To\\** kalıpları cümle genişletirken doğru biçimi seçmeni sağlar.",
    },
    {
      id: "52",
      level: "A2",
      title: "Fiil Kalıpları",
      titleEng: "Verb Patterns",
      titleEx: "Enjoy Doing, Decide To, Stop -ing, Verb Patterns",
      intro:
        "Fiil kalıpları hangi yapının geleceğini sabitler. **\\Enjoy Doing\\**, **\\Decide To\\**, **\\Stop -ing\\**, **\\Verb Patterns\\** örnekleri **\\enjoy doing\\**, **\\decide to do\\** gibi blokları ezberletir.",
    },
    {
      id: "53",
      level: "A2",
      title: "Sıfırıncı Koşul",
      titleEng: "Zero Conditional",
      titleEx: "If + Present, Present, Zero Conditional, General Truths",
      intro:
        "Sıfırıncı koşulda **\\if\\** ve ana cümle geniş zamandadır; genel doğrular ve bilimsel kurallar anlatılır. **\\If + Present\\**, **\\Present\\**, **\\Zero Conditional\\**, **\\General Truths\\** yapısı gerçek her zaman doğru sonuç verir.",
    },
    {
      id: "54",
      level: "A2",
      title: "Birinci Koşul",
      titleEng: "First Conditional",
      titleEx: "If + Present, Will, First Conditional, Real Future",
      intro:
        "Birinci koşulda gerçek gelecek ihtimali vardır: **\\if\\** + geniş zaman, ana cümle **\\will\\**. **\\If + Present\\**, **\\Will\\**, **\\First Conditional\\**, **\\Real Future\\** plan ve uyarı cümlelerinde kullanılır.",
    },
    {
      id: "55",
      level: "A2",
      title: "Temel İlgi Cümlecikleri",
      titleEng: "Basic Relative Clauses",
      titleEx: "Who, Which, That, Where, Basic Relative Clauses",
      intro:
        "İlgi cümlecikleri ismin hemen ardından gelir ve onu tanımlar. **\\Who\\**, **\\Which\\**, **\\That\\**, **\\Where\\**, **\\Basic Relative Clauses\\** ile **\\who\\** kişi, **\\which/that\\** nesne için seçilir. Temel tanımlayıcı ilgi cümleleri kurarsın.",
    },
    {
      id: "56",
      level: "A2",
      title: "Dönüşlü Zamirler",
      titleEng: "Reflexive Pronouns",
      titleEx: "Myself, Yourself, Himself, Herself, Itself, Ourselves",
      intro:
        "Dönüşlü zamirler özne ve nesne aynı kişi olduğunda kullanılır. **\\Myself\\**, **\\Yourself\\**, **\\Himself\\**, **\\Herself\\**, **\\Itself\\**, **\\Ourselves\\** **\\by myself\\** gibi ifadelerle yalnız yapılan işi de vurgular.",
    },
    {
      id: "57",
      level: "A2",
      title: "Geçmiş Alışkanlıklar",
      titleEng: "Past Habits",
      titleEx: "Used To",
      intro:
        "**\\Used to\\** geçmişte düzenli olup artık sürmeyen alışkanlıkları anlatır. Olumsuz **\\didn't use to\\** ve soru **\\Did you use to...?\\** ile pekiştirirsin.",
    },
    {
      id: "58",
      level: "A2",
      title: "Temel Edilgen Yapı",
      titleEng: "Basic Passive Voice",
      titleEx: "Be + V3, Present Passive, Past Passive, By",
      intro:
        "Edilgende özne eylemi yapan değil, eylemden etkilenendir. **\\Be + V3\\**, **\\Present Passive\\**, **\\Past Passive\\**, **\\By\\** **\\be + V3\\** iskeletiyle kurulur; zaman **\\be\\** çekiminden anlaşılır.",
    },
    {
      id: "59",
      level: "A2",
      title: "Soru Eklentileri",
      titleEng: "Question Tags",
      titleEx: "Isn't He, Aren't You, You're Late Aren't You, Tags",
      intro:
        "Soru ekleri kısa onay veya teyit ister; yardımcı veya **\\to be\\** çekimine göre seçilir. **\\Isn't He\\**, **\\Aren't You\\**, **\\You're Late Aren't You\\**, **\\Tags\\** kalıpları günlük konuşmada tonu yumuşatır.",
    },
    {
      id: "60",
      level: "A2",
      title: "Katılma & Benzerlik Bildirme",
      titleEng: "Expressing Agreement and Similarity",
      titleEx: "So / Neither",
      intro:
        "**\\So\\** olumlu, **\\neither\\** olumsuz cümleye katılım bildirir. **\\So / Neither\\** kısa yanıtlarda tekrarı önler.",
    },
    {
      id: "61",
      level: "A2",
      title: "Dolaylı Sorular",
      titleEng: "Indirect Questions",
      titleEx: "Could You Tell Me, What Time Is It, Indirect Questions",
      intro:
        "Dolaylı soruda soru kelimesi cümle içinde kalır, **\\do/does\\** kullanılmaz; cümle düzeni yüklemden sonra devam eder. **\\Could You Tell Me\\**, **\\What Time Is It\\**, **\\Indirect Questions\\** kibar bilgi isteği için kullanılır.",
    },
  ],
  B1: [
    {
      id: "62",
      level: "B1",
      title: "Yakın Geçmiş Zaman",
      titleEng: "Present Perfect",
      titleEx: "Have / Has + Past Participle, Ever, Never, Just",
      intro:
        "Present perfect geçmişteki olayı şimdiye bağlar; deneyim, sonuç veya yakın geçmiş vurgusu taşır. **\\Have / Has + Past Participle\\**, **\\Ever\\**, **\\Never\\**, **\\Just\\** yapıları **\\have/has + V3\\** etrafında kurulur. **\\Ever, never, just\\** gibi zarflar anlamı keskinleştirir.",
    },
    {
      id: "63",
      level: "B1",
      title: "Present Perfect Zaman İfadeleri",
      titleEng: "Present Perfect Time Expressions",
      titleEx: "Since, For, Already, Yet, Just, Ever, Never",
      intro:
        "Present perfect geçmişteki olayı şimdiye bağlar; deneyim, sonuç veya yakın geçmiş vurgusu taşır. **\\Since\\**, **\\For\\**, **\\Already\\**, **\\Yet\\** gibi kalıpların yanı sıra **\\Just\\**, **\\Ever\\**, **\\Never\\** yapıları **\\have/has + V3\\** etrafında kurulur. **\\Ever, never, just\\** gibi zarflar anlamı keskinleştirir.",
    },
    {
      id: "64",
      level: "B1",
      title: "Present Perfect vs Past Simple",
      titleEng: "Present Perfect vs Past Simple",
      titleEx: "Have / Has + V3, Past Simple, For, Since",
      intro:
        "Geçmiş zaman belirli bir anda biter; present perfect sonucu bugüne taşır. **\\Have / Has + V3\\**, **\\Past Simple\\**, **\\For\\**, **\\Since\\** zaman ifadeleri hangi yapının seçileceğini gösterir. Geçmiş deneyim ve haber anlatımında ayrımı uygularsın.",
    },
    {
      id: "65",
      level: "B1",
      title: "Yakın Geçmişte Süreklilik",
      titleEng: "Present Perfect Continuous",
      titleEx: "Have / Has Been + V-ing, For, Since",
      intro:
        "Present perfect geçmişteki olayı şimdiye bağlar; deneyim, sonuç veya yakın geçmiş vurgusu taşır. **\\Have / Has Been + V-ing\\**, **\\For\\**, **\\Since\\** yapıları **\\have/has + V3\\** etrafında kurulur. **\\Ever, never, just\\** gibi zarflar anlamı keskinleştirir.",
    },
    {
      id: "66",
      level: "B1",
      title: "Present Perfect Simple vs Continuous",
      titleEng: "Present Perfect Simple vs Continuous",
      titleEx: "Have Done, Have Been Doing, How Long",
      intro:
        "Yakın geçmişte süren ve tamamlanan eylemler farklı perfect yapılarla anlatılır. **\\Have Done\\**, **\\Have Been Doing\\**, **\\How Long\\** seçimi sonuç mu, süreç mi vurgulandığına bağlıdır. **Present Perfect Simple ve Continuous – Karşılaştırma** karşılaştırması konuşma ve yazıda doğru zaman seçimini sağlar.",
    },
    {
      id: "67",
      level: "B1",
      title: "Geçmişte Süreklilik",
      titleEng: "Past Continuous",
      titleEx: "Was / Were + V-ing, While, When",
      intro:
        "Past continuous geçmişte sürerken kesilen veya eşzamanlı süreçleri anlatır. **\\Was / Were + V-ing\\**, **\\While\\**, **\\When\\** **\\was/were + V-ing\\** iskeletiyle kurulur. **\\When\\** ve **\\while\\** ile past simple karşılaştırması yapılır.",
    },
    {
      id: "68",
      level: "B1",
      title: "Past Simple vs Past Continuous",
      titleEng: "Past Simple vs Past Continuous",
      titleEx: "Past Simple, Past Continuous, When, While",
      intro:
        "Past continuous geçmişte sürerken kesilen veya eşzamanlı süreçleri anlatır. **\\Past Simple\\**, **\\Past Continuous\\**, **\\When\\**, **\\While\\** **\\was/were + V-ing\\** iskeletiyle kurulur. **\\When\\** ve **\\while\\** ile past simple karşılaştırması yapılır.",
    },
    {
      id: "69",
      level: "B1",
      title: "Geçmişin Geçmişi",
      titleEng: "Past Perfect",
      titleEx: "Had + Past Participle, Before, After",
      intro:
        "Past perfect iki geçmiş olayı sıralar; önce tamamlanan eylem **\\had + V3\\** ile gelir. **\\Had + Past Participle\\**, **\\Before\\**, **\\After\\** bağlaçları zaman çizgisini netleştirir. Anlatı ve raporlarda önce–sonra ilişkisini kurarsın.",
    },
    {
      id: "70",
      level: "B1",
      title: "Past Perfect vs Past Simple",
      titleEng: "Past Perfect vs Past Simple",
      titleEx: "Had + V3, Past Simple, By The Time",
      intro:
        "Past perfect iki geçmiş olayı sıralar; önce tamamlanan eylem **\\had + V3\\** ile gelir. **\\Had + V3\\**, **\\Past Simple\\**, **\\By The Time\\** bağlaçları zaman çizgisini netleştirir. Anlatı ve raporlarda önce–sonra ilişkisini kurarsın.",
    },
    {
      id: "71",
      level: "B1",
      title: "Gelecekte Süreklilik",
      titleEng: "Future Continuous",
      titleEx: "Will Be + V-ing, This Time Tomorrow",
      intro:
        "İleri gelecek zamanlar ileri bir noktada devam eden veya tamamlanmış eylemi gösterir. **\\Will Be + V-ing\\**, **\\This Time Tomorrow\\** **\\by\\** ve **\\by the time\\** ile birlikte kullanılır. Plan ve tahmin üstü anlatımda devreye girer.",
    },
    {
      id: "72",
      level: "B1",
      title: "İleri Gelecek Zaman Yapıları",
      titleEng: "Advanced Future Forms",
      titleEx: "Will Be Doing, Will Have Done, By",
      intro:
        "İleri Gelecek Zaman Yapıları konusunda **\\Will Be Doing\\**, **\\Will Have Done\\**, **\\By\\** yapıları B1 düzeyinde işlenir. Kuralı örnek cümlelerle görür, alıştırmalarla kalıcı hâle getirirsin.",
    },
    {
      id: "73",
      level: "B1",
      title: "İkinci Koşul",
      titleEng: "Second Conditional",
      titleEx: "If + Past Simple, Would + Verb",
      intro:
        "İkinci koşul gerçek olmayan veya düşük ihtimalli şartı anlatır. **\\If + Past Simple\\**, **\\Would + Verb\\** yapısı **\\would\\** ile sonuç kurar. Hayal ve tavsiye cümlelerinde kullanırsın.",
    },
    {
      id: "74",
      level: "B1",
      title: "Üçüncü Koşul",
      titleEng: "Third Conditional",
      titleEx: "If + Past Perfect, Would Have + V3",
      intro:
        "Üçüncü koşul geçmişte gerçekleşmemiş şartı ve olası sonucunu birleştirir. **\\If + Past Perfect\\**, **\\Would Have + V3\\** **\\would have + V3\\** ile pişmanlık ve eleştiri kurulur.",
    },
    {
      id: "75",
      level: "B1",
      title: "Koşul Cümlelerinin Karşılaştırılması",
      titleEng: "Zero, First, Second and Third Conditionals",
      titleEx: "Zero, First, Second, Third, Conditionals",
      intro:
        "Üçüncü koşul geçmişte gerçekleşmemiş şartı ve olası sonucunu birleştirir. **\\Zero\\**, **\\First\\**, **\\Second\\**, **\\Third\\**, **\\Conditionals\\** **\\would have + V3\\** ile pişmanlık ve eleştiri kurulur.",
    },
    {
      id: "76",
      level: "B1",
      title: "Koşul Bağlaçları",
      titleEng: "Conditional Conjunctions",
      titleEx: "Unless, As Long As, Provided That",
      intro:
        "Koşul cümlelerinde şart ve sonuç kipleri birbirine bağlıdır. **\\Unless\\**, **\\As Long As\\**, **\\Provided That\\** farklı zaman ve ihtimal düzeylerini temsil eder. Gerçek, düşünce ve geçmişe dönük senaryoları ayırırsın.",
    },
    {
      id: "77",
      level: "B1",
      title: "Çıkarım Bildiren Modallar",
      titleEng: "Modals Expressing Deduction",
      titleEx: "Must, Can't, May, Might, Could",
      intro:
        "Modal fiiller yardımcı gibi çekimlenir; arkasından fiil yalın kalır. **\\Must\\**, **\\Can't\\**, **\\May\\**, **\\Might\\**, **\\Could\\** zorunluluk, olasılık, izin veya çıkarım taşır. Bağlama göre anlamı daraltırsın.",
    },
    {
      id: "78",
      level: "B1",
      title: "Modal Perfect Yapıları",
      titleEng: "Modal Perfect Structures",
      titleEx: "Must Have, Can't Have, Could Have, May Have, Might Have",
      intro:
        "Modal fiiller yardımcı gibi çekimlenir; arkasından fiil yalın kalır. **\\Must Have\\**, **\\Can't Have\\**, **\\Could Have\\**, **\\May Have\\**, **\\Might Have\\** zorunluluk, olasılık, izin veya çıkarım taşır. Bağlama göre anlamı daraltırsın.",
    },
    {
      id: "79",
      level: "B1",
      title: "Geçmişte Tavsiye ve Pişmanlık",
      titleEng: "Should Have / Shouldn't Have",
      titleEx: "Should Have, Shouldn't Have, Regret",
      intro:
        "Geçmişte Tavsiye ve Pişmanlık konusunda **\\Should Have\\**, **\\Shouldn't Have\\**, **\\Regret\\** yapıları B1 düzeyinde işlenir. Kuralı örnek cümlelerle görür, alıştırmalarla kalıcı hâle getirirsin.",
    },
    {
      id: "80",
      level: "B1",
      title: "Edilgen Yapı",
      titleEng: "Passive Voice",
      titleEx: "Present Passive, Past Passive, Future Passive, Be + V3",
      intro:
        "Edilgen yapıda özne eylemden etkilenendir; **\\be + V3\\** veya modal + **\\be + V3\\** kullanılır. **\\Present Passive\\**, **\\Past Passive\\**, **\\Future Passive\\**, **\\Be + V3\\** haber, bilim ve resmî metinlerde sık görülür. Etken–edilgen dönüşümünü uygularsın.",
    },
    {
      id: "81",
      level: "B1",
      title: "Etken ve Edilgen Yapı",
      titleEng: "Active vs Passive Voice",
      titleEx: "Active Voice, Passive Voice",
      intro:
        "Edilgen yapıda özne eylemden etkilenendir; **\\be + V3\\** veya modal + **\\be + V3\\** kullanılır. **\\Active Voice\\**, **\\Passive Voice\\** haber, bilim ve resmî metinlerde sık görülür. Etken–edilgen dönüşümünü uygularsın.",
    },
    {
      id: "82",
      level: "B1",
      title: "Dolaylı Anlatım",
      titleEng: "Reported Speech",
      titleEx: "Say, Tell, Backshift, That-Clause",
      intro:
        "Dolaylı anlatımda zaman ve zamirler geriye kayar; **\\say/tell\\** ve **\\that\\** cümlesi temel taşıdır. **\\Say\\**, **\\Tell\\**, **\\Backshift\\**, **\\That-Clause\\** soru, emir ve öneri aktarımında fiil seçimini değiştirir.",
    },
    {
      id: "83",
      level: "B1",
      title: "Dolaylı Sorular",
      titleEng: "Reported Questions",
      titleEx: "Ask, If, Whether, Wh- Words",
      intro:
        "Dolaylı anlatımda zaman ve zamirler geriye kayar; **\\say/tell\\** ve **\\that\\** cümlesi temel taşıdır. **\\Ask\\**, **\\If\\**, **\\Whether\\**, **\\Wh- Words\\** soru, emir ve öneri aktarımında fiil seçimini değiştirir.",
    },
    {
      id: "84",
      level: "B1",
      title: "Dolaylı Emir ve Rica",
      titleEng: "Reported Commands and Requests",
      titleEx: "Tell + To Infinitive, Ask + Not To",
      intro:
        "Dolaylı anlatımda zaman ve zamirler geriye kayar; **\\say/tell\\** ve **\\that\\** cümlesi temel taşıdır. **\\Tell + To Infinitive\\**, **\\Ask + Not To\\** soru, emir ve öneri aktarımında fiil seçimini değiştirir.",
    },
    {
      id: "85",
      level: "B1",
      title: "Aktarım Fiilleri",
      titleEng: "Reporting Verbs",
      titleEx: "Deny, Admit, Suggest, Advise, Warn, Insist",
      intro:
        "Aktarım Fiilleri konusunda **\\Deny\\**, **\\Admit\\**, **\\Suggest\\**, **\\Advise\\**, **\\Warn\\**, **\\Insist\\** yapıları B1 düzeyinde işlenir. Kuralı örnek cümlelerle görür, alıştırmalarla kalıcı hâle getirirsin.",
    },
    {
      id: "86",
      level: "B1",
      title: "Tanımlayıcı İlgi Cümlecikleri",
      titleEng: "Defining Relative Clauses",
      titleEx: "Who, Which, That, Defining",
      intro:
        "İlgi cümlecikleri ismi tanımlayarak cümleyi sıkılaştırır. **\\Who\\**, **\\Which\\**, **\\That\\**, **\\Defining\\** tanımlayıcı ve tanımsız ayrımında virgül ve anlam farkı oluşur.",
    },
    {
      id: "87",
      level: "B1",
      title: "Tanımlayıcı Olmayan İlgi Cümlecikleri",
      titleEng: "Non-Defining Relative Clauses",
      titleEx: "Commas, Who, Which, Non-Defining",
      intro:
        "İlgi cümlecikleri ismi tanımlayarak cümleyi sıkılaştırır. **\\Commas\\**, **\\Who\\**, **\\Which\\**, **\\Non-Defining\\** tanımlayıcı ve tanımsız ayrımında virgül ve anlam farkı oluşur.",
    },
    {
      id: "88",
      level: "B1",
      title: "İlgi Zamirleri",
      titleEng: "Relative Pronouns",
      titleEx: "Who, Whom, Whose, Which, That",
      intro:
        "İlgi cümlecikleri ismi tanımlayarak cümleyi sıkılaştırır. **\\Who\\**, **\\Whom\\**, **\\Whose\\**, **\\Which\\**, **\\That\\** tanımlayıcı ve tanımsız ayrımında virgül ve anlam farkı oluşur.",
    },
    {
      id: "89",
      level: "B1",
      title: "İleri Gerund ve Infinitive",
      titleEng: "Advanced Gerunds and Infinitives",
      titleEx: "Verb + -ing, Verb + To Infinitive, Enjoy Doing",
      intro:
        "Fiilden sonra gelen **\\-ing\\** veya **\\to\\** biçimi anlamı değiştirir. **\\Verb + -ing\\**, **\\Verb + To Infinitive\\**, **\\Enjoy Doing\\** hangi fiilin hangi yapıyı aldığını gösterir. Ezber ve örnek cümle burada belirleyicidir.",
    },
    {
      id: "90",
      level: "B1",
      title: "Yaptırma ve İzin Yapıları",
      titleEng: "Make / Let / Allow",
      titleEx: "Make, Let, Allow, Be Allowed To",
      intro:
        "Yaptırma ve İzin Yapıları konusunda **\\Make\\**, **\\Let\\**, **\\Allow\\**, **\\Be Allowed To\\** yapıları B1 düzeyinde işlenir. Kuralı örnek cümlelerle görür, alıştırmalarla kalıcı hâle getirirsin.",
    },
    {
      id: "91",
      level: "B1",
      title: "Alışkanlık Yapıları",
      titleEng: "Used To / Be Used To / Get Used To",
      titleEx: "Used To, Be Used To, Get Used To",
      intro:
        "Alışkanlık Yapıları konusunda **\\Used To\\**, **\\Be Used To\\**, **\\Get Used To\\** yapıları B1 düzeyinde işlenir. Kuralı örnek cümlelerle görür, alıştırmalarla kalıcı hâle getirirsin.",
    },
    {
      id: "92",
      level: "B1",
      title: "Wish Yapıları",
      titleEng: "Wish Structures",
      titleEx: "Wish + Past Simple, Wish + Past Perfect",
      intro:
        "Dilek ve tercih yapıları gerçekle çelişen durumu veya pişmanlığı anlatır. **\\Wish + Past Simple\\**, **\\Wish + Past Perfect\\** zamir ve kip kaymasıyla kurulur. Konuşmada duygu ve nezaket katmanı ekler.",
    },
    {
      id: "93",
      level: "B1",
      title: "Bir İşi Başkasına Yaptırma",
      titleEng: "Causative Have / Get",
      titleEx: "Have Something Done, Get Someone To",
      intro:
        "Bir İşi Başkasına Yaptırma konusunda **\\Have Something Done\\**, **\\Get Someone To\\** yapıları B1 düzeyinde işlenir. Kuralı örnek cümlelerle görür, alıştırmalarla kalıcı hâle getirirsin.",
    },
    {
      id: "94",
      level: "B1",
      title: "Deyimsel Fiiller",
      titleEng: "Phrasal Verbs",
      titleEx: "Look After, Give Up, Turn On, Phrasal Verbs",
      intro:
        "Phrasal fiiller edat veya zarf ile birleşince yeni anlam üretir. **\\Look After\\**, **\\Give Up\\**, **\\Turn On\\**, **\\Phrasal Verbs\\** ayrılabilen ve ayrılamayan türleri fiil–nesne sırasını değiştirir. Günlük İngilizcede yüksek frekanslıdır.",
    },
    {
      id: "95",
      level: "B1",
      title: "Ayrılabilen ve Ayrılamayan Phrasal Verbs",
      titleEng: "Separable and Inseparable Phrasal Verbs",
      titleEx: "Separable, Inseparable, Put On, Look Up",
      intro:
        "Phrasal fiiller edat veya zarf ile birleşince yeni anlam üretir. **\\Separable\\**, **\\Inseparable\\**, **\\Put On\\**, **\\Look Up\\** ayrılabilen ve ayrılamayan türleri fiil–nesne sırasını değiştirir. Günlük İngilizcede yüksek frekanslıdır.",
    },
    {
      id: "96",
      level: "B1",
      title: "Bağlayıcı İfadeler",
      titleEng: "Linking Words",
      titleEx: "However, Therefore, Moreover, Furthermore",
      intro:
        "Bağlayıcı İfadeler konusunda **\\However\\**, **\\Therefore\\**, **\\Moreover\\**, **\\Furthermore\\** yapıları B1 düzeyinde işlenir. Kuralı örnek cümlelerle görür, alıştırmalarla kalıcı hâle getirirsin.",
    },
    {
      id: "97",
      level: "B1",
      title: "Zıtlık Yapıları",
      titleEng: "Contrast Structures",
      titleEx: "Although, Despite, In Spite Of",
      intro:
        "Zıtlık Yapıları konusunda **\\Although\\**, **\\Despite\\**, **\\In Spite Of\\** yapıları B1 düzeyinde işlenir. Kuralı örnek cümlelerle görür, alıştırmalarla kalıcı hâle getirirsin.",
    },
    {
      id: "98",
      level: "B1",
      title: "Derece ve Vurgu",
      titleEng: "Degree and Emphasis",
      titleEx: "So, Such, So That, Such That",
      intro:
        "Vurgulu cümleler bilgi yapısını yeniden düzenleyerek dikkat çeker. **\\So\\**, **\\Such\\**, **\\So That\\**, **\\Such That\\** **\\it is ... that\\** veya **\\what ... is\\** kalıplarıyla kurulur.",
    },
    {
      id: "99",
      level: "B1",
      title: "Vurgulu Do / Does / Did",
      titleEng: "Emphatic Do",
      titleEx: "Do / Does / Did + Base Verb",
      intro:
        "Vurgulu cümleler bilgi yapısını yeniden düzenleyerek dikkat çeker. **\\Do / Does / Did + Base Verb\\** **\\it is ... that\\** veya **\\what ... is\\** kalıplarıyla kurulur.",
    },
    {
      id: "100",
      level: "B1",
      title: "Soru Kelimesi + Infinitive",
      titleEng: "Question Word + Infinitive",
      titleEx: "What To Do, How To Use, Where To Go",
      intro:
        "Fiilden sonra gelen **\\-ing\\** veya **\\to\\** biçimi anlamı değiştirir. **\\What To Do\\**, **\\How To Use\\**, **\\Where To Go\\** hangi fiilin hangi yapıyı aldığını gösterir. Ezber ve örnek cümle burada belirleyicidir.",
    },
    {
      id: "101",
      level: "B1",
      title: "-ed ve -ing Sıfatları",
      titleEng: "Participle Adjectives",
      titleEx: "-ed Adjectives, -ing Adjectives, Bored, Boring",
      intro:
        "Participle yapıları yan cümleyi kısaltır; **\\-ing\\** ve **\\V3\\** biçimleri isim veya sıfat görevi görür. **\\-ed Adjectives\\**, **\\-ing Adjectives\\**, **\\Bored\\**, **\\Boring\\** akademik ve yazılı metinlerde yoğunlaşır.",
    },
  ],
  B2: [
    {
      id: "102",
      level: "B2",
      title: "Süregelen Miş'li Geçmiş Zaman",
      titleEng: "Past Perfect Continuous",
      titleEx: "Had Been + V-ing, All Day, Because",
      intro:
        "Past perfect iki geçmiş olayı sıralar; önce tamamlanan eylem **\\had + V3\\** ile gelir. **\\Had Been + V-ing\\**, **\\All Day\\**, **\\Because\\** bağlaçları zaman çizgisini netleştirir. Anlatı ve raporlarda önce–sonra ilişkisini kurarsın.",
    },
    {
      id: "103",
      level: "B2",
      title: "Gelecekte Tamamlanmış Eylemler",
      titleEng: "Future Perfect",
      titleEx: "Will Have + V3, By June, By Then",
      intro:
        "İleri gelecek zamanlar ileri bir noktada devam eden veya tamamlanmış eylemi gösterir. **\\Will Have + V3\\**, **\\By June\\**, **\\By Then\\** **\\by\\** ve **\\by the time\\** ile birlikte kullanılır. Plan ve tahmin üstü anlatımda devreye girer.",
    },
    {
      id: "104",
      level: "B2",
      title: "Süregenen Bitmiş Gelecek Zaman",
      titleEng: "Future Perfect Continuous",
      titleEx: "Will Have Been + V-ing, For Ten Years",
      intro:
        "İleri gelecek zamanlar ileri bir noktada devam eden veya tamamlanmış eylemi gösterir. **\\Will Have Been + V-ing\\**, **\\For Ten Years\\** **\\by\\** ve **\\by the time\\** ile birlikte kullanılır. Plan ve tahmin üstü anlatımda devreye girer.",
    },
    {
      id: "105",
      level: "B2",
      title: "Geçmişten Bakılan Gelecek",
      titleEng: "Future in the Past",
      titleEx: "Was / Were To, Was Going To, Would, Was About To",
      intro:
        "Geçmişten bakılan gelecek **\\was going to\\**, **\\would\\** ve **\\was about to\\** ile ifade edilir. **\\Was / Were To\\**, **\\Was Going To\\**, **\\Would\\**, **\\Was About To\\** dolaylı anlatım ve geçmiş plan cümlelerinde görülür.",
    },
    {
      id: "106",
      level: "B2",
      title: "Karma Koşul Cümleleri",
      titleEng: "Mixed Conditionals",
      titleEx: "If I Had, I Would Be, Mixed Types",
      intro:
        "Koşul cümlelerinde şart ve sonuç kipleri birbirine bağlıdır. **\\If I Had\\**, **\\I Would Be\\**, **\\Mixed Types\\** farklı zaman ve ihtimal düzeylerini temsil eder. Gerçek, düşünce ve geçmişe dönük senaryoları ayırırsın.",
    },
    {
      id: "107",
      level: "B2",
      title: "İleri Koşul Yapıları",
      titleEng: "Advanced Conditional Structures",
      titleEx: "Unless, Provided That, Supposing, Otherwise",
      intro:
        "Koşul cümlelerinde şart ve sonuç kipleri birbirine bağlıdır. **\\Unless\\**, **\\Provided That\\**, **\\Supposing\\**, **\\Otherwise\\** farklı zaman ve ihtimal düzeylerini temsil eder. Gerçek, düşünce ve geçmişe dönük senaryoları ayırırsın.",
    },
    {
      id: "108",
      level: "B2",
      title: "Devrik Koşul Cümleleri",
      titleEng: "Inverted Conditionals",
      titleEx: "Had I Known, Were I You, Should You Need",
      intro:
        "Koşul cümlelerinde şart ve sonuç kipleri birbirine bağlıdır. **\\Had I Known\\**, **\\Were I You\\**, **\\Should You Need\\** farklı zaman ve ihtimal düzeylerini temsil eder. Gerçek, düşünce ve geçmişe dönük senaryoları ayırırsın.",
    },
    {
      id: "109",
      level: "B2",
      title: "İleri Wish Yapıları",
      titleEng: "Advanced Wish Structures",
      titleEx: "Wish + Past, Wish + Past Perfect",
      intro:
        "Dilek ve tercih yapıları gerçekle çelişen durumu veya pişmanlığı anlatır. **\\Wish + Past\\**, **\\Wish + Past Perfect\\** zamir ve kip kaymasıyla kurulur. Konuşmada duygu ve nezaket katmanı ekler.",
    },
    {
      id: "110",
      level: "B2",
      title: "Keşke Yapısı",
      titleEng: "If Only",
      titleEx: "If Only, Wish, Regret",
      intro:
        "Dilek ve tercih yapıları gerçekle çelişen durumu veya pişmanlığı anlatır. **\\If Only\\**, **\\Wish\\**, **\\Regret\\** zamir ve kip kaymasıyla kurulur. Konuşmada duygu ve nezaket katmanı ekler.",
    },
    {
      id: "111",
      level: "B2",
      title: "Tercih Yapıları",
      titleEng: "Would Rather / Would Prefer",
      titleEx: "Would Rather, Would Prefer, Than",
      intro:
        "Dilek ve tercih yapıları gerçekle çelişen durumu veya pişmanlığı anlatır. **\\Would Rather\\**, **\\Would Prefer\\**, **\\Than\\** zamir ve kip kaymasıyla kurulur. Konuşmada duygu ve nezaket katmanı ekler.",
    },
    {
      id: "112",
      level: "B2",
      title: "Zamanı Geldi Yapısı",
      titleEng: "It's (High) Time",
      titleEx: "It's Time, It's High Time, Past Simple",
      intro:
        "**Zamanı Geldi Yapısı** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\It's Time\\**, **\\It's High Time\\**, **\\Past Simple\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
    {
      id: "113",
      level: "B2",
      title: "İleri Modal Fiiller",
      titleEng: "Advanced Modal Verbs",
      titleEx: "Might, Could, Ought To, Need, Dare",
      intro:
        "Modal fiiller yardımcı gibi çekimlenir; arkasından fiil yalın kalır. **\\Might\\**, **\\Could\\**, **\\Ought To\\**, **\\Need\\**, **\\Dare\\** zorunluluk, olasılık, izin veya çıkarım taşır. Bağlama göre anlamı daraltırsın.",
    },
    {
      id: "114",
      level: "B2",
      title: "Needn't Have ve Didn't Need To",
      titleEng: "Needn't Have vs Didn't Need To",
      titleEx: "Needn't Have, Didn't Need To",
      intro:
        "**Needn't Have ve Didn't Need To** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\Needn't Have\\**, **\\Didn't Need To\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
    {
      id: "115",
      level: "B2",
      title: "İleri Modal Perfect Yapıları",
      titleEng: "Advanced Modal Perfects",
      titleEx: "Might Have, Could Have, Should Have, Must Have",
      intro:
        "Modal fiiller yardımcı gibi çekimlenir; arkasından fiil yalın kalır. **\\Might Have\\**, **\\Could Have\\**, **\\Should Have\\**, **\\Must Have\\** zorunluluk, olasılık, izin veya çıkarım taşır. Bağlama göre anlamı daraltırsın.",
    },
    {
      id: "116",
      level: "B2",
      title: "İleri Edilgen Yapılar",
      titleEng: "Advanced Passive Voice",
      titleEx: "Passive Modals, Get Passive, Have Something Done",
      intro:
        "Edilgen yapıda özne eylemden etkilenendir; **\\be + V3\\** veya modal + **\\be + V3\\** kullanılır. **\\Passive Modals\\**, **\\Get Passive\\**, **\\Have Something Done\\** haber, bilim ve resmî metinlerde sık görülür. Etken–edilgen dönüşümünü uygularsın.",
    },
    {
      id: "117",
      level: "B2",
      title: "Edilgen Aktarım Yapıları",
      titleEng: "Passive Reporting Structures",
      titleEx: "It Is Said That, He Is Said To, Is Believed To",
      intro:
        "Edilgen yapıda özne eylemden etkilenendir; **\\be + V3\\** veya modal + **\\be + V3\\** kullanılır. **\\It Is Said That\\**, **\\He Is Said To\\**, **\\Is Believed To\\** haber, bilim ve resmî metinlerde sık görülür. Etken–edilgen dönüşümünü uygularsın.",
    },
    {
      id: "118",
      level: "B2",
      title: "İleri Ettirgen Yapılar",
      titleEng: "Advanced Causative Structures",
      titleEx: "Have / Get Something Done, Make / Let / Get",
      intro:
        "**İleri Ettirgen Yapılar** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\Have / Get Something Done\\**, **\\Make / Let / Get\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
    {
      id: "119",
      level: "B2",
      title: "İleri Dolaylı Anlatım ve Reporting Verbs",
      titleEng: "Advanced Reported Speech",
      titleEx: "Deny, Accuse, Apologise, Reporting Verbs",
      intro:
        "Dolaylı anlatımda zaman ve zamirler geriye kayar; **\\say/tell\\** ve **\\that\\** cümlesi temel taşıdır. **\\Deny\\**, **\\Accuse\\**, **\\Apologise\\**, **\\Reporting Verbs\\** soru, emir ve öneri aktarımında fiil seçimini değiştirir.",
    },
    {
      id: "120",
      level: "B2",
      title: "Kısaltılmış İlgi Cümlecikleri",
      titleEng: "Reduced Relative Clauses",
      titleEx: "V-ing, V3, Standing, Written",
      intro:
        "İlgi cümlecikleri ismi tanımlayarak cümleyi sıkılaştırır. **\\V-ing\\**, **\\V3\\**, **\\Standing\\**, **\\Written\\** tanımlayıcı ve tanımsız ayrımında virgül ve anlam farkı oluşur.",
    },
    {
      id: "121",
      level: "B2",
      title: "Participle Cümlecikleri",
      titleEng: "Participle Clauses",
      titleEx: "-ing Clause, V3 Clause, While Doing",
      intro:
        "Participle yapıları yan cümleyi kısaltır; **\\-ing\\** ve **\\V3\\** biçimleri isim veya sıfat görevi görür. **\\-ing Clause\\**, **\\V3 Clause\\**, **\\While Doing\\** akademik ve yazılı metinlerde yoğunlaşır.",
    },
    {
      id: "122",
      level: "B2",
      title: "Perfect Participle Cümlecikleri",
      titleEng: "Perfect Participle Clauses",
      titleEx: "Having Done, Having Been, Perfect Participle",
      intro:
        "Participle yapıları yan cümleyi kısaltır; **\\-ing\\** ve **\\V3\\** biçimleri isim veya sıfat görevi görür. **\\Having Done\\**, **\\Having Been\\**, **\\Perfect Participle\\** akademik ve yazılı metinlerde yoğunlaşır.",
    },
    {
      id: "123",
      level: "B2",
      title: "İleri Gerund ve Infinitive",
      titleEng: "Advanced Gerunds and Infinitives",
      titleEx: "Stop Doing, Remember To Do, Perfect Infinitive",
      intro:
        "Fiilden sonra gelen **\\-ing\\** veya **\\to\\** biçimi anlamı değiştirir. **\\Stop Doing\\**, **\\Remember To Do\\**, **\\Perfect Infinitive\\** hangi fiilin hangi yapıyı aldığını gösterir. Ezber ve örnek cümle burada belirleyicidir.",
    },
    {
      id: "124",
      level: "B2",
      title: "Karmaşık Fiil Kalıpları",
      titleEng: "Complex Verb Patterns",
      titleEx: "Verb + Object + To Infinitive, Verb + -ing",
      intro:
        "**Karmaşık Fiil Kalıpları** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\Verb + Object + To Infinitive\\**, **\\Verb + -ing\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
    {
      id: "125",
      level: "B2",
      title: "Bare Infinitive",
      titleEng: "Bare Infinitive",
      titleEx: "Make Do, Let Go, Hear Leave, Without To",
      intro:
        "Fiilden sonra gelen **\\-ing\\** veya **\\to\\** biçimi anlamı değiştirir. **\\Make Do\\**, **\\Let Go\\**, **\\Hear Leave\\**, **\\Without To\\** hangi fiilin hangi yapıyı aldığını gösterir. Ezber ve örnek cümle burada belirleyicidir.",
    },
    {
      id: "126",
      level: "B2",
      title: "Vurgulu Cümle Yapıları",
      titleEng: "Cleft Sentences",
      titleEx: "It Is That, What Is, Cleft",
      intro:
        "Vurgulu cümleler bilgi yapısını yeniden düzenleyerek dikkat çeker. **\\It Is That\\**, **\\What Is\\**, **\\Cleft\\** **\\it is ... that\\** veya **\\what ... is\\** kalıplarıyla kurulur.",
    },
    {
      id: "127",
      level: "B2",
      title: "Devrik Cümle Yapıları",
      titleEng: "Inversion",
      titleEx: "Never Have I, Rarely Do We, Inversion",
      intro:
        "Devrik yapıda özne ile fiil veya yardımcı yer değiştirir; vurgu ve resmî üslup sağlar. **\\Never Have I\\**, **\\Rarely Do We\\**, **\\Inversion\\** olumsuz zarfların başta kullanımıyla sık görülür.",
    },
    {
      id: "128",
      level: "B2",
      title: "Olumsuz Devrik Yapılar",
      titleEng: "Negative Inversion",
      titleEx: "Not Only, No Sooner, Hardly When",
      intro:
        "Devrik yapıda özne ile fiil veya yardımcı yer değiştirir; vurgu ve resmî üslup sağlar. **\\Not Only\\**, **\\No Sooner\\**, **\\Hardly When\\** olumsuz zarfların başta kullanımıyla sık görülür.",
    },
    {
      id: "129",
      level: "B2",
      title: "Öne Taşıma",
      titleEng: "Fronting",
      titleEx: "Fronting, Topicalisation, Here Comes",
      intro:
        "**Öne Taşıma** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\Fronting\\**, **\\Topicalisation\\**, **\\Here Comes\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
    {
      id: "130",
      level: "B2",
      title: "Eksiltili Yapılar",
      titleEng: "Ellipsis",
      titleEx: "Omission, So Do I, Auxiliary Ellipsis",
      intro:
        "Eksiltme ve ikame tekrarı azaltır; önceki cümledeki öğeyi zamir veya yardımcı ile çağırır. **\\Omission\\**, **\\So Do I\\**, **\\Auxiliary Ellipsis\\** akıcı konuşma ve metin bütünlüğü sağlar.",
    },
    {
      id: "131",
      level: "B2",
      title: "İkame Yapıları",
      titleEng: "Substitution",
      titleEx: "Do So, One / Ones, Such, Substitution",
      intro:
        "Eksiltme ve ikame tekrarı azaltır; önceki cümledeki öğeyi zamir veya yardımcı ile çağırır. **\\Do So\\**, **\\One / Ones\\**, **\\Such\\**, **\\Substitution\\** akıcı konuşma ve metin bütünlüğü sağlar.",
    },
    {
      id: "132",
      level: "B2",
      title: "İleri Soru Eklentileri",
      titleEng: "Advanced Question Tags",
      titleEx: "Question Tags, Aren't I, I Am Aren't I",
      intro:
        "**İleri Soru Eklentileri** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\Question Tags\\**, **\\Aren't I\\**, **\\I Am Aren't I\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
    {
      id: "133",
      level: "B2",
      title: "Karmaşık İsim Öbekleri",
      titleEng: "Complex Noun Phrases",
      titleEx: "Pre-Modifiers, Post-Modifiers, Noun Phrase",
      intro:
        "**Karmaşık İsim Öbekleri** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\Pre-Modifiers\\**, **\\Post-Modifiers\\**, **\\Noun Phrase\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
    {
      id: "134",
      level: "B2",
      title: "İleri Artikel Kullanımı",
      titleEng: "Advanced Articles",
      titleEx: "Zero Article, The, Generic, Geographical Names",
      intro:
        "**İleri Artikel Kullanımı** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\Zero Article\\**, **\\The\\**, **\\Generic\\**, **\\Geographical Names\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
    {
      id: "135",
      level: "B2",
      title: "Belirleyiciler",
      titleEng: "Determiners",
      titleEx: "All, Every, Each, Both, Either",
      intro:
        "**Belirleyiciler** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\All\\**, **\\Every\\**, **\\Each\\**, **\\Both\\**, **\\Either\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
    {
      id: "136",
      level: "B2",
      title: "İleri Miktar Belirteçleri",
      titleEng: "Advanced Quantifiers",
      titleEx: "All Of, None Of, Most Of, Few, Little",
      intro:
        "**İleri Miktar Belirteçleri** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\All Of\\**, **\\None Of\\**, **\\Most Of\\**, **\\Few\\**, **\\Little\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
    {
      id: "137",
      level: "B2",
      title: "İleri Edat Kullanımları",
      titleEng: "Advanced Prepositions",
      titleEx: "Despite, Owing To, Due To, Regarding",
      intro:
        "**İleri Edat Kullanımları** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\Despite\\**, **\\Owing To\\**, **\\Due To\\**, **\\Regarding\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
    {
      id: "138",
      level: "B2",
      title: "Bağımlı Edatlar",
      titleEng: "Dependent Prepositions",
      titleEx: "Depend On, Apologise For, Good At",
      intro:
        "**Bağımlı Edatlar** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\Depend On\\**, **\\Apologise For\\**, **\\Good At\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
    {
      id: "139",
      level: "B2",
      title: "Söylem Belirteçleri",
      titleEng: "Discourse Markers",
      titleEx: "Anyway, Besides, In Conclusion, Mind You",
      intro:
        "**Söylem Belirteçleri** metnin parça parça değil, bütüncül okunmasını hedefler. **\\Anyway\\**, **\\Besides\\**, **\\In Conclusion\\**, **\\Mind You\\** okuyucuyu yönlendirir veya üslup seçimini netleştirir. İleri okuma ve yazma için kritiktir.",
    },
    {
      id: "140",
      level: "B2",
      title: "İleri Bağlayıcı İfadeler",
      titleEng: "Advanced Linking Words",
      titleEx: "Nevertheless, Moreover, Conversely, Hence",
      intro:
        "**İleri Bağlayıcı İfadeler** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\Nevertheless\\**, **\\Moreover\\**, **\\Conversely\\**, **\\Hence\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
    {
      id: "141",
      level: "B2",
      title: "İsimleştirme",
      titleEng: "Nominalisation",
      titleEx: "-tion, -ment, -ness, Verb To Noun",
      intro:
        "**İsimleştirme** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\-tion\\**, **\\-ment\\**, **\\-ness\\**, **\\Verb To Noun\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
    {
      id: "142",
      level: "B2",
      title: "Paralel Yapılar",
      titleEng: "Parallel Structures",
      titleEx: "Parallelism, Not Only But Also, Either Or",
      intro:
        "**Paralel Yapılar** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. **\\Parallelism\\**, **\\Not Only But Also\\**, **\\Either Or\\** kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.",
    },
  ],
  C1: [
    {
      id: "143",
      level: "C1",
      title: "İleri Zaman ve Görünüş Yapıları",
      titleEng: "Advanced Tense and Aspect",
      titleEx: "Aspect, Ongoing, Completed, Habitual",
      intro:
        "**İleri Zaman ve Görünüş Yapıları** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Aspect\\**, **\\Ongoing\\**, **\\Completed\\**, **\\Habitual\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "144",
      level: "C1",
      title: "Karmaşık Perfect Yapıları",
      titleEng: "Complex Perfect Structures",
      titleEx: "Complex Perfect, Layered Tenses",
      intro:
        "**Karmaşık Perfect Yapıları** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Complex Perfect\\**, **\\Layered Tenses\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "145",
      level: "C1",
      title: "İleri Gelecek Zaman İfadeleri",
      titleEng: "Advanced Future Expressions",
      titleEx: "By Then, By The Time, Within",
      intro:
        "**İleri Gelecek Zaman İfadeleri** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\By Then\\**, **\\By The Time\\**, **\\Within\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "146",
      level: "C1",
      title: "İleri Modal Perfect Yapıları",
      titleEng: "Advanced Modal Perfect Structures",
      titleEx: "Could Have Been, Might Have Been",
      intro:
        "Modal fiiller yardımcı gibi çekimlenir; arkasından fiil yalın kalır. **\\Could Have Been\\**, **\\Might Have Been\\** zorunluluk, olasılık, izin veya çıkarım taşır. Bağlama göre anlamı daraltırsın.",
    },
    {
      id: "147",
      level: "C1",
      title: "İleri Modal Çıkarım Yapıları",
      titleEng: "Advanced Modal Deduction",
      titleEx: "Must Have, Can't Have, Deduction",
      intro:
        "Modal fiiller yardımcı gibi çekimlenir; arkasından fiil yalın kalır. **\\Must Have\\**, **\\Can't Have\\**, **\\Deduction\\** zorunluluk, olasılık, izin veya çıkarım taşır. Bağlama göre anlamı daraltırsın.",
    },
    {
      id: "148",
      level: "C1",
      title: "Devrik Koşul Yapıları",
      titleEng: "Advanced Conditional Inversion",
      titleEx: "Had, Were, Should, Inverted Conditional",
      intro:
        "Koşul cümlelerinde şart ve sonuç kipleri birbirine bağlıdır. **\\Had\\**, **\\Were\\**, **\\Should\\**, **\\Inverted Conditional\\** farklı zaman ve ihtimal düzeylerini temsil eder. Gerçek, düşünce ve geçmişe dönük senaryoları ayırırsın.",
    },
    {
      id: "149",
      level: "C1",
      title: "Örtük Koşul Yapıları",
      titleEng: "Implied Conditionals",
      titleEx: "Implied If, Otherwise, Or Else",
      intro:
        "Koşul cümlelerinde şart ve sonuç kipleri birbirine bağlıdır. **\\Implied If\\**, **\\Otherwise\\**, **\\Or Else\\** farklı zaman ve ihtimal düzeylerini temsil eder. Gerçek, düşünce ve geçmişe dönük senaryoları ayırırsın.",
    },
    {
      id: "150",
      level: "C1",
      title: "İleri Subjunctive",
      titleEng: "Advanced Subjunctive Mood",
      titleEx: "Subjunctive, Were, Be, Mandative",
      intro:
        "**İleri Subjunctive** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Subjunctive\\**, **\\Were\\**, **\\Be\\**, **\\Mandative\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "151",
      level: "C1",
      title: "Mandative Subjunctive",
      titleEng: "Mandative Subjunctive",
      titleEx: "Suggest That He Be, Insist That She Go",
      intro:
        "**Mandative Subjunctive** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Suggest That He Be\\**, **\\Insist That She Go\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "152",
      level: "C1",
      title: "İleri Edilgen Yapılar",
      titleEng: "Advanced Passive Constructions",
      titleEx: "Advanced Passive, Impersonal Passive",
      intro:
        "Edilgen yapıda özne eylemden etkilenendir; **\\be + V3\\** veya modal + **\\be + V3\\** kullanılır. **\\Advanced Passive\\**, **\\Impersonal Passive\\** haber, bilim ve resmî metinlerde sık görülür. Etken–edilgen dönüşümünü uygularsın.",
    },
    {
      id: "153",
      level: "C1",
      title: "Edilgen Infinitive ve Gerund",
      titleEng: "Passive Infinitives and Gerunds",
      titleEx: "To Be Done, Being Done, Passive -ing",
      intro:
        "Edilgen yapıda özne eylemden etkilenendir; **\\be + V3\\** veya modal + **\\be + V3\\** kullanılır. **\\To Be Done\\**, **\\Being Done\\**, **\\Passive -ing\\** haber, bilim ve resmî metinlerde sık görülür. Etken–edilgen dönüşümünü uygularsın.",
    },
    {
      id: "154",
      level: "C1",
      title: "Perfect Edilgen Yapılar",
      titleEng: "Perfect Passive Structures",
      titleEx: "Has Been Done, Had Been Built",
      intro:
        "Edilgen yapıda özne eylemden etkilenendir; **\\be + V3\\** veya modal + **\\be + V3\\** kullanılır. **\\Has Been Done\\**, **\\Had Been Built\\** haber, bilim ve resmî metinlerde sık görülür. Etken–edilgen dönüşümünü uygularsın.",
    },
    {
      id: "155",
      level: "C1",
      title: "Karmaşık Aktarım Yapıları",
      titleEng: "Complex Reporting Structures",
      titleEx: "Reported Speech, Patterns, That-Clause",
      intro:
        "**Karmaşık Aktarım Yapıları** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Reported Speech\\**, **\\Patterns\\**, **\\That-Clause\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "156",
      level: "C1",
      title: "İleri Ettirgen Yapılar",
      titleEng: "Advanced Causative Structures",
      titleEx: "Have Done, Get Done, Causative Patterns",
      intro:
        "**İleri Ettirgen Yapılar** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Have Done\\**, **\\Get Done\\**, **\\Causative Patterns\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "157",
      level: "C1",
      title: "İleri İlgi Cümlecikleri",
      titleEng: "Advanced Relative Clauses",
      titleEx: "Preposition + Whom, Quantifiers + Of Whom",
      intro:
        "İlgi cümlecikleri ismi tanımlayarak cümleyi sıkılaştırır. **\\Preposition + Whom\\**, **\\Quantifiers + Of Whom\\** tanımlayıcı ve tanımsız ayrımında virgül ve anlam farkı oluşur.",
    },
    {
      id: "158",
      level: "C1",
      title: "İleri Participle Cümlecikleri",
      titleEng: "Advanced Participle Clauses",
      titleEx: "Participle, Absolute, Reduced",
      intro:
        "Participle yapıları yan cümleyi kısaltır; **\\-ing\\** ve **\\V3\\** biçimleri isim veya sıfat görevi görür. **\\Participle\\**, **\\Absolute\\**, **\\Reduced\\** akademik ve yazılı metinlerde yoğunlaşır.",
    },
    {
      id: "159",
      level: "C1",
      title: "Bağımsız Participle Yapıları",
      titleEng: "Absolute Constructions",
      titleEx: "Weather Permitting, All Things Considered",
      intro:
        "Participle yapıları yan cümleyi kısaltır; **\\-ing\\** ve **\\V3\\** biçimleri isim veya sıfat görevi görür. **\\Weather Permitting\\**, **\\All Things Considered\\** akademik ve yazılı metinlerde yoğunlaşır.",
    },
    {
      id: "160",
      level: "C1",
      title: "Kısaltılmış Zarf Cümlecikleri",
      titleEng: "Reduced Adverbial Clauses",
      titleEx: "While Walking, If Asked, Reduced Adverbials",
      intro:
        "**Kısaltılmış Zarf Cümlecikleri** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\While Walking\\**, **\\If Asked\\**, **\\Reduced Adverbials\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "161",
      level: "C1",
      title: "İleri Infinitive Cümlecikleri",
      titleEng: "Advanced Infinitive Clauses",
      titleEx: "For Her To Leave, Infinitive Clause",
      intro:
        "Fiilden sonra gelen **\\-ing\\** veya **\\to\\** biçimi anlamı değiştirir. **\\For Her To Leave\\**, **\\Infinitive Clause\\** hangi fiilin hangi yapıyı aldığını gösterir. Ezber ve örnek cümle burada belirleyicidir.",
    },
    {
      id: "162",
      level: "C1",
      title: "Perfect Gerund ve Infinitive",
      titleEng: "Perfect Gerund and Infinitive",
      titleEx: "Having Done, To Have Done",
      intro:
        "Fiilden sonra gelen **\\-ing\\** veya **\\to\\** biçimi anlamı değiştirir. **\\Having Done\\**, **\\To Have Done\\** hangi fiilin hangi yapıyı aldığını gösterir. Ezber ve örnek cümle burada belirleyicidir.",
    },
    {
      id: "163",
      level: "C1",
      title: "İleri Fiil Tamamlama Yapıları",
      titleEng: "Advanced Verb Complementation",
      titleEx: "Verb Complementation, Patterns",
      intro:
        "**İleri Fiil Tamamlama Yapıları** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Verb Complementation\\**, **\\Patterns\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "164",
      level: "C1",
      title: "İleri Devrik Yapılar",
      titleEng: "Advanced Inversion",
      titleEx: "Inversion, Fronting, Emphasis",
      intro:
        "Devrik yapıda özne ile fiil veya yardımcı yer değiştirir; vurgu ve resmî üslup sağlar. **\\Inversion\\**, **\\Fronting\\**, **\\Emphasis\\** olumsuz zarfların başta kullanımıyla sık görülür.",
    },
    {
      id: "165",
      level: "C1",
      title: "Olumsuz Zarflardan Sonra Devrik Yapı",
      titleEng: "Inversion After Negative Adverbials",
      titleEx: "Never, Seldom, Hardly, Scarcely",
      intro:
        "Devrik yapıda özne ile fiil veya yardımcı yer değiştirir; vurgu ve resmî üslup sağlar. **\\Never\\**, **\\Seldom\\**, **\\Hardly\\**, **\\Scarcely\\** olumsuz zarfların başta kullanımıyla sık görülür.",
    },
    {
      id: "166",
      level: "C1",
      title: "İleri Cleft ve Pseudo-Cleft Cümleleri",
      titleEng: "Advanced Cleft and Pseudo-Cleft Sentences",
      titleEx: "It-Cleft, Wh-Cleft, What I Need Is",
      intro:
        "Vurgulu cümleler bilgi yapısını yeniden düzenleyerek dikkat çeker. **\\It-Cleft\\**, **\\Wh-Cleft\\**, **\\What I Need Is\\** **\\it is ... that\\** veya **\\what ... is\\** kalıplarıyla kurulur.",
    },
    {
      id: "167",
      level: "C1",
      title: "İleri Ellipsis ve Substitution",
      titleEng: "Advanced Ellipsis and Substitution",
      titleEx: "Ellipsis, Substitution, Pro-Forms",
      intro:
        "Eksiltme ve ikame tekrarı azaltır; önceki cümledeki öğeyi zamir veya yardımcı ile çağırır. **\\Ellipsis\\**, **\\Substitution\\**, **\\Pro-Forms\\** akıcı konuşma ve metin bütünlüğü sağlar.",
    },
    {
      id: "168",
      level: "C1",
      title: "Dislocation",
      titleEng: "Dislocation",
      titleEx: "Left Dislocation, Right Dislocation, Topic",
      intro:
        "**Dislocation** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Left Dislocation\\**, **\\Right Dislocation\\**, **\\Topic\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "169",
      level: "C1",
      title: "İleri Fronting",
      titleEng: "Advanced Fronting",
      titleEx: "Fronting, Focus, Theme",
      intro:
        "**İleri Fronting** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Fronting\\**, **\\Focus\\**, **\\Theme\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "170",
      level: "C1",
      title: "İleri İsimleştirme",
      titleEng: "Advanced Nominalisation",
      titleEx: "Nominalisation, Abstract Nouns, Density",
      intro:
        "**İleri İsimleştirme** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Nominalisation\\**, **\\Abstract Nouns\\**, **\\Density\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "171",
      level: "C1",
      title: "İsim Cümlecikleri",
      titleEng: "Noun Clause Structures",
      titleEx: "That-Clause, Wh-Clause, Whether",
      intro:
        "**İsim Cümlecikleri** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\That-Clause\\**, **\\Wh-Clause\\**, **\\Whether\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "172",
      level: "C1",
      title: "İleri Zarf Cümlecikleri",
      titleEng: "Advanced Adverbial Clauses",
      titleEx: "Concession, Purpose, Result Clauses",
      intro:
        "**İleri Zarf Cümlecikleri** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Concession\\**, **\\Purpose\\**, **\\Result Clauses\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "173",
      level: "C1",
      title: "İleri Taviz Yapıları",
      titleEng: "Advanced Concessive Structures",
      titleEx: "Much As, However + Adj, Concession",
      intro:
        "**İleri Taviz Yapıları** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Much As\\**, **\\However + Adj\\**, **\\Concession\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "174",
      level: "C1",
      title: "İleri Bağlaçlar",
      titleEng: "Advanced Conjunctions",
      titleEx: "Notwithstanding, Albeit, Complex Conjunctions",
      intro:
        "**İleri Bağlaçlar** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Notwithstanding\\**, **\\Albeit\\**, **\\Complex Conjunctions\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "175",
      level: "C1",
      title: "İleri Edat Öbekleri",
      titleEng: "Advanced Prepositional Phrases",
      titleEx: "In Terms Of, With Regard To, Prepositional Phrase",
      intro:
        "**İleri Edat Öbekleri** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\In Terms Of\\**, **\\With Regard To\\**, **\\Prepositional Phrase\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "176",
      level: "C1",
      title: "Karmaşık Edat Kalıpları",
      titleEng: "Complex Preposition Patterns",
      titleEx: "In Spite Of, In View Of, Complex Prepositions",
      intro:
        "**Karmaşık Edat Kalıpları** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\In Spite Of\\**, **\\In View Of\\**, **\\Complex Prepositions\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "177",
      level: "C1",
      title: "İleri Belirleyiciler ve Miktar Belirteçleri",
      titleEng: "Advanced Determiners and Quantifiers",
      titleEx: "Determiners, Quantifiers, Half Of",
      intro:
        "**İleri Belirleyiciler ve Miktar Belirteçleri** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Determiners\\**, **\\Quantifiers\\**, **\\Half Of\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "178",
      level: "C1",
      title: "İleri Artikel Kullanımı",
      titleEng: "Advanced Article Usage",
      titleEx: "The, Zero Article, Generic, Unique Reference",
      intro:
        "**İleri Artikel Kullanımı** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\The\\**, **\\Zero Article\\**, **\\Generic\\**, **\\Unique Reference\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "179",
      level: "C1",
      title: "İleri Cümle Yapıları",
      titleEng: "Advanced Sentence Structures",
      titleEx: "Sentence Structure, Complexity, Embedding",
      intro:
        "**İleri Cümle Yapıları** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Sentence Structure\\**, **\\Complexity\\**, **\\Embedding\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
    {
      id: "180",
      level: "C1",
      title: "Bağdaşıklık ve Tutarlılık",
      titleEng: "Cohesion and Coherence",
      titleEx: "Cohesion, Coherence, Reference, Lexical Chains",
      intro:
        "**Bağdaşıklık ve Tutarlılık** metnin parça parça değil, bütüncül okunmasını hedefler. **\\Cohesion\\**, **\\Coherence\\**, **\\Reference\\**, **\\Lexical Chains\\** okuyucuyu yönlendirir veya üslup seçimini netleştirir. İleri okuma ve yazma için kritiktir.",
    },
    {
      id: "181",
      level: "C1",
      title: "İleri Noktalama",
      titleEng: "Advanced Punctuation",
      titleEx: "Semicolon, Colon, Dash, Parentheses",
      intro:
        "**İleri Noktalama** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. **\\Semicolon\\**, **\\Colon\\**, **\\Dash\\**, **\\Parentheses\\** yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.",
    },
  ],
  C2: [
    {
      id: "182",
      level: "C2",
      title: "Kapsamlı Gramer Hâkimiyeti",
      titleEng: "Comprehensive Grammar Mastery",
      titleEx: "Mastery, Integration, Accuracy",
      intro:
        "**Kapsamlı Gramer Hâkimiyeti** ana dil düzeyine yakın ince ayrımları işler. **\\Mastery\\**, **\\Integration\\**, **\\Accuracy\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "183",
      level: "C2",
      title: "Zaman ve Görünüş İncelikleri",
      titleEng: "Advanced Tense and Aspect Nuances",
      titleEx: "Aspect Nuances, Narrative Time",
      intro:
        "**Zaman ve Görünüş İncelikleri** ana dil düzeyine yakın ince ayrımları işler. **\\Aspect Nuances\\**, **\\Narrative Time\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "184",
      level: "C2",
      title: "Modal Fiillerin İnce Anlam Farkları",
      titleEng: "Advanced Modal Nuances",
      titleEx: "Modal Nuance, Register, Politeness",
      intro:
        "Modal fiiller yardımcı gibi çekimlenir; arkasından fiil yalın kalır. **\\Modal Nuance\\**, **\\Register\\**, **\\Politeness\\** zorunluluk, olasılık, izin veya çıkarım taşır. Bağlama göre anlamı daraltırsın.",
    },
    {
      id: "185",
      level: "C2",
      title: "İleri Subjunctive Yapıları",
      titleEng: "Advanced Subjunctive Constructions",
      titleEx: "Fixed Subjunctive, Be That As It May",
      intro:
        "**İleri Subjunctive Yapıları** ana dil düzeyine yakın ince ayrımları işler. **\\Fixed Subjunctive\\**, **\\Be That As It May\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "186",
      level: "C2",
      title: "Karmaşık Koşul Yapıları",
      titleEng: "Complex Conditional Structures",
      titleEx: "Mixed, Implied, Advanced Conditionals",
      intro:
        "Koşul cümlelerinde şart ve sonuç kipleri birbirine bağlıdır. **\\Mixed\\**, **\\Implied\\**, **\\Advanced Conditionals\\** farklı zaman ve ihtimal düzeylerini temsil eder. Gerçek, düşünce ve geçmişe dönük senaryoları ayırırsın.",
    },
    {
      id: "187",
      level: "C2",
      title: "Üslupsal Devrik Yapılar",
      titleEng: "Stylistic Inversion",
      titleEx: "Stylistic Inversion, Literary Style",
      intro:
        "Devrik yapıda özne ile fiil veya yardımcı yer değiştirir; vurgu ve resmî üslup sağlar. **\\Stylistic Inversion\\**, **\\Literary Style\\** olumsuz zarfların başta kullanımıyla sık görülür.",
    },
    {
      id: "188",
      level: "C2",
      title: "Öne Taşıma ve Odaklama",
      titleEng: "Advanced Fronting and Focus",
      titleEx: "Focus, End-Focus, Prominence",
      intro:
        "**Öne Taşıma ve Odaklama** ana dil düzeyine yakın ince ayrımları işler. **\\Focus\\**, **\\End-Focus\\**, **\\Prominence\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "189",
      level: "C2",
      title: "İleri Vurgu Cümleleri",
      titleEng: "Advanced Cleft Constructions",
      titleEx: "Cleft, Pseudo-Cleft, Emphasis",
      intro:
        "Vurgulu cümleler bilgi yapısını yeniden düzenleyerek dikkat çeker. **\\Cleft\\**, **\\Pseudo-Cleft\\**, **\\Emphasis\\** **\\it is ... that\\** veya **\\what ... is\\** kalıplarıyla kurulur.",
    },
    {
      id: "190",
      level: "C2",
      title: "İç İçe Geçmiş Cümlecikler",
      titleEng: "Complex Embedded Clauses",
      titleEx: "Embedded, Nested Clauses",
      intro:
        "**İç İçe Geçmiş Cümlecikler** ana dil düzeyine yakın ince ayrımları işler. **\\Embedded\\**, **\\Nested Clauses\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "191",
      level: "C2",
      title: "İleri Cümlecik Kısaltmaları",
      titleEng: "Advanced Clause Reduction",
      titleEx: "Clause Reduction, Ellipsis in Clauses",
      intro:
        "**İleri Cümlecik Kısaltmaları** ana dil düzeyine yakın ince ayrımları işler. **\\Clause Reduction\\**, **\\Ellipsis in Clauses\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "192",
      level: "C2",
      title: "Karmaşık Participle Yapıları",
      titleEng: "Complex Participle Constructions",
      titleEx: "Complex Participle, Stacked Modifiers",
      intro:
        "Participle yapıları yan cümleyi kısaltır; **\\-ing\\** ve **\\V3\\** biçimleri isim veya sıfat görevi görür. **\\Complex Participle\\**, **\\Stacked Modifiers\\** akademik ve yazılı metinlerde yoğunlaşır.",
    },
    {
      id: "193",
      level: "C2",
      title: "İleri Bağımsız Yapılar",
      titleEng: "Advanced Absolute Constructions",
      titleEx: "Absolute, Independent Participial",
      intro:
        "**İleri Bağımsız Yapılar** ana dil düzeyine yakın ince ayrımları işler. **\\Absolute\\**, **\\Independent Participial\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "194",
      level: "C2",
      title: "İsimleştirme ve Fiilleştirme",
      titleEng: "Advanced Nominalisation and Verbalisation",
      titleEx: "Nominalisation, Verbalisation",
      intro:
        "**İsimleştirme ve Fiilleştirme** ana dil düzeyine yakın ince ayrımları işler. **\\Nominalisation\\**, **\\Verbalisation\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "195",
      level: "C2",
      title: "Karmaşık Sözdizimsel Yapılar",
      titleEng: "Complex Syntactic Structures",
      titleEx: "Syntax, Density, Embedded Structure",
      intro:
        "**Karmaşık Sözdizimsel Yapılar** ana dil düzeyine yakın ince ayrımları işler. **\\Syntax\\**, **\\Density\\**, **\\Embedded Structure\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "196",
      level: "C2",
      title: "İleri Bilgi Yapısı",
      titleEng: "Advanced Information Structure",
      titleEx: "Given, New, Topic, Focus",
      intro:
        "**İleri Bilgi Yapısı** ana dil düzeyine yakın ince ayrımları işler. **\\Given\\**, **\\New\\**, **\\Topic\\**, **\\Focus\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "197",
      level: "C2",
      title: "Edimbilimsel Anlam",
      titleEng: "Pragmatic Meaning",
      titleEx: "Pragmatics, Context, Speaker Meaning",
      intro:
        "**Edimbilimsel Anlam** metnin parça parça değil, bütüncül okunmasını hedefler. **\\Pragmatics\\**, **\\Context\\**, **\\Speaker Meaning\\** okuyucuyu yönlendirir veya üslup seçimini netleştirir. İleri okuma ve yazma için kritiktir.",
    },
    {
      id: "198",
      level: "C2",
      title: "İma ve Önvarsayım",
      titleEng: "Implicature and Presupposition",
      titleEx: "Implicature, Presupposition, Grice",
      intro:
        "**İma ve Önvarsayım** ana dil düzeyine yakın ince ayrımları işler. **\\Implicature\\**, **\\Presupposition\\**, **\\Grice\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "199",
      level: "C2",
      title: "Anlam Belirsizliği ve Giderilmesi",
      titleEng: "Ambiguity and Disambiguation",
      titleEx: "Ambiguity, Disambiguation, Scope",
      intro:
        "**Anlam Belirsizliği ve Giderilmesi** ana dil düzeyine yakın ince ayrımları işler. **\\Ambiguity\\**, **\\Disambiguation\\**, **\\Scope\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "200",
      level: "C2",
      title: "İleri Söylem Yapıları",
      titleEng: "Advanced Discourse Structures",
      titleEx: "Discourse, Cohesion, Turn-Taking",
      intro:
        "**İleri Söylem Yapıları** metnin parça parça değil, bütüncül okunmasını hedefler. **\\Discourse\\**, **\\Cohesion\\**, **\\Turn-Taking\\** okuyucuyu yönlendirir veya üslup seçimini netleştirir. İleri okuma ve yazma için kritiktir.",
    },
    {
      id: "201",
      level: "C2",
      title: "İleri Dil Düzeyi ve Üslup",
      titleEng: "Advanced Register and Style",
      titleEx: "Register, Style, Formal, Informal",
      intro:
        "**İleri Dil Düzeyi ve Üslup** metnin parça parça değil, bütüncül okunmasını hedefler. **\\Register\\**, **\\Style\\**, **\\Formal\\**, **\\Informal\\** okuyucuyu yönlendirir veya üslup seçimini netleştirir. İleri okuma ve yazma için kritiktir.",
    },
    {
      id: "202",
      level: "C2",
      title: "İleri Retorik Yapılar",
      titleEng: "Advanced Rhetorical Structures",
      titleEx: "Rhetoric, Antithesis, Parallelism",
      intro:
        "**İleri Retorik Yapılar** metnin parça parça değil, bütüncül okunmasını hedefler. **\\Rhetoric\\**, **\\Antithesis\\**, **\\Parallelism\\** okuyucuyu yönlendirir veya üslup seçimini netleştirir. İleri okuma ve yazma için kritiktir.",
    },
    {
      id: "203",
      level: "C2",
      title: "İroni, Alay ve Hiciv",
      titleEng: "Irony, Sarcasm and Satire",
      titleEx: "Irony, Sarcasm, Satire, Tone",
      intro:
        "**İroni, Alay ve Hiciv** ana dil düzeyine yakın ince ayrımları işler. **\\Irony\\**, **\\Sarcasm\\**, **\\Satire\\**, **\\Tone\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "204",
      level: "C2",
      title: "İleri Deyimsel Dil Yapıları",
      titleEng: "Advanced Idiomatic Language Structures",
      titleEx: "Idioms, Fixed Expressions",
      intro:
        "**İleri Deyimsel Dil Yapıları** ana dil düzeyine yakın ince ayrımları işler. **\\Idioms\\**, **\\Fixed Expressions\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "205",
      level: "C2",
      title: "İleri Eşdizim Kalıpları",
      titleEng: "Advanced Collocational Patterns",
      titleEx: "Collocations, Strong, Weak",
      intro:
        "**İleri Eşdizim Kalıpları** ana dil düzeyine yakın ince ayrımları işler. **\\Collocations\\**, **\\Strong\\**, **\\Weak\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "206",
      level: "C2",
      title: "Sözcüksel ve Sözdizimsel Hassasiyet",
      titleEng: "Lexical and Syntactic Precision",
      titleEx: "Precision, Word Choice, Syntax",
      intro:
        "**Sözcüksel ve Sözdizimsel Hassasiyet** ana dil düzeyine yakın ince ayrımları işler. **\\Precision\\**, **\\Word Choice\\**, **\\Syntax\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
    {
      id: "207",
      level: "C2",
      title: "İleri Noktalama ve Üslup",
      titleEng: "Advanced Punctuation and Style",
      titleEx: "Punctuation, Style, Typography",
      intro:
        "**İleri Noktalama ve Üslup** ana dil düzeyine yakın ince ayrımları işler. **\\Punctuation\\**, **\\Style\\**, **\\Typography\\** anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.",
    },
  ],
};

export const allGrammarHeadings: GrammarHeading[] = (
  Object.keys(grammarHeadings) as CefrLevel[]
)
  .flatMap((level) => grammarHeadings[level])
  .sort((a, b) => Number.parseInt(a.id, 10) - Number.parseInt(b.id, 10));
