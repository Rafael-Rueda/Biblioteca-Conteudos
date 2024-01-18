import { useEffect } from 'react';
import styles from './styles/styles.module.css';
import './styles/animations.css'

export function DarkMode() {
    useEffect(() => {
        const $frame = document.getElementById('frame-id01')
        const $circle = $frame.firstElementChild
        const $sun = $circle.firstElementChild
        const $moon = $sun.nextElementSibling
        const $sky = $moon.nextElementSibling
        const $ground = $sky.nextElementSibling
        const $flash = $circle.nextElementSibling

        function $day() {
            $sun.style.animation = 'cicle_sun_reverse .5s ease-in-out forwards';
            $sky.style.backgroundColor = 'skyblue';
            $ground.style.backgroundColor = 'palegoldenrod';
            $moon.style.animation = 'cicle_moon_reverse .5s ease-in-out forwards';
            $flash.style.display = 'block';
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            $flash.style.animation = 'flash_reverse .5s ease-in-out forwards';
            setTimeout(() => {
                $flash.style.display = 'none';
                document.getElementsByTagName('body')[0].style.overflow = 'auto';
            }, 500);
        };

        function $night() {
            $sun.style.animation = 'cicle_sun .5s ease-in-out forwards';
            $sky.style.backgroundColor = '#1a1c29';
            $ground.style.backgroundColor = '#3d3c2d';
            $moon.style.animation = 'cicle_moon .5s ease-in-out forwards';
            $flash.style.display = 'block';
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            $flash.style.animation = 'flash .5s ease-in-out backwards';
            setTimeout(() => {
                $flash.style.display = 'none';
                document.getElementsByTagName('body')[0].style.overflow = 'auto';
            }, 500);
        };

        let $toggleStateId01 = 0;
        let allowedId01 = true;

        function handleClick() {
            if ($toggleStateId01 === 0 && allowedId01) {
                $night();
                $toggleStateId01 = 1;
                allowedId01 = false;
                setTimeout(() => {
                    allowedId01 = true;
                }, 500);
            } else if (allowedId01) {
                $day();
                $toggleStateId01 = 0;
                allowedId01 = false;
                setTimeout(() => {
                    allowedId01 = true;
                }, 500);
            };
        }

        $circle.addEventListener('click', handleClick);

        return () => {
            $circle.removeEventListener('click', handleClick);
        }
    }, []);
    return (
        <div className={`${styles.frame}`} id="frame-id01">
            <div className={`${styles.circle}`}>
                <div className={`${styles.circle_sun}`}>
                    <div className={`${styles.rays}`}>
                        <span className={`${styles.ray} ${styles.ray1}`}></span>
                        <span className={`${styles.ray} ${styles.ray2}`}></span>
                        <span className={`${styles.ray} ${styles.ray3}`}></span>
                        <span className={`${styles.ray} ${styles.ray4}`}></span>
                        <span className={`${styles.ray} ${styles.ray5}`}></span>
                        <span className={`${styles.ray} ${styles.ray6}`}></span>
                    </div>
                    <div className={`${styles.sun}`}></div>
                </div>
                <div className={`${styles.circle_moon}`}>
                    <div className={`${styles.moon}`}></div>
                </div>
                <div className={`${styles.sky}`}></div>
                <div className={`${styles.ground}`}></div>
            </div>
            <div className={`${styles.flash}`}></div>
        </div>
    );
}