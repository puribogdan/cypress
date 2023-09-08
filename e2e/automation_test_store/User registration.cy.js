describe('User registration', () => {
  beforeEach(() => {
    // Visit the registration page
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top').click();
    cy.get('#accountFrm > fieldset > .btn').click();
  });

  it('Should successfully register a new user with valid information', () => {
    // Define variables for user information
    const firstName = 'admin2';
    const lastName = 'admin2';
    const email = 'admin7@gmail.com';
    const region = 'Bristol';
    const zipCode = '123456';
    const loginName = 'admin7';
    const password = 'admin2';
    const address = 'admin2';
    const city = 'admin2';

    //Firstname
    cy.get('#AccountFrm_firstname').type(firstName);
    //Last name
    cy.get('#AccountFrm_lastname').type(lastName);
    //Email
    cy.get('#AccountFrm_email').type(email);
    //Address
    cy.get('#AccountFrm_address_1').type(address);
    //City
    cy.get('#AccountFrm_city').type(city);
    //Region
    cy.get('#AccountFrm_zone_id').select(region);
    //Zip code
    cy.get('#AccountFrm_postcode').type(zipCode);

    //Login name
    cy.get('#AccountFrm_loginname').type(loginName);
    //Password
    cy.get('#AccountFrm_password').type(password);
    //Confirm passwrod
    cy.get('#AccountFrm_confirm').type(password);

    //Tick privacy box
    cy.get('#AccountFrm_agree').check();
    //Click continue button
    cy.get('.col-md-2 > .btn').click();

    //Assert the registration was succesfull
    cy.contains(`Welcome back ${firstName}`).should('be.visible');
    cy.url().should('include', '/success');
  });
});
