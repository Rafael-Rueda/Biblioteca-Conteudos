import { useEffect, useState } from 'react';
import styles from './styles/styles.module.css';
import logo from './images/rrlogo.png';

export function Navbarv02() {
    const [expanded, setExpanded] = useState(false);
    const [displayed, setDisplayed] = useState(false);
    const [bottomNav, setBottomNav] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollPosition = document.documentElement.scrollTop || window.scrollY;

            if (scrollPosition >= 60) {
                setBottomNav(true);
            } else {
                setBottomNav(false);
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <>
            <nav onMouseLeave={
                () => { setExpanded((prev) => false); setDisplayed((prev) => false); }
            }
                onMouseEnter={
                    () => { setExpanded((prev) => true); setDisplayed((prev) => true); }
                }
                className={`${styles.navbarv02} ${expanded ? styles.expanded : styles.collapsed}`}
            >   
                <div className={`${styles.logodiv} ${!displayed ? styles.displayed : styles.notdisplayed}`}>
                    <img className={`${styles.logo}`} src={logo} alt="Logo" />
                </div>
                <ul className={`${expanded ? styles.expanded : styles.collapsed}`}>
                    <li>
                        <div className={styles.item}>
                            <h3>Home</h3>
                            <div className={`${styles.content} ${displayed ? styles.displayed : styles.notdisplayed}`}>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.separate} ${displayed ? styles.displayed : styles.notdisplayed}`}><span></span><span></span></div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <h3>About</h3>
                            <div className={`${styles.content} ${displayed ? styles.displayed : styles.notdisplayed}`}>
                                <p>Me</p>
                                <p>Studies</p>
                                <p>Projects</p>
                                <p>Draws</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.separate} ${displayed ? styles.displayed : styles.notdisplayed}`}><span></span><span></span></div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <h3>Contact</h3>
                            <div className={`${styles.content} ${displayed ? styles.displayed : styles.notdisplayed}`}>
                                <p>Mail</p>
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>

            {bottomNav ? <p onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});}} className={styles.backtotop}>Back to top</p> : ''}
        </>
    )
}