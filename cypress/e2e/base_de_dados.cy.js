import Chance from 'chance';
const chance = new Chance();

describe('Workflow da base de dados', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/base-de-dados');
  });

  it('should navigate through each Demanda tab and display data', () => {
    const demandas = ['Psicologia', 'Jurídico', 'Assistência Social', 'Abrigamento'];

    demandas.forEach(demanda => {
      // Get element by name
      cy.get('select[name="tipo_demanda"]').type(demanda).select(demanda);
    });
  });

  // it('should filter by status without errors', () => {
  //   const statusOptions = ['Ativo', 'Encerrado', 'Encaminhado'];

  //   statusOptions.forEach(status => {
  //     // Select the status from the dropdown
  //     cy.get('select[name="status"]').select(status);

  //     // Trigger the search/filter (you might need to adjust this based on your app)
  //     cy.get('input[name="name"]').type('{enter}');

  //     // Assert that no error messages are displayed
  //     cy.get('.error-message').should('not.exist');

  //     // Assert that the table body is displayed (it might be empty if no matching data)
  //     cy.get('tbody').should('be.visible');
  //   });
  // });

  // it('should filter by demanda without errors', () => {
  //   const demandas = ['Psicologia', 'Jurídico', 'Assistência Social', 'Abrigamento'];

  //   demandas.forEach(demanda => {
  //     // Select the demanda from the dropdown
  //     cy.get('select[name="tipo_demanda"]').select(demanda);

  //     // Trigger the search/filter (you might need to adjust this based on your app)
  //     cy.get('input[name="name"]').type('{enter}');

  //     // Assert that no error messages are displayed
  //     cy.get('.error-message').should('not.exist');

  //     // Assert that the table body is displayed (it might be empty if no matching data)
  //     cy.get('tbody').should('be.visible');
  //   });
  // });
});