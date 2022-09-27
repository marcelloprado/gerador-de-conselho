

const idConselho = document.getElementById('id-conselho');

const descricaoConselho = document.getElementsByClassName('texto-conselho');

const botao = document.getElementById('btn');

botao.addEventListener('click', () => {

    async function mostrarConselho() {
        const url = 'https://api.adviceslip.com/advice';
        const resposta = await fetch(url);
        const json = await resposta.json();
        const pegandoConselho = json.slip.advice;
        const pegandoId = json.slip.id;

        idConselho.innerHTML = `Advice #${pegandoId}`;
        descricaoConselho[0].innerHTML = pegandoConselho;
    }
    mostrarConselho();
    
});
