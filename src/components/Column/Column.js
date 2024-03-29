import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import styles from './Column.module.scss';
import { getFilteredCards } from '../../redux/cardsRedux.js';

const Column = (props) => {

    const cards = useSelector(state => getFilteredCards(state, props.id));

    return (
        <article className={styles.column}>
            <h1 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h1>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} {...card} />)}
            </ul>
            <CardForm columnId={props.id} />
        </article>
    )
}

export default Column;