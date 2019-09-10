/// <reference types="Cypress" />
import home from '../pages/home.page';
import searchResults from '../pages/search-results.page';

describe('Fry\'s Electronics', function() {
  function searchForProduct() {
    home.searchFor('Bluetooth Headphones');
    searchResults.selectStyle('In-Ear');
    searchResults.selectColor('Black');
    searchResults.selectBrand('808');
  }

  beforeEach(function() {
    home.visit();
  });

  it('allows sign up for a new account', function() {
    cy.wrap(`random${Math.floor(Math.random() * 100000) + 1}@restmail.net`)
      .as('email')
      .then(function(email) {
        const signIn = home.goToSignIn();
        signIn.enterUserDetails(email, Cypress.env('pw'), '85234');
        cy.get('[name="hello text"]');
      });
  });

  it('allows login of user', function() {
    const signIn = home.goToSignIn();
    signIn.enterSignInDetails(this.email, Cypress.env('pw'));
  });

  it('allows user to search by three criteria', function() {
    const signIn = home.goToSignIn();
    signIn.enterSignInDetails(this.email, Cypress.env('pw'));
    searchForProduct();
    searchResults.results.its('length').should('be.gt', 0);
  });

  it('allows user to add to cart', function() {
    const signIn = home.goToSignIn();
    signIn.enterSignInDetails(this.email, Cypress.env('pw'));
    home.getCartSize().then((startSize) => {
      searchForProduct();
      const cart = searchResults.addFirstProductToCart();
      cart.getCartSize().then((endSize) => {
        expect(startSize).to.be.lt(endSize);
      });
    });
  });

  it('allows user to remove from cart', function() {
    const signIn = home.goToSignIn();
    signIn.enterSignInDetails(this.email, Cypress.env('pw'));
    searchForProduct();
    const cart = searchResults.addFirstProductToCart();
    cart.getCartSize().then((startSize) => {
      cart.removeFirstItem();
      cart.getCartSize().then((endSize) => {
        expect(startSize).to.be.gt(endSize);
      });
    });
  });

  it('allows user to checkout', function() {
    const signIn = home.goToSignIn();
    signIn.enterSignInDetails(this.email, Cypress.env('pw'));
    searchForProduct();
    const cart = searchResults.addFirstProductToCart();
    const checkout = cart.checkout();
    signIn.enterPassword(Cypress.env('pw'));
    checkout.continueCheckout();
    checkout.enterBillingDetails('Random', 'User', '3681 E Bruce Ave', 'Gilbert', 'AZ', '85234', '4803383338');
    checkout.enterCardDetails('4111111111111111', '01', '2023', '123');
    checkout.continue();
    const shippingDetails = checkout.selectShipping();
    shippingDetails.enterShippingDetails('Random', 'User', '3681 E Bruce Ave', '4803383338');
    checkout.continue();
    checkout.submitOrderButton; // validate the button exists
    // checkout.submitOrder(); // We don't want to actually run this because production
  });
});
