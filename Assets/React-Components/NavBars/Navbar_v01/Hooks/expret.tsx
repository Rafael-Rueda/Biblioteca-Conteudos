export function useExpRet(el: HTMLElement, styles: Record<string, any>) {

    //Logo
    const logo = el.firstElementChild?.nextElementSibling as HTMLElement
    //Ulfechado
    const ulfechado = el.firstElementChild?.nextElementSibling as HTMLElement
    //Ul
    const ul = el.firstElementChild?.nextElementSibling?.nextElementSibling as HTMLElement
    //Conteudo
    const conteudo = Array.from(document.querySelectorAll(`.${styles.conteudo}`)) as HTMLElement[];
    //DivLI
    const firstChild = el.firstElementChild?.nextElementSibling?.nextElementSibling;
    const divli = firstChild ? Array.from(firstChild.children) as HTMLElement[] : [];
    //ImagemLogo
    const img_logo = document.querySelector(`.${styles.imagemlogo}`) as HTMLElement;



    function expandir() {
        el.classList.remove(styles.navbarcollapsed);
        el.classList.add(styles.navbarexpanded);


        ul.classList.add(styles.ulexpanded)
        conteudo.forEach(item => {
            item.classList.add(styles.conteudovisivel)
        })
        divli.forEach(item => {
            Array.from(item.children).forEach(item2 => {
                item2.classList.add(styles.divlivisivel)
            })
        })
        logo.classList.add(styles.logovisivel);
        img_logo.classList.add(styles.logoinvisivel);
    }



    function retrair() {
        el.classList.remove(styles.navbarexpanded);
        el.classList.add(styles.navbarcollapsed);

        ul.classList.remove(styles.ulexpanded)
        conteudo.forEach(item => {
            item.classList.remove(styles.conteudovisivel)
        })
        divli.forEach(item => {
            Array.from(item.children).forEach(item2 => {
                item2.classList.remove(styles.divlivisivel)
            })
        })
        logo.classList.remove(styles.logovisivel)
        img_logo.classList.remove(styles.logoinvisivel);
    }

    return {expandir, retrair}
}