import Page from './page';

class SignUp extends Page {
  get firstNameField() {
    return cy.get('#firstName');
  }

  get lastNameField() {
    return cy.get('#lastName');
  }

  get emailField() {
    return cy.get('#emailAddress');
  }

  get confirmEmailField() {
    return cy.get('#confirmemail');
  }

  get passwordField() {
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
    this.emailField.type(email);
    this.confirmEmailField.type(email);
    this.passwordField.type(password);
    this.confirmPasswordField.type(password);
    this.zip.type(zip);
    return this.createAccountButton.click();
  }
}

export default new SignUp();
