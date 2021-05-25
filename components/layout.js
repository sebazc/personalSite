import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import Mainpicture from './mainpicture';
import Container from 'react-bootstrap/Container';
import styles from '../styles/general.module.css';

const Layout = (props) => {
    return (
        <div className={styles.bigpage}>
            <Container>
                {/* <Mainpicture /> */}
                <Navigation />
                <main>
                    { props.children }
                </main>
                <Footer /> 
            </Container>
        </div>
    )
}

export default Layout
