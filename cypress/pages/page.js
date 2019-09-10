export default class Page {
  constructor(path = '/') {
    this.path = path;
  }

  get cartButton() {
    return cy.get('#cartbutton');
  }

  get cartCountDiv() {
    return cy.get('#cartCountDiv');
  }

  get searchField() {
    return cy.get('#searchbxquery');
  }

  get submitSearchButton() {
    return cy.get('.searchbutton');
  }

  get accountMenu() {
    return cy.contains('myFrys');
  }

  get signInLink() {
    return cy.contains('Sign In');
  }

  visit() {
    return cy.visit(this.path);
  }

  goToCart() {
    return this.cartButton.click();
  }

  getCartSize() {
    return this.cartCountDiv.invoke('text').then((text) => Number.parseInt(text, 10) || 0);
  }

  goToSignIn() {
    this.accountMenu.click();
    this.signInLink.click();
  }

  searchFor(text) {
    this.searchField.type(text);
    return this.submitSearchButton.click();
  }
}
