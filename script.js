const form = document.getElementById("form")
const imojiAprovado = '<img src="./imagens/party.png" alt="Imoji festejando">'
const imojiReprovado = '<img src="./imagens/sad.png" alt="Imoji triste">'
const spanAprovado = '<span class="aprovado">Aprovado</span>'
const spanReprovado = '<span class="reprovado">Reprovado</span>'

const atividade = []
const notas = []

let linhas = ""

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionarLista()
    renderizarTarefa()
    atualizaMediaFinal()
})

function adicionarLista() {
    const inputMateria = document.getElementById("materia")
    const inputNota = document.getElementById("nota")

    atividade.push(parseFloat(inputMateria.value))
    notas.push(parseFloat(inputNota.value))

    let linha = '<tr>'
    linha += `<td>${inputMateria.value}</td>`
    linha += `<td>${inputNota.value}</td>`
    linha += `<td>${inputNota.value >= 7 ? imojiAprovado : imojiReprovado}</td>`
    linha += `</tr>`

    linhas += linha

    inputMateria.value = ''
    inputNota.value = ''
}

function renderizarTarefa() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    const media = document.getElementById("media-final-valor")
    const resultado = document.getElementById("resultado-final")
    
    media.innerHTML = mediaFinal
    resultado.innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado

}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}