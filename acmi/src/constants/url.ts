export const baseApiUrl = process.env.NEXT_PUBLIC_API_URL!;
export const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI!;
export const clientId = process.env.NEXT_PUBLIC_CLIENT_ID!;

console.log({ baseApiUrl, redirectUri, clientId });

export const authUrl =
  `https://acmidirect.b2clogin.com/acmidirect.onmicrosoft.com/b2c_1_login/oauth2/v2.0/authorize?` +
  `client_id=${clientId}&` +
  `response_type=code&` +
  `redirect_uri=${redirectUri}&` +
  `scope=openid&` +
  `state=12345&` +
  `nonce=test123`;
