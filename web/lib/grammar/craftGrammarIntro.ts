import type { GrammarHeading } from "@/data/grammar/grammarHeading";

const TEMPLATE_MARKERS = [
  "Kartta gördüğün kalıplar",
  "temel taşlardan biridir",
  "Olumlu, olumsuz ve soru formlarını",
  "Günlük konuşma ve okuma metinlerinde bu kalıpları",
];

export function isTemplateIntro(intro: string): boolean {
  const text = intro.trim();
  if (!text) {
    return true;
  }
  return TEMPLATE_MARKERS.some((marker) => text.includes(marker));
}

function tokens(titleEx: string): string[] {
  return titleEx
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
}

function hl(...parts: string[]): string {
  return parts.map((part) => `**\\${part}\\**`).join(", ");
}

function hlAll(titleEx: string, max = 8): string {
  const list = tokens(titleEx);
  if (list.length === 0) {
    return "";
  }
  const slice = list.slice(0, max);
  const formatted = hl(...slice);
  if (list.length > max) {
    return `${formatted} ve diğerleri`;
  }
  return formatted;
}

function joinNatural(titleEx: string): string {
  const list = tokens(titleEx);
  if (list.length === 0) {
    return "";
  }
  if (list.length <= 6) {
    return hl(...list);
  }
  return `${hl(...list.slice(0, 4))} gibi kalıpların yanı sıra ${hl(...list.slice(4, 7))}`;
}

const LOCKED_INTROS: Record<string, string> = {
  "1": "Doğru okuma ve heceleme İngilizce yolculuğunun ilk adımıdır. Bu derste **26 harflik** alfabeyi, harf adlarını ve kelime içindeki **ses değerlerini** öğreneceksin. **Ünlü** ve **ünsüz** ayrımı, **\\C\\**, **\\G\\**, **\\Y\\** ile değişen sesler ve **\\sh, ch, th\\** ikilileri dersin omurgasıdır. Kısa ve uzun ünlü ipuçlarıyla yeni kelimeleri daha güvenle seslendireceksin.",
  "2": "Özne zamirleri cümlenin konusunu gösterir. İngilizcede **\\I\\**, **\\you\\**, **\\he\\**, **\\she\\**, **\\it\\**, **\\we\\** ve **\\they\\** olmak üzere yedidir; karttaki kalıpların tamamını bu derste işlersin. **\\I\\** her zaman büyük harfle yazılır; **\\you\\** tekil ve çoğul için ortaktır. **\\He\\**, **\\she\\** ve **\\it\\** kişi ya da nesne ayrımını netleştirir.",
  "3": "**\\To be\\** cümlede durum, kimlik ve konum bildirir. **\\Am\\** yalnızca **\\I\\** ile; **\\is\\** tekil öznelerle; **\\are\\** çoğul öznelerle gelir. Olumsuz **\\am not / isn't / aren't\\** ve soru **\\Am I / Is she / Are they\\** yapılarını aynı derste kurup kısa cevaplarla pekiştirirsin.",
  "6": "İngilizcede **\\a\\**, **\\an\\** ve **\\the\\** en sık kullanılan tanımlıklardır. **\\A\\** ve **\\an\\** belirsiz tekil isimlerde, konu ilk kez söz konusu ediliyorsa kullanılır. **\\The\\** dinleyicinin veya okuyucunun bildiği, ya da bağlamda netleşmiş isimlerin önünde yer alır. **\\An\\**, ünlü sesle başlayan kelimelerde **\\a\\** yerine tercih edilir. Günlük tanıtım ve liste cümlelerinde doğru tanımlığı seçmeyi öğrenirsin.",
  "8": "**\\have got\\** ve **\\has got\\** İngiliz İngilizcesinde sık duyulan sahiplik kalıplarıdır. **\\I, we, they\\** ile **\\have got\\**; **\\he, she, it\\** ile **\\has got\\** kuralını öğreneceksin. Olumsuz **\\haven't got\\**, soru ve kısa cevaplar da aynı derste. Aile, eşya ve fiziksel özellik anlatımında doğrudan kullanırsın.",
  "9": "Bir yerde ne olduğunu **\\There is\\** ve **\\There are\\** ile söylersin. Tekil ve çoğul isim seçimi fiili belirler. Olumsuz **\\isn't / aren't\\**, soru **\\Is there / Are there\\** ve kısa cevaplar aynı pakette. Oda, şehir veya masa üstü tarifinde doğal kalıp budur.",
  "11": "**\\Some\\** olumlu cümlelerde ve tekliflerde; **\\any\\** soru ve olumsuzda sık görülür. **\\Much\\** sayılamayan, **\\many\\** sayılabilen isimlerle kullanılır. **\\A lot of\\** ve **\\lots of\\** her iki grup için de doğaldır; isim türünü seçerek miktar anlatırsın.",
  "15": "**\\Can\\** yetenek ve izin sorar; **\\can't\\** yasak veya imkânsızlık bildirir. **\\Can I ...?\\** ile izin iste, **\\I can swim\\** ile yeteneğini anlat. Kısa cevaplarda **\\Yes, you can\\** veya **\\No, you can't\\** yeterlidir.",
  "18": "Soru kelimeleri bilgi türünü seçer: **\\What\\** nesne veya iş; **\\Who\\** kişi; **\\Where\\** yer; **\\When\\** zaman; **\\Why\\** sebep; **\\How\\** yöntem. **\\Which\\** sınırlı seçenek, **\\Whose\\** sahiplik sorar. Soru cümlesinde **\\do / does\\** veya **\\am, is, are\\** yerleşimini de görürsün.",
  "27": "**\\Present Continuous\\** konuştuğun anda veya geçici süreçte devam eden işleri anlatır. Kalıp **\\am, is, are\\** artı **\\-ing\\** fiilidir. **\\Now, right now, at the moment\\** gibi zaman ifadeleri ve geniş zamanla farkı bu derste netleşir.",
};

const INTROS_BY_ID: Record<string, string> = {
  "4": "İyelik sıfatları ismin hemen önünde durur ve kime ait olduğunu söyler. ${P} özne zamirine göre değişir; isimle birlikte tek bir öbek oluşturur. Kendini ve çevreni tanıtırken **\\my book\\**, **\\their house\\** gibi cümleler kurarsın.",
  "5": "İyelik zamirleri isim yerine geçer; cümlede yalnız başına kullanılır. ${P} kalıpları **\\This is mine\\**, **\\Those are theirs\\** gibi cevaplarda görülür. İyelik sıfatlarıyla karıştırmamak için sona gelip gelmediğine dikkat edersin.",
  "7": "İngilizcede çoğu isim çoğulda **\\-s\\** veya **\\-es\\** alır; **\\-y\\** sonu bazen **\\-ies\\** olur. Düzensiz çoğullar ezberlenir. Tekil–çoğul seçimi **\\there is/are\\**, miktar belirteçleri ve fiil uyumu için zorunludur.",
  "10": "Sayılabilen isimler sayılabilir ve **\\a/an\\** alır; sayılamayanlar genelde ölçüsüz kalır. ${P} ayrımı **\\much/many\\**, **\\a few/a little\\** ve tanımlık seçimini belirler. Alışveriş ve yemek listelerinde doğru isim türünü seçersin.",
  "12": "Yer edatları ismin nerede olduğunu gösterir. ${P} kalıpları oda tarifi, adres ve yön bulma cümlelerinde kullanılır. **\\In\\** kapalı alan, **\\on\\** yüzey, **\\at\\** belirli nokta gibi ayrımları örneklerle ayırırsın.",
  "13": "Zaman edatları gün, saat, dönem ve süre ifade eder. ${P} yapıları randevu, rutin ve geçmiş–gelecek anlatımında sık çıkar. **\\In\\** ay ve yıl, **\\on\\** gün, **\\at\\** saat eşleşmesini pekiştirirsin.",
  "14": "Emir cümlelerinde özne genelde gizlidir; fiil veya **\\let's\\** doğrudan başlar. ${P} örnekleri yönerge, rica ve uyarı anlatır. **\\Don't\\** ile olumsuz emir kurmayı günlük iletişimde kullanırsın.",
  "16": "Geniş zaman alışkanlık, genel gerçek ve sabit program anlatır. ${P} ile olumlu cümlede yardımcı **\\do/does\\** soru ve olumsuzda devreye girer. Sıklık zarflarının cümledeki yeri bu zamanla birlikte öğrenilir.",
  "17": "Sıklık zarfları eylemin ne kadar tekrarlandığını gösterir. ${P} geniş zaman cümlelerinde fiilden önce veya **\\to be\\** sonrasında yer alır. **\\Never\\** ve **\\always\\** gibi uç zarfların konumu pratikte önemlidir.",
  "19": "Nesne zamirleri eylemin geçtiği kişi veya nesneyi isim yerine gösterir. ${P} yedi kalıbın tamamı özne zamirleriyle eşleşir. **\\I see him\\**, **\\She calls us\\** gibi cümlelerde doğru nesne zamirini seçersin.",
  "20": "Sıfatlar ismi niteleyerek boyut, duygu veya kalite ekler. ${P} ile tanıma ve karşılaştırma cümleleri kurarsın. Birden fazla sıfatın sırası ileri seviyede detaylanır; A1'de temel **\\big, happy, new\\** yeterlidir.",
  "21": "Zarflar fiili, sıfatı veya başka zarfı niteler; çoğu **\\-ly\\** ile türetilir. ${P} eylemin nasıl yapıldığını anlatır. **\\Well\\** ve **\\badly\\** düzensiz biçimleriyle ayrıca ezberlenir.",
  "22": "İngilizcede **\\'s\\** eki kişi veya canlı isimlere eklenerek sahiplik kurar. ${P} örnekleri mülk ve yakınlık bildirir. Türkçedeki **-in/-nın** yapısına denk düşen kısa kalıplar üretirsin.",
  "23": "Bağlaçlar iki fikri tek cümlede birleştirir. ${P} ekleme, zıtlık, seçenek ve sebep ilişkisi kurar. **\\Because\\** ile nedeni sonuç cümlesine bağlamayı hedeflersin.",
  "24": "**\\Would like\\** kibar istek ve tercih bildirir; **\\want\\**ten daha yumuşaktır. Menüden seçim, davet ve plan ifadesinde **\\I'd like...\\** kalıbını kullanırsın.",
  "25": "İngilizce temel cümle dizimi çoğunlukla **özne + fiil + nesne** şeklindedir. ${P} öğelerinin yeri soru cümlesinde değişir. İlk cümlelerini bu iskelet üzerine kurarsın.",
  "26": "Fiillerin **\\V1\\** (yalın), **\\V2\\** (geçmiş) ve **\\V3\\** (participle) biçimleri zaman ve edilgen için gereklidir. Düzenli fiillerde **\\-ed\\**, düzensizler listeden ezberlenir.",
  "28": "Geniş zaman kalıcı veya tekrarlayan işler içindir; **\\-ing\\** yapısı şu an veya geçici süreç içindir. ${P} zamanları aynı özneyle karşılaştırarak doğru zamanı seçersin.",
  "29": "Durum fiilleri genelde **\\-ing\\** almaz; duygu, düşünce ve sahiplik bildirir. ${P} listesindeki fiiller **\\I am knowing\\** yerine **\\I know\\** biçiminde kalır. Şimdiki zamanla çakışmaları bu derste netleşir.",
  "30": "Geçmiş zamanda eylem belirli bir anda bitmiş kabul edilir. ${P} ile geçmiş olay ve biyografi anlatımı yaparsın. Olumsuz ve soruda **\\did\\** + yalın fiil kuralını uygularsın.",
  "31": "Geçmişte **\\to be\\** **\\was\\** ve **\\were\\** biçiminde çekimlenir. Tekil için **\\was\\**, çoğul ve **\\you\\** için **\\were\\** kullanılır. Geçmişte konum ve durum cümleleri bu iki kalıpla kurulur.",
  "32": "Düzenli fiillerde geçmiş **\\-ed\\** ile yazılır; düzensizlerin **\\V2\\** biçimi ezberlenir. ${P} ayrımı geçmiş zaman ve perfect yapılarda temel oluşturur.",
  "33": "Geçmiş zamanla birlikte **\\yesterday\\**, **\\last week\\**, **\\ago\\** gibi ifadeler zamanı netleştirir. ${P} kalıplarını geçmiş cümle sonunda veya başında doğal kullanırsın.",
  "34": "**\\Will\\** ani karar, tahmin ve söz için kullanılır; kısalmalar **\\I'll\\**, **\\won't\\** günlük konuşmada sıktır. Gelecek zaman fiili özneden sonra gelir, ek fiil gerekmez.",
  "35": "**\\Be going to\\** önceden düşünülmüş plan veya delile dayalı tahmin bildirir. ${P} yapısı **\\am/is/are going to\\** + yalın fiille kurulur. **\\Will\\** ile anlam farkını örneklerle ayırırsın.",
  "36": "Geleceği anlatmak için **\\will\\**, **\\be going to\\** ve bazen şimdiki zaman kullanılır. ${P} seçimi niyet, program ve konuşma anına göre değişir. Aynı öznede üç yapıyı karşılaştırırsın.",
  "37": "**\\Can\\** güncel yetenek ve izin; **\\could\\** geçmiş yetenek veya kibar istek için gelir. ${P} modallarından sonra fiil yalın halde kalır.",
  "38": "**\\Must\\** güçlü zorunluluk veya içsel gereklilik; **\\have to\\** dış kuralı anlatır. ${P} ile yasak ve zorunluluk cümleleri kurarsın.",
  "39": "**\\Don't have to\\** zorunlu olmama anlamı verir; **\\mustn't\\** ile karıştırılmamalıdır. Seçenekli görev ve kurallarda doğru modalı seçersin.",
  "40": "**\\Should\\** tavsiye ve beklenti bildirir; **\\shouldn't\\** uyarı içerir. Sağlık, çalışma ve günlük öneri cümlelerinde kullanırsın.",
  "41": "**\\May\\** ve **\\might\\** olasılık ve izin anlatır; **\\might\\** genelde daha düşük ihtimal taşır. Hava, sonuç ve kibar tahmin cümlelerinde yer alır.",
  "42": "Karşılaştırma sıfatları iki şeyi derecelendirir. ${P} ile **\\than\\** yapısı kurulur; kısa sıfatlarda **\\-er\\**, uzunlarda **\\more\\** kullanılır.",
  "43": "Üstünlük sıfatları bir grupta en üstü seçer. ${P} kalıpları **\\the\\** ile birlikte gelir. **\\-est\\** ve **\\most\\** kurallarını örneklerle pekiştirirsin.",
  "44": "Eşitlik karşılaştırmasında **\\as ... as\\** yapısı kullanılır; olumsuzda **\\not as ... as\\** yetersizlik bildirir. ${P} iki özelliği aynı düzeyde sunar.",
  "45": "**\\Too\\** aşırılık, **\\enough\\** yeterlilik gösterir; sıfat veya zarfın önünde veya sonunda konumları değişir. Şikâyet ve yeterlilik cümlelerinde ayırırsın.",
  "46": "Durum zarfları eylemin nasıl yapıldığını söyler. ${P} çoğunlukla **\\-ly\\** ile türetilir ve fiilden sonra gelir. **\\Quickly\\**, **\\slowly\\** gibi zarflar cümleyi canlandırır.",
  "47": "Belirsiz zamirler kimseyi veya şeyi isim söylemeden gösterir. ${P} olumlu, olumsuz ve soru cümlelerinde farklı biçimler alır (**\\some-\\** / **\\any-\\**).",
  "48": "**\\Both\\** ikisini birden, **\\either\\** ikisinden biri, **\\neither\\** ikisi de olumsuz seçenekte kullanılır. ${P} çoğul isim ve yardımcı fiil uyumuna dikkat edersin.",
  "49": "İleri miktar belirteçleri sayılabilen ve sayılamayan isimle eşleşir. ${P} **\\few/little\\** ve **\\a few/a little\\** anlam farkını taşır. **\\Too much\\** ve **\\too many\\** aşırılığı gösterir.",
  "50": "Hareket edatları yöne, geçişe ve varışa işaret eder. ${P} yön tarifi ve seyahat anlatımında kullanılır. Yer edatlarıyla karışan **\\in/into\\** ayrımına dikkat edersin.",
  "51": "Bazı fiillerden sonra **\\-ing\\**, bazılarından sonra **\\to\\** gelir; anlam fiile göre değişebilir. ${P} kalıpları cümle genişletirken doğru biçimi seçmeni sağlar.",
  "52": "Fiil kalıpları hangi yapının geleceğini sabitler. ${P} örnekleri **\\enjoy doing\\**, **\\decide to do\\** gibi blokları ezberletir.",
  "53": "Sıfırıncı koşulda **\\if\\** ve ana cümle geniş zamandadır; genel doğrular ve bilimsel kurallar anlatılır. ${P} yapısı gerçek her zaman doğru sonuç verir.",
  "54": "Birinci koşulda gerçek gelecek ihtimali vardır: **\\if\\** + geniş zaman, ana cümle **\\will\\**. ${P} plan ve uyarı cümlelerinde kullanılır.",
  "55": "İlgi cümlecikleri ismin hemen ardından gelir ve onu tanımlar. ${P} ile **\\who\\** kişi, **\\which/that\\** nesne için seçilir. Temel tanımlayıcı ilgi cümleleri kurarsın.",
  "56": "Dönüşlü zamirler özne ve nesne aynı kişi olduğunda kullanılır. ${P} **\\by myself\\** gibi ifadelerle yalnız yapılan işi de vurgular.",
  "57": "**\\Used to\\** geçmişte düzenli olup artık sürmeyen alışkanlıkları anlatır. Olumsuz **\\didn't use to\\** ve soru **\\Did you use to...?\\** ile pekiştirirsin.",
  "58": "Edilgende özne eylemi yapan değil, eylemden etkilenendir. ${P} **\\be + V3\\** iskeletiyle kurulur; zaman **\\be\\** çekiminden anlaşılır.",
  "59": "Soru ekleri kısa onay veya teyit ister; yardımcı veya **\\to be\\** çekimine göre seçilir. ${P} kalıpları günlük konuşmada tonu yumuşatır.",
  "60": "**\\So\\** olumlu, **\\neither\\** olumsuz cümleye katılım bildirir. ${P} kısa yanıtlarda tekrarı önler.",
  "61": "Dolaylı soruda soru kelimesi cümle içinde kalır, **\\do/does\\** kullanılmaz; cümle düzeni yüklemden sonra devam eder. ${P} kibar bilgi isteği için kullanılır.",
};

function fillTemplate(template: string, heading: GrammarHeading): string {
  const joined = joinNatural(heading.titleEx);
  const allShort = hlAll(heading.titleEx, 7);
  return template
    .replaceAll(
      "${P}",
      joined || allShort || `**\\${heading.titleEng.trim()}\\**`,
    )
    .replaceAll("${PA}", allShort);
}

function craftByEnglish(heading: GrammarHeading): string {
  const eng = heading.titleEng.toLowerCase();
  const title = heading.title.trim();
  const patterns = joinNatural(heading.titleEx) || hlAll(heading.titleEx, 6);

  if (
    eng.includes("present perfect") &&
    eng.includes("continuous") &&
    eng.includes("vs")
  ) {
    return `Yakın geçmişte süren ve tamamlanan eylemler farklı perfect yapılarla anlatılır. ${patterns} seçimi sonuç mu, süreç mi vurgulandığına bağlıdır. **${title}** karşılaştırması konuşma ve yazıda doğru zaman seçimini sağlar.`;
  }
  if (eng.includes("present perfect") && eng.includes("past simple")) {
    return `Geçmiş zaman belirli bir anda biter; present perfect sonucu bugüne taşır. ${patterns} zaman ifadeleri hangi yapının seçileceğini gösterir. Geçmiş deneyim ve haber anlatımında ayrımı uygularsın.`;
  }
  if (eng.includes("present perfect")) {
    return `Present perfect geçmişteki olayı şimdiye bağlar; deneyim, sonuç veya yakın geçmiş vurgusu taşır. ${patterns} yapıları **\\have/has + V3\\** etrafında kurulur. **\\Ever, never, just\\** gibi zarflar anlamı keskinleştirir.`;
  }
  if (eng.includes("past perfect")) {
    return `Past perfect iki geçmiş olayı sıralar; önce tamamlanan eylem **\\had + V3\\** ile gelir. ${patterns} bağlaçları zaman çizgisini netleştirir. Anlatı ve raporlarda önce–sonra ilişkisini kurarsın.`;
  }
  if (eng.includes("past continuous")) {
    return `Past continuous geçmişte sürerken kesilen veya eşzamanlı süreçleri anlatır. ${patterns} **\\was/were + V-ing\\** iskeletiyle kurulur. **\\When\\** ve **\\while\\** ile past simple karşılaştırması yapılır.`;
  }
  if (eng.includes("past simple") && eng.includes("vs")) {
    return `Geçmişte kısa eylem ile süren eylem farklı zamanlarla anlatılır. ${patterns} aynı olay örgüsünde yan yana kullanıldığında anlam değişir. Hikâye ve sınav metinlerinde doğru seçimi yaparsın.`;
  }
  if (eng.includes("future continuous") || eng.includes("future perfect")) {
    return `İleri gelecek zamanlar ileri bir noktada devam eden veya tamamlanmış eylemi gösterir. ${patterns} **\\by\\** ve **\\by the time\\** ile birlikte kullanılır. Plan ve tahmin üstü anlatımda devreye girer.`;
  }
  if (eng.includes("future") && eng.includes("past")) {
    return `Geçmişten bakılan gelecek **\\was going to\\**, **\\would\\** ve **\\was about to\\** ile ifade edilir. ${patterns} dolaylı anlatım ve geçmiş plan cümlelerinde görülür.`;
  }
  if (eng.includes("second conditional")) {
    return `İkinci koşul gerçek olmayan veya düşük ihtimalli şartı anlatır. ${patterns} yapısı **\\would\\** ile sonuç kurar. Hayal ve tavsiye cümlelerinde kullanırsın.`;
  }
  if (eng.includes("third conditional")) {
    return `Üçüncü koşul geçmişte gerçekleşmemiş şartı ve olası sonucunu birleştirir. ${patterns} **\\would have + V3\\** ile pişmanlık ve eleştiri kurulur.`;
  }
  if (eng.includes("conditional") || eng.includes("mixed")) {
    return `Koşul cümlelerinde şart ve sonuç kipleri birbirine bağlıdır. ${patterns} farklı zaman ve ihtimal düzeylerini temsil eder. Gerçek, düşünce ve geçmişe dönük senaryoları ayırırsın.`;
  }
  if (eng.includes("passive")) {
    return `Edilgen yapıda özne eylemden etkilenendir; **\\be + V3\\** veya modal + **\\be + V3\\** kullanılır. ${patterns} haber, bilim ve resmî metinlerde sık görülür. Etken–edilgen dönüşümünü uygularsın.`;
  }
  if (eng.includes("reported") || heading.title.includes("Dolaylı")) {
    return `Dolaylı anlatımda zaman ve zamirler geriye kayar; **\\say/tell\\** ve **\\that\\** cümlesi temel taşıdır. ${patterns} soru, emir ve öneri aktarımında fiil seçimini değiştirir.`;
  }
  if (eng.includes("relative") || heading.title.includes("İlgi")) {
    return `İlgi cümlecikleri ismi tanımlayarak cümleyi sıkılaştırır. ${patterns} tanımlayıcı ve tanımsız ayrımında virgül ve anlam farkı oluşur.`;
  }
  if (
    eng.includes("gerund") ||
    eng.includes("infinitive") ||
    heading.title.includes("Mastar")
  ) {
    return `Fiilden sonra gelen **\\-ing\\** veya **\\to\\** biçimi anlamı değiştirir. ${patterns} hangi fiilin hangi yapıyı aldığını gösterir. Ezber ve örnek cümle burada belirleyicidir.`;
  }
  if (eng.includes("phrasal")) {
    return `Phrasal fiiller edat veya zarf ile birleşince yeni anlam üretir. ${patterns} ayrılabilen ve ayrılamayan türleri fiil–nesne sırasını değiştirir. Günlük İngilizcede yüksek frekanslıdır.`;
  }
  if (eng.includes("modal")) {
    return `Modal fiiller yardımcı gibi çekimlenir; arkasından fiil yalın kalır. ${patterns} zorunluluk, olasılık, izin veya çıkarım taşır. Bağlama göre anlamı daraltırsın.`;
  }
  if (
    eng.includes("wish") ||
    eng.includes("if only") ||
    eng.includes("would rather")
  ) {
    return `Dilek ve tercih yapıları gerçekle çelişen durumu veya pişmanlığı anlatır. ${patterns} zamir ve kip kaymasıyla kurulur. Konuşmada duygu ve nezaket katmanı ekler.`;
  }
  if (eng.includes("inversion") || heading.title.includes("Devrik")) {
    return `Devrik yapıda özne ile fiil veya yardımcı yer değiştirir; vurgu ve resmî üslup sağlar. ${patterns} olumsuz zarfların başta kullanımıyla sık görülür.`;
  }
  if (eng.includes("participle") || heading.title.includes("Participle")) {
    return `Participle yapıları yan cümleyi kısaltır; **\\-ing\\** ve **\\V3\\** biçimleri isim veya sıfat görevi görür. ${patterns} akademik ve yazılı metinlerde yoğunlaşır.`;
  }
  if (eng.includes("cleft") || heading.title.includes("Vurgu")) {
    return `Vurgulu cümleler bilgi yapısını yeniden düzenleyerek dikkat çeker. ${patterns} **\\it is ... that\\** veya **\\what ... is\\** kalıplarıyla kurulur.`;
  }
  if (eng.includes("ellipsis") || eng.includes("substitution")) {
    return `Eksiltme ve ikame tekrarı azaltır; önceki cümledeki öğeyi zamir veya yardımcı ile çağırır. ${patterns} akıcı konuşma ve metin bütünlüğü sağlar.`;
  }
  if (
    eng.includes("discourse") ||
    eng.includes("cohesion") ||
    eng.includes("pragmatic") ||
    eng.includes("register") ||
    eng.includes("rhetor")
  ) {
    return `**${title}** metnin parça parça değil, bütüncül okunmasını hedefler. ${patterns} okuyucuyu yönlendirir veya üslup seçimini netleştirir. İleri okuma ve yazma için kritiktir.`;
  }
  if (heading.level === "C2") {
    return `**${title}** ana dil düzeyine yakın ince ayrımları işler. ${patterns} anlamı bağlam, ton ve kültürle birlikte değerlendirmeyi öğretir. Doğruluk yerine hassasiyet ve üslup ön plandadır.`;
  }
  if (heading.level === "C1") {
    return `**${title}** karmaşık cümleleri sıkılaştıran ileri yapıları kapsar. ${patterns} yazılı rapor, makale ve sınav metinlerinde karşına çıkar. Form ile anlamı birlikte seçersin.`;
  }
  if (heading.level === "B2") {
    return `**${title}** orta-ileri düzeyde sınav ve iş İngilizcesinde sık görülür. ${patterns} kalıplarını örnek metinlerde tanıyıp üretmeyi hedeflersin.`;
  }
  return `${title} konusunda ${patterns} yapıları ${heading.level} düzeyinde işlenir. Kuralı örnek cümlelerle görür, alıştırmalarla kalıcı hâle getirirsin.`;
}

export function craftGrammarIntro(
  heading: GrammarHeading,
  options?: { force?: boolean },
): string {
  const locked = LOCKED_INTROS[heading.id];
  if (locked && !options?.force) {
    return locked;
  }

  const current = heading.intro.trim();
  if (current && !isTemplateIntro(current) && !options?.force) {
    return current;
  }

  const byIdTemplate = INTROS_BY_ID[heading.id];
  if (byIdTemplate) {
    return fillTemplate(byIdTemplate, heading);
  }

  return craftByEnglish(heading);
}

export function enrichHeadingIntro(
  heading: GrammarHeading,
  options?: { force?: boolean },
): GrammarHeading {
  return {
    ...heading,
    title: heading.title.trim(),
    intro: craftGrammarIntro(heading, options),
  };
}
