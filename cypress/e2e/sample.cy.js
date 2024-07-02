import Chance from 'chance';
const chance = new Chance();

describe('Cadastro de Demanda Workflow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/base-de-dados');
  });

  it('should create a new acolhimento and navigate to ficha', () => {
    const acolhimentoNome = chance.name();
    const acolhimentoDataNascimento = chance.date({ year: chance.integer({ min: 1950, max: 2005 }) }).toISOString().slice(0, 10);

    cy.contains('Criar cadastro').click();

    cy.get('#nomeCompleto').type(acolhimentoNome);
    cy.get('#dataNascimento').type(acolhimentoDataNascimento);
    cy.get('#descricao').type(chance.sentence()); // Descrição da demanda

    cy.get('#Psicologia').check(); 

    cy.contains('Salvar').click(); // Salvar cadastro
    cy.contains('Salvar').click(); // Confirmar cadastro incompleto


    // Certificar que a URL mudou para /base-de-dados/ficha
    cy.url().should('include', '/base-de-dados/ficha');

    // Assert that the acolhimento name is displayed on the "Ficha" page
    cy.contains(acolhimentoNome).should('be.visible');
  });

  // it('should navigate to a specific demanda tab and assign a user', () => {
  //   // Assuming an acolhimento already exists and we are on the "Ficha" page
  //   const acolhimentoNome = 'Maria Silva'; // Replace with an existing acolhimento name
  //   const usuarioNome = 'Admin'; // Replace with an existing user name

  //   // Click on the specific "Demanda" button (e.g., "Psicologia")
  //   cy.contains('Psicologia').click();

  //   // Assert that the "Informações do Profissional Responsável" card is not visible
  //   cy.get('.card-header:contains("Informações do Profissional Responsável")').should('not.exist');

  //   // Click on the "Atribuir demanda" button
  //   cy.contains('Atribuir demanda').click();

  //   // Select a user from the dropdown
  //   cy.get('select').select(usuarioNome);

  //   // Click on the "Salvar" button in the modal
  //   cy.contains('Salvar').click();

  //   // Assert that the "Informações do Profissional Responsável" card is now visible
  //   cy.get('.card-header:contains("Informações do Profissional Responsável")').should('be.visible');

  //   // Assert that the assigned user's name is displayed
  //   cy.contains(usuarioNome).should('be.visible');
  // });
});