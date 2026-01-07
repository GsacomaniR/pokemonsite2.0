document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function () {
        const expandido = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';

        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
        botaoDeAcessibilidade.setAttribute('aria-expanded', String(!expandido));
    });

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1;
    const TAMANHO_MIN = 0.8;
    const TAMANHO_MAX = 1.5;

    aumentaFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte < TAMANHO_MAX) {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte.toFixed(1)}rem`;
        }
    });

    diminuiFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte > TAMANHO_MIN) {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte.toFixed(1)}rem`;
        }
    });

    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');
    });

    // ScrollReveal com respeito a acessibilidade
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        ScrollReveal().reveal('#inicio', { delay: 300 });
        ScrollReveal().reveal('#pokemon', { delay: 300 });
        ScrollReveal().reveal('#galeria', { delay: 300 });
        ScrollReveal().reveal('#contato', { delay: 300 });
    }
});
