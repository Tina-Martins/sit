import Chance from 'chance';
const chance = new Chance();

describe('Workflow da ficha de acolhimento', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/base-de-dados');
  });

  it('should create a new acolhimento and navigate to ficha, handling incomplete form', () => {
    // Generate random data for acolhimento
    const acolhimentoNome = chance.name();
    const acolhimentoDataNascimento = chance.date({ year: chance.integer({ min: 1950, max: 2005 }) }).toISOString().slice(0, 10);

    // Click on "Criar cadastro" button
    cy.contains('Criar cadastro').click();

    // Fill only the required fields in "Novo Cadastro"
    cy.get('#nomeCompleto').type(acolhimentoNome);
    cy.get('#dataNascimento').type(acolhimentoDataNascimento);

    // Select at least one "Demanda" checkbox
    cy.get('#Psicologia').check(); 

    // Click on "Salvar" button
    cy.contains('Salvar').click();

    // Assert that the confirmation dialog appears
    cy.get('.modal-title:contains("Informações de cadastro incompletas")').should('be.visible');

    // Click on "Salvar" button in the confirmation dialog
    cy.contains('Salvar').click();

    // Assert that the user is redirected to the "Ficha" page
    cy.url().should('include', '/base-de-dados/ficha');

    // Assert that the acolhimento name is displayed on the "Ficha" page
    cy.contains(acolhimentoNome).should('be.visible');
  });

  it('should create a new acolhimento with complete form and navigate to ficha', () => {
    // Generate random data for acolhimento
    const acolhimentoNome = chance.name();
    const acolhimentoDataNascimento = chance.date({ year: chance.integer({ min: 1950, max: 2005 }) }).toISOString().slice(0, 10);

    // Click on "Criar cadastro" button
    cy.contains('Criar cadastro').click();

    // Fill the entire form in "Novo Cadastro"
    cy.get('#nomeCompleto').type(acolhimentoNome);
    cy.get('#dataNascimento').type(acolhimentoDataNascimento);
    cy.get('#documento').type(chance.cpf({ formatted: true }));
    cy.get('#documentoEmissor').type('SSP');
    cy.get('#qtdFilhos').type(chance.integer({ min: 0, max: 5 }));
    cy.get('#email').type(chance.email());
    cy.get('#telefone').type(chance.phone({ formatted: true }));
    cy.get('#cidade').type(chance.city());
    cy.get('#bairro').type(chance.address());
    cy.get('#descricao').type(chance.sentence());

    // Select at least one "Demanda" checkbox
    cy.get('#Psicologia').check(); 

    // Select random options from dropdowns
    cy.get('#tipoDocumento').select(chance.pickone(['RG', 'CPF', 'CNH']));
    cy.get('#racaCor').select(chance.pickone(['Preta', 'Parda', 'Branca', 'Indígena', 'Amarela', 'Quilombola']));
    cy.get('#escolaridade').select(chance.pickone([
      'Não possui', 
      'Ensino Fundamental', 
      'Ensino Médio', 
      'Ensino Superior', 
      'Pós-graduação', 
      'Mestrado', 
      'Doutorado'
    ]));
    cy.get('#orientacaoSexual').select(chance.pickone([
      'Heterossexual', 
      'Homossexual', 
      'Bissexual', 
      'Pansexual', 
      'Assexual', 
      'Outra'
    ]));
    cy.get('#origem').select(chance.pickone(['Demanda Espontânea', 'Rede de Atendimento']));
    cy.get('#servicoReferencia').select(chance.pickone([
      'Bem Vinda', 
      'CRAS', 
      'CREAS', 
      'Centro de Saúde', 
      'Hospital', 
      'CAO VD MPMG', 
      'CERNA', 
      'Casa da Mulher Mineira', 
      'DEAM', 
      'Guarda Municipal', 
      'Polícia Militar'
    ]));

    // Click on "Salvar" button
    cy.contains('Salvar').click();

    // Assert that the user is redirected to the "Ficha" page without the confirmation dialog
    cy.url().should('include', '/base-de-dados/ficha');

    // Assert that the acolhimento name is displayed on the "Ficha" page
    cy.contains(acolhimentoNome).should('be.visible');
  });

  it('should edit acolhimento details', () => {
    const acolhimentoNome = 'Maria Silva'; // Replace with an existing acolhimento name
    const newNome = chance.name();
    const newEmail = chance.email();

    // Navigate to the acolhimento's "Ficha" page (assuming you have a way to do this)
    // For example, if you have a table with acolhimentos, you could:
    cy.contains(acolhimentoNome).click(); 
    cy.url().should('include', '/base-de-dados/ficha'); 

    // Click on the "Editar cadastro" button
    cy.contains('Editar cadastro').click();

    // Assert that the URL includes '/editar'
    cy.url().should('include', '/editar');

    // Edit the nome and email fields
    cy.get('#nomeCompleto').clear().type(newNome);
    cy.get('#email').clear().type(newEmail);

    // Click on "Salvar" button
    cy.contains('Salvar').click();

    // Assert that the user is redirected back to the "Ficha" page
    cy.url().should('include', '/base-de-dados/ficha');

    // Assert that the updated name and email are displayed
    cy.contains(newNome).should('be.visible');
    cy.contains(newEmail).should('be.visible');
  });

  it('should navigate to a specific demanda tab and assign a user', () => {
    // Assuming an acolhimento already exists and we are on the "Ficha" page
    const acolhimentoNome = 'Maria Silva'; // Replace with an existing acolhimento name
    const usuarioNome = 'Admin'; // Replace with an existing user name

    // Click on the specific "Demanda" button (e.g., "Psicologia")
    cy.contains('Psicologia').click();

    // Assert that the "Informações do Profissional Responsável" card is not visible
    cy.get('.card-header:contains("Informações do Profissional Responsável")').should('not.exist');

    // Click on the "Atribuir demanda" button
    cy.contains('Atribuir demanda').click();

    // Select a user from the dropdown
    cy.get('select').select(usuarioNome);

    // Click on the "Salvar" button in the modal
    cy.contains('Salvar').click();

    // Assert that the "Informações do Profissional Responsável" card is now visible
    cy.get('.card-header:contains("Informações do Profissional Responsável")').should('be.visible');

    // Assert that the assigned user's name is displayed
    cy.contains(usuarioNome).should('be.visible');
  });
});