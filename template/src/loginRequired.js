export const loginRequired = (Screen, loginRequired = true) => {
  Screen.loginRequired = loginRequired;
  return Screen;
}