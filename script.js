var nome = prompt('Qual seu nome completo...?')
var nome_aluno = document.querySelector('span.nome-aluno')
nome_aluno.innerHTML = 'Aluno(a): ' + nome 

function somar() {
    var nota1 = document.getElementById('nota1')
    var nota2 = document.getElementById('nota2')
    var res = document.getElementById('res')
    var nota1n = Number(nota1.value)
    var nota2n = Number(nota2.value)
    var s = ((nota1n * 2) + (nota2n *3))/5

    res.innerHTML = `Sua média final é ${s.toFixed(2)}`
}