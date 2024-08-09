// Array para armazenar os dados dos usuários
var dadosLista = [];
// Função que armazena o nome na tela de cadastro
function salvarUser() {
   // Coleta o valor do campo de entrada do nome
   let nomeUser = document.getElementById('nomeUser').value;
   // Verifica se o campo de nome não está vazio
   if (nomeUser) {
       // Adiciona o nome do usuário ao array dadosLista
       dadosLista.push(nomeUser);
       console.log(dadosLista); // Exibe a lista de nomes no console para depuração
       criaLista(); // Atualiza a tabela com a nova lista de usuários
       // Limpa o campo de entrada após salvar
       document.getElementById('nomeUser').value = "";
   } else {
       // Exibe um alerta se o campo de nome estiver vazio
       alert("Favor informar o nome para cadastro");
   }
}
// Função para criar a lista de usuários e atualizar a tabela
function criaLista() {
   // Inicializa a variável tabela com o cabeçalho da tabela
   let tabela = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
   // Itera sobre o array dadosLista e adiciona cada nome à tabela
   for (let i = 0; i < dadosLista.length; i++) {
       // Adiciona uma linha para cada nome com botões para editar e excluir
       tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(" + i + ")'>Editar</button><button type='button' onclick='excluir(" + i + ")'>Excluir</button></td></tr>";
   }
   // Atualiza o conteúdo da tabela na página
   document.getElementById('tabela').innerHTML = tabela;
}
// Função para editar os dados da lista
function editar(i) {
   // Preenche o campo de entrada com o nome do usuário selecionado
   document.getElementById('nomeUser').value = dadosLista[i];
   // Remove o nome selecionado do array dadosLista
   dadosLista.splice(i, 1); // Remove o item editado da lista
   // Atualiza a tabela para refletir a lista modificada
   criaLista();
}
// Função para excluir nome da lista
function excluir(i) {
   // Remove a linha da tabela no índice especificado
   document.getElementById('tabela').deleteRow(i + 1); // Adiciona 1 ao índice devido à linha do cabeçalho
   // Limpa o campo de entrada
   document.getElementById('nomeUser').value = "";
   // Remove o nome selecionado do array dadosLista
   dadosLista.splice(i, 1); // Remove o item da lista
   // Atualiza a tabela para refletir a lista modificada
   criaLista();
}