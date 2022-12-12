linhas_calculadora.item(0).firstElementChild.nextElementSibling.addEventListener('click', function () {
    conta = 0;
    conta2 = 0;
    it = 0;
    cancelar = false;
    igual = false;
    codigo_calculadora = ''
    document.getElementById('resultado_calculadora').firstChild.nodeValue = '0'
    document.getElementById('userview_calculadora').firstChild.nodeValue = ' '
})

function fechar_calculadora_funcao() {
        document.getElementById('calculadora').style = 'display: none;'
        document.getElementById('abrir_calculadora').style = 'bottom: 2px;'
}

function abrir_calculadora_funcao() {
        document.getElementById('calculadora').style = 'display: block;'
        document.getElementById('abrir_calculadora').style = 'bottom: 371px;'
}
