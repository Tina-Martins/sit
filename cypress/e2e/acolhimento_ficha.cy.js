import Chance from 'chance';
const chance = new Chance();

describe('Workflow da ficha de acolhimento', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/base-de-dados');
  });

  it('should create a new acolhimento and navigate to ficha, handling incomplete form', () => {
    const acolhimentoNome = chance.name();
    const acolhimentoDataNascimento = chance.date({ year: chance.integer({ min: 1950, max: 2005 }) }).toISOString().slice(0, 10);

    cy.contains('Criar cadastro').click();

    cy.get('#nomeCompleto').type(acolhimentoNome);
    cy.get('#dataNascimento').type(acolhimentoDataNascimento);

    const randomDemanda = chance.pickone(demandas);
    cy.get(`#${randomDemanda}`).check(); 

    cy.contains('Salvar').click();

    cy.get('.modal-title:contains("Informações de cadastro incompletas")').should('be.visible');
    cy.contains('Salvar incompleto').click();
    cy.url().should('include', '/base-de-dados');
    cy.contains(acolhimentoNome).should('be.visible');
  });

  it('should create a new acolhimento with complete form and navigate to ficha', () => {
    cy.createCompleteAcolhimento().then(acolhimentoNome => {
      cy.url().should('include', '/base-de-dados');
      cy.contains(acolhimentoNome).should('be.visible');
    });
  });

  it('should edit acolhimento details', () => {
    cy.createCompleteAcolhimento().then(acolhimentoNome => {
      cy.url().should('include', '/base-de-dados');
      cy.contains(acolhimentoNome).should('be.visible');

      const newNome = chance.name();
      const newEmail = chance.email();

      cy.contains(acolhimentoNome).click(); 
      cy.url().should('include', '/base-de-dados/ficha'); 

      cy.contains('Editar cadastro').click();
      cy.url().should('include', '/editar');

      cy.get('#nomeCompleto').clear();
      cy.contains('Salvar').click();
      cy.url().should('include', 'ficha/editar');

      cy.get('#nomeCompleto').clear().type(newNome);
      cy.get('#email').clear();
      cy.contains('Salvar').click();
      cy.get('.modal-title:contains("Informações de cadastro incompletas")').should('be.visible');
      cy.contains('Voltar e completar').click();

      cy.get('#email').clear().type(newEmail);
      cy.contains('Salvar').click();

      cy.url().should('include', '/base-de-dados');
      cy.contains(newNome).should('be.visible');
      cy.contains(newEmail).should('be.visible');
    })
  });

  it('should navigate to a specific demanda tab and assign a user', () => {
    cy.createCompleteAcolhimento().then(result => {
      cy.url().should('include', '/base-de-dados');
      cy.contains(result.nome).should('be.visible');

      cy.contains(result.nome).click();
      
      cy.contains(result.demandas[0]).click();

      cy.get('.card-header:contains("Informações do Profissional Responsável")').should('not.exist');
      cy.contains('Atribuir demanda').click();

      cy.get('#usuario').select('admin1');

      const usuarioNome = 'admin';
      // cy.get('select').select();
      // cy.contains('Salvar').click();

      // cy.get('.card-header:contains("Informações do Profissional Responsável")').should('be.visible');
      // cy.contains(usuarioNome).should('be.visible');
    });
    
  });
});