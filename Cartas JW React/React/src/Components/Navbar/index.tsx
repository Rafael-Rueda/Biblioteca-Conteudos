import React, { useEffect, useRef, useContext} from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { callAPI, CartasAPIContext } from '../../Common/API';
import styles from './navbar.module.scss';

function Navbar() {

    const {cartasAPI} = useContext(CartasAPIContext);

    const navbar: React.RefObject<HTMLDivElement> = useRef(null);
    const menu: React.RefObject<HTMLDivElement> = useRef(null);
    let trava: boolean = true;

    function abrirMenu() {
        if (navbar.current && menu.current && trava === false) {
            navbar.current.style.cssText = 'transform: translate(0);';

            (menu.current.firstElementChild as HTMLSpanElement).style.cssText = 'transform: rotate(-45deg); width: 18px;';
            (menu.current.lastElementChild as HTMLSpanElement).style.cssText = 'transform: rotate(45deg); width: 18px;';
            (menu.current.lastElementChild?.previousElementSibling as HTMLSpanElement).style.cssText = 'display: none;';

            trava = true;
        } else if (navbar.current && menu.current) {
            navbar.current.style.cssText = 'transform: translate(-250px);';

            (menu.current.firstElementChild as HTMLSpanElement).style.cssText = 'transform: rotate(0deg); width: 30px;';
            (menu.current.lastElementChild as HTMLSpanElement).style.cssText = 'transform: rotate(0deg); width: 30px;';
            (menu.current.lastElementChild?.previousElementSibling as HTMLSpanElement).style.cssText = 'display: inline;';

            trava = false;
        }
    }

    const cartas: React.RefObject<HTMLHeadingElement> = useRef(null);
    let trava2: boolean = true;

    function abrirCartas() {
        if (cartas.current && trava2 === true) {
            (cartas.current.firstElementChild as HTMLImageElement).style.cssText = 'transform: rotate(90deg); transition: .2s;';
            (cartas.current.nextElementSibling as HTMLUListElement).style.cssText = 'display: block;';

            trava2 = false;
        } else if (cartas.current) {
            (cartas.current.firstElementChild as HTMLImageElement).style.cssText = 'transform: rotate(0deg); transition: .2s;';
            (cartas.current.nextElementSibling as HTMLUListElement).style.cssText = 'display: none;';

            trava2 = true;
        }
    }

    useEffect(() => {
        abrirMenu();
    }, [])


    return (
        <nav ref={navbar} className={styles.navbar}>
            <div className={styles.navcontent}>
                <div className={styles.header}>
                    <h1>Cartas para campo</h1>
                </div>
                <div className={styles.main}>
                    <h1 onClick={abrirCartas} ref={cartas}>Cartas <BiRightArrow /> </h1>
                    <ul>
                        {cartasAPI.map((carta) => (
                            <li key={carta.id}><Link to={`carta/${carta.id}`}>Carta {carta.id}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className={styles.main}>

                </div>
            </div>
            <div ref={menu} onClick={abrirMenu} className={styles.menu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar;
