import Page from './page';
import cart from './cart.page';

class SearchResults extends Page {
  get results() {
    return cy.get('#prodCol');
  }

  get styleFilters() {
    return cy.get('#Style_ul');
  }

  get colorFilters() {
    return cy.get('#Color_ul');
  }

  get brandFilters() {
    return cy.get('#Brand_ul');
  }

  get addToCartButtons() {
    return cy.get('[data-target="#addToCartModal"]');
  }

  get closeButton() {
    return cy.get('#clsbtn');
  }

  selectStyle(style) {
    return this.styleFilters.find(`input[title="${style}"]`).click();
  }

  selectColor(color) {
    return this.colorFilters.find(`input[title="${color}"]`).click();
  }

  selectBrand(brand) {
    return this.brandFilters.find(`input[title="${brand}"]`).click();
  }

  addFirstProductToCart() {
    this.addToCartButtons.first().click();
    this.closeButton.click();
    this.goToCart();
    return cart;
  }
}

export default new SearchResults();
