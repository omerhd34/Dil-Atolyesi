import { getTranslations } from "next-intl/server";

type GetTranslationsArgs = Parameters<typeof getTranslations>[0];

export async function getMessageText(config: GetTranslationsArgs, key: string) {
  const t = await getTranslations(config);
  return t(key);
}

export async function getRichText(config: GetTranslationsArgs, key: string) {
  return getMessageText(config, key);
}
