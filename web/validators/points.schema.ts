import { z } from "zod";
import { POINTS_EVENT_REASONS } from "@/lib/points/reasons";

export const recordPointsSchema = z.object({
  reason: z.enum(POINTS_EVENT_REASONS),
  sourceKey: z
    .string()
    .trim()
    .min(1)
    .max(191)
    .regex(/^[a-z0-9:_/-]+$/i, "Invalid source key"),
});

export type RecordPointsBody = z.infer<typeof recordPointsSchema>;
