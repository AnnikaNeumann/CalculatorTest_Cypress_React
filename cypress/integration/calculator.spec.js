describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  xit('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should add numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should subtract numbers', () =>{
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })
    
  it('should divide numbers', () =>{
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7')

  })

  it('should concatenate numbers by click', () =>{
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '1234')
  })

  it('should chain multiple operations together', () =>{
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '136')
  })

  it('should clear the running total without affecting the calculation', () =>{
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#clear').click();
    cy.get('#number3').click();
  })

  it('should multiply bigger numbers', () =>{
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10080');
  })

  it('should show error if number cannot be divided by 0', () =>{ 

    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', "Error");
  })

  it('should add decimal numbers', () =>{
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#number8').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '48.18');
})

it('should add multiple decimal numbers', () =>{
  cy.get('#number3').click();
  cy.get('#decimal').click();
  cy.get('#number1').click();
  cy.get('#number8').click();
  cy.get('#operator_add').click();
  cy.get('#number4').click();
  cy.get('#decimal').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '7.68')
})

it('should have negative result', () =>{
  cy.get('#number9').click();
  cy.get('#operator-subtract').click();
  cy.get('#number5').click();
  cy.get('#operator-subtract').click();
  cy.get('#number8').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '-4')
})
})

 