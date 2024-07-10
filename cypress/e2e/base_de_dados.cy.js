import Chance from 'chance';
const chance = new Chance();

describe('Workflow da base de dados', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/base-de-dados');
  });

  it('Deve navegar por cada aba de demanda sem erros', () => {
    const demandas = ['Psicologia', 'Jurídico', 'Assistência Social', 'Abrigamento'];

    demandas.forEach(demanda => {
      cy.get('select[name="tipo_demanda"]').type(demanda).select(demanda);
    });
  });

  it('Deve filtrar os status sem erros', () => {
    const statusOptions = ['Ativo', 'Encerrado', 'Encaminhado'];

    statusOptions.forEach(status => {
      cy.get('select[name="status"]').select(status);
      cy.get('input[name="name"]').type('{enter}');
      cy.get('.error-message').should('not.exist');

      cy.get('tbody');
    });
  });

  it('Deve filtrar as demandas sem erros', () => {
    const demandas = ['Psicologia', 'Jurídico', 'Assistência Social', 'Abrigamento'];

    demandas.forEach(demanda => {
      cy.get('select[name="tipo_demanda"]').select(demanda);
      cy.get('input[name="name"]').type('{enter}');
      cy.get('.error-message').should('not.exist');

      cy.get('tbody');
    });
  });
});