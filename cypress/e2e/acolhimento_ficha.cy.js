import Chance from 'chance';
const chance = new Chance();

describe('Workflow da ficha de acolhimento', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/base-de-dados');
  });

  const demandas = ['Psicologia', 'Jurídico', 'Abrigamento'];

  it('Deve criar um novo acolhimento (incompleto)', () => {
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

  it('Deve criar um novo acolhimento (completo)', () => {
    cy.createCompleteAcolhimento().then(resultado => {
      cy.url().should('include', '/base-de-dados');
      cy.contains(resultado.nome).should('be.visible');
    });
  });

  it('Deve editar os detalhes de um acolhimento', () => {
    cy.createCompleteAcolhimento().then(resultado => {
      cy.url().should('include', '/base-de-dados');
      cy.contains(resultado.nome).should('be.visible');

      const newNome = chance.name();
      const newEmail = chance.email();

      cy.contains(resultado.nome).click(); 
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

  it('Deve navegar para um aba de demanda específica atribuir a um usuário e adicionar registros', () => {
    cy.createCompleteAcolhimento().then(result => {
      cy.url().should('include', '/base-de-dados');
      cy.contains(result.nome).should('be.visible');

      cy.contains(result.nome).click();
      
      cy.contains(result.demandas[0]).click();

      cy.get('.card-header:contains("Informações do Profissional Responsável")').should('not.exist');
      cy.contains('Atribuir demanda').click();

      const usuarioNome = 'adm1';
      cy.get('#usuario').select(usuarioNome);
      cy.contains('Salvar').click();

      cy.get('.card-header:contains("Informações do Profissional Responsável")').should('be.visible');
      cy.contains(usuarioNome).should('be.visible');

      cy.get('.card-header:contains("Informações do Profissional Responsável")').should('be.visible');
      cy.contains(usuarioNome).should('be.visible');

      const registro1Data = chance.date({ year: 2023 }).toISOString().slice(0, 10);
      const registro1Descricao = chance.sentence();
      cy.contains('+ Novo registro').click();
      cy.get('#dataRegistro').type(registro1Data);
      cy.get('#registro').type(registro1Descricao);
      cy.contains('Salvar').click();

      cy.get('.list-group-item').should('contain', registro1Descricao);

      const registro2Data = chance.date({ year: 2023 }).toISOString().slice(0, 10);
      const registro2Descricao = chance.sentence();
      cy.contains('+ Novo registro').click();
      cy.get('#dataRegistro').type(registro2Data);
      cy.get('#registro').type(registro2Descricao);
      cy.contains('Salvar').click();

      cy.get('.list-group-item').should('contain', registro1Descricao);
      cy.get('.list-group-item').should('contain', registro2Descricao);
    });
  });
});