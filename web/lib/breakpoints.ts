export const BREAKPOINT_PX = {
  "3xs": 0,
  "2xs": 320,
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1920,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINT_PX;

export const BELOW_LG_PX = BREAKPOINT_PX.lg;

export function mediaQueryMin(key: BreakpointKey): string {
  return `(min-width: ${BREAKPOINT_PX[key]}px)`;
}

export function mediaQueryMax(key: BreakpointKey): string {
  const px = BREAKPOINT_PX[key];
  if (px === 0) {
    return `(max-width: ${BREAKPOINT_PX["2xs"] - 1}px)`;
  }
  return `(max-width: ${px - 1}px)`;
}
