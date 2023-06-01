//o arquivo seja renderizado após o DOM
document.addEventListener('DOMContentLoaded', function() { 
//adicionar um clique no evento  
 var botoes = document.querySelectorAll('.Teclado input');
    botoes.forEach(function(botao) {
        botao.addEventListener('click', function() {
            //obter o valor clicado
            var valorBotao = botao.value;
            var telefone = document.querySelector('input[type="tel"]');
            //adicionar o valor na caixa do telefone
            telefone.value += valorBotao;
        });
    });
});