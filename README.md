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

# Backlogs do sprint
1- Como usuário eu gostaria de cadastrar um novo acolhimento.
- Implementar menu de cadastro de acolhimento [Victor Henrique]
- Implementar o formulário para receber os dados do cadastro [Victor Henrique]

2- Como usuário eu gostaria de visualizar a lista de acolhimentos.
- Implementar menu de visualização de acolhimentos [Victor Henrique]

3- Como usuário eu gostaria de classificar o status dos acolhimentos como Ativo e Encerrado
- Implementar visualização de um acolhimento único [Victor Henrique]
- Dentro da visualização de um acolhimento único, implementar opção para mudar o status [Victor Henrique]

4- Como usuário eu gostaria de filtrar os acolhimentos pelo status.
- Dentro do menu de visualização de acolhimentos, implementar filtragem por status [Victor Henrique]

5- Como usuário eu gostaria de buscar um acolhimento pelo nome da acolhida.
- Dentro do menu de visualização de acolhimentos, implementar busca por nome [Victor Henrique]

6- Como usuário eu gostaria de cadastrar demandas de Psicologia, Jurídico, Assitência Social e Abrigamento.
- Dentro da visualização de um acolhimento único, implementar opção para atribuição de demandas [Victor Henrique]

7- Como usuário eu gostaria de filtrar os acolhimentos pelo tipo de demanda.
- Dentro do menu de visualização de acolhimentos, implementar filtragem por tipo de demanda [Victor Henrique]

8- Como usuário eu gostaria de cadastrar psicológos, assistentes sociais e advogados.
- Implementar menu de cadastro de psicológos, assistentes sociais e advogados [Victor Henrique]
- Para cada menu de cadastro de psicológos, assistentes sociais e advogados implementar um formulário para receber os dados [Victor Henrique]

9- Como usuário eu gostaria de excluir psicólogos, assistentes sociais e advogados.
- Implementar menu de visualização de psicológos, assistentes sociais e advogados [Victor Henrique]
- Dentro do menu de visualização de psicológos, assistentes sociais e advogados, implementar opção de exclusão [Victor Henrique]

10- Como usuário eu gostaria de atribuir acolhimentos a um ou mais psicólogos, assistente sociais e advogados.
- Dentro do menu de cadastro de acolhimento, implementar opção para atribuição de múltiplos profissionais [Victor Henrique]

11- Como usuário eu gostaria de cadastrar um novo atendimento, com a data do dia atual, um campo de texto e o 
responsável pelo atendimento.

12- Como usuário eu gostaria de visualizar o histórico de atendimentos realizados para um acolhimento.

13- Como usuário eu gostaria de visualizar o calendário com eventos marcados.
- Implementar menu de calendário [Victor Henrique]

14- Como usuário eu gostaria de cadastrar novos eventos em datas e horários específicos.
- Dentro do menu de calendário, implementar opção para cadastro de eventos [Victor Henrique]
- Criar formulário para receber os dados do evento [Victor Henrqiue]

15- Como usuário eu gostaria de excluir um evento.
- Dentro do menu de calendário, implementar opção para exclusão de evento [Victor Henrique]