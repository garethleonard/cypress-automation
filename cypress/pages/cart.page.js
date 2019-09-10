import Page from './page';
import checkout from './checkout.page';

class Cart extends Page {
  get checkoutButton() {
    return cy.get('.checkoutLink').first();
  }

  removeFirstItem() {
    return cy.get('[aria-label="Remove Item"]').first().click();
  }

  checkout() {
    this.checkoutButton.click();
    return checkout;
  }
}

export default new Cart();
