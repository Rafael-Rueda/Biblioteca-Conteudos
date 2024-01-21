import styles from './styles/styles.module.css';
import {ReactComponent as BirdSVG} from './images/bird.svg';

export function Birds() {
    return (
        <div className={styles.birds}>
            <BirdSVG />
            <BirdSVG />
            <BirdSVG />
            <BirdSVG />
            <BirdSVG />
            <BirdSVG />
            <BirdSVG />
        </div>
    )
}