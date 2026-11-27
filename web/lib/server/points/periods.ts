import { getStartOfDayInTimeZone } from "@/lib/server/date";

const TIME_ZONE = "Europe/Istanbul";

function weekdayIndexInTimeZone(date: Date): number {
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
  }).format(date);
  const map: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  return map[weekday] ?? 0;
}

export function getStartOfWeekInTimeZone(date: Date = new Date()): Date {
  const startOfDay = getStartOfDayInTimeZone(date, TIME_ZONE);
  const index = weekdayIndexInTimeZone(date);
  const daysFromMonday = (index + 6) % 7;
  return new Date(startOfDay.getTime() - daysFromMonday * 24 * 60 * 60 * 1000);
}

export function getStartOfMonthInTimeZone(date: Date = new Date()): Date {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
  }).formatToParts(date);

  const year = Number(parts.find((part) => part.type === "year")?.value ?? "0");
  const month = Number(
    parts.find((part) => part.type === "month")?.value ?? "1",
  );

  for (let day = 1; day <= 3; day += 1) {
    const probe = new Date(Date.UTC(year, month - 1, day, 10, 0, 0));
    const start = getStartOfDayInTimeZone(probe, TIME_ZONE);
    const dayInTz = Number(
      new Intl.DateTimeFormat("en-US", {
        timeZone: TIME_ZONE,
        day: "numeric",
      }).format(start),
    );
    if (dayInTz === 1) {
      return start;
    }
  }

  return getStartOfDayInTimeZone(date, TIME_ZONE);
}

export { getStartOfDayInTimeZone as getStartOfDayForPoints };
