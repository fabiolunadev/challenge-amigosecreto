let nomes = [];
let nomeSorteado;

// Função para adicionar nomes
function adicionarNome() {
    let nomeInput = document.getElementById('nome');
    let nome = nomeInput.value.trim(); // Pega o valor do input e remove espaços em branco
    if (nome) {
        nomes.push(nome);
        nomeInput.value = ''; // Limpa o campo de entrada
        validarEntrada(); // Atualiza a lista de nomes exibida
    } else {
        alert('Por favor, insira um nome.');
    }
}

// Função para validar a entrada dos nomes na lista
function validarEntrada() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    nomes.forEach((nome) => {
        let li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

// Função para gerar um nome aleatório
function gerarNomeAleatorio() {
    if (nomes.length === 0) {
        alert('A lista está vazia. Adicione nomes antes de sortear.');
        return null; // Retorna null se a lista estiver vazia
    } else {
        let randomIndex = Math.floor(Math.random() * nomes.length);
        return nomes[randomIndex]; // Retorna o nome sorteado
    }
}

// Função para mostrar o nome sorteado
function sortearNome() {
    nomeSorteado = gerarNomeAleatorio();
    if (nomeSorteado) {
        let resultado = document.getElementById('resultado');
        resultado.textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita o botão de reiniciar
    }
}

// Função para limpar o campo
function limparCampo() {
    let nomeInput = document.querySelector('input');
    nomeInput.value = '';
}
