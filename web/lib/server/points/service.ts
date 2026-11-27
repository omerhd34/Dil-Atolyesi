import { Prisma } from "@prisma/client";
import { POINTS_AMOUNTS, type PointsEventReason } from "@/lib/points/reasons";
import { getPrisma } from "@/lib/server/prisma";
import {
  getStartOfDayForPoints,
  getStartOfMonthInTimeZone,
  getStartOfWeekInTimeZone,
} from "@/lib/server/points/periods";

export type PointsSummaryPayload = {
  daily: number;
  weekly: number;
  monthly: number;
  total: number;
};

export type AwardPointsResult = {
  awarded: boolean;
  amount: number;
};

export async function awardPoints(
  userId: string,
  reason: PointsEventReason,
  sourceKey: string,
): Promise<AwardPointsResult> {
  const amount = POINTS_AMOUNTS[reason];
  if (amount <= 0) {
    return { awarded: false, amount: 0 };
  }

  const prisma = getPrisma();
  try {
    await prisma.pointsEvent.create({
      data: {
        userId,
        reason,
        amount,
        sourceKey,
      },
    });
    return { awarded: true, amount };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return { awarded: false, amount: 0 };
    }
    throw error;
  }
}

async function sumSince(userId: string, since: Date): Promise<number> {
  const prisma = getPrisma();
  const result = await prisma.pointsEvent.aggregate({
    where: {
      userId,
      createdAt: { gte: since },
    },
    _sum: { amount: true },
  });
  return result._sum.amount ?? 0;
}

export async function getPointsSummaryForUser(
  userId: string,
): Promise<PointsSummaryPayload> {
  const now = new Date();
  const dayStart = getStartOfDayForPoints(now);
  const weekStart = getStartOfWeekInTimeZone(now);
  const monthStart = getStartOfMonthInTimeZone(now);

  const prisma = getPrisma();
  const [daily, weekly, monthly, totalAggregate] = await Promise.all([
    sumSince(userId, dayStart),
    sumSince(userId, weekStart),
    sumSince(userId, monthStart),
    prisma.pointsEvent.aggregate({
      where: { userId },
      _sum: { amount: true },
    }),
  ]);

  return {
    daily,
    weekly,
    monthly,
    total: totalAggregate._sum.amount ?? 0,
  };
}

export async function deletePointsForUser(userId: string): Promise<number> {
  const prisma = getPrisma();
  const result = await prisma.pointsEvent.deleteMany({ where: { userId } });
  return result.count;
}
