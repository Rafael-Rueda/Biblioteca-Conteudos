import P from 'prop-types';
import styles from './styles/styles.module.css';
import { useEffect, useState } from 'react';

export function AnimatedTitle({ headings, tag }) {

    const [title, setTitle] = useState(headings[0]);
    const [headingComponent, setHeadingComponent] = useState(null);

    useEffect(() => {
        switch (tag) {
            case 'h1':
                setHeadingComponent(<h1 className={styles.heading}>{title}</h1>);
                break;
            case 'h2':
                setHeadingComponent(<h2 className={styles.heading}>{title}</h2>);
                break;
            case 'h3':
                setHeadingComponent(<h3 className={styles.heading}>{title}</h3>);
                break;
            case 'h4':
                setHeadingComponent(<h4 className={styles.heading}>{title}</h4>);
                break;
            case 'h5':
                setHeadingComponent(<h5 className={styles.heading}>{title}</h5>);
                break;
            case 'h6':
                setHeadingComponent(<h6 className={styles.heading}>{title}</h6>);
                break;
            default:
                setHeadingComponent(null);
                break;
        }
    }, [title, tag]);

    useEffect(() => {
        let currentIndex = 1;

        const intervalId = setInterval(() => {
            setTitle(headings[currentIndex]);
            currentIndex = (currentIndex + 1) % headings.length;
        }, 5000)

        return () => clearInterval(intervalId);
    }, [headings]);

    return (
        <>
            {headingComponent}
        </>
    )
}

AnimatedTitle.propTypes = {
    headings: P.arrayOf(P.string),
    tag: P.string
}
