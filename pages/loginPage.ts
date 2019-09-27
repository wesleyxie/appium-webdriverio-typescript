export class LoginPageObject {
  public screenRoot: string = '~login-screen';
  public usernameInputSelector: string = '~username-input';
  public passwordInputSelector: string = '~password-input';
  public loginButtonSelector: string = '~login-button';

  public getScreenRoot = (): WebdriverIO.Element => {
    return $(this.screenRoot);
  }

  public getUsernameInput = (): WebdriverIO.Element => {
    return $(this.usernameInputSelector);
  }

  public getPasswordInput = (): WebdriverIO.Element => {
    return $(this.passwordInputSelector);
  }

  public getLoginButton = (): WebdriverIO.Element => {
    return $(this.loginButtonSelector);
  }
}
