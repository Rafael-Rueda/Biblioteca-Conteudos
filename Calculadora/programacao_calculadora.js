var linhas_calculadora =  document.querySelectorAll('tr');
var n_calculadora;
var codigo_calculadora = '';
var userview_calculadora = document.getElementById('userview_calculadora').firstChild
var limpar_userview_calculadora = false;

// 1 linha
linhas_calculadora.item(0).firstElementChild.addEventListener('click', function () {
 n_calculadora = '% '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += '%'
 lercodigo()

})
linhas_calculadora.item(0).firstElementChild.nextElementSibling.addEventListener('click', function () {
 n_calculadora = 'CE '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 lercodigo()
})
linhas_calculadora.item(0).firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', function () {
 n_calculadora = 'C '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 lercodigo()
})
linhas_calculadora.item(0).firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.addEventListener('click', function () {
 n_calculadora = '< '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 lercodigo()
})


// 2 linha
linhas_calculadora.item(1).firstElementChild.addEventListener('click', function () {
 n_calculadora = '1/x '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue = '1 / ' + userview_calculadora.nodeValue
 lercodigo()
})
linhas_calculadora.item(1).firstElementChild.nextElementSibling.addEventListener('click', function () {
 n_calculadora = 'x2 '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += '²'
 lercodigo()
})
linhas_calculadora.item(1).firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', function () {
 n_calculadora = 'sqrt '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue = '√' + userview_calculadora.nodeValue
 lercodigo()
})
linhas_calculadora.item(1).firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.addEventListener('click', function () {
 n_calculadora = '/ '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += ' / '
 lercodigo()
})


// 3 linha
linhas_calculadora.item(2).firstElementChild.addEventListener('click', function () {
 n_calculadora = '7 '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += '7'
 lercodigo()
})
linhas_calculadora.item(2).firstElementChild.nextElementSibling.addEventListener('click', function () {
 n_calculadora = '8 '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += '8'
 lercodigo()
})
linhas_calculadora.item(2).firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', function () {
 n_calculadora = '9 '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += '9'
 lercodigo()
})
linhas_calculadora.item(2).firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.addEventListener('click', function () {
 n_calculadora = 'x '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += ' x '
 lercodigo()
})


// 4 linha
linhas_calculadora.item(3).firstElementChild.addEventListener('click', function () {
 n_calculadora = '4 '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += '4'
 lercodigo()
})
linhas_calculadora.item(3).firstElementChild.nextElementSibling.addEventListener('click', function () {
 n_calculadora = '5 '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += '5'
 lercodigo()
})
linhas_calculadora.item(3).firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', function () {
 n_calculadora = '6 '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += '6'
 lercodigo()
})
linhas_calculadora.item(3).firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.addEventListener('click', function () {
 n_calculadora = '- '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += ' - '
 lercodigo()
})


// 5 linha
linhas_calculadora.item(4).firstElementChild.addEventListener('click', function () {
 n_calculadora = '1 '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += '1'
 lercodigo()
})
linhas_calculadora.item(4).firstElementChild.nextElementSibling.addEventListener('click', function () {
 n_calculadora = '2 '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += '2'
 lercodigo()
})
linhas_calculadora.item(4).firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', function () {
 n_calculadora = '3 '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += '3'
 lercodigo()
})
linhas_calculadora.item(4).firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.addEventListener('click', function () {
 n_calculadora = '+ '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += ' + '
 lercodigo()
})


// 6 linha
linhas_calculadora.item(5).firstElementChild.addEventListener('click', function () {
 n_calculadora = '+/- '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 lercodigo()
})
linhas_calculadora.item(5).firstElementChild.nextElementSibling.addEventListener('click', function () {
 n_calculadora = '0 '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += '0'
 lercodigo()
})
linhas_calculadora.item(5).firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', function () {
 n_calculadora = ', '
 codigo_calculadora += n_calculadora
 if (limpar_userview_calculadora) {
     userview_calculadora.nodeValue = ''
     limpar_userview_calculadora = false;
 }
 userview_calculadora.nodeValue += ','
 lercodigo()
})
linhas_calculadora.item(5).firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.addEventListener('click', function () {
 n_calculadora = '= '
 codigo_calculadora += n_calculadora
 lercodigo()
})


// LEITOR DO CÓDIGO

function lercodigo() {
    var codigo_dividido = codigo_calculadora.trim().split(' ');
    var conta = 0.0;
    var conta2 = '';
    var it = 0;
    var decimalconta = 0.0;
    var cancelar = false;
    var igual = false;
    var tamanho = parseInt(codigo_dividido.length);

    function leroperadores() {
        switch (codigo_dividido[c + 1]) {
            case '7':
                conta2 = ((conta2).toString() + '7').toString()
                c++
                break;
            case '8':
                conta2 = ((conta2).toString() + '8').toString()
                c++
                break;
            case '9':
                conta2 = ((conta2).toString() + '9').toString()
                c++
                break;
            case '4':
                conta2 = ((conta2).toString() + '4').toString()
                c++
                break;
            case '5':
                conta2 = ((conta2).toString() + '5').toString()
                c++
                break;
            case '6':
                conta2 = ((conta2).toString() + '6').toString()
                c++
                break;
            case '1':
                conta2 = ((conta2).toString() + '1').toString()
                c++
                break;
            case '2':
                conta2 = ((conta2).toString() + '2').toString()
                c++
                break;
            case '3':
                conta2 = ((conta2).toString() + '3').toString()
                c++
                break;
            case '0':
                conta2 = ((conta2).toString() + '0').toString()
                c++
                break;
            case ',':
                conta2 = ((conta2).toString() + '.').toString()
                c++
                break;
            default:
                break;
        }
    }

    
    for (c = 0; c < (tamanho); c++) {
        switch (codigo_dividido[c]) {
            case '=':
                igual = true;
                break;
            case '%':
                conta = conta/100;
                break;
            case 'CE':
                conta = 0;
                break;
            case 'C':
                userview_calculadora.nodeValue = '0'
                conta = 0;
                break;
            case '<':
                decimalconta = (parseFloat(conta).toString() + '.0').toString()
                if (decimalconta.split('.')[1] == '0') {
                    conta = parseInt(parseFloat(conta) / 10)
                } else {
                    conta = parseInt(( conta * (Math.pow(10, decimalconta.split('.')[1].length)) ) / 10) / (Math.pow(10, decimalconta.split('.')[1].length - 1))
                }
                userview_calculadora.nodeValue = conta.toString();
                break;
            case '1/x':
                conta = 1/conta;
                break;
            case 'x2':
                conta = conta * conta;
                break;
            case 'sqrt':
                conta = Math.sqrt(conta);
                break;
            case '+/-':
                conta = conta * -1;
                break;
            default:
                break;
        }
        switch (codigo_dividido[c]) {
            case '7':
                conta = parseFloat(Number(conta).toString() + '7')
                break;
            case '8':
                conta = parseFloat(Number(conta).toString() + '8')
                break;
            case '9':
                conta = parseFloat(Number(conta).toString() + '9')
                break;
            case '4':
                conta = parseFloat(Number(conta).toString() + '4')
                break;
            case '5':
                conta = parseFloat(Number(conta).toString() + '5')
                break;
            case '6':
                conta = parseFloat(Number(conta).toString() + '6')
                break;
            case '1':
                conta = parseFloat(Number(conta).toString() + '1')
                break;
            case '2':
                conta = parseFloat(Number(conta).toString() + '2')
                break;
            case '3':
                conta = parseFloat(Number(conta).toString() + '3')
                break;
            case '0':
                conta = parseFloat(Number(conta).toString() + '0')
                break;
            default:
                break;
        }

        switch (codigo_dividido[c]) {
            case '/':
                for (num = c; num < tamanho ; num++) {
                    if (Number.isInteger(parseFloat(codigo_dividido[c + 1])) || codigo_dividido[c + 1] == ',') {
                        leroperadores()
                    } else {
                        break;
                    }
                }
                conta = parseFloat(conta) / parseFloat(conta2)
                conta2 = '';
                break;
            case 'x':
                for (num = c; num < tamanho ; num++) {
                    if (Number.isInteger(parseFloat(codigo_dividido[c + 1])) || codigo_dividido[c + 1] == ',') {
                        leroperadores()
                    } else {
                        break;
                    }
                }
                conta = parseFloat(conta) * parseFloat(conta2)
                conta2 = '';
                break;
            case '-':
                for (num = c; num < tamanho ; num++) {
                    if (Number.isInteger(parseFloat(codigo_dividido[c + 1])) || codigo_dividido[c + 1] == ',') {
                        leroperadores()
                    } else {
                        break;
                    }
                }
                conta = parseFloat(conta) - parseFloat(conta2)
                conta2 = '';
                break;
            case '+':
                for (num = c; num < tamanho ; num++) {
                    if (Number.isInteger(parseFloat(codigo_dividido[c + 1])) || codigo_dividido[c + 1] == ',') {
                        leroperadores()
                    } else {
                        break;
                    }
                }
                conta = parseFloat(conta) + parseFloat(conta2)
                conta2 = '';
                break;
            case ',':
                conta = Number(conta).toString() + '.'
                for (num = c; num < tamanho ; num++) {
                    if (Number.isInteger(parseFloat(codigo_dividido[c + 1]))) {
                        leroperadores()
                    } else {
                        conta2 = ((conta2).toString() + '0').toString()
                        break;
                    }
                }
                conta = parseFloat(conta.toString() + conta2.toString())
                conta2 = '';
                break;
            default:
                break;
        }
        if (igual) {
            userview_calculadora.nodeValue = conta
            codigo_calculadora = ''
            limpar_userview_calculadora = true;
            igual = false;
            break;
        }
    }
    document.getElementById('resultado_calculadora').firstChild.nodeValue = conta
    
}
