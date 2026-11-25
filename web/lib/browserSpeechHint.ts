export const SPEECH_BROWSER_HINT_IDS = [
  "edge",
  "chrome",
  "firefox",
  "safari",
  "opera",
  "yandex",
  "brave",
  "androidChrome",
  "chromium",
  "other",
] as const;

export type SpeechBrowserHintId = (typeof SPEECH_BROWSER_HINT_IDS)[number];

const MESSAGE_KEY_BY_HINT = {
  edge: "speechTurkishFemaleMissingEdge",
  chrome: "speechTurkishFemaleMissingChrome",
  firefox: "speechTurkishFemaleMissingFirefox",
  safari: "speechTurkishFemaleMissingSafari",
  opera: "speechTurkishFemaleMissingOpera",
  yandex: "speechTurkishFemaleMissingYandex",
  brave: "speechTurkishFemaleMissingBrave",
  androidChrome: "speechTurkishFemaleMissingAndroid",
  chromium: "speechTurkishFemaleMissingChromium",
  other: "speechTurkishFemaleMissingOther",
} as const satisfies Record<SpeechBrowserHintId, string>;

export type SpeechTurkishFemaleMissingMessageKey =
  (typeof MESSAGE_KEY_BY_HINT)[SpeechBrowserHintId];

export function detectSpeechBrowserHintId(): SpeechBrowserHintId {
  if (typeof navigator === "undefined") {
    return "other";
  }

  const ua = navigator.userAgent;

  if (/Edg\//.test(ua) || /EdgiOS\//.test(ua)) {
    return "edge";
  }
  if (/YaBrowser\//.test(ua)) {
    return "yandex";
  }
  if (/OPR\//.test(ua) || /Opera\//.test(ua)) {
    return "opera";
  }
  if (/Brave\//.test(ua)) {
    return "brave";
  }
  if (/Android/.test(ua) && /Chrome\//.test(ua)) {
    return "androidChrome";
  }
  if (/Firefox\//.test(ua) || /FxiOS\//.test(ua)) {
    return "firefox";
  }
  if (/CriOS\//.test(ua)) {
    return "chrome";
  }
  if (
    /Safari\//.test(ua) &&
    !/Chrome\//.test(ua) &&
    !/Chromium\//.test(ua) &&
    !/CriOS\//.test(ua)
  ) {
    return "safari";
  }
  if (/Chrome\//.test(ua)) {
    return "chrome";
  }
  if (/Chromium\//.test(ua)) {
    return "chromium";
  }

  return "other";
}

export function getTurkishFemaleMissingMessageKey(): SpeechTurkishFemaleMissingMessageKey {
  return MESSAGE_KEY_BY_HINT[detectSpeechBrowserHintId()];
}
