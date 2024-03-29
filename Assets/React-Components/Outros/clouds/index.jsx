import { useEffect } from 'react';
import { ReactComponent as CloudsSVG } from './images/clouds2.svg';
import styles from './styles/styles.module.css';

export function Clouds() {

    useEffect(() => {
        const $cloud1 = document.getElementById('cloud__01__svg');
        const $cloud2 = document.getElementById('cloud__02__svg');

        function getCurrentTranslate(el) {
            const computedStyle = window.getComputedStyle(el);
            const transformValue = computedStyle.getPropertyValue('transform');

            // Parse the matrix values from the transform string
            const matrix = new DOMMatrix(transformValue);

            // Extract the translateX and translateY value from the matrix
            const translateX = matrix.m41;
            const translateY = matrix.m42;

            return [translateX, translateY];
        }

        function moveElement(el, position, lr) {
            let [currentX, currentY] = getCurrentTranslate(el);

            if (position < 408 && position > -380) {
                el.style.transition = 'transform 1s ease';
                el.style.transform = `translate(${window.innerWidth > 1300 ? (lr === 'left' ? -300 : 475) : (lr === 'left' ? -500 : 500)}px, ${currentY}px)`;
            } else {
                el.style.transition = 'transform 1s ease';
                
                lr === 'right' ?
                el.style.transform = `translate(161.815px, ${currentY}px)` :
                el.style.transform = `translate(-1.662px, ${currentY}px)`;
                
            };
        };

        function elementCalc(el, lr) {
            let position = Number(el.getBoundingClientRect()['y']);

            // Use these lines instead of "moveElement()" if the moveElement function turns complex and slow.

            // let [currentX, currentY] = getCurrentTranslate(el);
            // if ((position < 408 && position > -380) || (el.style.transform !== `translate(0px, ${currentY}px)`)) { moveElement(el, position, lr);}
            moveElement(el, position, lr);
        };


        function handleScroll() {
            // Use these lines instead of just "elementCalc()" if the animation gets freezy.

            // window.requestAnimationFrame(() => {
            //     elementCalc($cloud1, 'left');
            //     elementCalc($cloud2, 'right');
            // });

            elementCalc($cloud1, 'left');
            elementCalc($cloud2, 'right');
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <div className={styles.svg}>
            <CloudsSVG />
        </div>
    )
}