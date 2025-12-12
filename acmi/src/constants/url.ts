export const baseApiUrl = process.env.NEXT_PUBLIC_API_URL!;
export const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI!;
export const clientId = process.env.NEXT_PUBLIC_CLIENT_ID!;

export const authUrl =
  `https://acmidirect.b2clogin.com/acmidirect.onmicrosoft.com/b2c_1_login/oauth2/v2.0/authorize?` +
  `client_id=${clientId}&` +
  `response_type=code&` +
  `redirect_uri=${redirectUri}&` +
  `scope=openid&` +
  `state=12345&` +
  `nonce=test123`;

const ensureTrailingSlash = (url: string): string => {
  return url.endsWith('/') ? url : url + '/';
};

// export const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=718028389486-glmqurvfl82ekfeu2alpajml7s7lbnvs.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fapi.acmi.direct%2Fauth%2Fgoogle%2Fcallback&response_type=code&scope=openid%20email%20profile&state=google`;

export const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=718028389486-glmqurvfl82ekfeu2alpajml7s7lbnvs.apps.googleusercontent.com&redirect_uri=${ensureTrailingSlash(baseApiUrl)}auth/google/callback&response_type=code&scope=openid%20email%20profile&state=google`;

export const microsoftUrl = `https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=fadb09c9-d156-4cfe-9f49-8e703f78f100&response_type=code&redirect_uri=${ensureTrailingSlash(baseApiUrl)}auth/microsoft/callback&response_mode=query&scope=openid%20profile%20email%20offline_access&state=12345`;

// export const microsoftUrl = `https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=fadb09c9-d156-4cfe-9f49-8e703f78f100&response_type=code&redirect_uri=http://localhost:8080/auth/microsoft/callback&response_mode=query&scope=openid%20profile%20email%20offline_access&state=12345`;

// With constants
// export const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=718028389486-glmqurvfl82ekfeu2alpajml7s7lbnvs.apps.googleusercontent.com&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email%20profile&state=google`;

// export const microsoftUrl = `https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=fadb09c9-d156-4cfe-9f49-8e703f78f100&response_type=code&redirect_uri=${redirectUri}&response_mode=query&scope=openid%20profile%20email%20offline_access&state=12345`;
