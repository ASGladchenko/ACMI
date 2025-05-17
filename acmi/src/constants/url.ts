export const baseApiUrl = process.env.NEXT_PUBLIC_API_URL!;
export const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI!;

export const authUrl =
  `https://acmidirect.b2clogin.com/acmidirect.onmicrosoft.com/b2c_1_login/oauth2/v2.0/authorize?` +
  `client_id=e99b74b5-b7e7-4311-8349-2d228678065a&` +
  `response_type=code&` +
  `redirect_uri=${redirectUri}&` +
  `scope=openid&` +
  `state=12345&` +
  `nonce=test123`;

console.log({
  authUrl,
  baseApiUrl,
  redirectUri,
});
