// Array para armazenar os dados dos usuários
var dadosLista = [];
// Função que armazena o nome e email na tela de cadastro
function salvarUser() {
   // Obtém os valores inseridos nos campos de nome e e-mail
   let nomeUser = document.getElementById('nomeUser').value;
   let emailUser = document.getElementById('emailUser').value;
   // Validação dos campos: verifica se não estão vazios
   if (nomeUser && emailUser) {
       // Adiciona o nome e o e-mail ao array dadosLista
       dadosLista.push({ nome: nomeUser, email: emailUser });
       // Exibe a lista de nomes no console para depuração
       console.log(dadosLista);
       // Atualiza a tabela na página com a nova lista de usuários
       criaLista();
       // Limpa os campos de entrada após salvar
       document.getElementById('nomeUser').value = "";
       document.getElementById('emailUser').value = "";
   } else {
       // Exibe um alerta se algum campo estiver vazio
       alert("Favor informar o nome e o e-mail para cadastro");
   }
}
// Função para criar a lista de usuários e atualizar a tabela
function criaLista() {
   // Inicializa a variável tabela com o cabeçalho da tabela
   let tabela = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
   // Itera sobre o array dadosLista e adiciona cada nome e e-mail à tabela
   for (let i = 0; i < dadosLista.length; i++) {
       // Adiciona uma linha para cada usuário com botões para editar e excluir
       tabela += "<tr><td>" + dadosLista[i].nome + "</td><td>" + dadosLista[i].email + "</td><td><button type='button' onclick='editar(" + i + ")'>Editar</button><button type='button' onclick='excluir(" + i + ")'>Excluir</button></td></tr>";
   }
   // Atualiza o conteúdo da tabela na página com o HTML gerado
   document.getElementById('tabela').innerHTML = tabela;
}
// Função para editar os dados da lista
function editar(i) {
   // Preenche os campos de entrada com os dados do usuário selecionado para edição
   document.getElementById('nomeUser').value = dadosLista[i].nome;
   document.getElementById('emailUser').value = dadosLista[i].email;
   // Remove o item editado do array dadosLista
   dadosLista.splice(i, 1);
   // Atualiza a tabela para refletir a lista modificada após a edição
   criaLista();
}
// Função para excluir nome e e-mail da lista
function excluir(i) {
   // Remove a linha da tabela no índice especificado
   document.getElementById('tabela').deleteRow(i + 1); // Ajuste do índice para corresponder ao array
   // Remove o item excluído do array dadosLista
   dadosLista.splice(i, 1);
   // Atualiza a tabela para refletir a lista modificada após a exclusão
   criaLista();
}
// Adiciona um evento de clique ao botão de acesso para redirecionar para a página de cadastro
document.getElementById('acessarBtn').addEventListener('click', function() {
   window.location.href = 'cadastro.html'; // Altere para o caminho correto da página de cadastro
});