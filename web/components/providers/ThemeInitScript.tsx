import { THEME_INIT_SCRIPT } from "@/lib/themeInitScript";

export function ThemeInitScript() {
  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
    />
  );
}
