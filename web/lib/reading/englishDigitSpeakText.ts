const UNDER_TWENTY = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
] as const;

const TENS = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
] as const;

function speakUnderHundred(n: number): string | null {
  if (n < 0 || n > 99) {
    return null;
  }
  if (n < 20) {
    return UNDER_TWENTY[n] ?? null;
  }
  const tens = Math.floor(n / 10);
  const ones = n % 10;
  const tensLabel = TENS[tens];
  if (!tensLabel) {
    return null;
  }
  if (ones === 0) {
    return tensLabel;
  }
  const onesLabel = UNDER_TWENTY[ones];
  return onesLabel ? `${tensLabel}-${onesLabel}` : null;
}

export function englishDigitSpeakText(digits: string): string {
  const n = Number.parseInt(digits, 10);
  if (!Number.isFinite(n) || n < 0 || n > 1000) {
    return digits;
  }

  if (n < 100) {
    return speakUnderHundred(n) ?? digits;
  }

  if (n < 1000) {
    const hundreds = Math.floor(n / 100);
    const rest = n % 100;
    const hundredsLabel = UNDER_TWENTY[hundreds];
    if (!hundredsLabel) {
      return digits;
    }
    const base = `${hundredsLabel} hundred`;
    if (rest === 0) {
      return base;
    }
    const restSpoken = speakUnderHundred(rest);
    return restSpoken ? `${base} ${restSpoken}` : digits;
  }

  return "one thousand";
}
