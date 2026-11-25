import { z } from "zod";

const googleOAuthSchema = z.object({
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
});

export type GoogleOAuthEnv = z.infer<typeof googleOAuthSchema>;

let cached: GoogleOAuthEnv | null | undefined;

export function getGoogleOAuthEnv(): GoogleOAuthEnv | null {
  if (cached !== undefined) {
    return cached;
  }

  const parsed = googleOAuthSchema.safeParse(process.env);
  cached = parsed.success ? parsed.data : null;
  return cached;
}

export function isGoogleAuthConfigured(): boolean {
  return getGoogleOAuthEnv() !== null;
}
