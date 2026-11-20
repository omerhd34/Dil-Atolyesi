export type PhrasalVerbEntry = {
  id: string;
  phrase: string;
  meaningTr: string;
  separable: boolean;
  exampleEn: string;
  exampleTr: string;
};

export const phrasalVerbs: PhrasalVerbEntry[] = [
  {
    id: "pv-1",
    phrase: "look after",
    meaningTr: "bakmak, ilgilenmek",
    separable: false,
    exampleEn: "She looks after her little brother.",
    exampleTr: "Küçük kardeşine bakıyor.",
  },
  {
    id: "pv-2",
    phrase: "give up",
    meaningTr: "vazgeçmek, bırakmak",
    separable: false,
    exampleEn: "Don’t give up on your goals.",
    exampleTr: "Hedeflerinden vazgeçme.",
  },
  {
    id: "pv-3",
    phrase: "turn on",
    meaningTr: "açmak (cihaz)",
    separable: true,
    exampleEn: "Can you turn on the lights?",
    exampleTr: "Işıkları açar mısın?",
  },
  {
    id: "pv-4",
    phrase: "turn off",
    meaningTr: "kapatmak (cihaz)",
    separable: true,
    exampleEn: "Please turn off your phone.",
    exampleTr: "Lütfen telefonunu kapat.",
  },
  {
    id: "pv-5",
    phrase: "pick up",
    meaningTr: "almak; (araçla) birini almak",
    separable: true,
    exampleEn: "I’ll pick you up at the station.",
    exampleTr: "Seni istasyondan alacağım.",
  },
  {
    id: "pv-6",
    phrase: "get up",
    meaningTr: "kalkmak (yataktan)",
    separable: false,
    exampleEn: "I get up at seven on weekdays.",
    exampleTr: "Hafta içi yedi de kalkarım.",
  },
  {
    id: "pv-7",
    phrase: "find out",
    meaningTr: "öğrenmek, ortaya çıkarmak",
    separable: false,
    exampleEn: "We found out the truth yesterday.",
    exampleTr: "Dün gerçeği öğrendik.",
  },
  {
    id: "pv-8",
    phrase: "look for",
    meaningTr: "aramak",
    separable: false,
    exampleEn: "I’m looking for my keys.",
    exampleTr: "Anahtarlarımı arıyorum.",
  },
  {
    id: "pv-9",
    phrase: "take off",
    meaningTr: "çıkarmak (giysi); (uçak) havalanmak",
    separable: true,
    exampleEn: "Take off your coat; it’s warm inside.",
    exampleTr: "Paltonu çıkar; içerisi sıcak.",
  },
  {
    id: "pv-10",
    phrase: "put on",
    meaningTr: "giymek, üzerine koymak",
    separable: true,
    exampleEn: "Put on your shoes, we’re leaving.",
    exampleTr: "Ayakkabılarını giy, çıkıyoruz.",
  },
  {
    id: "pv-11",
    phrase: "wake up",
    meaningTr: "uyanmak",
    separable: false,
    exampleEn: "I woke up early this morning.",
    exampleTr: "Bu sabah erken uyandım.",
  },
  {
    id: "pv-12",
    phrase: "look up",
    meaningTr: "(sözlükte/internette) bakmak",
    separable: true,
    exampleEn: "Look up the word in a dictionary.",
    exampleTr: "Kelimeye sözlükten bak.",
  },
  {
    id: "pv-13",
    phrase: "run out of",
    meaningTr: "… bitmek, tükenmek",
    separable: false,
    exampleEn: "We ran out of milk.",
    exampleTr: "Sütümüz bitti.",
  },
  {
    id: "pv-14",
    phrase: "get along (with)",
    meaningTr: "iyi geçinmek",
    separable: false,
    exampleEn: "They get along well with their neighbours.",
    exampleTr: "Komşularıyla iyi geçiniyorlar.",
  },
  {
    id: "pv-15",
    phrase: "carry on",
    meaningTr: "devam etmek",
    separable: false,
    exampleEn: "Carry on working; you’re doing great.",
    exampleTr: "Çalışmaya devam et; harika gidiyorsun.",
  },
  {
    id: "pv-16",
    phrase: "set up",
    meaningTr: "kurmak, hazırlamak",
    separable: true,
    exampleEn: "We set up the tent in ten minutes.",
    exampleTr: "Çadırı on dakikada kurduk.",
  },
  {
    id: "pv-17",
    phrase: "bring up",
    meaningTr: "yetıştirmek; (konu) açmak",
    separable: true,
    exampleEn: "She was brought up in a small town.",
    exampleTr: "Küçük bir kasabada büyütüldü.",
  },
  {
    id: "pv-18",
    phrase: "go on",
    meaningTr: "devam etmek",
    separable: false,
    exampleEn: "Please go on with your story.",
    exampleTr: "Lütfen hikâyene devam et.",
  },
];

export type PhrasalVerbListFilter = "all" | "separable" | "inseparable";

export function filterPhrasalVerbs(
  list: PhrasalVerbEntry[],
  filter: PhrasalVerbListFilter,
): PhrasalVerbEntry[] {
  if (filter === "all") {
    return list;
  }
  if (filter === "separable") {
    return list.filter((item) => item.separable === true);
  }
  return list.filter((item) => item.separable === false);
}
