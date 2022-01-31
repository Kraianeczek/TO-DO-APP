import NavBar from '../NavBAr/NavBar';
import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss'

const About = () => {
    return (
        <main>
            <NavBar />
            <div>
                <PageTitle>ABOUT</PageTitle>
                <p className={styles.p}>Lorem ipsum</p>
            </div>
        </main>
    )
}

export default About;