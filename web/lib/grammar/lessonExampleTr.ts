export const LESSON_PATTERN_PLACEHOLDER_TR = "Bu derste işlenir.";
export const LESSON_SENTENCE_PLACEHOLDER_TR = "Bağlamda incele.";

function normalizeKey(en: string): string {
  return en.trim().toLowerCase().replace(/\s+/g, " ");
}

const GRAMMAR_PATTERN_TR: Record<string, string> = {
  // Sıklık zarfları
  always: "Her zaman",
  usually: "Genellikle",
  often: "Sık sık",
  sometimes: "Bazen",
  rarely: "Nadiren",
  "hardly ever": "Zar zor / neredeyse hiç",
  never: "Asla / hiç",

  // Özne zamirleri
  i: "Ben",
  you: "Sen / siz",
  he: "O (erkek)",
  she: "O (kadın)",
  it: "O (nesne/hayvan)",
  we: "Biz",
  they: "Onlar",

  // Nesne zamirleri
  me: "Beni / bana",
  him: "Onu / ona (erkek)",
  her: "Onu / ona (kadın)",
  us: "Bizi / bize",
  them: "Onları / onlara",

  // to be
  am: "Am (I ile)",
  is: "Is (tekil)",
  are: "Are (çoğul)",
  "was / were": "Was / were (geçmiş to be)",

  // İyelik sıfatları
  my: "Benim",
  your: "Senin / sizin",
  his: "Onun (erkek)",
  hers: "Onun (kadın)",
  its: "Onun (nesne)",
  our: "Bizim",
  their: "Onların",

  // İyelik zamirleri
  mine: "Benimki",
  yours: "Seninki / sizinki",
  ours: "Bizimki",
  theirs: "Onlarınki",

  // Tanımlıklar
  a: "A (belirsiz, ünsüz öncesi)",
  an: "An (belirsiz, ünlü öncesi)",
  the: "The (belirli)",

  // Sayılabilirlik
  singular: "Tekil",
  plural: "Çoğul",
  "-s": "-s (çoğul eki)",
  "-es": "-es (çoğul eki)",
  "-ies": "-ies (çoğul eki)",
  "irregular plurals": "Düzensiz çoğullar",
  "countable nouns": "Sayılabilen isimler",
  "uncountable nouns": "Sayılamayan isimler",

  // Sahiplik / varlık
  "have got / has got": "Have got / has got (sahip olmak)",
  "there is / there are": "There is / there are (vardır)",

  // Miktar
  much: "Much (sayılamayan)",
  many: "Many (sayılabilen)",
  some: "Some (bir miktar)",
  any: "Any (herhangi / soru-olumsuz)",
  "a lot of": "A lot of (çok)",
  "lots of": "Lots of (çok)",
  "a few": "A few (birkaç)",
  few: "Few (az)",
  "a little": "A little (biraz)",
  little: "Little (az)",

  // Yer edatları
  in: "In (içinde)",
  on: "On (üzerinde)",
  at: "At (-de/-da, nokta)",
  under: "Under (altında)",
  behind: "Behind (arkasında)",
  between: "Between (arasında)",
  "next to": "Next to (yanında)",

  // Zaman edatları
  for: "For (süre)",
  since: "Since (-den beri)",
  until: "Until (-e kadar)",
  "from ... to": "From … to (… -den … -e)",

  // Emir
  "open the door": "Kapıyı aç",
  "don't run": "Koşma",
  "let's go": "Hadi gidelim",
  please: "Lütfen",

  // Modal
  "can / can't": "Can / can't (yapabilmek)",
  "can / could": "Can / could",
  "must / mustn't / have to / has to": "Must / have to (zorunluluk)",
  "don't have to / doesn't have to": "Zorunda değil",
  "should / shouldn't": "Should (tavsiye)",
  "may / might": "May / might (olasılık)",

  // Zamanlar
  "present simple": "Geniş zaman",
  "present continuous": "Şimdiki zaman",
  "past simple": "Geçmiş zaman",
  "past continuous": "Geçmişte süregelen",
  "present perfect": "Present perfect",
  do: "Do / does (yardımcı)",
  does: "Does (3. tekil yardımcı)",
  did: "Did (geçmiş yardımcı)",
  v1: "V1 (yalın fiil)",
  v2: "V2 (geçmiş)",
  v3: "V3 (past participle)",
  "base form": "Yalın fiil",
  "past participle": "Past participle",
  "regular verbs": "Düzenli fiiller",
  "irregular verbs": "Düzensiz fiiller",
  "-ed": "-ed (geçmiş eki)",

  // Zaman ifadeleri
  now: "Şimdi",
  "at the moment": "Şu anda",
  "right now": "Hemen şimdi",
  yesterday: "Dün",
  "last week": "Geçen hafta",
  "last year": "Geçen yıl",
  ago: "Önce",
  "in 2020": "2020'de",
  "when i was": "… olduğumda",

  // Gelecek
  will: "Will (gelecek)",
  "won't": "Won't (gelecek olumsuz)",
  "i'll": "I'll (I will)",
  predictions: "Tahminler",
  promises: "Sözler",
  "be going to": "Be going to (niyet)",
  plans: "Planlar",
  intentions: "Niyetler",
  evidence: "Kanıt",

  // Soru kelimeleri
  what: "Ne",
  who: "Kim",
  where: "Nerede",
  when: "Ne zaman",
  why: "Neden",
  how: "Nasıl",
  which: "Hangisi",
  whose: "Kimin",

  // Sıfat / zarf
  big: "Büyük",
  small: "Küçük",
  happy: "Mutlu",
  old: "Eski / yaşlı",
  new: "Yeni",
  "adjective order": "Sıfat sırası",
  slowly: "Yavaşça",
  quickly: "Hızlıca",
  well: "İyi (zarf)",
  badly: "Kötü (zarf)",
  adverbs: "Zarflar",
  "adverbs of manner": "Durum zarfları",
  "-ly": "-ly (zarf eki)",

  // Sahiplik 's
  "john's car": "John'un arabası",
  "mary's book": "Mary'nin kitabı",
  "possessive 's": "İyelik 's",

  // Bağlaç
  and: "Ve",
  but: "Ama",
  or: "Veya",
  because: "Çünkü",

  // Diğer A1
  "would like": "Would like (istemek)",
  subject: "Özne",
  verb: "Fiil",
  object: "Nesne",
  svo: "Özne–yüklem–nesne (SVO)",
  "word order": "Kelime sırası",
  know: "Bilmek",
  like: "Sevmek",
  believe: "İnanmak",
  understand: "Anlamak",
  "stative verbs": "Durum fiilleri",

  // Karşılaştırma
  bigger: "Daha büyük",
  smaller: "Daha küçük",
  more: "Daha fazla",
  less: "Daha az",
  "-er than": "-er than (daha …)",
  "-ier than": "-ier than (daha …)",
  "the biggest": "En büyük",
  "the most": "En fazla",
  "-est": "-est (en …)",
  "-iest": "-iest (en …)",
  superlatives: "Üstünlük derecesi",
  "as ... as": "Kadar …",
  "not as ... as": "Kadar … değil",
  too: "Çok / fazla",
  enough: "Yeterince",

  // İlgeç + fiil kalıpları
  "verb + -ing": "Fiil + -ing",
  "verb + to infinitive": "Fiil + to",
  "like doing": "Like doing",
  "want to": "Want to",
  "enjoy doing": "Enjoy doing",
  "decide to": "Decide to",
  "stop -ing": "Stop -ing",

  both: "Her ikisi de",
  either: "Herhangi biri",
  neither: "Hiçbiri",

  "too much": "Çok fazla",
  "too many": "Çok fazla (sayılabilen)",

  to: "To (yön)",
  into: "Into (içine)",
  "out of": "Out of (dışına)",
  across: "Across (karşıya)",
  through: "Through (içinden)",
  along: "Along (boyunca)",
  over: "Over (üzerinden)",

  // Alfabe (tek harf)
  // lowercase letters handled via normalize
};

export function resolveLessonExampleTr(en: string, tr: string): string {
  if (
    tr !== LESSON_PATTERN_PLACEHOLDER_TR &&
    tr !== LESSON_SENTENCE_PLACEHOLDER_TR
  ) {
    return tr;
  }

  const key = normalizeKey(en);
  const direct = GRAMMAR_PATTERN_TR[key];
  if (direct) {
    return direct;
  }

  if (/^[a-z]$/i.test(en.trim())) {
    const letter = GRAMMAR_PATTERN_TR[key];
    if (letter) {
      return letter;
    }
  }

  return en.includes("/") || en.includes(",")
    ? "Bu kalıp bu derste açıklanır."
    : en;
}
