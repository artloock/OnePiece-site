const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth' })
        }

        // Contorno personagem selecinado
        remverSelecaoDoPersonagem();

        personagem.classList.add('selecionado');
        // Imagem grande personagem selecionado
        alterarImagemPersonagemGrande(personagem);
        //nome personagem selecionado
        alterarNomePersonagemSelecionado(personagem);
        //Alterar descrição
        alterarDescricaoPersonagemSelecionado(personagem);
    })
})

function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemGrande(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/Transparent-${idPersonagem}-Background.png`;
}

function remverSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
