import Chance from 'chance';
const chance = new Chance();

describe('Workflow das Configurações', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/configuracoes');
  });

  it('should add, edit, and delete a new user', () => {
    // Generate random user data
    const userName = chance.name();
    const userEmail = chance.email();
    const userEscopo = chance.pickone(['Adm', 'Coordenação', 'Jurídico', 'Psicologia', 'Assistência Social']);

    // Add a new user
    cy.contains('Adicionar usuário').click(); 
    cy.get('#nome').type(userName);
    cy.get('#email').type(userEmail);
    cy.get('#escopo').select(userEscopo);
    cy.contains('Salvar').click();

    // Assert that the new user is added to the table
    cy.get('table tbody tr').should('contain', userName).and('contain', userEmail).and('contain', userEscopo);

    // Edit the user
    cy.get('table tbody tr:contains("' + userName + '") td:last-child button:contains("Editar")').click();
    const editedName = chance.name();
    cy.get('#nome').clear().type(editedName);
    cy.contains('Salvar').click();

    // Assert that the user's name is updated in the table
    cy.get('table tbody tr').should('contain', editedName).and('contain', userEmail).and('contain', userEscopo);

    // Delete the user
    cy.get('table tbody tr:contains("' + editedName + '") td:last-child button:contains("Deletar")').click();
    cy.on('window:confirm', () => true); // Confirm the delete action

    // Assert that the user is removed from the table
    cy.get('table tbody tr').should('not.contain', editedName);
  });
});