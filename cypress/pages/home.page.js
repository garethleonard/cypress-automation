import Page from './page';
import signIn from './sign-in.page';

class Home extends Page {
  goToSignIn() {
    super.goToSignIn();
    return signIn;
  }
}

export default new Home();
