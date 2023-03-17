import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
export default function Navbar_v01() {
    const navbar = useRef<HTMLElement>(null);



    function expandir(el: HTMLElement) {
        el.classList.remove(styles.navbarcollapsed);
        el.classList.add(styles.navbarexpanded);

        //Logo
        const logo = el.firstElementChild as HTMLElement
        //Ulfechado
        const ulfechado = el.firstElementChild?.nextElementSibling as HTMLElement
        //Ul
        const ul = el.firstElementChild?.nextElementSibling?.nextElementSibling as HTMLElement
        //Conteudo
        const conteudo = Array.from(document.querySelectorAll(`.${styles.conteudo}`)) as HTMLElement[];
        //DivLI
        const firstChild = el.firstElementChild;
        const secondChild = firstChild?.nextElementSibling;
        const thirdChild = secondChild?.nextElementSibling;

        const divli = thirdChild ? Array.from(thirdChild.children) as HTMLElement[] : [];


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
    }

    function retrair(el: HTMLElement) {
        el.classList.remove(styles.navbarexpanded);
        el.classList.add(styles.navbarcollapsed);

        //Logo
        const logo = el.firstElementChild as HTMLElement
        //Ulfechado
        const ulfechado = el.firstElementChild?.nextElementSibling as HTMLElement
        //Ul
        const ul = el.firstElementChild?.nextElementSibling?.nextElementSibling as HTMLElement
        //Conteudo
        const conteudo = Array.from(document.querySelectorAll(`.${styles.conteudo}`)) as HTMLElement[];
        //DivLI
        const firstChild = el.firstElementChild;
        const secondChild = firstChild?.nextElementSibling;
        const thirdChild = secondChild?.nextElementSibling;

        const divli = thirdChild ? Array.from(thirdChild.children) as HTMLElement[] : [];


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
    }

    useEffect(() => {
        const elemento = navbar.current as HTMLElement

        function expandirel() {
            expandir(elemento);
        };

        function retrairel(event: MouseEvent) {
            const dimensoes = elemento.getBoundingClientRect();
            const mx = event.clientX
            const my = event.clientY

            if (my >= dimensoes.bottom) {
                retrair(elemento)
            }
        };

        Array.from(document.querySelectorAll(`.${styles.conteudo}`)).forEach(item => {
            item.addEventListener('mouseover', (e) => { e.stopPropagation() })
        })

        elemento.addEventListener('mouseover', expandirel)

        elemento.addEventListener('mouseleave', retrairel)

    }, [])

    return (
        <nav ref={navbar} className={styles.navbar}>
            <div className={styles.logo}>
                <img src="logo-empresas-iotti2.png" alt="Logo" />
            </div>

            <ul className={styles.ulfechado}>
            </ul>

            <ul className={styles.ul}>
                <li>
                    <div>
                        <h3>Home</h3>
                        <div className={styles.conteudo}>
                            <p>Página inicial</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>Buffet</h3>
                        <div className={styles.conteudo}>
                            <p>Ir para página</p>
                            <p>Solicite um orçamento</p>
                            <p>Galeria</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>E-Carne</h3>
                        <div className={styles.conteudo}>
                            <p>Ir para página</p>
                            <p>Solicite um orçamento</p>
                            <p>Galeria</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>Bebidas</h3>
                        <div className={styles.conteudo}>
                            <p>Ir para página</p>
                            <p>Solicite um orçamento</p>
                            <p>Galeria</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>Contato</h3>
                        <div className={styles.conteudo}>
                            <p>Whatsapp</p>
                            <p>Facebook</p>
                            <p>Instagram</p>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
