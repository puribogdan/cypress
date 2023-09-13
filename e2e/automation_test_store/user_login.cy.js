// describe('User registration', () => {
//     beforeEach(() => {
//       // Visit the registration page
//       cy.visit('https://automationteststore.com/');
//       cy.get('#customer_menu_top').click();
//       cy.get('#accountFrm > fieldset > .btn').click();
//     });

describe('User login ', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top').click();
  });

  it('User login with valid credentials', () => {
    //User information
    cy.get('#loginFrm_loginname').type('admin1');
    cy.get('#loginFrm_password').type('admin1');
    cy.get('#loginFrm > fieldset > .btn').click();

    //Assert the login was succesfull
    cy.contains('Welcome back').should('be.visible');
    cy.url().should('include', '/account');
  });
});
