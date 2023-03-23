import { useContext, useEffect, useRef } from 'react'
import styles from '../Sass/styles.module.scss'

import logoimg from '../Images/logo.png'
import logoimg2 from '../Images/imglogo.png'

import { useExpRet } from '../Hooks/expret';
import { useMobileMenu } from '../Hooks/mobilemenu';
import { MobileMenuContext } from '../Common/mobileconteudo';


export default function Navbar_v01_build() {
    const navbar = useRef<HTMLDivElement>(null);
    const { MobileMenu } = useMobileMenu(styles);
    const { mobilemenuI, setmobilemenu } = useContext(MobileMenuContext);

    useEffect(() => {
        const elemento = navbar.current as HTMLElement
        const { expandir, retrair } = useExpRet(elemento, styles);

        function expandirel() {
            expandir();
        };

        function retrairel(event: MouseEvent) {
            const dimensoes = elemento.getBoundingClientRect();
            const mx = event.clientX
            const my = event.clientY

            if (my >= dimensoes.bottom) {
                retrair()
            }
        };

        Array.from(document.querySelectorAll(`.${styles.conteudo}`)).forEach(item => {
            item.addEventListener('mouseover', (e) => { e.stopPropagation() })
        });

        elemento.addEventListener('mouseover', expandirel);

        elemento.addEventListener('mouseleave', retrairel);

        window.addEventListener('resize', () => {
            if (window.innerWidth < 1138) {
                elemento.removeEventListener('mouseover', expandirel)
            } else {
                elemento.addEventListener('mouseover', expandirel)
            }
        });

    }, [])

    return (
        <nav>
            <div ref={navbar} className={styles.navbar}>

                <div className={styles.imagemlogo}>
                    <img src={logoimg2} alt="Logo" />
                    <p>demar Iotti</p>
                </div>

                <div className={styles.logo}>
                    <img src={logoimg} alt="Logo" />
                </div>

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

            </div>

            <div className={styles.navbarmobile}>

                <div className={styles.mobilelogo}>
                    <img src={logoimg} alt="Logo" />
                </div>

                <div className={styles.mobilecontent}>
                    <ul>
                        <li id={'navbar_01_mobileid1'} onClick={MobileMenu} >
                            <h3>Home</h3>
                        </li>
                        <li id={'navbar_01_mobileid2'} onClick={MobileMenu} onTouchStart={() => {setmobilemenu({id: ''})}}>
                            <h3>Buffet</h3>
                            <div className={styles.mobileliconteudo}>
                                <p>Ir para página</p>
                                <p>Solicite um orçamento</p>
                                <p>Galeria</p>
                            </div>
                        </li>
                        <li id={'navbar_01_mobileid3'} onClick={MobileMenu} >
                            <h3>E-Carne</h3>
                            <div className={styles.mobileliconteudo}>
                                <p>Ir para página</p>
                                <p>Solicite um orçamento</p>
                                <p>Galeria</p>
                            </div>
                        </li>
                        <li id={'navbar_01_mobileid4'} onClick={MobileMenu} >
                            <h3>Bebidas</h3>
                            <div className={styles.mobileliconteudo}>
                                <p>Ir para página</p>
                                <p>Solicite um orçamento</p>
                                <p>Galeria</p>
                            </div>
                        </li>
                        <li id={'navbar_01_mobileid5'} onClick={MobileMenu} >
                            <h3>Contato</h3>
                            <div className={styles.mobileliconteudo}>
                                <p>Whatsapp</p>
                                <p>Facebook</p>
                                <p>Instagram</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>

    )
}
