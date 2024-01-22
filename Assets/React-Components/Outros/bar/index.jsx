import { useEffect, useRef } from 'react';
import styles from './styles/styles.module.css';

export function Bar() {
    const el = useRef(null);

    useEffect(() => {
        function animation() {
            const balls = document.getElementsByClassName(styles.ball);

            const window900 = window.matchMedia('(max-width: 900px)').matches;

            if (!window900) {
                el.current.style.height = `${window.scrollY - 600 < 0 ? 0 : window.scrollY - 600 > 800 ? 800 : window.scrollY - 600}px`
                // If I want the ball movement effect:
                // el.current.style.transform = `translate(-50%, ${window.scrollY - 360 < 0 ? 0 : window.scrollY - 360 > 780 ? 780 : window.scrollY - 360}px)`

                if ((window.scrollY - 700) >= -60) {
                    balls[3].style.backgroundColor = 'var(--skill-bar)';
                } else {
                    balls[3].style.backgroundColor = 'var(--text-color)';
                }

                if ((window.scrollY - 700) >= 120) {
                    balls[0].style.backgroundColor = 'var(--skill-bar)';
                } else {
                    balls[0].style.backgroundColor = 'var(--text-color)';
                }

                if ((window.scrollY - 700) >= 270) {
                    balls[1].style.backgroundColor = 'var(--skill-bar)';
                } else {
                    balls[1].style.backgroundColor = 'var(--text-color)';
                }

                if ((window.scrollY - 700) >= 500) {
                    balls[2].style.backgroundColor = 'var(--skill-bar)';
                } else {
                    balls[2].style.backgroundColor = 'var(--text-color)';
                }
            } else {
                el.current.style.height = `${window.scrollY - 700 < 0 ? 0 : window.scrollY - 700 > 780 ? 780 : window.scrollY - 700}px`
            }
        }

        function handleScroll() {
            requestAnimationFrame(animation);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.skillsbar}>
            <div ref={el} className={styles.circle}></div>

            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>

            <div className={styles.bar}></div>

            
        </div>
    )
}