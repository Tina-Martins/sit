# SIT - Sistema Integrado da Tina
Este repositório contém o código-fonte do Sistema Integrado da Tina (SIT), uma aplicação para gerenciamento da Casa de Referência da Mulher Tina Martins, dedicada ao acolhimento de mulheres em situação de violência doméstica em Belo Horizonte.

## Visão Geral
O SIT é uma ferramenta essencial para facilitar o acompanhamento das acolhidas da casa, fornecendo uma plataforma centralizada para gerenciar os diversos tipos de atendimentos e auxílios que as mulheres podem receber, incluindo suporte psicológico, jurídico e assistência social.

## Funcionalidades
O SIT tem como objetivo principal oferecer um cadastro das mulheres acolhidas pela casa, permitindo registros dos atendimentos e serviços prestados. Além disso, o sistema proporciona uma gestão da agenda da casa, possibilitando o cadastro de eventos em um calendário, com especificação de uma janela de horários, simplificando assim a administração da disponibilidade dos espaços e eventos.

## Tecnologias Utilizadas
- Bootstrap: Framework de front-end que permite criar sites e aplicativos web responsivos e estilizados de forma rápida e eficiente. Ele combina CSS e JavaScript para estilizar elementos de páginas escritas em HTML
- Angular: Framework typescript para a criação de aplicativos dinâmicos e interativos da web.
- Banco de dados: Cloud firestore do Firebase para utilização de recursos em nuvem a baixo custo.

## Desenvolvedores
- (Estilização) Luiz Henrique Romanhol Ferreira /@LuizRomanhol
- (Front-end) Victor Henrique Silva Ribeiro / @VictorHenrique317
- (Back-end) Victor Vieira Brito Amaral Pessoa / @VictorKids
- (Back-end) Henrique Lisboa de Sousa / @hlisboasousa

# Backlogs do produto
1- Como usuário eu gostaria de cadastrar um novo acolhimento.

2- Como usuário eu gostaria de visualizar a lista de acolhimentos.

3- Como usuário eu gostaria de classificar o status dos acolhimentos como Ativo e Encerrado

4- Como usuário eu gostaria de filtrar os acolhimentos pelo status.

5- Como usuário eu gostaria de buscar um acolhimento pelo nome da acolhida.

6- Como usuário eu gostaria de cadastrar demandas de Psicologia, Jurídico, Assitência Social e Abrigamento.

7- Como usuário eu gostaria de filtrar os acolhimentos pelo tipo de demanda.

8- Como usuário eu gostaria de cadastrar psicológos, assistentes sociais e advogados.

9- Como usuário eu gostaria de excluir psicólogos, assistentes sociais e advogados.

10- Como usuário eu gostaria de atribuir acolhimentos a um ou mais psicólogos, assistente sociais e advogados.

11- Como usuário eu gostaria de cadastrar um novo atendimento, com a data do dia atual, um campo de texto e o responsável pelo atendimento.

12- Como usuário eu gostaria de visualizar o histórico de atendimentos realizados para um acolhimento.

13- Como usuário eu gostaria de visualizar o calendário com eventos marcados.

14- Como usuário eu gostaria de cadastrar novos eventos em datas e horários específicos.

15- Como usuário eu gostaria de excluir um evento.

16- Como usuario gostaria de utilizar um sistema que seja visualmente agradavel e com alta usabilidade 

# Backlogs do sprint
0- Infraestrutura
- Criar conta do firebase [Henrique Lisboa]
- Criar banco de dados firestore [Henrique Lisboa]
- Criar modelagem de banco de dados (NoSQL)
- Configurar integração do angular com firebase tools [Henrique Lisboa]
- Configurar integração com o banco de dados no backend [Henrique Lisboa]
- Implementar pipelines para deploy automatizado (frontend e backend). [Henrique Lisboa]
- Instalar node.js, Express e Axios [Victor Vieira]
  
1- Como usuário eu gostaria de cadastrar um novo acolhimento.
- Implementar menu de cadastro de acolhimento [Victor Henrique]
- Implementar o formulário para receber os dados do cadastro [Victor Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Fazer com que a pagina utilize elementos do Bootstrap. [Luiz Henrique]
- Criar uma rota do formulário ao banco de dados [Victor Vieira]

2- Como usuário eu gostaria de visualizar a lista de acolhimentos.
- Implementar menu de visualização de acolhimentos [Victor Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Criar uma rota do banco de dados á visualização [Victor Vieira]

3- Como usuário eu gostaria de classificar o status dos acolhimentos como Ativo e Encerrado
- Implementar visualização de um acolhimento único [Victor Henrique & Luiz Henrique]
- Dentro da visualização de um acolhimento único, implementar opção para mudar o status [Victor Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Criar uma rota até o banco de dados para mudar pontualmente o status [Victor Vieira]

4- Como usuário eu gostaria de filtrar os acolhimentos pelo status.
- Dentro do menu de visualização de acolhimentos, implementar filtragem por status [Victor Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Criar uma rota entre a requisição de filtragem e o banco de dados [Victor Vieira]
- Realizar a query para o banco de dados considerando a filtragem [Victor Vieira]

5- Como usuário eu gostaria de buscar um acolhimento pelo nome da acolhida.
- Dentro do menu de visualização de acolhimentos, implementar busca por nome [Victor Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Criar uma rota do banco de dados a visualização [Victor Vieira]

6- Como usuário eu gostaria de cadastrar demandas de Psicologia, Jurídico, Assitência Social e Abrigamento.
- Dentro da visualização de um acolhimento único, implementar opção para atribuição de demandas [Victor Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Criar uma rota do fromulário ao banco de dados [Victor Vieira]
- Organizar os dados do cadastro para envio padronizado para o banco de dados [Victor Vieira]

7- Como usuário eu gostaria de filtrar os acolhimentos pelo tipo de demanda.
- Dentro do menu de visualização de acolhimentos, implementar filtragem por tipo de demanda [Victor Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Adicionar ícones para cada tipo de demanda para aumentar a usabilidade [Luiz Henrique]
- Criar uma rota do banco de dados a visualização [Victor Vieira]
- Realizar a query para o banco de dados considerando a filtragem [Victor Vieira]

8- Como usuário eu gostaria de cadastrar psicológos, assistentes sociais e advogados.
- Implementar menu de cadastro de psicológos, assistentes sociais e advogados [Victor Henrique]
- Para cada menu de cadastro de psicológos, assistentes sociais e advogados implementar um formulário para receber os dados [Victor Henrique]
- Adicionar o formulario e seus campos às respectivas classes de estilo que forem apropriadas. [Luiz Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Criar uma rota do formulário ao banco de dados [Victor Vieira]

9- Como usuário eu gostaria de excluir psicólogos, assistentes sociais e advogados.
- Implementar menu de visualização de psicológos, assistentes sociais e advogados [Victor Henrique & Luiz Henrique]
- Dentro do menu de visualização de psicológos, assistentes sociais e advogados, implementar opção de exclusão [Victor Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Criar uma rota do formulário ao banco de dados [Victor Vieira]

10- Como usuário eu gostaria de atribuir acolhimentos a um ou mais psicólogos, assistente sociais e advogados.
- Dentro do menu de cadastro de acolhimento, implementar opção para atribuição de múltiplos profissionais [Victor Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Criar uma rota até o banco de dados para atualizar dados dos acolhimentos [Victor Vieira]

11- Como usuário eu gostaria de cadastrar um novo atendimento, com a data do dia atual, um campo de texto e o 
responsável pelo atendimento.
- Dentro do menu de visualização de acolhimento único, implementar opção para cadastrar um novo atendimento [Victor Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Criar uma rota do formulário até o banco de dados [Victor Vieira]
- Associar a data atual com o pacotes de dados a serem enviados ao banco de dados [Victor Vieira]
- Implementar lógica de agendamento de horários [Henrique Lisboa]

12- Como usuário eu gostaria de visualizar o histórico de atendimentos realizados para um acolhimento.
- Dentro do menu de visualização de acolhimento único, implementar visualização de atendimentos realizados [Victor Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Criar uma rota do banco de dados até a visualização [Victor Vieira]
- Organizar o histórico cronologicamente para melhor visualização [Victor Vieira]

13- Como usuário eu gostaria de visualizar o calendário com eventos marcados.
- Implementar menu de calendário [Victor Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Criar uma rota do banco de dados até a visualização [Victor Vieira]

14- Como usuário eu gostaria de cadastrar novos eventos em datas e horários específicos.
- Dentro do menu de calendário, implementar opção para cadastro de eventos [Victor Henrique]
- Criar formulário para receber os dados do evento [Victor Henrique & Luiz Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Implementar lógica de agendamento de horários [Henrique Lisboa]
- Criar uma rota do formulário ao banco de dados, associando os dados do evento [Victor Vieira]

15- Como usuário eu gostaria de excluir um evento.
- Dentro do menu de calendário, implementar opção para exclusão de evento [Victor Henrique]
- Adicionar as mudancas de estilo necessárias. [Luiz Henrique]
- Criar uma rota do formulário até o banco de dados [Henrique Lisboa]
  
16- Como usuario gostaria de utilizar um sistema que seja visualmente agradavel e com alta usabilidade
- Para cada elemento visual do sistema, adicioná-lo à classe de Bootstrap apropriada. [Luiz Henrique]
- Fazer com que as configurações dos elementos Bootstrap sigam o esquema de cores previsto no protótipo Figma. [Luiz Henrique]
- Fazer com que os elementos nas paginas estejam bem dispostos de forma tornar o uso intuitivo [Luiz Henrique]-

# Figma
[https://www.figma.com/file/DxPe8PoIhkBFxHgBAPy2qe/SIT---MVP?type=design&node-id=322-2650&mode=design](https://www.figma.com/file/DxPe8PoIhkBFxHgBAPy2qe/SIT---MVP?type=design&node-id=322-2650&mode=design)

Arquitetura Hexagonal
A arquitetura do SIT foi desenvolvida seguindo os princípios da Arquitetura Hexagonal, também conhecida como Arquitetura de Portas e Adaptadores, visando isolar a lógica de negócio das dependências externas. A estrutura do projeto reflete esta abordagem, conforme descrito a seguir:

Estrutura de Pastas

![Captura de tela 2024-06-24 173246](https://github.com/Tina-Martins/sit/assets/53982954/f9d1a39b-2cb2-4cf9-8a67-1d018f36d5ce)


- src/core: Contém a lógica central da aplicação.
  - acompanhamentos/adapters: Adaptadores que se comunicam com as interfaces externas (controladores e repositórios).
      - controllers: Responsáveis por receber as requisições do usuário e encaminhá-las para os serviços apropriados.
        - AcolhimentoController.ts: Recebe as requisições HTTP relacionadas a acolhimentos e chama os serviços correspondentes para processá-las.
        - DemandaController.ts: Recebe as requisições HTTP relacionadas a demandas e chama os serviços correspondentes para processá-las.
      - repositories: Implementações dos repositórios que interagem com o banco de dados.
        - AcolhimentoRepository.ts: Contém a lógica para persistir e recuperar dados de acolhimentos no banco de dados.
        - DemandaRepository.ts: Contém a lógica para persistir e recuperar dados de demandas no banco de dados.
  - domain: Contém as entidades, enums e serviços que representam e manipulam os dados do domínio.
      - entities: Definições das entidades do domínio, que são representações dos objetos principais da aplicação.
        - Acolhimento.ts: Define a estrutura de dados e comportamento de um acolhimento.
        - Atendimento.ts: Define a estrutura de dados e comportamento de um atendimento.
        - Demanda.ts: Define a estrutura de dados e comportamento de uma demanda.
      - enums: Definições dos tipos enumerados utilizados na aplicação.
      - services: Serviços que contêm a lógica de negócio.
        - AcolhimentoService.ts: Contém a lógica de negócio para gerenciar acolhimentos, incluindo validações e regras específicas.
        - AtendimentoService.ts: Contém a lógica de negócio para gerenciar atendimentos.
        - DemandaService.ts: Contém a lógica de negócio para gerenciar demandas.
  - ports: Define as interfaces (portas) de entrada e saída da aplicação.
      - in: Interfaces que definem os contratos dos serviços, descrevendo as operações disponíveis para os controladores.
        - IAcolhimentoService.ts: Define os métodos que o serviço de acolhimentos deve implementar.
        - IAttendimentoService.ts: Define os métodos que o serviço de atendimentos deve implementar.
        - IDemandaService.ts: Define os métodos que o serviço de demandas deve implementar.
      - out: Interfaces que definem os contratos dos repositórios, descrevendo as operações disponíveis para os serviços.
        - IAcolhimentoRepository.ts: Define os métodos que o repositório de acolhimentos deve implementar.
        - IAttendimentoRepository.ts: Define os métodos que o repositório de atendimentos deve implementar.
          
Essa estrutura modular permite uma fácil manutenção e extensão do sistema, além de garantir que a lógica de negócio permaneça independente das tecnologias de implementação e das interfaces externas. Cada camada da aplicação é claramente separada, promovendo um design limpo e sustentável a longo prazo.
