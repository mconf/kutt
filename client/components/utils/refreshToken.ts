export const refreshTokenSetup = res => {
  const refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  setInterval(res.reloadAuthResponse, refreshTiming);
};
