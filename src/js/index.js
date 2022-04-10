/*
quando clicar na stand da listagem temos que esconder o cartao de stand aberto e mostrar o cartao correspondente ao que foi selecionado na listagem

pra isso precisa trabalhar com 2 elementos
1- listagem
2- cartao stand

precisa criar 2 variaveis no JS para trabalhar com os elementos da tela

trabalhar com um evento de clique feito pelo usuario na listagem

- remover a classe aberto do cartao que esta aberto
- ao clicar na stand da listagem, pergar o id da stand clicada pra saber qual cartao mostrar
- remover a classe ativo que marca a stand selecionado
- adicionar a classe ativo no item da lista selecionado
*/

// precisa criar 2 variaveis no JS para trabalhar com os elementos da tela

const listaSelecaoStands = document.querySelectorAll ('.stand')
const standsCard = document.querySelectorAll('.cartao-stand')

listaSelecaoStands.forEach(stand => {
    ////trabalhar com um evento de clique feito pelo usuario na listagem 

    stand.addEventListener('click', () => {
        //- remover a classe aberto do cartao que esta aberto
        const cartaoStandAberto = document.querySelector('.aberto')
        cartaoStandAberto.classList.remove('aberto')

        //- ao clicar na stand da listagem, pergar o id da stand clicada pra saber qual cartao mostrar
        const idStandSelecionado = stand.attributes.id.value

        const idDoCartaoStandParaAbrir = 'cartao-' + idStandSelecionado
        const cartaoStandParaAbrir = document.getElementById(idDoCartaoStandParaAbrir)
        cartaoStandParaAbrir.classList.add('aberto')
        
        //- remover a classe ativo que marca a stand selecionado
        const standAtivoNaListagem = document.querySelector('.ativo')
        standAtivoNaListagem.classList.remove('ativo')

        //- adicionar a classe ativo no item da lista selecionado
        const standSelecionadoNaListagem = document.getElementById(idStandSelecionado)
        standSelecionadoNaListagem.classList.add('ativo')

    })
})