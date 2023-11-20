const ml_m01a_button = document.querySelector('.ml_m01a').firstElementChild.firstElementChild.nextElementSibling
const ml_m01a_nav = document.querySelector('.ml_m01a')
let ml_m01a_aberto = true;

ml_m01a_button.addEventListener('mouseover', () => {
    if (ml_m01a_aberto) {
        ml_m01a_button.firstElementChild.firstElementChild.nextElementSibling.style.display = 'none'
        ml_m01a_button.firstElementChild.firstElementChild.style.cssText = 'transform: rotate(-45deg); width: 20px;'
        ml_m01a_button.firstElementChild.lastElementChild.style.cssText = 'transform: rotate(45deg); width: 20px;'
    } else {
        ml_m01a_button.firstElementChild.firstElementChild.nextElementSibling.style.display = 'none'
        ml_m01a_button.firstElementChild.firstElementChild.style.cssText = 'transform: rotate(45deg); width: 20px;'
        ml_m01a_button.firstElementChild.lastElementChild.style.cssText = 'transform: rotate(-45deg); width: 20px;'
    }

})

ml_m01a_button.addEventListener('mouseout', () => {
    ml_m01a_button.firstElementChild.firstElementChild.nextElementSibling.style.display = 'block'
    ml_m01a_button.firstElementChild.firstElementChild.style.cssText = 'transform: rotate(0deg); width: 30px; transition: none;'
    ml_m01a_button.firstElementChild.lastElementChild.style.cssText = 'transform: rotate(0deg); width: 30px; transition: none;'
})

ml_m01a_button.addEventListener('click', () => {
    if (ml_m01a_aberto) {
        ml_m01a_nav.style.cssText = 'transform: translate(-80%, 0);'
        ml_m01a_aberto = false;
    } else {
        ml_m01a_nav.style.cssText = 'transform: translate(0, 0);'
        ml_m01a_aberto = true;
    }
})