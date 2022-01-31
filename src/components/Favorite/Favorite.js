import NavBar from '../NavBAr/NavBar';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss'

const Favorite = () => {
    return (
        <main>
            <NavBar />
            <div>
                <PageTitle>FAVORITE</PageTitle>
                <p className={styles.p}>Lorem ipsum</p>
            </div>
        </main>
    )
}

export default Favorite;