//NAV -------------------------------------------------------------------------------------------------------------- NAV
let chave_navI = true;
export function navI() {
    const $nav = document.querySelector('nav');
    const $header = document.querySelector('header');
    if (chave_navI) {
        $nav.style.display = 'none';
        $header.style.position = 'absolute';
        $header.firstElementChild.nextElementSibling.style.display = 'none';
        chave_navI = false;
        return;

    }
    else {
        $nav.style.display = 'block';
        $header.style.position = 'static';
        $header.firstElementChild.nextElementSibling.style.display = 'block';
        chave_navI = true;
        return;
    }
}