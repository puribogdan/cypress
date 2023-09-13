/// <reference types="Cypress" />

describe('User registration', () => {
  beforeEach(() => {
    // Visit the registration page
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top').click();
    cy.get('#accountFrm > fieldset > .btn').click();
  });

  it('Should successfully register a new user with valid information', () => {
    cy.fixture('registration-data').then((userData) => {
      const user1 = userData.user1;

      cy.get('#AccountFrm_firstname').type(user1.firstName);
      cy.get('#AccountFrm_lastname').type(user1.lastName);
      cy.get('#AccountFrm_email').type(user1.email);
      cy.get('#AccountFrm_address_1').type(user1.address);
      cy.get('#AccountFrm_city').type(user1.city);
      cy.get('#AccountFrm_zone_id').select(user1.region);
      cy.get('#AccountFrm_postcode').type(user1.zipCode);
      cy.get('#AccountFrm_loginname').type(user1.loginName);
      cy.get('#AccountFrm_password').type(user1.password);
      cy.get('#AccountFrm_confirm').type(user1.password);
      cy.get('#AccountFrm_agree').check();
      cy.get('.col-md-2 > .btn').click();

      //Assert the registration was succesfull
      cy.contains(`Welcome back ${user1.firstName}`).should('be.visible');
      cy.url().should('include', '/success');
    });
  });
});
