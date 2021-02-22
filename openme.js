document.getElementById('openme').addEventListener('click', clicou)

function clicou() {
    var navmenu = document.getElementById('menu')
    var openme = document.getElementById('openme')
    var barras = document.getElementsByClassName('openbar')
    var openball = document.getElementById('openball')
    // Abrir / Fechar
    if (navmenu.getAttribute('class') == 'fechado') {
        navmenu.className = 'aberto';
        barras.item(0).style = 'background-color: rgba(0, 0, 0, 0);'
        barras.item(2).style = 'background-color: rgba(0, 0, 0, 0);'
        openball.style = 'border-color: gray;'

    } else {
        navmenu.className = 'fechado'
        barras.item(0).style = 'background-color: gray;'
        barras.item(2).style = 'background-color: gray;'
        openball.style = 'border-color: rgba(0, 0, 0, 0);'
    }
}