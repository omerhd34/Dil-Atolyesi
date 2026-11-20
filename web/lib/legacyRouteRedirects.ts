import {
  AUTH_ACCOUNT_PATH,
  LEGACY_ACCOUNT_LOGIN_PATH,
  LEGACY_WORKSHOP_REDIRECT_PREFIX,
  WORKSHOP_PATH,
} from "./appPaths";

export function getLegacyRouteRedirects() {
  return [
    {
      source: LEGACY_WORKSHOP_REDIRECT_PREFIX,
      destination: WORKSHOP_PATH,
      permanent: true,
    },
    {
      source: `${LEGACY_WORKSHOP_REDIRECT_PREFIX}/:path*`,
      destination: `${WORKSHOP_PATH}/:path*`,
      permanent: true,
    },
    {
      source: LEGACY_ACCOUNT_LOGIN_PATH,
      destination: AUTH_ACCOUNT_PATH,
      permanent: true,
    },
  ];
}
