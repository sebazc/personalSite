import React from 'react';
// import { Container } from 'react-bootstrap';
import styles from '../styles/footer.module.css';
import Section from "../components/section";


const Footer = () => {
    return (
        <div className="text-center sticky-bottom">

            <Section><hr className={styles.horizontalLine}/></Section>
            <h2>Footer</h2>
            <p className="">Conntact me at seba.azc@gmail.com</p>
        </div>
    )
}

export default Footer
