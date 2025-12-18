export const baseApiUrl = process.env.NEXT_PUBLIC_API_URL || '';

const ensureTrailingSlash = (url: string): string => {
  return url.endsWith('/') ? url : url + '/';
};

export const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=718028389486-glmqurvfl82ekfeu2alpajml7s7lbnvs.apps.googleusercontent.com&redirect_uri=${ensureTrailingSlash(baseApiUrl)}auth/google/callback&response_type=code&scope=openid%20email%20profile&state=google`;

export const microsoftUrl = `https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=fadb09c9-d156-4cfe-9f49-8e703f78f100&response_type=code&redirect_uri=${ensureTrailingSlash(baseApiUrl)}auth/microsoft/callback&response_mode=query&scope=openid%20profile%20email%20offline_access&state=12345`;
