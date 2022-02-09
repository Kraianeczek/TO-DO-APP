import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss'

const Favorite = () => {
    const favCards = useSelector(getFavoriteCards);
    console.log('fav', favCards)
    return (
        <section className={styles.container}>
            <div className={styles.column}>
                <PageTitle>FAVORITE</PageTitle>
                <ul className={styles.cards}>
                    {favCards.map(card => <Card key={card.id} {...card}/>)}
                </ul>
            </div>
        </section>
    )
}

export default Favorite;