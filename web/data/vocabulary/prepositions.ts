export type PrepositionCategory = "time" | "place" | "movement" | "other";

export type PrepositionEntry = {
  id: string;
  preposition: string;
  category: PrepositionCategory;
  usageTr: string;
  exampleEn: string;
  exampleTr: string;
};

export const prepositions: PrepositionEntry[] = [
  {
    id: "prep-1",
    preposition: "at",
    category: "time",
    usageTr: "belirli saatler (at 3 p.m.), öğünler (at night)",
    exampleEn: "The meeting starts at nine.",
    exampleTr: "Toplantı saat dokuzda başlıyor.",
  },
  {
    id: "prep-2",
    preposition: "on",
    category: "time",
    usageTr: "günler ve tarihler (on Monday, on 5 May)",
    exampleEn: "We met on Tuesday last week.",
    exampleTr: "Geçen hafta Salı günü buluştuk.",
  },
  {
    id: "prep-3",
    preposition: "in",
    category: "time",
    usageTr: "aylar, yıllar, mevsimler, uzun dönemler (in 2026, in summer)",
    exampleEn: "She was born in April.",
    exampleTr: "Nisan ayında doğdu.",
  },
  {
    id: "prep-4",
    preposition: "for",
    category: "time",
    usageTr: "süre (for two hours, for a week)",
    exampleEn: "I waited for an hour.",
    exampleTr: "Bir saat bekledim.",
  },
  {
    id: "prep-5",
    preposition: "since",
    category: "time",
    usageTr: "belirli bir zamandan beri (since 2020)",
    exampleEn: "I have lived here since 2020.",
    exampleTr: "2020’den beri burada yaşıyorum.",
  },
  {
    id: "prep-6",
    preposition: "during",
    category: "time",
    usageTr: "bir olay/süre boyunca (during the lesson)",
    exampleEn: "No phones during the exam.",
    exampleTr: "Sınav sırasında telefon yok.",
  },
  {
    id: "prep-7",
    preposition: "at",
    category: "place",
    usageTr: "belirli nokta (at the door, at home, at work)",
    exampleEn: "She is at the office today.",
    exampleTr: "Bugün ofiste.",
  },
  {
    id: "prep-8",
    preposition: "on",
    category: "place",
    usageTr: "yüzey (on the table, on the wall)",
    exampleEn: "The keys are on the desk.",
    exampleTr: "Anahtarlar masanın üstünde.",
  },
  {
    id: "prep-9",
    preposition: "in",
    category: "place",
    usageTr: "kapalı alan / bölge (in the room, in Turkey)",
    exampleEn: "He lives in Istanbul.",
    exampleTr: "İstanbul’da yaşıyor.",
  },
  {
    id: "prep-10",
    preposition: "under",
    category: "place",
    usageTr: "altında",
    exampleEn: "The cat is under the chair.",
    exampleTr: "Kedi sandalyenin altında.",
  },
  {
    id: "prep-11",
    preposition: "between",
    category: "place",
    usageTr: "ikisi arasında",
    exampleEn: "The café is between the bank and the park.",
    exampleTr: "Kafe banka ile park arasında.",
  },
  {
    id: "prep-12",
    preposition: "to",
    category: "movement",
    usageTr: "yönelim (to school, to the station)",
    exampleEn: "We walked to the beach.",
    exampleTr: "Sahile yürüdük.",
  },
  {
    id: "prep-13",
    preposition: "into",
    category: "movement",
    usageTr: "içeri doğru hareket",
    exampleEn: "She went into the building.",
    exampleTr: "Binanın içine girdi.",
  },
  {
    id: "prep-14",
    preposition: "from",
    category: "movement",
    usageTr: "çıkış noktası (from home, from London)",
    exampleEn: "Trains from Ankara are delayed.",
    exampleTr: "Ankara’dan trenler gecikiyor.",
  },
  {
    id: "prep-15",
    preposition: "through",
    category: "movement",
    usageTr: "içinden geçerek",
    exampleEn: "We drove through the tunnel.",
    exampleTr: "Tünelin içinden geçtik.",
  },
  {
    id: "prep-16",
    preposition: "by",
    category: "other",
    usageTr:
      "yapan kişi (pasif), taşıma aracı (by bus), yanında (by the window)",
    exampleEn: "This book was written by a Turkish author.",
    exampleTr: "Bu kitap Türk bir yazar tarafından yazıldı.",
  },
  {
    id: "prep-17",
    preposition: "with",
    category: "other",
    usageTr: "ile birlikte; araç-gereç",
    exampleEn: "I went with my friends.",
    exampleTr: "Arkadaşlarımla gittim.",
  },
  {
    id: "prep-18",
    preposition: "about",
    category: "other",
    usageTr: "hakkında",
    exampleEn: "We talked about the project.",
    exampleTr: "Proje hakkında konuştuk.",
  },
];

export type PrepositionListFilter = "all" | PrepositionCategory;

export function filterPrepositions(
  list: PrepositionEntry[],
  filter: PrepositionListFilter,
): PrepositionEntry[] {
  if (filter === "all") {
    return list;
  }
  return list.filter((item) => item.category === filter);
}
