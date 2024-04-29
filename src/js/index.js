const BotaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const ImagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");


BotaoAlterarTema.addEventListener("click", () => {

    const ModoEscuroEstaAtivado = body.classList.contains("modo-escuro");

    if (ModoEscuroEstaAtivado) {
        body.classList.remove("modo-escuro");

        ImagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sol.png");

    } else {
        body.classList.add("modo-escuro");

        ImagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/lua.png");
    }
});