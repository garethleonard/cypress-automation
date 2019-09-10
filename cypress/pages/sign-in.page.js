import Page from './page';
import signUp from './sign-up.page';

class SignIn extends Page {
  get emailField() {
    return cy.get('#emailaddress');
  }

  get passwordField() {
    return cy.get('#password');
  }

  get signInButton() {
    return cy.get('#signInButton');
  }

  get createAccountLink() {
    return cy.get('#createAccount');
  }

  get notNowButton() {
    return cy.get('#notNowButton');
  }

  get firstNameField() {
    return cy.get('#firstName');
  }

  get lastNameField() {
    return cy.get('#lastName');
  }

  get newEmailField() {
    return cy.get('#emailAddress');
  }

  get confirmEmailField() {
    return cy.get('#confirmemail');
  }

  get newPasswordField() {
    return cy.get('#password_new');
  }

  get confirmPasswordField() {
    return cy.get('#confirmPassword');
  }

  get zipField() {
    return cy.get('#zip');
  }

  get createAccountButton() {
    return cy.contains('Create Account');
  }

  enterUserDetails(email, password, zip) {
    this.firstNameField.type('Random');
    this.lastNameField.type('User');
    this.newEmailField.type(email);
    this.confirmEmailField.type(email);
    this.newPasswordField.type(password);
    this.confirmPasswordField.type(password);
    this.zipField.type(zip);
    return this.createAccountButton.click();
  }

  enterSignInDetails(email, password) {
    this.emailField.type(email);
    return this.enterPassword(password);
  }

  enterPassword(password) {
    this.passwordField.type(password);
    return this.signInButton.click();
  }
}

export default new SignIn();
