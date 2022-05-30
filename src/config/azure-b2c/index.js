export default {
  redirectUri: process.env.VUE_APP_BASE_URL,
  clientid: process.env.VUE_APP_ADB2C_CLIENT_ID,
  authority: process.env.VUE_APP_ADB2C_AUTHORITY,
  authorityForgotPassword: "",
  scopes: [process.env.VUE_APP_AD_SCOPE],
  codeErrorForgotPassword: "AADB2C90118",
  cacheLocation: "localStorage",
};
