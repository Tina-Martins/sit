// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

Cypress.Commands.add('createCompleteAcolhimento', () => {
    const demandas = ['Psicologia', 'Jurídico', 'Abrigamento'];

    const acolhimentoNome = chance.name();
    const acolhimentoDataNascimento = chance.date({ year: chance.integer({ min: 1950, max: 2005 }) }).toISOString().slice(0, 10);
  
    cy.contains('Criar cadastro').click();
  
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
    
    // Generate random number between 1 and 3
    const nbDemandas = chance.integer({ min: 1, max: demandas.length });
    const randomDemandas = chance.pickset(demandas, nbDemandas);
    let selectedDemandas = [];
    randomDemandas.forEach(demanda => {
      cy.get(`#${demanda}`).check();
      selectedDemandas.push(demanda);
    });
  
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
  
    cy.contains('Salvar').click();
  
    return cy.wrap({
        nome: acolhimentoNome,
        demandas: selectedDemandas
    }); 
  });