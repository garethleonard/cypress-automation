import Page from './page';

class ShippingDetails extends Page {
  get continueButton() {
    return cy.contains('continue »');
  }

  get firstNameField() {
    return cy.get('[name="r=ship,c=first_name"]');
  }

  get lastNameField() {
    return cy.get('[name="r=ship,c=last_name"]');
  }

  get address1Field() {
    return cy.get('[name="r=ship,c=address1"]');
  }

  get phoneNumberField() {
    return cy.get('[name="r=ship,c=day_phone"]');
  }

  continue() {
    return this.continueButton.click();
  }

  enterShippingDetails(firstName, lastName, address1, phoneNumber) {
    this.firstNameField.clear().type(firstName);
    this.lastNameField.clear().type(lastName);
    this.address1Field.type(address1);
    return this.phoneNumberField.type(phoneNumber);
  }
}

export default new ShippingDetails();
