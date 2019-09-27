export class WelcomePageObject {
  public welcomeScreen: string = '~welcome-screen';
  public loginButtonSelector: string = '~login-button';

  public getScreenRoot = (): WebdriverIO.Element => {
    return $(this.welcomeScreen);
  }

  public getLoginButton = (): WebdriverIO.Element => {
    return $(this.loginButtonSelector);
  }
}
