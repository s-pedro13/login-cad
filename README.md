# Projeto de Cadastro e Login
Este projeto inclui uma interface de usuário para login e cadastro de usuários, com funcionalidades para manipulação e visualização de dados.

## Funcionalidades
### Tela de Login
- Permite que o usuário entre com seu e-mail e senha.
- Um botão "ACESSAR" redireciona para a tela de cadastro.
### Tela de Cadastro
- Campos para inserir nome e e-mail.
- Botão "SALVAR" para adicionar o usuário à lista.
- Tabela que exibe a lista de usuários cadastrados com opções para editar e excluir registros.

## Estrutura do Projeto
- `login.html`: Página de login.
- `cadastro.html`: Página de cadastro.
- `controller.js`: Arquivo JavaScript que contém a lógica para manipulação dos dados de cadastro e interação com a tabela.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript
- Bootstrap (v5.0.2)

## Mudanças Recentes
1. **Adição de Campo de E-mail na Tela de Cadastro**:
  - Foi adicionado um campo para o e-mail ao lado do campo de nome de usuário na tela de cadastro. Agora, o usuário deve inserir tanto o nome quanto o e-mail para concluir o cadastro.
2. **Atualização das Funções de Manipulação de Dados**:
  - **Função `salvarUser`**: Agora coleta e armazena tanto o nome quanto o e-mail do usuário. Se ambos os campos forem preenchidos, os dados são adicionados à lista e a tabela é atualizada.
  - **Função `criaLista`**: Atualizada para exibir o nome e o e-mail na tabela, além dos botões de editar e excluir.
  - **Função `editar`**: Permite a edição do nome e do e-mail do usuário na tabela.
  - **Função `excluir`**: Remove um usuário da lista, ajustando a tabela para refletir a exclusão.
3. **Validação de Campos**:
  - Adicionada validação para garantir que ambos os campos, nome e e-mail, sejam preenchidos antes de adicionar um usuário à lista.

## Como Executar
1. Abra o arquivo `login.html` em um navegador para acessar a tela de login.
2. Clique no botão "ACESSAR" para ser redirecionado à tela de cadastro (`cadastro.html`).
3. Na tela de cadastro, insira o nome e o e-mail nos campos apropriados e clique em "SALVAR" para adicionar à lista.
4. A tabela será atualizada com os dados inseridos, e você poderá editar ou excluir entradas conforme necessário.

## Autor
Este projeto foi desenvolvido por João Pedro Gonçalves.