import Page from './page';
import shippingDetails from './shipping-details.page';

class Checkout extends Page {
  get continueCheckoutButton() {
    return cy.contains('continue checkout »');
  }

  get continueButton() {
    return cy.contains('continue »');
  }

  get firstNameField() {
    return cy.get('[name="r=bill,c=first_name"]');
  }

  get lastNameField() {
    return cy.get('[name="r=bill,c=last_name"]');
  }

  get address1Field() {
    return cy.get('[name="r=bill,c=address1"]');
  }

  get cityField() {
    return cy.get('#zipeCodeCityTextBox');
  }

  get stateSelect() {
    return cy.get('[name="r=bill,c=state"]');
  }

  get zipField() {
    return cy.get('#zip');
  }

  get phoneNumberField() {
    return cy.get('[name="r=bill,c=day_phone"]');
  }

  get cardTypeSelect() {
    return cy.get('#cardName');
  }

  get cardNumberField() {
    return cy.get('[name="r=card1,c=card_no"]');
  }

  get expirationMonthSelect() {
    return cy.get('#cardExpMonth');
  }

  get expirationYearSelect() {
    return cy.get('#cardExpYear');
  }

  get cvvField() {
    return cy.get('#cvv');
  }

  get saveCardCheckbox() {
    return cy.get('#saveCCardChkBox');
  }

  get submitOrderButton() {
    return cy.get('#submitOrder');
  }

  get selectShippingRadio() {
    return cy.get('#change-order-button');
  }

  continueCheckout() {
    return this.continueCheckoutButton.click();
  }

  continue() {
    return this.continueButton.click();
  }

  enterBillingDetails(firstName, lastName, address1, city, state, zip, phoneNumber) {
    this.firstNameField.type(firstName);
    this.lastNameField.type(lastName);
    this.address1Field.type(address1);
    this.cityField.type(city);
    this.stateSelect.select(state);
    this.zipField.type(zip);
    return this.phoneNumberField.type(phoneNumber);
  }

  enterCardDetails(cardNumber, month, year, cvv) {
    this.cardTypeSelect.select('Visa');
    this.cardNumberField.type(cardNumber);
    this.expirationMonthSelect.select(month);
    this.expirationYearSelect.select(year);
    this.cvvField.type(cvv);
    return this.saveCardCheckbox.click(); // uncheck it
  }

  selectShipping() {
    this.selectShippingRadio.click();
    return shippingDetails;
  }

  submitOrder() {
    return this.submitOrderButton.click();
  }
}

export default new Checkout();
