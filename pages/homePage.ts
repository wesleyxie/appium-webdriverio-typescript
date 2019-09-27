export class HomePageObject {
  public screenRoot: string = '~login-screen';

  public getScreenRoot = (): WebdriverIO.Element => {
    return $(this.screenRoot);
  }

}
