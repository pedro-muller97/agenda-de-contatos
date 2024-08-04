const form = document.getElementById('form-contato');
let linhas = '';

const nomes = [];
const telefones = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotalNumeros();

});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (telefones.includes(inputTelefoneContato.value)){
        alert(`O número: ${inputTelefoneContato.value} já está cadastrado!!`)
    } else {
        nomes.push(inputNomeContato.value);
        telefones.push(inputTelefoneContato.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td class='td-color'>${inputTelefoneContato.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;           
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function totalInput(){
    return nomes.length;
}

function atualizaTotalNumeros(){
    const total = totalInput();
    document.getElementById('total-numeros').innerHTML = total;
}