import Chance from 'chance';
const chance = new Chance();

describe('Workflow das Configurações', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/configuracoes');
  });

  it('Deve adicionar, editar e deletar um novo usuário', () => {
    const userName = chance.name();
    const userEmail = chance.email();
    const userEscopo = chance.pickone(['Adm', 'Coordenação', 'Jurídico', 'Psicologia', 'Assistência Social']);

    cy.contains('Adicionar usuário').click(); 
    cy.get('#nome').type(userName);
    cy.get('#email').type(userEmail);
    cy.get('#escopo').select(userEscopo);
    cy.contains('Salvar').click();

    cy.get('table tbody tr').should('contain', userName).and('contain', userEmail).and('contain', userEscopo);

    cy.get('table tbody tr:contains("' + userName + '") td:last-child button:contains("Editar")').click();
    const editedName = chance.name();
    cy.get('#nome').clear().type(editedName);
    cy.contains('Salvar').click();

    cy.get('table tbody tr').should('contain', editedName).and('contain', userEmail).and('contain', userEscopo);

    cy.get('table tbody tr:contains("' + editedName + '") td:last-child button:contains("Deletar")').click();
    cy.on('window:confirm', () => true);

    cy.get('table tbody tr').should('not.contain', editedName);
  });
});